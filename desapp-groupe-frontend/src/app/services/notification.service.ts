import { Injectable } from '@angular/core';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService {
	style = 'material';
	title = 'Snotify title!';
	body = 'Lorem ipsum dolor sit amet!';
	timeout = 3000;
	position: SnotifyPosition = SnotifyPosition.rightBottom;
	progressBar = false;
	closeClick = true;
	newTop = true;
	backdrop = -1;
	dockMax = 8;
	blockMax = 6;
	pauseHover = true;
	titleMaxLength = 15;
	bodyMaxLength = 80;

	constructor(public snotifyService: SnotifyService) { }

	getConfig(): SnotifyToastConfig {
		this.snotifyService.setDefaults({
		  global: {
		    newOnTop: this.newTop,
		    maxAtPosition: this.blockMax,
		    maxOnScreen: this.dockMax,
		  }
		});
		return {
		  bodyMaxLength: this.bodyMaxLength,
		  titleMaxLength: this.titleMaxLength,
		  backdrop: this.backdrop,
		  position: this.position,
		  timeout: this.timeout,
		  showProgressBar: this.progressBar,
		  closeOnClick: this.closeClick,
		  pauseOnHover: this.pauseHover
		};
	}

	getService(){
		return this.snotifyService;
	}

	onSuccess(title,body) {
    	this.snotifyService.success(body, title, this.getConfig());
	}

	onInfo(title,body) {
		this.snotifyService.info(body, title, this.getConfig());
	}

	onError(title, body) {
		this.snotifyService.error(body, title, this.getConfig());
	}

	onWarning(title,body) {
		this.snotifyService.warning(body, title, this.getConfig());
	}

	onSimple() {
		// const icon = `assets/custom-svg.svg`;
		const icon = `https://placehold.it/48x100`;

		this.snotifyService.simple(this.body, this.title, {
		  ...this.getConfig(),
		  icon: icon
		});
	}

	onAsyncLoading() {
	    const errorAction = Observable.create(observer => {
	      setTimeout(() => {
	        observer.error({
	          title: 'Error',
	          body: 'Example. Error 404. Service not found',
	        });
	      }, 2000);
	    });

	    const successAction = Observable.create(observer => {
	      setTimeout(() => {
	        observer.next({
	          body: 'Still loading.....',
	        });
	      }, 2000);

	      setTimeout(() => {
	        observer.next({
	          title: 'Success',
	          body: 'Example. Data loaded!',
	          config: {
	            closeOnClick: true,
	            timeout: 5000,
	            showProgressBar: true
	          }
	        });
	        observer.complete();
	      }, 5000);
	    });

	    /*
	      You should pass Promise or Observable of type Snotify to change some data or do some other actions
	      More information how to work with observables:
	      https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md
	     */
	    const {timeout, ...config} = this.getConfig(); // Omit timeout
	    this.snotifyService.async('This will resolve with error', 'Async', errorAction, config);
	    this.snotifyService.async('This will resolve with success', successAction, config);
	    this.snotifyService.async('Called with promise', 'Error async',
	      new Promise((resolve, reject) => {
	        setTimeout(() => reject({
	          title: 'Error!!!',
	          body: 'We got an example error!',
	          config: {
	            closeOnClick: true
	          }
	        }), 1000);
	        setTimeout(() => resolve(), 1500);
	      }), config);
	  }

	onConfirmation(title,body,buttons) {
	    /*
	    Here we pass an buttons array, which contains of 2 element of type SnotifyButton
	     */
	    const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
	    this.snotifyService.confirm(body, title, {
	      ...config,
	      buttons: buttons
	    });
	}

	onPrompt() {
	    /*
	     Here we pass an buttons array, which contains of 2 element of type SnotifyButton
	     At the action of the first button we can get what user entered into input field.
	     At the second we can't get it. But we can remove this toast
	     */
	    const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
	    this.snotifyService.prompt(this.body, this.title, {
	      ...config,
	      buttons: [
	        {text: 'Yes', action: (toast) => console.log('Said Yes: ' + toast.value) },
	        {text: 'No', action: (toast) => { console.log('Said No: ' + toast.value); this.snotifyService.remove(toast.id); }},
	      ],
	      placeholder: 'Enter "ng-snotify" to validate this input' // Max-length = 40
	    }).on('input', (toast) => {
	      console.log(toast.value)
	      toast.valid = !!toast.value.match('ng-snotify');
	    });
	}

	onHtml() {
	    const html = `<div class="snotifyToast__title"><b>Html Bold Title</b></div>
	    <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div>`;
	    this.snotifyService.html(html, this.getConfig());
	}


	onClear() {
	    this.snotifyService.clear();
	}

}
