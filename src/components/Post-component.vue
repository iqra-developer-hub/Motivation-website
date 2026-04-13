<template>
       <div class="div-1 ">
      <div class="div-2">
      <h1 class="h1">Today's Spark <br/><strong class="p"> Motivation to Start your day right</strong></h1>
      <p class="p"></p>
      <button class="button">📅 New posts every day</button>
      </div>

    <div class="img-flex">
   <img class="post-img" src="https://i.pinimg.com/1200x/77/bb/17/77bb17ca4ecd7b44822e32447a5dc8bc.jpg"></img>
    <img class="post-img" src="https://i.pinimg.com/736x/a1/82/e0/a182e052bb32ef1712d8ab1d95ca859e.jpg"></img>
     <img class="post-img"src="https://i.pinimg.com/736x/13/33/b1/1333b1964181b5a6fd90ca2ac700850a.jpg"></img>
     <button class="button-2">View All Postes ⇒</button>
   </div>

   <div class="button-2-flex">
   
   </div>
   </div>
   <div>
     
   </div>
   
</template>

<style scoped>
 .div-1{
    background-color:rgb(224, 220, 220);
    height: 60vh;
    margin: 40px 40px ;

 }
 .h1{
    font-size: 35px;
    color: rgba(74, 50, 107, 1);
    padding: 10px;
    margin-left: 18px;
    margin-bottom: 0;
 }
 .p{
    font-size: 20px;
    font-weight: 100;
    color: rgb(113, 76, 167);
 }
 .button{
    background-color :rgb(48, 46, 46);
    backdrop-filter: blur(22px);
    color:white;
    padding: 6px ;
    width: 210px;
    height: 40px;
    font-size: 15pxc;
    font-weight: 700;
    border: none;
    transition: 0.9s;
     margin-right: 30px;
    margin-top: 30px;
    margin-left: 700px;
   
    
}
.div-2{
    display: flex;
    justify-content:space-between;
    align-items: flex-start;
   
}
.post-img{
  height: 250px;
  width: 210px;
  padding-bottom: 90px;
  border-radius: 7px;
  margin-top: 40px;
}
.img-flex{
   display: flex;
   justify-content: center;
   align-items: center;
   /* flex-direction: row; */
   flex-wrap: wrap;
   gap: 50px;

}
 .button-2{
    background-color :rgba(179, 155, 181, 1);
    backdrop-filter: blur(18px);
    color:rgba(74, 50, 107, 1);
    padding: 6px ;
    width: 210px;
    height: 40px;
    font-size: 15pxc;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    transition: 0.9s;
     margin-right: 30px;
    margin-bottom: 30px;
   
      
}
.button-2-flex{
    display: flex;
    justify-content: center;
}
</style>