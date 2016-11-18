/*
This script adds a data-offset-top attribute to the navigation bar. 

This attribute toggles the "affixing" of the navbar, ie the point at which it stays on top of the page.

Here, it is set to the outer height (height + margin + padding) of the jumbotron, so that the navbar will 
stay affixed when the user scrolls past the jumbotron.
*/
$("#navigation").affix({
    offset: {
        top: $(".jumbotron").outerHeight(true)
    }
});
