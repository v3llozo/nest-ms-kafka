import { Module } from '@nestjs/common';
import { UserIdentifyController } from './user-identify.controller';
import { UserIdentifyService } from './user-identify.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SerializerService } from './serializer.service';
import { ValidatorController } from './validator.service';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'FIBO_SERVICE',
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
			},
		]),
	],
	controllers: [UserIdentifyController, ValidatorController],
	providers: [UserIdentifyService, SerializerService],
})
export class UserIdentifyModule {}
