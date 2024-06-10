import { Injectable } from '@nestjs/common';
import { ITransaction } from '@app/lib-kafka';

@Injectable()
export class SerializerService {
	deserialize(data: string): ITransaction {
		return JSON.parse(data);
	}

	serialize(data: ITransaction): string {
		return JSON.stringify(data);
	}
}
