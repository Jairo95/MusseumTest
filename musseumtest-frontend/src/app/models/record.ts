import {User} from './user';

export class Record {
  RecordId: number;
  DateStart: Date;
  DateEnd: Date;
  Grade: number;
  UserId: number;
  QuizId: number;
  User: User = new User();

}
