let score = 0

document.getElementById('button').addEventListener('click',newfunction) 
function newfunction () {
  score = document.getElementById('input').value

  if (score >= 17) {
    document.getElementById('paragraph').innerHTML = 'You can see an R rated movie alone'
} else if (score >= 13) {
  document.getElementById('paragraph').innerHTML = 'You can see a PG-13 movie alone'
} else if (score >= 5) {
  document.getElementById('paragraph').innerHTML = 'You can see a G or PG movie alone'
} else {
  document.getElementById('paragraph').innerHTML = 'You are too young to watch most movies'
}
}