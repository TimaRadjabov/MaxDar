let frame = document.querySelector('iframe');
console.log(frame);
document.querySelector('.poster').addEventListener('click', function(){
this.style.display = "none";
   frame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
})