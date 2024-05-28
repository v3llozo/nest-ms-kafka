export interface ITransaction {
	uuid: string;
	origin: string;
	createdAt: Date;
	userUuid: string;
	data: any;
}
