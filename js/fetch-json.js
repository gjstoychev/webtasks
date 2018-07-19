// Task 2 : HTML Page that fetches JSON resources from internet - javascript part

function fetchPosts() {
  var postsUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  var result = document.getElementById("result");

  fetch(postsUrl, {
    mode: 'cors'
  })
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    result.innerHTML = text;
    console.log('Request successful', text);
  })
  .catch(function (error) {
    log('Request failed', error)
  });
}
