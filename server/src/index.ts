import { buildSchema } from "graphql";
import express from "express";
import { graphqlHTTP } from "express-graphql";

const users = [
	{ id: 1, name: "John Doe", email: "johndoe@gmail.com" },
	{ id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
	{ id: 3, name: "Mike Doe", email: "mikedoe@gmail.com" },
];

const schema = buildSchema(`
    input UserInput {
        email: String!
        name: String!

    }

    type User {
        id: Int!
        name: String!
        email: String!
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: Int!, input: UserInput): User
    }

    type Query {
        getUser(id: String): User
        getUsers: [User]
    }
`);