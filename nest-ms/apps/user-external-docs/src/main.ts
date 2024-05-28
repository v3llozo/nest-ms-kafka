import { NestFactory } from '@nestjs/core';
import { UserExternalDocsModule } from './user-external-docs.module';

async function bootstrap() {
	const app = await NestFactory.create(UserExternalDocsModule);
	await app.listen(3002);
}
bootstrap();
