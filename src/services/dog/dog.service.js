import { BaseService } from  '../_base/base.service'
import { Dog } from '../../models'

export class DogService extends BaseService{
    constructor(){
        super('https://dog.ceo/api/')
    }

async getRandomImages(quantity){
    const result = await super.get(`breeds/image/random/${quantity}`)
    //o retorno dessa api é um json com a message
    return result.message.map(image => new Dog(image))
}

async getRandomImage(){
    const result = await super.get('breeds/image/random')

    return new Dog(result.message)
}

}