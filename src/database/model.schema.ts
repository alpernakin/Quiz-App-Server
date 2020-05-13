import * as mongoose from 'mongoose';

export const QuizSchema = new mongoose.Schema({
    creator: String,
    createdAt: Date,
    questions: [{
        question: String,
        options: [String],
        correctIndex: Number
    }]
});