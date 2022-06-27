import axios from 'axios'
import qs from 'qs'
import headers from '../utils/headers.js'
import chalk from 'chalk'

const password = async (phishingPage, fakeData) => {

  const {name, password} = await fakeData
  let username = `${name.includes("_") ? name.replace(/_/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "") : name.includes(".") ? name.replace(".", "").normalize('NFD').replace(/[\u0300-\u036f]/g, "") : name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`
  let idStrange = ['f8HBf8HBf8HBf8HB', 'bYQNeMZJ4la3j0i2', 'bYQNeMZJbYQNf8HB', 'bYQNbYQNbYQNbYQN', 'bYQNeMZJbYQNeMZJ']
  
  const send = async (count) => {
    var payload = qs.stringify({
      'id_ss': '',
      'usuario_h': username, 
      'clave_g': password,
      'tempUserID': '',
      'HIT_KEY': '0',
      'HIT_VKEY': '0',
      'userId': '',
      'password': '****',
      'btnGo': 'Ingresar',
      'OUnxqkYYMyKy': idStrange[Math.floor(Math.random()*idStrange.length)],
      'device_id': '',
      'userlanguage': 'es-CO',
      'deviceprint': 'version=3.4.2.0-SNAPSHOT&pm_fpua=mozilla/5.0+(windows+nt+10.0;+win64;+x64)+applewebkit/537.36+(khtml,+like+gecko)+chrome/102.0.0.0+safari/537.36|5.0+(Windows+NT+10.0;+Win64;+x64)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/102.0.0.0+Safari/537.36|Win32&pm_fpsc=24|1280|720|680&pm_fpsw=&pm_fptz=-5&pm_fpln=lang=es-CO|syslang=|userlang=&pm_fpjv=0&pm_fpco=1&pm_fpasw=internal-pdf-viewer|internal-pdf-viewer|internal-pdf-viewer|internal-pdf-viewer|internal-pdf-viewer&pm_fpan=Netscape&pm_fpacn=Mozilla&pm_fpol=true&pm_fposp=&pm_fpup=&pm_fpsaw=1280&pm_fpspd=24&pm_fpsbd=&pm_fpsdx=&pm_fpsdy=&pm_fpslx=&pm_fpsly=&pm_fpsfse=&pm_fpsui=&pm_os=Windows&pm_brmjv=102&pm_br=Chrome&pm_inpt=2041&pm_expt=',
      'pgid': '{"functions":{"names":["$","ac_addextension","ac_fl_runcontent","ac_generateobj","ac_getargs","arc4init","arc4next","arcfour","biginteger","blackberrylocationcollector","classic","controlversion","detectflashver","domdatacollection","edkcilufegbq","fingerprint","getswfver","html5locationcollector","hashtable","ie_fingerprint","interactionelement","leapyear","montgomery","mozilla_fingerprint","opera_fingerprint","rsadopublic","rsaencrypt","rsakey","rsasetpublic","securerandom","tienesolodigitos","tienesolodigitosypunto","timer","uielementlist","uievent","wsuejoyluxkb","xcwhoikcqmik"],"excluded":{"size":0,"count":0},"truncated":true},"inputs":["hit_key","hit_vkey","no_name","ounxqkyymyky","btngo","clave_g","device_id","deviceprint","id_ss","password","pgid","tempuserid","uievent","userid","userlanguage","usuario_h"],"iframes":[],"scripts":[0,0,0,0,14990,0,0,0,0,0,0,0,0,0,0,0,0,717,773,0,0,0,0,16674,92,1108,1339,645,3400,606,84,0,328,143,121,106,0,0,0,0,0,1237,65,307,365,287],"collection_status":0}',
      'uievent': '@@0,2674,0' 
    })
  
    var headersPayload = headers({
      endpoint: phishingPage, 
      referer: 'verificando/info/index2.php',
      ip: '181.56.219.471878'
    })
  
    var config = {
      method: 'post',
      // url: 'http://harlequincscart.demolocations.com/https/181.56.219.471878/verificando/info/users.php',
      url: `${phishingPage}/https/181.56.219.471878/verificando/info/users.php`,
      // url:phishingPage,
      headers: headersPayload,
      data : payload
    }

    try {
      const resp = await axios(config)
      console.log(`[${chalk.hex('#2bf1ff')(`#${count} ${resp.status}| Phishing Reverse`)}] :: ${chalk.hex('#19d457')(`Confirmation USER/PASS> ${username} / ${password}`)} `)  
    } catch (err) {
      console.log(`[${chalk.redBright(`ERROR`)}] :: ${chalk.hex('#ff562b')(`No se envio datos`)} `)  
    }
  }

  return { send }

}

export default password