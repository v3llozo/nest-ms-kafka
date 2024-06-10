import { NestFactory } from '@nestjs/core';
import { UserExternalDocsModule } from './user-external-docs.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		UserExternalDocsModule,
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

	const httpApp = await NestFactory.create(UserExternalDocsModule);
	await httpApp.listen(process.env.PORT || 3003);
}
bootstrap();
