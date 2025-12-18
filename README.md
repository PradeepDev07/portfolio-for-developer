# Modern Developer Portfolio

A high-performance, responsive developer portfolio built with React, Vite, and Tailwind CSS. This project features a modern "glassmorphism" design, interactive spotlight effects, and a seamless browsing experience.

## 🚀 Features

-   **Modern UI/UX**: Custom gradient cards with glassmorphism and mouse-following spotlight effects.
-   **Responsive Design**: Fully responsive layout that adapts to mobile, tablet, and desktop screens.
-   **Project Filtering**: Filter projects by category (Front-end, Back-end, Full-stack, AI).
-   **Detailed Project Views**: Dedicated pages for each project with deep linking.
-   **Interactive Skills Section**: Visual representation of technical skills with circular progress indicators.
-   **Smooth Animations**: Scroll animations and hover effects for an engaging user experience.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/) (v19)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 💻 Installation & Setup

Follow these steps to get the project running on your local machine.

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Steps

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Build for production**
    To create an optimized build for deployment:
    ```bash
    npm run build
    ```

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── common/      # Buttons, Cards
│   ├── hero/        # Hero section components
│   ├── layout/      # Navbar, Footer
│   ├── projects/    # Project grid and cards
│   └── skills/      # Skill visualization
├── data/            # Static data for projects and skills
├── pages/           # Route pages (Home, Projects, Contact)
└── styles/          # Global styles and animations
```

## 🎨 Customization

-   **Projects**: Edit `src/data/projects.js` to add or modify your projects.
-   **Skills**: Update `src/data/skills.js` to change your skills and proficiency levels.
-   **Theme**: Modify `src/index.css` and `src/styles/utilities.css` to adjust colors and fonts.


