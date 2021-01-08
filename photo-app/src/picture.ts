import { IEntity, Entity } from './entity'
import { PhotoOrientation } from './photo-orientation'

interface IPicture extends IEntity {
  date: string
  orientation: PhotoOrientation
}

export class Picture extends Entity {
  static photoOrientation = PhotoOrientation

  private _date: string
  private _orientation: PhotoOrientation

  constructor({ id, title, date, orientation }: IPicture) {
    super({ id, title })
    this._date = date
    this._orientation = orientation
  }

  asString() {
    return `[id: ${this._id}, title: ${this._title}, date: ${this._date} orientation: ${this._orientation}]`
  }

  get date() {
    return this._date
  }

  set date(date: string) {
    this._date = date
  }

  get orientation() {
    return this._orientation
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation
  }
}
