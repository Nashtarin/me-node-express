const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

const port = 3000
const a = [
    { id: 0, name: "kula", email: 'kula@gmail.com' },
    { id: 1, name: "bula", email: 'kula@gmail.com' },
    { id: 2, name: "tula", email: 'kula@gmail.com' },
    { id: 3, name: "hula", email: 'kula@gmail.com' },
    { id: 4, name: "jula", email: 'kula@gmail.com' },
    { id: 5, name: "lula", email: 'kula@gmail.com' },
    { id: 6, name: "pula", email: 'kula@gmail.com' },
    { id: 7, name: "wula", email: 'kula@gmail.com' },
    { id: 8, name: "rula", email: 'kula@gmail.com' },

]
app.get('/', (req, res) => {
    res.send('Hello My first ever node! jingalalal kutuktut')
});
app.get('/users', (req, res) => {
    res.send(a)
});
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = a[id];
    res.send(user);
})
app.listen(port, () => {
    console.log('listening to port', port)
})
app.get('/user', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = a.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(a)
    }
})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = a.length;
    a.push(newUser);
    res.json(newUser)

    res.send('inside the post')
})
