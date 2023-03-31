let unknownVar: unknown

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase()
}

if (typeof unknownVar === 'boolean') {
  let isNew: boolean = unknownVar
}

const parse = (str: string): unknown => {
  return JSON.parse(str)
}
