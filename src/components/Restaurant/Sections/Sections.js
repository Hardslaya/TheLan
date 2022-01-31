import SectionMeals from "./Meals/SectionMeals.js";
import SectionDrinks from "./Drinks/SectionDrinks.js";
import SectionTakeAway from "./TakeAway/SectionTakeAway.js";

const starters = [
    {
        name: "Ensalada de aguacate",
        url: "ensaladaAguacate.jpg",
        price: 11.99,
        objectId: 0
    },
    {
        name: "Sopa primavera",
        url: "sopaPrimavera.jpg",
        price: 8.99,
        objectId: 1
    }
];

const mainCourse = [
    {
        name: "Secreto a la naranja",
        url: "secretoNaranja.jpg",
        price: 12.99,
        objectId: 2
    },
    {
        name: "Pote gallego",
        url: "poteGallego.jpg",
        price: 10.99,
        objectId: 3
    } 
];

const dessert = [
    {
        name: "Macarons",
        url: "macaron.jpg",
        price: 4.99,
        objectId: 4
    }
];

const beverages = [
    {
        name: "Cerveza",
        price: 5.99,
        objectId: 5
    }
]

const menu = [starters, mainCourse, dessert, beverages];

const Sections = () => {
    return (
        <main className="sections">
            <SectionMeals menu={menu}/>
            <SectionDrinks />
            <SectionTakeAway menu={menu}/>
        </main>
    );
}

export default Sections;