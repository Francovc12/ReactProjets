import { Card } from "./card";

export function Article(){
    return(
        <div id='contenedor'>
            <header>
                <h2>Amigos</h2>
            </header>
            <aside>
                <Card />
                <Card />
                <Card />
            </aside>
        </div>
    )
}