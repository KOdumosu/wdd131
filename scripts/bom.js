const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.getElementById('chapList');

const li = document.createElement('li');
li.textContent = "Alma 5";

const deleteButton = document.createElement('button');
deleteButton.textContent = "❌";
deleteButton.setAttribute('aria-label', 'Remove Alma 5');

li.append(deleteButton);
list.append(li);