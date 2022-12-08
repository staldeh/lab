import { Curl } from 'node-libcurl';
import {readFileSync} from "fs";

const curl = new Curl();
const curl_login = new Curl();
const curl_getdata = new Curl();

let COOKIES='./cookies.txt';
let COOKIES2='./cookies2.txt';


let rawdata = readFileSync('cred.json');
let cred = JSON.parse(rawdata);

console.log(cred.user);

// Get COOKIES
curl.setOpt('URL', cred.host+'/authenticated/identity');
curl.setOpt(Curl.option.COOKIEJAR, COOKIES);
curl.setOpt(Curl.option.SSL_VERIFYPEER, 0);
//curl.setOpt(Curl.option.FOLLOWLOCATION, 1)
//curl.setOpt(Curl.option.VERBOSE, true);
//curl.setOpt(Curl.option.POST, true);


// Login
curl_login.setOpt('URL', cred.host+'/authenticated/j_security_check');

curl_login.setOpt(Curl.option.COOKIEFILE, COOKIES);
curl_login.setOpt(Curl.option.SSL_VERIFYPEER, 0);
curl_login.setOpt(Curl.option.USERNAME, cred.user);
curl_login.setOpt(Curl.option.PASSWORD, cred.pw);
curl_login.setOpt(Curl.option.COOKIEJAR, COOKIES2);
curl_login.setOpt(Curl.option.FOLLOWLOCATION, 1);
curl_login.setOpt(Curl.option.VERBOSE, true);
curl_login.setOpt(Curl.option.POST, true);

curl.on('end', function (statusCode, data, headers) {
  console.info(statusCode);
  console.info('---');
  console.info(data.length);
  console.info('---');
  console.info(this.getInfo( 'TOTAL_TIME'));
  
  this.close();
  
  curl_login.perform();
});

curl_login.on('end', function (statusCode, data, headers) {
    console.info(statusCode);
    console.info('---');
    console.info(data.length);
    console.info('---');
    console.info(this.getInfo( 'TOTAL_TIME'));
    //console.info(data);
    this.close();
    //curl_getdata.perform();
  });

//  curl_login.on('data', (chunk, curlInstance) => {
//    console.log('Receiving data with size: ', chunk.length);
//    console.log(chunk.toString());
//  });

curl.on('error', curl.close.bind(curl));
curl_login.on('error', curl.close.bind(curl));
curl.perform();
// ----------



