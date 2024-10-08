import reactLogo from './assets/react.svg'
import "./header.css"

export function Header() {
    return(
        <header>
            <img src={reactLogo} alt="logo" />
            <h1>GAMEIO.DEV</h1>
        </header>
        
    )
}