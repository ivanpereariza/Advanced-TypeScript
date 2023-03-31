const noEnd = () => {
  while (true) {
    console.log('nunca paro')
  }
}


const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es string'
  } else if (Array.isArray(input)) {
    return 'Es un Array'
  }
  return fail('No match popino')
}


console.log(example('Hola'))
console.log(example([1, 2, 3, 4]))
console.log(example(1234))
console.log(example('Hola 2'))

