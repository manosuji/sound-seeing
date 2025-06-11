// words and corresponding time stamps
const lyrics = [
    { word: "a", start: 5.30 },
    { word: "friend", start: 5.48 },
    { word: "told", start: 5.80 },
    { word: "me", start: 6.10 },
    { word: "recently", start: 6.32 },
    { word: "that", start: 7.12 },
    { word: "everything", start: 7.46 },
    { word: "all", start: 8.85 },
    { word: "of", start: 9.0 },
    { word: "us", start: 9.05 },
    { word: "is", start: 10.38 },
    { word: "just", start: 10.51 },
    { word: "springs", start: 11.95 },
  ];
  
  const audio = document.getElementById("audio");
  const lyricsContainer = document.getElementById("lyrics");
  let currentWordIndex = 0;
  
  // function to create and display lyrics
  function displayLyrics() {
    lyrics.forEach((item, index) => {
      const span = document.createElement("span");
      span.textContent = item.word + " ";
      span.id = `word-${index}`;
      lyricsContainer.appendChild(span);
    });
  }
  
  // function to make black the current word
  function highlightWord() {
    if (currentWordIndex < lyrics.length) {
      const currentTime = audio.currentTime;
      if (currentTime >= lyrics[currentWordIndex].start) {
        const currentWordSpan = document.getElementById(`word-${currentWordIndex}`);
        currentWordSpan.style.color = "black";
        currentWordIndex++;
      }
    }
  }
  
  // enact!!
  displayLyrics();
  audio.addEventListener("timeupdate", highlightWord);