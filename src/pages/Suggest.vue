<template>
  <div class="suggest-page">

    <!-- 🧩 FORM (ALWAYS SHOW) -->
    <div class="suggest-card">

      <h1>Suggest a Topic 💜</h1>
      <p>Have an idea? Share it with us ✨</p>

      <input v-model="name" type="text" placeholder="Your Name (optional)">
      <input v-model="title" type="text" placeholder="Topic Title">

      <textarea v-model="description" placeholder="Describe your idea..."></textarea>

      <select v-model="category">
        <option disabled value="">Select Category</option>
        <option>Quotes</option>
        <option>Tips</option>
        <option>Stories</option>
        <option>Other</option>
      </select>

      <textarea v-model="extra" placeholder="Any additional details..."></textarea>

      <button @click="submitIdea">Submit Idea ✨</button>

    </div>

    <!-- 📜 IDEAS LIST (OUTSIDE CARD) -->
    <div class="ideas-container">

      <div v-if="ideas.length === 0">
        <p>No ideas yet 💜</p>
      </div>

      <div v-else>
        <div v-for="idea in ideas" :key="idea.id" class="idea-card">
        </div>
      </div>

    </div>

  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const name = ref("")
const title = ref("")
const description = ref("")
const category = ref("")
const extra = ref("")

const ideas = ref([])

//  LOAD DATA
onMounted(() => {
  ideas.value = JSON.parse(localStorage.getItem("ideas")) || []
})

//  SUBMIT FUNCTION
const submitIdea = () => {
    if (!title.value || !description.value || !name.value || !category.value || !extra.value) {
    alert("Please fill required fields 💜")
    return
  }
  const newIdea = {
    id: Date.now(),
    name: name.value,
    title: title.value,
    description: description.value,
    category: category.value,
    extra: extra.value
  }

  //  OLD + NEW merge
  const oldIdeas = JSON.parse(localStorage.getItem("ideas")) || []

  const updatedIdeas = [newIdea, ...oldIdeas]

  ideas.value = updatedIdeas

  localStorage.setItem("ideas", JSON.stringify(updatedIdeas))

  alert("Idea submitted 💜")

  // reset
  name.value = ""
  title.value = ""
  description.value = ""
  category.value = ""
  extra.value = ""

}
</script>

<style scoped>
/*  Main Page */
.suggest-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(245, 240, 255, 1);
  padding: 40px;
}

/*  Form Card */
.suggest-card {
  width: 100%;
  max-width: 600px;

  background: rgba(230, 220, 250, 1);
  padding: 30px;
  border-radius: 20px;

  box-shadow: 0 10px 25px rgba(106, 77, 147, 0.15);
}

/*  Heading */
.suggest-card h1 {
  text-align: center;
  color: rgba(120, 90, 160, 1);
  margin-bottom: 10px;
}

/*  Subheading */
.suggest-card p {
  text-align: center;
  color: rgba(150, 130, 180, 1);
  margin-bottom: 20px;
}

/*  Inputs */
.suggest-card input,
.suggest-card textarea,
.suggest-card select {
  width: 100%;
  padding: 12px;
  margin-top: 10px;

  border-radius: 12px;
  border: 1px solid rgba(180, 160, 210, 0.5);
  outline: none;

  background: rgba(255, 255, 255, 0.7);
  color: rgba(74, 50, 107, 1);

  font-size: 14px;
}

/*  Textarea */
.suggest-card textarea {
  min-height: 100px;
  resize: none;
}

/*  Button */
.suggest-card button {
  width: 100%;
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
.suggest-card button:hover {
  background: rgba(120, 90, 160, 0.6);
  color: white;
  transform: translateY(-2px);
}

/*  Responsive */
@media (max-width: 768px) {
  .suggest-card {
    padding: 20px;
  }
}
</style>