"use strict";
// var Secure = require('./secure.js')
// import { Secure } from "./secure";
var Secure = require('./secure').Secure;
var appid = "20201111091600509389";
var cid = 1;
var appSecret = "9632d8f2265834e22648d95da558fe13";
var version = "1.9.8";
var device = "ios";
var platform = "wechat";
var nonce_str = "iCDxXSWo";
var nonce_time = "1606978537";
// https://api-game-common.yqgame.online/v1/auth/miniWx/getToken?appid=20201111091600509389&cid=1&debug=1&device=ios&nonce_str=iCDxXSWo&nonce_time=1606978537&platform=wechat&version=1.9.8&sign=47421861f191dfc9d4b3efe7789ed09c
var s = new Secure(appid, cid, appSecret, version, device, platform);
var uri1 = s.getSignTest(
//'https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=1515154505&lang=zh_CN'
'https://api-game-common.yqgame.online/v1/auth/miniWx/getToken?debug=1', nonce_str, nonce_time);
console.log("签名后：", uri1);
var z = { "code": 0, "crypto": "mDeTotIpUkpOYLozkRYdjbymLRiknTHB", "data": "a79d81f0647a7edfc0bea6ae3c2f3e1c3531977a1767adb937158ba68ef2cbed4b0cd3839bad9eb20f53df4f138353c85d5d449418a62384d564c978000908adc4c4c6e12b227a0bbe5873d736731b11ffb2417558247e5b8dee7ba508a47e5553ed143c8888decd02e111d7a8a47bb7133eeda41865bde0520fdd871fb7ab9b71b435317bb6f79881fe0c88506738d34208ae2166da299770ea9a34c01a12da92382e53c0b39a65d7e40372d5e708bbfd62e4680e6743f9e76fd96d1c64032a710cfc3055538d2176b286c99cff3f74c8a7312e8800182c272e2a147a0afb5bbc23167b7c8041d2a9d5a1a3664a108c99f020847e94b79219bd98e730d7d4df1b247ba994c89f7418b2c669bcd789060e137849917080cf0992a10a58bf1ef9e7ea229b450432c06be50c7f500e2c5b23c3da45aa7061da231c65c3b24bfc916d78a87094742745beb30da75616acf30ef81939546f06e1246064d3443fee94d95ff8e964945e0386a9fa5dbc934fe0ba22623ce96b802ba5e48797d574bb22", "msg": "成功!" };
console.log("解密后：", s.decrypt(z));
