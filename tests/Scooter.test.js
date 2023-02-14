const Scooter = require('../src/Scooter')
const User = require('../src/User')

//Method tests
describe('scooter methods', () => {
  let scooter;
  beforeEach(() => {
    scooter = new Scooter("station", "user", 50, false)
  })

  //rent method
  test('rent method should update station to null and user to station1 if scooter is charged and not broken', () => {
    scooter.rent();
    expect(scooter.station).toBe(null);
    expect(scooter.user).toBe('station');
  });
  //dock method
  test('rent method should throw an error if scooter is not charged', () => {
    scooter.charge = 10;
    expect(() => {
      scooter.rent();
    }).toThrowError('scooter needs to charge');
  });
  //requestRepair method

  //charge method

})
