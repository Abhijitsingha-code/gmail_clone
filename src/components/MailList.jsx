import React, { useEffect, useState } from "react";
import "./MailList.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Checkbox } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "./Section";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MailRow from "./MailRow";
import {db} from '../firebase'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const MailList = () => {
  const [mails, setMails] = useState();
  const mailRef= collection(db, 'mails')

  useEffect(() => {
    const q = query(mailRef, orderBy('timestamp','desc'));
    onSnapshot(q, (snapshot)=>{
      setMails(snapshot.docs.map(doc=>({
        id: doc.id,
        data: doc.data()
      }))
    )
    })
  }, []);
  return (
    <div className="mailList">
      <div className="mailList_header">
        <div className="mailList_header_left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mailList_header_right">
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="mailList_section">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={EmojiPeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="mailList_list">
      {/* {console.log(mails?.[0].data?.timestamp)} */}
        {mails?.map(({id, data:{message,to,subject,timestamp}})=>(
            <MailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              descriptions={message}
              time={new Date(timestamp?.seconds*1000).toLocaleTimeString()}
            />
        ))}
      </div>
    </div>
  );
};

export default MailList;
