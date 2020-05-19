'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const betEvents = require('./bet/events')
$(() => {
  console.log($('.remove-bet'))
  $('#make-bet').on('submit', betEvents.onMakeBet)
  $('#update-bet').on('submit', betEvents.onUpdateBet)
  $('#find-bet').on('submit', betEvents.onFindBet)
  $('.remove-bet').on('click', betEvents.onRemoveBet)
  $('.bet-content').on('click', '.remove-bet', betEvents.onRemoveBet)
  $('#get-bets').on('submit', betEvents.onGetBets)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
