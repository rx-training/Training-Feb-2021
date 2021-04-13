//resolved promise
const p = Promise.resolve({id: 1})
p.then(result => console.log(result))

//rejected Promise
const pr = Promise.reject(new Error('Reason for Rejction'))//always use error object to get error callstack
pr.then(err => console.log(err))

