import React, { useState, useEffect } from "react";
import "./App.css";
// import Button from '@material-ui/core/Button';
import { FormControl, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "webdblog", message: "This is clone of messanger" },
  ]);
  const [username, setUsername] = useState("");
  let now1 = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now1);

  //useSatte = variable in REACT
  // useEffect = run code on  a condition in REACT
  // console.log(user)
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //run code here
    //if its blank than this code run once (when no condition)
    function takeUser() {
      return prompt("Please Enter Username");
    }
    // let user = prompt("Please Enter your name");
    let user = takeUser();
    // console.log(user);
    while (!user) {
      user = takeUser();
    }
    // if (!user) {
    //   console.log("sjdsk");
    //   user = takeUser();
    // } else {
    setUsername(user);
    // }
  }, []);
  //console.log(user)
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  setInterval(time1, 1000);
  function time1() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }
  //console.log(time);
  // console.log(username)
  return (
    <div className="App">
      <h2>Welcome {username} to Messanger Client App</h2>
      <p>{time}</p>
      <form className="app__form">
        <FormControl className="app__fromControl">
          <Input
            className="app__input"
            placeholder="Enter a Message ..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <br />
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
