// test/app.test.js
const request = require('supertest');
const app = require('../app');          // your Express app (exported)

describe('Express App Routes', () => {
  test('GET / ➜ "Hello, World!"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });

  test('GET /home ➜ "Welcome to the Home Page!"', async () => {
    const res = await request(app).get('/home');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Welcome to the Home Page!');
  });

  test('GET /about ➜ "This is the About Page."', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('This is the About Page.');
  });
});
