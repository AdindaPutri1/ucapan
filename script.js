<!DOCTYPE html>
<html>
<head>
  <title>Ulang Tahun</title>
  <style>
    body {
      background-color: lightblue;
      font-family: Arial, sans-serif;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    h1 {
      color: #ff69b4;
      margin-top: 20px;
    }

    img {
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      margin: 40px;
    }

    p {
      color: #666;
      margin-bottom: 20px;
    }

    .button {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>💖Selamat Ulang Tahun!💖</h1>
  <img src="foto.jpeg" alt="gambar" width="500" height="500">
  <p>🎀  𝒜𝓀𝓊 𝒾𝓃𝑔𝒾𝓃 𝓂𝑒𝓃𝑔𝓊𝒸𝒶𝓅𝓀𝒶𝓃 𝓈𝑒𝓁𝒶𝓂𝒶𝓉 𝓊𝓁𝒶𝓃𝑔 𝓉𝒶𝒽𝓊𝓃 𝓎𝒶𝓃𝑔 𝓀𝑒-𝟤🍪 𝓀𝑒𝓅𝒶𝒹𝒶 𝓉𝑒𝓂𝒶𝓃𝓀𝓊 𝓉𝑒𝓇𝒸𝒾𝓃𝓉𝒶, <strong>𝒹𝑒𝓁𝓊𝓁 🎀</strong>!</p>
  <p>(っ◔◡◔)っ ♥ SI AYANGNYA HAECHAN, SI COFASS TERMANJYAH, SI GUNKID PRIDE, SI CEGIL TETI, SI ANYA GERALDINE TI'S VERSION ♥.</p>
  <p>Semoga kamu selalu diberkahi dengan kebahagiaan, kesehatan, dan segala hal baik dalam hidupmu. Terima kasih telah menjadi bagian dari hidup Dinda.</p>
  <p>Best wishes,</p>
  <p>DINDA</p>
  <p>˚ʚ♡ɞ˚</p>

  <div class="button">
    <button id="no-button">Haechan</button>
    <button id="yes-button">Dinda</button>
  </div>

  <script>
    // Get the "No" button element
    const noButton = document.getElementById("no-button");

    // Add a mouseover event listener to move the "No" button randomly
    noButton.addEventListener("mouseover", () => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);

      // Restrict the "No" button's movement within the bounds of the screen
      const buttonWidth = noButton.offsetWidth;
      const buttonHeight = noButton.offsetHeight;
      const maxX = window.innerWidth - buttonWidth;
      const maxY = window.innerHeight - buttonHeight;
      const adjustedX = x < maxX ? x : maxX;
      const adjustedY = y < maxY ? y : maxY;

      // Apply the new position to the button
      noButton.style.position = "absolute";
      noButton.style.left = `${adjustedX}px`;
      noButton.style.top = `${adjustedY}px`;
    });

    // Get the "Yes" button element
    const yesButton = document.getElementById("yes-button");

    // Add a click event listener to create confetti
    yesButton.addEventListener("click", () => {
      var confettiElement = document.getElementById('confetti-canvas');
      var confettiSettings = { target: confettiElement, max: 729, size: 1, animate: true, props: ['circle', 'square', 'triangle', 'line'], colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], clock: 25, rotate: true,start_from_edge: true, respawn: true };

      yesButton.style.display = "none";
      noButton.style.display = "none";

      var gif = document.getElementById("gif");
      var header = document.getElementById("main");
      header.style.display = "none";
      gif.style.display = "none";

      //change the style of the confetti canvas
      confettiElement.style.position = "absolute";
      confettiElement.style.top = "0";
      confettiElement.style.left = "0";
      confettiElement.style.width = "100%";
      confettiElement.style.height = "100%";
      confettiElement.style.zIndex = "1000";

      var confetti = new ConfettiGenerator(confettiSettings);

      confetti.render();

      let p = document.createElement("p");
      p.innerText = "Congrats 🎉\n you made the right choice!! \ 😉";
      p.style.fontSize = "2rem";
      p.style.fontWeight = "bold";
      p.style.textAlign = "center";
      p.style.position = "absolute";
      p.style.top = "50%";
      p.style.left = "50%";
      p.style.transform = "translate(-50%, -50%)";
      document.body.appendChild(p);
    });
  </script>
</body>
</html>
