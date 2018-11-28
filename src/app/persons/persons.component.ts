import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[];

  // only use to save a selected object
  // selectedPerson: Person;

  // use to select an object
  // onSelect(person: Person): void {
    // this.selectedPerson = person;
  // }

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  // for synchronus call
  /*getPersons(): void {
    this.persons = this.personService.getPersons();
  }*/

  // for asynchronus call
  getPersons(): void {
    this.personService.getPersons().subscribe(persons => this.persons = persons);
  }
}
