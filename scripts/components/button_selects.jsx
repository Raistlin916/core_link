let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let FlatButton = mui.FlatButton;

let ButtonToggle = React.createClass({
  render: function () {
    let Button = this.props.isChecked ? RaisedButton : FlatButton;
    return <Button secondary={true} {...this.props}/>;
  }
});

let ButtonSelects = React.createClass({

  getInitialState: function () {
    return {
      chosenIndex: null
    }
  },

  render: function () {
    var buttonStyle = {margin: '0 10px'};
    var wrapStyle = {margin: '20px 0'};
    return (
      <div style={wrapStyle}>
        {this.props.items.map(function(item, index){
          var isChecked = index == this.state.chosenIndex;
          return <ButtonToggle isChecked={isChecked} label={item.label} {...item}
            style={buttonStyle} key={index} onClick={this.handleItemClick.bind(this, index)}/>
        }.bind(this))}
      </div>
      );
  },

  handleItemClick: function (index) {
    this.setState({
      chosenIndex: index
    });

    this.props.onChange && this.props.onChange(this.props.items[index], index);
  }
});


module.exports = ButtonSelects;