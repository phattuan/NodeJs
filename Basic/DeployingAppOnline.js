//
import { http } from 'http';
http.createServer( function (req, res) {
    res.write('Ho Tuan Phat');
    res.end();
}).listen(process.env.PORT||9999);
