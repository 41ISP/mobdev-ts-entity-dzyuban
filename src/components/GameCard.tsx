import type { IGame } from "../types";


interface IGameCard extends IGame {
    
}
export function GameCard({title, description, price, createdAt, alternativeText}: IGameCard) {
    return (
        <article className="card">
            <div className="card__cover">
                
                <img src="{API_URL + cover.url}" alt="{cover.alternativeText}" />
                <span>{alternativeText}</span>
                <b className="card__rating">5</b>
            </div>

            <div className="card__body">
                <h3>{title}</h3>
                {/* <p className="card__meta">Жанр, год</p> */}
                {description && (<p className="card__desc">{description[0].children[0].text}</p>
                )}
                <p className="card__platforms">Платформы</p>
            </div>

            <footer className="card__footer">
                <strong className="free">{price}</strong>
                <button className="link-btn">{createdAt}</button>
            </footer>
        </article>
    )
}
