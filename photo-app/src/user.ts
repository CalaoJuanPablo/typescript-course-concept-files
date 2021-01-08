import { Album } from './album'

interface IUser {
  id: number
  username: string
  firstName: string
  isPro: boolean
}

export class User {
  private _id: number
  private _username: string
  private _firstName: string
  private _isPro: boolean
  private _albums: Album[]

  constructor({ id, username, firstName, isPro }: IUser) {
    this._id = id
    this._username = username
    this._firstName = firstName
    this._isPro = isPro
    this._albums = []
  }

  showAlbums() {
    this._albums.forEach(album => album.showPictures())
  }

  get id() {
    return this._id
  }

  get username() {
    return this._username
  }

  get firstName() {
    return this._firstName
  }

  get isPro() {
    return this._isPro
  }

  get albums() {
    return this._albums
  }

  addAlbum(album: Album) {
    this._albums.push(album)
  }
}
