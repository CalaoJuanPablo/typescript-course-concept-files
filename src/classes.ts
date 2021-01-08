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
  private id: number
  private title: string
  private orientation: EnPhotoOrientation

  constructor({ id, title, orientation }: IPicture) {
    this.id = id
    this.title = title
    this.orientation = orientation
  }

  asString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
  }
}

class Album {
  private id: number
  private title: string
  private description: string
  private pictures: Picture[]

  constructor({ id, title, description }: IAlbum) {
    this.id = id
    this.title = title
    this.description = description
    this.pictures = []
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture)
  }

  showPictures() {
    console.log(`Album: ${this.title} \n${this.description}\n`)
    this.pictures.forEach(picture => console.log(picture.asString()))
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
