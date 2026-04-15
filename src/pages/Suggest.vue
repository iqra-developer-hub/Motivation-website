<template>
  <div class="suggest-page">
    <div class="suggest-card">

      <h1>Suggest a Topic 💜</h1>
      <p>Have an idea? Share it with us ✨</p>

      <input type="text" placeholder="Your Name (optional)">
      <input type="text" placeholder="Topic Title">

      <textarea placeholder="Describe your idea..."></textarea>

      <select>
        <option>Select Category</option>
        <option>Quotes</option>
        <option>Tips</option>
        <option>Stories</option>
        <option>Other</option>
      </select>

      <textarea placeholder="Any additional details..."></textarea>

      <button>Submit Idea ✨</button>

    </div>
  </div>

</template>

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