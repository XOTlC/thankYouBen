import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import views from "./views";

const router = createBrowserRouter([{
    id: "app",
    children: [
        { path: "*", element: <Navigate to="/" /> },
        { path: "/", element: <views.Home /> }
    ]
}]);

export default function App() {
    return <RouterProvider router={router} />;
}