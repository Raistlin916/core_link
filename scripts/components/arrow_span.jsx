let ArrowSpan = React.createClass({
  render: function() {
    let value = this.props.data,
        addClass = null,
        arrow = null;
    if(!isNaN(value)){
        if(value < 0){
            addClass = {
              color: '#03b401',
              paddingRight: '12px'
            };
            arrow = '%↓';
            value += arrow;
        }else{
            addClass = {
              color: '#c10000',
              paddingRight: '12px'
            };
            arrow = '%↑';
            value += arrow;
        }
    }
    return (
     <span style={addClass}>{value}</span>
    )
  }  
});


module.exports = ArrowSpan;