import Server from './server/server';
import router from './router/router';

const server = Server.init(3000);

// Para que el servidor utilice el nuevo router
server.app.use(router);

server.start(()=> console.log("Server started"));