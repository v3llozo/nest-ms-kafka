import { Injectable } from '@nestjs/common';

@Injectable()
export class SrvKafkaService {
	getHello(): string {
		return 'Hello World!';
	}
}
