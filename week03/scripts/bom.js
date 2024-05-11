const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('#list');

let userList = getChaptersList() || [];

button.addEventListener('click', function() {if (input.value != '') {
    
    displayList(input.value);

    userList.push(input.value);

    setChapterList()

    
    input.value = '';
    input.focus();
}});

userList.forEach(chapter => {
    displayList(chapter);
  });

function displayList(item) {
    let li = document.createElement('li');
    let clearButton = document.createElement('button');

    li.textContent = item;

    clearButton.textContent = '❌';
    clearButton.classList.add('delete')

    li.append(clearButton);
    list.append(li);

    clearButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavChapterList', JSON.stringify(userList));
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem('myFavChapterList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    userList = userList.filter((item) => item !== chapter);
    setChapterList();
}