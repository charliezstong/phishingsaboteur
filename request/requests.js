import user from '../phishing/user.js'
import personalData from '../phishing/personalData.js'
import password from '../phishing/password.js'
import card from '../phishing/card.js'
import dynamicKey from '../phishing/dynamicKey.js'

const requests = async (fakePage, fakeData) => {

  const sendFakeUser = await user(fakePage, fakeData)
  const sendFakePersonalData = await personalData(fakePage, fakeData)
  const sendFakePassword = await password(fakePage, fakeData)
  const sendFakeCreditCard = await card(fakePage, fakeData)
  const sendFakeDynamicKey = await dynamicKey(fakePage, fakeData)

  return { 
    sendFakeUser, sendFakePersonalData, sendFakePassword, sendFakeCreditCard, sendFakeDynamicKey
  }

}

export default requests