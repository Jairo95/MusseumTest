import {Status} from './status';

export class Answer {
  Description : string;
  Observation : string;
  StatusId : number;
  QuestionId : number;
  Status: Status = new Status();
}
