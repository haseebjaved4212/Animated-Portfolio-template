# Haseeb Javed - Portfolio Website

A modern, responsive portfolio website showcasing web development skills and projects with smooth animations and interactive elements.

## 🌟 Live Demo

- [Portfolio Website]( https://haseebjaved4212.github.io/Animated-Portfolio-template/)

## 📖 Overview

This is a personal portfolio website built with modern web technologies, featuring a clean design, smooth animations, and interactive elements. The site showcases my skills as a web developer and includes featured projects, contact information, and social media links.

## ✨ Features

### Design & UI
- **Modern Dark Theme** with gradient accents
- **Responsive Design** - Optimized for all devices
- **Smooth Scrolling** navigation
- **Interactive Background** with animated particles
- **Glass-morphism Effects** for navigation and cards
- **Custom Typography** using Outfit and DM Sans fonts

###  Animations & Interactions
- **GSAP-powered Animations** for smooth page transitions
- **Scroll-triggered Reveals** for sections and elements
- **Hero Text Animations** with staggered entrance effects
- **Skills Marquee** with continuous scrolling animation
- **Interactive Contact Form** with mailto integration
- **Toast Notifications** for user feedback

###  Responsive Features
- **Mobile Navigation** with hamburger menu
- **Adaptive Particle System** based on screen size
- **Responsive Typography** with clamp() functions
- **Mobile-optimized Touch Interactions**

##  Technologies Used

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern CSS with custom properties, gradients, and animations
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation

### Libraries & Frameworks
- **GSAP (GreenSock)** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animation triggers
- **Google Fonts** - Outfit and DM Sans typography

### Development Tools
- **Responsive Design** principles
- **CSS Grid & Flexbox** for layouts
- **Custom CSS Properties** for theming
- **Canvas API** for particle background effects

## 📁 Project Structure

```text 
My-Portfolio/
├── index.html # Main HTML file
├── style.css # Styles and animations
├── script.js # JavaScript functionality
├── Assets/ # Project images and media
│ ├── Audira-website.png
│ ├── E-commerce-store.png
│ └── Music-player.png
└── fonts/ # Custom fonts
└── ttf/
└── JetBrainsMono-Regular.ttf

```

##  Key Sections

### 1. Hero Section
- Animated introduction with name and role
- Call-to-action buttons for projects and contact
- CV download functionality (placeholder)

### 2. About Section
- Personal introduction and background
- Skills and interests overview
- Career focus and goals

### 3. Skills Section
- Animated marquee displaying technical skills
- Technologies: HTML, CSS, JavaScript, TypeScript, React.js, Next.js, GSAP, Three.js

### 4. Projects Section
- **Audira Headphone Website** - Premium brand site with GSAP animations
- **E-commerce Store** - Responsive store with cart functionality
- **Dynamic Music Player** - Interactive player with UI animations
- Links to live demos and source code

### 5. Contact Section
- Contact form with validation
- Social media links (GitHub, LinkedIn, Instagram, Facebook, Twitter)
- Direct contact information (email and phone)

##  Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection for CDN resources (GSAP, Google Fonts)

### Installation
1. **Clone the repository**

```bash
   git clone " repo_url"
   cd "repo_name"

```

## Customization

- Color Scheme

The website uses CSS custom properties for easy theming:
```css
:root {
  --bg: #0b0d10;           /* Background */
  --card: #0f1217;         /* Card backgrounds */
  --muted: #9aa4b2;        /* Muted text */
  --text: #e7ecf3;         /* Primary text */
  --brand: #5be7c4;        /* Brand primary */
  --brand-2: #6aa5ff;      /* Brand secondary */
  --accent: #ff8e5e;       /* Accent color */
  --ring: rgba(91, 231, 196, 0.35); /* Focus rings */
}
```

## Adding New Projects

To add a new project, update the projects section in index.html:
```html
<article class="project">
  <div class="project__media">
    <img src="./Assets/your-project.png" alt="Project description" loading="lazy">
  </div>
  <div class="project__content">
    <h3 class="project__title">Your Project Title</h3>
    <p class="project__desc">Brief project description</p>
    <div class="project__links">
      <a class="btn btn--sm" target="_blank" href="#">Live Demo</a>
      <a class="btn btn--sm btn--ghost" target="_blank" href="#">Source Code</a>
    </div>
  </div>
</article>

```

## Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

##  Performance Optimizations
- Image Optimization with lazy loading
- Font Display Swap for improved loading
- Efficient Animations using GSAP and CSS transforms
- Responsive Images for different screen sizes
- Minimal JavaScript bundle for fast loading

## 📞 Contact & Social Media

- Email: contactimhaseeb@gmail.com
- Phone: +92 327 2119600
- GitHub: haseebjaved4212
- LinkedIn: Haseeb Javed
- Instagram: @haseeb_javed4212
- Twitter: @Haseebjaved4212
- Facebook: Haseeb Javed
## License

- This project is open source and available under the MIT License.

##  Acknowledgments
- GSAP for amazing animation capabilities
- Google Fonts for beautiful typography
- Inspiration from modern portfolio designs 

Built with ❤️ by Haseeb Javed
