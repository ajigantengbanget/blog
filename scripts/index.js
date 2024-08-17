const emailInput = document.getElementById('emailInput');
    emailInput.addEventListener('focus', function() {
        if (emailInput.value === "Masukan email kamu") {
            emailInput.value = '';
    }
});

function menu() {
    var navMobile = document.getElementById("navMobile");
    navMobile.classList.toggle("navMobileActive");

    if (navMobile.classList.contains("navMobileActive")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const paragraphs = document.querySelectorAll(".post-description");

  paragraphs.forEach(paragraph => {
      const words = paragraph.textContent.split(' ');

      if (words.length > 15) {
          const limitedText = words.slice(0, 15).join(' ') + '...';
          paragraph.textContent = limitedText;
      }
  });
});

