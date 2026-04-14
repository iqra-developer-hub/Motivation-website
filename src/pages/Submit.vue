<template>
    <div class="div">
    <h2>Share Your Story 💜</h2>
    <h3>💜Your story can inspire someone else.</h3>

       <div class="story-form">

  <input type="text" placeholder="Your Name (optional)" />

  <input type="text" placeholder="Story Title" />

  <textarea placeholder="Write your story..."></textarea>

  <textarea placeholder="What did you learn?"></textarea>

  <select>
    <option>Select Category</option>
    <option>Motivation</option>
    <option>Life</option>
    <option>Study</option>
    <option>Confidence</option>
  </select>

  <button class="button">Submit Story </button>

</div>
    </div>
 
</template>


<style scoped>
.div{
    text-align: center;
    margin-top:50px;
    color: rgb(80, 78, 78);
    line-height: 30px;
}
.story-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 50px;
}

input, textarea, select {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(180, 160, 210, 0.5);
  outline: none;

  background: rgba(255, 255, 255, 0.7);
  width: 50%;
}

textarea {
  min-height: 100px;
  resize: none;
}
.button{
    width: 50%;
    border: none;
    padding: 20px;
    border-radius: 10px;
}

</style>