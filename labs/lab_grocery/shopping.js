/*
 * Filename:    shopping.js
 * Description: Grocery list
 * Author:      Melanie Treuhaft
 * Date:        11/11/20
 */

// CREATE YOUR GLOBAL GROCERY LIST ARRAY
const list = [];

// Global Object Constructor / Class Syntax
function Item(name, quantity, category){
    this.name=name;
    this.quantity=quantity;
    this.category=category;
};

// Event Listener to Process Form Submission

const elForm = document.getElementById('grocery-list');
elForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const elText = document.getElementById('item');
    //console.log(elText.value);
    const elQuantity = document.getElementById('quantity');
    //console.log(elQuantity.value);
    const elCategory = document.getElementById('category');
    let currentCategory = elCategory.options[elCategory.selectedIndex].value;
    //console.log(currentCategory);
    
    const listItem = new Item(elText.value, elQuantity.value, currentCategory);

    list.push(listItem);

    Update(list);
    
    elForm.reset();
});

// Event Listener to Handle Removal of First Item
const elFirstButton = document.getElementById('first');
elFirstButton.addEventListener('click', function() {
     list.shift();
     Update(list);
});

// Event Listener to Handle Removal of Last Item
const elLastButton = document.getElementById('last');
elLastButton.addEventListener('click', function() {
     list.pop();
     Update(list);
});

// Function to Update the Text of the List
function Update(list){
    const elUl = document.querySelector('ul');
    let htmlString ='';
    for(let value of list) {
        htmlString += `<li>${value.name}, ${value.quantity}, ${value.category}</li>`
    }
    elUl.innerHTML = htmlString;
}