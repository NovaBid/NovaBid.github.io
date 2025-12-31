tailwind.config = {
      theme: {
        extend: {
          colors: {
            cosmic: {
              50: '#f0f7ff',
              100: '#e0f0ff',
              500: '#0f1a3c',
              600: '#0a1128',
              700: '#070d1a',
            },
            nova: {
              400: '#00f3ff',
              500: '#00d1e0',
            },
            red: {
              100: '#ff9999',
              200: '#ff6666',
              300: '#ff6666',
              400: '#ff3333',
              500: '#ff3333',
              600: '#e02424',
              700: '#b91c1c',
              800: '#991b1b',
              900: '#7f1d1d',
            }

          },
          animation: {
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'float': 'float 6s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            }
          }
        }
      }
    }

// Generate animated stars in hero section
    document.addEventListener('DOMContentLoaded', () => {
      const starsContainer = document.getElementById('stars');
      if (starsContainer) {
        const starCount = 50;
        for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.classList.add('star');

          // Random size (1-3px)
          const size = Math.random() * 2 + 1;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;

          // Random position
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;

          // Random animation delay
          star.style.animation = `pulse-slow ${Math.random() * 5 + 3}s infinite`;

          starsContainer.appendChild(star);
        }
      }

      // Simulate live bid counter
      const bidElement = document.querySelector('.live-counter');
      if (bidElement) {
        let currentBid = 24500;
        setInterval(() => {
          const increment = Math.floor(Math.random() * 300) + 100;
          currentBid += increment;
          bidElement.textContent = `$${currentBid.toLocaleString()}`;
        }, 4000);
      }

      // Navbar scroll effects - FIXED VERSION
      const header = document.querySelector('header');
      const navShadow = document.getElementById('nav-shadow');

      if (header && navShadow) {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
          const currentScroll = window.pageYOffset;

          // Show/hide shadow on scroll
          if (currentScroll > 10) {
            //header.classList.add('nav-scrolled');
            navShadow.classList.add('nav-shadow-visible');
          } else {
            //header.classList.remove('nav-scrolled');
            navShadow.classList.remove('nav-shadow-visible');
          }

          // Direction-based hiding
          if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
          } else {
            header.style.transform = 'translateY(0)';
          }

          lastScroll = currentScroll;
        });
      }

      // Mobile menu toggle
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');

      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    });