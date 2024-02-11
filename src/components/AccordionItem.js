import React from 'react'

const AccordionItem = (props) => {
    return (
        <>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="" aria-controls={props.id}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id={props.id} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                        <i class="fa-solid fa-eye"></i>
                        <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AccordionItem
