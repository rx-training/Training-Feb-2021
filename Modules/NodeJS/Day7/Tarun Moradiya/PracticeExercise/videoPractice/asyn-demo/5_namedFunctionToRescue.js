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





function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database...')
        callback({id: id, gitHubUserName: 'Tarun'})
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('calling an api..')
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}

//syncronous version looks cleaner

console.log('Before')
const user = getUser(1)
const repos = getRepositories(user.gitHubUserName)
const commits = getCommits(repos[0])
console.log('After')