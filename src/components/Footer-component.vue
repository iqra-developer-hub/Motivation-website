<template>
<div class="div-1 flex-parent">
    <!-- section-1 -->
    <div>
   <h2>🎀Daily spark</h2>
   <p>Be Inspired. Every Day.</p>
    <p class="p">a space of positive thoughts. Helpfull <br/>Tips, and stories to inspire your<br/> journey.</p>
      
    <!--social icons section -->
   
    <i class="fa-brands fa-tiktok social-icon"></i>
    <i class="fa-brands fa-square-instagram social-icon"></i>
    <i class="fa-brands fa-youtube social-icon"></i>
   
    </div>
   

   <!-- Router section -->
    <div class="flex">
        <h2>Explore</h2>
    <nav class="nav-links">
    <RouterLink class="nav-links flex" to="/">Home</RouterLink>
    <RouterLink class="nav-links flex" to="/quotes">Quotes</RouterLink>
    <RouterLink class="nav-links flex" to="/tips">Tips</RouterLink>
    <RouterLink class="nav-links flex" to="/stories">Stories</RouterLink>
    <RouterLink class="nav-links flex" to="/about">About</RouterLink>
    </nav>
    </div>
    <!-- cumminty section -->
     <div class="">
        <h2>Community</h2>
          <nav class="nav-links">
    <RouterLink class="nav-links flex" to="/submit">Submit a story</RouterLink>
    <RouterLink class="nav-links flex" to="/suggest">Suggest a topic</RouterLink>
    <RouterLink class="nav-links flex" to="/support">Support us</RouterLink>
    <RouterLink class="nav-links flex" to="/contact">Contact</RouterLink>
    </nav>
     </div>

    <!-- policy section -->
     <div class="flex">
      <h2>Legal</h2>
          <nav class="nav-links">
    <RouterLink class="nav-links flex" to="/privacy-policy">Privacy policy</RouterLink>
    <RouterLink class="nav-links flex" to="/term">Terms of use</RouterLink>
    <RouterLink class="nav-links flex" to="/cookie-policy">Cookie policy</RouterLink>
    </nav>
    </div>

      <!-- section-2 -->
    <div class="flex">
   <h2>Our Mission</h2>
    <p class="p">To spread positivity and help<br/> people grow through daily<br/> motivation and support .❤</p> 
    <hr/>
    </div>
  </div>
  <footer>
    <p class="Footer">© 2026 Daily Spark. All Rights Reserved .💜</p>
  </footer>
  </template>


<style scoped>
   .div-1{
    background-color:rgba(74, 50, 107, 1);
    height: 30vh;
    margin-top: 40px ;
    text-align: center;
  }
   .flex{
    display: flex;
    flex-direction: column;
    color: white;
    text-decoration: none;
    
  } 
  .social-icon{
   margin-top: 15px;
   margin-right: 10px;
   font-size: 28px;
   color: white;
   background-color: rgb(169, 91, 241);
   border-radius: 50%;
   padding:5px;
   
  } 
  .h1{
    font-size: 35px;
    font-weight: 500;
    line-height: 30px;
    
  } 
  .p{
    margin-top: 20px;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: 1.2px;
  }
  .flex-parent{
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
     /* margin: 40px;  */
    padding-top: 50px;
    color: white;
    line-height: 26px;
    
  }
  .Footer{
    background-color:rgba(74, 50, 107, 1) ;
    text-align: center;
    padding: 35px 10px;
    color:white;
    border-top:1px solid rgb(114, 109, 109);
  }   
</style>