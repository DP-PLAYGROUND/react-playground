import { lazy, Suspense } from "react";
import styles from "./App.module.scss";
import { NavLink, Route, Routes } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Home = lazy(() => import("./Home/Home"));
const Todos = lazy(() => import("./Todos/Todos"));
const Users = lazy(() => import("./Users/Users"));
const Drawing = lazy(() => import("./Drawing/Drawing"));
const UserForm = lazy(() => import("./UserForm/UserForm"));

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, m: 1 }}
              >
                Home
              </Typography>
            </NavLink>

            <NavLink
              to="/todos"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, m: 1 }}
              >
                Todos
              </Typography>
            </NavLink>

            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, m: 1 }}
              >
                Users
              </Typography>
            </NavLink>

            <NavLink
              to="/drawing"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, m: 1 }}
              >
                Drawing
              </Typography>
            </NavLink>

            <NavLink
              to="/user-form"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, m: 1 }}
              >
                User form
              </Typography>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>

      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="todos"
            element={
              <Suspense>
                <Todos />
              </Suspense>
            }
          />
          <Route
            path="users"
            element={
              <Suspense>
                <Users />
              </Suspense>
            }
          />
          <Route
            path="drawing"
            element={
              <Suspense>
                <Drawing />
              </Suspense>
            }
          />
          <Route
            path="user-form"
            element={
              <Suspense>
                <UserForm />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
