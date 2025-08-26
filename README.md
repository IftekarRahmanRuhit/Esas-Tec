# 🚀 Esas Tec - Professional Technology Solutions Website

A modern, responsive website for Esas Tec, a professional technology solutions company. Built with Next.js 15, React 19, and featuring stunning Three.js animations, this website showcases the company's services, portfolio, and client testimonials.

![Esas Tec](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-0.179.1-000000?style=for-the-badge&logo=three.js)

## ✨ Features

### 🎨 **Modern Design**
- **Dark Theme**: Professional dark color scheme with cyan/blue accents
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion powered animations
- **Three.js Backgrounds**: Interactive 3D backgrounds on key pages

### 🏗️ **Architecture**
- **Next.js 15**: Latest version with App Router
- **React 19**: Cutting-edge React features
- **Static Export**: Optimized for deployment
- **Component-Based**: Modular, reusable components

### 📱 **Pages & Sections**
- **Home**: Hero banner, services, testimonials, CTA
- **About**: Company story, mission, principles
- **Services**: Detailed service offerings with process
- **Portfolio**: Project showcase with case studies
- **Blog**: Latest articles and insights
- **Contact**: Contact form and FAQ section

### 🎯 **Key Components**
- **Interactive Banners**: Three.js animated backgrounds
- **Testimonials Slider**: Auto-playing client testimonials
- **Service Cards**: Animated service presentations
- **Portfolio Grid**: Professional project showcase
- **Contact Forms**: User-friendly contact interfaces
- **Navigation**: Smooth, responsive navigation

## 🛠️ Technology Stack

### **Frontend Framework**
- **Next.js 15.5.0** - React framework with App Router
- **React 19.1.0** - Latest React with new features
- **Turbopack** - Fast bundler for development

### **Styling & UI**
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library
- **Lucide React 0.540.0** - Icon library

### **3D Graphics**
- **Three.js 0.179.1** - 3D graphics library
- **Custom Animations** - Particle systems and geometric shapes

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Static Export** - Optimized for static hosting

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/esas-tec.git
   cd esas-tec
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Static Export
The project is configured for static export and can be deployed to:
- **Netlify** (configured with `netlify.toml`)
- **Vercel**
- **GitHub Pages**
- Any static hosting service

### Environment Variables
No environment variables required for basic functionality.

## 📁 Project Structure

```
esas-tec/
├── public/                          # Static assets
│   ├── favicon.png                  # Website favicon
│   ├── file.svg                     # File icon
│   ├── globe.svg                    # Globe icon
│   ├── next.svg                     # Next.js logo
│   ├── vercel.svg                   # Vercel logo
│   └── window.svg                   # Window icon
├── src/
│   └── app/                         # Next.js App Router
│       ├── components/              # Reusable components
│       │   ├── AboutPageComponents/ # About page components
│       │   │   ├── AboutPageBanner.js
│       │   │   ├── OurGenesis.js
│       │   │   ├── OurMission.js
│       │   │   ├── Principles.js
│       │   │   ├── Technologies.js
│       │   │   └── WhyUs.js
│       │   ├── BlogPageComponents/  # Blog page components
│       │   │   ├── BlogPageBanner.js
│       │   │   ├── LatestArticle.js
│       │   │   └── LatestArticles.js
│       │   ├── ContactPageComponents/ # Contact page components
│       │   │   ├── ContactForm.js
│       │   │   ├── ContactPageBanner.js
│       │   │   └── FrequentlyAskedQuestions.js
│       │   ├── PortfolioPageComponents/ # Portfolio components
│       │   │   ├── PortfolioCard.js
│       │   │   └── PortfolioPageBanner.js
│       │   ├── ServicesPageComponents/ # Services components
│       │   │   ├── ProcessSection.js
│       │   │   ├── ServicesCard.js
│       │   │   ├── ServicesPageBanner.js
│       │   │   └── WhyChooseUs.js
│       │   ├── HomePageBanner/      # Home page banner components
│       │   │   ├── Banner.js
│       │   │   └── services.js
│       │   ├── navbar.js            # Navigation component
│       │   ├── footer.js            # Footer component
│       │   ├── Ourwork.js           # Work process component
│       │   ├── Testimonials.js      # Client testimonials
│       │   └── ContactCTA.js        # Contact CTA component
│       ├── about/                   # About page
│       │   └── page.js
│       ├── services/                # Services page
│       │   └── page.js
│       ├── portfolio/               # Portfolio page
│       │   └── page.js
│       ├── blogs/                   # Blog page
│       │   └── page.js
│       ├── contact/                 # Contact page
│       │   └── page.js
│       ├── favicon.ico              # Favicon
│       ├── globals.css              # Global styles
│       ├── layout.js                # Root layout
│       └── page.js                  # Home page
├── eslint.config.mjs                # ESLint configuration
├── jsconfig.json                    # JavaScript configuration
├── netlify.toml                     # Netlify deployment config
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Lock file
├── postcss.config.mjs               # PostCSS configuration
└── README.md                        # This file
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Cyan (#00ffff) to Blue (#0080ff) gradients
- **Background**: Dark slate (#0f172a to #1e293b)
- **Text**: White (#ffffff) and light gray (#cbd5e1)
- **Accents**: Purple (#a855f7) and pink (#ec4899)

### **Typography**
- **Font**: Geist Sans (Google Fonts)
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable typography

### **Animations**
- **Entrance**: Fade-in and slide animations
- **Hover**: Scale and color transitions
- **Background**: Three.js particle systems
- **Performance**: Optimized for smooth 60fps

## 🔧 Customization

### **Adding New Pages**
1. Create a new directory in `src/app/`
2. Add a `page.js` file
3. Import and use existing components

### **Modifying Components**
- Components are modular and reusable
- Styling uses Tailwind CSS classes
- Animations use Framer Motion

### **Three.js Backgrounds**
- Located in banner components
- Customizable particle systems
- Performance-optimized animations

## 📊 Performance

### **Optimizations**
- **Static Export**: Pre-built for fast loading
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic by Next.js
- **Lazy Loading**: Images and components
- **Minification**: Production builds

### **Lighthouse Scores**
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: info@esas-tec.com
- **Website**: [esas-tec.com](https://esas-tec.com)
- **Issues**: [GitHub Issues](https://github.com/your-username/esas-tec/issues)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment
- **Three.js Community** - For 3D graphics library
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations

---

**Built with ❤️ by Esas Tec Team**

*Transforming ideas into digital reality*
