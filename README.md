# SevenStack Portfolio Website

An impressive **React + Tailwind CSS** portfolio website designed for a **freelancing technical & development team** with 7 members. The site showcases team projects, profiles, and a contact form — built for modern performance and responsive design.

---

## 🚀 Features

* ⚡ Built using **React + Vite** for blazing-fast performance
* 🎨 Styled with **Tailwind CSS** (Dark & Light modes)
* 👥 Dedicated **Team Section** for 7 members
* 💼 **Projects Section** featuring:

  * CNG Management App
  * Loan Management App
  * Kutumbh Kalyan Scheme (Rayat Shikshan Sanstha)
* 📩 Contact Form with clean UI
* 🌙 Dark/Light Mode toggle
* 📱 Fully responsive design

---

## 🧩 Tech Stack

* **React 18+**
* **Vite 5+**
* **Tailwind CSS 3+**
* **Node.js 20.19+**

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sevenstack007/portfolio-website
cd portfolio-website
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Tailwind CSS (if not already)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4️⃣ Configure Tailwind

Add this to your **tailwind.config.js**:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 5️⃣ Start Development Server

```bash
npm run dev
```

Visit your site at:

```
http://localhost:5173/
```

---

## 📁 Project Structure

```
seven-stack/
├── src/
│   ├── components/
│   │   └── SevenStack.jsx          # Main portfolio component
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🧑‍💻 Customization

You can update:

* Team details → Inside the `Team` section
* Project details → Inside the `Projects` array
* Colors → Inside `tailwind.config.js`

---

## 🌍 Deployment

### Deploy to **Vercel**:

```bash
npm run build
vercel deploy
```

Or use any static host like **Netlify**, **GitHub Pages**, or **Cloudflare Pages**.

---

## 🏆 Credits

Developed by **SevenStack** — A 7-member freelance group specializing in modern app development.

© 2025 DevTeam. All rights reserved.
