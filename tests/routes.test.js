const request = require('supertest');
const app = require('../src/app');
const fs = require('mz/fs');
const {getBalance, getLastDigits} = require("../src/utils/helper")

describe('Api End Points', () => {

  it('should fetch all cards', async () => {
    const res = await request(app).get('/api/card');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('should return last 4 digits of number', () => {
    const result = getLastDigits('1234567891234567')
    expect (result).toEqual("4567")
    
  })

  it('should return balance on card', () => {
    const resultWithBalance = getBalance('5123456789123452')
    expect (resultWithBalance).toEqual("53")
    const resultWithBalanceFive = getBalance('1234567891234565')
    expect (resultWithBalanceFive).toEqual("51")
    const resultWithNoBalance = getBalance('1234567891234560')
    expect (resultWithNoBalance).toEqual("0")
    const resultWithNnumber = getBalance('1234567891234560')
    expect (resultWithNnumber).not.toBe(0)
  })

  it('should create card in system', async () => {
    const res = await request(app).post('/api/card');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });

  it('should delete card in system', async () => {
    const res = await request(app).delete('/api/card?id=1');
    expect(res.statusCode).toEqual(200);
  });

  
    
})