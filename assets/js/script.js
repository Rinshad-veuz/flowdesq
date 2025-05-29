



//   gsap.registerPlugin(ScrollTrigger);
//     if (window.innerWidth > 992) {
//     gsap.registerPlugin(ScrollTrigger);
    
//     gsap.to(".turning-img img", {
//         y: -70, // Move up by 100px
//         rotation: 0, // Rotate slightly
//         scrollTrigger: {
//             trigger: ".turning-img",
//             start: "top center",
//             end: "bottom top",
//             scrub: true // Smooth scrubbing effect
//         }
//     });
//     }


    $(document).ready(function(){
      $(".lifecycle-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items:1,
        responsive: {
        
        }
      });
    });


    
// counter


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;

  function startCount(counter) {
      const target = parseInt(counter.dataset.target);
      const duration = 10000;
      const increment = target / (duration / 32); // 60fps
      let current = 0;

      const updateCounter = () => {
          current += increment;
          if (current < target) {
              counter.textContent = Math.ceil(current);
              requestAnimationFrame(updateCounter);
          } else {
              counter.textContent = target;
          }
      };

      counter.textContent = '0';
      updateCounter();
  }

  // Create Intersection Observer
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const countersSection = entry.target;
              const counters = countersSection.querySelectorAll('.counter');
              counters.forEach(counter => {
                  startCount(counter);
              });
          } else {
              // Reset counters when out of view
              const counters = entry.target.querySelectorAll('.counter');
              counters.forEach(counter => {
                  counter.textContent = '0';
              });
          }
      });
  }, options);

  // Observe the counter section
  const counterSection = document.querySelector('.counter-section');
  if (counterSection) {
      observer.observe(counterSection);
  }
});


   $(document).ready(function () {
            const button = document.querySelector(".navbar-toggler");
            const navOverlay = document.querySelector(".nav-overlay");
            const navbarCollapse = document.querySelector(".navbar-collapse");

            button.addEventListener("click", function () {
                navOverlay.classList.toggle("active");
            });

            navOverlay.addEventListener("click", function (event) {
                if (event.target === navOverlay) {
                    navOverlay.classList.remove("active");
                    navbarCollapse.classList.remove("show");
                }
            });
        });


// validation code
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('regForm');

            form.addEventListener('submit', function (e) {
                e.preventDefault();
                if (validateForm()) {
                    alert('Form submitted successfully!');
                    form.reset();
                }
            });

            function validateForm() {
                let isValid = true;
                resetErrors();

                // Validate First Name
                const name = document.getElementById('name').value.trim();
                if (name === '') {
                    showError('name', 'First name is required');
                    isValid = false;
                } else if (/\d/.test(name)) {
                    showError('name', 'Name cannot contain numbers');
                    isValid = false;
                }

                // Validate Last Name
                const lastName = document.getElementById('lastName').value.trim();
                if (lastName === '') {
                    showError('lastName', 'Last name is required');
                    isValid = false;
                } else if (/\d/.test(lastName)) {
                    showError('lastName', 'Last name cannot contain numbers');
                    isValid = false;
                }

                // Validate Email
                const email = document.getElementById('email').value.trim();
                if (email === '') {
                    showError('email', 'Email is required');
                    isValid = false;
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    showError('email', 'Please enter a valid email');
                    isValid = false;
                }

                // Validate Mobile
                const mobile = document.getElementById('mobile').value.trim();
                if (mobile === '') {
                    showError('mobile', 'Mobile number is required');
                    isValid = false;
                } else if (!/^[0-9]{10,15}$/.test(mobile)) {
                    showError('mobile', 'Please enter 10-15 digits');
                    isValid = false;
                }

                // Validate Message
                const message = document.getElementById('message').value.trim();
                if (message === '') {
                    showError('message', 'Message is required');
                    isValid = false;
                }

                return isValid;
            }

            function showError(fieldId, message) {
                const field = document.getElementById(fieldId);
                const inputGroup = field.closest('.input-group');
                const errorElement = document.getElementById(`${fieldId}-error`);

                inputGroup.classList.add('error');
                errorElement.textContent = message;
                errorElement.classList.add('show');
            }

            function resetErrors() {
                const errorMessages = document.querySelectorAll('.error-message');
                errorMessages.forEach(el => {
                    el.textContent = '';
                    el.classList.remove('show');
                });

                const inputGroups = document.querySelectorAll('.input-group');
                inputGroups.forEach(group => group.classList.remove('error'));
            }

            // Add real-time validation if needed
            const inputs = form.querySelectorAll('.input');
            inputs.forEach(input => {
                input.addEventListener('input', function () {
                    const inputGroup = this.closest('.input-group');
                    inputGroup.classList.remove('error');
                    document.getElementById(`${this.id}-error`).classList.remove('show');
                });
            });
        });

        // validation code