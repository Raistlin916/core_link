let React = require('react');
let mui = require('material-ui');
let Mixins = mui.Mixins;
let StyleResizable = Mixins.StyleResizable;
let SelectField = mui.SelectField;
let TextField = mui.TextField;

let menuItems = [{
      payload: '1',
      text: 'Never'
    }, {
      payload: '2',
      text: 'Every Night'
    }, {
      payload: '3',
      text: 'Weeknights'
    }, {
      payload: '4',
      text: 'Weekends'
    }, {
      payload: '5',
      text: 'Weekly'
    }];

let DetailChart = React.createClass({
  displayName: 'TextFieldsPage',

  mixins: [StyleResizable, React.addons.LinkedStateMixin],

  getInitialState: function getInitialState() {
    return {
      selectValue: undefined
    };
  },
  _handleSelectValueChange: function _handleSelectValueChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  render: function () {
    
    return (
      <div>
        <div>
          监控页面选择：
            <SelectField
            style = {TextField}
            value = {this.state.selectValue}
            onChange = {this._handleSelectValueChange.bind(null, 'selectValue')}
            hintText = '请选择'
            menuItems = {menuItems}/>
        </div>
      </div>
    )
  }
});

module.exports = DetailChart;