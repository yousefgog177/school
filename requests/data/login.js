

const users = require("../../db/admin.js")

let createMessage = (status, data, fun = "")=>{
return `
  var on = 'Failed '
  
  var tw = 'To '
  
  var th = 'Login'
  
  function repM(o){
var g;

var q = []
for(const x of o) q = q + x.k
for(var l of o){
q = q.replace(l.k, l.r)
}
return q

}

function getN(n) {
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let str = '';
for (let i = 0; i < n; i++) {
str += chars.charAt(Math.floor(Math.random() * chars.length));
}
return str
}
  
  function newAlert(s, n){

  
if(s == 400){
if(n) {alert(false, n.message)}else{

  
  var arr = []
  var ar = []
  var h = on + tw + th
  for(const z of h) arr.unshift(z)
  for(const v of arr) ar.unshift({
k: getN(4),
r: v
})
  alert(false, repM(ar))
}
}else
if(s == 200){
if(n) {alert(true, n.message)}else{

  
  var arr = []
  var ar = []
  var h = on + tw + th
  for(const z of h) arr.unshift(z)
  for(const v of arr) ar.unshift({
k: getN(4),
r: v
})
  alert(true, repM(ar))
}
}
}
  
  function dataParse(j){
try {

return JSON.parse(JSON.stringify(j))
} catch(err) {
return {n: 400}
}
}
  function newData(s, d){
  
  var m = dataParse(d)
  if(s == 400){
  if(m.n) return newAlert(s, false)
return newAlert(s, m)
}else
  if(s == 200){
  if(m.n) return newAlert(s, false)
return newAlert(s, m)
}
  
  }
  newData(${status}, ${JSON.stringify(data)})`
}

module.exports = {
	path: '/api/v1/login',
	method: 'post',
	run: async (req , res) => {
let {headers, params, query, body} = req
  
  if(!body.password) return res.status(200).send(createMessage(400, {message: "Please Input Password"}))
  if(!body.email) return res.status(200).send(createMessage(400, {message: "Please Input Email"}))

let d = await users.findOne({"account.password": body.password, "account.email": body.email}).select({account: 1})
if(!d) return res.status(200).send(createMessage(400, {message: "Invaild Account"}))
    
res.status(200).send(createMessage(200, {token: d.account.token, message: "success Login"}))
    
  }
}