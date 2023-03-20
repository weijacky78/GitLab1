export default (num, callback) => {
    let url = `https://randomuser.me/api/?results=${num}`;
    let fetchPromise = fetch(url); // sends fetch request
    let jsonPromise = fetchPromise.then(response => response.json()); // takes fetch respose, asks to ==> json
    jsonPromise.then(json => { callback(json) }); // when json'd send to callback function
};