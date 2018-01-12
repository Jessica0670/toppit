// import Auth from './tokens.js'; 
const Auth = require('./tokens.js')
// passport.use(new FacebookStrategy(
module.exports =
	{
	    clientID: Auth.keys.secret,
	    clientSecret: Auth.keys.secret,
	    callbackURL: "http://localhost:3000/auth/facebook/callback"
	}
  // function(accessToken, refreshToken, profile, cb) {
  //   User.findOrCreate({ facebookId: profile.id }, function (err, user) {
  //     return cb(err, user);
  //   });
  // }
));

