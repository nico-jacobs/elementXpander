# elementXpander

A simple jquery plugin, that expands an element to the width of the viewport, no matter where it is located in the dom.

# deprecated:
you should probably use a pure grid release technic

<pre>
.u-release {
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}
</pre>

more explanation here: [https://cloudfour.com/thinks/breaking-out-with-css-grid-layout/](https://cloudfour.com/thinks/breaking-out-with-css-grid-layout/)

## Usage



<pre>
$('.yourelement').elementXpander();</pre>
You Probably need to set at least the Class Name of the page wrapper the default value is .page.
<pre>$('.yourelement').elementXpander({
pagecontainer   : '.yourwrapper'
});
</pre>

##Configuration##

<pre>
pagecontainer   : '.page',
position        : 'relative', // The css position of yourelement. Sometimes 'absolute' works better than relative.
wrap            : 'null', // Option value 'yes' you get a wrap around yourelement, which is sometimes necessary for proper work.
width           : 100, // eg 80 sets the width of the container to 80% of the viewport.
height          : null, // eg 80 sets the height of the container to 80% of the viewport.
offsetx         : 0, // you can enter -20px or -10% to have a offset to the left.
complete        : null  // a callback everytime the width of the element is recalculated e.g. After browser resizing e.g complete    : function() { alert( 'callback!' ) }
</pre>
