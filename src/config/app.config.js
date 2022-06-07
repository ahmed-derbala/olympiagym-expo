const api_protocol='http'
const api_host='192.168.1.16'
const api_port=3000
let api_url=`${api_protocol}://${api_host}:${api_port}`
if(api_port==null){
  api_url=`${api_protocol}://${api_host}`
}

module.exports = {
  name: 'Olympiagym',
  api:{
    protocol:api_protocol,
    host:api_host,
    port:api_port,
    url:api_url
  }
}