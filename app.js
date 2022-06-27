import { faker } from '@faker-js/faker/locale/es'
import requests from './request/requests.js'
import randomN from './utils/randomN.js'
import phoneNumberCo from './utils/phoneNumberCo.js'

async function phishingReverse(data, count) {
  
  const {phishingPage} = data
  const payloadFakeData = async ()=> { 
    let n = faker.name.firstName(), 
        l = faker.name.lastName()
    return {
    name: faker.internet.userName(n, l),
    email: faker.internet.email(n, l),
    password: faker.internet.password( randomN(6, 16) ),
    cedula: Math.random() < 0.5 ? parseInt(`1${Math.floor(Math.random() * 1000000000)}`) : Math.floor(Math.random() * 10000000),
    phone: phoneNumberCo(),
    cnumber: faker.finance.creditCardNumber(),
    cexp: Math.round(Math.random() * 11 + 1) + "/" + parseInt(new Date().getFullYear() * 1 + (Math.round(Math.random() * 7))),
    cccv: faker.finance.creditCardCVV(),
    BankDinamicKey: faker.random.numeric(6),
    BankDinamicKeyOther: faker.random.numeric(6),
  }}

  let fakeData = payloadFakeData()
  const r = await requests(phishingPage, fakeData)

  await r.sendFakeUser.send(count)
  await r.sendFakePersonalData.send(count)
  await r.sendFakePassword.send(count)
  await r.sendFakeCreditCard.send(count)
  await r.sendFakeDynamicKey.send(count, '')
  await r.sendFakeDynamicKey.send(count, 'finish')
}

const run = async (data) => {
  const {requestNumber} = data
  let queue = []
  let loop = [...Array(requestNumber)].map((_,i) => i+1)
  loop.map((count, index) => {
    queue.push(phishingReverse(data, index+1))
  })
  return await Promise.all(queue)
} 

var payload = {
  requestNumber:2000,
  phishingPage:"http://harlequincscart.demolocations.com",
  // phishingPage:"https://xx0x0x.requestcatcher.com",
}

run(payload)