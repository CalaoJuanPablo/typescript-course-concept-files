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

class Picture {
  private _id: number
  private _title: string
  private _orientation: EnPhotoOrientation

  constructor({ id, title, orientation }: IPicture) {
    this._id = id
    this._title = title
    this._orientation = orientation
  }

  asString() {
    return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`
  }

  get id() {
    return this._id
  }

  set id(id: number) {
    this._id = id
  }

  get title() {
    return this._title
  }

  set title(title: string) {
    this._title = title
  }

  get orientation() {
    return this._orientation
  }

  set orientation(orientation: EnPhotoOrientation) {
    this._orientation = orientation
  }
}

class Album {
  private _id: number
  private _title: string
  private _description: string
  private _pictures: Picture[]

  constructor({ id, title, description }: IAlbum) {
    this._id = id
    this._title = title
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

  get id() {
    return this._id
  }

  set id(id: number) {
    this._id = id
  }

  get title() {
    return this._title
  }

  set title(title: string) {
    this._title = title
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
