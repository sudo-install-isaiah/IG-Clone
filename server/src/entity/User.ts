import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Field, ObjectType, InputType, ID } from "type-graphql";

ObjectType()
@Entity()
export class User {
    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}



