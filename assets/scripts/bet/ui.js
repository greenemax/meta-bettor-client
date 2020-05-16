'use strict'
const showBetsTemplate = require('../templates/bet-display.handlebars')

const makeBetSuccess = data => {
  $('#bet-message').empty()
  $('#bet-message').text('Bet added')
}

const makeBetFailure = error => {
  $('#bet-message').text('Bet was not added.')
  return error
}

const getBetsSuccess = data => {
  console.log(data)
  const showBetsHtml = showBetsTemplate({ bets: data.bets })
  $('.bet-index').html(showBetsHtml)
}

const getBetsFailure = error => {
  $('.bet-index').text('Sorry! Request failed.').css('color', 'red')
  console.error(error)
}
module.exports = {
  makeBetSuccess,
  makeBetFailure,
  getBetsSuccess,
  getBetsFailure
}
