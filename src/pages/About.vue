<template>
    <div class="about-page">
    <div class="about-card">
        <div>
         <img class="about-girl about-img-wrapper" src="https://i.pinimg.com/736x/37/b9/0c/37b90cb76c2ddb7fc26a22a6d739d1aa.jpg"><img/>
         </div>
    <h1 class="about-card h1">About Me 💜</h1>
    <h3 class="about-card h3 ">A place for inspiration and growth</h3>


  <p class="about-card p">Welcome to my corner of the internet! I’m <br/> happy you’re here  <br/>I created this space to share uplifting stories,<br/>motivational quotes, and tips for growing<br/> stronger every day.<br/>Join me on this journey of self-love,<br/> positivity, and personal growth</p>
  <!-- <p class="about-card p"></p> -->
  <!-- <p class="about-card p"></p> -->
     <button class="about-btn">Let’s Connect ✨</button>
    
    </div>
    </div>
</template>


<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(163, 157, 179);
  padding: 40px;
}
.about-card {
  width: 70%;
  max-width: 900px;

  background: rgb(223, 218, 235);
  border-radius: 25px;
  padding: 40px;

  box-shadow: 0 10px 25px rgba(106, 77, 147, 0.15);
  text-align: center;

  backdrop-filter: blur(10px);
}

.about-card h1 {
  font-size: 40px;
  color: rgba(120, 90, 160, 1);
  margin-bottom: 10px;
  text-align: center;
  margin-left: 50px;
}

.about-card h3 {
  font-size: 18px;
  color: rgba(150, 130, 180, 1);
  margin-bottom: 25px;
   margin-left: 50px;
}
.about-card p {
  font-size: 16px;
  color: rgb(61, 59, 59);
  line-height: 35px;
  margin-bottom: 15px;
  font-size: 22px;
   margin-left: 50px;
}
.about-btn {
  margin-top: 20px;
  padding: 12px 25px;

  background: rgba(179, 155, 181, 0.35);
  border: 1px solid rgba(179, 155, 181, 0.6);

  color: rgba(74, 50, 107, 1);
  border-radius: 20px;

  cursor: pointer;
  transition: 0.3s;
}
.about-btn:hover {
  background: rgba(140, 110, 180, 0.5);
  color: white;
  transform: translateY(-3px);
}
.about-girl {
  width: 200px;
  height: 200px;

  object-fit: cover;
  border-radius: 50%;

  box-shadow: 0 10px 25px rgba(106, 77, 147, 0.2);
}
.about-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>