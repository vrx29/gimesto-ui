// Accessing the btn to open modal
const openModal = document.getElementById("openModal");

// Accessing the btn to close modal
const closeBtn = document.querySelector(".btn-close");

// Adding event listener to button to open the modal
openModal.addEventListener("click", () => {
  const myModal = document.getElementById("myModal");
  myModal.style.display = "block";
});

// Adding event listener to button to close the modal
closeBtn.addEventListener("click", () => {
  const myModal = document.getElementById("myModal");
  myModal.style.display = "none";
});
