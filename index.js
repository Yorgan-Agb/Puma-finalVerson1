// document
//   .getElementById('fleche')
//   .animate([{ transform: 'translateY(1%)' }, { transform: 'translateY(5%)' }], {
//     duration: 200,
//     iterations: Infinity,
//   })

let updateVideo = document.getElementById('videoPuma')
updateVideo.addEventListener('ended', byeVideo)

function byeVideo() {
  let upText = document.getElementById('textHide')
  upText.style.display = 'flex'
  // upText.style.transform = 'translateY(-50%)'
  let changeText = document.getElementById('bottomTitle')
  changeText.innerHTML = "J'Y VAIS"
  let goodByeVideo = document.getElementById('videoPuma')
  goodByeVideo.style.transform = 'scale(0)'
  goodByeVideo.style.transition = '1.5s ease-in-out'
  let holderDeo = document.getElementById('deoContainer')
  holderDeo.style.transform = 'translateY(-100%)'
  holderDeo.style.transition = '3s'
  let upChevron = document.getElementById('chevron')
  upChevron.style.transform = 'translateY(-800%)'
  upChevron.style.transition = '3s'
  let upFooter = document.getElementById('footerContainer')
  upFooter.style.transform = 'translateY(-200%)'
  upFooter.style.transition = '3s'

  let map = document.getElementById('test')
  map.style.display = 'flex'
  map.style.justifyContent = 'center'
  map.style.transform = 'translateY(103%)'
  map.style.transition = '3s'

  // goodByeVideo.style.display = 'none'
  // let moveVideoTwo = document.getElementById('videoContainer')
  // moveVideoTwo.style.transition = 'margin-top(15px)'
  // let upDeoContainer = document.getElementById('textHide')
  // upDeoContainer.style.transform = 'scale(0.5)'
  // upDeoContainer.style.transition = '1.5s ease-in-out'
}
// transform: scale(0.5);
//     // transition: 2s ease-in-out;
