<script setup>
import * as _ from "lodash";
import emailjs from "emailjs-com";
import { reactive } from "vue";
const linkObj= {
  linkedin:{ 
    img: new URL(`../assets/LinkedIn_icon.svg`, import.meta.url).href,
    title: "Chia Yi Lin",
    url: "https://www.linkedin.com/in/chia-yi-lin-11167321a/"
  },
  github: {
    img: new URL(`../assets/github-icon.svg`, import.meta.url).href,
    title: "lcijoyce622",
    url: "https://github.com/lcijoyce622"
  },
  gmail: {
    img: new URL(`../assets/gmail.svg`, import.meta.url).href,
    title: "lcijoyce622@gmail.com",
    url: "lcijoyce622@gmail.com"
  },
}
const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const sendEmail= _.debounce (function (e) {
  emailjs.sendForm(
    "service_10m4cnh",
    "contact_form",
    e.target,
    "user_GJoDLxPXXLICwlrwVzSqA",
    formData
  );

}, 400, { leading: true, trailing: false })


</script>

<template lang='pug'>
// TODO 驗證
#contactMe
  .animate
    span(style="--i:1") C
    span(style="--i:2") O
    span(style="--i:3") N
    span(style="--i:4") T
    span(style="--i:5") A
    span(style="--i:6") C
    span(style="--i:7") T
    span(style="--i:8") _
    span(style="--i:9") M
    span(style="--i:10") E
  .img-area
    .link(v-for="(link,index) in linkObj" :key="index")
      img.img(:src="link.img")
      .title {{ link.title }}
  .form-area
    .form(@submit.prevent="")
      p.light-text Mail Me
      .col
        input(v-model="formData.name" maxlength="30" type="text" name="name" autocomplete="off" required)
        span.label Name
      .col
        input(v-model="formData.email" maxlength="50" type="text" name="email" autocomplete="off" required)
        span.label Email
      .col
        input(v-model="formData.subject" maxlength="40" type="text" name="subject" autocomplete="off" required)
        span.label Subject
      .col
        textarea(v-model="formData.message" maxlength="500" name="message" rows="5" cols="30" autocomplete="off" required)
        span.label Message
      .btn(@click="sendEmail") Contact Me Now !
</template>

<style lang="scss" scoped>
#contactMe {
  // height: calc(100vh - 104px);
  // padding: 10px;
  // overflow-y: overlay;
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
.img {
  width: 50px;
  height: 50px;
}
.img-area {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .link {
    text-align: center;
    @media (max-width: 768px) {
      .title {
        display: none;
      }
    }
  }
}
.form-area {
  position: relative;
  height: 560px;
  max-width: 560px;
  margin: 20px auto;
  border-radius: 5px;
  background-color: #2e2e2e;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 510px;
    margin: 20px 10px;
  }
  &::before {
    content: "";
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff, #45f3ff);
    position: absolute;
    top: -50%;
    left: -50%;
    z-index: 1;
    width: 540px;
    height: 560px;
    transform-origin: bottom right;
    animation: box-shadow 6s linear infinite;
    @media (max-width: 768px) {
      height: 510px;
    }
  }
  &::after {
    content: "";
    background: linear-gradient(0deg, transparent, #ff2770, #ff2770, #ff2770);
    position: absolute;
    top: -50%;
    left: -50%;
    z-index: 1;
    width: 540px;
    height: 560px;
    transform-origin: bottom right;
    animation: box-shadow 6s linear infinite;
    animation-delay: -3s;
    @media (max-width: 768px) {
      height: 510px;
    }
  }
  .form {
    background-color: #1E1E1E;
    position: absolute;
    z-index: 2;
    inset: 8px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    gap: 10px;
    .light-text {
      margin: 15px auto 0 auto;
      align-items: center;
      text-shadow: 0 0 4px #55FFAD,0 0 100px #55FFAD,0 0 1px #55FFAD;
      color: #55FFAD;
      letter-spacing: 3px;
      font-size: 1.8rem;
      @media (max-width: 768px) {
        font-size: 1.25rem;
      }

    }
    .col {
      position: relative;
      padding: 10px 0px;
      margin: 0px 0;
      display: flex;
      .label {
        position: absolute;
        left: 10px;
        top: 16px;
        transition: all 0.3s ease-in-out;
        font-size: 1rem;
        user-select: none;
        pointer-events: none;
        @media (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
      input {
        width: 100%;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        border-bottom: 4px solid #55FFAD;
        outline: none;
        background-color: #1E1E1E;
        color: white;
        transition: all 0.3s ease-in-out;
        &:focus {
          background-color: #657a70;
        }
      }
    }
    input:focus ~ .label,
    input:valid ~ .label,
    textarea:valid ~ .label,
    textarea:focus ~ .label {
      font-size: 0.8rem;
      color: #55FFAD;
      transform: translateY(-30px);
      @media (max-width: 768px) {
        font-size: 0.6rem;
      }
      
    }
    textarea {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      outline: none;
      border-bottom: 4px solid #55FFAD;
      color: white;
      background-color: #1E1E1E;
      &:focus {
        background-color: #657a70;
      }
    }
  }
}
.btn {
  user-select: none;
  text-align: center;
  letter-spacing: 3px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #55FFAD;
  color: #1E1E1E;
  font-weight: bolder;
  border: 1px solid #1E1E1E;
  transition: all 0.1s ease-in-out;
  &:hover {
    border: 1px solid #55FFAD;
    background-color: #657a70;
    color: #55FFAD;
    transform: scale(1.05);
  }
}
.animate {
  position: relative;
  margin: 20px auto;
  text-align: center;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
}
.animate span {
  position: relative;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  animation: animate 1s infinite;
  animation-delay: calc(.1s * var(--i));
  
}
@keyframes animate {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}
@keyframes box-shadow {
  0% { transform:rotate(0deg)};
  100% { transform:rotate(360deg)};

}
</style>
