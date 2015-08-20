let ArrowSpan = React.createClass({
  render: function() {
    let value = this.props.data,
        addClass = null,
        arrow = null,
        reverse = this.props.reverse;

    if(!isNaN(value)){

        if(value < 0){
            addClass = {
              color: reverse ? '#c10000' : null,
              paddingRight: '12px'
            };
            arrow = '% ↓';
            value += arrow;
        } else if (value > 0){
            addClass = {
              color: reverse ? null : '#c10000',
              paddingRight: '12px'
            };
            arrow = '% ↑';
            value += arrow;
        }
    }
    return (
     <span style={addClass}>{value}</span>
    )
  }  
});


module.exports = ArrowSpan;