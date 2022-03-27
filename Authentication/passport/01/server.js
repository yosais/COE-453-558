// https://www.youtube.com/watch?v=-RCnNyD0L-s&t=625s

const express = require('express')
const bcrypt = require('bcrypt') // For hashing user passwords and comparing hashed passwords
const session = require('express-session')

const app = express()
const port = 3000

// Passport 
const passport = require('passport')
const Local_Strategy = require('passport-local').Strategy 

let authenticateUser = async function(username, password, done) {
    let user = users.find(user => user.username == username)
    if(user == null){
        return done(null, false, {message: 'No such user!'})
    }
    // User exists. Check password
    try {
        if(await bcrypt.compare(password, user.password)){
            return done(null, user)
        } else {
            return done(null, false, {message: 'Password incorrect!'})
        }
    } catch(err) {
        return done(err)
    }
}

passport.use(new Local_Strategy({ usernameField: 'username'}, authenticateUser))
passport.serializeUser((user, done) => done(null, user.id) )
passport.deserializeUser((id, done) => { 
    return done(null, users.find(user => user.id == id))
 })

// Emulate database
const users = []  // Do not use in production!

//Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Session
app.use(session({
    secret: "Secret",
    resave: false,
    saveUninitialized: false
}))

// Passport
app.use(passport.initialize())
app.use(passport.session())

app.get('/', checkAuthenticated, (req, res) => {
    res.sendFile('Pages/index.html', {root: __dirname})
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.sendFile('Pages/login.html', {root: __dirname})
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.sendFile('Pages/register.html', {root: __dirname})
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        let hashed_passowrd = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            password: hashed_passowrd
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }

app.listen(port, () => console.log(`Application server listening on port ${port}`))