// router.js

export const router = {
  
};

/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
router.setState = function() {
  var currentPath = window.location.pathname;
  console.log(currentPath);
  // console.log(pageNum);
  // settings page
  if(currentPath == "/settings"){
    document.body.className = "settings";
    var homeButton = document.getElementsByTagName('h1')[0];
    homeButton.innerHTML = "settings";

  }

  // home page
  if(currentPath=="/lab7/"){
    document.body.className = null;
    var homeButton = document.getElementsByTagName('h1')[0];
    homeButton.innerHTML = "Journal Entries";
    var entryPage = document.getElementsByTagName('entry-page');
    for(var i = 0; i<entryPage.length;i++){
      entryPage[i].remove();
    }
  }

  var pageNums = currentPath.match(/\d+/);
  if(pageNums!=null){
    var pageNum = pageNums[0];
    document.body.className = "single-entry";
    let singlePost = document.createElement('entry-page');
    let post = document.getElementsByTagName('journal-entry')[pageNum-1];
    singlePost.entry = post.entry;
    document.body.append(singlePost);
    var homeButton = document.getElementsByTagName('h1')[0];
    homeButton.innerHTML = "Entry"+pageNum;
  }
  // settings page
  // if(pageNum!=null){
    
  // }


  /**
   * - There are three states that your SPA app will have
   *    1. The home page
   *    2. The entry page (showing one individual entry)
   *    3. The settings page (currently blank, no actual settings here, just a placeholder where a real settings page would go)
   * 
   * - If you look at the CSS, we have 2 classes you can add to the body element to help change states, "settings" and "single-entry"
   * - Changing states will require more than just changing these classes, for example the settings page requires you to change the title to "Settings"
   * - And each individual entry the title changes to "Entry #" based on it's number in the entry order
   *
   * - When changing states, make sure the back and forward buttons work. You can use hash URLs (e.g. https://someurl.com/#settings) when changing states
   *   to make things easier.
   * - Similarly, when viewing an individual entry, a hashed URL might look like https://someurl.com/#entry3
   * 
   * - Some tips:
   *    1. Push a new state object to the history object using history.pushState() 
   *    2. look up the documentation for how to use pushState() when you try it
   *    3. look up the documentation for the "popstate" event listener (fires only on back button), useful in your script.js file
   *    4. For each <journal-entry> element, you can grab the JSON version of its info with .entry (e.g. someJournalEntryElement.entry)
   *       a. This is useful when viewing a single entry. You may notice an <entry-page> element in the HTML, this is the element that is displayed when the
   *          .single-entry class is applied to the body. You can populate this element by using .entry similarly. So if I wanted to grab a specific <journal-entry>
   *          and populate it's info into the <entry-page>, I would simply use an assignment of entryPageElement.entry = journalEntryElement.entry
   *       b. Clearing the <entry-page> element of its previous data can be a bit tricky, it might be useful to just delete it and insert a new blank one 
   *          in the same spot each time. Just a thought.
   *
   * - Answers to some questions you may have:
   *    1. You may add as many helper functions in this file as you like
   *    2. You may modify the parameters of setState() as much as you like
   */
  
}
