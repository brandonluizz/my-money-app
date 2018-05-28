const BillingCycle = require('./billingCycle')

BillingCycle.method(['get', 'post', 'put', 'delete'])
BillingCycle.updateOption({ new: true, runValidators: true })

module.exports = BillingCycle