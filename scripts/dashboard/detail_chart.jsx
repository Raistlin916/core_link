let React = require('react');
let mui = require('material-ui');
let SelectField = mui.SelectField;
let TextField = mui.TextField;

let DetailChart = React.createClass({
  render: function () {
    let menuItems = [
      { payload: '1', text: 'Never' },
      { payload: '2', text: 'Every Night' }
    ];

    return (
      <div>
        <div>
          监控页面选择：
            <SelectField menuItems={menuItems} />
            <TextField
        hintText="Password Field"
        floatingLabelText="Password"
        type="password" />
        </div>
      </div>
    )
  }
});

module.exports = DetailChart;