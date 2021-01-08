export {}

enum EnPhotoOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
  Panorama = 'panorama'
}

interface IEntity {
  id: number
  title: string
}

interface IAlbum extends IEntity {
  description: string
}

interface IPicture extends IEntity {
  orientation: EnPhotoOrientation
}

// Se le conoce como super clase
abstract class Entity {
  protected readonly _id: number // atributo de solo lectura
  protected _title: string

  constructor({ id, title }: IEntity) {
    this._id = id
    this._title = title
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  set title(title: string) {
    this._title = title
  }
}

/* const entity: Entity = new Entity({ id: 1, title: 'Test entity' }) // Error, no se puede instanciar una clase abstracta. */

class Picture extends Entity {
  static photoOrientation = EnPhotoOrientation // accesible desde el nombre de la clase

  private _orientation: EnPhotoOrientation

  constructor({ id, title, orientation }: IPicture) {
    super({ id, title })
    this._orientation = orientation
  }

  asString() {
    return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`
  }

  get orientation() {
    return this._orientation
  }

  set orientation(orientation: EnPhotoOrientation) {
    this._orientation = orientation
  }
}

console.log('Picture photoOrientation', Picture.photoOrientation.Landscape) // static property

class Album extends Entity {
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
    console.log(`Album: ${this._title} \n${this._description}\n`)
    this._pictures.forEach(picture => console.log(picture.asString()))
  }

  get description() {
    return this._description
  }

  set description(description: string) {
    this._description = description
  }
}

const album: Album = new Album({
  id: 1,
  title: 'Meetups',
  description: 'Meetups all around the world'
})

const picture: Picture = new Picture({
  id: 1,
  title: 'Platzi meetup',
  orientation: EnPhotoOrientation.Landscape
})

album.addPicture(picture)
album.showPictures()
