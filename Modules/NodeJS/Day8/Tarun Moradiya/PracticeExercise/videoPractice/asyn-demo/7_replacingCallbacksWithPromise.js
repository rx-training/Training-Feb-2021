console.log('Before')

getUser(1, getRepositories)

console.log('after')

//create named functions to remove callback hell and give reference in arg

function getRepositories(user) {
    getRepositories(user.gitHubUserName, getCommits)
}

function getCommits(repos) {
    getCommits(repo, displayCommits)
}

function displayCommits(commits) {
    console.log(commits)
}





function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user from database...')
            resolve({id: id, gitHubUserName: 'Tarun'})
        }, 2000);
    })   
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling an api..')
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000);
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling an git api..')
            resolve(['commit'])
        }, 2000);
    })
}

// function getCommits(repo, callback) {
//     setTimeout(() => {
//         console.log('calling an git api..')
//         callback(['commit'])
//     }, 2000);
// }

