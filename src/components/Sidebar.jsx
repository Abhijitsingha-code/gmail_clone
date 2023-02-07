import { Add } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Person3Icon from "@mui/icons-material/Person3";
import PhoneIcon from "@mui/icons-material/Phone";
import DuoIcon from "@mui/icons-material/Duo";
import { useDispatch } from "react-redux";
import { openCompose } from "../features/mailSlice";

const Sidebar = () => {

  const dispatch = useDispatch()
  
  return (
    <div className="sidebar">
      <Button startIcon={<Add />} className="sidebar_compose" onClick={()=>dispatch(openCompose())}>
        Compose
      </Button>

      <SidebarOptions Icon={MailIcon} text="Inbox" number={56} active={true} />
      <SidebarOptions Icon={StarIcon} text="Starred" number={56} />
      <SidebarOptions Icon={AccessTimeIcon} text="Snoozed" number={56} />
      <SidebarOptions Icon={LabelImportantIcon} text="Important" number={56} />
      <SidebarOptions Icon={NearMeIcon} text="Send" number={56} />
      <SidebarOptions Icon={NoteIcon} text="Drafts" number={56} />
      <SidebarOptions Icon={ExpandMoreIcon} text="More" />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcon">
          <IconButton>
            <Person3Icon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
