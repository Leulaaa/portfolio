$(document).ready(function() {
    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Initialize Google Maps
    function initMap() {
        var mapOptions = {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }

    initMap();

    // Smooth scrolling
    
});
$(document).ready(function() {
    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Google Maps Initialization
    function initMap() {
        var mapOptions = {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }
    initMap();

    // Smooth Scrolling
    

    // Change Navbar on Scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});
// Animate progress bars on scroll
$(document).ready(function() {
    $('.progress-bar').each(function() {
        var width = $(this).data('width');
        $(this).css('width', width + '%');
    });

    // Smooth Scrolling
    

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duration of animations
        easing: 'ease-in-out', // Easing function
        once: true // Animation will happen only once
    });
});
// Filter portfolio items
$(document).ready(function() {
    $('.filter-button').click(function() {
        var filter = $(this).data('filter');
        $('.portfolio-item').each(function() {
            var category = $(this).data('category');
            if (filter === 'all' || filter === category) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });

    // Initialize Bootstrap Modals
    $('[data-toggle="modal"]').on('click', function() {
        var target = $(this).data('target');
        $(target).modal('show');
    });
});
$(document).ready(function(){
    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Initialize Fancybox
    $("[data-fancybox]").fancybox({
        buttons: [
            'slideShow',
            'fullScreen',
            'download',
            'thumbs',
            'close'
        ],
        loop: true,
        transitionEffect: "fade",
        caption: function(instance, item) {
            return $(this).data('caption') || '';
        }
    });
});
$(document).ready(function(){
    $("#testimonialsCarousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 800,
        dots: true
    });
});
// Initialize Google Map
function initMap() {
    var location = { lat: -34.397, lng: 150.644 }; // Set your location here
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#212121' }] },
            { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
            { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{ color: '#bdbdbd' }] },
            { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
            { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#181818' }] },
            { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
            { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2c2c2c' }] },
            { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#8a8a8a' }] },
            { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
            { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#3d3d3d' }] }
        ]
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Our Location'
    });
}

// Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            document.getElementById('formResponse').innerHTML = '<div class="alert alert-success">Your message has been sent successfully!</div>';
            document.getElementById('contactForm').reset();
        } else {
            document.getElementById('formResponse').innerHTML = '<div class="alert alert-danger">' + (data.message || 'An error occurred. Please try again.') + '</div>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('formResponse').innerHTML = '<div class="alert alert-danger">An error occurred. Please try again.</div>';
    });
});


// Load Google Maps script
function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.async = true;
    document.head.appendChild(script);
}
loadScript();
// Handle Newsletter Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this;
    let valid = true;

    // Clear all error messages
    form.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.getElementById('formResponse').innerHTML = '';

    // Validate Name (required)
    if (!form.name.value.trim()) {
        form.querySelector('#name + .error-message').textContent = 'Name is required.';
        valid = false;
    }

    // Validate Email (required and pattern)
    const email = form.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        form.querySelector('#email + .error-message').textContent = 'Email is required.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        form.querySelector('#email + .error-message').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate Phone (optional, but if filled must be valid)
    const phone = form.phone.value.trim();
    const phonePattern = /^[0-9+\-\s()]*$/;
    if (phone && !phonePattern.test(phone)) {
        form.querySelector('#phone + .error-message').textContent = 'Please enter a valid phone number.';
        valid = false;
    }

    // Validate Message (required, min 10 chars)
   

    // Validate reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        document.getElementById('recaptcha-error').textContent = 'Please verify that you are not a robot.';
        valid = false;
    } else {
        document.getElementById('recaptcha-error').textContent = '';
    }

    if (!valid) {
        return; // Stop if validation failed
    }

    // Disable submit button and show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Prepare form data
    const formData = new FormData(form);
    formData.append('g-recaptcha-response', recaptchaResponse);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('formResponse').innerHTML = '<div class="alert alert-success">Your message has been sent successfully!</div>';
            form.reset();
            grecaptcha.reset();
        } else {
            document.getElementById('formResponse').innerHTML = `<div class="alert alert-danger">${data.message || 'An error occurred. Please try again.'}</div>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('formResponse').innerHTML = '<div class="alert alert-danger">An error occurred. Please try again.</div>';
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'Send';
    });
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    
});
