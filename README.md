# 📚 BookFinder

An intelligent book recommendation finder based on user preferences. Simply add the characteristics you're looking for in a book and the system will find the best recommendations for you!

---

## 🎯 What is it?

**BookFinder** is a web application that allows users to discover new books in an intelligent and personalized way. Instead of searching by title or author, you describe the type of book you're looking for - genre, theme, tone, characteristics - and the application returns tailored recommendations.

### How it works:
1. The user enters desired tags/characteristics (e.g., "science fiction", "adventure", "happy ending")
2. The system processes these preferences
3. Returns a curated list of book recommendations

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Library for building the user interface
- **TypeScript 5.2** - Type safety and better development experience
- **Vite 7.3** - Fast and modern build tool
- **Material-UI (MUI) 7.3** - Professional UI components
- **Emotion** - CSS-in-JS for styling (integrated with MUI)
- **Axios 1.13** - HTTP client for API requests
- **React Icons 5.5** - Vector icons for the interface

### Development
- **ESLint** - Code linting and quality
- **Node.js** - JavaScript runtime

---

## 📋 Project Structure

```
bookFinder-front/
├── src/
│   ├── components/
│   │   ├── bookCard/          # Book card component
│   │   └── tagInput/          # Tag input component
│   ├── pages/
│   │   └── home/              # Home page
│   ├── services/
│   │   ├── axios/             # HTTP client configuration
│   │   │   └── interceptors/   # Request/response interceptors
│   │   └── books/             # Book search service
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Entry point
│   └── theme.ts               # Theme configuration (MUI)
├── public/                    # Static files
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repository>
cd bookFinder-front

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
# Create the optimized production version
npm run build

# Preview the build locally
npm run preview
```

### Lint

```bash
# Check code quality
npm lint
```

---

## 🎨 Main Components

### TagInput
Reusable component for tag input that allows users to add desired book characteristics.

### BookCard
Displays book recommendations in a visual and attractive way, showing relevant information about each book.

### Home
Main page that orchestrates the interaction between components and API communication.

---

## 🔌 API Integration

The application communicates with a backend through:

- **Endpoint**: `POST /recommend`
- **Payload**: Array of tags/characteristics
- **Response**: List of recommended books

The API URL configuration is done through environment variables (`VITE_API_URL`).

### Interceptors
- **ErrorInterceptor**: Handles request errors
- **ResponseInterceptor**: Processes API responses

---

## 📦 Main Dependencies

| Dependency | Version | Description |
|---|---|---|
| React | ^18.2.0 | UI Library |
| TypeScript | ^5.2.2 | Static typing |
| Vite | ^7.3.1 | Build tool |
| Material-UI | ^7.3.7 | UI Components |
| Axios | ^1.13.4 | HTTP Client |
| React Icons | ^5.5.0 | Vector icons |

---

## 🌍 Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=
```

---

## 📝 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm lint` | Check code quality |

---

## 📄 License

This project is licensed under the MIT License.

---

**Ready to find your next favorite book?** 📖✨