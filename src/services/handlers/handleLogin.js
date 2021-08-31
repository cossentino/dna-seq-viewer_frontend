import Cookies from "js-cookie"
import { useContext } from "react"
import { LOGIN_URL } from "../api/api_requests"
import UserContext from '../../context/user'


export default async function handleLogin(e, formData) {
  e.preventDefault()
  const { setUser } = useContext(UserContext)
  fetch(LOGIN_URL, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then((resp) => resp.json())
    .then(json => {
      Cookies.set('token', json['user']['token'], { samesite: "strict" })
      Cookies.set('email', formData.user.email, { sameSite: 'strict' })
    }).then(() => setUser(formData.user.email))
    .catch(error => console.log(error))
}