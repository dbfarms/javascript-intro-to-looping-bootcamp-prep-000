
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push('I am ${i} strange loop ${i===0 ? \'\' : \'s\' }.')
    }
  return array;
}

forLoop(strangeArray)


function whileloop(n) {
  let countdown = 10
  while (countdown > 0) {
    console.log(--countdown)
  }

  return 'done'
}


whileloop(countdown)






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
