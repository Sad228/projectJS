let url2 = new URL(location.href);
let divPost = document.createElement('div');
let postJson = url2.searchParams.get('id');
let post = JSON.parse(postJson);
divPost.classList.add('divPost');
let userIdPost = document.createElement('div');
userIdPost.classList.add('postText');
userIdPost.innerText = `UserID:
${post.userId}`;
let idPost = document.createElement('div');
idPost.classList.add('postText');
idPost.innerText = `ID:
${post.id}`;
let titlePost = document.createElement('div');
titlePost.classList.add('postText');
titlePost.innerText = `Title:
${post.title}`;
let bodyPost = document.createElement('div');
bodyPost.classList.add('postText');
bodyPost.innerText =`Body:
${post.body}`;



divPost.append(userIdPost,idPost,titlePost,bodyPost);
document.body.appendChild(divPost);

let divComents = document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/posts/'+post.id+'/comments')
    .then(value => value.json())
    .then(value => {
        let divInfoAll = document.createElement('div');
        divInfoAll.classList.add('divInfoAll');
        for (const item of value) {
           let divInfo = document.createElement('div');
           divInfo.classList.add('divInfo');
           let postIdCom = document.createElement('div');
           postIdCom.innerText = 'PostID:' + ' ' + item.postId;
            let idCom = document.createElement('div');
            idCom.innerText = 'ID:'+ ' ' + item.id;
            let nameCom = document.createElement('div');
            nameCom.innerText = 'Name:' + ' ' + item.name;
            let emailCom = document.createElement('div');
            emailCom.innerText = 'Email:' + ' ' + item.email;
            let bodyCom = document.createElement('div');
            bodyCom.innerText = 'Body: ' + ' ' + item.body;
            divInfo.append(postIdCom,idCom,nameCom,emailCom,bodyCom);
            divInfoAll.appendChild(divInfo);
        }
        divComents.appendChild(divInfoAll)

    })
document.body.appendChild(divComents);
