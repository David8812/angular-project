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

  // synchronus
  /*getPersons(): Person[] {
    return PERSONS;
  }*/
}
