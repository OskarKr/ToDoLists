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
	ulList.addEventListener('click', checkClick);
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
		createToolsArea();

		ulList.append(newTodo);

		todoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!';
	}
};
/*
    funkcja dodajaca narzedzia
    1. stworzyc diva tools
    2. dodac do niego 3 przyciski
    3. odpowiednie klasy i tresc
*/
const createToolsArea = () => {
	const toolsDiv = document.createElement('div');
	toolsDiv.classList.add('tools');
	newTodo.append(toolsDiv);

	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.textContent = 'EDIT';

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsDiv.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		//
	} else if (e.target.matches('.delete')) {
		//
	}
};

document.addEventListener('DOMContentLoaded', main);
//zabezpieczenie przed uruchomieniem skryptow zanim strona nie zostanie zaladowana
