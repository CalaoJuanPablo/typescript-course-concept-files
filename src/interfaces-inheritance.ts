export {}

enum PhotoOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
  Panorama = 'panorama'
}

interface Entity {
  id: number
  title: string
}

interface Album extends Entity {
  description: string
}

interface Picture extends Entity {
  orientation: PhotoOrientation
}

const album: Album = {
  id: 1,
  title: 'Meetups',
  description: 'Community events around the world'
}

const picture: Picture = {
  id: 1,
  title: 'Family',
  orientation: PhotoOrientation.Landscape
}

let newPicture = {} as Picture
newPicture.id = 2
newPicture.title = 'Moon'
newPicture.orientation = PhotoOrientation.Square
