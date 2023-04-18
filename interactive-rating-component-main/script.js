const links = document.querySelectorAll('#myList a');

var value = 0;

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    value = this.getAttribute('data-value'); 
    console.log(value);
    if (this.classList.contains('selected')) {
      this.classList.remove('selected');
    } else {
      links.forEach(link => link.classList.remove('selected'));
      this.classList.add('selected');
    }
  });
});

console.log(value);


function showDiv() {
  document.getElementById('div1').style.display = "none";
  document.getElementById('div2').style.display = "block";
  document.getElementById('p1').innerHTML = "You selcted " + value + " out of 5";
}


