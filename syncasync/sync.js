console.log("메인 코드 진행중");
const user = getUser(1, user => {
  console.log(user);
});
// 대표적인 비동기함수. 요청하고 응답을 기다리지 않음.
console.log(user);
console.log("메인 코드 진행중");

// 각 함수 블록이 한번처
getUser(1, user => {
  getRepos(user.githubID, repos => {
    getCommits(repo[0], commits => {
      console.log(commits);
    });
  });
});

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
