const request = require('supertest')
const app = require('../app')

describe('GET "/"', () =>{
    it('respond with hello world', (done) => {
        request(app).get('/').expect('Hello world', done)
    })
})

describe('GET "/items"', () => {
    it('respond with list of items', (done) => {
        let want = [
            { id: 1, name: 'iPhone12'},
            { id: 2, name: 'Galaxy S20'}
        ]

        request(app).get('/items').expect(want, done)
    })
})
