export interface ITransaction {
	uuid: string;
	origin: string;
	createdAt: Date;
	userUuid: string;
	data: any;
}
export interface KafkaMessage {
	topic: string;
	partition: number;
	timestamp: string;
	size: number;
	attributes: number;
	offset: string;
	key: any;
	value: any;
	headers: Record<string, any>;
}
