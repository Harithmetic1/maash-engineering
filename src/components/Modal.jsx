import { faClose, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Modal = ({ onClose }) => {
  return (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-close'>
            <button onClick={() => onClose()}>
                <FontAwesomeIcon icon={faClose} />
            </button>
            </div>
            <div className='modal-header'>
            <h3>Contact Us</h3>
            </div>
            <div className='modal-body h-full'>
                <div className='modal-body-contents h-full flex justify-center flex-wrap gap-6 items-center'>
                    <div className='email p-4 flex justify-center items-center gap-2 rounded-lg bg-neutral-800 text-white'>
                        <a href="mailto:info@maashengineering.com" className='text-4xl' target='_blank'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <p className='cursor-pointer'>
                            Email us
                        </p>
                    </div>

                    <div className='phone p-4 flex justify-center items-center gap-2 rounded-lg bg-rose-500 text-white'>
                        <a href="tel:+234(0) 333 53851" className='text-4xl' target='_blank'>
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                        <p className='cursor-pointer'>
                            Call Us
                        </p>
                    </div>

                    <div className='address p-4 flex justify-center items-center gap-2 rounded-lg bg-sky-500 text-white'>
                        <a href="https://maps.app.goo.gl/oXBhZzcEfo73RwUQA" className='text-4xl' target='_blank'>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </a>
                        <p className='cursor-pointer'>
                            Find Us
                        </p>
                    </div>
                </div>
                
            </div>
            {/* <div className='modal-footer'>
                <button>Cancel</button>
                <button>Save</button>
            </div> */}
        </div>
    </div>
  )
}

export default Modal;