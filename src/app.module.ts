import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { DatabaseModule } from './database/database.module';
import { quizProviders } from './database/model.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [QuizController],
    providers: [
        QuizService,
        ...quizProviders
    ],
})
export class AppModule { }
