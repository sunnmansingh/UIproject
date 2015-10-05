
  /** @jsx React.DOM */
var React = require('react');


// var Home = React.createClass({
//   render: function () {
//     return (
//       <div><h2>Welcome to react foundation apps whatever</h2></div>





//     );
//   }
// });

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
  render: function() {
    return (
      <section>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="github username" ref="username" /> &nbsp;
          <input type="submit" value="enter" /> &nbsp;
          <span>{this.state.state}</span>
        </form>
        <ul>{this.state.repos}</ul>
      </section>
    );
  }
});




module.exports = Home;
