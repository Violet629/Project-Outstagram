<template>
  <div class="messenger">
    <div class="messenger-follow-list">
      <div class="messenger-follow-list-header">
        <p>Follow</p>
        <img src="../assets/icon/chat.png" alt="icon" />
      </div>
      <div
        class="messenger-follow-list-icon"
        v-for="myFollw in $store.state.myFollowData"
        :key="myFollw"
        @click="
          [chatMessage(myFollw.userID), followProfileImg(myFollw.profileImg)]
        "
      >
        <img :src="myFollw.profileImg" alt="friend-img" class="icon-img" />
        <p class="icon-name">{{ myFollw.userID }}</p>
      </div>
    </div>
    <div class="messenger-chatting">
      <div class="message" v-for="chat in $store.state.chatData" :key="chat">
        <div
          class="message-list"
          :class="{ 'my-message': chat.Sender == yourName }"
        >
          <img
            v-if="chat.Sender != yourName"
            class="message-profile animate__animated animate__bounceIn"
            :src="followImg"
            alt="profile-img"
          />
          <p
            class="message-text animate__animated animate__bounceIn"
            :class="{ 'my-message': chat.Sender == yourName }"
          >
            {{ chat.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="chatting-send">
      <input v-model="inputMessage" type="text" />
      <img @click="sendMessage()" src="../assets/icon/send.png" alt="send" />
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      socket: io(),
      yourName: "",
      inputMessage: "",
      followName: "",
      followImg: "",
    };
  },
  mounted() {
    this.socket.on("MESSAGE", (data) => {
      this.$store.state.chatData = [...this.$store.state.chatData, data];
      // you can also do this.messages.push(data)
    });
    axios
      .get("userdata")
      .then((res) => {
        this.$store.state.userData = res.data[0];
        this.yourName = this.$store.state.userData.userID;
      })
      .catch((err) => {
        console.error(err.message);
      });
    axios
      .get("myfollowdata")
      .then((res) => {
        this.$store.state.myFollowData = res.data;
      })
      .catch((err) => {
        console.error(err.message);
      });
    this.$store.state.chatData = [];
  },
  methods: {
    followProfileImg(img) {
      this.followImg = img;
    },
    chatMessage(follow) {
      this.followName = follow;
      axios
        .post("chatMessage", {
          yourName: this.yourName,
          followName: follow,
        })
        .then((res) => {
          this.$store.state.chatData = res.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    sendMessage() {
      axios
        .post("sendMessage", {
          yourName: this.yourName,
          followName: this.followName,
          inputMessage: this.inputMessage,
        })
        .then((res) => {
          // this.$store.state.chatData = res.data;
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
      this.socket.emit("SEND_MESSAGE", {
        user: this.yourName,
        message: this.inputMessage,
      });
    },
  },
};
</script>

<style>
.messenger {
  background-color: #fff;
  width: 85%;
  height: 600px;
  margin: 0 auto;
  margin-top: 12px;
  border-radius: 12px;
  border: 1px solid rgba(153, 153, 153, 0.3);
}
.messenger-follow-list {
  width: 29%;
  height: 100%;
  float: left;
  border-right: 1px solid rgba(153, 153, 153, 0.3);
  background-color: #fff;
  border-radius: 12px 0px 0px 12px;
}
.messenger-chatting {
  width: 70%;
  float: left;
  height: 93%;
  overflow: scroll;
  overflow-x: hidden;
}
.messenger-chatting::-webkit-scrollbar {
  width: 10px;
}
.messenger-chatting::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
}
.messenger-chatting::-webkit-scrollbar-track {
  background-color: rgba(153, 153, 153, 0.3);
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
  display: none;
}
.messenger-follow-list-header {
  display: flex;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  align-items: center;
  justify-content: center;
}
.messenger-follow-list-header p {
  margin: 18px 0px;
  font-size: 28px;
  font-weight: 700;
}
.messenger-follow-list-header img {
  width: 30px;
  height: 30px;
  margin-left: 6px;
}
.messenger-follow-list-icon {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.messenger-follow-list-icon img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 12px 12px 12px 20px;
}
.messenger-follow-list-icon p {
  font-size: 20px;
  margin-top: 16px;
}
.message-list {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: flex-start;
}
.message-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.message-text {
  font-size: 20px;
  background-color: rgb(200, 200, 200);
  border-radius: 12px;
  border: 1px solid rgba(153, 153, 153, 0.3);
  padding: 8px 16px;
  margin: 6px 8px;
  display: inline-block;
}
.my-message {
  justify-content: flex-end;
  background-color: #fff;
}
.chatting-send {
  width: 70%;
  float: left;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(153, 153, 153, 0.3);
}
.chatting-send input {
  width: 100%;
  font-size: 16px;
  padding: 11px 0px 11px 12px;
  border: 0;
}
.chatting-send img {
  width: 30px;
  height: 30px;
  margin: 0px 8px;
}
</style>
