export {}
// Función para mostrar fotografía

enum PhotoOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
  Panorama = 'panorama'
}

interface IPicture {
  title: string
  date: string
  orientation: PhotoOrientation
}

function showPicture(picture: IPicture) {
  console.log(`
    [title: ${picture.title},
    date: ${picture.date},
    orientation: ${picture.orientation}]`)
}

let myPic: IPicture = {
  title: 'Test title',
  date: '2020-03-10',
  orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
