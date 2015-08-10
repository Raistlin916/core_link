let React = require('react');
let mui = require('material-ui');
let DropDownMenu = mui.DropDownMenu;
let TextField = mui.TextField;
let injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

let menuItems = [
   { payload: '1', text: 'Never' },
   { payload: '2', text: 'Every Night' },
   { payload: '3', text: 'Weeknights' },
   { payload: '4', text: 'Weekends' },
   { payload: '5', text: 'Weekly' },
];



let DetailChart = React.createClass({
  render: function () {

    return (
      <div>
        <div>
          监控页面选择：
            <DropDownMenu menuItems={menuItems} />
        </div>
      </div>
    )
  }
});

module.exports = DetailChart;