const info = {
    text: '"Nuestra cocina supone un orgullo para todo nuestro equipo, ofreciendo el mejor servicio posible a nuestros comensales. Ven a disfrutar de los paltos más vaguardistas e innovadores de la zona"',
    button: 'Ver más'
}

const Info = () => {
    return (
        <div className="sections__meals--info">
            <span className="text"><i>{info.text}</i></span>
            <a className="btn btn--more">
                <span className="more"></span>
                <span className="text">{info.button}</span>
                <span className="arrow arrow--right"></span>
            </a>
        </div>
    );
}

export default Info;