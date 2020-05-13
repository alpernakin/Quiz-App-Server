import { QUIZ_MODEL, DATABASE_CONNECTION } from './constants';
import { Connection } from 'mongoose';
import { QuizSchema } from './model.schema';

export const quizProviders = [
    {
        provide: QUIZ_MODEL,
        useFactory: (connection: Connection) => connection.model('Quiz', QuizSchema),
        inject: [DATABASE_CONNECTION]
    }
];