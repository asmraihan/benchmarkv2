import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacebookChat from "../components/FacebookChat";
// import { useAuth } from "../providers/AuthProvider";

const MainLayout = () => {

    return (
        <div className="bg-gradient-to-br from-amber-50 to-lime-50">
            <Navbar />
            <div >
                <main className="">
                    <Outlet />
                </main>
            </div>
            <Footer />
            <FacebookChat />
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default MainLayout;
