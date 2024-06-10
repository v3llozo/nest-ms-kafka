import { Test, TestingModule } from '@nestjs/testing';
import { SrvKafkaController } from './srv-kafka.controller';
import { SrvKafkaService } from './srv-kafka.service';

describe('SrvKafkaController', () => {
	let srvKafkaController: SrvKafkaController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [SrvKafkaController],
			providers: [SrvKafkaService],
		}).compile();

		srvKafkaController = app.get<SrvKafkaController>(SrvKafkaController);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(srvKafkaController.getHello()).toBe('Hello World!');
		});
	});
});
