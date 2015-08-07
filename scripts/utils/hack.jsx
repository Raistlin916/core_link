var React = require('react');

function wrapNum(data) {
  data.forEach(function(item) {
    for(var key in item){
      var value = item[key].content;
      if(React.Children.count(value) === 1){
        if(!isNaN(value)){
          value = <span>{value}</span>;
        }
      }
      item[key].content = value;
    }
  });

  return data;
};


module.exports = {
  wrapNum: wrapNum
}