# GitHub Pages Deployment Plan - Minimal React Blog

## Current State Analysis
- ✅ GitHub Pages repository exists: `richard-chau.github.io`
- ✅ Git repository initialized
- ❌ No content or modern build setup
- ❌ Outdated Travis CI configuration (will be removed)

## Updated Plan: Simple React Blog with Minimal Testing

### Technology Stack
- **React** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for minimal styling
- **Vitest** for minimal testing
- **Direct deployment** to GitHub Pages
- **Markdown** for blog posts

### Features
1. **Minimal Design**: Clean, simple interface
2. **Blog Posts**: Add and display markdown posts
3. **Responsive**: Works on all devices
4. **Fast**: Optimized for performance
5. **Easy to Add Posts**: Simple markdown file addition
6. **Simple Deployment**: Just push to main branch
7. **Key Tests**: Essential functionality only

## Implementation Steps

### Step 1: Clean Up Old Files
```bash
cd richard-chau.github.io
rm .travis.yml travis.sh
```

### Step 2: Initialize React Project with Vite
```bash
npm create vite@latest . -- --template react-ts
npm install
```

### Step 3: Add Dependencies
```bash
npm install react-router-dom react-markdown gray-matter date-fns
npm install -D tailwindcss postcss autoprefixer vitest jsdom
```

### Step 4: Configure Minimal Testing
- Setup basic Vitest configuration
- Add test script to package.json

### Step 5: Configure for GitHub Pages
- Update `vite.config.ts` for base path
- Add `homepage` field to `package.json`
- Configure build output for GitHub Pages

### Step 6: Configure Tailwind CSS
- Initialize Tailwind configuration
- Set up PostCSS
- Create minimal design system

### Step 7: Create Blog Structure
- Homepage with post list
- Individual post pages
- Markdown post storage
- Post metadata handling

### Step 8: Add Key Tests
- Test markdown parsing utility
- Test main App component renders
- Test routing works

### Step 9: Add Sample Content
- Create sample blog posts
- Add about page
- Test functionality

### Step 10: Deploy
- Build the project: `npm run build`
- Push to main branch
- Enable GitHub Pages in repository settings

## File Structure
```
richard-chau.github.io/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── PostList.tsx
│   │   ├── Post.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── PostPage.tsx
│   │   └── About.tsx
│   ├── posts/
│   │   ├── hello-world.md
│   │   └── getting-started.md
│   ├── utils/
│   │   ├── markdown.ts
│   │   └── markdown.test.ts
│   ├── App.tsx
│   ├── App.test.tsx
│   └── main.tsx
├── public/
├── dist/ (built files)
├── package.json
├── vite.config.ts
├── vitest.config.ts
└── tailwind.config.js
```

## Minimal Testing Strategy
- **Markdown Utility**: Test markdown parsing works
- **App Component**: Test main app renders without crashing
- **Routing**: Test basic navigation works
- **No component-level tests**: Keep it simple

## Deployment Process (Simplified)
1. Run key tests: `npm test`
2. Build: `npm run build`
3. Push dist folder to main branch
4. Enable GitHub Pages in repository settings
5. Site available at https://richard-chau.github.io

## Adding New Posts
1. Create new `.md` file in `src/posts/`
2. Add frontmatter with title, date, description
3. Write content in markdown
4. Build and push to deploy

## Scripts in package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest"
  }
}
```

## Timeline Estimate:
- Cleanup old files: 5 minutes
- Setup and configuration: 20 minutes
- Blog structure and components: 45 minutes
- Minimal testing: 15 minutes
- Styling and design: 30 minutes
- Sample content: 30 minutes
- Testing and deployment: 15 minutes
- **Total: 2.5 hours**

## How to Run Tests

1. Open a terminal and navigate to the project directory:
   ```bash
   cd richard-chau.github.io
   ```
2. Run the tests using the following command:
   ```bash
   npm test
   ```
   This will run all minimal key tests (markdown utility and app render test).
3. If you want to run tests once and exit (CI mode):
   ```bash
   npm test -- --run
   ```
4. All tests should pass. If a test fails, check the error message for details.

## How to Test Deployment Locally

1. Build the project for production:
   ```bash
   npm run build
   ```
   This generates the static files in the `dist/` directory.

2. Preview the production build locally:
   ```bash
   npm run preview
   or npm run dev (for hot reload)
   ```
   This will start a local server (usually at http://localhost:4173 or 5173) that serves the built site exactly as it will appear when deployed.

3. Open your browser and visit the provided local URL (e.g., http://localhost:4173) to verify everything works as expected.


