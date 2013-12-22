#elementXpander

A simple jquery plugin, that expands a element to the width of the viewport, no matter where it is located in the dom.

##Usage

<pre>$('.yourelement').elementXpander();</pre>

##Configuration

<pre>
pagecontainer   : '.page',
width           : 100, // eg 80 sets the height of the container to 80% of the viewport.
height          : null, // eg 80 sets the height of the container to 80% of the viewport.
offsetx         : 0, // you can enter -20px or -10% to have a offset to the left.
complete        : null  // a callback everytime the width of the element is recalculated e.g. After browser resizing e.g complete    : function() { alert( 'callback!' ) }
</pre>