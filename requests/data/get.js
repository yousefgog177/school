

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
}
  
  }
  newData(${status}, ${JSON.stringify(data)})`
}

module.exports = {
	path: '/api/v1/data',
	method: 'get',
	run: async (req , res) => {
let {headers, params, query} = req
  
  if(!headers.authorization) return res.status(200).send(createMessage(400))
let data = {
students: Number(Number(query.students) || 0),
teachers: Number(Number(query.teachers) || 0),
}
if(data.students === 1) delete data.students
if(data.teachers === 1) delete data.teachers

    let d = await users.findOne({"account.token": headers.authorization}).select(data)
if(!d) return res.status(200).send(createMessage(400, {message: "Invaild Account"}))

    var parse = JSON.parse(JSON.stringify(d))
    console.log(parse)
    delete parse.account.email
delete parse.account.password
delete parse.account.token
    
res.status(200).send(createMessage(200, parse))
  }
}