import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {ClassroomService} from '../../../shared-services/classroom/classroom.service';
import {RolService} from '../../../shared-services/rol/rol.service';
import {UserService} from '../../../shared-services/user/user.service';
import {SessionService} from '../../../shared-services/session/session.service';
import {PersonService} from '../../../shared-services/person/person.service';
import {Person, Classroom, User, Rol} from '../../../models/api';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  @Input() modeAction: string;
  @Input() rol: number;
  @Input() classroom: Classroom;
  @Input() person: Person;
  @Output() finish: EventEmitter<{finished: boolean}> = new EventEmitter<{finished: boolean}>();

  selectedClassroom: Classroom;
  classrooms: any[];
  withPassword: boolean;
  user: User;
  rolUser: Rol;
  userIdSession: number;
  rolNameSession: string;
  isPersonDisabled: boolean;
  isUserDisabled: boolean;

  constructor(
    private sessionService: SessionService,
    private classroomService: ClassroomService,
    private rolService: RolService,
    private userService: UserService,
    private personService: PersonService
  ) {
    this.user = new User();
    this.userIdSession = this.sessionService.USERID;
    this.rolNameSession = this.sessionService.USER;
  }

  ngOnInit() {
    this.getClassrooms(this.userIdSession, this.rolNameSession);
    this.getRol();
    this.verifyPassword();
    if(this.modeAction === 'new'){
      this.person = new Person();
      this.isPersonDisabled = false;
      this.isUserDisabled = false;
    } else {
      this.getUser(this.person.PersonId, this.rolUser.RolId);
      this.isPersonDisabled = true;
      this.isUserDisabled = true;
    }

  }

  back() {
    this.finish.emit({finished: true});
  }

  save(){
    this.personService.savePerson(this.person)
      .subscribe(
      res => {
        console.log('[PERSON RESPONSE]: ', res);
        this.user.PersonId = res.PersonId;
        this.user.RolId = this.rolUser.RolId;
        this.userService.saveUser(this.user)
          .subscribe(
            success => {
              this.finish.emit({finished: true});
            }
          );

      }
    );
  }

  getClassrooms(
    user: number,
    rol: string
  ){
    this.classrooms = [
      {label: 'Seleccionar clase', value: null}
    ];
    this.classroomService.getClassrooms(user, rol)
      .subscribe(
        res => {
          console.log('[SERVICE CLASSROOM]: ', this.classrooms);
          res.map( classroom => {
            this.classrooms.push({label: classroom.Name, value: classroom});
          });
          this.classrooms = [... this.classrooms];
          this.selectedClassroom = this.classroom;
        }
      )
  }

  onClassroomChange(
    event
  ){
    this.verifyPassword();
    this.user.Password = null;
    if(this.selectedClassroom != null){
      this.user.Password = this.selectedClassroom.Password;
    }
  }

  verifyPassword(){
    if(this.selectedClassroom == null){
      this.withPassword = true;
    } else {
      this.withPassword = false;
    }
  }

  getRol() {
    this.rolUser = this.rolService.findRoldById(this.rol);
  }
  getUser(
    personId: number,
    rolId: number
  ) {
    this.userService.getUserByIdPerson(personId, rolId)
      .subscribe(
        res => {
          if(res != null){
            this.user = res;
          }
        }
      )
  }

}
