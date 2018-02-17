const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true},
  name: String,
  user: String,
  created: String,
  forks: Number,
  watchers: Number,
  language: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  var newRepo;
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  for (var i = 0; i < repos.length; i++) {
    newRepo = new Repo({
      id: repos[i].id,
      name: repos[i].name,
      user: repos[i].owner.login,
      created: repos[i].created_at,
      forks: repos[i].forks,
      watchers: repos[i].watchers,
      language: repos[i].language
  })

   newRepo.save(function(err) {
    //  if (err) return console.log('ERROR on Save', err)
   });
 }
}

let get = (callback) => {
  Repo.find({language: 'Ruby'}, function(err, repos) {
    if (err) return console.log('ERROR on Find', err);
    console.log('REPOS from GET', repos);
    callback(repos);
  });
}

module.exports.save = save;
module.exports.get = get;