import React from 'react'

const AccordionItem = (props) => {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="" aria-controls={props.id}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id={props.id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                        <div className='d-flex justify-content-end'>
                            <i className="fa-solid fa-eye fa-2x mx-3"></i>
                            <i className="fa-solid fa-pen-to-square fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AccordionItem
