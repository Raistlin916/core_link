let ArrowSpan = React.createClass({
  render: function() {
    let value = this.props.data,
        addClass = null,
        arrow = null,
        reverse = this.props.reverse;

    if(!isNaN(value)){

        if(value * (reverse?-1:1) < 0){
            // addClass = {
            //   color: '#03b401',
            //   paddingRight: '12px'
            // };
            arrow = '%';
            value += arrow;
        } else if (value * (reverse?-1:1) > 0){
            // 红色
            addClass = {
              color: '#c10000',
              paddingRight: '12px'
            };
            arrow = '%';
            value += arrow;
        }
    }
    return (
     <span style={addClass}>{value}</span>
    )
  }  
});


module.exports = ArrowSpan;