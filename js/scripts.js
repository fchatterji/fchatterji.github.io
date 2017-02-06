/* this scripts makes the .navigation class have the height of the .navbar class
Therefore, when the navbar gets affixed, an d goes out of the flow of the page,
the navigation bar still has height. Before this fix, the page would 'jump'
when the navbar would get affixed
*/
$('.navigation').height($(".navbar").height());

/*
This script adds a data-offset-top attribute to the navigation bar. 

This attribute toggles the "affixing" of the navbar, ie the point at which it stays on top of the page.

Here, it is set to the outer height (height + margin + padding) of the jumbotron, so that the navbar will 
stay affixed when the user scrolls past the jumbotron.
*/
$(".navbar").affix({
    offset: {
        top: function() {
            return $(".jumbotron").outerHeight(true);
        }
    }
});
