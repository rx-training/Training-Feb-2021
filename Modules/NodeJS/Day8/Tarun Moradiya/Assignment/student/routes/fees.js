const router = require('express').Router()
const varifyToken = require('./varifyToken')

const fees = [
    {
        courseId: 1,
        courseName: 'Beginner course',
        fees: 45000,
    },
    {
        courseId: 2,
        courseName: 'Intermidiate course',
        fees: 50000,
    },
    {
        courseId: 3,
        courseName: 'Advance course',
        fees: 55000,
    },
]

router.get('/', varifyToken, (req, res) => {
    res.json(fees)
})

module.exports = router