const passport = require('passport');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GOOGLE_CLIENT_ID="1038998729462-bkkl4adn51pb9ldqmj8scpe6vpadofc8.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})