import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "../Pages/Home";
import GameSection from "../components/GameSection/GameSection"; // <== добавляем импорт

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/game' element={<GameSection />} />
        </Routes>
    );
}

export default AppRoutes;
