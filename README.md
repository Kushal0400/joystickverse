# 🎮 JoystickVerse

> A premium dark-themed gaming blog. Built with HTML, CSS & JS. Hosted on GitHub Pages.

## Live Site
`https://kushal0400.github.io/joystickverse/`

---

## ⚡ How to Deploy (Step-by-Step)

### Step 1 — Create GitHub Repo
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `joystickverse`
3. Set to **Public**
4. Do NOT add README (we already have one)
5. Click **Create repository**

### Step 2 — Upload Files
Upload this entire folder structure:
```
joystickverse/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

**Option A — Via GitHub Website (easiest)**
1. Open your new empty repo on GitHub
2. Click **"uploading an existing file"** link
3. Drag and drop the `index.html`, `css/` folder, `js/` folder
4. Commit message: `Initial commit — MVP v1`
5. Click **Commit changes**

**Option B — Via Git (recommended)**
```bash
cd joystickverse
git init
git add .
git commit -m "Initial commit — MVP v1"
git remote add origin https://github.com/Kushal0400/joystickverse.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings**
2. Click **Pages** in the left sidebar
3. Under **Source**, select: `Deploy from a branch`
4. Branch: `main`, Folder: `/ (root)`
5. Click **Save**
6. Wait ~2 minutes
7. Your site is live at: `https://kushal0400.github.io/joystickverse/`

---

## 📁 MVP Scope (v1)

- [x] Home page with hero section
- [x] 5 Action game articles
- [x] Dark purple/neon theme
- [x] Mobile responsive
- [x] Categories preview (Horror & Mythology locked)

## 🔜 Coming in v2

- [ ] Horror category (5 articles)
- [ ] Mythology category (5 articles)
- [ ] Individual article pages
- [ ] Real game images

---

## ⚠️ IMPORTANT

**After every session, run:**
```bash
git add . && git commit -m "update" && git push
```
Do NOT skip this. Always push before closing the laptop.
