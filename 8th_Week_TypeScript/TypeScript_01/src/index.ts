//typescript ke andar mei pehle din se he import use kr sakta hu 
//jb yeh compile hogi toh yeh const require mei convert ho jayegi
// yeh import mei use krne ka fayda yeh hai ki mujhe type checking milti hai
//typescript is a typed language
import fs from 'fs';
//the problem here is i am typescript and i don't know the types of fs
//@types/node is a package that contains the types for node.js
//jitne bi node ke internal modules hain unke types yeh package provide karta hai
//we install it as a dev dependency
//why dev dependency? because we don't need it in production
//we only need it for development

