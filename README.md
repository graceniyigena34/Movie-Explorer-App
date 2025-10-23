This is the link deployed : https://movie-explorer-app-git-main-niyigena-marie-graces-projects.vercel.app/




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Movie Explorer

A modern web app built with React and Tailwind CSS that allows users to discover, search, and explore movies effortlessly. It fetches data from the TVMaze API and displays trending, popular, and detailed movie information in an elegant, responsive UI.


## features

## MovieCard
Displays a single movie’s main details using a reusable React component.
Each card shows:

Movie poster

Title

Rating

Short summary

A ❤️ button to add/remove from favorites

This component receives movie data as props and dynamically renders it.

Searchbar

## Favorites

Allows users to save their favorite movies for later viewing.

Uses React hooks (useState and useEffect)

Favorites are stored in localStorage, so they remain even after refreshing the page

The Favorites.jsx page displays all saved movies using <MovieCard />

## MovieDetail

Displays complete information about a selected movie.
When a user clicks on a movie card, they are navigated to a details page (e.g., /movies/:id) using React Router.

Fetches detailed info from the API based on the movie’s ID

Shows:

Title, Poster,Rating,Genres,Summary,Schedule or runtime (if available)


## SearchBar 
A React component that lets users search for any movie by title.
It uses the TVMaze API to fetch search results in real time or on form submission.

Controlled input managed with React’s useState

When the user types and presses Enter or clicks “Search,” it triggers a fetch call:
