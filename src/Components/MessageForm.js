import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Ketik pesan Anda di sini"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <CIcon
            content={freeSet.cilImage}
            style={{ width: "20px", color: "black" }}
          />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button type="submit" className="send-button">
        <CIcon
          content={freeSet.cilSend}
          style={{ width: "20px", color: "black" }}
        />
      </button>
    </form>
  );
};

export default MessageForm;
