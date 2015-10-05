
  /** @jsx React.DOM */
var React = require('react');

var Home = React.createClass({
  getInitialState: function() {
    return {
      state: 'idle',
      repos: <li>No repos yet.</li>
    };
  },
    onSubmit: function(event) {
        event.preventDefault();
        var self = this;
        var username = React.findDOMNode(self.refs.username).value;
        var url = "http://developer.echonest.com/api/v4/artist/search?api_key=BBG6HK62UBGI1PIZ3&format=json";
        self.setState({
          state: 'aquiring data...',
          repos: self.state.repos
        });
        $.ajax(url).done(function(data){
          self.setState({
            state: 'idle',
            repos: data.response.artists.map(function(artist){
              return (<li>{artist.name}</li>);
            })
          });
        });
      },
  componentDidMount: function () {
    // $.get(this.props.source, function(result) {
    //   var lastGist = result[0];
    //   if (this.isMounted()) {
    //     this.setState({
    //       username: lastGist.owner.login,
    //       lastGistUrl: lastGist.html_url
    //     });
    //   }
    // }.bind(this));

    var self = this;
    //var username = React.findDOMNode(self.refs.username).value;
    var url = "http://developer.echonest.com/api/v4/artist/search?api_key=BBG6HK62UBGI1PIZ3&format=json";
    self.setState({
      state: 'aquiring data...',
      repos: self.state.repos
    });
    $.ajax(url).done(function(data){
      self.setState({
        state: 'idle',
        repos: data.response.artists.map(function(artist){
          return (<blockquote><p>{artist.name}</p><small>{artist.name}</small></blockquote>);
        })
      });
    }.bind(self));

  },
  render: function() {
    return (
      // <div className="grid-block">
      //   <form onSubmit={this.onSubmit}>
      //     <div className="form-group">
      //       <input type="text" value="" placeholder="Inactive" className="form-control" />
      //     </div>
      //     <input type="text" placeholder="github username" ref="username" /> &nbsp;
      //     <input type="submit" value="enter" className="btn btn-block btn-lg btn-primary" /> &nbsp;
      //     <span>{this.state.state}</span>
      //   </form>
        <ul>{this.state.repos}</ul>
      // </div>
    );
  }
});




module.exports = Home;
