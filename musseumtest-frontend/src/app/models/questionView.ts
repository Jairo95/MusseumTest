import {Answer} from './answer';
export class QuestionView {
  QuestionId: number;
  Description: string;
  Observation: string;
  CategoryId: number;
  Answers: Answer[] = [];
}
