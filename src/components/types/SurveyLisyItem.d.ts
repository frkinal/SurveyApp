import {QuestionContent} from './Question';
export interface SurveyListItemProps {
  contents: SurveyListItemContent;
}
export interface SurveyListItemContent {
  title: string;
  date: string;
  time: string;
  point: number;
  questions: Array<QuestionContent>;
}
