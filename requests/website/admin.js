
module.exports = {
	path: '/admin',
	method: 'get',
	run: async (req , res) => {
let {query, params} = req
var id = params.id
  
  
return res.sendFile("/app/website/admin.html")
  }
}