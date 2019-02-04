// // declare your functions here...
// Write a function paragraphSelector that does not accept any parameters. The function should use an element selector to select the p tags in index.html and return those elements. (Note that we're using the plural because the selector will always return an array when used with tags, even if there's only one!)

function paragraphSelector () {
    return $('p');
}

function lastImageSelector() {
    let images = $('img');
    return images.last()
}

function ninjaBabySelector() {
    let images = $('img');
    return images.first()
}

function divSelector() {
    return $('.pics');
}

function firstListItem() {
    return $('ul li').first()
}