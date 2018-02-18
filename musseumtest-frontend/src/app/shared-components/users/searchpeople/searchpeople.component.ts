import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {PersonService} from '../../../shared-services/person/person.service';

import {Person} from '../../../models/api';


@Component({
  selector: 'app-searchpeople',
  templateUrl: './searchpeople.component.html',
  styleUrls: ['./searchpeople.component.css']
})
export class SearchpeopleComponent implements OnInit {

  @Input() rol: number;
  @Output() onPersonSelectedEvent: EventEmitter<{person: Person}> = new EventEmitter();

  cols: any[];
  people: Person[];
  selectedPerson: Person;

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.definePersonCols();
    this.getPeople();
  }

  getPeople(){
    this.personService.getPeople(
      this.rol,
      1
    ).subscribe(
      res => {
        console.log('[RESPONSE]: ', res);
        this.people = res;
      }
    )
  }
  onPersonSelected() {
    console.log('[PERSON SELECTED]: ', this.selectedPerson);
    this.onPersonSelectedEvent.emit({person: this.selectedPerson});
  }

  definePersonCols() {
    this.cols = [
      { field: 'Name', header: 'Nombre' },
      { field: 'LastName', header: 'Apellido' },
      { field: 'Email', header: 'Correo' },
      { field: 'Identity', header: 'Cedula' },
      { field: 'Phone', header: 'Teléfono' }
    ];
  }


}
