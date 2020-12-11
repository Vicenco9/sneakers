$(function () {
    $('.menu-toggle, .fas fa-times').on('click', function (){
        //console.log("radi");
        $('nav').toggleClass('active');
        $('.overlay').toggleClass('menu-open');
    });

    $('.overlay, .fas fa-times').on('click', function() {
        //console.log("radi");
        $('nav').removeClass('active');
        $(this).removeClass('menu-open');
    });

    var popupViews = document.querySelectorAll('.popup-view');
    var popupBtns = document.querySelectorAll('.popup-btn');
    var closeBtns = document.querySelectorAll('.close-btn');

    //javascript for quick view button
    var popup = function(popupClick){
      popupViews[popupClick].classList.add('active');
    }

    popupBtns.forEach((popupBtn, i) => {
      popupBtn.addEventListener("click", () => {
        popup(i);
      });
    });

    //javascript for close button
    closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
          popupView.classList.remove('active');
        });
      });
    });

    $('.options-02 a').click(function(){
      $('form').animate({
        height: "toggle", opacity: "toggle"
      }, "slow");
    });
});