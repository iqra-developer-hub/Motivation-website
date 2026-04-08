<template>
<div class="img ">
    <div class="welcome-flex section-height">
    <button class="button1">Your Daily Dose Of Positivity✨</button>
    <h1>Small Thoughts,<br/><strong>Big Changes</strong></h1>
    <p>Discover daily motivation, practical tips, and real stories to lift your heart and brighten your mindset.</p>
    <button>Get Inspired</button><button>Today's Quote</button>
    <h3>Daily Quotes<br/><span>to lift your heart</span></h3>
    <h3>Helpful Tips<br/><span>Simple tips for a better you</span></h3>
    <h3>Real Stories<br/><span>Inspiring journeys</span></h3>
    </div>
</div>
</template>

<style scoped>
.img{
    background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://i.pinimg.com/736x/a4/54/91/a45491d0a0c9596ca1289c5619b83fdc.jpg');
    height: 90vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.button1{
    background-color :rgba(179, 155, 181, 1);
    backdrop-filter: blur(18px);
    color:rgba(74, 50, 107, 1);
    padding: 6px ;
    width: 210px;
    height: 50px;
    font-size: 13px;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    transition: 0.9s;
}
.welcome-flex{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}
.section-height{
    height: 100vh;
}

</style>