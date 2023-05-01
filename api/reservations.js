const { Router } = require('express')
const router = Router()

const Reservation = require("../models/reservation")

router.post('/', async function (req, res, next) {
    const reservation = await Reservation.create(req.body)
    res.status(201).send({
        id: reservation.id
    })
})

module.exports = router
