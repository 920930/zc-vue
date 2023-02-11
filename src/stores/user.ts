import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
interface IUser {
  id: number;
  name: string;
  avatar: string;
  openid: string
}

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('')
  const user = ref<IUser | undefined>()
  const getUser = () => {}
  const getCodeUser = (code: string) => {
    if(!code) return;
    fetch(`http://192.168.2.116:7001/code?code=${code}`, {
      headers: {
        authorization: token.value
      }
    })
    .then(ret => ret.json())
    .then(ret => {
      console.log(ret)
      // user.value = ret;
      // localStorage.setItem('user', JSON.stringify(ret))
    })
    .catch(err => console.log(err))
  }

  return { user, getUser, getCodeUser }
})
