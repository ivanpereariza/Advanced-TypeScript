type CustomType = string | string[]

// Primer forma, con as + type

// function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) return input.join('')
//   else return input.split('')
// }


// const res1 = parseStr('Ivan') as string[]
// const res2 = parseStr(['I', 'v', 'a', 'n']) as string

//Segunda forma, overload de funciones

function parseStr(input: string): string[]
function parseStr(input: string[]): string

function parseStr(input: CustomType): CustomType {
  if (Array.isArray(input)) return input.join('')
  else return input.split('')
}

const res1 = parseStr('Ivan')
const res2 = parseStr(['I', 'v', 'a', 'n'])
console.log(res1.reverse())
console.log(res2.toLowerCase())
export { parseStr }
