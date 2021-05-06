const Joi = require('joi')

function validateEmp(emp) {
    const EmpSchema = Joi.object({
        firstname: Joi.string()
            .required(),
        lastname: Joi.string()
            .required(),
        city: Joi.string()
            .required(),
        country: Joi.string()
            .required(),
        Gender:  Joi.any().valid('Male', 'Female').error(() => 'Gender should be Male (or) Female')
            .required()
    });

    return EmpSchema.validate(emp);
}

function validateAssignment(assignment) {
    const assignmentSchema = Joi.object({
        assignmetName: Joi.string()
            .required(),
        departmentId: Joi.number()
            .required(),
        endDate: Joi.date()
            .required()
    })

    return assignmentSchema.validate(assignment)
}



module.exports = {validateEmp, validateAssignment}