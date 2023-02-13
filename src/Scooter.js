class Scooter{
  /*contructur method for the scooter that initializes all its properties*/
  static nextSerial = 1;
  constructor (station ,user ,charge, isBroken) {
    this.station = station;
    this.user = user;
    this.charge = charge;
    this.isBroken = isBroken;
    this.nextSerial = Scooter.nextSerial++;
  }
  /*rent method that checks if scooter is either broken or out of charge*/
  rent() {
    if (this.charge > 20 && this.isBroken === false) {
      this.user = this.station;
      this.station = null;
    } else {
      this.user = null;
      if (this.charge < 20) {
        throw new Error ("Scooter needs to be charged")
      } else if (this.isBroken === true) {
        throw new Error ("Scooter needs to be repaired")
      }
    }
  }
  /*dock method allows system to return scooter to the station and clearn out its last user info*/
  dock(station) {
    this.station = station;
    this.user = null;
  }
  /*recharge method allows scooter to be charged*/
  recharge() {
    console.log("Battery Level: " + this.charge);
    let interval = setInterval(function() {
      this.charge++;
      if(this.charge % 20 === 0) {
        console.log("Battery is now at: " + this.charge);
      }

      if (this.charge === 100) {
        clearInterval(interval);
        console.log("Scooter fully charged")
      }

    }.bind(this), 1000)
  }

  /*repair method allows the system to request a repais on the scooter if it is broken*/
  requestRepair() {
    console.log(this.isBroken);
    let interval = setInterval(function() {
      this.isBroken = false;
      console.log("Repair Completed!");
      clearInterval(interval);
    }.bind(this), 5000);
  }
}


module.exports = Scooter
