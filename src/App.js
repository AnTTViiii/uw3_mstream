import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import AppRoot from "./components/AppRoot";
import Home from "./pages/Home";
import Library from "./pages/Library";
import NewReleases from "./pages/NewReleases";
import AllArtists from './pages/AllArtists';
import Account from './pages/Account';
import Album from "./pages/Album";
import Song from './pages/Song';
import Artist from './pages/Artist';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppRoot />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "library",
          element: <Library />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "newreleases",
          element: <NewReleases />,
        },
        {
          path: "artists",
          element: <AllArtists />,
        },
        // {
        //   path: "recently",
        //   element: <Recently />,
        // },
        {
          path: "album/*",
          element: <Album />,
        },
        {
          path: "artist/*",
          element: <Artist />,
        },
        {
          path: "song/*",
          element: <Song />,
        },
        {
          path: "user",
          element: <Account />,
        },
        // {
        //   path: ":name/songs",
        //   element: <ArtistSongs />,
        // },
        // {
        //   path: ":name/albums",
        //   element: <ArtistAlbums />,
        // },
        // {
        //   path: "charts",
        //   element: <Chart />,
        // }
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
