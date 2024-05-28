import { Injectable } from '@nestjs/common';

@Injectable()
export class UserExternalDocsService {
	getHello(): string {
		return 'Hello World!';
	}
}
