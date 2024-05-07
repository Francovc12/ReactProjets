import Boton1 from "./boton1"
export function Card(){
    return(
        <article style={{display : "flex",alignItems: 'center', color : '#fff'}}>
            <header>
                <img src="/logo192.png" alt="react logo" />
                <div id='text-content'>
                    <strong> React</strong>
                    <span>@react</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
                <Boton1 text={"Me gusta"}/>
            </aside>
        </article>
    )
}