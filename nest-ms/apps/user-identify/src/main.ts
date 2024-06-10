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
					brokers: [process.env.KAFKA_BROKERS],
				},
			},
		}
	);
	await app.listen();

	const httpApp = await NestFactory.create(UserIdentifyModule);
	await httpApp.listen(3000);
}
bootstrap();
