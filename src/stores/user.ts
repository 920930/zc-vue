import { computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
interface IUser {
  id: number;
  name: string;
  avatar: string;
  openid: string;
}

export const useUserStore = defineStore("user", () => {
  const token = computed({
    get() {
      return localStorage.getItem("token") || "";
    },
    set(val: string) {
      localStorage.setItem("token", val);
    },
  });
  const user = computed({
    get() {
      let info = localStorage.getItem("user");
      return info ? JSON.parse(info) : null;
    },
    set(val: IUser) {
      localStorage.setItem("user", JSON.stringify(val));
    },
  });

  const getUser = () => {};
  const getCodeUser = async (code: string) => {
    if (!code || token.value.length) return null;
    return fetch(`http://192.168.1.3:7001/code?code=${code}`, {
      headers: {
        authorization: token.value,
      },
    })
      .then((ret) => ret.json())
      .then((ret) => {
        console.log(ret);
        if (ret.errcode) {
          return ret;
        }
        token.value = ret.token;
        user.value = ret.user;
      })
      .catch((err) => console.log(err));
  };

  return { token, user, getUser, getCodeUser };
});
