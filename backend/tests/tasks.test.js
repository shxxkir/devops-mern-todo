const request = require('supertest'); 
const { server,app } = require('../index.js');
const mongoose = require('mongoose');

describe('GET api/tasks', () => {
  it('should return 200 ok', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
  });
  it('should return an array', async () => {
    const res = await request(app).get('/api/tasks');
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});