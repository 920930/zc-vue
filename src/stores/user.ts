import { computed, ref } from "vue";
import { defineStore } from "pinia";
export interface IUser {
  id: number;
  name: string;
  avatar: string;
  openid: string;
  sign: number;
  updatedAt: Date;
}

export const useUserStore = defineStore("user", () => {
  const token = ref(localStorage.getItem("token") ?? "");

  const getUser = (): IUser | null => {
    const one = localStorage.getItem("user");
    return one ? JSON.parse(one) : null;
  }

  const user = ref<IUser | null>(getUser());


  const setToken = (t: string) => {
    token.value = t;
    localStorage.setItem('token', t)
  }
  const setUser = (val: IUser | number) => {
    if(typeof val === 'number' && user.value) {
      user.value.sign = val
    }
    if(typeof val === 'object') {
      user.value = val
    }
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  const getCodeUser = async (code: string, url: string) => {
    if (!code || token.value.length) return null;
    return fetch(`${url}/code?code=${code}`, {
      headers: {
        authorization: token.value,
      },
    })
      .then((ret) => ret.json())
      .then(({data}) => {
        if (data.errcode) return data;
        console.log(11111111)
        console.log(data)
        console.log(11111111)
        setToken(data.token)
        setUser(data.user)
        return data
      });
  };

  return { token, user, setToken, setUser, getCodeUser };
});
