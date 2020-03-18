export const login = user => {
    const obj = {
        username: user.username,
        password: password.username
    }
    return fetch('http://172.20.10.3:4000/login', {
        method: 'post',
        body: JSON.stringify(obj)
      }).then(response => {
        return response.json();
      }).catch(err => {
          console.log(err)
      });
}


export const signup = user => {
    const obj = {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        password: password.username
    }
    return fetch('http://172.20.10.3:4000/register', {
        method: 'post',
        body: JSON.stringify(obj)
      }).then(response => {
        return response.json();
      }).catch(err => {
          console.log(err)
      });

}







// export const login = user => {
//     return axios
//     .post('/login', {
//         username: user.username,
//         password: user.password
//     })
//     .then(res => {
//         localStorage.setItem('usertoken', res.data)
//         return res.data
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

// export const signup = user => {
//     return axios
//     .post('/register', {
//         first_name: user.first_name,
//         last_name: user.last_name,
//         username: user.username,
//         password: user.password
//     })
//     .then(res => {
//         return res.data
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

