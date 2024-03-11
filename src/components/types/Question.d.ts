export interface QuestionProps {
  contents: QuestionContent;
  selectOption: (answer: string, id: number) => void;
}
export interface QuestionContent {
  question: {
    id: number;
    content: string;
    type: string;
  };
  answer: {
    answer: string;
    answerTime: string;
    answerTimeWithSeconds: number;
  };
}
