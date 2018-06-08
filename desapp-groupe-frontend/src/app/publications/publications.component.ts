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

	publications;
  searchTerm:String = "";
  p: number = 1;

  constructor(private publicationService: PublicationService,
              private router: Router) {
  }

  ngOnInit() {
    this.getPublications();
  }

  editPublication(publication : Publication){
    //VER COMO SE PASA EL PARAMETRO AL OTRO COMPONENTE
    this.router.navigate(['editPublication']);
  }

  deletePublication(id:number){
    this.publicationService.deletePublication(id);
  }

  setSearchTerm(event, term){
    this.searchTerm = term;
    if(event.key === "Enter"){this.search()};      
  }
  
  search(){
    if(!(this.searchTerm.trim() === "")){
      this.publicationService.filterPublications(this.searchTerm).subscribe(
         data => { this.publications = data
          console.log(data)},
         err => console.error(err),
         () => console.log('done loading vehicles')
      );
    } else {
      this.getPublications();
    }
  }

  getPublications() {
    this.publicationService.getAllPublications().subscribe(
       data => { this.publications = data
        console.log(data)},
       err => console.error(err),
       () => console.log('done loading vehicles')
    );
  }

}
