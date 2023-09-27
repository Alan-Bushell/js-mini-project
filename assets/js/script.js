// Get the button and span elements
const openDoorBtn = document.getElementById('open-door-btn');
const question = document.getElementById('question-container');
const spanElement = document.getElementById('mySpan');

// Add event listener to the button
openDoorBtn.addEventListener('click', handleButtonClick);

let flashCount = 0;

function handleButtonClick() {
  // Prompt the user to enter a code
  const userCode = prompt('Enter the code:');

  // Check if the code is correct
  if (userCode === '020391') {
    // Remove bg-danger class and start the flashing effect
    toggleColor();
    openDoorBtn.disabled = true;

    // Create and display the YouTube video
    displayYouTubeVideo();
  }
}

function toggleColor() {
  spanElement.classList.toggle('bg-danger');
  spanElement.classList.toggle('bg-success');

  flashCount++;

  if (flashCount < 5) {
    // Flash the color again after 500 milliseconds (half a second)
    setTimeout(toggleColor, 500);
  } else {
    // After the third flash, stay on bg-success
    spanElement.classList.remove('bg-danger');

    // Show a pop-up message after 3 seconds
    setTimeout(showCongratulationsMessage, 3000);
  }
}

function displayYouTubeVideo() {
  // Create the iframe element
  const youtubeIframe = document.createElement('iframe');
  youtubeIframe.width = '560';
  youtubeIframe.height = '315';
  youtubeIframe.src = 'https://www.youtube.com/embed/JgRBkjgXHro?start=47';
  youtubeIframe.title = 'YouTube video player';
  youtubeIframe.frameBorder = '0';
  youtubeIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  youtubeIframe.allowFullscreen = true;
  youtubeIframe.setAttribute('autoplay', ''); // Add the autoplay attribute

  // Get the container element
  const container = document.querySelector('.yt-iframe');

  // Insert the iframe into the container
  container.appendChild(youtubeIframe);
  question.style.display = 'none';

  // Load the YouTube API and play the video
  loadYouTubeAPI();
  playYouTubeVideo(youtubeIframe);
}

function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function playYouTubeVideo(youtubeIframe) {
  // Use the YouTube API to play the video
  const player = new YT.Player(youtubeIframe, {
    events: {
      onReady: (event) => event.target.playVideo()
    }
  });
}

function showCongratulationsMessage() {
  alert('Congratulations! You have escaped the room.');
}
