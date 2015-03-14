jQuery(document).ready(
    function ($) {

        $.fn.elementXpander = function (options) {

            var element2xpand = $(this).selector;

            divResize();

            window.onresize = function() {
                divResize();
            };



            function divResize() {
                // Establish our default settings
                var settings = $.extend({
                    pagecontainer   : '.page',
                    position        : 'relative',
                    width           : null,
                    height          : null,
                    offsetx         : null,
                    complete        : null
                }, options);

                var browserwidth =  $(window).width();
                var contentwidth =  $(settings.pagecontainer).width();

                if (settings.width) {
                    browserwidth = browserwidth * settings.width / 100;
                }

                var leftoffset = (browserwidth - contentwidth ) / 2;

                /* offsetx in percentage and in pixel */
                if (settings.offsetx) {
                    offsetx = settings.offsetx;


                    if (offsetx.toLowerCase().indexOf("px") >= 0) {
                        offsetxint = parseInt(offsetx);
                        var leftoffset = leftoffset - offsetxint;
                        console.log(offsetxint + 'px');
                    }

                    if (offsetx.indexOf("%") >= 0) {
                        offsetxint = parseInt(offsetx);
                        offsetxint = browserwidth * offsetxint /100;
                        var leftoffset = leftoffset - offsetxint;
                        console.log(offsetxint + '%');
                    }

                }

                return $(this).each(function () {

                    $(element2xpand).css({ "position": (settings.position), "margin-left": '-' + leftoffset + 'px', "width": browserwidth + 'px'});

                    if (settings.height) {
                        var browserheight = $(window).height();
                        var height = browserheight * (settings.height) / 100;
                        $(element2xpand).css({ "height": height});
                    }


                    if ( $.isFunction( settings.complete ) ) {
                        settings.complete.call( this );
                    }

                });



            }


        }
        return;

    })