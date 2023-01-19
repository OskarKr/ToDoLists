let todoInput; //miejsce gdzie wpisuje uzytkownik
let errorInfo; //info o braku zadan / koniecznosci wpisania tekstu
let addBtn; //przycisk ADD - dodaje nowe elementy do listy
let ulList; //lista zadań, tagi ul

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	//tutaj pobierane sa wszystkie elementy
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');
};

const prepareDOMEvents = () => {
	//tutaj nadaje nasluchiwanie
};

document.addEventListener('DOMContentLoaded', main);
//zabezpieczenie przed uruchomieniem skryptow zanim strona nie zostanie zaladowana
