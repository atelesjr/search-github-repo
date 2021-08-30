const { Octokit } = require("@octokit/rest");
require('dotenv').config()

const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN
})

export const searchOrganization = async (org:string) => {

    const { data: response } = await octokit.request(`GET /orgs/${org}/repos`, {
        org: 'apple'
    })
    .catch(console.log)

    return response
}

// const { data: user } = await octokit.request('GET /user')
// .catch()
// console.log(user.login)

