import React, { useEffect } from "react";
import { Route, Navigate, useLocation, Routes } from "react-router-dom";
import AboutView from "../views/About";
import ResumeView from "../views/Resume";
import { AnimatePresence } from "framer-motion";
import ProjectsView from "../views/Projects";

const AnimatedRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }, 100); // scroll on page load
    }, [location.pathname]);

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/about" element={<AboutView />} />
                <Route path="/resume" element={<ResumeView />} />
                <Route path="/projects" element={<ProjectsView />} />
                <Route
                    path="*"
                    element={<Navigate to="/about" replace />}
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
