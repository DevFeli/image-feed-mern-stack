import express from 'express'

const router = express()

//initial route
router.get('/', (req, res) => {
    res.send("API WORKING")
})

export default router