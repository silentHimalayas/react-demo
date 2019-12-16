const sum = require('../src/utils/index.js');
const expect = require('chai').expect;

describe('加法函数测试', function () {
  it('2加2应该等于4', function () {
    expect(sum(2,2)).to.be.equal(4)
  })
})