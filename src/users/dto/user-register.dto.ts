import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsString({ message: 'There is no name' })
	name: string;

	@IsEmail({}, { message: 'Incorrect email' })
	email: string;

	@IsString({ message: 'There is no password' })
	password: string;
}
