import axios from 'axios'
import qs from 'qs'
import headers from '../utils/headers.js'
import chalk from 'chalk'

const dynamicKey = async (phishingPage, fakeData) => {

  const {BankDinamicKey, BankDinamicKeyOther} = await fakeData

  const send = async (count, sendType) => {

    if(sendType != 'finish'){
      var tr = 'verificando/info/clavedinamica.html'
      var tendp = 'verificando/info/getdin.php'
    }else{
      var tr = 'verificando/info/clavedinamicafail.html'
      var tendp = 'verificando/info/getdinagain.php'
    }

    var payload = qs.stringify({
      'pass': '',
      'passVerification': '',
      'tempUserID': '',
      'userId': '',
      'documentNumber': sendType != 'finish' ? BankDinamicKey : BankDinamicKeyOther // Clave dinamica
    })
  
    var headersPayload = headers({
      endpoint: phishingPage, 
      referer: tr,
      ip: '181.56.219.471878'
    })
  
    var config = {
      method: 'post',
      url: `${phishingPage}/https/181.56.219.471878/${tendp}`,
      // url:phishingPage,
      headers: headersPayload,
      data : payload
    }

    try {
      const resp = await axios(config)
      console.log(`[${chalk.hex('#2bf1ff')(`#${count} ${resp.status}| Phishing Reverse`)}] :: ${chalk.hex('#19d457')(`Clave dinamica> ${sendType != 'finish' ? BankDinamicKey : BankDinamicKeyOther}`)} `)  
    } catch (err) {
      console.log(`[${chalk.redBright(`ERROR`)}] :: ${chalk.hex('#ff562b')(`No se envio datos`)} `)  
    }
  }

  return { send }

}

export default dynamicKey