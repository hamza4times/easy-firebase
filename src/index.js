export function helloWorld(print = false) {
    const message = "Hello, world!";

    if (print) {
        console.log(message);
    }

    return message;
}