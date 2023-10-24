# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

VVVI 

whenever we import react-router-dom we get Link and Navlink from it.
Link is used as a alternative to <a> tag as <a> refreshes the entire page while refreshing or reloading concept is not in react Hence Link is used as Link only manipulates the structure of th epage bt replace dom components from the dom tree.

We use Link as a tag by using " to="/" " attribute of Link tag in place of href