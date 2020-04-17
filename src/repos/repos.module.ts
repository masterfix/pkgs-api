import { Module } from '@nestjs/common';
import { ReposController } from './repos.controller';

@Module({
    controllers: [ReposController]
})
export class ReposModule { }
