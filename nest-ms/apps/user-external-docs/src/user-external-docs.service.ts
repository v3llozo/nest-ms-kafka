import { Injectable } from '@nestjs/common';

@Injectable()
export class UserExternalDocsService {
	getHello(): string {
		console.log('UserExternalDocsService');
		return 'UserExternalDocsService';
	}

	recivedDocuments(body: any) {
		return 'UserExternalDocsService:recivedDocuments';
	}

	recivedWebhook(body: any) {
		console.log('UserExternalDocsService:recivedWebhook:body: ', body);
		return;
	}
}
