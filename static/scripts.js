document.addEventListener('DOMContentLoaded', function() {
    const sections= document.querySelectorAll('section');
    const navlinks= document.querySelectorAll('nav ul li a');

    function scrollToAboutSection(){
        const aboutSection= document.querySelector('#about');
        const sectionTop= aboutSection.offsetTop;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
            });

            window.history.pushState(null, '', 'about');
            }
        function setActiveNavLink(link) {
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            link.parentElement.classList.add('active');
        }
    }
)