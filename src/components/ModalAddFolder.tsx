import React from 'react';
import { bindActionCreators } from 'redux'
import Folder from '../model/folder';
import CustomModal from './CustomModal';
import { TextField } from '@material-ui/core';
import apis from '../api';
import { connect } from 'react-redux';
import { addFolder } from '../store/actions/folderAction';

interface modalAddFolderProps {
    openModal: boolean,
    closeModal : ()=> void
}

interface modalAddFolderState {
    folder: Folder
}

class ModalAddFolder extends React.Component<modalAddFolderProps & any,modalAddFolderState> {

    constructor(props: modalAddFolderProps & any){
        super(props)
        this.state = {
            folder : {...new Folder(), active:true}
        }
    }

        changeDateStart = (event: any) => {
               let folder = { ...this.state.folder };
               if(event.target.name === 'dateStart'){
                   folder.dateStart = event.target.value;
               }
               
               this.setState({ folder});
           }
       

        addFolder = () =>{
                let folder = {...this.state.folder};

                //TODO: add real user
                folder.user = '5e86360d56dc0a72648fede2';

                apis.insertFolder(folder).then((data: any) => {
                    window.alert(`Folder inserted successfully`)
                    this.props.addFolder({...folder, id :data.id})                  
                  }).catch((error: any) => {
                    console.error(error);
                  });
            }

    render() {

        let body = (
            <React.Fragment>
                <form>
                <div className="form-group col-md-6">
                    <TextField
                    label="Date début"
                    name="dateStart"
                    type="date"
                    required
                    variant="outlined"
                    onChange={this.changeDateStart}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                </div>
            </form>
            </React.Fragment>
        )

        const {openModal, closeModal} = this.props

        return (
            <CustomModal title="Ajouter un dossier" open={openModal} 
            handleClose={closeModal} buttonSubmit="Ajouter" 
            body={body} handleSubmit={this.addFolder} />)
    }
}


function mapDispatchToProps(dispatch : any) {
    return bindActionCreators({ addFolder }, dispatch)
  }


export default connect(null, mapDispatchToProps)(ModalAddFolder)