//async 함수 안에 프로미스를 리턴으로 받으면 await 명시해줘서 동기화시킨다. 툴팁..?
async function run(){
  try{
    const user = await getUser(1);
    const repos = await getRepos(user.githubID);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  }
  catch(error){
  
  }
}

console.log("메인 코드 진행중");

const userPromise = getUser(1);
userPromise
  .then(user => console.log(user))
  .catch(error => console.error(error))

console.log("메인 코드 진행중");

// 각 함수 블록이 완료되어야 다음 블록으로 인자가 들어가는데 이것들이 중첩되는걸 콜백지옥이라고 함.

function getUser(id, callback){
  console.log('Reading Data from DB');
  const users = [
    {id:1, githubID:'neo'},
    {id:2, githubID:'john'},
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = users.find(user => {
        return user.id === id
      });
      if(user) resolve(user);
      else
      reject(new Error(`Can not find user with id:${id}`));
    },2000)
  })
}

function gRepos(user){
  getRepos(user)
}

function gCommits(repos){
  getCommits(repo[0], displayCommits);
}

function displayCommits(commits){
  console.log(commits);
}

function getUser(id, callback) {
  const users = [{ id: 1, githubID: "neo" }, { id: 2, githubID: "john" }];

  setTimeout(() => {
    console.log("Reading Data from DB");
    const user = users.find(user => userd.id === id);
    // Ready
    callback(user);
  }, 2000);
}

function getRepos(userID, callback) {
  console.log(`Finding [${userID}]s' all github repo`);
  setTimeout(() => {
    callback(["TIL", "ES6", "Express-demo"]);
  }, 1500);
}

function getCommits(repo, callback) {
  console.log(`Getting all commits in [${repo}]`);
  setTimeout(() => {
    callback(["Init repos", "commitmessage"]);
  }, 2000);
}
