import React from "react";
import "./Modal.css";
import Card from "../Card";
  
const Modal = ({ show, outcome }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>        
            <Card data={outcome}/>>
        </section>
      </div>
    );
  };

export default Modal;