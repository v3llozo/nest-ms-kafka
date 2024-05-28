import { Test, TestingModule } from '@nestjs/testing';
import { UserExternalDocsController } from './user-external-docs.controller';
import { UserExternalDocsService } from './user-external-docs.service';

describe('UserExternalDocsController', () => {
	let userExternalDocsController: UserExternalDocsController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [UserExternalDocsController],
			providers: [UserExternalDocsService],
		}).compile();

		userExternalDocsController = app.get<UserExternalDocsController>(
			UserExternalDocsController
		);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(userExternalDocsController.getHello()).toBe('Hello World!');
		});
	});
});
