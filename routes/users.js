﻿const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

// 登入頁面
router.get('/login', (req, res) => {
    res.render('login')
})

// 登入檢查
router.post('/login', (req, res, next) => {
    req.flash('warning_msg', "請確認帳號或密碼")
    passport.authenticate('local', { // 使用 passport 認證
        successRedirect: '/', // 登入成功會回到根目錄
        failureRedirect: '/users/login' // 失敗會留在登入頁面
    })(req, res, next)
})

// 註冊頁面
router.get('/register', (req, res) => {
    res.render('register')
})

// 註冊檢查
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body

    // 加入錯誤訊息提示
    let errors = []

    if (!email || !password || !password2) {
        errors.push({ message: '所有欄位都是必填' })
    }

    if (password !== password2) {
        errors.push({ message: '密碼輸入錯誤' })
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        User.findOne({ email: email }).then(user => {
            if (user) {
                // 加入訊息提示
                errors.push({ message: '這個 Email 已經註冊過了' })
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                })
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                })
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash

                        newUser
                            .save()
                            .then(user => {
                                res.redirect('/')
                            })
                            .catch(err => console.log(err))
                    })
                )
            }
        })
    }
})

// 登出
router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', '你已經成功登出了')
    res.redirect('/users/login')
})

module.exports = router