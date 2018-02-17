import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  changeState (data) {
    this.setState({
      repos: data
    });
  }

  search (term, callback) {
    console.log('callback', callback)
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      method: 'POST',
      url: 'http://localhost:1128/repos',
      data: term,
      contentType: 'text/plain',
      success: function(data) {
        console.log('POST SUCCESS! ', data)
      },
      error: function(error) {
        console.log('POST ERROR ', error);
      }
    })
    $.ajax({
      method: 'GET',
      url: 'http://localhost:1128/repos',
      data: term,
      contentType: 'text/plain',
      success: function(data) {
        console.log('GET SUCCESS! ', data)
        callback(data);
        // for (var i = 0; i < data.length; i++) {
        //   document.getElementById('table').appendChild(<tr>data[i]</tr>);
        // }
      },
      error: function(error) {
        console.log('GET ERROR ', error);
      }
    })
    
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)} changeState={this.changeState.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));