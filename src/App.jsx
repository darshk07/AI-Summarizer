import Demo from './components/Demo.jsx'
import Hero from './components/Hero.jsx'

import './App.css'
export const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
            </div>
            <div className="app">
                <Hero />
                <Demo />    
            </div>
        </main>
    )
}
