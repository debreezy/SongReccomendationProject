import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Heart, Sparkles, Zap, Users, X, Check, Play } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="SongSwipeLanding">
            <style>
                {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    .SongSwipeLanding * {
                        box-sizing: border-box;
                    }

                    body {
                        overflow-y: auto;
                    }

                    .SongSwipeLanding {
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        background: linear-gradient(180deg, #4a148c 0%, #7b2cbf 50%, #c77dff 100%);
                        color: white;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                        overflow-y: auto;
                    }

                    .nav {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 1.5rem 3rem;
                        flex-shrink: 0;
                        margin-bottom: 4rem;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                        overflow: visible;
                        width: 100%;
                        max-width: 100%;
                        position: relative;
                    }

                    .nav > * {
                        display: flex;
                        align-items: center;
                    }

                    .logo-icon {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        height: 100%;
                        overflow: visible;
                        flex-shrink: 0;
                        min-width: auto;
                        padding: 0.25rem 0;
                    }

                    .logo-icon svg {
                        flex-shrink: 0;
                    }

                    .logo-icon h1 {
                        margin: 0;
                        padding: 0.25rem 0.5rem;
                        font-size: 1.5rem;
                        font-weight: 600;
                        line-height: 1.2;
                        background: linear-gradient(135deg, #e91e63 0%, #9c27b0 50%, #64b5f6 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        white-space: nowrap;
                        overflow: visible;
                        text-overflow: clip;
                        flex-shrink: 0;
                        display: inline-block;
                        position: relative;
                    }

                    .nav-buttons {
                        display: flex;
                        flex-direction: row;
                        gap: 1rem;
                        align-items: center;
                        height: 100%;
                        flex-shrink: 0;
                    }

                    .nav-buttons .btn-login,
                    .nav-buttons .btn-signup {
                        height: 2.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }

                    .btn-login {
                        background: rgba(74, 20, 140, 0.5);
                        border: none;
                        color: white;
                        font-size: 1rem;
                        font-weight: 600;
                        cursor: pointer;
                        padding: 0.5rem 1rem;
                        border-radius: 9999px;
                        transition: background 0.3s ease, box-shadow 0.3s ease;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        line-height: 1;
                        text-align: center;
                        text-decoration: none;
                        height: 2.5rem;
                        white-space: nowrap;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                        box-sizing: border-box;
                        margin: 0;
                        position: relative;
                    }

                    .btn-login:hover {
                        background: rgba(74, 20, 140, 0.7);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
                    }

                    .btn-signup {
                        background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
                        border: none;
                        color: white;
                        font-size: 1rem;
                        font-weight: 600;
                        cursor: pointer;
                        padding: 0.5rem 1.5rem;
                        border-radius: 9999px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                        transition: background 0.3s ease, box-shadow 0.3s ease;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        line-height: 1;
                        text-align: center;
                        height: 2.5rem;
                        white-space: nowrap;
                        box-sizing: border-box;
                        margin: 0;
                        position: relative;
                    }

                    .btn-signup:hover {
                        background: linear-gradient(135deg, #f06292 0%, #ba68c8 100%);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
                    }

                    .main-content {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 2rem 3rem;
                        gap: 2rem;
                    }

                    .hero-section {
                        text-align: center;
                        flex-shrink: 0;
                    }

                    .hero-headline {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        margin-bottom: 1rem;
                    }

                    .sparkle-icon {
                        color: #ffd700;
                        flex-shrink: 0;
                    }

                    .hero-section h1 {
                        font-size: 3rem;
                        font-weight: 700;
                        margin: 0;
                        line-height: 1.2;
                    }

                    .hero-headline .word-swipe {
                        color: #e91e63;
                    }

                    .hero-headline .word-middle {
                        color: #ba68c8;
                    }

                    .hero-headline .word-music {
                        color: #64b5f6;
                    }

                    .hero-section p {
                        font-size: 1.125rem;
                        color: white;
                        margin: 1.5rem 0 2rem;
                        max-width: 600px;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .hero-buttons {
                        display: flex;
                        flex-direction: row;
                        gap: 1rem;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                    }

                    .btn-primary {
                        background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
                        border: none;
                        color: white;
                        font-size: 1rem;
                        font-weight: 600;
                        cursor: pointer;
                        padding: 0.875rem 2rem;
                        border-radius: 9999px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                        flex: 1;
                        transition: background 0.3s ease, box-shadow 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        height: 3rem;
                        white-space: nowrap;
                        box-sizing: border-box;
                    }

                    .btn-primary:hover {
                        background: linear-gradient(135deg, #f06292 0%, #ba68c8 100%);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
                    }

                    .btn-spotify {
                        background: #1db954;
                        border: none;
                        color: white;
                        font-size: 1rem;
                        font-weight: 600;
                        cursor: pointer;
                        padding: 0.875rem 2rem;
                        border-radius: 9999px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                        flex: 1;
                        transition: background 0.3s ease, box-shadow 0.3s ease;
                        text-align: center;
                        height: 3rem;
                        white-space: nowrap;
                        box-sizing: border-box;
                    }

                    .btn-spotify:hover {
                        background: #1ed760;
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
                    }

                    .SongCard {
                        background: linear-gradient(135deg, #7b2cbf 0%, #c77dff 100%);
                        border-radius: 1.5rem;
                        padding: 2rem;
                        width: 100%;
                        max-width: 400px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 1.5rem;
                        flex-shrink: 0;
                        position: relative;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                    }

                    .song-icon-circle {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        background: rgba(186, 104, 200, 0.3);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }

                    .song-icon-circle svg {
                        color: white;
                    }

                    .song-image-placeholder {
                        width: 100%;
                        aspect-ratio: 1;
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 0.75rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        overflow: hidden;
                    }

                    .song-image-placeholder img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .preview-button {
                        position: absolute;
                        bottom: 1rem;
                        right: 1rem;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background: rgba(0, 0, 0, 0.5);
                        border: none;
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        backdrop-filter: blur(10px);
                        transition: all 0.3s ease;
                    }

                    .preview-button:hover {
                        background: rgba(0, 0, 0, 0.8);
                    }

                    .song-info {
                        width: 100%;
                        text-align: center;
                    }

                    .song-info h3 {
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: white;
                        margin: 0 0 0.5rem;
                    }

                    .song-info p {
                        font-size: 1rem;
                        color: rgba(255, 255, 255, 0.9);
                        margin: 0;
                    }

                    .song-actions {
                        display: flex;
                        gap: 1rem;
                        justify-content: center;
                        width: 100%;
                    }

                    .btn-like, .btn-dislike {
                        width: 55px;
                        height: 55px;
                        border-radius: 50%;
                        border: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .btn-like {
                        background: #1ed760;
                        color: white;
                    }

                    .btn-like:hover {
                        background: #a5d6a7;
                        box-shadow: 0 4px 8px rgba(129, 199, 132, 0.4);
                    }

                    .btn-dislike {
                        background:rgb(220, 54, 54);
                        color: white;
                    }

                    .btn-dislike:hover {
                        background: #ef9a9a;
                        box-shadow: 0 4px 8px rgba(229, 115, 115, 0.4);
                    }

                    .features-section {
                        width: 100%;
                        max-width: 800px;
                        text-align: center;
                        margin-top: 2rem;
                        padding: 2rem 0;
                    }

                    .features-section h2 {
                        font-size: 2rem;
                        font-weight: 700;
                        margin-bottom: 2rem;
                        color: white;
                    }

                    .features-section .gradient-text {
                        background: linear-gradient(135deg, #e91e63 0%, #9c27b0 50%, #64b5f6 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }

                    .feature-cards {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 2rem;
                        margin-top: 2rem;
                    }

                    .feature-card1, .feature-card2 {
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        border-radius: 1rem;
                        padding: 2rem;
                        text-align: center;
                    }

                    .feature-card1 svg, .feature-card2 svg {
                        color: white;
                        margin-bottom: 1rem;
                    }

                    .feature-card1 h3, .feature-card2 h4 {
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: white;
                        margin: 0 0 0.5rem;
                    }

                    .feature-card1 p, .feature-card2 p {
                        font-size: 1rem;
                        color: rgba(255, 255, 255, 0.9);
                        margin: 0;
                    }

                    @media (max-width: 768px) {
                        .nav {
                            padding: 1rem 1.5rem;
                        }

                        .main-content {
                            padding: 1rem 1.5rem;
                            gap: 1.5rem;
                        }

                        .hero-section h1 {
                            font-size: 2rem;
                        }

                        .hero-headline {
                            flex-wrap: wrap;
                        }

                        .hero-buttons {
                            flex-direction: column;
                            width: 100%;
                            max-width: 100%;
                        }

                        .btn-primary,
                        .btn-spotify {
                            width: 100%;
                            flex: none;
                        }

                        .SongCard {
                            max-width: 300px;
                        }
                    }
                `}
            </style>
            <nav className="nav">
                <div className="logo-icon">
                    <Music size={24} />
                    <h1>SongSwipe</h1> 
                </div>
                <div className='nav-buttons'>
                    <Link to="/login" className='btn-login'>Log In</Link>
                    <button className='btn-signup'>Sign Up</button>
        </div>
        </nav>
        <main className="main-content">
            <div className="hero-section">
                    <div className="hero-headline">
                        <Sparkles size={32} className="sparkle-icon" />
                        <h1>
                            <span className="word-swipe">Swipe</span>{' '}
                            <span className="word-middle">Your Way to</span>{' '}
                            <span className="word-music">Better Music</span>
                        </h1>
                    </div>
                    <p>Discover your next favorite song with AI-powered recommendations. Swipe right to like, left to pass. It's that simple.</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Get Started Free</button>
                        <button className="btn-spotify">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                            Continue with Spotify
                        </button>
                    </div>
                </div>
                <div className="SongCard">
                    <div className="song-image-placeholder">
                        <img src="https://via.placeholder.com/300" alt="Song cover" />
                        <button className="preview-button" title="Preview song">
                            <Play size={20} fill="white" />
                        </button>
                    </div>
                    <div className="song-info">
                        <h3>Let It Happen</h3>
                        <p>Tame Impala</p>
                    </div>
                    <div className="song-actions">
                        <button className="btn-dislike" disabled>
                            <X size={24} />
                        </button>
                        <button className="btn-like" disabled>
                            <Heart size={24} />
                        </button>
                    </div>
            </div>
                <div className="features-section">
                    <h2>Why You'll Love <span className="gradient-text">SongSwipe</span></h2>
                    <div className="feature-cards">
                <div className="feature-card1">
                            <Music size={40} />
                    <h3>Discover New Music</h3>
                    <p>Find songs that match your taste</p>
                </div>
                <div className="feature-card2">
                            <Users size={40} />
                    <h4>Spotify Integration</h4>
                    <p>Connect your Spotify account to get personalized recommendations based on your listening history</p>
                        </div>
                </div>
            </div>
        </main>
        </div>
    )

}

export default LandingPage;
