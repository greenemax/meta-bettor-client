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

const onFindBet = function (event) {
  event.preventDefault()
  const betId = getFormFields(event.target)
  // console.log(betId)
  api.findBet(betId)
    .then(ui.findBetSuccess)
    .catch(ui.findBetFailure)
}

const onRemoveBet = function (event) {
  event.preventDefault()
  const betId = getFormFields(event.target)
  api.removeBet(betId)
    .then(ui.removeBetSuccess)
    .catch(ui.removeBetFailure)
}

const onUpdateBet = function (event) {
  event.preventDefault()
  const betUpdate = getFormFields(event.target)
  api.updateBet(betUpdate)
    .then(ui.updateBetSuccess)
    .catch(ui.updateBetFailure)
}

module.exports = {
  onMakeBet,
  onGetBets,
  onFindBet,
  onRemoveBet,
  onUpdateBet
}
