$(document).ready(function(){
            $("#header_hamburger").click(function(){
                $("#header_nav_small").slideToggle();
            });
        });

        $(window).resize(function(){
            if(window.innerWidth>=1024){
                $("#header_nav_small").hide();
            }
        });


        $(document).ready(function(){
            $(".footer_nav_title_01").click(function(){
                $("#footer_nav_small_ul_01").slideToggle();
            });
        });

        $(document).ready(function(){
            $(".footer_nav_title_02").click(function(){
                $("#footer_nav_small_ul_02").slideToggle();
            });
        });

        $(document).ready(function(){
            $(".footer_nav_title_03").click(function(){
                $("#footer_nav_small_ul_03").slideToggle();
            });
        });

        $(document).ready(function(){
            $(".header_top_location_US").click(function(){
                $("#header_top_location_ul").slideToggle();
            });
        });