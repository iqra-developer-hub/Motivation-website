<template>
    <form  >
  <div class="contact-page">
    <div class="contact-card">

      <h1>Contact Us 💜</h1>
      <p>We would love to hear from you ✨</p>

      <input v-model="name" type="text" placeholder="Your Name">
      <input v-model="email" type="email" placeholder="Your Email">

      <textarea v-model="message" placeholder="Your Message..."></textarea>

      <button type="submit" @click="handleSubmit" >Send Message ✨</button>

    </div>
  </div>
  </form>
</template>

<script setup>
 import { ref } from "vue";

 const name = ref("");
 const email = ref("");
 const message = ref("");

const handleSubmit = () => {
  console.log("form submitted");

  if (!name.value && !email.value && !message.value) {
    window.alert("please fill all fields!");
    return;
  }

  window.alert("data successfully sent!");

  name.value = "";
  email.value = "";
  message.value = "";
};
</script>

<style scoped>

.contact-page {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(245, 240, 255, 1);
      padding: 40px;
      font-family: Arial, sans-serif;
    }

    /*  Card */
    .contact-card {
      width: 100%;
      max-width: 600px;
      background: rgba(230, 220, 250, 1);
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(106, 77, 147, 0.15);
    }

    /*  Heading */
    .contact-card h1 {
      text-align: center;
      color: rgba(120, 90, 160, 1);
      margin-bottom: 10px;
    }

    /*  Subheading */
    .contact-card p {
      text-align: center;
      color: rgba(150, 130, 180, 1);
      margin-bottom: 20px;
    }

    /* Inputs */
    .contact-card input,
    .contact-card textarea {
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
    .contact-card textarea {
      min-height: 120px;
      resize: none;
    }

    /*  Button */
    .contact-card button {
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

    /* ✨ Hover */
    .contact-card button:hover {
      background: rgba(120, 90, 160, 0.6);
      color: white;
      transform: translateY(-2px);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .contact-card {
        padding: 20px;
      }
    }
</style>