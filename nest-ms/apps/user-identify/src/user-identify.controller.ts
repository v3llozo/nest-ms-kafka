import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { SerializerService } from './serializer.service';
import { ITransaction, TOPICS } from '@app/lib-kafka';
import { UserIdentifyService } from './user-identify.service';
import { KafkaService } from '@app/lib-kafka';

@Controller()
export class UserIdentifyController {
	constructor(
		private readonly userIdentifyService: UserIdentifyService,
		private serializer: SerializerService,
		private kafkaService: KafkaService
	) {
		console.log('UserIdentifyController.constructor');
		this.kafkaService.setClientId('user-identify', 'user-identify');
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
		this.userIdentifyService.dispatchMessage(transaction);
		return res.status(200).send({ message: 'Sended for identification' });
	}

	/**
	 * Recives via HTTP a request to search in a topic history
	 */
	@Get('search/:uuid')
	searchInTopic(@Req() req, @Res() res) {
		const uuid = req.params.uuid;
		console.log('UserIdentifyController.searchInTopic:uuid: ', uuid);
		return res.send({ message: 'Searched', result: 0 });
	}

	/**
	 * Listen
	 */
	@MessagePattern(TOPICS.UserIdentifyRecivedDocuments)
	reciveMessage(@Payload() message: ITransaction, @Ctx() context) {
		console.log(
			`[UserIdentifyController:reciveMessage | Topic:${context.getTopic()} | Message:`
		);
		console.log(message);

		// this.userIdentifyService.identifyUser();
	}
}
