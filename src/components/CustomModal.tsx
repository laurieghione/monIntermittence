import React from 'react'
import Modal from '@material-ui/core/Modal';
import { Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons'

interface CustomModalProps {
    open: boolean,
    title: string,
    handleClose : ()=> void,
    buttonSubmit: string,
    body: string

}

class CustomModal extends React.Component<CustomModalProps> {
    render() {
        const {open, title, handleClose, body, buttonSubmit} = this.props

        return (
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modalTitle"
            aria-describedby="modalBody"
        >
           <div className="customModal">
               <div className="modalHeader">
                    <h4 id="modalTitle">{title}</h4>
                    <IconButton onClick={handleClose} ><Close /></IconButton>
                </div>
            <p id="modalBody">
               {body}
            </p>
            <div className="modalFooter">
                <Button variant="contained" onClick={handleClose}>Annuler</Button>
                <Button variant="contained" color="primary">{buttonSubmit}</Button>
            </div>
            </div>
        </Modal>
        )
    }
}

export default CustomModal