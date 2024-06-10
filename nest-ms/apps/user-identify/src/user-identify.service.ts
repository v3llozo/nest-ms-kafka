import { Injectable } from '@nestjs/common';
import { IUser } from './user';
import { ITransaction, TOPICS } from '@app/lib-kafka';
import { KafkaService } from '@app/lib-kafka';

@Injectable()
export class UserIdentifyService {
	constructor(private kafkaService: KafkaService) {
		this.kafkaService.setClientId('user-identify', 'user-identify');
	}
	getHello(): string {
		return 'UserIdentifyService';
	}

	dispatchMessage(transaction: ITransaction) {
		console.log(TOPICS.UserIdentifySendDocuments);
		return this.kafkaService.client.emit(TOPICS.UserIdentifySendDocuments, {
			key: transaction.userUuid,
			value: transaction,
		});
	}

	identifyUser(user: IUser) {
		console.log('UserIdentifyService.identifyUser');
		if (Math.floor(Math.random() * 10) + 1 > 9) {
			// TODO: Reject
		} else {
			// TODO: Accept
		}
	}
}
