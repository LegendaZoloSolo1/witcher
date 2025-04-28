import { useState } from 'react'
import './GameSection.css'

const GameSection = () => {
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const handlePlatformSelect = (platform) => {
        setSelectedPlatform(platform);
    };

    return (
        <div className="game-section">
            <div className="game-left">
                <img
                    src="/public/orrig.webp"
                    alt="Game Hero"
                    className="hero-image"
                />

                <img
                    src="/public/tw3.png"
                    alt="Legenda"
                    className="legend-image"
                />
            </div>



    <div className="game-right">
        <div className="platform-selector">
            <h2 className="platform-title">Выберите Платформу</h2>

            <div className="platforms-grid">
                <button
                    className={`platform-button ${selectedPlatform === 'pc' ? 'selected' : ''}`}
                    onClick={() => handlePlatformSelect('pc')}
                >
                            <span className="platform-name pc">PC</span>
                        </button>

                        <button
                            className={`platform-button ${selectedPlatform === 'xbox' ? 'selected' : ''}`}
                            onClick={() => handlePlatformSelect('xbox')}
                        >
                            <span className="platform-name xbox">XBOX</span>
                        </button>

                        <button
                            className={`platform-button ${selectedPlatform === 'playstation' ? 'selected' : ''}`}
                            onClick={() => handlePlatformSelect('playstation')}
                        >
                            <span className="platform-name playstation">PlayStation</span>
                        </button>

                        <button
                            className={`platform-button ${selectedPlatform === 'switch' ? 'selected' : ''}`}
                            onClick={() => handlePlatformSelect('switch')}
                        >
                            <span className="platform-name switch">Switch</span>
                        </button>
                    </div>

                    <div className="free-update-banner">
                        <div className="update-text">
                            <span className="update-title">БЕСПЛАТНОЕ ОБНОВЛЕНИЕ</span>
                            <span className="update-subtitle">ДЛЯ НОВОГО ПОКОЛЕНИЯ</span>
                        </div>
                    </div>

                    <button className="details-button">
                        <span className="eye-icon"></span>
                        УЗНАТЬ, ЧТО ВНУТРИ
                    </button>

                    <a href="#" className="official-site-button">
                        ОТКРЫТЬ ОФИЦИАЛЬНЫЙ САЙТ
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GameSection