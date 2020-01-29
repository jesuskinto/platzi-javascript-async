const fetchData = require('./utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(res => {
        console.log(res.info.count)
        return fetchData(API + res.results[0].id)
    })
    .then(res => {
        console.log(res.name)
        return fetchData(res.origin.url)
    })
    .then(res => console.log(res.dimension))
    .catch(err => console.err(err))
