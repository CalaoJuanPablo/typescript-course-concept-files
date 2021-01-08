// Orientación para fotografía

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

let landscape: PhotoOrientation = PhotoOrientation.Landscape
console.log('Landscape')

// En este caso le asigna valores de índice numérico a cada posibilidad del enum

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  EEUU = 'usa',
  Espana = 'esp'
}

let country: Country = Country.Colombia

// En este caso se asigna los valores personalizados de cada clave del enum
