import { Injectable } from '@angular/core';
import { Person } from './person';
import { PERSONS } from './mock-persons';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private messageService: MessageService) { }

  // asynchronus
  getPersons(): Observable<Person[]> {
    this.messageService.add('PersonService: fetched persons');
    return of(PERSONS);
  }

  // asynchronus
  getPerson(id: number): Observable<Person> {
    this.messageService.add(`PersonsService: fetched persons id=${id}`);
    return of(PERSONS.find(person => person.id === id));
  }

  // synchronus
  /*getPersons(): Person[] {
    return PERSONS;
  }*/
}
