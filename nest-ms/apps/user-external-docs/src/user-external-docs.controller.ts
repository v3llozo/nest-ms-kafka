import { ITransaction, TOPICS } from '@app/lib-kafka';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { UserExternalDocsService } from './user-external-docs.service';

@Controller()
export class UserExternalDocsController {
	constructor(
		private readonly userExternalDocsService: UserExternalDocsService
	) {
		console.log('UserExternalDocsController.constructor');
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
	 * Listen
	 */
	@MessagePattern(TOPICS.UserIdentifySendDocuments)
	async recivedDocuments(@Payload() message: ITransaction, @Ctx() context) {
		console.log(
			'UserExternalDocsController:recivedDocuments:message: ',
			message
		);
		return this.userExternalDocsService.recivedDocuments(message);
	}
}
