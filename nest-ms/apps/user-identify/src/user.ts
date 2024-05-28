export interface IUser {
	uuid: string;
	email: string;
	name: string;
}
export class User implements IUser {
	uuid: string;
	email: string;
	name: string;

	constructor(uuid: string, email: string, name: string) {
		this.uuid = uuid;
		this.email = email;
		this.name = name;
	}
}
