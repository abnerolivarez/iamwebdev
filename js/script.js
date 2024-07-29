$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY > 100){
            $('.navbar').addClass('sticky');            
        }
        else{
            $('.navbar').removeClass('sticky');
           
        }
    });
  
        $('.navbar .menu li a').click(()=>{
        $('html').css('scrollBehavior','smooth');
    });
    
        // burger menu turn to X icon
        $('.menu-btn').click(()=>{ 
        $('.menu-btn i').toggleClass('fa-bars fa-times');
        $('.navbar .menu').toggleClass('show');
                
    });

});
  
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(window.scrollY >= 350){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
    window.addEventListener('scroll',scrollUp);


let sectionPart = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar .menu li a');

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    sectionPart.forEach(sec => {
        let secTop = sec.offsetTop;
        let secHeight = sec.offsetHeight;
        let secId = sec.getAttribute('id');

        // this section is currently in view
        if (scrollPosition >= secTop && scrollPosition < secTop + secHeight) {
            
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            navLinks.forEach(link => {
                if (link.getAttribute('href').slice(1) === secId) {
                    link.classList.add('active');
                }
            });
        }
    });
};



