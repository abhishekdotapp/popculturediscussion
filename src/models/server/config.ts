import env from "@/app/env";

const { Avatars, Client, Databases, Storage, Users } = require('node-appwrite');

let client = new Client();

client
    .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_HOST_URL}`) // Your API Endpoint
    .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`) // Your project ID
    .setKey(`${process.env.APPWRITE_API_KEY}`) // Your secret API key

    ;

const databases = new Databases(client)
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client)


export { client, databases, users, avatars, storage }













