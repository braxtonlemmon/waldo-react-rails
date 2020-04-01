persons = [
  ['Waldo',  383,  412,  556,  618],
  ['Wenda',  1183, 1206, 1039, 1081],
  ['Woof',   1468, 1491, 294,  311],
  ['Odlaw',  778,  797,  156,  204],
  ['Wizard', 1883, 1904, 342, 378]
]

persons.each do |name, left, right, top, bottom|
  Person.create(
    name: name,
    left: left,
    right: right,
    top: top,
    bottom: bottom
  )
end
