import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PERSONS } from '../mock-persons';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons = PERSONS;

  person: Person;

  onSelect(person: Person): void {
    this.person = person;
  }

  constructor() { }

  ngOnInit() {
  }

}
