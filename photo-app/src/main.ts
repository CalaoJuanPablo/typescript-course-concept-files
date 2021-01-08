import { User } from './user'
import { Album } from './album'
import { Picture } from './picture'
import { PhotoOrientation } from './photo-orientation'

const user = new User({
  id: 1,
  username: 'calaojuanpablo',
  firstName: 'Juan',
  isPro: true
})
const album = new Album({
  id: 1,
  title: 'Platzi pictures',
  description: "Awesome pictures of Platzi's offices"
})
const picture = new Picture({
  id: 1,
  title: 'Auditorium',
  date: '2020-10-10',
  orientation: PhotoOrientation.Landscape
})

album.addPicture(picture)
user.addAlbum(album)

user.showAlbums()
