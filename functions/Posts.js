export const posts = user => {
    const obj = {
       
    }
    return fetch('http://localhost:4000/posts', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(obj)
      }).then(response => {
        return response.json();
      }).catch(err => {
          console.log(err)
      });

}

// export const getPosts = () => {

//     return axios.get('/posts', {
//         headers: { 'Content-Type': 'application/json' }
//     }).then(res => {
//         return res.data
//     }).catch(err => {
//         console.log("It failed heeeerrreee!!!" + err);
//     })
// }

