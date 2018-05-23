var allButtons = $('#buttons > span')
for(let i = 0;i < allButtons.length;i ++){
  $(allButtons[i]).on('click',function(x){
    var index = $(x.currentTarget).index()
    var p = index * -400
    $('#images').css({transform: 'translate(' + p + 'px)'})
 
  n = index
  activeButton(allButtons.eq(n))
 })
}

var size = allButtons.length
var n = 0

playSlide(n % size)

var timeId = setTimer()

function setTimer(){
  return setInterval(()=>{
    n += 1
    playSlide(n % size)
  },1000)
}
function playSlide(index){
  allButtons.eq(index).trigger('click')
}
function activeButton(b){
  b.addClass('highlight').siblings('.highlight').removeClass('highlight')
}

$('.window').on('mouseenter',function(){
  window.clearInterval(timeId)
})
$('.window').on('mouseleave',function(){
  timeId = setTimer()
})
