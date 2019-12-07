const color = d3.scaleOrdinal(d3.schemePaired);
fetch('flare.json').then(res => res.json()).then(data => {
  Sunburst()
    .data(data)
    .label('name')
    .size('size')
    .color((d, parent) => color(parent ? parent.data.name : null))
    .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
    (document.getElementById('sunburst-service'));
})

