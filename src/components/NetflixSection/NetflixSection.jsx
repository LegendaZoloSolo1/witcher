import React, { useState } from 'react';
import './NetflixSection.css';

const NetflixSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const slides = [
        {
            main: "public/firstNetflix.jpg",
            side: "public/secondNetflix.jpg"
        },
        {
            main: "public/secondNetflix.jpg",
            side: "public/firstNetflix.jpg"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length); // Циклический переход вперед
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Циклический переход назад
    };

    const openFullscreen = (imageSrc) => {
        setFullscreenImage(imageSrc);
        document.body.style.overflow = 'hidden'; // Отключение прокрутки страницы
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
        document.body.style.overflow = 'auto'; // Восстановление прокрутки
    };

    return (
        <>
            <section id="netflixSection" className="netflix-section">
                <div className="netflix-container">
                    <div className="netflix-content">
                        <div className="collaboration-header">

                            <div className="netflix-logo-container">
                                <img
                                    src="../../../public/cdprojectXnetflix.svg"
                                    alt="CD Projekt Red × Netflix"
                                    className="collab-logo"
                                />
                            </div>

                            <h2>WITCHER REALMS COLLIDE</h2>

                            <p>
                                Behold the conjunction of two witcher worlds! In The Witcher 3: Wild Hunt next-gen
                                update, discover brand new content inspired by Netflix's The Witcher series,
                                including two beautifully decorated armor sets for Geralt, and more!
                            </p>

                        </div>

                        <div className="screenshot-gallery">

                            <div
                                className="screenshot-main"
                                onClick={() => openFullscreen(slides[currentSlide].main)}
                            >
                                <img
                                    src={slides[currentSlide].main}
                                    alt="Geralt in Netflix Armor"
                                    className="main-screenshot"
                                />
                                <span className="captured-on">CAPTURED ON PC</span>
                                <div className="next-gen-badge">
                                    FREE NEXT-GEN<br/>UPDATE
                                </div>
                                <div className="fullscreen-hint">
                                    <span>Открыть во весь экран</span>
                                </div>
                            </div>


                            <div
                                className="screenshot-side"
                                onClick={() => openFullscreen(slides[currentSlide].side)}
                            >
                                <img
                                    src={slides[currentSlide].side}
                                    alt="Geralt Side View"
                                    className="side-screenshot"
                                />
                                <span className="captured-on">CAPTURED ON PC</span>
                                <div className="fullscreen-hint">
                                    <span>Открыть во весь экран</span>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-nav">
                            <button className="nav-arrow prev" onClick={prevSlide}>
                                <span>←</span>
                            </button>
                            <button className="nav-arrow next" onClick={nextSlide}>
                                <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {fullscreenImage && (
                <div className="fullscreen-viewer" onClick={closeFullscreen}>
                    <button className="close-fullscreen" onClick={closeFullscreen}>×</button>
                    <img src={fullscreenImage} alt="Fullscreen view"/>
                </div>
            )}
        </>
    );
};

export default NetflixSection;
