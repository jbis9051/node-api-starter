import http from 'http';
import app from '../app';

const port = parseInt(process.env.PORT || '3000', 10);
app.set('port', port);
const server = http.createServer(app);

server.listen(port);
server.addListener('listening', () => {
    const addr = server.address();
    // eslint-disable-next-line no-console
    console.log(`Listening on ${typeof addr === 'string' ? addr : addr!.port}`);
});
