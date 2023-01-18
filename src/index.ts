/**
 * The program
 *
 *
 * By: Igor
 * Version: 1.0
 * Since:   2022-09-17
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

function asterisk(integer: number, spacesNum: number = 0) {
  let output: string = ''

  for (let counter: number = 0; counter < spacesNum; counter++) {
    output += ' '
  }
  for (let counter1: number = 0; counter1 < integer; counter1++) {
    output += '* '
  }
  console.log(output)
  if (integer > 1) {
    asterisk(integer - 1, spacesNum + 1)
  }
  console.log(output)
}

const input = prompt('Insert Hourglass Width: ')
try {
  const inputNum = parseInt(input)

  if (isNaN(inputNum)) {
    console.log('This is not a number.')
  } else if (inputNum <= 0) {
    console.log('Invalid input!')
  } else asterisk(inputNum)
} catch (e) {
  console.log('\nThis is not a number')
}

console.log('Done.')