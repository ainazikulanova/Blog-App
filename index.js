const posts =[];
const titleLimit = 100;
const textLimit = 200;

const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.querySelector('.validationMessage')

newPostBtnNode.addEventListener('click', function(){
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    renderPosts();

});

postTitleInputNode.addEventListener('input', validationTitle);
postTextInputNode.addEventListener('input', validationText);

function validationTitle(){
    const titleLen = postTitleInputNode.value.length;

    if(titleLen>titleLimit){
        validationMessage.innerText =`Длина заголовка не должна превышать ${titleLimit} символов!`;
        validationMessage.classList.remove('validationMessage_hidden');
    }else{
        validationMessage.innerText =`Вы можете ввести ещё ${titleLimit-titleLen} символов`;
        validationMessage.classList.remove('validationMessage_hidden');
    }
    validationMessage.classList.add('validationMessage_hidden');
}

function validationText(){
    const textLen = postTextInputNode.value.length;

    if(textLen>textLimit){
        validationMessage.innerText =`Длина заголовка не должна превышать ${textLimit} символов!`;
        validationMessage.classList.remove('validationMessage_hidden');
    }else{
        validationMessage.innerText =`Вы можете ввести ещё ${textLimit-textLen} символов`;
        validationMessage.classList.remove('validationMessage_hidden');
    }
    validationMessage.classList.add('validationMessage_hidden');
}

// получить данные из поля ввода
function getPostFromUser(){
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;
    return {
        title: title,
        text: text,
    };
}

// сохранить заголовок поста
function addPost({title, text}){
    const currDate = new Date();
    const dt = `${currDate.toLocaleString()}`;
    posts.push({
        dt,
        title,
        text
    })
}
// получить пост
function getPosts(){
    return posts;
}
// отобразить заголовок поста
function renderPosts(){
    const posts = getPosts();
    let postsHTML='';

    posts.forEach(post => {
            postsHTML +=  `
            <div class='post'>
            <p class='post__date'>${post.dt}</p>
            <p class='post__title'>${post.title}</p>
            <p class='post__text'>${post.text}</p>
            </div>
        `;
    });

    postsNode.innerHTML = postsHTML;
}