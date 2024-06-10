import { Module } from '@nestjs/common';
import { UserExternalDocsController } from './user-external-docs.controller';
import { UserExternalDocsService } from './user-external-docs.service';
// import { KafkaService } from '@app/lib-kafka';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'Kafka-service',
				transport: Transport.KAFKA,
				options: {
					client: {
						clientId: 'user-external-docs',
						brokers: [process.env.KAFKA_BROKERS],
					},
					consumer: {
						groupId: 'user-external-docs-consumer',
					},
				},
			},
		]),
	],
	controllers: [UserExternalDocsController],
	providers: [UserExternalDocsService],
})
export class UserExternalDocsModule {}
