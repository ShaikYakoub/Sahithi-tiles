// Product Data
const productsData = {
    floorTiles: [
        'ROYALE 120X180', 'ROYALE 80X160', 'ELITE DSF', 'RT32', 'OUTDOOR TILES',
        'ELITE PLUS RT 126', 'ELITE DSF RT24', 'ELITE PLUS', 'VW 126', 'SSF RT22',
        'RT22 SSR', 'RT22', 'ELITE GVT RT22', 'VW22 SSR', 'ELITE GVT V22', 'ELITE MEGA WHITE'
    ],
    specializedTiles: [
        'TILES FOR ESD HAZARD', 'TILES FOR RAMPS & WET AREAS', 'RT16', 'VW16',
        'STAIRCASE TILES', 'VW12', 'RT12', 'HEAVY DUTY TILES', 'HIGH TRAFFIC TILES',
        'ENDURA DESIGNER COLLECTION', 'ALKALI TILES', 'COOL ROOF TILES', 'TACTILES',
        'ELITE PLANKS RT', 'ELITE PLANKS VW', 'PARKING TILES', 'SWIMMING POOL TILES SOLUTION'
    ],
    sanitaryware: [
        'COMBO EWC TOILETS', 'MOUNTED P-TRAP TOILETS', 'MOUNTED S-TOILETS',
        'INDIAN TOILETS/ORISSA PAN', 'DESIGNER ONE PIECE TOILETS', 'ONE PIECE P-TOILETS',
        'ONE PIECE S-TRAP TOILETS', 'DESIGNER WALL HUNG TOILETS', 'WALL MOUNTED TOILETS',
        'TANKS & FLUSH VALVES', 'URINAL POT'
    ]
};

// Banner Images for Hero Slider
const bannerImages = [
    {
        image: '1.jpg',
        title: 'Upgrade your kitchen with sleek, textured glass tiles for a modern, easy-to-clean look!'
    },
    {
        image: '5.jpg',
        title: 'Bring nature indoors with these earthy, multicolored rustic tiles—perfect for walls or floors!'
    },
    {
        image: '2.jpg',
        title: 'Make a bold statement with chevron pattern tiles—where contemporary style meets timeless elegance.'
    },
    {
        image: '3.jpg',
        title: 'Add a playful touch to any space with classic checkerboard tiles—vivid, retro, and always in style.'
    },
    {
        image: '4.jpg',
        title: 'Transform your bathroom with elegant, textured tiles and stylish accents for a luxurious spa feel.'
    }
];

// Gallery Data
const galleryData = [
    { category: 'bathrooms', label: 'Modern Bathroom Installation', height: 300, image: 'Designer_One_Piece_Toilets.jpg' },
    { category: 'kitchens', label: 'Contemporary Kitchen Design', height: 350, image: 'KL1218.jpg' },
    { category: 'floors', label: 'Elegant Floor Tiles', height: 280, image: 'Royale_120x180.jpg' },
    { category: 'commercial', label: 'Commercial Lobby', height: 320, image: 'Elite_DSF_RT22.jpg' },
    { category: 'bathrooms', label: 'Luxury Bathroom Suite', height: 340, image: 'Wall_Hung___Wall_Mounted_Toilets.jpg' },
    { category: 'kitchens', label: 'Kitchen Backsplash', height: 290, image: 'RT1218.jpg' },
    { category: 'floors', label: 'Living Room Flooring', height: 310, image: 'Elite_GVT_RT22.jpg' },
    { category: 'bathrooms', label: 'Shower Enclosure', height: 330, image: 'Combo_EWC_Toilets.jpg' },
    { category: 'commercial', label: 'Office Space', height: 300, image: 'High_Traffic_Tiles.jpg' },
    { category: 'floors', label: 'Outdoor Patio Tiles', height: 320, image: 'Outdoor_Tiles.jpg' },
    { category: 'kitchens', label: 'Modern Kitchen Tiles', height: 340, image: 'VW1218.jpg' },
    { category: 'bathrooms', label: 'Bathroom Vanity Area', height: 300, image: 'Flush_Tanks_&_Flush_Valves.jpg' }
];

// Navigation
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const closeNavBtn = document.getElementById('closeNav');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    closeNavBtn.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mainNav.classList.remove('active');
    });

    // Page navigation
    document.addEventListener('click', function (e) {
        const target = e.target.closest('[data-page]');
        if (target) {
            e.preventDefault();
            const pageId = target.getAttribute('data-page');
            switchPage(pageId);

            // Close mobile menu if open
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });

    function switchPage(pageId) {
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));

        // Show selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.add('active');
            // If switching to products page, ensure it's populated
            if (pageId === 'products' && !document.getElementById('floorTilesGrid').hasChildNodes()) {
                initProductsPage();
            }
            // If switching to gallery page, ensure it's populated
            if (pageId === 'gallery' && !document.getElementById('galleryGrid').hasChildNodes()) {
                initGallery();
            }
        }

        // Update nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Smooth scroll to sections
    document.addEventListener('click', function (e) {
        const target = e.target.closest('[data-scroll]');
        if (target) {
            e.preventDefault();
            const sectionId = target.getAttribute('data-scroll');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });

    // Category card clicks
    document.addEventListener('click', function (e) {
        const card = e.target.closest('.category-card[data-scroll-products]');
        if (card) {
            e.preventDefault();
            // Switch to products page
            switchPage('products');
            // Scroll to specific category
            setTimeout(() => {
                const categoryId = card.getAttribute('data-scroll-products');
                const categoryElement = document.getElementById(categoryId);
                if (categoryElement) {
                    categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Expand the category if collapsed
                    if (!categoryElement.classList.contains('expanded')) {
                        categoryElement.classList.add('expanded');
                    }
                }
            }, 300);
        }
    });
}

// Hero Slider
function initHeroSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderDots = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');

    if (!sliderContainer || !sliderDots || !prevBtn || !nextBtn) {
        console.error('Slider elements not found');
        return;
    }

    let currentSlide = 0;
    let autoplayInterval;

    // Create slides dynamically
    bannerImages.forEach((slideData, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (index === 0) slide.classList.add('active');

        const img = document.createElement('img');
        img.src = `https://shaikyakoub.github.io/Sahithi-tiles/images/Banner/${slideData.image}`;
        img.alt = `Banner image ${index + 1}`;
        img.className = 'slide-bg';
        img.onerror = function () {
            this.src = 'https://via.placeholder.com/1200x600/CCCCCC/FFFFFF?text=Image+Not+Found';
        };

        const content = document.createElement('div');
        content.className = 'slide-content';
        content.innerHTML = `
            <h1 class="slide-title">${slideData.title}</h1>
            <p class="slide-subtitle">Premium Quality Tiles & Sanitaryware</p>
            <div class="slide-buttons">
                <button class="btn btn-primary" data-page="products">Explore Products</button>
                <button class="btn btn-secondary" data-scroll="inquiry-form">Get Quote</button>
            </div>
        `;

        slide.appendChild(img);
        slide.appendChild(content);
        sliderContainer.appendChild(slide);
    });

    const slides = document.querySelectorAll('.slide');

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });

    const dots = sliderDots.querySelectorAll('.slider-dot');

    // Function to go to a specific slide
    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        // Remove active class from current slide and dot
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Add active class to new slide and dot
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Navigation button event listeners
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Autoplay functionality
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000); // Change slide every 5 seconds
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Pause autoplay on hover
    sliderContainer.addEventListener('mouseenter', stopAutoplay);
    sliderContainer.addEventListener('mouseleave', startAutoplay);

    // Start autoplay
    startAutoplay();
}

// Featured Products Carousel
function initFeaturedCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const cards = track.querySelectorAll('.product-card');
    let currentIndex = 0;

    function getCardsToShow() {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function updateCarousel() {
        if (cards.length === 0) return; // Safety check

        const cardsToShow = getCardsToShow();
        const cardWidth = cards[0].offsetWidth;
        const gap = 20;
        const offset = -(currentIndex * (cardWidth + gap));
        track.style.transform = `translateX(${offset}px)`;

        // Disable buttons at boundaries
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= cards.length - cardsToShow;
    }

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', function () {
        const cardsToShow = getCardsToShow();
        if (currentIndex < cards.length - cardsToShow) {
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', function () {
        currentIndex = 0;
        updateCarousel();
    });

    updateCarousel();

    // Product enquiry buttons
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-product]');
        if (btn) {
            e.preventDefault();
            const productName = btn.getAttribute('data-product');
            const message = `Hi, I'm interested in ${productName}. Please provide more information.`;
            const whatsappUrl = `https://wa.me/917207436141?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    });
}

// Products Page
function initProductsPage() {
    // Populate product grids
    populateProductGrid('floorTilesGrid', productsData.floorTiles);
    populateProductGrid('specializedTilesGrid', productsData.specializedTiles);
    populateProductGrid('sanitarywareGrid', productsData.sanitaryware);

    // Category toggle
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const targetId = this.getAttribute('data-toggle');
            const content = document.getElementById(targetId);
            const icon = this.querySelector('.toggle-icon');

            content.classList.toggle('expanded');

            if (content.classList.contains('expanded')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

function populateProductGrid(gridId, products) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const imageMap = {
        'ELITE DSF': 'Elite_DSF_RT22.jpg',
        'ELITE PLUS': 'ELITE_PLUS_RT_126.jpg',
        'ELITE PLUS RT 126': 'ELITE_PLUS_RT_126.jpg',
        'VW 126': 'VW1218.jpg',
        'RT22': 'RT22_SSR.jpg',
        'RT32': 'RT32.jpg',
        'VW22 SSR': 'VW22_SSR.jpg',
        'RT22 SSR': 'RT22_SSR.jpg',
        'SSF RT22': 'SSF_RT22.jpg'
    };

    products.forEach((product, index) => {
        const filename = imageMap[product] || product.split(' ').map(word => {
            if (word.length <= 4 && /^[A-Z0-9]+$/.test(word)) return word; // keep short codes all caps
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('_') + '.jpg';

        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="images/${filename}" alt="${product}" class="product-image" loading="lazy" onerror="this.src='https://via.placeholder.com/300x300/EEEEEE/333333?text=${encodeURIComponent(product)}'">
            <h3 class="product-name">${product}</h3>
            <button class="btn btn-outline btn-small" data-product="${product}">Enquire Now</button>
        `;

        grid.appendChild(card);
    });
}// Gallery
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightboxContent');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    let currentLightboxIndex = 0;
    let filteredItems = [...galleryData];

    // Populate gallery
    function populateGallery(items) {
        galleryGrid.innerHTML = '';
        items.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.setAttribute('data-category', item.category);
            galleryItem.setAttribute('data-index', index);

            galleryItem.innerHTML = `
                <img src="images/${item.image}" alt="${item.label}" class="gallery-item-image" style="height: ${item.height}px" loading="lazy" onerror="this.src='https://via.placeholder.com/400x${item.height}/CCCCCC/FFFFFF?text=${encodeURIComponent(item.label)}'">
                <div class="gallery-item-overlay">
                    <div class="gallery-item-title">${item.label}</div>
                </div>
            `;

            galleryItem.addEventListener('click', function () {
                currentLightboxIndex = index;
                openLightbox();
            });

            galleryGrid.appendChild(galleryItem);
        });
    }

    populateGallery(galleryData);

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            if (filter === 'all') {
                filteredItems = [...galleryData];
            } else {
                filteredItems = galleryData.filter(item => item.category === filter);
            }
            populateGallery(filteredItems);
        });
    });

    // Lightbox
    function openLightbox() {
        const item = filteredItems[currentLightboxIndex];

        lightboxContent.innerHTML = `
            <img src="images/${item.image}" alt="${item.label}" style="max-width: 90vw; max-height: 90vh; border-radius: 8px;" onerror="this.src='https://via.placeholder.com/1200x800/333333/FFFFFF?text=${encodeURIComponent(item.label)}'">
        `;

        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    function nextImage() {
        currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
        openLightbox();
    }

    function prevImage() {
        currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
        openLightbox();
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
}

// Forms
function initForms() {
    const whatsappForm = document.getElementById('whatsappForm');
    const contactForm = document.getElementById('contactForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', handleFormSubmit);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // Validate required fields
        const name = formData.get('name');
        const phone = formData.get('phone');

        if (!name || !phone) {
            alert('Please fill in all required fields');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Format WhatsApp message
        let message = `*New Inquiry*\n\n`;
        message += `*Name:* ${name}\n`;
        message += `*Phone:* ${phone}\n`;

        const email = formData.get('email');
        if (email) message += `*Email:* ${email}\n`;

        const productInterest = formData.get('product-interest');
        if (productInterest) message += `*Product Interest:* ${productInterest}\n`;

        const projectType = formData.get('project-type');
        if (projectType) message += `*Project Type:* ${projectType}\n`;

        const contactTime = formData.get('contact-time');
        if (contactTime) message += `*Preferred Time:* ${contactTime}\n`;

        const messageText = formData.get('message');
        if (messageText) message += `\n*Message:*\n${messageText}`;

        // Redirect to WhatsApp
        setTimeout(() => {
            const whatsappUrl = `https://wa.me/917207436141?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

            // Reset form
            form.reset();
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            alert('Redirecting to WhatsApp...');
        }, 500);
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Floating WhatsApp Button
function initFloatingWhatsApp() {
    const whatsappFloat = document.getElementById('whatsappFloat');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (window.innerWidth <= 768) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                whatsappFloat.style.transform = 'scale(0)';
            } else {
                // Scrolling up
                whatsappFloat.style.transform = 'scale(1)';
            }
        } else {
            whatsappFloat.style.transform = 'scale(1)';
        }

        lastScrollTop = scrollTop;
    });
}

// Sticky Header
window.addEventListener('scroll', function () {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize App
document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initHeroSlider();
    initFeaturedCarousel();
    // initTestimonials(); // Removed - testimonials section no longer exists
    // initProductsPage(); // Only call when navigating to products page
    // initGallery(); // Only call when navigating to gallery page
    initForms();
    initScrollAnimations();
    initFloatingWhatsApp();

    // Global image error handler
    document.addEventListener('error', (e) => {
        const target = e.target;
        // Check if the target is an image
        if (target.tagName.toLowerCase() === 'img') {
            const altText = target.alt || 'Placeholder';
            const width = target.offsetWidth > 0 ? target.offsetWidth : 300;
            const height = target.offsetHeight > 0 ? target.offsetHeight : 200;

            // Prevent infinite loop if placeholder also fails
            if (target.src.startsWith('https://via.placeholder.com/')) {
                return;
            }

            target.src = `https://via.placeholder.com/${width}x${height}/CCCCCC/FFFFFF?text=${encodeURIComponent(altText)}`;
        }
    }, true); // Use capture phase to catch errors early
});