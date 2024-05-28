import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import {
	Client,
	ClientKafka,
	Ctx,
	MessagePattern,
	Payload,
	Transport,
} from '@nestjs/microservices';
import { UserIdentifyService } from './user-identify.service';
import { SerializerService } from './serializer.service';
import { ITransaction } from './transaction';

@Controller()
export class UserIdentifyController {
	@Client({
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
	})
	client: ClientKafka;

	constructor(
		private readonly userIdentifyService: UserIdentifyService,
		private serializer: SerializerService
	) {
		console.log('UserIdentifyController.constructor');
	}

	@Get()
	getHello(): string {
		return this.userIdentifyService.getHello();
	}

	/**
	 * Recives via HTTP a request to identify the user
	 * Dispatch a message to a topic to identify the user while return to the client a message
	 */
	@Post('')
	identifyUser(@Req() req, @Res() res) {
		const transaction: ITransaction = {
			userUuid: req.body.userUuid,
			uuid: req.body.uuid,
			createdAt: req.body.createdAt,
			origin: req.body.origin,
			data: req.body.data,
		};
		console.log(
			'UserIdentifyController.identifyUser:transaction:',
			transaction
		);

		// dispatch a message to a kafka topic
		this.client.emit('test', transaction);
		return res.status(200).send({ message: 'Sended for identification' });
	}

	@MessagePattern('test')
	reciveMessage(@Payload() message: ITransaction, @Ctx() context) {
		console.log(
			`[UserIdentifyController:reciveMessage | Topic:${context.getTopic()} | Message:`
		);
		console.log(message);

		// this.userIdentifyService.identifyUser();
	}
}
