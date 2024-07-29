import React from "react";
import { Accordion } from "react-bootstrap";

function Accordions({ items }) {
    console.log(items);

    return (
        <Accordion defaultActiveKey="0" className="my-5">
            {items?.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.name}</Accordion.Header>

                    <Accordion.Body>
                        <p>
                            <b>Phone:</b> {item.phone}
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default Accordions;
