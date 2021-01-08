function handleError(code: number, message: string): never {
  // Process...
  // Generate message

  throw new Error(`${message}. Code ${code}`)
}

function sumNumber(limit: number): never {
  let sum = 0
  while (true) {
    sum++
  }
}
