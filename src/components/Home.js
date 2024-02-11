import React from 'react'
import AccordionItem from './AccordionItem'
const Home = () => {
    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '25px' }}>Hi Vignaraj </h1>
            <div className="container "><h4>Your Notes</h4>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <AccordionItem id={"one"} target={"#one"} />
                    <AccordionItem id={"two"} target={"#two"} />
                    <AccordionItem id={"three"} target={"#three"} />
                    <AccordionItem id={"four"} target={"#four"} />

                </div>
            </div>
        </>
    )
}

export default Home
