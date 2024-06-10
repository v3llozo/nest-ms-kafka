import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
	// @Client({
	// 	transport: Transport.KAFKA,
	// 	options: {
	// 		client: {
	// 			clientId: 'kafka-service',
	// 			brokers: [process.env.KAFKA_BROKERS],
	// 		},
	// 		consumer: {
	// 			groupId: 'test',
	// 		},
	// 	},
	// })
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
