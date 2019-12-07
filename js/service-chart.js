const color = d3.scaleOrdinal(d3.schemePaired);
fetch('flare.json').then(res => res.json()).then(data => {
  Sunburst()
    .data(data)
    .label('name')
    .maxLevels(2)
    .size('size')
    .color(setColor)
    .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
    (document.getElementById('sunburst-service'))
})


function setColor(node, parent) {
  console.log(node)
  console.log(parent)
  return color('red')
}