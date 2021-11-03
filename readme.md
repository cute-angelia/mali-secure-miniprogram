## 小程序签名算法

1. 微信支付算法签名

## install

`npm i mali-secure-miniprogram --save-dev`

[mali-secure-miniprogram](https://www.npmjs.com/package/mali-secure-miniprogram)

## some example

```
// 导入方式
import {Secure} from "mali-secure-ts";

// 或者

const Secure = require('mali-secure-ts').Secure;

// 初始化实例
// appid   应用id
// cid     渠道
// secret  秘钥
// version 版本号 1.0.1
// device  设备信息 ios_14.0.1
// platform 平台: app，wechat，h5
let s = new Secure('appid', 'cid1', '192006250b4c09247ec02edce69f6a2d', "1.0.3", "ios_14.2.3", "app")

// 获得签名后的 url
let uri1 = s.getSign(
  'https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=1515154505&lang=zh_CN'
)

console.log(uri1)
// https://mp.weixin.qq.com/wxamp/devprofile/get_profile?appid=appid&cid=cid1&lang=zh_CN&nonce_str=235nzeTP&nonce_time=1592213055&token=1515154505&sign=1deda92a05c849a17d4a0b0c3259f8fe
```
