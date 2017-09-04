
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push('I am ${i} strange loop ${i===0 ? \'\' : \'s\' }.')
    }
  return array;
}



function whileloop(n) {
    while (n > 0) {
    console.log(--n)
  }
  return 'done'
}


function doWhileLoop(array) {
    do {
    array.pop()
    return array;
  } while (array.length > 0 && maybeTrue());

}
