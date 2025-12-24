import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const CHAR_LIMIT = {
        username: 255,
        password: 128,
    };
    const navigate = useNavigate()
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (error) setError('') // clear error if user starts typing again
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: form.username.trim(),
                    password: form.password,
                }),
            })

            const data = await response.json().catch(() => ({}))

            if(!response.ok){
                setError(
                    data?.errors?.unsername || data?.errors?.password || data?.error || 'Invalid username or password' 
                )
                setIsLoading(false)
                return
            }

            //success 

            setIsLoading(false)
            navigate('/home')
            setForm({ username: '', password: '' })
        } catch (error) {
            setError('An error occurred. Please try again.')
            setIsLoading(false)
        }
    }

    const handleSpotifyLogin = () => {
        // TODO: Implement Spotify OAuth login
        console.log('Spotify login clicked')
    }

    return (
        <>
            <style>
                {`
                    html, body {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        width: 100%;
                        overflow: hidden;
                    }
                    #root {
                        height: 100vh;
                        width: 100vw;
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
            <div className="Login">
                <div className="login-container">
                <header className="login-header">
                    <h1>Log in to <span className="login-gradient-text">SongSwipe</span></h1>
                    <button className="back-link" onClick={() => navigate(-1)}>Back</button>
                </header>
                <form className="login-form" onSubmit={onSubmit} noValidate>
                    <label>
                     <span>Username or email address</span>
                     <input 
                        type="text" 
                        name="username" 
                        value={form.username} 
                        onChange={onChange} 
                        autoComplete="username"
                        maxLength={CHAR_LIMIT.username + 1}
                        required
                        aria-invalid={!!error}
                     />
                     {form.username.length > CHAR_LIMIT.username && (
                     <p className="hint error">Username must be less than {CHAR_LIMIT.username} characters</p>
                     )}
                    </label>

                    <label>
                        <span>Password</span>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            autoComplete="current-password"
                            required
                            aria-invalid={!!error}
                        />
                        {form.password.length > CHAR_LIMIT.password && (
                            <p className="hint error">The character {CHAR_LIMIT.password} limit was exceeded</p>
                        )}
                        <Link to="/forgot-password" className="forgot-link">
                            Forgot password?
                        </Link>
                    </label>

                    {error && <p className="error-message">{error}</p>}

                    <button
                        className="login-btn-submit"
                        type="submit"
                        disabled={isLoading}
                    >{isLoading ? 'Logging in...' : 'Log in'}
                    </button>

                    <button 
                        className="login-btn-spotify" 
                        type="button"
                        onClick={handleSpotifyLogin}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        Continue with Spotify
                    </button>
                </form>

                <p className="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </>
    )

}
    