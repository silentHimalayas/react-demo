const sum = require('../src/utils/index.js');
const expect = require('chai').expect;

describe('加法函数测试', function () {
  it('3加2应该等于5', function () {
    setTimeout(function () {
      expect(sum(3,2)).to.be.equal(5)
    }, 5000);
    
  })
  it('1加2应该等于3', function () {
    expect(sum(1,2)).to.be.equal(3)
  })
})