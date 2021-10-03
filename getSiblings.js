/*
<ul>
    <li>🍔</li>
    <li>🍕</li>
    <li id="drink">🍹</li>
    <li>🍲</li>
    <li>🍩</li>
</ul>
*/

/* 
We want to get the #drink element, and then locate all of its sibling elements.

The following helper function takes an element as input and returns all of its siblings:
*/

const siblings = (elem) => {
  // create an empty array
  let siblings = [];

  // if no parent, return empty list
  if (!elem.parentNode) {
      return siblings;
  }

  // first child of the parent node
  let sibling = elem.parentNode.firstElementChild;

  // loop through next siblings until `null`
  do {
      // push sibling to array
      if (sibling != elem) {
          siblings.push(sibling);
      }
  } while (sibling = sibling.nextElementSibling);
  
  return siblings;
};

const drink = document.querySelector('#drink');

// get all all siblings
const nodes = siblings(drink);

nodes.forEach(li => console.log(li.innerText));

// 🍔
// 🍕
// 🍲
// 🍩