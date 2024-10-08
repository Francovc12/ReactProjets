

export function Juego({titulo}){
    return(
        <a className="juego">{titulo}</a>
    )
}

export function Aside({juegos}){
    console.log(typeof(juegos))

    return(
        <aside style={{"display":"grid", "gridArea":"aside", "borderRight":"1px solid #61dafbaa"}}>
            <h1>Juegos</h1>
            {juegos.map((game,index) => (
                <Juego titulo={game.title} key={index} />
            ))}
        </aside>
    )
}