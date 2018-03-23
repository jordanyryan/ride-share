const Driver = require('../models/driver');

module.exports = {
  test(req,res) {
    res.send({test: 'test passed'})
  },
  create(req,res) {
    const driver = new Driver({email: req.body.email});
  }
}