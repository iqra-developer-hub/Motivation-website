<template>
    <div class="div">

     <i>      
   <h2 class="h2">1.  The Silent Effort</h2>
    <p class="p">Story:
    She worked quietly every day while others were busy showing off. No one noticed her hard work<br/> — until one day, her success spoke louder than words.</p>
    <h3 class="h3">Lesson: Consistency matters more than attention</h3>
    
    <!-- <hr/> -->

    <div class="divide-line"> </div>
    <h2 class="h2">2. She Chose Herself</h2>
    <p class="p">Story:
     She felt overwhelmed by her big goals. Instead of quitting, she took one small step daily<br/> — and slowly, she reached where she once dreamed.</p>
     <h3 class="h3">Lesson:  Small steps lead to big success</h3>
    
      <!-- <hr/> -->

      <div class="divide-line"></div>
     <h2 class="h2">3. One Step at a Time</h2>
    <p class="p">Story:
      She felt overwhelmed by her big goals. Instead of quitting, she took one small step daily<br/> — and slowly, she reached where she once dreamed.
     </p>
     <h3 class="h3">Lesson: Small steps lead to big success</h3>
     
      <!-- <hr/> -->

      <div class="divide-line"> </div>
       <h2 class="h2">4. The Power of “No”</h2>
    <p class="p">Story:
      She compared herself with others and felt behind. But when she focused on her own journey,<br/> she realized she was growing beautifully in her own time
     
     </p>
     <h3 class="h3">Lesson: Don’t compare — everyone has their own timing</h3>
    </i>
     <!-- <hr/> -->
    </div>

    
</template>

<style scoped>

.div{
    margin-top: 30px;
    margin-left: 20px;
      width: 90%;
  background: rgb(223, 218, 235);
  border-radius: 25px;
  padding:40px 40px;

  box-shadow: 0 10px 25px rgba(106, 77, 147, 0.15);
  /* text-align: center; */

  backdrop-filter: blur(10px);
  /* height: 100vh; */
  line-height: 33px;
  letter-spacing: 1px;
}
.h2{
    margin-top: 40px;
    color: rgb(157, 101, 209);
}
.p{
    font-size: 20px;
    margin-top: 10px;
    color: rgb(14, 1, 26);
}
.h3{
    color: rgb(26, 2, 51);
}
.divide-line{
    height: 1px;
    background: rgba(114, 106, 128, 0.3);
    margin:20px 0px ;
}
@media(max-width: 768px){
  .div{
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  width: auto;
  }
}
</style>