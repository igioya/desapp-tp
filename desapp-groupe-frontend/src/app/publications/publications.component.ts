import { Component, OnInit } from '@angular/core';
import { Publication } from '../../model/publication';
import { PUBLICATIONS } from '../../model/publications';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})

export class PublicationsComponent implements OnInit {

	publications = PUBLICATIONS

  constructor() { }

  ngOnInit() {
  }

  verMas(){

  }

}
