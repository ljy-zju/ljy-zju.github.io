$(function () {
    // resize window
    $(window).resize(function () {
        if ($(window).width() < 1280 && $(window).width()>540) {
            $(".page").css({"width": $(window).width() - $(".side-card").width() - 90, "float": "left"})
        } else {
            $(".page").removeAttr("style")
        }
    });

    // menu
    $(".menus_icon").click(function () {
        if ($(".header_wrap").hasClass("menus-open")) {
            $(".header_wrap").removeClass("menus-open").addClass("menus-close")
        } else {
            $(".header_wrap").removeClass("menus-close").addClass("menus-open")
        }
    })

    $(".m-social-links").click(function () {
        if ($(".author-links").hasClass("is-open")) {
            $(".author-links").removeClass("is-open").addClass("is-close")
        } else {
            $(".author-links").removeClass("is-close").addClass("is-open")
        }
    })

    $(".site-nav").click(function () {
        if ($(".nav").hasClass("nav-open")) {
            $(".nav").removeClass("nav-open").addClass("nav-close")
        } else {
            $(".nav").removeClass("nav-close").addClass("nav-open")
        }
    })

    $(document).click(function(e){
        var target = $(e.target);
        if(target.closest(".nav").length != 0) return;
        $(".nav").removeClass("nav-open").addClass("nav-close")
        if(target.closest(".author-links").length != 0) return;
        $(".author-links").removeClass("is-open").addClass("is-close")
        if((target.closest(".menus_icon").length != 0) || (target.closest(".menus_items").length != 0)) return;
        $(".header_wrap").removeClass("menus-open").addClass("menus-close")
    })

    // 显示 cdtop
    $(document).ready(function ($) {
        var offset = 100,
            scroll_top_duration = 700,
            $back_to_top = $('.nav-wrap');

        $(window).scroll(function () {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible');
        });

        $(".cd-top").on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
        });
    });

    // pjax
    $(document).pjax('a[target!=_blank]','.page', {
        fragment: '.page',
        timeout: 5000,
    });
    $(document).on({
        'pjax:click': function() {
            $('body,html').animate({
                // scrollTop: 0,
            }, 500);
        },
        'pjax:end': function() {
            if ($(".header_wrap").hasClass("menus-open")) {
                $(".header_wrap").removeClass("menus-open").addClass("menus-close")
            }
            if ($(".author-links").hasClass("is-open")) {
                $(".author-links").removeClass("is-open").addClass("is-close")
            }
            if ($(".nav").hasClass("nav-open")) {
                $(".nav").removeClass("nav-open").addClass("nav-close")
            }

            // 检查URL中的锚点
            if (window.location.hash) {
                var hash = window.location.hash;
                var target = $(hash);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
                        // 添加高亮效果并逐渐变亮
                        // target.addClass('highlight-effect');
                        target.css('animation', 'fadeIn 1s ease-in-out');
    
                        // 使用动画逐渐变浅并移除高亮效果
                        setTimeout(function () {
                            target.css('animation', 'fadeOut 1s ease-in-out');
                        }, 1000); // 调整延迟时间（以毫秒为单位）
                    });
                }
            } 
        }
    });

    // // smooth scroll
    // $(function () {
    //     $('a[href*=\\#]:not([href=\\#])').click(function () {
    //         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 $('html,body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 700);
    //                 return false;
    //             }
    //         }
    //     });
    // });
    // smooth scroll with highlight and fade effect
    
// smooth scroll with highlight and fade effect
// smooth scroll with highlight and fade effect
$(function () {
    $('a[href*=\\#]:not([href=\\#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // 平滑滚动
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 700, function () {
                    // 添加高亮效果并逐渐变亮
                    // target.addClass('highlight-effect');
                    target.css('animation', 'fadeIn 1s ease-in-out');

                    // 使用动画逐渐变浅并移除高亮效果
                    setTimeout(function () {
                        target.css('animation', 'fadeOut 1s ease-in-out');
                    }, 1000); // 调整延迟时间（以毫秒为单位）
                });
                return false;
            }
        }
    });
});
})