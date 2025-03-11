import passport from 'passport'
import session from 'express-session';
import cookieParser from 'cookie-parser';

app.use(cookieParser());
app.use(session({
  secret: 'my-secret',
  resave: false,
  cookie: { secure: false },
})));
 
app.use(passport.initialize());
app.use(passport.session());