<template>
  <div class="chatBox">
    <div class="chatHeader">
      <h2>智能客服</h2>
    </div>
    <div class="chatBody">
      <div class="message" v-for="(message, index) in messages" :key="index">
        <div :class="message.isUser ? 'userMessage' : 'botMessage'">
          <span>{{ message.text }}</span>
        </div>
      </div>
    </div>
    <div class="chatFooter">
      <el-input v-model="input" placeholder="请输入您的问题" @keyup.enter="sendMessage"></el-input>
      <el-button icon="el-icon-s-promotion" class="send-button" @click="sendMessage">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SparkAI',
  data() {
    return {
      input: '',
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      if (this.input.trim()) {
        this.messages.push({ text: this.input, isUser: true });
        this.getBotResponse(this.input);
        this.input = '';
      }
    },
    getBotResponse(message) {
      // 模拟AI回复
      setTimeout(() => {
        const botMessage = '这是一个自动回复信息';
        this.messages.push({ text: botMessage, isUser: false });
      }, 1000);
    },
    closeChat() {
      // 关闭聊天框逻辑
    },
  },
};
</script>

<style scoped>
.chatBox {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 500px;

  .chatHeader {
    background: #6cf;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      color: #fff;
    }
  }

  .chatBody {
    flex: 1;
    padding: 10px;
    overflow-y: auto;

    .message {
      margin: 5px 0;

      .userMessage {
        text-align: right;
        span {
          display: inline-block;
          background: #409EFF;
          color: #fff;
          padding: 10px;
          border-radius: 10px;
        }
      }

      .botMessage {
        text-align: left;
        span {
          display: inline-block;
          background: #e4e4e4;
          color: #333;
          padding: 10px;
          border-radius: 10px;
        }
      }
    }
  }

  .chatFooter {
    padding: 10px;
    background: #f3f4f7;
    display: flex;

    .el-input {
      flex: 1;
      margin-right: 10px;
    }

    .send-button {
      background: #409EFF;
      color: #fff;
    }
  }
}
</style>
