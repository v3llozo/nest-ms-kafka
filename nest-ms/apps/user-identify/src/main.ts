import { NestFactory } from '@nestjs/core';
import { UserIdentifyModule } from './user-identify.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		UserIdentifyModule,
		{
			transport: Transport.KAFKA,
			options: {
				client: {
					clientId: 'user-identify',
					brokers: ['kafka:9092'],
				},
				consumer: {
					groupId: 'test',
				},
			},
		}
	);
	await app.listen();

	const httpApp = await NestFactory.create(UserIdentifyModule);
	await httpApp.listen(3000);
}
bootstrap();
