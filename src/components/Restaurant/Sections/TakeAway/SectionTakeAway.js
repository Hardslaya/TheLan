import Button from "./Button";
import Menu from "./Menu";
import Cart from "./Cart";
import { useEffect, useState } from "react";

const SectionTakeAway = (props) => {

    const [show, setShow] = useState(false);

    if(show) return (
        <>
        <Cart />
        <Button setShow={setShow} show={show}/>
        <Menu menu={props.menu}/>
        </>
    )
    else return (
        <>
        <Button setShow={setShow} show={show}/>
        </>
    );
}

export default SectionTakeAway;