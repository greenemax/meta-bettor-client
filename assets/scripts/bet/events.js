const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const betEvents = require('./../bet/events')

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
    // .then((data) => {
    //   // $('.remove-bet').on('click', betEvents.onRemoveBet)
    //   $('.remove-bet').each(i => {
    //     const bet = $('.remove-bet')[i]
    //     console.log(bet.data('id'))
    //     bet.click(() => alert('Anything'))
    //   })
    //   return data
    // })
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

const onUpdateBet = function (event) {
  event.preventDefault()
  const betUpdate = getFormFields(event.target)
  api.updateBet(betUpdate)
    .then(function () {
      onGetBets(event)
    })
    .catch(ui.updateBetFailure)
}

const onRemoveBet = function (event) {
  event.preventDefault()
  console.log('works')
  const betId = $(event.target).data('id')
  console.log(betId)
  api.removeBet(betId)
    .then(function () {
      onGetBets(event)
    })
    .catch(ui.removeBetFailure)
}

const addHandlers = () => {

}
module.exports = {
  onMakeBet,
  onGetBets,
  onFindBet,
  onRemoveBet,
  onUpdateBet
}
