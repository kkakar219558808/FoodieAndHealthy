 function onSignIn(googleUser) {
      // get user profile information
      console.log(googleUser.getBasicProfile())
       
    }
    function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  var container = document.getElementById("loginform");
  container.innerHTML = "<a style='padding-left:15px; color: white; font-size: 16px'> Welcome "  + profile.getName() + "!!</a>  <a href='#'  style='padding-left:1000px; color: white; font-size: 16px' onclick='signOut();'>Sign out</a>";
 
}
    function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
       var container = document.getElementById("loginform");
  container.innerHTML = "<div id='loginform' class='wrap'> <div  class='container'> <div class='row justify-content-between'> <div class='col d-flex justify-content-end'> <div class='social-media'> <p class='mb-0 d-flex'> <button style='padding-right:70px;'><fb:login-button  scope='public_profile,email' onlogin='checkLoginState();'> </fb:login-button></button> <button style='padding-right:65px; background: black;' class='g-signin2' data-onsuccess='onSignIn' data-width='90' data-height='25' data-longtitle='true'  data-theme='dark'></button> </p> </div> </div> </div> </div> </div> ";
        
    location.reload();
        
            
    });
  }
