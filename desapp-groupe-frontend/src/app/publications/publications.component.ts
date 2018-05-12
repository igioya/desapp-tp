import { Component, OnInit } from '@angular/core';
import { Publication } from '../../model/publication';
import { PUBLICATIONS } from '../../model/data';
import { PublicationService } from '../services/publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})

export class PublicationsComponent implements OnInit {

	publications = PUBLICATIONS

  constructor(private publicationService: PublicationService,
              private router: Router) { 
  }

  ngOnInit() {

    //this.getPublications();

    }

    editPublication(publication : Publication){
      //VER COMO SE PASA EL PARAMETRO AL OTRO COMPONENTE
      this.router.navigate(['editPublication']);
    }
  
    deletePublication(id:number)
    {
      this.publicationService.deletePublication(id);
    }
  

  getPublications() {
      this.publicationService.getAllPublications().subscribe(
        
         data => { this.publications = data
          console.log(data)},
         err => console.error(err),
         () => console.log('done loading publications')
       );
     }

}
