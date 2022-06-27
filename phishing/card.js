import axios from 'axios'
import qs from 'qs'
import headers from '../utils/headers.js'
import chalk from 'chalk'

const card = async (phishingPage, fakeData) => {

  const {cnumber, cexp, cccv} = await fakeData

  const send = async (count) => {
    var payload = qs.stringify({
      'pass': '',
      'passVerification': '',
      'tempUserID': '',
      'userId': '',
      'documentNumber': cnumber, // number
      'documentNumber2': cexp, // exp
      'documentNumber3': cccv  // ccv 
    })
  
    var headersPayload = headers({
      endpoint: phishingPage, 
      referer: 'verificando/info/desbloqueo.php',
      ip: '181.56.219.471878'
    })
  
    var config = {
      method: 'post',
      // url: 'http://harlequincscart.demolocations.com/https/181.56.219.471878/verificando/info/gettc.php',
      url: `${phishingPage}/https/181.56.219.471878/verificando/info/gettc.php`,
      // url:phishingPage,
      headers: headersPayload,
      data : payload
    }

    try {
      const resp = await axios(config)
      console.log(`[${chalk.hex('#2bf1ff')(`#${count} ${resp.status}| Phishing Reverse`)}] :: ${chalk.hex('#19d457')(`Fake credit card> ${cnumber} / ${cexp}`)} `)  
    } catch (err) {
      console.log(`[${chalk.redBright(`ERROR`)}] :: ${chalk.hex('#ff562b')(`No se envio datos`)} `)  
    }
  }

  return { send }

}

export default card