import React from 'react';
import { Music, Heart, Sparkles, Zap, Users, X } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="SongSwipeLanding">
            <style>
                
            </style>
            <nav className="nav">
                <div className="logo-icon">
                    
                </div>
                <div className='nav-buttons'>
                    <button className='btn-login'>Login</button>
                    <button className='btn-signup'>Sign Up</button>
                </div>
            </nav>
            <main className="main-content">
                <div className="hero-section">
                    <h1>Discover Your Next Favorite Song</h1>
                    <p>Swipe through songs to find your next favorite song</p>
                    <button className="btn-primary">Get Started</button>
                </div>
                <div className="features-section">
                    <h2> Why You'll Love SongSwipe</h2>
                    <div className="feature-card1">
                        <Music />
                        <h3>Discover New Music</h3>
                        <p>Find songs that match your taste</p>
                    </div>
                    <div className="feature-card2">
                        <Users />
                        <h4>Spotify Integration</h4>
                        <p>Connect your Spotify account to get personalized recommendations based on your listening history</p>
                    </div>
                </div>
            </main>
        </div>
    )

}
