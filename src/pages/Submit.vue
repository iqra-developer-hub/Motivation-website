<template>
  <form @submit.prevent="submitStory">
  <div class="div">

    <h2>Share Your Story 💜</h2>
    <h3>Your story can inspire someone else.</h3>

    <div class="story-form">

      <input v-model="name" type="text" placeholder="Your Name (optional)" />

      <input v-model="title" type="text" placeholder="Story Title" />

      <!-- STORY -->
      <textarea v-model="description" placeholder="Write your story..."></textarea>

      <!-- LESSON -->
      <textarea v-model="extra" placeholder="What did you learn?"></textarea>

      <select v-model="category">
        <option disabled value="">Select Category</option>
        <option>Motivation</option>
        <option>Life</option>
        <option>Study</option>
        <option>Confidence</option>
      </select>

      <button type="submit"  class="button">
        Submit Story 💜
      </button>

    </div>

    <!--  SHOW STORIES -->
    <div class="ideas-container">

      <div v-if="ideas.length === 0">
        <p>Nothing here yet... Be the first to share your story 💜</p>
      </div>

      <div v-else>
        <div v-for="idea in ideas" :key="idea.id" class="idea-card">
        </div>
      </div>

    </div>

  </div>
  </form>
</template>
<script setup>

import { ref, onMounted } from "vue"

// =====================
// FORM FIELDS
// =====================
const name = ref("")
const title = ref("")
const description = ref("")
const category = ref("")
const extra = ref("")

// =====================
// LOCAL DATA
// =====================
const ideas = ref([])

// =====================
// LOAD FROM LOCALSTORAGE
// =====================
onMounted(() => {
  ideas.value = JSON.parse(localStorage.getItem("stories")) || []
})

// =====================
// SUBMIT FUNCTION (LOCAL + BACKEND)
// =====================
const submitStory = async () => {

  // validation
  if (
    !name.value ||
    !title.value ||
    !description.value ||
    !category.value ||
    !extra.value
  ) {
    alert("Please fill all required fields 💜")
    return
  }

  // new story object
  const newStory = {
    id: Date.now(),
    name: name.value,
    title: title.value,
    description: description.value,
    category: category.value,
    extra: extra.value
  }

  // =====================
  // 1. SAVE TO LOCALSTORAGE
  // =====================
  const oldStories = JSON.parse(localStorage.getItem("stories")) || []

  const updatedStories = [newStory, ...oldStories]

  localStorage.setItem("stories", JSON.stringify(updatedStories))

  ideas.value = updatedStories

  // =====================
  // 2. SEND TO BACKEND
  // =====================
  try {
    const res = await fetch("http://localhost:5000/story", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStory)
    })

    const data = await res.json()
    console.log("Backend Response:", data)

  } catch (error) {
    console.log("Backend Error:", error)
  }

  // success message
  alert("Story submitted successfully 💜✨")

  // =====================
  // RESET FORM
  // =====================
  name.value = ""
  title.value = ""
  description.value = ""
  category.value = ""
  extra.value = ""
}


</script>



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

/*  Button */
.button {
  width: 50%;
  margin-top: 20px;
  padding: 12px;

  background: rgba(140, 110, 180, 0.4);
  border: none;
  border-radius: 15px;

  color: rgba(74, 50, 107, 1);
  font-size: 15px;

  cursor: pointer;
  transition: 0.3s;
}

/*  Hover */
.button:hover {
  background: rgba(120, 90, 160, 0.6);
  color: white;
  transform: translateY(-2px);
}

</style>