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

export const updateBasicInfomation = async(basicData) =>{
    const body = JSON.stringify({
         "id": basicData['id'],
         "state" : 2,
         "statesoil": basicData['statesoil'],
         "typearea" : basicData['typearea'],
         "typeareamark": basicData['typeareamark'],
         "typesoil": basicData['typeoil'],
         "typesoilother": basicData['typesoilother'],
         "plantingarea": basicData['plantingarea'],
         "plantingareaother": basicData['plantingareaother'],
         "soilconservation": basicData['soilconservation'],
         "soilconservationother": basicData['soilconservationother'],
         "wateringmethod": basicData['wateringmethod'],
         "sourcewater": basicData['sourcewater'],
         "usebefore": basicData['usebefore'],
         "pattern": basicData['pattern'],
         "phase": basicData['phase'],
         "harvesting": basicData['harvesting'],
         "harvestingother": basicData['harvestingother']
    })
    const res = await fetch(APIURL + '/info/update.php',{
        method: 'POST',
        headers: header,
        body: body
    }).then((response) => response.json());
    return await res;
}

export const updatePlamspaceInfo = async(spaceinfo)=>{
    const body = JSON.stringify({
        "id": spaceinfo['id'],
        "state": 3,
        "originsoil": spaceinfo['originsoil'],
        "originsoilother": spaceinfo['originsoilother'],
        "kindsoil": spaceinfo['kindsoil'],
        "kindsoilcompany": spaceinfo['kindsoilcompany'],
        "choosesoil": spaceinfo['choosesoil'],
        "oldsoil": spaceinfo['oldsoil']
    })
    const res = await fetch(APIURL + '/info/update.php',{
        method: 'POST',
        headers: header,
        body: body
    }).then((response) => response.json());
    return await res;
}

export const getProductInfoList = async(plam_id) =>{
    const body = JSON.stringify({
        "palm" : plam_id
    })
    const res = await fetch(APIURL + '/yield/list.php',{
        method: 'POST',
        headers: header,
        body: body
    }).then((response) => response.json());
    return await res;
}

export const createProductInfo = async(product) =>{
    const body = JSON.stringify({
        "palm": product['plam_id'],
        "datein": product['datein'],
        "billnumber": product['billnumber'],
        "numerative": product['numerative'],
        "numerativeprice": product['numerativeprice'],
        "seedfail": product['seedfail'],
        "seedfailprice": product['seedfailprice'],
        "earnings": product['earnings'],
        "earningsseedfail": product['earningsseedfail']
    })
    const res = await fetch(APIURL + '/yield/create.php',{
        method: 'POST',
        headers: header,
        body: body
    }).then((response) => response.json());
    return await res;
}

export const getGraphInfo = async(site_id,year) => {
    if(year == null){
        year = new Date().getFullYear()+543;
    }
    const body = JSON.stringify({
            "palm":site_id,
            "year":year
    })

    const response = {
        income: 0,
        outgoing: 0, 
        total: 0,
        incomedata : [],
        outgoingdata: []
    }

    const res = await fetch(APIURL + '/expense/summation.php',{
        method: 'POST',
        headers: header,
        body: body
    }).then((resp)=> resp.json());
    return await res;
}

export const testData = api;