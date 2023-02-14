const User = require('../src/User')

// User tests here
describe("User", () => {
    let user;
    beforeEach(() => {
        user = new User("vrajesh", "password123", "19")
    })

// test username
    it('creates a new user with the given properties', () => {
        expect(user.username).toBe('john');
        expect(user.age).toBe(30);
        expect(user.loggedIn).toBe(false);
    });

// test password
    it('logs in the user when correct password is provided', () => {
        user.login('password');
        expect(user.loggedIn).toBe(true);
    });
// test age

// test login

// test logout

})
