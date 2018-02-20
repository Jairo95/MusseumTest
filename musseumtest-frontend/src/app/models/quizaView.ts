import {QuestionView} from './questionView';
export class QuizaView {
  QuizId: number;
  Description: string;
  Observation: string;
  LevelId: number;
  UserCreate: number;
  Scope: number;
  Questions: QuestionView[] = [];
}
