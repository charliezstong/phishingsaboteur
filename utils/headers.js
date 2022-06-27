const headers = async(data) => {

  const {endpoint, referer, ip} = data

  return { 
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
    'Accept-Language': 'es-CO,es;q=0.9,es-419;q=0.8,en;q=0.7,pl;q=0.6,und;q=0.5,pt;q=0.4', 
    'Cache-Control': 'max-age=0', 
    'Connection': 'keep-alive', 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Cookie': '_ga=GA1.2.214414855.1656257994; _gid=GA1.2.690498799.1656257994; _gat=1', 
    'Origin': `${endpoint}`, 
    'Referer': `${endpoint}/https/${ip}/${referer}`, 
    'Upgrade-Insecure-Requests': '1', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
  }

}

export default headers
 