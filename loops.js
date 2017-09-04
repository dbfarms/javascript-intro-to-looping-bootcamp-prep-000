const strangeArray = [];

function forLoop(array) {
  return array
}

for (let i = 0; i < 25; i++) {
  if (i === 1) {
    strangeArray.push(`I am ${i} strange loop.`)
    } else {
    strangeArray.push(`I am ${i} strange loops.`)
    }
}

forLoop(strangeArray)

function whileloop() {
  let n = 10
  while (n > 0) {
    console.log(--n)
  }
  return "done"

}



function doWhileLoop() {
  const testarray = []

  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.shift()
  } while (array.length > 0 && maybeTrue());
  return array

}
