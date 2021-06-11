********************************************************************
                            routes
********************************************************************

---------------------------departments------------------------------

//GET http://localhost:3000/departments
//GET http://localhost:3000/departments/:id
//POST http://localhost:3000/departments
//PUT http://localhost:3000/departments/:id
//DELETE http://localhost:3000/departments/:id


---------------------------technologies------------------------------

-------tech-groups-------

//GET http://localhost:3000techgroups
//GET http://localhost:3000techgroups/:id
//POST http://localhost:3000techgroups
//PUT http://localhost:3000techgroups/:id
//DELETE http://localhost:3000techgroups/:id

-------techs-------

//GET http://localhost:3000/technologies
//GET http://localhost:3000/technologies/:id
//POST http://localhost:3000/technologies
//PUT http://localhost:3000/technologies/:id
//DELETE http://localhost:3000/technologies/:id


-------modules-------

//GET http://localhost:3000/modules
//GET http://localhost:3000/modules/:id
//POST http://localhost:3000/modules
//PUT http://localhost:3000/modules/:id
//DELETE http://localhost:3000/modules/:id

-------topics-------

//GET http://localhost:3000/modules/:moduleId/topics
//GET http://localhost:3000/modules/:moduleId/topics/:id
//POST http://localhost:3000/modules/:moduleId/topics
//PUT http://localhost:3000/modules/:moduleId/topics/:id
//DELETE http://localhost:3000/modules/:moduleId/topics/:id

-------contents-------

//GET http://localhost:3000/modules/:moduleId/topics/:topicId/contents
//GET http://localhost:3000/modules/:moduleId/topics/:topicId/contents/:id
//POST http://localhost:3000/modules/:moduleId/topics/:topicId/contents
//PUT http://localhost:3000/modules/:moduleId/topics/:topicId/contents/:id
//DELETE http://localhost:3000/modules/:moduleId/topics/:topicId/contents/:id


---------------------------plans------------------------------

-------plans-------

//GET http://localhost:3000/plans
//GET http://localhost:3000/plans/:id
//GET http://localhost:3000/plans/tech/:techId
//POST http://localhost:3000/plans
//PUT http://localhost:3000/plans/:id
//DELETE http://localhost:3000/plans/:id

-------days-------

//GET http://localhost:3000/plans/:planId/days
//GET http://localhost:3000/plans/:planId/days/:id
//POST http://localhost:3000/plans/:planId/days
//PUT http://localhost:3000/plans/:planId/days/:id
//DELETE http://localhost:3000/plans/:planId/days/:id


-------contexts-------

//GET http://localhost:3000/plans/:planId/days/:dayId/contexts
//GET http://localhost:3000/plans/:planId/days/:dayId/contexts/:id
//POST http://localhost:3000/plans/:planId/days/:dayId/contexts
//PUT http://localhost:3000/plans/:planId/days/:dayId/contexts/:id
//DELETE http://localhost:3000/plans/:planId/days/:dayId/contexts/:id

---------------------------users------------------------------
