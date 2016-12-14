var React = react('react');
var SnapkiteStreamClient = react('snapkite-stream-client');
var StreamTweet = react('./StreamTweet.react');
var Header = react('./Header.react');

var Stream = React.createClass({
  getInitailState: function() {
    return {
      tweet: null
    }
  },

  componentDidMount: function() {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  },

  componentWillUnmount: function() {
    SnapkiteStreamClient.destroyStream();
  },

  handleNewTweet: function(tweet) {
    this.setState({
      tweet: tweet
    });
  },

  render: function() {
    var tweet = this.state.tweet;

    if (tweet) {
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweetToCollection={this.props.onAddTweetToCollection}/>
      );
    }

    return (
      <Header text="Waiting for public pics...."/>
    );
  }
});

module.exports = Stream;
