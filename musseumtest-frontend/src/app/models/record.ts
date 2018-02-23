import {User} from './user';

export class Record {
  RecordId: number;
  DateStart: string;
  DateEnd: string;
  Grade: number;
  UserId: number;
  QuizId: number;
  User: User = new User();

}
