var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
  getInitialState: function () {
       return {
         isHeaderHidden: false,
         title: 'Stateful React Component'
}; },
     handleClicks: function () {
       this.setState({
         isHeaderHidden: !this.state.isHeaderHidden
       });
},
     render: function () {
       var headerElement = React.createElement('h1', { className:
   'header', key: 'header' }, this.state.title);
       var buttonElement = React.createElement('button', { className:
   'btn btn-default', onClick: this.handleClicks, key: 'button' }, 'Show header');

    if (this.state.isHeaderHidden) {
         return React.createElement('div', null, [ buttonElement ]);
}
       return React.createElement('div', null, [ buttonElement,
   headerElement ]);
}
});

var reactCompomentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactCompomentElement, document.getElementById('app'));
