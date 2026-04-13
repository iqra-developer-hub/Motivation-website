<template>
   <div class="div-1">
    <h1 class="h1">Stay Inspired, Every Day</h1>
    <p class="p">Get daily quoets and tips deliverd to your inbox</p>
    <div>
      <input class="input" type="email" placeholder="Enter your email"/></div>
      <button class="button">subscribe</button>
      <p class="p">No spam. unsubscribe anytime</p>
    
   </div> 
</template>

<style scoped>
.div-1{
  background-color: rgb(224, 220, 220);
    height: 30vh;
    margin: 70px 50px  0px 50px;
    width: 90%;
    border-radius: 10px;
    padding: 20px 20px;
    text-align: center;
    
}
.h1{
   color: rgb(86, 24, 145);
   margin-top: 20px;

}
.p{
   color: rgb(81, 31, 128);
   margin-top: 8px;
   font-size: 20px;
   padding-bottom: 0px;
}
.input{
   height: 20px;
   width: 500px;
   padding:15px 15px ;
   margin-top: 20px;
   border-radius: 6px;
   border: none;
}
 .button{
    background-color :rgba(179, 155, 181, 1);
    backdrop-filter: blur(18px);
    color:rgba(74, 50, 107, 1);
    padding: 6px ;
    width: 210px;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    transition: 0.9s;
    margin-top: 15px;    
}

</style>
