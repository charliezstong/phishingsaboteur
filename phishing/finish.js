var axios = require('axios')
var qs = require('qs')
var data = qs.stringify({
  'pass': '',
  'passVerification': '',
  'tempUserID': '',
  'userId': '',
  'documentNumber': '000000' // clave dinamica
});
var config = {
  method: 'post',
  url: 'http://harlequincscart.demolocations.com/https/181.56.219.479523/verificando/info/getdinagain.php',
  headers: { 
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
    'Accept-Language': 'es-CO,es;q=0.9,es-419;q=0.8,en;q=0.7,pl;q=0.6,und;q=0.5,pt;q=0.4', 
    'Cache-Control': 'max-age=0', 
    'Connection': 'keep-alive', 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Cookie': '_ga=GA1.2.214414855.1656257994; _gid=GA1.2.690498799.1656257994', 
    'Origin': 'http://harlequincscart.demolocations.com', 
    'Referer': 'http://harlequincscart.demolocations.com/https/181.56.219.479523/verificando/info/clavedinamicafail.html', 
    'Upgrade-Insecure-Requests': '1', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
