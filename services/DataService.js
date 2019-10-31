import React, { Component } from 'react'

// API Url to call api 
export const APIURL = 'https://rspo.cropslink.com/api';
export const header = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

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
        "id":siteData.id,
        "state":1,
        "name": siteData.name,
        "code": siteData.code,
        "rspocode":siteData.rspocode,
        "address": siteData.address, 
        "type":siteData.type,
        "yearin":siteData.yearin, 
        "area":siteData.area, 
        "num":siteData.num, 
        "dead":siteData.dead, 
        "growback":siteData.growback, 
        "yeargrow":siteData.yeargrow, 
        "solutiongrow":siteData.solutiongrow, 
        "reasondead":siteData.reasondead, 
        "detailarea":siteData.detailarea, 
        "benefitother":siteData.benefitother, 
        "conserve":siteData.conserve, 
        "datein":siteData.datein
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
         "id": basicData.id,
         "state" : 2,
         "statesoil": basicData.statesoil,
         "typearea" : basicData.typearea,
         "typeareamark": basicData.typeareamark,
         "typesoil": basicData.typesoil,
         "typesoilother": basicData.typesoilother,
         "plantingarea": basicData.plantingarea,
         "plantingareaother": basicData.plantingareaother,
         "soilconservation": basicData.soilconservation,
         "soilconservationother": basicData.soilconservationother,
         "wateringmethod": basicData.wateringmethod,
         "sourcewater": basicData.sourcewater,
         "usebefore": basicData.usebefore,
         "pattern": basicData.pattern,
         "phase": basicData.phase,
         "harvesting": basicData.harvesting,
         "harvestingother": basicData.harvestingother
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
        "id": spaceinfo.id,
        "state": 3,
        "originsoil": spaceinfo.originsoil,
        "originsoilother": spaceinfo.originsoilother,
        "kindsoil": spaceinfo.kindsoil,
        "kindsoilcompany": spaceinfo.kindsoilcompany,
        "choosesoil": spaceinfo.choosesoil,
        "oldsoil": spaceinfo.oldsoil
    })
    const res = await fetch(APIURL + '/info/update.php',{
        method: 'POST',
        headers: header,
        body: body
    }).then((response) => response.json());
    return await res;
}

export const getProductInfoList = async(plam_id,startdate,enddate) =>{
    const body = JSON.stringify({
        "palm" : plam_id,
        "startdate":convertdate(startdate),
	    "enddate":convertdate(enddate)
    })
    console.log("body is", body);
    const res = await fetch(APIURL + '/yield/list.php',{
        method: 'POST',
        headers: header,
        body: body
    }).then((response) => response.json());
    return await res;
}

export const getExpenseList = async(plam_id,startdate,enddate) =>{
    const body = JSON.stringify({
        "palm" : plam_id,
        "startdate":convertdate(startdate),
	    "enddate":convertdate(enddate)
    })
    console.log("body is", body);
    const res = await fetch(APIURL + '/expense/list.php',{
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

const selectboxdata = {
        'type' : ['ไม่ระบุ','โฉนด','นส.3ก'],
        'typearea' : ["-","ที่ราบ","ที่ราบลอนคลื่น","ที่ลุ่ม","ที่ลาดชัน","อื่น ๆ"],
        'typesoil':['-','เหนียว','ร่วน','ทราบ','ลูกรัง','ร่วนปนทราย','อื่น ๆ'],
        'plantingarea':['-','ไถพรวน','ไถยกร่อง','ขุดคู ยกร่อง','ทำขั้นบันได','อื่น ๆ'],
        'soilconservation':['','ขั้นบันได','กองทางใบ','พืชตระกูลถั่ว คลุมดิน','ใช้ทะลายปาล์มเปล่าคลุม','อื่น ๆ'],
        'wateringmethod':['-','ปล่อยธรรมชาติ','รดน้ำ'],
        'pattern':['-','ปลูกสามเหลี่ยมด้านเท่า','ปลูกแบบสี่เหลี่ยม'],
        'harvesting':['-','เก็บเอง','จ้างผู้รับเหมา','อื่น ๆ'],
        'originsoil':['-','ซื้อเมล็ดงอกมาเพาะเอง','ซื้อกล้าระยะ Pre Nursery มาบำรุงรักษาแล้วปลูก','ซื้อจากแปลงเพาะกล้า','ซื้อจากแปลงเพาะกล้าของบริษัท'],
        'kindsoil':['-','ลูกผสม DxP','ไม่แน่ใจ'],
        'choosesoil':['-','มีการคัดต้นกล้าก่อนปลูก','ไม่มีการคัดต้นกล้าก่อนปลูก'],
        'expense_type': ['','','ค่าปุ๋ย','ค่าจ้างใส่ปุ๋ย','ค่ากำจัดวัชพืช','ค่าตัดแต่งทางใบ','ค่าจ้างเก็บเกี่ยว','ค่าวัสดุอุปกรณ์','ค่ายาฆ่าแมลง','ค่าน้ำมัน','ค่าวิเคราะห์ดินและใบ','ค่าใช้จ่ายในการต้นไม้ที่ไม่ให้ผลผลิต'],
               
    }
export const selectboxData = selectboxdata;

export const convertdate = (date) => {
    //Moment.locale('th');
    let a = date.split('/');
    let y = parseInt(a[2]) + 543;
    //let d = y + "/" + a[1] + "/" + a[2];
    let d = a[0] + "/" + a[1] + "/" + y;
    console.log(d);
    return d;
    //"01/05/2560"
    
  }
