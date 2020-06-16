  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2755889524641399',
      cookie     : true,
      xfbml      : true,
      version    : 'v7.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  

   FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
   });
   function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
function facebookLogout(){
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                FB.logout(function(response) {
                     var container = document.getElementById("loginform");
  container.innerHTML = "<div id='loginform' class='wrap'> <div  class='container'> <div class='row justify-content-between'> <div class='col d-flex justify-content-end'> <div class='social-media'> <p class='mb-0 d-flex'> <button style='padding-right:70px;'><fb:login-button  scope='public_profile,email' onlogin='checkLoginState();'> </fb:login-button></button> <button style='padding-right:65px; background: black;' class='g-signin2' data-onsuccess='onSignIn' data-width='90' data-height='25' data-longtitle='true'  data-theme='dark'></button> </p> </div> </div> </div> </div> </div> ";
        
    location.reload();
                    
                });
            }
        });
    }

 
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
    //  document.getElementById('status').innerHTML =
      //  'Thanks for logging in, ' + response.name + '!';
  document.getElementById("loginform").innerHTML = "<a style='padding-left:15px; color: white; font-size: 16px'> Welcome "  + response.name + "!!</a>  <a href='#'  style='padding-left:1000px; color: white; font-size: 16px' onclick='facebookLogout();'>Sign out</a>";
    });
  }