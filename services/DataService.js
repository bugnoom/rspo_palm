import React, { Component } from 'react'

// API Url to call api 
const APIURL = '';
const header = {'Content-Type':'application/json'};

// this is for test only, please comment on production
const api = require('../assets/testdata.json');

export const checkLogin = (username , password) => {
    const body = JSON.stringify({
        username: username,
        password: password
    })
    
    return fetch(APIURL + '/authen',{
        method: 'POST',
        headers: header,
        body: body,
    }).then(
        (res) => res.json()
    )
}

export const getSiteList = (userID) => {
    const body = JSON.stringify({
        user_id: userID
    })

    return fetch(APIURL + '/sitelist',{
        method: 'POST',
        headers: header,
        body: body,
    }).then(
        (res) => res.json()
    )
}

export const testData = api;