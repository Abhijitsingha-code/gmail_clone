import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import "./Compose.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeCompose } from "../features/mailSlice";
import {db} from '../firebase'
import { collection, addDoc,serverTimestamp } from "firebase/firestore"; 

const Compose = () => {
  const dispatch = useDispatch();
  const mailRef= collection(db, 'mails')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onsubmit = (formData) => {
    console.log(formData);
    addDoc(mailRef, {
        to:formData.to,
        subject:formData.subject,
        message:formData.message,
        timestamp: serverTimestamp()
    });
    dispatch(closeCompose())
  };

  return (
    <div className="compose_mail">
      <div className="compose_mailheader">
        <h5>New Message</h5>
        <CloseIcon
          onClick={() => dispatch(closeCompose())}
          className="compose_mail_close"
        />
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="compose_error">To is Required!</p>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="compose_error">Subject is Required!</p>
        )}
        <input
          className="compose_mail_message"
          placeholder="Message"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="compose_error">Message is Required!</p>
        )}

        <div className="compose_button">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="compose_btn_send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Compose;
