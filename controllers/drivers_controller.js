const Driver = require('../models/driver');

module.exports = {
  test(req,res) {
    res.send({test: 'test passed'})
  },

  create(req,res,next) {
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
  },

  edit(req,res,next) {
    const driverId = req.params.driverId;
    const driverProps = req.body;
    Driver.findByIdAndUpdate(driverId, driverProps)
      .then(() => Driver.findById(driverId))
      .then(driver => res.send(driver))
      .catch(next);
  },

  delete(req,res,next) {
    const driverId = req.params.driverId;

    Driver.findByIdAndRemove(driverId)
      .then((driver) => res.status(204).send(driver))
      .catch(next);
  }
}