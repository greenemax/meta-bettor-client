
## Important Links

- [meta-bettor-api repository](https://github.com/greenemax/meta-bettor-api)
- [Deployed API](hhttps://serene-journey-61658.herokuapp.com/)
- [Deployed Client](https://greenemax.github.io/meta-bettor-client/)

Technologies used:
-html
-css
-bootstrap
-javascript
-jQuery
-node.js
-express
-github and git
-Mongoose
-MongoDB

## Planning Story

I visited my buddy Dan who lives in Las Vegas last year. Dan is a successful sports bettor who frequents many different casinos, but I noticed he lacked a digital resource to log his different bets. Bets were not all placed at the same location, and they varyied in structure and amount of money invested. I knew there had to be a better way to bet - and that inspired MetaBettor, a digital betting journal where a gambler can log in. Sports bettors, casual to advanced, have a new tool to stay more aware of their bet. Track historical performance and wins and losses.

### User Stories

As a unregistered user, I want to sign up with email, pw, and pwc
As a registered user, I want to sign in with email and pw
As a signed in user, I want to change my pw
As a signed in user, I want to sign out
As a signed in user, I want to save/create a bet which will have date, amount, description, and result
As a signed in user, I want to view all my bets
As a signed in user, I want to edit/update my bet
As a signed in user, I want to delete my bet

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript

### Unsolved Problems

- Still need to make the update functionality a bit more savy, improve style to be a little more professional, and increase capacity on the api. There's a ton of ideas that I left on the sidelines for this project but would like to integrate in future versions. First, I want to make the update form a part of the generated bet content, not a simple form on top. It's way too tedious to update a bet right now. Then, I'd like to improve the bet description to more intuititively capture that info in a more helpful way. Right now too much onus is on the user to remember and re-enter the information.
- Would like to eventually get odds and bet data in an api so that users wouldn't have to recall their bets from memory. I'd like to also create a user reporting section so that if you were a longtime user you could leverage your own data to become a more strategic and educated sports bettor. Wins and Losses should display a bit more obviously.

### Images
Wireframe: https://imgur.com/MtZJTEc

### Functionality

MetaBettor uses a front-end client and a backend API to store bet data entered by users who login in and authenticate their user information. Once logged in, MetaBettor allows a user to create a new bet and log it to their name, so that when the user looks at the bet index it will appear. If a user has an update to a bet (maybe they doubled down their investment, maybe the game was rained out, or maybe the user now knows the outcome of the bet). Bets can be called upon individually and easily removed with a simple click. Log out, and your secure data is protected.

All user information is tied to the user when an account is created through a user's gambler id. This keeps data private to an individual. 
