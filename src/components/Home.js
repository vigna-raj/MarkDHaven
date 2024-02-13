import React from 'react'
import AccordionItem from './AccordionItem'
const Home = () => {
    return (
        <>
            <div >
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '25px' }}>Hi Vignaraj </h1>
                <div className='mx-auto  container  d-flex  justify-content-end'><i className="fa-solid fa-file-circle-plus fa-3x"></i></div>
            </div>
            <div className="container  "><h4>Your Notes</h4>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <AccordionItem id={"o1"} target={"#o1"} />
                    <AccordionItem id={"two"} target={"#two"} />
                    <AccordionItem id={"three"} target={"#three"} />
                    <AccordionItem id={"four"} target={"#four"} />
                </div>
            </div>
        </>
    )
}

export default Home
