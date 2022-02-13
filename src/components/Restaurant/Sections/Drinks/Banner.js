
const Banner = ({ state, banner }) => {

    return (
        <div className="sections__carousel__item">
            <img src={require(`./../../../../img/${banner.url}`)} alt="Imagen bebidas" className="sections__carousel__item--image" />
            <span className="sections__carousel__item--text"><i>{banner.text}</i></span>
        </div>
    )
}

export default Banner;