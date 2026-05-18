# The Unsaid Page

> *A quiet place for loud minds.*

A minimalist literary magazine and reading platform built for poems, short stories, and reflections. The Unsaid Page is designed with a warm, editorial aesthetic — cream parchment tones, serif typography, and clean prose-first layouts — to give written words the dignified space they deserve.

---

## ✨ Features

- **📖 Poems** — Browse and read a curated collection of poetry, displayed in a centered, italicized reader view that preserves the original line breaks and stanza structure.
- **📝 Short Stories & Reflections** — A scrollable list of prose pieces with genre tags and estimated reading times, rendered in a classic book-style reader with paragraph indentation.
- **🏠 Home Page** — Features an editor's pick story and a featured poem side by side, giving readers an immediate taste of the collection.
- **✉️ Submit Your Work** — A clean submission form where writers can send in poems, stories, or reflections using a pen name or real name.
- **🗺️ Client-Side Routing** — Full SPA navigation with active-link highlighting via React Router, so every page transition feels fluid and instant.
- **📱 Responsive Design** — Featured sections stack gracefully on mobile screens.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 7](https://vitejs.dev/) |
| Routing | [React Router DOM v7](https://reactrouter.com/) |
| Package Manager | [Bun](https://bun.sh/) |
| Styling | Vanilla CSS with CSS Custom Properties |
| Typography | Playfair Display (serif) · Lato (sans-serif) via Google Fonts |
| Icons | [Lucide React](https://lucide.dev/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Forms | [React Hook Form](https://react-hook-form.com/) |
| Markdown | [React Markdown](https://github.com/remarkjs/react-markdown) |

---

## 📁 Project Structure

```
The unsaid page/
├── The Unsaid Page/              # Original static HTML prototype
│   ├── index.html
│   ├── poems.html
│   ├── stories.html
│   ├── submit.html
│   ├── read.html
│   ├── style.css
│   └── the-unsaid-page-react/   # (legacy copy)
│
└── the-unsaid-page-react/        # ✅ Active React application
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx        # Site title + navigation bar
    │   │   ├── Footer.jsx        # Site footer
    │   │   └── Layout.jsx        # Shared page wrapper
    │   ├── pages/
    │   │   ├── Home.jsx          # Landing page with featured picks
    │   │   ├── Poems.jsx         # Poem card grid
    │   │   ├── ReadPoem.jsx      # Individual poem reader
    │   │   ├── Stories.jsx       # Story list with metadata
    │   │   ├── ReadStory.jsx     # Individual story reader
    │   │   └── Submit.jsx        # Submission form
    │   ├── data.js               # Static content (poems & stories)
    │   ├── App.jsx               # Route definitions
    │   ├── main.jsx              # React entry point
    │   └── index.css             # Global styles & design tokens
    ├── package.json
    ├── vite.config.js
    └── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later) **or** [Bun](https://bun.sh/) (recommended)
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/KhushiBagga20/The-unsaid-page.git
cd The-unsaid-page/the-unsaid-page-react

# 2. Install dependencies (using Bun)
bun install

# — or using npm —
npm install
```

### Running Locally

```bash
# Start the development server (Bun)
bun run dev

# — or using npm —
npm run dev
```

The app will be available at **http://localhost:5173** by default.

### Building for Production

```bash
bun run build
# or
npm run build
```

The optimised output will be placed in the `dist/` folder.

---

## 🎨 Design System

The Unsaid Page uses a warm, editorial palette inspired by old literary journals and printed books.

| Token | Value | Purpose |
|---|---|---|
| `--bg-color` | `#EAE1C9` | Parchment/cream page background |
| `--paper-color` | `#FFFFFF` | Cards and reader backgrounds |
| `--text-color` | `#3B3836` | Deep brown — primary body text |
| `--accent-color` | `#6C8899` | Muted blue — links, labels, icons |
| `--border-color` | `#E6E2D8` | Subtle dividers and card borders |
| `--font-serif` | Playfair Display | Headings and body prose |
| `--font-sans` | Lato | Navigation, labels, metadata |

---

## 🗺️ Page Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Landing page with editor's pick and featured poem |
| `/poems` | `Poems` | Grid of all poem cards |
| `/poems/:id` | `ReadPoem` | Full poem reader (e.g. `/poems/morning-fog`) |
| `/stories` | `Stories` | List of all stories with author and reading time |
| `/stories/:id` | `ReadStory` | Full story reader (e.g. `/stories/dust-window`) |
| `/submit` | `Submit` | Submission form for new work |

---

## 📚 Content

All content is currently stored statically in `src/data.js`. The collection includes:

**Poems**
- *Morning Fog* — A meditation on stillness and undecided days.
- *The Quiet Kind* — On the difference between loud love and quiet love.
- *Ink Stains* — A reflection on words written and washed away.

**Stories & Reflections**
- *The Dust on the Window Sill* — A short reflection on time and the things we leave behind.
- *Gardening in Winter* — On the act of tending to the earth as an act of faith.
- *The Midnight Train to Nowhere* — A late-night fictional encounter on a train running the wrong route.

---

## 🤝 Contributing

The submission form (`/submit`) is intended to be wired up to a backend service or a form handler (e.g. Formspree, Netlify Forms) to receive real community contributions. If you would like to add your own piece to the collection, open an issue or pull request.

---

## 📄 License

This project is open source. Feel free to fork it and build your own literary corner of the internet.

---

*"Have something unsaid? Share it here."*
