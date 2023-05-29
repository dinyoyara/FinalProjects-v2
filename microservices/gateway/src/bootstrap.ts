import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

export async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule, { cors: true });
    await app.listen(4000);
}
