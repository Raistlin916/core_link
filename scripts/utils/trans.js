var fs = require('fs');
var path = require('path');
var s = fs.readFileSync(path.join(__dirname, './meta')).toString();

s = s.split('\n');

s = s.map(function(line){
  var data = line.split(/\s+/);
  return {
    id: data[0],
    serviceName: data[1],
    service: data[2],
    core: data[3],
    method: data[4],
    url: data[5],
    name: data[6]
  }
})

console.log(s);
