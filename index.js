let todoInput; //miejsce gdzie wpisuje uzytkownik
let errorInfo; //info o braku zadan / koniecznosci wpisania tekstu
let addBtn; //przycisk ADD - dodaje nowe elementy do listy
let ulList; //lista zadań, tagi ul
let newTodo; //nowo dodany task

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
	addBtn.addEventListener('click', addNewTodo);
};

/* 
    funkcja dodajaca zadania:
    1.przechwytuje tresc
    2.tworzy nowy elemnt li
    3.dodaje nowy element do ul
    4.odpala sie na clicka ADD
    5.nie doda pustego zadania
*/
const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li');
		newTodo.textContent = todoInput.value;
		ulList.append(newTodo);

		todoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!';
	}
};

document.addEventListener('DOMContentLoaded', main);
//zabezpieczenie przed uruchomieniem skryptow zanim strona nie zostanie zaladowana
