import { NestFactory } from '@nestjs/core';
import { SrvKafkaModule } from './srv-kafka.module';

async function bootstrap() {
	const app = await NestFactory.create(SrvKafkaModule);
	await app.listen(process.env.PORT || 3001);
}
bootstrap();
