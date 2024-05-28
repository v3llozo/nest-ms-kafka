import { Controller, Get } from '@nestjs/common';
import { UserExternalDocsService } from './user-external-docs.service';

@Controller()
export class UserExternalDocsController {
	constructor(
		private readonly userExternalDocsService: UserExternalDocsService
	) {}

	@Get()
	getHello(): string {
		return this.userExternalDocsService.getHello();
	}
}
