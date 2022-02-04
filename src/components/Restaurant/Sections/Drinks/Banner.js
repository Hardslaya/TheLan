

const Banner = (props) => {

    return (
        <>
        <img src={require(`./../../../../img/${props.banners[props.state.count].url}`)} alt="Imagen bebidas" className="sections__drinks--image" />
        <span className="sections__drinks--text"><i>{props.banners[props.state.count].text}</i></span>
        </>
    )
}

export default Banner;