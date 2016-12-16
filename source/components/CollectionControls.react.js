// this components renders an interface to controll a Collection
// these controls allows you to rename, empty and export a Collection


var React = require('react');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionRenameForm = require('./CollectionRenameForm');
var CollectionExportForm = require('./CollectionExportForm');

var CollectControls = React.createClass({
  getInitailState: function() {
    return {
      // Name of the collection is "new by default"
      // users can change this
      name: 'new',
      isEditingName: false
    };
  },

  getHeadertext: function() {
    var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
    var text = numberOfTweetsInCollection;

    if(numberOfTweetsInCollection === 1) {
      text = text + ' twwet in your';
    } else {
      text = text + ' tweets in your';
    }

    retun (
      <span>
        {text}<strong>{this.state.name}</strong>collection
      </span>
    );
  },

  toggleEditCollectionName: function() {
    this.setState({
      isEditingName: !this.state.isEditingName
    });
  },

  toggleEditCollectionName: function() {
    this.setState({
      isEditingName: !this.state.isEditingName
    });
  },

  setCollectionName: function (name) {
    this.setState({
      name:name,
      isEditingName: false
    });
  },

  render: function() {
    if(this.state.isEditingName) {
      return (
        <CollectionRenameForm
          name={this.state.name}
          onChangeCollectionName={this.setCollectionName}
          onCancelCollectionNameChange={this.toggleEditCollectionName}/>
      );
    }

    return (
      <div>
        <Header text={this.getHeadertext()}/>

        <Button
          label="Rename collection"
          handleClick={this.toggleEditCollectionName}/>

        <Button
          label="Empty collection"
          handleClick={this.props.onRemoveAllTweetsFromCollection}/>

        <CollectionExportForm htmlMarkup={this.props.htmlMarkup}/>
      </div>
    );
  }
});

module.exports = CollectionControls;
