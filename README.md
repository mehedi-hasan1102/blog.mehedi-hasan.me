# Blog - Mehedi Hasan

A modern, animated blog platform built with Next.js and TypeScript, featuring beautiful UI animations powered by GSAP.

## 🚀 Overview

This is a professional blog application showcasing web development insights, technical articles, and development stories. The blog features smooth animations and a responsive design to provide an engaging user experience.

## ✨ Features

- **Animated Home Page** - Smooth GSAP animations for title, subtitle, description, and call-to-action button
- **404 Error Page** - Custom animated 404 page with a playful astronaut theme
- **Responsive Design** - Mobile-friendly layout that works seamlessly across all devices
- **TypeScript Support** - Fully typed codebase for better development experience
- **Modern Stack** - Built with Next.js 14+, React, and Tailwind CSS
- **Icons** - React Icons for consistent iconography

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 14+
- **Language**: TypeScript
- **Styling**: CSS Modules with Tailwind CSS support
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: React Icons
- **Package Manager**: npm

## 📦 Installation

Clone the repository and install dependencies:

```bash
npm install
```

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
app/
├── page.tsx              # Home page with animations
├── layout.tsx            # Root layout
├── not-found.tsx         # Custom 404 page
├── globals.css           # Global styles
├── home.module.css       # Home page styles
└── not-found.module.css  # 404 page styles
public/
└── images/              # Static assets
eslint.config.mjs        # ESLint configuration
tsconfig.json            # TypeScript configuration
next.config.ts           # Next.js configuration
```

## 🎨 Features Details

### Home Page Animation
- Sequential fade-in and slide-up animations for all elements
- Smooth scale animation for the call-to-action button
- Responsive animated background orbs
- Links to main portfolio at mehedi-hasan.me

### 404 Error Page
- Playful astronaut imagery
- Floating animation effect
- Smooth transitions and hover states
- Redirect button to main portfolio

## 🔗 Links

- **Portfolio**: [mehedi-hasan.me](https://www.mehedi-hasan.me)
- **Blog**: [blog.mehedi-hasan.me](https://blog.mehedi-hasan.me)

## 📝 Development

To modify the animations or content:

1. Edit `app/page.tsx` for home page content
2. Edit `app/not-found.tsx` for 404 page content
3. Modify CSS modules for styling adjustments
4. Update GSAP timeline settings for animation changes

## 🚀 Deployment

Deploy to Vercel with one click:

```bash
npm run build
npm start
```

Or deploy directly on [Vercel](https://vercel.com) for automatic deployments from Git.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Mehedi Hasan**
- Portfolio: [mehedi-hasan.me](https://www.mehedi-hasan.me)
- Blog: [blog.mehedi-hasan.me](https://blog.mehedi-hasan.me)
