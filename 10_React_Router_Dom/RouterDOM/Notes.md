# React Router Dom

- Normally, in a website, when a user clicks on different links, the url of the website changes.
- For example: If a user clicks on About then the url becomes `www.random-website.com/about`.
- Since, react creates a SPAs, the user dont see the links change in the url, which might look suspicious.
- So, to match the standard Internet protocols, we add artificial link changes.
- To a user, it will look like the link is changing, but in reality, the page doesnt change, just components are injected or removed.
- To achieve this, we creates routes in React using React-Router-DOM

### Installation

To get routes in react, we install the package:

- `npm i react-router-dom`

### Setup of Project

Usually, we want a website where we have:

- Header : navbar- Home, About, Github, login etc.
- Body : The part which is dynamically rendered.
- Footer : Follow us, resources , contact, legal etc.

In our website, the header and footer will be present on all the simulated pages, while the body is changed.

- For example, user clicks on About:
  - About is highlighted, but the components remains there.
  - The body displays the About section (So components are injected and removed)
  - Footer components remains present.

### Step1: Project Structure

To tell react that we want to make header and footer to be present at all times, and only body changes on click, we have to use the `outlet` functionality.

- `import { Outlet } from "react-router-dom";`
- This `outlet` is a keyword and cant be changed.

We create a Layout component which holds the structure of our website.

```jsx
import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header /> // remains present at all times
      <Outlet /> // Changes content to simulate the changing of url
      <Footer /> // remains present at all times
    </>
  );
}
```

### Step 2: Create Router

In `main.jsx`, we create a router:

- first, `import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";`

- we create a Router:
  ```jsx
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>,
    ),
  );
  ```
- path: url path
- element: the component to mount
  - So we inside `Layout`, we have `Header`, `Outlet` and `Footer`.
  - Header and Footer stays the same and Outlet changes with the change in the url.
  - Think of Layout as a frame - Header and Footer are always there. When you visit a route like `/about`, Outlet gets replaced with the About component. So the structure becomes `Header, About, Footer`.
- we used nested routes here, so on, `"/"`, the `<Layout/>` component is mounted.
- Then inside layout, on `" "`, we mount the `<Home/>` component.
- On `"/about"`, we unmount the previous component and mount `<About/>` component
- On `"/contact"`, we unmount the previous component and mount `<Contact/>` component

### Step 3: Render Router instead of App.jsx

- Instead of rendering app, we render the router, using `RouteProvider`
  ```jsx
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />,
  );
  ```

### Step 4: Connecting the routes with the links

- Now, our router works if we type `website.com/about` in address bar, but we want to create a scenario where the user clicks on a Link and then the url changes to `website.com/about`
  - For example a Navbar with buttons like Home, Contact, About.
- So to do this, we create `Links` or `NavLinks` in our desired component. In our case: `Header`
- **Very Important**: we dont use `<a>` tag in react, this tag reloads the wholde DOM. So we use Link or NavLink instead.
- In our case to create a Navbar, we use Navlink
  - Because, Navlink gives us additional features like `isActive`
  - isActive is a parameter in the callback, which tells us which link is currently active, so we can apply some `css` to buttons for better visual clarity.
- So, our Header Component is like this:

  ```jsx
  import { NavLink } from "react-router-dom";
  export default function Header() {
    return (
      <>
        <ul className="flex bg-blue-900 p-2 gap-4 rounded-md cursor-pointer">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-yellow-300 text-black p-2" : "bg-blue-900"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-yellow-300 text-black p-2" : "bg-blue-900"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "bg-yellow-300 text-black p-2" : "bg-blue-900"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
  ```
