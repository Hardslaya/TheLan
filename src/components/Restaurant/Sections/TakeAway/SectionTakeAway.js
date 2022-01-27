import Button from "./Button";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const SectionTakeAway = (props) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log(show)
    }, [show]);




    if(show) return (
        <>
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