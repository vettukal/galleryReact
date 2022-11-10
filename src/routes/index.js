import React, { useEffect } from "react"
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "../pages/Public/Home"
import Login from "../pages/Public/Login"
import ImageUpload from "../pages/Private/ImageUpload"
import PublicMain from '../layouts/Main'
import GalleryFolder from "../pages/Private/GalleryFolder";
import GalleryDetails from "../pages/Private/GalleryDetails";
import Dashboard from "../pages/Private/Dashboard";

const titles = {
    '/': 'Home',
    '/login': 'Login',
    '/upload': 'Image upload',
    '/folder': 'Image Folder',
    '/gallery': 'Image Gallery',
};

const AllRoutes = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        document.title = titles[pathname] ?? 'Sorry';
    }, [pathname]);

    return (
        <Routes>
            <Route element={<PublicMain />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route element={<PublicMain />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PublicMain />}>
                <Route path="/upload" element={<ImageUpload />} />
            </Route>
            <Route element={<PublicMain />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<PublicMain />}>
                <Route path="/folder" element={<GalleryFolder />} />
            </Route>
            <Route element={<PublicMain />}>
                <Route path="/gallery" element={<GalleryDetails />} />
            </Route>
        </Routes>
    );
};


export default AllRoutes;
