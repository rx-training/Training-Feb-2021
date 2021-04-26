const express = require('express')
const router = express.Router() 

//f2 to edit word

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

router.get('/', (req, res) => {
    res.send(courses)
})

router.get('/:id', (req, res) => {
    // res.send(req.params.id)
    let course = courses.find((c) => c.id === parseInt(req.params.id))
   
    // if (!course) res.status(404).send('the given course was not found')
    if (!course) return res.status(404).send('the given course was not found')
    res.send(course)
})

// post 

router.post('/', (req, res) => {

    // if (!req.body.name || req.body.name < 3) {
    //     //400 Bad Request
    //     res.status(400).send('Name is required and should be atleast 3 characters long.')
    //     return
    // }

    const result = validateCourse(req.body)

    // if (result.error) {
    //         //400 Bad Request
    //         res.status(400).send(result.error.details[0].message)
    //         return
    //     }

    if (result.error) return res.status(400).send(result.error.details[0].message)
       

    const course = {
        id: courses.length + 1,
        name : req.body.name //need to enable parsing of json objects in the body of request
    }

    courses.push(course)
    res.send(course)
})

//PUT

router.put('/:id', (req, res) => {
    //look up the course if does not exist return 404
    let course = courses.find((c) => c.id === parseInt(req.params.id))
   
    // if (!course) res.status(404).send('the given course was not found')
    if (!course) return res.status(404).send('the given course was not found')
    res.send(course)

    //validate 
    // const result = validateCourse(req.body)
    
    // if (result.error) {
    //     //400 Bad Request
    //     res.status(400).send(result.error.details[0].message)
    //     return
    // }

    const {error} = validateCourse(req.body)

    // if (error) {
    //     //400 Bad Request
    //     res.status(400).send(error.details[0].message)
    //     return
    // }

    if (error) return res.status(400).send(error.details[0].message)

    //updata
    course.name = req.body.name

    //return the updated course
    res.send(course)

})

function  validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema)

}

//delete
router.delete('/:id', (req, res) => {
    //lookup the course
    //doesn't exist, 404
    let course = courses.find((c) => c.id === parseInt(req.params.id))
   
    if (!course) return res.status(404).send('the given course was not found')
    res.send(course)

    //delete
    const index = courses.indexOf(course)
    courses.splice(index, 1)

    //return same course
    res.send(course)
})

module.exports = router