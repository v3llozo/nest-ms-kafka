import { KafkaService, TOPICS } from '@app/lib-kafka';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserExternalDocsService {
	constructor(private kafkaService: KafkaService) {
		this.kafkaService.setClientId('user-external-docs', 'user-external-docs');
	}

	getHello(): string {
		console.log('UserExternalDocsService');
		return 'UserExternalDocsService';
	}

	recivedDocuments(body: any) {
		console.log('UserExternalDocsService:recivedDocuments');
		console.dir(body);
		this.kafkaService.client.emit(TOPICS.UserIdentifyRecivedDocuments, {
			key: body.userUuid,
			value: {
				userUuid: body.userUuid,
				docStatus: 'OK',
			},
		});
		return 'OK';
	}

	recivedWebhook(body: any) {
		console.log('UserExternalDocsService:recivedWebhook:body: ', body);
		return;
	}
}
