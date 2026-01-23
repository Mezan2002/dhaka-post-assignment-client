# Downtown Post - Modern News & Magazine Application

A high-performance, fully responsive news application built with **Next.js 16** and **Tailwind CSS**. This project is a specialized job task submission, inspired by the premium aesthetics and functionality of the [JNews CityNews](https://jnews.io/citynews/) template.

## 🌟 Inspiration & Goal

The primary goal of this project was to replicate a high-end magazine layout while ensuring exceptional responsive behavior across all device types. Taking reference from JNews CityNews, I focused on clean typography, structured layouts, and fluid transitions.

---

## 🚀 Key Features

### 1. Intelligent Responsive Navbar

- **Mobile First**: A sleek mobile navbar with a centered logo using `logo_mobile.png`.
- **Slide-out Sidebar**: An interactive mobile menu that slides in from the left, featuring a built-in search bar and quick navigation links.
- **Desktop Optimization**: Reverts to a spacious horizontal layout with dropdown menus and a full-sized logo (`logo.png`) for screens above 1024px.

### 2. Dynamic Home Layout

Implemented a sophisticated grid system that reorders content based on the viewport:

- **Mobile View**: Prioritizes the **Center Content** (Top Blog Slider) at the very top, followed by **The Latest** and **Opinion** sections.
- **Tablet (md) View**: Balances the screen by showing **Center** and **Right Side** content side-by-side, with the **Left Side** moving to a full-width section at the bottom.
- **Desktop (lg) View**: Restores the classic three-column layout: **Left** -> **Center** -> **Right**.

### 3. Viewport-Aware Blog Slider

The `TopBlogSlider` dynamically calculates the number of visible cards:

- **Mobile**: 1 card per slide for maximum focus.
- **Tablet**: 2 cards per slide.
- **Desktop**: 3 cards per slide for a rich information density.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`)
- **Fonts**: Roboto & Roboto Condensed (Google Fonts via Next/Font)

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Layouts & Pages)
├── components/           # UI Components
│   ├── home/             # Homepage specific sections
│   │   ├── CenterContent/# Slider, News Cards, Grids
│   │   ├── LeftSideContent/# Latest News, Opinions
│   │   └── RightSideContent/# Mini Blog Cards
│   └── shared/           # Navbar, Sidebar, Footer, Helpers
├── public/               # Static assets (Images, Logos)
└── tailwind.config.js    # Custom Design System (Colors, Fonts)
```

---

## 🔧 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mezan2002/dhaka-post-assignment-client.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dhaka-post-assignment-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📝 Performance & SEO

- **Semantic HTML**: Used appropriate tags (`<nav>`, `<main>`, `<aside>`, `<footer>`) for better accessibility and SEO.
- **Optimized Images**: Utilized `next/image` for automatic lazy loading and format optimization.
- **Clean Code**: Followed component-driven development for maintainability and scalability.

---

**Developed with ❤️ as a Professional Job Task.**
