const doSomethingAsync = () => {
    return new Promise((resolver, reject) => {
        (true)
            ? setTimeout(() => resolver('Ok!'), 2000)
            : reject(new Error('Whoops!'))
    })
}

//Ej1
const doSomething = async () => {
    const res = await doSomethingAsync()
    console.log(res);
}
doSomething()


//Ej2
const doSomethingWithTryAndCatch = async () => {
    try {
        const res = await doSomethingAsync()
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
doSomethingWithTryAndCatch()