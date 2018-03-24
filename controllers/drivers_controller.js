const Driver = require('../models/driver');

module.exports = {
  test(req,res) {
    res.send({test: 'test passed'})
  },
  create(req,res) {
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver)); 
  }
}