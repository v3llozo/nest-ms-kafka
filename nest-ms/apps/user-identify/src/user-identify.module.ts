import { KafkaService } from '@app/lib-kafka';
import { Module } from '@nestjs/common';
import { SerializerService } from './serializer.service';
import { UserIdentifyController } from './user-identify.controller';
import { UserIdentifyService } from './user-identify.service';
import { ValidatorController } from './validator.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
	imports: [
		// ClientsModule.register([
		// 	{
		// 		name: 'KAFKA_SERVICE',
		// 		transport: Transport.KAFKA,
		// 		options: {
		// 			client: {
		// 				clientId: 'user-identify',
		// 				brokers: [process.env.KAFKA_BROKERS],
		// 			},
		// 			consumer: {
		// 				groupId:
		// 					'user-identify-' +
		// 					String(Math.floor(Math.random() * 1001)).padStart(4, '0'),
		// 			},
		// 		},
		// 	},
		// ]),
	],
	controllers: [UserIdentifyController, ValidatorController],
	providers: [UserIdentifyService, SerializerService, KafkaService],
})
export class UserIdentifyModule {}
