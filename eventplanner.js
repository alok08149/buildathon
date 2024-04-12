// script.js

// Sample user data for demonstration
const users = [
    { username: "user1", password: "password1", events: [] },
    { username: "user2", password: "password2", events: [] }
  ];
  
  let currentUser = null;
  
  function showLogin() {
    document.getElementById("loginContainer").classList.remove("hidden");
    document.getElementById("signupContainer").classList.add("hidden");
    document.getElementById("eventPlanner").classList.add("hidden");
  }
  
  function showSignup() {
    document.getElementById("loginContainer").classList.add("hidden");
    document.getElementById("signupContainer").classList.remove("hidden");
    document.getElementById("eventPlanner").classList.add("hidden");
  }
  
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      currentUser = user;
      document.getElementById("loginContainer").classList.add("hidden");
      document.getElementById("eventPlanner").classList.remove("hidden");
      displayEvents();
    } else {
      alert("Invalid username or password");
    }
  }
  
  function signup() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
  
    if (newUsername.trim() === "" || newPassword.trim() === "") {
      alert("Please enter username and password");
      return;
    }
  
    if (users.some(u => u.username === newUsername)) {
      alert("Username already exists");
      return;
    }
  
    const newUser = { username: newUsername, password: newPassword, events: [] };
    users.push(newUser);
    currentUser = newUser;
  
    document.getElementById("signupContainer").classList.add("hidden");
    document.getElementById("eventPlanner").classList.remove("hidden");
    displayEvents();
  }
  
  function logout() {
    currentUser = null;
    document.getElementById("loginContainer").classList.remove("hidden");
    document.getElementById("eventPlanner").classList.add("hidden");
  }
  
  function addEvent() {
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
  
    if (eventName.trim() === "" || eventDate.trim() === "") {
      alert("Please enter event name and date");
      return;
    }
  
    currentUser.events.push({ name: eventName, date: eventDate });
    displayEvents();
  
    // Clear input fields after adding event
    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
  }
  
  function displayEvents() {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";
  
    currentUser.events.forEach(event => {
      const li = document.createElement("li");
      li.textContent = `${event.name} - ${event.date}`;
      eventList.appendChild(li);
    });
  }
  