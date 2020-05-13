import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from './constants';
import { Module } from '@nestjs/common';

export const databaseProviders = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://localhost:27017/quiz'),
    },
];

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule { }