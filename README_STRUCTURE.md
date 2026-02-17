# Project Folder Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
│   ├── Button.tsx
│   ├── Layout.tsx
│   └── index.ts
├── constants/       # Application constants and configuration
│   └── index.ts
├── hooks/           # Custom React hooks
│   └── useSupabase.ts
├── pages/           # Page-level components
│   ├── Home.tsx
│   └── index.ts
├── services/        # API clients and external services
│   └── supabase.ts
├── types/           # TypeScript type definitions
│   └── index.ts
├── utils/           # Utility functions and helpers
│   └── index.ts
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Folder Descriptions

- **assets/**: Store images, fonts, and other static files
- **components/**: Reusable UI components that can be used across pages
- **constants/**: Application-wide constants and configuration values
- **hooks/**: Custom React hooks for shared logic
- **pages/**: Top-level page components for routing
- **services/**: API clients, Supabase client, and external service integrations
- **types/**: TypeScript interfaces and type definitions
- **utils/**: Helper functions and utilities
