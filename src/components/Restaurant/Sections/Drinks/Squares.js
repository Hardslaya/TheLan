
const Squares = (props) => {
    return (
        <div className="square">
        {
            props.banners.map(function(item, index){
                return (
                    <span className="square--link" key={item.alt} 
                    onClick={ () => 
                        props.dispatch({ type: props.ACTIONS.SELECT_INDEX, payload : index})
                    } />
                );
            })
        }
        </div>   
    );
}

export default Squares;