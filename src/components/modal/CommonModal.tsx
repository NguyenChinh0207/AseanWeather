import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import './modal.scss';

const CommonModal = ({show, setIsShow, title, size="md",  children}: any) => {
const test = () => {
console.log(`object test`)
}
    return (
        <>
            <Modal
                size={size}
                show={show}
                onHide={setIsShow}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CommonModal;