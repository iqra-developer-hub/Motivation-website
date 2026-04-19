<template>
<div class="img ">
    <div class="welcome-flex section-height">
    <button class="button1">Your Daily Dose Of Positivity✨</button>
    <h1 class="h1">Small Thoughts,<br/><strong class="strong">Big Changes</strong></h1>
    <p class="para-2">Discover daily motivation, practical tips, and<br/>real stories to lift your heart and brighten<br/> your mindset.</p>
    <div class="button-flex">
        <RouterLink to="/stories">
    <button class="button-2">Get Inspired</button>
    </RouterLink>
    <RouterLink to="/todayQuotes">
    <button class="button-3">Today's Quote</button>
    </RouterLink>
    </div>
    <div class="h3 h3-flex">
    <p class="heading">Daily Quotes<br/><span class="span">to lift your heart</span></p>
    <p class="heading">Helpful Tips<br/><span class="span">Simple tips for a better you</span></p>
    <p class="heading">Real Stories<br/><span class="span">Inspiring journeys</span></p>
    </div>
    
    </div>
</div>
</template>

<style scoped>
.img{
    background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('../assets/welome.png');
    height: 80vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.button1{
    background-color :rgba(179, 155, 181, 1);
    backdrop-filter: blur(18px);
    color:rgba(74, 50, 107, 1);
    padding:10px 10px;
    width: 220px;
    height: 50px;
    font-size: 13px;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    transition: 0.9s;
}
.button-2{
    color: white;
    border-radius: 7px;
    background-color: rgba(74, 50, 107, 1);
    padding: 10px 0px;
    border: none;
    width: 130px;
     margin-left: 20px; 
     margin-top: 20px;
}
.button-3{
    color:black ;
    background-color: white;
    padding: 10px 0px;
    border-radius: 7px;
    border: none;
    width: 130px;
    margin-left: 20px; 
    margin-top: 20px;
    font-weight: 400;
}
.button-flex{
    display: flex;
    flex-direction: row;
}
html, body {
    height: 100%;
    margin: 0;
}

.welcome-flex{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 80vh;
    padding-left: 90px;
}
.h1{
    color: white;
    margin-top: 20px;
    font-size: 40px;
    letter-spacing: 1px;
}
.strong{
    color: rgb(205, 171, 248);
    font-size: 40px;
}
.para-2{
  color: white;
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 400;
}
.h3{
    color: white;
    margin-top: 20px;
    
}
.h3-flex{
    display: flex;
    flex-direction: row;
}
.span{
    margin-right: 20px;
    margin-top: 20px;

}
.heading{
    font-size: 18px;
    color:rgb(244, 217, 247);
}

@media(max-width: 768px){
   .welcome-flex{
    padding: 20px;
    gap: 7px;
  

  }
}

</style>