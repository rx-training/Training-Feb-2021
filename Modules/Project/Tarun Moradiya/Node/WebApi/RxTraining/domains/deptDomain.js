const { Department, validate } = require("../models/department");

class DepartmentDomain {
  //To get Departments
  async getDepartments(req, res) {
    //check if id given
    if (req.params.id) {
      //get data with id
      const dept = await Department.findById(req.params.id);

      //if not in db return
      if (!dept)
        return res.status(404).send("Department with given id not found!!!");

      //response
      res.send(dept);
    } else {
      //get all data
      const depts = await Department.find();

      //response
      res.send(depts);
    }
  }

  //To insert Department
  async insertDepartment(req, res) {
    //validate user input
    const { error } = await validate(req.body);

    //if error return
    if (error) return res.status(400).send(error.details[0].message);

    //create
    let dept = new Department({
      name: req.body.name,
    });

    //save to db
    dept = await dept.save();

    //response
    res.send(dept);
  }

  //To delete a Department
  async deleteDepartment(req, res) {
    //find by id and delete
    const dept = await Department.findByIdAndRemove(req.params.id);

    //if not found return
    if (!dept)
      return res.status(404).send("Department with given id not found!!!");

    //response
    res.send(dept);
  }

  //To update a Department
  async updateDepartment(req, res) {
    //validate user input
    const { error } = await validate(req.body);

    //if error return
    if (error) return res.status(400).send(error.details[0].message);

    //find by id and update
    const dept = await Department.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      {
        new: true,
      }
    );

    //if not found return
    if (!dept)
      return res.status(404).send("Department with given id not found!!!");

    //response
    res.send(dept);
  }
}

module.exports = DepartmentDomain;
