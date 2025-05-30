


// lsnis
  AOS.init();

AOS.init({disable: 'mobile'});

// scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 800)
})
gsap.ticker.lagSmoothing(0)

// close



window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}



// loader


  // Add this at the beginning of your script
  document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    
    // Hide loader after content loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });
        }, 2000); // Adjust time as needed
    });
  });







