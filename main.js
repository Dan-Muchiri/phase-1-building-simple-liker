// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('modal');
  const errorMessage = document.getElementById('modal-message');
  const hearts = document.querySelectorAll('.like-glyph');


  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          toggleHeart(heart);
        })
        .catch(error => {
          displayError(error);
        });
    });
  });

  function toggleHeart(heart) {
    heart.classList.toggle('activated-heart');
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
    } else {
      heart.textContent = EMPTY_HEART;
    }
  }

  function displayError(error) {
    errorModal.classList.remove('hidden');
    errorMessage.textContent = error;

    setTimeout(() => {
      errorModal.classList.add('hidden');
    }, 3000);
  }
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
