import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { QUIZ_MODEL } from 'src/database/constants';
import { Quiz } from 'src/interfaces/quiz.interface';
import { QuizDoc } from 'src/database/model.interfaces';
import * as mongoose from 'mongoose';

@Injectable()
export class QuizService {

    constructor(
        @Inject(QUIZ_MODEL) private quizModel: Model<QuizDoc>) { }

    /**
     * It saves the `quiz` and returns the id in the db.
     * 
     * @param quiz
     * @returns Quiz Id
     */
    async saveQuiz(quiz: Quiz): Promise<string> {
        const quizDoc = await this.quizModel.create(quiz);
        return quizDoc._id;
    }

    /**
     * @param id Quiz Id
     * @returns Quiz from the db.
     */
    async getQuiz(id: string): Promise<Quiz> {
        const quizDoc = await this.quizModel.findById(id).exec();
        return {
            id: quizDoc._id,
            creator: quizDoc.creator,
            questions: quizDoc.questions.map(x => ({
                question: x.question,
                options: x.options,
                correctIndex: x.correctIndex
            }))
        };
    }
}
