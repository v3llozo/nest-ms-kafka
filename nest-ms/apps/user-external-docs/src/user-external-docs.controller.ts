import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UserExternalDocsService } from './user-external-docs.service';
import {
	ClientKafka,
	Ctx,
	MessagePattern,
	Payload,
} from '@nestjs/microservices';
import { ITransaction, TOPICS } from '@app/lib-kafka';

@Controller()
export class UserExternalDocsController {
	constructor(
		@Inject('Kafka-service') private kafka: ClientKafka,
		private readonly userExternalDocsService: UserExternalDocsService
	) {
		console.log('UserExternalDocsController');
		console.log(this.kafka.getConsumerAssignments());
	}

	@Get()
	getHello(): string {
		return this.userExternalDocsService.getHello();
	}

	@Post('webhook')
	async recivedWebhook(@Body() body: any) {
		return this.userExternalDocsService.recivedWebhook(body);
	}

	/**
	 * Listen - TOPICS.UserIdentifySendDocuments
	 */
	@MessagePattern('userIdentify.send.documents')
	async recivedDocuments(@Payload() message: ITransaction, @Ctx() context) {
		console.log(
			'UserExternalDocsController:recivedDocuments:message: ',
			message
		);
		return this.userExternalDocsService.recivedDocuments(message);
	}
}
