<template>
  <div class="support-page">

    <!-- 💜 HEADER -->
    <h1>Need Help? 💜</h1>
    <p>If you're facing any issue, we are here to help you.</p>

    <!--  FAQ -->
    <div class="faq">

      <h2>Frequently Asked Questions</h2>

      <div class="faq-item">
        <h3>How do I submit a story?</h3>
        <p>Go to Submit Story page, fill form and click submit.</p>
      </div>

      <div class="faq-item">
        <h3>How do I suggest a topic?</h3>
        <p>Use Suggest Topic page and send your idea.</p>
      </div>

      <div class="faq-item">
        <h3>Why my post is not showing?</h3>
        <p>Sometimes refresh page or check browser storage.</p>
      </div>

    </div>

    <!--  CONTACT FORM -->
    <div class="support-card">

      <h2>Contact Support 💜</h2>

      <input v-model="name" type="text" placeholder="Your Name">
      <input v-model="email" type="email" placeholder="Your Email">

      <textarea v-model="message" placeholder="Describe your issue..."></textarea>

      <button @click="submitSupport">Send Message ✨</button>

    </div>

    <!--  SAVED MESSAGES -->
    <div class="messages">

      <h2>Your Messages</h2>

      <div v-if="messages.length === 0">
        <p>No messages yet 💜</p>
      </div>

      <div v-else>
        <div v-for="msg in messages" :key="msg.id" class="msg-card">
          <h3>{{ msg.name }}</h3>
          <p>{{ msg.message }}</p>
          <small>{{ msg.email }}</small>
        </div>
      </div>

    </div>

  </div>
</template>


<script setup>
import { ref, onMounted } from "vue"

//  FORM FIELDS
const name = ref("")
const email = ref("")
const message = ref("")

//  MESSAGES LIST
const messages = ref([])

//  LOAD DATA
onMounted(() => {
  messages.value = JSON.parse(localStorage.getItem("supportMessages")) || []
})

//  SUBMIT FUNCTION
const submitSupport = () => {

  if (!name.value || !email.value || !message.value) {
    alert("Please fill all fields 💜")
    return
  }

  const newMsg = {
    id: Date.now(),
    name: name.value,
    email: email.value,
    message: message.value
  }

  const oldMsgs = JSON.parse(localStorage.getItem("supportMessages")) || []

  const updatedMsgs = [newMsg, ...oldMsgs]

  localStorage.setItem("supportMessages", JSON.stringify(updatedMsgs))

  messages.value = updatedMsgs

  alert("Message sent successfully 💜✨")

  // reset
  name.value = ""
  email.value = ""
  message.value = ""
}
</script>

<style scoped>
/* 💜 PAGE */
.support-page {
  min-height: 100vh;
  padding: 40px;
  background: rgba(245, 240, 255, 1);
  text-align: center;
  color: rgba(74, 50, 107, 1);
}

/* 💜 FAQ */
.faq {
  margin-top: 30px;
}

.faq-item {
  background: rgba(230, 220, 250, 1);
  margin: 10px auto;
  padding: 15px;
  border-radius: 12px;
  max-width: 600px;
}

/* 💜 SUPPORT FORM */
.support-card {
  margin-top: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  background: rgba(230, 220, 250, 1);
  padding: 20px;
  border-radius: 15px;
}

/* INPUTS */
.support-card input,
.support-card textarea {
  width: 100%;
  margin-top: 10px;
  padding: 12px;

  border-radius: 10px;
  border: 1px solid rgba(180, 160, 210, 0.5);
  outline: none;
}

/* TEXTAREA */
.support-card textarea {
  min-height: 120px;
  resize: none;
}

/* BUTTON */
.support-card button {
  margin-top: 15px;
  width: 100%;
  padding: 12px;

  border: none;
  border-radius: 10px;

  background: rgba(140, 110, 180, 0.4);
  cursor: pointer;
  transition: 0.3s;
}

.support-card button:hover {
  background: rgba(120, 90, 160, 0.6);
  color: white;
}

/* 💜 MESSAGES */
.messages {
  margin-top: 40px;
}

.msg-card {
  background: white;
  max-width: 600px;
  margin: 10px auto;
  padding: 15px;
  border-radius: 12px;

  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
</style>