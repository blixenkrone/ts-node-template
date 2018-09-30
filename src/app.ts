import { HelloClass } from './hello';
import * as fs from 'fs';

const hello = new HelloClass();
let msg: string, filename: string;

hello.sayHello('World', 25, 'helloworld.txt')
    .then((res) => {
        msg = res.message;
        filename = res.filename;
        const path = `${__dirname}/${filename}`;
        fs.writeFileSync(path, msg);
    })
    .then(async (res) => {
        console.log(res)
        await setTimeout(() => {
            if (fs.existsSync(`${__dirname}/${filename}`)) {
                const path = `${__dirname}/${filename}`;
                console.log(`${msg.toUpperCase()}`)
                fs.unlink(path, (err => console.log(err)));
            }
        }, 5000)
    })
    .catch(err => console.log(err))


console.log('no more')