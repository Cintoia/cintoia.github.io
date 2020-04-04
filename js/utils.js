const typos = ['seuranne', 'liittonne', 'hallinne']
var typoIndex = 0
const deleteTypo = (callback) => {
  if($('#typo').text().replace('_','').length > 0) {
    let endIndex = $('#typo').text().replace('_','').length - 1
    //let spaces = typos[typoIndex].length - endIndex
    $('#typo').text($('#typo').text().substring(0, endIndex) + "_")
    setTimeout(function() { deleteTypo(callback)}, 100)
  } else {
    typoIndex++
    if(typoIndex === typos.length) {
      typoIndex = 0
    }
    callback(deleteTypo)
  }
}

const typing = (callback) => {
  let cLen = $('#typo').text().replace('_','').length
  if(cLen < typos[typoIndex].length) {
    $('#typo').text(typos[typoIndex].substring(0, cLen+1) + "_")
    setTimeout(function() { typing(callback)}, 180 + Math.round((Math.random() * 25)))
  } else {
    $('#typo').text(typos[typoIndex])
    setTimeout(function() { callback(typing)}, 3000)
  }
}

$(function() {
  setTimeout(function() { deleteTypo(typing)}, 3000)
})