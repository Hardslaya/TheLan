
const Squares = ({ banners, setActiveIndex, activeIndex }) => {
    return (
        <div className="square">
        {
            banners.map(function(item, index){
                return (
                    <span className={`${(activeIndex === index) ? "square--link square--link-active" : "square--link" }`} key={item.alt} 
                    onClick={ () => 
                       setActiveIndex(index)
                    } />
                );
            })
        }
        </div>   
    );
}

export default Squares;