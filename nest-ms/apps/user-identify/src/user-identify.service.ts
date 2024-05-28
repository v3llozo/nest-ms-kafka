import { Injectable } from '@nestjs/common';
import { IUser } from './user';

@Injectable()
export class UserIdentifyService {
	getHello(): string {
		return 'UserIdentifyService';
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
