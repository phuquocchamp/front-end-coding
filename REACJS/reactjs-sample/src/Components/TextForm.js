import React, {useState} from 'react'
import {Button} from "react-bootstrap";


export default function TextForm() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count+1);
    };
    return (
        <div className="row pt-5 mx-5 justify-content-center">
            <Button className="col-4 px-5" variant="dark" onClick={increase}>Increase</Button>
            <Button className="col-4 px-5" variant="light" >Count numbers: {count}</Button>
        </div>
    )
}
