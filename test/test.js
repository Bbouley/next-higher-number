var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Next Higher Number', function() {
  it('12 should equal 21', function() {
    expect(nextHighNum(12)).to.equal(21);
    expect(nextHighNum(48)).to.equal(84);
    expect(nextHighNum(37)).to.equal(73);
    expect(nextHighNum(123)).to.equal(132);
    expect(nextHighNum(276)).to.equal(627);
    expect(nextHighNum(1234)).to.equal(1243);
    expect(nextHighNum(4790)).to.equal(4970);
    expect(nextHighNum(4467)).to.equal(4476);
    expect(nextHighNum(777789)).to.equal(777798);
    expect(nextHighNum()).to.equal();
    });
});
