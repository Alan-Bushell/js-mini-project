// Get the button and span elements
const openDoorBtn = document.getElementById('open-door-btn');
const lockedSpan = openDoorBtn.querySelector('.visually-hidden');
const question = document.getElementById('question-container');

// Add event listener to the button
openDoorBtn.addEventListener('click', function() {
  // Prompt the user to enter a code
  const userCode = prompt('Enter the code:');

  // Check if the code is correct
  if (userCode === '020391') {
    // Show a pop-up message
    alert('Congratulations! You have escaped the room.');

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

    // Function to play the YouTube video
    function playYouTubeVideo() {
      // Use the YouTube API to play the video
      const player = new YT.Player(youtubeIframe, {
        events: {
          onReady: (event) => event.target.playVideo()
        }
      });
    }

    // Load the YouTube API
    function loadYouTubeAPI() {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Get the container element
    const container = document.querySelector('.yt-iframe');

    // Insert the iframe into the container
    container.appendChild(youtubeIframe);
    question.style.display = 'none';

    // Load the YouTube API and play the video
    loadYouTubeAPI();
    playYouTubeVideo();
  }
});