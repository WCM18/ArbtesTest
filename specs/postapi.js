import {
    htmlReport
} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check } from 'k6';
import http from 'k6/http';
import { URL } from './url.js';



export const options = {
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'constant-vus',
        vus: 10,
        duration: '30s',
      },
    },
  };

export default function(){
    const url='https://r7dk2.wiremockapi.cloud/arbetssokande';
    const payload=JSON.stringify({
        namn:'anju',
        personnummer:208012156386,
                
    });

    const  params = {
        headers :{
                'Content-Type' : 'application/JSON',
                },
    };
    
    const res = http.post(url, payload, params);

    console.log(res)
    console.log(res.json())
    const idGenerated = res.json("id")
    console.log(idGenerated)

    check(res, {
        'is status 200': (r) => r.status = 200,
        'is  personnummer':(r) => r.body.includes(208012156386),
    });
//Get arbetsokande

console.log("get calling")
const getUrl = new URL(url);

console.log(url)


getUrl.searchParams.append('id', idGenerated)

console.log(getUrl.toString())

const  getParams = {
    headers :{
            'Content-Type' : 'application/JSON',
            },
};

    // call get service
    const resGet = http.get(getUrl.toString());


    check(resGet, {
        'is status 200': (r) => r.status = 200,
        'is gatuadress':(r)=> r.body.includes(resGet.json("gatuadress")),
        'is post personnummer':(r)=>r.body.includes(resGet.json("postnummer")),
    });
    console.log(resGet.json("gatuadress"))

    //delete
    const delurl = new URL(url);
    delurl.searchParams.append('id',idGenerated);
    let resdel = http.del(delurl.toString());
    console.log(resdel)
    check(resdel,{
        'is status 202':(r)=> r.status = 202,
        'is Id removes':(r)=>r.status = "removed",
    })
    console.log('delete',resdel.json());    
}

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}
