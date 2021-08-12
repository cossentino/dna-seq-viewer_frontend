import Cookies from 'js-cookie'
export const ADD_SEQUENCE_URL = 'http://localhost:8000/sequences/new'
export const LOGIN_URL = 'http://localhost:8000/api/users/login/'

export const csrftoken = Cookies.get('csrftoken');

export const postConfObj = body => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(body)
  }
}