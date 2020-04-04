const typos = ['seuranne', 'liittonne', 'hallinne']
var typoIndex = 0
const deleteTypo = (callback) => {
  if($('#typo').text().length > 0) {
    console.log('No shit ' + $('#typo').text())
    $('#typo').text($('#typo').text().substring(0, $('#typo').text().length - 1))
    setTimeout(function() { deleteTypo(callback)}, 200)
  } else {
    typoIndex++
    if(typoIndex === typos.length) {
      typoIndex = 0
    }
    
    callback(deleteTypo)
  }
}

const typing = (callback) => {
  console.log('Typing... ' + $('#typo').text())
  console.log('Should typo... ' + typos[typoIndex])
  let cLen = $('#typo').text().length

  if(cLen < typos[typoIndex].length) {
    $('#typo').text(typos[typoIndex].substring(0, cLen+1))
    setTimeout(function() { typing(callback)}, 200)
  } else {
    setTimeout(function() { callback(typing)}, 3000)
  }
}

$(function() {
  setTimeout(function() { deleteTypo(typing)}, 3000)
})