import React from 'react'
import Profile from './Profile'

const Sample = () => {
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal" id="exampleModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content ">
                        <div class="modal-header ">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="mt-mb-5"><Profile /></div>

                    </div>
                    <div className='modal-footer'>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </>)
}

export default Sample
