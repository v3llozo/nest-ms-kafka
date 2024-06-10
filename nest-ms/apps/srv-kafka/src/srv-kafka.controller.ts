import { Controller, Get } from '@nestjs/common';
import { SrvKafkaService } from './srv-kafka.service';

@Controller()
export class SrvKafkaController {
	constructor(private readonly srvKafkaService: SrvKafkaService) {}

	@Get()
	getHello(): string {
		return this.srvKafkaService.getHello();
	}
}
