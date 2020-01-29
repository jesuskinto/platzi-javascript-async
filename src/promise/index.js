//Ej1
const somethingWillHappen = () => {
    return new Promise((resolve, rejects) => {
        if (true) resolve("Hey!")
        else rejects("Whooops!")
    })
}
// somethingWillHappen()
//     .then(res => console.log(res))
//     .catch(err => console.error(err))


//Ej2
const somethingWillHappen2 = () => {
    return new Promise((resolve, rejects) => {
        if (false) {
            setTimeout(() => {
                resolve("Hey!")
            }, 3000)
        }
        else rejects(new Error("Whooops!"))
    })
}
// somethingWillHappen2()
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

//Ej3
Promise.all([somethingWillHappen, somethingWillHappen2])
    .then(res => console.log(res))
    .catch(err => console.error(err))


