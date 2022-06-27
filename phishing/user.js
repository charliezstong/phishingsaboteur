import axios from 'axios'
import qs from 'qs'
import headers from '../utils/headers.js'
import chalk from 'chalk'

const user = async (phishingPage, fakeData) => {

  const {name} = await fakeData
  let username = `${name.includes("_") ? name.replace(/_/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "") : name.includes(".") ? name.replace(".", "").normalize('NFD').replace(/[\u0300-\u036f]/g, "") : name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`
  
  const send = async (count) => {
    var payload = qs.stringify({
      'username': username,
      'btnGo': 'Submit',
      'device_id': '',
      'userlanguage': 'es-CO',
      'deviceprint': 'version%3D3%2E4%2E2%2E0%2DSNAPSHOT%26pm%5Ffpua%3Dmozilla%2F5%2E0%20%28windows%20nt%2010%2E0%3B%20win64%3B%20x64%29%20applewebkit%2F537%2E36%20%28khtml%2C%20like%20gecko%29%20chrome%2F102%2E0%2E0%2E0%20safari%2F537%2E36%7C5%2E0%20%28Windows%20NT%2010%2E0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537%2E36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F102%2E0%2E0%2E0%20Safari%2F537%2E36%7CWin32%26pm%5Ffpsc%3D24%7C1280%7C720%7C680%26pm%5Ffpsw%3D%26pm%5Ffptz%3D%2D5%26pm%5Ffpln%3Dlang%3Des%2DCO%7Csyslang%3D%7Cuserlang%3D%26pm%5Ffpjv%3D0%26pm%5Ffpco%3D1%26pm%5Ffpasw%3Dinternal%2Dpdf%2Dviewer%7Cinternal%2Dpdf%2Dviewer%7Cinternal%2Dpdf%2Dviewer%7Cinternal%2Dpdf%2Dviewer%7Cinternal%2Dpdf%2Dviewer%26pm%5Ffpan%3DNetscape%26pm%5Ffpacn%3DMozilla%26pm%5Ffpol%3Dtrue%26pm%5Ffposp%3D%26pm%5Ffpup%3D%26pm%5Ffpsaw%3D1280%26pm%5Ffpspd%3D24%26pm%5Ffpsbd%3D%26pm%5Ffpsdx%3D%26pm%5Ffpsdy%3D%26pm%5Ffpslx%3D%26pm%5Ffpsly%3D%26pm%5Ffpsfse%3D%26pm%5Ffpsui%3D%26pm%5Fos%3DWindows%26pm%5Fbrmjv%3D102%26pm%5Fbr%3DChrome%26pm%5Finpt%3D2033%26pm%5Fexpt%3D%2D1',
      'pgid': '{"functions":{"names":["$","ac_addextension","ac_fl_runcontent","ac_generateobj","ac_getargs","blackberrylocationcollector","controlversion","detectflashver","domdatacollection","fingerprint","getswfver","html5locationcollector","hashtable","ie_fingerprint","interactionelement","leapyear","mozilla_fingerprint","opera_fingerprint","tienesolodigitos","tienesolodigitosypunto","timer","uielementlist","uievent","__nr_require","activexdetect","addeventlistener","add_deviceprint","alert","alertsize","atob","blur","btoa","callsvpsessionservlet","cancelanimationframe","cancelidlecallback","captureevents"],"excluded":{"size":0,"count":0},"truncated":true},"inputs":["btngo","device_id","deviceprint","pgid","uievent","userlanguage","username"],"iframes":["http:harlequincscart.demolocations.comhttps181.56.219.471878verificandoinfoindex_fileslogin_svp_bc_zonaa.html"],"scripts":[0,0,0,0,14990,0,0,0,0,0,0,140,0,1519,91,781,975,645,3400,1982,84,0,328,143,106,0,0,0,0,0,1237,65,307,271],"collection_status":0}',
      'uievent': '1,1,INPUT:text,4@1,3,0;1,1,0;1,1,0;1,1,0;1,1,0;1,1,0;1,1,0;1,1,0;1,1,0@0,1946,0' 
    })
  
    var headersPayload = headers({
      endpoint: phishingPage, 
      referer: 'verificando/info/index.html',
      ip: '181.56.219.471878'
    })
  
    var config = {
      method: 'post',
      // url: 'http://harlequincscart.demolocations.com/https/181.56.219.471878/verificando/info/index2.php',
      url: `${phishingPage}/https/181.56.219.471878/verificando/info/index2.php`,
      // url:phishingPage,
      headers: headersPayload,
      data : payload
    }

    try {
      const resp = await axios(config)
      console.log(`[${chalk.hex('#2bf1ff')(`#${count} ${resp.status}| Phishing Reverse`)}] :: ${chalk.hex('#19d457')(`Username> ${username}`)} `)  
    } catch (err) {
      console.log(`[${chalk.redBright(`ERROR`)}] :: ${chalk.hex('#ff562b')(`No se envio datos`)} `)  
    }
  }

  return { send }

}

export default user