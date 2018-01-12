const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const morgan = require('morgan');

const api = require('./api');

const db = require('../db');
const Auth = require('../config/tokens.js')
// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;


const User = require('../db').User;
const Auth = require('../config/tokens.js')
// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;


// passport.serializeUser((user, done) => {
//   console.log(user, 'user')
//   done(null, user._id);
// })

// passport.deserializeUser(function(id, done) {
//     done(err, User.user);
// });

// app.use(passport.initialize());
// app.use(passport.session());

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/topic/:topicId', express.static(path.join(__dirname, '../client/dist')));

// Handle internal API endpoints
app.use('/api', api);

// //fb auth
// passport.use(new FacebookStrategy({
//       clientID: Auth.id,
//       clientSecret: Auth.secret,
//       callbackURL: "http://localhost:3000/auth/facebook/callback"
//       // ,
//       // profileURL: 'https://graph.facebook.com/v2.8/me',
//       // authorizationURL: 'https://www.facebook.com/v2.8/dialog/oauth',
//       // tokenURL: 'https://graph.facebook.com/v2.8/oauth/access_token'
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// app.get('/auth/facebook',
//   passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',

//   //change failure to login page when created//

//   passport.authenticate('facebook', 
//     { failureRedirect: '/' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/login');
// });
// /////////////

// // GET all topics from the server
// app.get('/topics', (req, res) => {
//   db.getTopics((error, result) => {
//     if (error) {
//       res.status(503).end();
//       console.log(error.message);
//       return;
//     }
//     res.status(200).send(result);
//   });
// });

// GET all topics from the server
app.post('/topic', (req, res) => {
  console.log(req.body);

  db.saveTopic(req.body, (error, result) => {
    if (error) {
      res.status(503).end();
      console.log(error.message);
      return;
    }
    res.status(200).send(result);
  });
});

app.patch('/topic/:topicId', (req, res) => {
  console.log('req body', req.body);
  console.log(req.params);
// { vote: decrement}


  db.updateVoteCount(req.params.topicId, req.body.upvotes, (error, result) => {
    if (error) {
      res.status(503).end();
      return;
    }
    res.status(200).send(result);
    
  })
})

app.listen(port, () => console.log(`listening on port ${port}!`));