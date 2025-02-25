var collapsibleBtns = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsibleBtns.length; i++) {
  collapsibleBtns[i].addEventListener("click", function() {
    const moreTxt = 'Показать больше';
    const lessTxt = 'Свернуть';

    this.classList.toggle("active");
        
    var content = document.getElementById(this.getAttribute('popovertarget'));
    content.classList.toggle('show');
    
    if (this.innerText == moreTxt) {
        this.innerText = lessTxt;
    }
    else {
        this.innerText = moreTxt;
    }
  });
}