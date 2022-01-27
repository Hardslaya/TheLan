import Info from "./Info.js";
import Image from "./Image.js";

const SectionMeals = (props) => {
    return (
        <section className="sections sections__meals">
                <Info />
                <Image meals={props.meals}/>
        </section>
    );
}

export default SectionMeals;