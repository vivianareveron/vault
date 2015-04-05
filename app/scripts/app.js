(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Prediction Vault';
  app.route = 'home'; 
  app.data = 'soy la data';
   

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
  });

 
 //Router
 page('/', home);
 page('/friends', friends);
 page('/mine', mine);
 page('/notifications', notifications);
 page('/create', create );
 page('/myprofile', myprofile);
 page('/logout', logout);    
 
//configure router
page({hashbang: true});

function home (){
    app.route = 'home';
}    

function friends (){
    app.route = 'friends';
}  

function mine (){
    app.route = 'mine';
}      

function notifications (){
    app.route = 'notifications';
}    

function create (){
    app.route = 'create';
}    

function myprofile (){
    app.route = 'myprofile';
}        

function logout (){
    app.route = 'logout';
} 
 
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
