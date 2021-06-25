console.log('Before')

//Promise based approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUserName))
//     .then(repos => getCommits(repos[0]))
//     .then(commit => console.log(commit))
//     .catch(err => console.log('Error', err.message))

//async and await based approach

async function displayCommits() {
    try {
        const user = await getUser(1)
        const repos = await getRepositories(user.gitHubUserName)
        const commit = await getCommits(repos[0])
        console.log(commit)
    } catch (error) {
        console.log('Error', error)
    }
}
displayCommits()

console.log('after')


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
            // resolve(['repo1', 'repo2', 'repo3'])
            reject(new Error('Could not get the repos'))
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


