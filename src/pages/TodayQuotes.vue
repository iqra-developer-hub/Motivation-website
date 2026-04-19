<template>
  <div class="quote-card">
    <h2>🌸 Today's Quote</h2>

    <div v-if="todayQuote">
      <p class="text">"{{ todayQuote.text }}"</p>
      <p class="author">- {{ todayQuote.author }}</p>
    </div>

    <div v-else>
      <p>Loading quote... 💜</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const todayQuote = ref(null)

// 📌 Local fallback quotes (IMPORTANT)
const quotes = [
  { text: "Believe in yourself ✨", author: "Unknown" },
  { text: "Small steps daily 💜", author: "Motivation Daily" },
  { text: "Your mindset matters 🌸", author: "Life Coach" },
  { text: "Stay consistent 🚀", author: "Success Mentor" }
]

// 📌 Date-based selection
const getDailyQuote = () => {
  const today = new Date().getDate()
  const index = today % quotes.length
  return quotes[index]
}

onMounted(async () => {
  try {
    // 1️⃣ Try server first
    const res = await fetch("https://api.quotable.io/random")
    const data = await res.json()

    todayQuote.value = {
      text: data.content,
      author: data.author
    }

  } catch (error) {
    // 2️⃣ fallback (date-based local quote)
    todayQuote.value = getDailyQuote()
  }
})
</script>
<style>
.quote-card {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;

  background: rgba(230, 220, 250, 1);
  border-radius: 15px;

  text-align: center;
  box-shadow: 0 10px 25px rgba(106, 77, 147, 0.15);
}

.text {
  font-size: 18px;
  color: rgba(74, 50, 107, 1);
  margin-top: 10px;
}

.author {
  margin-top: 10px;
  font-style: italic;
  color: rgba(120, 90, 160, 1);
}
</style>