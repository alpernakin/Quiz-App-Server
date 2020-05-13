import { Test, TestingModule } from '@nestjs/testing';
import { QuizController } from './quiz.controller';
import { QuizService } from '../services/quiz.service';

describe('AppController', () => {
    let appController: QuizController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [QuizController],
            providers: [QuizService],
        }).compile();

        appController = app.get<QuizController>(QuizController);
    });

    describe('root', () => {
        
    });
});
