export interface IEntity {
  id: number
  title: string
}

export abstract class Entity {
  protected readonly _id: number
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
