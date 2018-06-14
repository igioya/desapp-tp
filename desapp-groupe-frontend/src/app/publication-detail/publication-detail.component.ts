import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicationService } from '../services/publication.service';
import { Publication } from '../../model/publication';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css']
})
export class PublicationDetailComponent implements OnInit {
	publication: Publication
	constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private publicationService: PublicationService) { }

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
		this.router.navigate([this.router.url + '/makeReservation'])
	}

}
