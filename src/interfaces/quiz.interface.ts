export interface Quiz {
    id: string;
    creator: string;
    questions: Question[];
}

export interface Question {
    question: string;
    options: string[];
    correctIndex: number;
}