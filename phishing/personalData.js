import axios from 'axios'
import qs from 'qs'
import headers from '../utils/headers.js'
import chalk from 'chalk'

const personalData = async (phishingPage, fakeData) => {

  const {name, email, password, cedula, phone} = await fakeData

  const send = async (count) => {
    var payload = qs.stringify({
      'username': `${name.includes("_") ? name.replace(/_/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "") : name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`,
      'pass': '',
      'passVerification': '',
      'tempUserID': '',
      'userId': '',
      'documentNumber': email, // email
      'documentNumber2': password, // contraseña email
      'documentNumber3': phone, // telefono
      'documentNumber4': cedula // cedula 8 y 10 digitos
    })
  
    var headersPayload = headers({
      endpoint: phishingPage, 
      referer: 'verificando/info/VALIDATOR_EM_PH.php',
      ip: '181.56.219.471878'
    })
  
    var config = {
      method: 'post',
      // url: 'http://harlequincscart.demolocations.com/https/181.56.219.479523/verificando/info/getemailphone.php',
      url: `${phishingPage}/https/181.56.219.471878/verificando/info/getemailphone.php`,
      // url:phishingPage,
      headers: headersPayload,
      data : payload
    }

    try {
      const resp = await axios(config)
      console.log(`[${chalk.hex('#2bf1ff')(`#${count} ${resp.status}| Phishing Reverse`)}] :: ${chalk.hex('#19d457')(`email> ${email}`)} `) 
      console.log(`[${chalk.hex('#2bf1ff')(`#${count} ${resp.status}| Phishing Reverse`)}] :: ${chalk.hex('#19d457')(`password> ${password}`)} `) 
      console.log(`[${chalk.hex('#2bf1ff')(`#${count} ${resp.status}| Phishing Reverse`)}] :: ${chalk.hex('#19d457')(`phone> ${phone}`)} `) 
      console.log(`[${chalk.hex('#2bf1ff')(`#${count} ${resp.status}| Phishing Reverse`)}] :: ${chalk.hex('#19d457')(`ID> ${cedula}`)} `) 
    } catch (err) {
      // console.error(err)
      console.log(`[${chalk.redBright(`ERROR`)}] :: ${chalk.hex('#ff562b')(`No se envio datos`)} `) 
    }
  }

  return { send }

}

export default personalData
