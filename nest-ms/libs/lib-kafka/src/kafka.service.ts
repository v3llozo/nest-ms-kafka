import { Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
	client: ClientKafka;
	constructor() {
		this.client = new ClientKafka({
			client: {
				clientId: 'kafka-service',
				brokers: [process.env.KAFKA_BROKERS],
			},
		});
	}

	async setClientId(clientId: string, groupId: string) {
		this.client = new ClientKafka({
			client: {
				clientId: clientId,
				brokers: [process.env.KAFKA_BROKERS],
			},
			consumer: {
				groupId: groupId,
			},
		});
		await this.client.connect();
	}
}
