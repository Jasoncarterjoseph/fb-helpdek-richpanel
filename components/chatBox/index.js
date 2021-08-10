import { Avatar } from "@material-ui/core";
import { useSession } from "next-auth/client";
import React from "react";

import styles from "./chatBox.module.scss";

const Chat = ({ message }) => {
  return <span className={styles.message}>{message}</span>;
};

const options = {
  weekday: "short",
  day: "numeric",
};

export const ChatBox = ({ item: { fname, lname, chats, profile } }) => {
  const [session] = useSession();

  const date = new Date();

  const timeStamp = (
    <>
      {date.toLocaleDateString("en-US", options)}{" "}
      {date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
    </>
  );

  return (
    <div className={styles.chatBox}>
      <div className={styles.history}>
        {chats.map((message, idx) => {
          return idx % 2 == 0 ? (
            <div key={idx} className={styles.leftChats}>
              <div className={styles.chatItem}>
                <div className={styles.avatar}>
                  <Avatar src={profile} />
                </div>
                <div className={styles.messages}>
                  {message.map((message, i) => (
                    <Chat key={i} message={message} />
                  ))}
                  <small className={styles.date}>
                    {fname} {lname} {timeStamp}
                  </small>
                </div>
              </div>
            </div>
          ) : (
            <div key={idx} className={styles.rightChats}>
              <div className={styles.chatItem}>
                <div className={styles.messages}>
                  {message.map((message, i) => (
                    <Chat key={i} message={message} />
                  ))}
                  <small className={styles.date}>
                    {session && session.user.name} {timeStamp}
                  </small>
                </div>
                <div className={styles.avatar}>
                  <Avatar src={session && session.user.image} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.input}>
        <input type="text" placeholder={`Message ${fname} ${lname}`} />
      </div>
    </div>
  );
};
