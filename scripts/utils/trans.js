var fs = require('fs');
var s = fs.readFileSync('./testdata').toString();

s = s.split('\n');

s = s.map(function(line){
  var data = line.split(/\s+/);
  return {
    id: data[0],
    core: data[1],
    service: data[2],
    method: data[3],
    url: data[4],
    name: data[5]
  }
})

console.log(s);