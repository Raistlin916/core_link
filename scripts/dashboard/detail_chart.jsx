'use strict';

var React = require('react/addons');

var _require = require('material-ui');

var ClearFix = _require.ClearFix;
var Mixins = _require.Mixins;
var SelectField = _require.SelectField;
var TextField = _require.TextField;

var StyleResizable = Mixins.StyleResizable;

var TextFieldsPage = React.createClass({
  displayName: 'TextFieldsPage',

  mixins: [StyleResizable, React.addons.LinkedStateMixin],

  getInitialState: function getInitialState() {
    return {
      errorText: 'This field is required.',
      error2Text: 'This field must be numeric.',
      floatingErrorText: 'This field is required.',
      floatingError2Text: 'This field must be numeric.',
      propValue: 'Prop Value',
      floatingPropValue: 'Prop Value',
      valueLinkValue: 'Value Link',
      selectValue: undefined,
      selectValue2: undefined,
      selectValueLinkValue: 4,
      floatingValueLinkValue: 'Value Link'
    };
  },

  getStyles: function getStyles() {
    var styles = {
      group: {
        width: '100%',
        float: 'left',
        marginBottom: 32
      },
      textfield: {
        marginTop: 24
      }
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.group.width = '50%';
    }

    return styles;
  },

  render: function render() {

    var componentInfo = [{
      name: 'Props',
      infoArray: [{
        name: 'errorStyle',
        type: 'object',
        header: 'optional',
        desc: 'The style object to use to override error styles.'
      }, {
        name: 'errorText',
        type: 'string',
        header: 'optional',
        desc: 'The error text string to display.'
      }, {
        name: 'floatingLabelText',
        type: 'string',
        header: 'optional',
        desc: 'The text string to use for the floating label element.'
      }, {
        name: 'fullWidth',
        type: 'bool',
        header: 'optional',
        desc: 'If true, the field receives the property width 100%.'
      }, {
        name: 'hintText',
        type: 'string',
        header: 'optional',
        desc: 'The hint text string to display.'
      }, {
        name: 'multiLine',
        type: 'bool',
        header: 'default: false',
        desc: 'If true, a textarea element will be rendered. The textarea also grows and shrinks according to the number of lines.'
      }, {
        name: 'onEnterKeyDown',
        type: 'function',
        header: 'optional',
        desc: 'The function to call when the user presses the Enter key.'
      }, {
        name: 'style',
        type: 'object',
        header: 'optional',
        desc: 'Override the inline-styles of the TextField\'s root element.'
      }, {
        name: 'type',
        type: 'string',
        header: 'optional',
        desc: 'Specifies the type of input to display such as "password" or "text".'
      }]
    }, {
      name: 'Methods',
      infoArray: [{
        name: 'blur',
        header: 'TextField.blur()',
        desc: 'Removes focus on the input element.'
      }, {
        name: 'clearValue',
        header: 'TextField.clearValue()',
        desc: 'Clears the value on the input element.'
      }, {
        name: 'focus',
        header: 'TextField.focus()',
        desc: 'Sets the focus on the input element.'
      }, {
        name: 'getValue',
        header: 'TextField.getValue()',
        desc: 'Returns the value of the input.'
      }, {
        name: 'setErrorText',
        header: 'TextField.setErrorText(newErrorText)',
        desc: 'Sets the error text on the input element.'
      }, {
        name: 'setValue',
        header: 'TextField.setValue(newValue)',
        desc: 'Sets the value of the input element.'
      }]
    }, {
      name: 'Events',
      infoArray: [{
        name: 'onBlur',
        header: 'function(e)',
        desc: 'Callback function that is fired when the textfield loses' + 'focus.'
      }, {
        name: 'onChange',
        header: 'function(e)',
        desc: 'Callback function that is fired when the textfield\'s value ' + 'changes.'
      }, {
        name: 'onFocus',
        header: 'function(e)',
        desc: 'Callback function that is fired when the textfield gains ' + 'focus.'
      }]
    }];

    var styles = this.getStyles();
    var menuItems = [{ payload: '1', text: 'Never' }, { payload: '2', text: 'Every Night' }, { payload: '3', text: 'Weeknights' }, { payload: '4', text: 'Weekends' }, { payload: '5', text: 'Weekly' }];
    var arbitraryArrayMenuItems = [{ id: 1, name: 'Never' }, { id: 2, name: 'Every Night' }, { id: 3, name: 'Weeknights' }, { id: 4, name: 'Weekends' }, { id: 5, name: 'Weekly' }];

    return React.createElement(
      
      React.createElement(
        ClearFix,
        null,
        React.createElement(
          'div',
          { style: styles.group },
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Hint Text' }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Hint Text',
            defaultValue: 'Default Value' }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Hint Text',
            value: this.state.propValue,
            onChange: this._handleInputChange }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Hint Text',
            valueLink: this.linkState('valueLinkValue') }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Hint Text (MultiLine)',
            multiLine: true }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'The hint text can be as long as you want, it will wrap.',
            multiLine: true }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Hint Text',
            errorText: 'The error text can be as long as you want, it will wrap.' }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Hint Text',
            errorText: this.state.errorText,
            onChange: this._handleErrorInputChange }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Hint Text',
            errorText: this.state.error2Text,
            onChange: this._handleError2InputChange,
            defaultValue: 'abc' }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Disabled Hint Text',
            disabled: true }),
          React.createElement('br', null),
          React.createElement(TextField, {
            style: styles.textfield,
            hintText: 'Disabled Hint Text',
            disabled: true,
            defaultValue: 'Disabled With Value' }),
          React.createElement('br', null),
          React.createElement(SelectField, {
            style: styles.textfield,
            value: this.state.selectValue,
            onChange: this._handleSelectValueChange.bind(null, 'selectValue'),
            hintText: 'Hint Text',
            menuItems: menuItems }),
          React.createElement('br', null),
          React.createElement(SelectField, {
            valueLink: this.linkState('selectValueLinkValue'),
            floatingLabelText: 'Float Label Text',
            valueMember: 'id',
            displayMember: 'name',
            menuItems: arbitraryArrayMenuItems }),
          React.createElement('br', null),
          React.createElement(SelectField, {
            style: styles.textfield,
            value: this.state.selectValue2,
            onChange: this._handleSelectValueChange.bind(null, 'selectValue2'),
            menuItems: arbitraryArrayMenuItems })
        ),
        React.createElement(
          'div',
          { style: styles.group },
          React.createElement(TextField, {
            hintText: 'Hint Text',
            floatingLabelText: 'Floating Label Text' }),
          React.createElement('br', null),
          React.createElement(TextField, {
            hintText: 'Hint Text',
            defaultValue: 'Default Value',
            floatingLabelText: 'Floating Label Text' }),
          React.createElement('br', null),
          React.createElement(TextField, {
            hintText: 'Hint Text',
            floatingLabelText: 'Floating Label Text',
            value: this.state.floatingPropValue,
            onChange: this._handleFloatingInputChange }),
          React.createElement('br', null),
          React.createElement(TextField, {
            hintText: 'Hint Text',
            floatingLabelText: 'Floating Label Text',
            valueLink: this.linkState('floatingValueLinkValue') }),
          React.createElement('br', null),
          React.createElement(TextField, {
            hintText: 'Hint Text (MultiLine)',
            floatingLabelText: 'Floating Label Text',
            multiLine: true }),
          React.createElement('br', null),
          React.createElement(TextField, {
            hintText: 'Hint Text',
            errorText: this.state.floatingErrorText,
            floatingLabelText: 'Floating Label Text',
            onChange: this._handleFloatingErrorInputChange }),
          React.createElement('br', null),
          React.createElement(TextField, {
            hintText: 'Hint Text',
            errorText: this.state.floatingError2Text,
            defaultValue: 'abc',
            floatingLabelText: 'Floating Label Text',
            onChange: this._handleFloating2ErrorInputChange }),
          React.createElement('br', null),
          React.createElement(TextField, {
            hintText: 'Disabled Hint Text',
            disabled: true,
            floatingLabelText: 'Floating Label Text' }),
          React.createElement('br', null),
          React.createElement(TextField, {
            hintText: 'Disabled Hint Text',
            disabled: true,
            defaultValue: 'Disabled With Value',
            floatingLabelText: 'Floating Label Text' }),
          React.createElement('br', null),
          React.createElement(TextField, {
            hintText: 'Password Field',
            floatingLabelText: 'Password',
            type: 'password' }),
          React.createElement('br', null)
        )
      )
    );
  },

  _handleErrorInputChange: function _handleErrorInputChange(e) {
    this.setState({
      errorText: e.target.value ? '' : 'This field is required.'
    });
  },

  _handleError2InputChange: function _handleError2InputChange(e) {
    var value = e.target.value;
    var isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
    this.setState({
      error2Text: isNumeric ? '' : 'This field must be numeric.'
    });
  },

  _handleFloatingErrorInputChange: function _handleFloatingErrorInputChange(e) {
    this.setState({
      floatingErrorText: e.target.value ? '' : 'This field is required.'
    });
  },

  _handleFloating2ErrorInputChange: function _handleFloating2ErrorInputChange(e) {
    var value = e.target.value;
    var isNumeric = !isNaN(parseFloat(value)) && isFinite(value);
    this.setState({
      floatingError2Text: isNumeric ? '' : 'This field must be numeric.'
    });
  },

  _handleInputChange: function _handleInputChange(e) {
    this.setState({
      propValue: e.target.value
    });
  },

  _handleSelectValueChange: function _handleSelectValueChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  _handleFloatingInputChange: function _handleFloatingInputChange(e) {
    this.setState({
      floatingPropValue: e.target.value
    });
  }

});

module.exports = TextFieldsPage;