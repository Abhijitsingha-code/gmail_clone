import { Checkbox, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import React from "react";
import "./MailRow.css";
import { useNavigate } from "react-router-dom";
import { selectsMail } from "../features/mailSlice";
import { useDispatch } from "react-redux";

const MailRow = ({ id, title, subject, descriptions, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToMail = () => {
    dispatch(
      selectsMail({
        id,
        title,
        subject,
        descriptions,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <div onClick={() => goToMail()} className="mailrow">
      <div className="mailrow_options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h4 className="mailrow_title">{title}</h4>

      <div className="mailrow_message">
        <h4>
          {subject}
          <span className="mailrow_descriptions">-{descriptions}</span>
        </h4>
      </div>

      <p className="mailrow_time">{time}</p>
    </div>
  );
};

export default MailRow;
