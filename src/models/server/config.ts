import {Client, Avatars, Storage, Users, Databases } from "node-appwrite";
import env from "@/app/env"
const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apikey);

const users = new Users(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export {client, users, storage, databases, avatars}