import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ObjectType, ID, Int } from "type-graphql";

ObjectType();
@Entity()
export class User {
	@Field(type => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()    
	@Column()
	username: string;

	@Field()
	@Column()
	password: string;

	@Field(() => Int)
	@Column()
    followers: number;
    
    @Field()
    @Column()
    following: number; 

    @Field()
    @Column()
    posts: [Posts]

}
