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
  console.log('AMOUNT OF REPOS', repos.length);

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
     if (err) return console.log('ERROR on Save', err)
   });

   Repo.find(function(err, repos) {
    if (err) return console.log('ERROR on Find', err);
    console.log('REPOS from FIND', repos, 'REPOS LENGTH', repos.length);
    // return repos;
  })
 }
}

// let get = (repos) => {
//   Repo.find(function(err, repos) {
//     if (err) return console.log('ERROR on Find', err);
//     console.log('REPOS from FIND', repos);
//     // return repos;
//   })
// }

module.exports.save = save;