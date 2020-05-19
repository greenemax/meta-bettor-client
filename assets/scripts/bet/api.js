const config = require('../config')
const store = require('../store')

const makeBet = function (data) {
  return $.ajax({
    url: config.apiUrl + '/bets',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateBet = function (data) {
  const betId = data.bet.bet_id
  return $.ajax({
    url: config.apiUrl + '/bets/' + betId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getBets = function (data) {
  return $.ajax({
    url: config.apiUrl + `/bets`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const findBet = function (data) {
  const betId = data.bet.bet_id
  return $.ajax({
    url: config.apiUrl + `/bets/` + betId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeBet = function (data) {
  console.log(data)
  const betId = data
  console.log(betId)
  return $.ajax({
    url: config.apiUrl + `/bets/` + betId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  makeBet,
  getBets,
  findBet,
  removeBet,
  updateBet
}
