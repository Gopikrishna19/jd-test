## Steps

1. Clone/download the repository
2. Install dependencies

## Validations

1. Identify issues in the React Component using the following steps
2. Make `npm run dev` pass
   1. Make the `/specificity` page work correctly
3. Make `npm run verify` pass
4. Identify the accessibility problem in `/` page.

## Extra Credits

1. Build a responsive nav component that has the following features and put it in `__components__/Nav.tsx`:
    - Hint: Use `useState` and `useEffect` hooks with a listener to `window.matchMedia` or
            use a CSS-in-JS solution like `styled-components` and `@media` queries.
    - Should show the full menu in larger screens
    - Should show ☰ in mobile screens when clicked should show the full menu
    - Should link to the following routes:
        - `/`
        - `/specificity`
        - `/typescript`
2. Make `npm run test` pass
