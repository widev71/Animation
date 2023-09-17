const design_card_butttons = document.querySelectorAll(".design-card");
const introduction_text = document.querySelectorAll(".introduction-text");

const single_profile_card = document.querySelectorAll(".single-profile-card");
const testimonial_card = document.querySelectorAll(".testimonial-card");

//menambahkan pendengar ke code
const watsap = document.getElementById("watsap");
const smkn1tampaksiring = document.getElementById("smkn1tampaksiring");
const mail = document.getElementById("mail");
const smkn1tps = document.getElementById("smkn1tps");
const pesan = document.getElementById("pesan");

//menambahkan pendengar ke code yang membawa ke jalur link
watsap.addEventListener('click', function(){
  window.location.href = "https://wa.me/6281236033496";
});

pesan.addEventListener('click', function(){
  window.location.href = "mailto:dedukwijaya@gmail.com";
});

smkn1tampaksiring.addEventListener('click', function(){
  window.location.href = "https://maps.app.goo.gl/pYA3ajqZWF64c9ki9";
});

smkn1tps.addEventListener('click', function(){
  window.location.href = "https://maps.app.goo.gl/pYA3ajqZWF64c9ki9";
});

mail.addEventListener('click', function(){
  window.location.href = "mailto:dedukwijaya@gmail.com";
});


//membuat animasi berputar
design_card_butttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    introduction_text.forEach((introduction, introductionIndex) => {
      if (index === introductionIndex) {
        introduction.style.display = "block";
      } else {
        introduction.style.display = "none";
      }
    });
    design_card_butttons.forEach((btn, btnIndex) => {
      if (index === btnIndex) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  });
});

single_profile_card.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
      if (index === testimonialCardIndex) {
        testimonialCard.style.display = "block";
      } else {
        testimonialCard.style.display = "none";
      }
    });
    single_profile_card.forEach((cardBtn, cardIndex) => {
      if (index === cardIndex) {
        cardBtn.classList.add("profile-card-active");
      } else {
        cardBtn.classList.remove("profile-card-active");
      }
    });
  });
});
