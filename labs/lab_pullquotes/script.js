//Get all the <q> elements
const elQuote = document.querySelectorAll('q');
//Loop through those elements 
for (let el of elQuote) {
    //Create <blockquote> element
    const elBlockquote = document.createElement('blockquote');
    //Add the text of the <q> to the <blockquote>
    elBlockquote.appendChild(document.createTextNode(el.textContent));
    //Add class of pullquote to every blockquote
    elBlockquote.classList.add('pullquote');
    //Add the <blockquote> BEFORE it's corresponding <q>
    let p = el.parentNode;
    p.insertBefore(elBlockquote, el)
}