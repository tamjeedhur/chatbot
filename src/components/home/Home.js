import React from "react";
import styles from "./home.module.css";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ChatSharpIcon from "@mui/icons-material/ChatSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import CloseIcon from "@mui/icons-material/Close";

function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.chatBox}>
        <div className={styles.chatBoxHeader}>
          <div className={styles.homeContainer}>
            <div className={styles.home} >Home</div>
            <div>
              <CloseIcon />
            </div>
          </div>{" "}
        </div>
        <div className={styles.chatBoxBody}>
          <div className={styles.gptPic}>
            <img src="gpt.avif" alt="" />
          </div>

          <div className={styles.gptBold}>SiteGPT Bot</div>
          <div className={styles.gptNormal}>
            An AI chatbot created with SiteGPT to help with customer support.
          </div>
          <div className={styles.gptButtonContainer}>
            <button className={styles.gptButton1}>
              Add your details{" "}
              <div className={styles.Icon}>
                <SendSharpIcon />
              </div>
            </button>
            <button className={styles.gptButton2}>
              Start a conversation{" "}
              <div className={styles.Icon}>
                <SendSharpIcon />
              </div>
            </button>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.barOption}>
            <div className={styles.Icon}>
              <HomeSharpIcon />
            </div>{" "}
            Home
          </div>
          <div className={styles.barOption}>
            <div className={styles.Icon}>
              {" "}
              <ChatSharpIcon />
            </div>{" "}
            Messages
          </div>
          <div className={styles.barOption}>
            <div className={styles.Icon}>
              <AccountCircleSharpIcon />
            </div>{" "}
            Account
          </div>
        </div>
        {/* <div className={styles.footer}>
          <div className={styles.left}> Powered by</div>{" "}
          <div className={styles.right}>
            {" "}
            <img src="logo.svg" alt="" />
            SiteGPT
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
