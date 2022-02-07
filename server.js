let express = require('express')
let app = express()
const bodyParser = require('body-parser');
let fs = require('fs')
const ms = require('ms')
let db = require('./db')
let database = db.init()
app.use(bodyParser.json({limit: "50mb"}));
app.listen(3000)

var websiteRequests = []
var apiRequests = []
var captchaRequire = false
var captchaTime = 0

setInterval(() =>{
if(captchaTime - Date.now() < 1) captchaRequire = false
}, 3000)

        const requests = fs.readdirSync(`./requests/`).filter(file => file.endsWith(".js"));

    fs.readdirSync("./requests/").forEach(dir => {
        const requests = fs.readdirSync(`./requests/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of requests) {
           let request = require(`./requests/${dir}/${file}`);
if(request.method && request.path){
app[request.method](request.path , (req , res) =>{
                try {
if(req.headers.authorization === '41371755aa') return request.run(req , res, captchaRequire)
console.log(`New Request | ${req.headers['x-forwarded-for'].split(',')[0].trim()}`)
                  
let f = websiteRequests.filter(d => d.time - Date.now() > 10800000)
                  
if(f.length > 8 && captchaRequire === false) {
 captchaTime = Date.now() + 360000
  captchaRequire = true
}                  
let ff = apiRequests.filter(d => d.time - Date.now() > 10800000)
                  
if(ff.length > 6 && captchaRequire === false) {
 captchaTime = Date.now() + 360000
  captchaRequire = true
}
if(dir === "website"){
let ip = req.headers['x-forwarded-for'].split(',')[0].trim()

let findRequest = websiteRequests.find(d => d.ip === ip)

if(!findRequest){
findRequest = websiteRequests.unshift({
ip: ip,
requests: [],
time: 0
})
}else{
if(findRequest.time - Date.now() > 28800000){
return;
}
if(findRequest.time - Date.now() > 18000000){
let times = [51000, 52000, 53000, 54000, 55000, 56000, 57000, 58000, 59000, 50000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]
console.log(`${ip} | Limited 6`)

return;
}
if(findRequest.time - Date.now() > 14400000){
let times = [31000, 32000, 33000, 34000, 35000, 36000, 37000, 38000, 39000, 40000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]
console.log(`${ip} | Limited 5`)

return res.status(429).json({errors: ['banned-requests', 'warn-3'], message: "You Need to Wait 12 hour to test request agian, In the event that the requests is not stop, the banned request may be up to a week"})
}
if(findRequest.time - Date.now() > 10800000){
let times = [11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]
console.log(`${ip} | Limited 4`)

return res.status(429).json({errors: ['banned-requests', 'warn-2'], message: "You Need to Wait 6 hour to test request agian, In the event that the requests is not stop, the banned request may be up to a week"})
}
if(findRequest.time - Date.now() > 7200000){
let times = [21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]
console.log(`${ip} | Limited 3`)

return res.status(429).json({errors: ['banned-requests', 'warn'], message: "You Need to Wait 3 hour to test request agian, In the event that the requests is not stop, the banned request may be up to a week"})
}
if(findRequest.time - Date.now() > 1800000){
let times = [11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]
console.log(`${ip} | Limited 2`)

return res.status(429).json({errors: ['banned-requests'], message: "You Have Temp Banned To Requests!", time: ms(findRequest.time - Date.now())})
}

if(findRequest.time - Date.now() > 1){
let times = [8000, 7000, 5000, 3000, 2000, 4000, 6000, 1000, 9000, 10000]
console.log(`${ip} | Limited 1`)
 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]
return res.status(429).json({errors: ['limited-requests'], message: "You Have Temp Limited To Requests!", time: ms(findRequest.time - Date.now())})
}

if(findRequest.requests.filter(c => c.end - Date.now() > 1).length > 30){

let times = [8000, 7000, 5000, 3000, 2000, 4000, 6000, 1000, 9000, 10000]

findRequest.time = Date.now() + times[Math.floor(Math.random() * times.length)]
findRequest.requests = []
}else{
findRequest.requests.unshift({
end: Date.now() + 9500
})
}


}
return request.run(req , res, captchaRequire)
return;
}
let ip = req.headers['x-forwarded-for'].split(',')[0].trim()

let findRequest = apiRequests.find(d => d.ip === ip)

if(!findRequest){
findRequest = apiRequests.unshift({
ip: ip,
requests: [],
time: 0
})
}else{
if(findRequest.time - Date.now() > 28800000){
return;
}
if(findRequest.time - Date.now() > 18000000){
let times = [51000, 52000, 53000, 54000, 55000, 56000, 57000, 58000, 59000, 50000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]

return;
}
if(findRequest.time - Date.now() > 14400000){
let times = [31000, 32000, 33000, 34000, 35000, 36000, 37000, 38000, 39000, 40000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]

return res.status(429).json({errors: ['banned-requests', 'warn-3'], message: "You Need to Wait 12 hour to test request agian, In the event that the requests is not stop, the banned request may be up to a week"})
}
if(findRequest.time - Date.now() > 10800000){
let times = [11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]

return res.status(429).json({errors: ['banned-requests', 'warn-2'], message: "You Need to Wait 6 hour to test request agian, In the event that the requests is not stop, the banned request may be up to a week"})
}
if(findRequest.time - Date.now() > 7200000){
let times = [21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]

return res.status(429).json({errors: ['banned-requests', 'warn'], message: "You Need to Wait 3 hour to test request agian, In the event that the requests is not stop, the banned request may be up to a week"})
}
if(findRequest.time - Date.now() > 1800000){
let times = [11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]

return res.status(429).json({errors: ['banned-requests'], message: "You Have Temp Banned To Requests!", time: ms(findRequest.time - Date.now())})
}

if(findRequest.time - Date.now() > 1){
let times = [8000, 7000, 5000, 3000, 2000, 4000, 6000, 1000, 9000, 10000]

 findRequest.time = findRequest.time + times[Math.floor(Math.random() * times.length)]
return res.status(429).json({errors: ['limited-requests'], message: "You Have Temp Limited To Requests!", time: ms(findRequest.time - Date.now())})
}
console.log(findRequest.requests.filter(c => c.end - Date.now() > 1).length)
if(findRequest.requests.filter(c => c.end - Date.now() > 1).length > 20){

let times = [8000, 7000, 5000, 3000, 2000, 4000, 6000, 1000, 9000, 10000]

findRequest.time = Date.now() + times[Math.floor(Math.random() * times.length)]
findRequest.requests = []
}else{
findRequest.requests.unshift({
end: Date.now() + 9500
})
}

}
return request.run(req , res, captchaRequire)
                } catch(err) {
                  console.log(err)
return res.status(500).json({errors: ['Internal Server Error'], message: "Internal Server Error"})
}

})
}} 

})