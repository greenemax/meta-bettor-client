'use strict'
const store = require('../store')

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
  // exmple from mdn const result = words.filter(word => word.length > 6);
  const result = data.bets.filter(bet => bet.gambler_id === store.user._id)
  const showBetsHtml = showBetsTemplate({ bets: result })
  $('.bet-content').html(showBetsHtml)
  const betsMade = result.length
  $('.bets-made').html(`<div>You have made ${betsMade} bet(s)!</div>`)
}

const getBetsFailure = error => {
  $('.bet-content').text('Sorry! Request failed due to ' + error).css('color', 'red')
}

const findBetSuccess = data => {
  $('.bet-content').html(``)
  const betId = data
  const showBetHtml = showBetsTemplate({ bets: betId })
  $('.bet-content').html(showBetHtml)
  $('#bet-message').text('Bet displayed below')
}

const findBetFailure = error => {
  $('.bet-content').text('Bet was not found due to ' + error)
}

const removeBetSuccess = data => {
  $('.bet-content').text('Bet successfully deleted')
}

const removeBetFailure = error => {
  $('.bet-content').text('Bet not deleted due to ' + error)
}

const updateBetSuccess = data => {
  $('.bet-content').text('Bet successfully updated')
}

const updateBetFailure = error => {
  $('.bet-content').text('Bet not updated due to ' + error)
}
module.exports = {
  makeBetSuccess,
  makeBetFailure,
  getBetsSuccess,
  getBetsFailure,
  findBetSuccess,
  findBetFailure,
  removeBetSuccess,
  removeBetFailure,
  updateBetSuccess,
  updateBetFailure
}
