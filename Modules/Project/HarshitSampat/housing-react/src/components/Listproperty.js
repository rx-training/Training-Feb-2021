import React,{useState} from 'react'
import Modal from 'react-modal'


function Listproperty() {
    const [modalIsOpen,setModalIsOpen] =  useState(false)
    return (
        <>
      <div className="App">
        <div className="text-center">
        <button onClick={() => setModalIsOpen(true)} className="align-center mt-5 btn btn-danger ">Open modal</button>
        </div>
        <Modal isOpen={modalIsOpen} className="">
          <h2 className="text-success text-center">Modal Title</h2>
          <p>Modal Body</p>
          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
      </div>
      </>
    );
}

export default Listproperty
