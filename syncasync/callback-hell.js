console.log("메인 코드 진행중");
// 대표적인 비동기함수. 요청하고 응답을 기다리지 않음.
getUser(1,gRepos);
console.log("메인 코드 진행중");

// 각 함수 블록이 완료되어야 다음 블록으로 인자가 들어가는데 이것들이 중첩되는걸 콜백지옥이라고 함.

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
