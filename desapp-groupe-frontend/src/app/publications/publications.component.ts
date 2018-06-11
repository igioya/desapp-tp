import { Component, OnInit } from '@angular/core';
import { Publication } from '../../model/publication';
import { PUBLICATIONS } from '../../model/data';
import { PublicationService } from '../services/publication.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

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
              private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.getPublications();
  }

  editPublication(publication : Publication){
    console.log(publication);
    this.router.navigate(['editPublication', publication.id]);
  }

  publicationDetail(publication : Publication){
    this.router.navigate(['publicationDetail',publication.id]);
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

  isMyPublication(email:string){
    let em = this.authService.getUserLoggedIn().email;
    return em == email;
  }

}
