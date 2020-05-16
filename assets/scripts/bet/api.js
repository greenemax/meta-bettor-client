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

const getBets = () => {
  return $.ajax({
    url: config.apiUrl + '/bets'
  })
}

module.exports = {
  makeBet,
  getBets
}
