<template>
  <header class="Header-flex">
  <h1 class="logo">DAILY SPARK<br><strong class="para">Inspired. Every Day.</strong><br/></h1>
  <p class="para"></p>
  
  <nav class="nav-links">
    <RouterLink class="nav-links" to="/">Home</RouterLink>
    <RouterLink class="nav-links" to="/quotes">Quotes</RouterLink>
    <RouterLink class="nav-links" to="/tips">Tips</RouterLink>
    <RouterLink class="nav-links" to="/stories">Stories</RouterLink>
    <RouterLink class="nav-links" to="/about">About</RouterLink>
  </nav>
  </header>
  </template>

  <style scoped>
  .Header-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  rgba(74, 50, 107, 1);
    padding: 10px 10px;
  }
 .nav-links{
  color: rgb(205, 171, 248);
  margin: 10px;
  font-size: 20px;
  text-decoration: none;
 }
 .nav-links:hover{
  text-decoration: underline;
  color: white;
 }
 .para{
  font-size: 20px;
  font-weight: 200;
  color:rgb(205, 171, 248) ;
  margin-left: 40px;
 }
 .logo{
  color: white;
  margin-left: 5px;
 }
 /* .logo:hover{
  
 } */
  </style>