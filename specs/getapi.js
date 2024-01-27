import { sleep } from 'k6';
import http from 'k6/http';

export  const Options ={
    //vus:1,
    //duration: '1s'


}


export default function(){
    http.get('https://r7dk2.wiremockapi.cloud/arbetssokande'/9533824707);
    sleep(1);
}