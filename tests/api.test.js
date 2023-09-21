const supertest = require('supertest')
const app = require('../index.js')

const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})


test('there are two notes', async () => {
    const response = await api.get('/api/notes')
    expect(response.body).toHaveLength(3)
  })
  
test('the first note is about HTTP methods', async () => {
  const response = await api.get('/api/notes')  
  expect(response.body[0].content).toBe('HTML is easy')
})


afterAll(() => { console.log('closing...'); app.close(); });