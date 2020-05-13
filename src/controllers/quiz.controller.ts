import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { Quiz } from 'src/interfaces/quiz.interface';

@Controller('quiz')
export class QuizController {
    
    constructor(private readonly quizService: QuizService) { }

    @Post('save')
    async save(@Body() requestBody: Quiz): Promise<string> {

        return this.quizService.saveQuiz(requestBody);
    }

    @Get('/get/:id')
    async get(@Param('id') id: string): Promise<Quiz> {
        
        return this.quizService.getQuiz(id);
    }
}