// script.js


import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
var jEntriesNum = 1;
router.setState();
// Make sure you register your service worker here too
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }


document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.setAttribute('num',jEntriesNum);
        document.querySelector('main').appendChild(newPost);
        jEntriesNum++;
      }); 
    }).then(function(){
      const jEntries = document.getElementsByTagName('journal-entry');
      var length = jEntries.length;
      for (var i = 0;i < length;i++){
        jEntries[i].addEventListener('click',function(){
            // console.log(this.entry.title);
            var num = this.getAttribute('num');
            // let singlePost = document.createElement('entry-page');
            // singlePost.entry = this.entry;
            // document.body.append(singlePost);
            history.pushState(null,'EntryPage'+num,'Entry'+num);
            router.setState();
        });
      };
      // for(var i=0; i<length; i++){
      //   jEntries[i].addEventListener('click',e=>{
      //     console.log(e.);
      //   });
      // }
      // jEntries[2].addEventListener('click',e=>{
      //   console.log(jEntries[2].getAttribute('num'));
      // });
      
      // var myFunction = function() {
      //   console.log("clicked");
      //   console.log(this.entry.title);
      // };
      
      // for(var jEntry of jEntries){
      //   jEntry.addEventListener('click',e=>{
      //     console.log(this.getAttribute('num'));
      //   });
      // }
    });  
});

var settingsButton = document.getElementsByTagName('img')[0];
settingsButton.addEventListener("click", e=>{
  // console.log("settings clicked");
  history.pushState(null,'Settings','settings');
  router.setState();
  // let settings = document.createElement('settings');
  // document.body.append(settings);
});

var homeButton = document.getElementsByTagName('h1')[0];
homeButton.addEventListener('click', e=>{
  // console.log("home clicked");
  history.pushState(null,'HomePage','index.html');
  router.setState();
});


window.onpopstate = function(e) {
  // console.log(window.location.pathname);
  router.setState();
};


