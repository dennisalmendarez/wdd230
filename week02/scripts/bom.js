const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('#list');

button.addEventListener('click', function() {if (input.value != '') {
    
    const li = document.createElement('li');
    const clearButton = document.createElement('button');

    li.textContent = input.value;
    clearButton.textContent = '❌';

    li.append(clearButton);
    list.append(li);

    clearButton.addEventListener('click', function () {
        list.removeChild(li)
        input.focus()});

    input.focus();

    input.value = '';
}});