'use strict';

import {readFileSync} from "fs";

let rawdata = readFileSync('cred.json');
let cred = JSON.parse(rawdata);
console.log(cred.user, cred.pw, cred.host);