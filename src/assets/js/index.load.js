
        $(document).ready(function () {
            // camera
            $('#camera_wrap').camera({
                //thumbnails: true
                autoAdvance: true,
                mobileAutoAdvance: true,
                //fx					: 'simpleFade',
                height: '51%',
                hover: false,
                loader: 'none',
                navigation: true,
                navigationHover: true,
                mobileNavHover: true,
                playPause: false,
                pauseOnClick: false,
                pagination: false,
                time: 7000,
                transPeriod: 1000,
                minHeight: '200px'
            });

            //	carouFredSel
            $('#slider3 .carousel.main ul').carouFredSel({
                auto: {
                    timeoutDuration: 8000
                },
                responsive: true,
                prev: '.prev3',
                next: '.next3',
                width: '100%',
                scroll: {
                    items: 1,
                    duration: 1000,
                    easing: "easeOutExpo"
                },
                items: {
                    width: '320',
                    height: 'variable',	//	optionally resize item-height
                    visible: {
                        min: 1,
                        max: 4
                    }
                },
                mousewheel: false,
                swipe: {
                    onMouse: true,
                    onTouch: true
                }
            });
            $(window).bind("resize", updateSizes_vat).bind("load", updateSizes_vat);
            function updateSizes_vat() {
                $('#slider3 .carousel.main ul').trigger("updateSizes");
            }
            updateSizes_vat();

        }); //
        $(window).load(function () {
            //

        }); //
    