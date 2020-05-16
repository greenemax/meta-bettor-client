const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onMakeBet = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.makeBet(data)
    .then(ui.makeBetSuccess)
    .catch(ui.makeBetFailure)
}

const onGetBets = function (event) {
  event.preventDefault()
  api.getBets()
    .then(ui.getBetsSuccess)
    .catch(ui.getBetsFailure)
}

module.exports = {
  onMakeBet,
  onGetBets
}
