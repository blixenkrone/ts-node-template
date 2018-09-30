export class HelloClass {

    constructor() { }

    async sayHello(name: string, age: number, filename?: any) {
        const message = `Hello ${name} you are ${age} mio. years old`;
        const obj = { message, filename }
        await obj;
        return obj;
    }
}
