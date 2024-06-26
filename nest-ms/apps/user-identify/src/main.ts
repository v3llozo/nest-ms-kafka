import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UserIdentifyModule } from './user-identify.module';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		UserIdentifyModule,
		{
			transport: Transport.KAFKA,
			options: {
				client: {
					brokers: [process.env.KAFKA_BROKERS],
				},
				consumer: {
					groupId: 'user-identify',
				},
			},
		}
	);
	await app.listen();

	const httpApp = await NestFactory.create(UserIdentifyModule);
	await httpApp.listen(process.env.PORT || 3000);
}
bootstrap();
