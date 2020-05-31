'use strict'
const store = require('../store')

const showBetsTemplate = require('../templates/bet-display.handlebars')

const makeBetSuccess = data => {
  $('.bet-message').empty()
  $('.bet-message').text('Bet added')
  $('form').trigger('reset')
}

const makeBetFailure = error => {
  $('.bet-message').text('Bet was not added.')
  $('form').trigger('reset')
}

const getBetsSuccess = data => {
  $('.bet-message').empty()
  // exmple from mdn const result = words.filter(word => word.length > 6);
  const result = data.bets.filter(bet => bet.gambler_id === store.user._id)
  const showBetsHtml = showBetsTemplate({ bets: result })
  $('.bet-content').html(showBetsHtml)
  const betsMade = result.length
  $('.bets-made').html(`<div>You have made ${betsMade} bet(s)!</div>`)
  $('form').trigger('reset')
}

const getBetsFailure = error => {
  $('.bet-content').text('Sorry! Request failed due to ' + error).css('color', 'red')
  $('form').trigger('reset')
}

const findBetSuccess = data => {
  $('.bet-message').empty()
  $('.bet-content').html(``)
  const betId = data
  const showBetHtml = showBetsTemplate({ bets: betId })
  $('.bet-content').html(showBetHtml)
  $('.bets-made').text('Bet was found. Here is the information:')
  $('form').trigger('reset')
}

const findBetFailure = error => {
  $('.bet-content').text('Bet was not found due to ' + error)
}

const removeBetSuccess = data => {
  $('.bet-message').empty()
  $('.bet-message').text('Bet successfully deleted.')
  $('.bet-content').html(``)
  $('.bets-made').html(``)
  $('form').trigger('reset')
}

const removeBetFailure = error => {
  $('.bets-made').text('Bet not deleted due to ' + error)
  $('form').trigger('reset')
}

const updateBetSuccess = data => {
  $('.bet-message').empty()
  $('.bet-message').text('Bet successfully updated!')
  $('form').trigger('reset')
}

const updateBetFailure = error => {
  $('.bets-made').text('Bet not updated due to ' + error)
  $('form').trigger('reset')
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
