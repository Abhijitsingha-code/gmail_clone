import React from 'react'
import './Mail.css'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectedMail} from '../features/mailSlice'

const Mail = () => {

  const navigate = useNavigate();
  const mail = useSelector(selectedMail);

  return (
    <div className='mail'>
        <div className="mail_header">
          <div className="mail_headerleft">
              <IconButton onClick={()=> navigate('/')}>
                  <ArrowBackIcon/>
              </IconButton>
              <IconButton>
                  <MoveToInboxIcon/>
              </IconButton>
              <IconButton>
                  <ReportGmailerrorredIcon/>
              </IconButton>
              <IconButton>
                  <DeleteIcon/>
              </IconButton>
              <IconButton>
                  <EmailIcon/>
              </IconButton>
              <IconButton>
                  <WatchLaterIcon/>
              </IconButton>
              <IconButton>
                  <CheckCircleIcon/>
              </IconButton>
              <IconButton>
                  <LabelImportantIcon/>
              </IconButton>
              <IconButton>
                  <MoreVertIcon/>
              </IconButton>
          </div>

          <div className="mail_headerright">
              <IconButton>
                  <UnfoldMoreIcon/>
              </IconButton>
              <IconButton>
                  <PrintIcon/>
              </IconButton>
              <IconButton>
                  <ExitToAppIcon/>
              </IconButton>
          </div>
        </div>

        <div className="mail_body">
          <div className="mail_bodyheader">
            <h3>{mail?.subject}</h3>
            <LabelImportantIcon className='mail_body_icon'/>
            <p>{mail?.title}</p>
            <p className='mail_bodytime'>{mail?.time}</p>
          </div>
          <div className="mail_bodymessage">
            <p>{mail?.descriptions}</p>
          </div>
        </div>
    </div>
  )
}

export default Mail