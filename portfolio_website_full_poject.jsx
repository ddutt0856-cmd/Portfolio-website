// File: App.jsx (default export React component)
// TailwindCSS-based single-file portfolio app. Replace placeholder text and images.

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, DownloadCloud } from 'lucide-react'

export default function PortfolioApp(){
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12">
      <header className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Your Name</h1>
          <p className="text-slate-600 mt-1">AI/ML Engineer &#x2022; Full‑Stack Developer</p>
        </div>
        <nav className="flex gap-3 items-center">
          <a href="#projects" className="px-3 py-2 rounded-md hover:bg-white/60">Projects</a>
          <a href="#about" className="px-3 py-2 rounded-md hover:bg-white/60">About</a>
          <a href="#contact" className="px-3 py-2 rounded-md hover:bg-white/60">Contact</a>
          <a href="/resume.pdf" download className="ml-2 inline-flex items-center gap-2 px-3 py-2 bg-slate-900 text-white rounded-md">
            <DownloadCloud size={16}/> Resume
          </a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto mt-10 grid gap-10">
        <section id="hero" className="bg-white p-6 rounded-2xl shadow-md">
          <div className="md:flex md:items-center md:gap-6">
            <div className="flex-1">
              <motion.h2 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-2xl md:text-3xl font-bold">Hi, I’m Your Name — I build ML systems & delightful web apps.</motion.h2>
              <p className="mt-4 text-slate-600">I’m a student/engineer focused on machine learning, data products, and clean frontends. I enjoy building end-to-end projects that ship value quickly.</p>

              <div className="mt-6 flex gap-3">
                <a href="#projects" className="px-4 py-2 rounded-md bg-indigo-600 text-white">See projects</a>
                <a href="#contact" className="px-4 py-2 rounded-md border">Work with me</a>
              </div>
            </div>

            <div className="mt-6 md:mt-0 w-40 h-40 rounded-2xl bg-gradient-to-tr from-indigo-100 to-sky-50 flex items-center justify-center shadow-inner">
              {/* Replace with your photo */}
              <img src="/profile.jpg" alt="Your Name" className="w-36 h-36 object-cover rounded-xl"/>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold">Featured Projects</h3>
          <p className="text-slate-600 mt-1">Short descriptions, links to repos & live demos.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Project card template - duplicate for each project */}
            <article className="border rounded-lg p-4 hover:shadow-lg transition">
              <h4 className="font-semibold">AI-Powered Portfolio</h4>
              <p className="text-sm text-slate-600 mt-1">Personal website + FastAPI backend + Sentiment Model (spaCy + scikit-learn). Integrated via REST API.</p>
              <div className="mt-3 flex gap-2">
                <a href="https://github.com/yourname/ai-portfolio" className="text-sm underline">GitHub</a>
                <a href="https://your-portfolio.vercel.app" className="text-sm underline">Live</a>
              </div>
            </article>

            <article className="border rounded-lg p-4 hover:shadow-lg transition">
              <h4 className="font-semibold">House Price Predictor</h4>
              <p className="text-sm text-slate-600 mt-1">Linear regression + feature engineering, with a Streamlit demo and explanation notebook.</p>
              <div className="mt-3 flex gap-2">
                <a href="#" className="text-sm underline">GitHub</a>
                <a href="#" className="text-sm underline">Demo</a>
              </div>
            </article>

          </div>
        </section>

        <section id="about" className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold">About</h3>
          <div className="mt-4 text-slate-600">
            <p>I’m a Computer Science student focused on AI/ML, building production-ready models and developer tools. I know Python, React, FastAPI, and basic cloud deployments.</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li>• Python, NumPy, pandas</li>
              <li>• PyTorch, scikit-learn</li>
              <li>• React, Next.js</li>
              <li>• SQL, Docker, Git</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="text-slate-600 mt-1">Email me — always open to internships, collaborations and mentorships.</p>

          <form className="mt-4 grid gap-3 max-w-xl">
            <input type="text" placeholder="Your name" className="border rounded p-3" required />
            <input type="email" placeholder="Your email" className="border rounded p-3" required />
            <textarea placeholder="Message" className="border rounded p-3 h-28" />
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded">
              <Mail size={14}/> Send message
            </button>
          </form>

          <div className="mt-6 text-sm text-slate-500">Or email me at <a href="mailto:you@example.com" className="underline">you@example.com</a></div>
        </section>

        <footer className="text-center text-slate-500 text-sm">© {new Date().getFullYear()} Your Name — Built with React + Tailwind</footer>
      </main>
    </div>
  )
}


---

# README.md (Use this in your repo root)

# Your Name — Portfolio

This repository contains a single-page portfolio built with React and Tailwind CSS. It showcases projects, a short bio, and contact form. The recommended stack and files below will help you reproduce a production-ready site.

## Features
- Hero section with profile image
- Projects gallery with repo + live links
- About & Skills
- Contact form (static; can integrate with Formspree, Netlify Forms, or your backend)
- Resume download link
- Mobile-friendly, accessible and SEO-ready

## Tech stack
- React (V18+)
- Tailwind CSS
- Framer Motion for subtle animations
- Lucide-react for icons
- (Optional) Next.js if you want SSR/SSG

---

## Recommended project structure

```
portfolio/
├─ public/
│  ├─ profile.jpg
│  └─ resume.pdf
├─ src/
│  ├─ App.jsx
│  ├─ index.jsx
│  ├─ components/
│  │  ├─ ProjectCard.jsx
│  │  ├─ Nav.jsx
│  │  └─ Footer.jsx
│  └─ styles/ (if needed)
├─ .gitignore
├─ package.json
├─ tailwind.config.js
└─ README.md
```

## Quick start (Create React App)

1. Create project

```bash
npx create-react-app my-portfolio
cd my-portfolio
```

2. Install dependencies

```bash
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure Tailwind

In `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: { extend: {} },
  plugins: [],
}
```

In `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Replace `src/App.js` with the `App.jsx` component above (rename to .jsx if you like) and add `profile.jpg` + `resume.pdf` to `public/`.

5. Run locally

```bash
npm start
```

---

## Deploying

### Vercel (recommended for React/Next.js)
- Create an account at Vercel
- Import GitHub repo
- Deploy (Vercel handles build settings automatically)

### Netlify
- Connect your repo
- Set build command: `npm run build` and publish folder `build`

### GitHub Pages (for CRA)
- Install: `npm install --save gh-pages`
- Add scripts to `package.json`:
  - `predeploy`: `npm run build`
  - `deploy`: `gh-pages -d build`
- Run `npm run deploy`

---

## SEO & Accessibility checklist
- Add `<meta>` tags in `public/index.html` (title, description, open graph)
- Use semantic HTML (header, main, nav, footer)
- Set `alt` attributes for images
- Ensure color contrast and keyboard accessibility

---

## README / Project Page template (for GitHub)

Use this in your repo README to showcase the project:

```md
# Portfolio — Your Name

![Hero screenshot](/screenshot.png)

## About
Short intro.

## Features
- Feature 1
- Feature 2

## Tech
React, Tailwind, Framer Motion

## Run locally
Instructions...

## License
MIT
```

---

## First-commit checklist (Git commands)

```bash
git init
git add .
git commit -m "chore: initial portfolio site"
git branch -M main
git remote add origin git@github.com:yourname/portfolio.git
git push -u origin main
```

## Helpful enhancements (next steps)
- Add a small REST API with FastAPI for the contact form and demo ML endpoints
- Add unit/integration tests for components
- Add analytics (Plausible or Google Analytics) and contact form spam protection
- Add CI with GitHub Actions to run linting and tests

---

## Resume tips
- Keep resume PDF in `public/resume.pdf` and link to it in navigation
- Include concise bullets for each project with tech stack, impact, and links to code

---

## LICENSE
Use MIT license or your preferred license. Example MIT header:

```
MIT License

Copyright (c) YEAR Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
... (standard MIT text)
```

---

Good luck! Open the file `App.jsx` and the README above — replace names, links, and images. If you want, I can now:

- Generate a ready-to-paste `index.html`, `package.json`, `tailwind.config.js` and `postcss.config.js` files.
- Create a GitHub-ready repo structure with sample commits (I can produce the commands and file contents).
- Produce a 1-page resume PDF template you can edit.

Which of those would you like next?
