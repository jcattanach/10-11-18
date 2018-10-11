let stopButton = document.getElementById('stopButton')
let container = document.getElementById('container')

let pictures = ["dogs1.jpeg","dogs2.jpeg","dogs3.jpeg","dogs4.jpeg"]
let index = 0

let interval = setInterval(function(){

  dogPhoto = `
  <img src="${pictures[index]}" class="pictures">`
  container.innerHTML = dogPhoto
  index++
  if(index == pictures.length)
  {index = 0}

},1000)

stopButton.addEventListener('click',function(){
  clearInterval(interval)
})
