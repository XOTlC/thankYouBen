import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import views from "./views";

import Background from "@components/Background";
import Header from "@components/Header";

const router = createBrowserRouter([{
    id: "app",
    element: <Header />,
    children: [
        { path: "*", element: <Navigate to="/" /> },
        { path: "/", element: <views.Home /> }
    ]
}]);

export default function App() {
    return (
        <>
            <Background />

            <RouterProvider router={router} />
        </>
    );
}