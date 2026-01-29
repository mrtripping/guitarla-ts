# GuitarLA 🎸

[![CI](https://github.com/mrtripping/guitarla-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/mrtripping/guitarla-ts/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2+-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2+-646CFF.svg)](https://vitejs.dev/)

A modern, type-safe e-commerce demonstration application built with React 19, TypeScript, and Vite. This project showcases a complete shopping cart system for a guitar store, featuring state management, local persistence, and responsive design.

## ✨ Features

- **🛒 Shopping Cart System** - Full CRUD operations with localStorage persistence
- **🎸 Product Catalog** - Responsive grid layout with detailed guitar information
- **⚛️ Modern React Architecture** - Component-based design with custom hooks
- **🔒 Type Safety** - Complete TypeScript implementation with strict typing
- **🚀 Performance Optimized** - Fast refresh, code splitting, and memoized calculations
- **📱 Responsive Design** - Mobile-first CSS with Bootstrap utilities
- **🔄 State Persistence** - Automatic cart data synchronization with localStorage

## 🏗️ Architecture

### Core Components
- **`App.tsx`** - Main application container with routing
- **`Header.tsx`** - Navigation with integrated cart display
- **`Guitar.tsx`** - Individual product card component
- **`GuitarList.tsx`** - Product grid container

### State Management
- **`useCart.ts`** - Custom hook managing cart operations and persistence
- **`constants.ts`** - Centralized configuration values
- **`types/index.ts`** - Shared TypeScript interfaces

### Data Layer
- **`db.ts`** - Static product catalog (12 guitar models)

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI framework |
| **TypeScript** | 5.9+ | Type safety |
| **Vite** | 7.2+ | Build tool & dev server |
| **React Router** | 7.13.0 | Client-side routing |
| **ESLint** | 9.39+ | Code linting |
| **Bootstrap CSS** | Utilities | Responsive styling |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mrtripping/guitarla-ts.git
cd guitarla-ts

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Building
npm run build        # Production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # ESLint analysis
```

## 📁 Project Structure

```
src/
├── components/          # React UI components
│   ├── Header.tsx      # Navigation with cart
│   ├── Guitar.tsx      # Product card
│   └── GuitarList.tsx  # Product grid
├── hooks/              # Custom React hooks
│   └── useCart.ts      # Cart state management
├── config/             # Configuration files
│   └── constants.ts    # App constants
├── data/               # Static data
│   └── db.ts           # Product catalog
├── types/              # TypeScript definitions
│   └── index.ts        # Shared interfaces
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🔧 Development

### Type Safety
The project uses strict TypeScript configuration with:
- Complete interface coverage for all data structures
- Generic typing for reusable components
- Type-safe event handlers and props

### Performance Optimizations
- `useMemo` for expensive calculations (cart totals)
- Component memoization patterns
- Optimistic UI updates
- Efficient state management patterns

### State Management Pattern
```typescript
// Custom hook encapsulating all cart logic
const { cart, addToCart, removeFromCart, /* ... */ } = useCart();

// Automatic localStorage persistence
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);
```

## 🧪 Testing Strategy

The project is structured to facilitate testing:
- Pure functions in custom hooks
- Isolated component logic
- Mockable data layer
- Type-safe interfaces

## 🚀 Deployment

### Production Build

```bash
npm run build
# Output: dist/ directory
```

### Deployment Options
- **Static hosting**: Vercel, Netlify, GitHub Pages
- **CDN**: AWS S3 + CloudFront
- **Docker**: Multi-stage builds available

### Environment Variables
```bash
# .env.example
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=GuitarLA
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Follow ESLint configuration
- Use TypeScript strict mode
- Write meaningful commit messages
- Maintain component naming conventions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Built with ❤️ using modern web technologies**