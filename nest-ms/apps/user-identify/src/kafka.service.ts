// import { Injectable } from '@nestjs/common';
// import { Client, ClientKafka, Transport } from '@nestjs/microservices';

// @Injectable()
// export class KafkaService {
// 	@Client({
// 		transport: Transport.KAFKA,
// 		options: {
// 			client: {
// 				clientId: 'user-identify',
// 				brokers: [process.env.KAFKA_BROKERS],
// 			},
// 			consumer: {
// 				groupId: 'test',
// 			},
// 		},
// 	})
// 	client: ClientKafka;
// 	constructor() {}

// 	async setClientId(clientId: string) {
// 		this.client = new ClientKafka({
// 			client: {
// 				clientId: clientId,
// 				brokers: [process.env.KAFKA_BROKERS],
// 			},
// 			consumer: {
// 				groupId: 'test',
// 			},
// 		});
// 		await this.client.connect();
// 	}
// }
