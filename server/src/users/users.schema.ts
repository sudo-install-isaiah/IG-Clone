import { Field, ObjectType, InputType, ID } from "type-graphql";

@ObjectType()
export class User {
	@Field(type => ID)
	id: string;
	@Field()
	name: string;
	@Field()
	email: string;
}

@InputType()
export class UserInput implements Pick<User, "name" | "email"> {
	@Field()
	name!: string;
	@Field()
	email!: string;
}
