# 🌟 Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a beautiful star background animation, dark/light theme toggle, and interactive sections to showcase projects and skills.

![Portfolio Screenshot](public/Screenshot%202025-08-30%20212554.png)

## ✨ Features

- 🎨 **Modern Design** - Clean and professional UI with smooth animations
- 🌙 **Dark/Light Mode** - Toggle between themes for better user experience
- ⭐ **Star Background** - Beautiful animated star field background
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **Fast Performance** - Built with Vite for lightning-fast loading
- 📧 **Contact Form** - Integrated contact form with EmailJS
- 🎯 **Single Page Application** - Smooth navigation between sections

## 🛠️ Built With

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Animations:** CSS & React
- **Form Handling:** EmailJS
- **Notifications:** React Toastify

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── portfolio.svg
│   └── projects/
│       ├── project1.png
│       ├── project2.png
│       └── project3.png
├── src/
│   ├── Components/
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillSection.jsx
│   │   ├── StarBackground.jsx
│   │   └── ThemeToggle.jsx
│   ├── assets/
│   │   └── [skill icons & logos]
│   ├── lib/
│   │   └── utils.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the portfolio in action!

## 📱 Sections

### 🏠 Hero Section
- Introduction and welcome message
- Call-to-action buttons
- Professional photo/avatar

### 👨‍💻 About Section
- Personal background
- Professional summary
- Interests and hobbies

### 🛠️ Skills Section
- Technical skills with icons
- Programming languages
- Tools and technologies

### 💼 Projects Section
- Featured projects with images
- Project descriptions
- Live demo and source code links

### 📞 Contact Section
- Contact form integration
- Social media links
- Professional contact information

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      }
    }
  }
}
```

### Content Updates
- Update personal information in component files
- Replace project images in `public/projects/`
- Modify skill icons in `src/assets/`
- Update social links and contact information

## 📧 Contact Form Setup

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Set up your email service and template
3. Add your EmailJS credentials to the contact form component

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for beautiful icons
- EmailJS for contact form integration

## 📞 Contact

**Omkar Hole** - [@omkarhole314](https://twitter.com/omkarhole314) - omkarhole314@gmail.com

Project Link: [https://github.com/omkarhole/portfolio](https://github.com/yourusername/portfolio)

---

⭐ **If you like this project, please give it a star!** ⭐
