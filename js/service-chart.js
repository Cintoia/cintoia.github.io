const color = d3.scaleOrdinal(d3.schemePaired);
fetch('flare.json').then(res => res.json()).then(data => {
  Sunburst()
    .data(data)
    .label('name')
    .maxLevels(2)
    .size('size')
    .color((d, parent) => color((d.col ? d.col : (parent ? parent.data.col : null))))
    .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
    (document.getElementById('sunburst-service'))
})
