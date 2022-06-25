import axios from 'axios'

const httpClient = baseURL => axios.create({
    timeout: 30000,
    headers: {
        'Content-type': 'application/json'
    },
    baseURL
})

export class BaseService{
    constructor(baseURL){
        this.client = httpClient(baseURL)
    }

    async get(url){
        const result = await this.client.get(url)

        return result.data
    }
}