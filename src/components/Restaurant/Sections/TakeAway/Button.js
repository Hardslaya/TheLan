
const Button = ({ setShow, show }) => {
    return (
        <section className="sections sections__takeaway">
            <a className="btn btn--more" onClick={() => setShow(!show)}>
                <span className="more">Carta</span>
                <span className="text"></span>
            </a>
        </section>
    );
}

export default Button;