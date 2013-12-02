Discrete Chat (WIP)
===================

Discrete Chat is currently work in progress, once done you will be amazed. initial socketio + angularjs bootstrap taken from [https://github.com/btford/angular-socket-io-im.git](https://github.com/btford/angular-socket-io-im.git).

### What does the project contains ?

1. Chat Server (server dir)
2. Web Chat Client (web dir)

Chat server is a Nodejs server running socketio. While web chat client is composed of angularjs, requirejs, socketio, grunt and sass.

### Usage

1. Clone `git clone https://github.com/sarmadsangi/DiscreteChat.git`.
2. Start Chat Server, goto server dir `npm install` and `node app`.
3. Start Web Client, goto web dir `npm install` and `node app`.
4. Thats all, we are done. Now goto `http://localhost:5000` and enjoy Chatting.


### Important Note

This project is still a work in progress. This to come are,

1. Restructure whole project using `TypeScript`.
2. Modularize Chat Server with more data classes.
3. Store offline messages in mongoDB.
4. Implement Login/Registration.
5. Implement Caching mechanism.
6. Android Client to connect to Chat Server.
7. Many more :)




