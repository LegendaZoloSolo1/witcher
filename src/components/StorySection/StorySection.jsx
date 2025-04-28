import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollDown from '../ScrollDown/ScrollDown.jsx';
import './StorySection.css';

const StorySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const [activeModalIndex, setActiveModalIndex] = useState(0);

    const storyCards = [
        {
            id: 'child-of-prophecy',
            title: 'Child Of Prophecy',
            image: '/story-child-1.jpg',
            description: 'As Geralt, embark on your most perilous and personal journey yet as you track down Ciri...',
            thumbnails: [
                '/story-child-1.jpg',
                '/child-of.jpg',
                '/ff3.jpg'
            ]
        },
        {
            id: 'romance',
            title: 'Romance',
            image: '/story-romance-1.jpg',
            description: 'Forge deep and meaningful relationships throughout your journey in the Northern Kingdoms...',
            thumbnails: [
                '/story-romance-1.jpg',
                '/roman.jpg',
                '/roomn.webp'
            ]
        },
        {
            id: 'plague-of-the-wild-hunt',
            title: 'Plague Of The Wild Hunt',
            image: '/huunt.png',
            description: 'Face the terrifying Wild Hunt – a spectral cavalry from another dimension...',
            thumbnails: [
                '/huunt.png',
                '/huun2.jpg',
                '/hunt.jpg'
            ]
        },
        {
            id: 'choice-and-consequence',
            title: 'Choice And Consequence',
            image: 'poosled.jpg',
            description: 'Every decision you make shapes the world around you...',
            thumbnails: [
                '/poosled.jpg',
                '/posled.jpg',
                '/vibor.jpg'
            ]
        }
    ];


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const openModal = (card, index) => {
        setActiveModal(card);
        setActiveModalIndex(index);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';

        // Reset after animation completes
        setTimeout(() => {
            setActiveModal(null);
            setActiveModalIndex(0);
        }, 300);
    };

    const handleThumbnailClick = (index) => {
        if (activeModal && activeModal.thumbnails && activeModal.thumbnails[index]) {
            setActiveModalIndex(index);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!modalOpen) return;

            switch (event.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowRight':
                    if (activeModal && activeModalIndex < activeModal.thumbnails.length - 1) {
                        setActiveModalIndex(prev => prev + 1);
                    }
                    break;
                case 'ArrowLeft':
                    if (activeModal && activeModalIndex > 0) {
                        setActiveModalIndex(prev => prev - 1);
                    }
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalOpen, activeModal, activeModalIndex]);

    return (
        <section ref={sectionRef} id="story" className="section-story">
            <div className="logo-space">
                <img
                    src="../../../public/tw3%20second.png"
                    alt="CD Projekt Red × Netflix"
                    className="collab-logo"
                />
            </div>
            <div className="story-container">
                <h2 className={`story-title ${isVisible ? 'fade-in' : ''}`}>STORY</h2>

                <p className={`story-description ${isVisible ? 'fade-in' : ''}`}>
                    In a war torn world, with the Wild Hunt on your back, you'll take on your most important contract –
                    to track down the child of prophecy, a
                    key and a weapon which can save or destroy all.
                </p>

                <div className={`story-cards-grid ${isVisible ? 'cards-appear' : ''}`}>
                    {storyCards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`story-card story-card-${index + 1}`}
                            onClick={() => openModal(card, 0)}
                        >
                            <div className="story-card-image">
                                <img src={card.image} alt={card.title}/>
                            </div>
                            <div className="story-card-title">
                                <h3>{card.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modalOpen && activeModal && (
                <div className="story-modal-overlay" onClick={closeModal}>
                    <div className="story-modal-content witcher-style-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>×</button>
                        <div className="modal-main-content">
                            <div className="modal-image-container">
                                <img
                                    src={activeModal.thumbnails ? activeModal.thumbnails[activeModalIndex] : activeModal.image}
                                    alt={activeModal.title}
                                    className="modal-main-image"
                                />

                                <div className="modal-text-overlay">
                                    <h3 className="modal-title">{activeModal.title}</h3>
                                    <p className="modal-description">{activeModal.description}</p>
                                </div>

                                <div className="modal-navigation">
                                    {activeModalIndex > 0 && (
                                        <button
                                            className="modal-nav-btn modal-prev"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveModalIndex(prev => prev - 1);
                                            }}
                                        >
                                            &#10094;
                                        </button>
                                    )}
                                    {activeModal.thumbnails && activeModalIndex < activeModal.thumbnails.length - 1 && (
                                        <button
                                            className="modal-nav-btn modal-next"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveModalIndex(prev => prev + 1);
                                            }}
                                        >
                                            &#10095;
                                        </button>
                                    )}
                                </div>
                            </div>

                            {activeModal.thumbnails && activeModal.thumbnails.length > 1 && (
                                <div className="modal-thumbnails">
                                    {activeModal.thumbnails.map((thumb, idx) => (
                                        <div
                                            key={idx}
                                            className={`modal-thumbnail ${idx === activeModalIndex ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleThumbnailClick(idx);
                                            }}
                                        >
                                            <img src={thumb} alt={`${activeModal.title} thumbnail ${idx + 1}`}/>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="scroll-indicator">
                <ScrollDown/>
            </div>
        </section>
    );
};

export default StorySection;