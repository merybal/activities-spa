export default async function getActivities() {
    const resp = await fetch('https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=60');
    const data = await resp.json();
    for (const item of data) {
        const parsedActivity = JSON.parse(item.activity);
        item.activity = parsedActivity;
    }
    return data;
}

// var parse = require('parse-link-header');
 
// var linkHeader =
//   '<https://api.github.com/user/9287/repos?page=3&per_page=100>; rel="next", ' +
//   '<https://api.github.com/user/9287/repos?page=1&per_page=100>; rel="prev"; pet="cat", ' +
//   '<https://api.github.com/user/9287/repos?page=5&per_page=100>; rel="last"'
 
// var parsed = parse(linkHeader);
// console.log(parsed);
