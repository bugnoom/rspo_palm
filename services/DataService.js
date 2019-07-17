import React, { Component } from 'react'

// API Url to call api 
const APIURL = 'https://rspo.cropslink.com/api';
const header = {'Content-Type':'application/json'};

// this is for test only, please comment on production
const api = require('../assets/testdata.json');

export const checkLogin = async (username , password) => {
    const body = JSON.stringify({
        phone: username,
        password: password
    });
    
    const res = await fetch(APIURL + '/user/auth.php', {
        method: 'POST',
        headers: header,
        body: body,
    }).then((response) => response.json());
    return await res;
}

export const getSiteList = async (userID) => {
    const body = JSON.stringify({
        owner: userID
    });

    const res = await fetch(APIURL + '/info/list.php', {
        method: 'POST',
        headers: header,
        body: body,
    }).then((response) => response.json());
    return await res;
}

export const getSiteInfo = async (SiteID) => {
    const body = JSON.stringify({
        id:SiteID
    });

    const res = await fetch(APIURL + '/info/view.php',{
        method: 'POST',
        headers: header,
        body: body
    }).then((response) => response.json());
    return await res;
}

export const updateSiteDetail = async(siteData) =>{
    const body = JSON.stringify({
        "id":siteData['id'],
        "state":1,
        "name": siteData['name'],
        "code": siteData['code'],
        "rspocode":siteData['rspocode'],
        "address": siteData['address'], 
        "type":siteData['type'],
        "yearin":siteData['yearin'], 
        "area":siteData['area'], 
        "num":siteData['num'], 
        "dead":siteData['dead'], 
        "growback":siteData['growback'], 
        "yeargrow":siteData['yeargrow'], 
        "solutiongrow":siteData['solutiongrow'], 
        "reasondead":siteData['reasondead'], 
        "detailarea":siteData['detailarea'], 
        "benefitother":siteData['benefitother'], 
        "conserve":siteData['conserve'], 
    });

    const res = await fetch(APIURL + '/info/update.php',{
        method: 'POST',
        headers: header,
        body: body
    }).then((response) => response.json());
    return await res;
}

export const testData = api;