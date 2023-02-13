const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  //initializing constructur with its attributes
  constructor(registeredUsers) {
    this.stations = {
      leicester: [],
      nothigham: [],
      london: []
    }
    this.registeredUsers = registeredUsers
  }

  //registeredUser meyhod allows user to sign up to the app
  registeredUser(username, password, age) {
    for (let i = 0; i < Object.keys(this.registeredUser).length; i++) {
      if (Object.keys(this.registeredUsers)[i] == username) {
        return console.log("User already registered");
      }
    }
    if (age < 18) {
      return console.log("User too young to register");
    }
    this.registeredUsers[username] = password;
    console.log("User has been registered");
  }

  //login method allows user to log in to the system
  loginUser(username, passwrod) {
    let bool = false;
    for(let i=0; i <Object.keys(this.registeredUsers).length; i++) {
      if(username in this.registeredUsers && this.registeredUsers[username].password == password) {
        console.log("User has logged in to the system")
        bool = true;
        this.registeredUsers[username].loggedIn = true;
        break;
      }
    }
    if (!bool) {
      console.log("incorrect uername or password")
    }
  }

  //logout enbles user to log out of the system
  logOutUser (username) {
    let bool = false
    for (let i = 0; i < Object.keys(this.registeredUsers).length; i++) {
      if (username in this.registeredUsers) {
        console.log("User has been logged out");
        bool = true
        this.registeredUsers[username].loggedIn = false
        break;
      } 
      
    }
    if (!bool) {
      console.log("no such user was logged in")
    }
  }
  
  //createScoooter method enables a scooter to be deployed
  createScooter(station) {
    let newScooter = new Scooter (station, null, 1, 1, 100, false)
    if (station in this.stations) {
    this.stations[station].push(newScooter);
    console.log("created new scooter");
    return newScooter
    } else {
      throw new Error ("no such station");
    }
  }

  //dock scooter enables a scooter to be stored at a station
  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error("no such station");
    }
    if (scooter.station === station) {
      throw new Error("scooter already at station");
    }
    this.stations[station].push(scooter);
    scooter.station = station;
    scooter.dock();
    console.log(`Scooter is docked at ${station}`);
  }

  //rent method enables user to rent a scooter
  rentScooter(scooter, user) {
    if(scooter.station in this.stations) {
      scooter.user = user;
      scooter.station = null;
      console.log("scooter is rented");
    } else {
      console.log("scooter already rented")
    }
  }
}

module.exports = ScooterApp
