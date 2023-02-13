class User {
  //initializing constructur and applying its attributes to the class
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  //login method enables uer to login to the scooter app
  login(password) {
    if (this.password === password) {
      this.loggedIn = true;
      return this;
    } else {
      throw new Error("Incorrect password")
    }
  }

  //log out enables user to log out from the scooter app
  logOut() {
    this.loggedIn = false;
  }
}

module.exports = User
