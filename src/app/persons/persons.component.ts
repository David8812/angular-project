import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  person: Person = {
      id: 1,
      name: 'David',
      lastName: 'Montero Sifontes',
      age: 29
  };

  constructor() { }

  ngOnInit() {
  }

}
