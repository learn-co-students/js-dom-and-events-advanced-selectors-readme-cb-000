// Selectors should select all paragraphs
function paragraphSelector() {
  return $('p');
}

// Selectors should return the last image
function lastImageSelector() {
  return $('img').last();
}

// Selectors  should return the image of the ninja baby
// The function should use an ID selector to return the ninja baby image.
function ninjaBabySelector() {
  return $('#baby-ninja');
}

// Selectors should return two divs
// The function should use a class selector to return the two divs with the class pics.
function divSelector() {
  return $('.pics');
}

// Selectors should return the first list item in the unordered list
// The function should use a first-child selector to return the first list item in the ul with the ID pic-list.
function firstListItem() {
  return $('ul#pic-list li:first-child');
}
