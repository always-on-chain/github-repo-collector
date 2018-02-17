import React from 'react';

var RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <table>
      <tr><td>ID</td><td>Name</td><td>User</td><td>Created</td><td>Forks</td><td>Watchers</td><td>Language</td></tr>
      {props.repos.map(function(repo) {
        return <tr>
        <td>{repo.id}</td> 
        <td>{repo.name}</td> 
        <td>{repo.user}</td>
        <td>{repo.created}</td>
        <td>{repo.forks}</td> 
        <td>{repo.watchers}</td>
        <td>{repo.language}</td>
        </tr>
      })}
    </table>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;