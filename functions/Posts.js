export const addPost = postInfo => {
    const obj = {
       title: postInfo.title,
       description: postInfo.description,
       category: postInfo.category,
       country: postInfo.country,
       city: postInfo.country,
       images: postInfo.images,
       price: postInfo.price,
       deliveryType: postInfo.deliveryType,
       sellerName: postInfo.sellerName,
       mobile: postInfo.mobile

    }
    return fetch('http://172.20.10.3:4000/posts', {
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


