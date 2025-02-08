const http = require('http');

PORT = process.env.PORT || 3000;

const content = `
<h1>Hello World</h1>
<p>I have CI/CD configured (hopefully?)</p>
`

/** 
 * @param {http.IncomingMessage}
 * @param {http.ServerResponse}
 * */
const handler = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
}

const server = http.createServer(handler);

server.listen(PORT, () => console.log(`Listening at :${PORT}`));
