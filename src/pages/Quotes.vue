<template>
    <div class="div background" >
    <i><h2 class="h2">Daily Quotes</h2></i>
    <p class="p">“Words to lift your heart”</p>
    </div>

    <div class="quotes-container">
      <div class="quote-card" v-for="value in dataArray">
        <p class="quote-text">{{ value.p }}</p>
        <span class="quote-author ">{{value.heading}}</span>
        <!--card icon -->
        <!-- <div class="card-actions">
      <i class="icon">♡</i>
      <i class="icon">🔖</i>
    </div> -->
     <div class="actions actions button">
    <button>❤️ Like</button>
    <button>🔖 Save</button>
    <button>📤 Share</button>
  </div>
      </div>
    </div>
    
</template>

<script setup>
import {ref} from "vue";

const dataArray = ref([{
  p:"You are stronger than you think, even on your weakest days 💖",
  heading:"Maya Angelou"
},
 { p:"Believe you can and you're halfway there 💫",
  heading:"Theodore Roosevelt"
},
 { p:"Do what you can, with what you have, where you are ✨",
  heading:"Theodore Roosevelt"
},
 { p:"Start where you are. Use what you have. Do what you can 🌸",
  heading:"Arthur Ashe"
},
 { p:"You yourself, as much as anybody, deserve your love and care 💕",
  heading:"Buddha"
},
 { p:"It always seems impossible until it's done 💪",
  heading:"Nelson Mandela"
},

])
</script>

<style scoped>
  .background{
      background: linear-gradient(
  to right,
  rgba(120, 90, 160, 1),
  rgba(170, 150, 200, 1)
);  
background: linear-gradient(
  to right,
  rgba(120, 90, 160, 1),
  rgba(170, 150, 200, 1)
);
  }
  .div{
    text-align: center;
    margin-top: 50px;
  }
  .h2{
    color:  rgb(71, 53, 95);
    font-size: 50px;
    font-weight: 200;
  }
  .p{
    color: rgb(99, 85, 119);
    margin:15px 0px 0px 80px;
    font-size: 25px;
    letter-spacing: 3px;
    font-weight: 600;
  }



  /* card styling */

.quotes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 40px;
}

/*  Card */
.quote-card {
  background: rgba(240, 235, 255, 1);
  border-radius: 20px;
  padding: 25px;
  min-height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 8px 20px rgba(106, 77, 147, 0.15);
  transition: all 0.3s ease;
  position: relative;
}

/*  Hover effect */
.quote-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(106, 77, 147, 0.25);
}

/* 💬 Quote text */
.quote-text {
  font-size: 22px;
  color: rgba(74, 50, 107, 1);
  line-height: 1.6;
}

/* 👤 Author */
.quote-author {
  font-size: 16px;
  color: rgba(150, 130, 180, 1);
  margin-top: 10px;
}

/*  Actions */
.card-actions {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.icon {
  cursor: pointer;
  font-size: 18px;
  color: rgba(140, 110, 180, 1);
  transition: 0.3s;
}

.icon:hover {
  color: rgba(106, 77, 147, 1);
}
/* button */
.actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.actions button {
  background: rgba(140, 110, 180, 0.2);
  border: none;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
  color: rgba(74, 50, 107, 1);
  transition: 0.3s;
}

.actions button:hover {
  background: rgba(140, 110, 180, 0.4);
  color: white;
}
</style>