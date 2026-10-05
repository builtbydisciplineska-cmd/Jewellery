# Maison Valoire — Haute Joaillerie Showcase

An ultra-premium jewellery showcase website crafted for high joaillerie, certified rare gemstones, bespoke craftsmanship, and private salon viewings.

---

## 🚀 How to Open and Run from GitHub

Modern React applications use **ES Modules** (`<script type="module">`). If you download or clone the repository and double-click `index.html` directly in your file explorer (`file:///path/index.html`), browsers will block local scripts for security reasons.

To run and preview the website properly, follow these simple steps:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or newer).

### 2. Install Dependencies
Open your terminal inside this project folder and run:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Terminal will output a local URL, usually:
👉 **`http://localhost:3000`** (or `http://localhost:5173`)

Open that link in your web browser to interact with the full high-jewelry showcase!

---

## 📦 Building for Production

To create a static production build:
```bash
npm run build
```
This generates an optimized, bundled `dist/` folder with all images and assets linked using relative paths.

You can preview the production build locally with:
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Select the **Static HTML** or **Vite** starter workflow to publish the `dist` folder automatically on every push.

---

## ✨ Features Included

- **Place Vendôme Editorial Showcase**: Dramatic lighting, haute joaillerie campaign visual presence.
- **Interactive High-Res Optical Loupe**: Move your cursor over any specimen to inspect cuts, prongs, and clarity at 3.5x magnification.
- **Live Bespoke Monogram & Engraving Tool**: Real-time laser engraving simulation on precious platinum band.
- **The 4Cs Interactive Gemological Guide**: Carat mass scaler, D-to-Fancy Color spectrum, Clarity inclusion locator, and Cut fire analysis.
- **Private Dossier & Salon Viewing Pass**: Curated wishlist with ring size selection, generating printable VIP appointment passes for Paris, London, New York, or 4K Digital Haute Salon.
- **Acoustic Crystalline Ambience**: Subtle harmonic chime powered by the Web Audio API.
