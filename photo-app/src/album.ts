import { IEntity, Entity } from './entity'
import { Picture } from './picture'

interface IAlbum extends IEntity {
  description: string
}

export class Album extends Entity {
  private _description: string
  private _pictures: Picture[]

  constructor({ id, title, description }: IAlbum) {
    super({ id, title })
    this._description = description
    this._pictures = []
  }

  addPicture(picture: Picture) {
    this._pictures.push(picture)
  }

  showPictures() {
    console.log(`Album: ${this._title} \n${this._description}\nPictures:`)
    this._pictures.forEach(picture => console.log(picture.asString()))
  }

  get description() {
    return this._description
  }

  set description(description: string) {
    this._description = description
  }
}
