const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,

});

let Repo = mongoose.model('Repo', repoSchema);

var repo = new Repo({name: 'Wayne'});

let save = (err, repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if (err) return console.error(err);
  repo.name;
  // Repo.find(function(err, repos) {
  //   if (err) return console.error(err);
  //   console.log(repos)
  // })
}

module.exports.save = save;