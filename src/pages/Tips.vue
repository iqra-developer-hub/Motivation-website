<template>
    <div class="div-1">
        <div class="div-2">
    <i><h1 class="h1">Daily Helpful Tips</h1></i>
    <h2 class="h2">🌱 1.Self Care Tips</h2>
    <ul class="p">
        <li>Drink at least 6-8 glasses of water</li>
         <li>Take 10 minutes for yourself daily</li>
          <li>Get enough sleep</li>
    </ul>
    </div>
    
     <div class="div-2">
      <i><h2 class="h2">🧠 2. Mindset Tips</h2></i>
    <ul class="p">
        <li>Don’t compare yourself to others</li>
         <li>Focus on your own growth</li>
          <li>Think positive, act positive</li>
    </ul>
    </div>

     <div class="div-2">
    <i> <h2 class="h2">📚 3. Study Tips</h2></i>
    <ul class="p">
        <li>Study 25 min, break 5 min</li>
         <li>Keep your phone away</li>
          <li>Make short notes</li>
    </ul>
    </div>

     <div class="div-2">
    <i><h2 class="h2">💪 4. Confidence Tips</h2></i>
    <ul class="p">
        <li>Speak slowly and clearly</li>
         <li>Believe in your decisions</li>
          <li>Dress how you feel confident</li>
    </ul>
</div>

      <div class="div-2">
   <i> <h2 class="h2">🕊️ 5. Daily Life Tips</h2></i>
    <ul class="p">
        <li>Start your day early</li>
         <li>Plan your day at night</li>
          <li>Avoid negativity</li>
    </ul>
    </div>

    <div class="div-2">
     <i><h2 class="h2">💬 6. Emotional Health Tips</h2></i>
    <ul class="p">
        <li>It’s okay to feel sad sometimes</li>
         <li>Talk to someone you trust</li>
          <li>Don’t keep everything inside</li>
    </ul>
    </div>

     <div class="div-2">
    <i><h2 class="h2">🌸 7. Glow-Up / Self Improvement Tips</h2></i>
    <ul class="p">
        <li>Keep yourself neat and clean</li>
         <li>Wear what makes you happy</li>
          <li>Drink more water = natural glow</li>
    </ul>
    </div>
    
    </div>

     
</template>

<style scoped>
.div-1 {
  min-height: 50vh;
  display: flex;
  flex-direction:row ;
  background: rgb(163, 157, 179);
  padding: 40px;
  margin: 40px;
  gap: 20px;  
  flex-wrap: wrap;
}
.div-2{
    display: flex;
    flex-direction: column;
    margin: 30px;
    color: rgb(56, 35, 38);
    
}
.h2{
    margin-top: 20px;
    line-height: 38px;
    font-size:25px ;
    
}
.p{
    line-height: 28px;
    font-size: 20px;
    font-weight:400;
    color: rgb(27, 20, 21);

}
.h1{
    font-size: 30px;
    color: rgb(83, 23, 139);
    /* margin-bottom: 30px; */
}
</style>