function tempo(request, response){
    const apiSecret = process.env.API_KEY
const dynamicDate = new Date()

response.setHeader('Cache-Control','s-maxage=10,stale-while-revalidate')
response.json({
    date: dynamicDate.toISOString()
})
}

export default tempo