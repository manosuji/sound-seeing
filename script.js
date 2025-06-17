const timeline = [
  // Words
  { type: "word", content: "a", start: 5.28 },
  { type: "word", content: "friend", start: 5.46 },
  { type: "word", content: "told", start: 5.78 },
  { type: "word", content: "me", start: 6.08 },
  { type: "word", content: "recently", start: 6.30 },
  { type: "word", content: "that", start: 7.10 },
  { type: "word", content: "everything", start: 7.34 },
  { type: "word", content: "all", start: 8.76 },
  { type: "word", content: "of", start: 8.82 },
  { type: "word", content: "us", start: 8.86 },
  { type: "word", content: "is", start: 10.38 },
  { type: "word", content: "just", start: 10.51 },
  { type: "word", content: "springs", start: 11.95 },
  
  // Images
  { type: "image", filename: "star1.png", start: 8.00, left: 36, top: 20 },
  { type: "image", filename: "star2.png", start: 9.15, left: 62, top: 22 },
  { type: "image", filename: "star3.png", start: 11.15, left: 80, top: 21 },
  { type: "image", filename: "spring.png", start: 12.58, left: 22, top: 30 }
];

// Sort timeline by start time
timeline.sort((a, b) => a.start - b.start);

let currentWordIndex = 0; // Tracks word positions in timeline
let currentObjectIndex = 0; // Tracks overall timeline progress

function displayObjects() {
    const currentTime = audio.currentTime;

    if (currentObjectIndex < timeline.length) {
        const obj = timeline[currentObjectIndex];

        if (currentTime >= obj.start) {
            if (obj.type === "word") {
                // Highlight the word using currentWordIndex instead of timeline index
                const span = document.getElementById(`word-${currentWordIndex}`);
                if (span) {
                    span.style.color = "blue";
                }
                currentWordIndex++; // Move to next word only when a word is processed
            } else if (obj.type === "image") {
                // Create and display image
                const img = document.createElement("img");
                img.src = `./assets/photos/${obj.filename}`;
                img.alt = obj.filename;
                img.id = obj.filename;

                img.style.position = "fixed";
                img.style.left = `${obj.left}%`;
                img.style.top = `${obj.top}%`;
                img.style.transform = "translate(-50%, -50%)";

                document.getElementById("imageContainer").appendChild(img);
            }
            
            currentObjectIndex++; // Move to the next item in timeline
        }
    }
}


function displayLyrics() {
  let wordIndex = 0; // Track only word indices separately

  timeline.forEach((item) => {
      if (item.type === "word") {
          const span = document.createElement("span");
          span.textContent = item.content + " ";
          span.id = `word-${wordIndex}`; // Assign correct word index
          lyrics.appendChild(span);

          wordIndex++; // Increment only for words
      }
  });
}


// Enact functions
displayLyrics();
audio.addEventListener("timeupdate", displayObjects);
