import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicationService } from '../services/publication.service';
import { Publication } from '../../model/publication';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css']
})
export class PublicationDetailComponent implements OnInit {
	publication: Publication;
	constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
			  private publicationService: PublicationService,
			  private authService: AuthenticationService ) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
		    let idPublication = params.id;
		    this.publicationService.getPublication(idPublication).subscribe(publication => {
		    	this.publication = publication;
		    	console.log(publication);
		    });
		});
	}

	makeReservation(){
		//Checkear que la la publicacion que se quiere reservar no sea una publicacion del usuario logueado.
		//Chequear que el usuario tenga fullProfile.
		let haveFullProfile = this.authService.getUserLoggedIn().haveFullProfile;
		if(haveFullProfile){
			this.router.navigate([this.router.url + '/makeReservation'])			
		} else {
			this.router.navigate(['/userProfile'])
		}
	}

	isMyPublication(email:string){
		let em = this.authService.getUserLoggedIn().email;
		return em == email;
	  }

	  editPublication(publication : Publication){
		console.log(publication);
		this.router.navigate(['editPublication', publication.id]);
	  }

	  deletePublication(id:number){
		this.publicationService.deletePublication(id);
		this.router.navigate(['']);


	  }

}
