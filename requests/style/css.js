
module.exports = {
	path: '/style',
	method: 'get',
	run: async (req , res) => {
let {query, params} = req
var id = params.id

//if(!query.captcha_key) return res.redirect('https://y0captcha.glitch.me/redirect?sitekey=f9VG-5XD7-W0XH-O7UX&host=https://y0host.glitch.me/project/' + id + "/")

//let d = await getMoney(query.captcha_key, 'f9VG-5XD7-W0XH-O7UX')

//if(d.type.success === false) return res.redirect('https://y0captcha.glitch.me/redirect?sitekey=f9VG-5XD7-W0XH-O7UX&host=https://y0host.glitch.me/project/' + id + "/")

return res.sendFile("/app/style/css.css")
  }
}