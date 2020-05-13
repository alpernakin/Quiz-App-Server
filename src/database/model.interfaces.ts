import { Document } from "mongoose";

export interface QuizDoc extends Document {
    readonly _id: any;
    readonly creator: string;
    readonly questions: {
        question: string,
        options: string[],
        correctIndex: number
    }[]
}