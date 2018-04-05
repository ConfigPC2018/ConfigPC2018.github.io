(function($) {
    if ($.fn.style) {
        return;
    }

    // Escape regex chars with \
    var escape = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    };

    // For those who need them (< IE 9), add support for CSS functions
    var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
    if (!isStyleFuncSupported) {
        CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
            return this.getAttribute(a);
        };
        CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
            this.setAttribute(styleName, value);
            var priority = typeof priority != 'undefined' ? priority : '';
            if (priority != '') {
                // Add priority manually
                var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
                    '(\\s*;)?', 'gmi');
                this.cssText =
                    this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
            }
        };
        CSSStyleDeclaration.prototype.removeProperty = function(a) {
            return this.removeAttribute(a);
        };
        CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
            var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
                'gmi');
            return rule.test(this.cssText) ? 'important' : '';
        }
    }

    // The style function
    $.fn.style = function(styleName, value, priority) {
        // DOM node
        var node = this.get(0);
        // Ensure we have a DOM node
        if (typeof node == 'undefined') {
            return this;
        }
        // CSSStyleDeclaration
        var style = this.get(0).style;
        // Getter/Setter
        if (typeof styleName != 'undefined') {
            if (typeof value != 'undefined') {
                // Set style property
                priority = typeof priority != 'undefined' ? priority : '';
                style.setProperty(styleName, value, priority);
                return this;
            } else {
                // Get style property
                return style.getPropertyValue(styleName);
            }
        } else {
            // Get CSSStyleDeclaration
            return style;
        }
    };
})(jQuery);

function showHmenuDyn(b) {
    var a = $(b).parents("li").index();
    $(b).parents("ul.dropdown-menu").find(".header-menu-dynamic .hidden-block").hide(), $(b).parents("ul.dropdown-menu").find(".header-menu-dynamic").children().eq(a).length > 0 ? $(b).parents("ul.dropdown-menu").find(".header-menu-dynamic").children().eq(a).show() : $(b).parents("ul.dropdown-menu").find(".header-menu-dynamic").children().eq(0).show()
}
$(window).load(function () {
    $(".twentytwenty-container").twentytwenty()
}), $(document).ready(function () {
    $("a.video-block").click(function () {
        $.fancybox.open({type:'iframe',href:$(this).attr("href")+'?autoplay=1',padding:0});
        return false;
    });
    var au = $(".validate-form"), ae = $(".open-search-btn"), ay = $(".search-form"), ap = $(".close-search"), ak = $(".subscr-form"), aj = $(".subscr-next"), af = ($(".login-btn"), $(".modal .login-form")), ag = $(".checkout .login-form"), am = $(".log-reg .login-form"), av = $(".registr-form"), aw = $("#checkout-form"), ad = $(".order-tracking"), aq = $(".personal-info"), al = ($(".cart-dropdown .total"), $("header")), ai = (al.data("offset-top"), al.data("stuck"), $(".menu-toggle")), at = $(".menu"), ac = $(".menu .has-submenu > a > i"), ar = ($(".menu .submenu"), $(".feature-tabs .tab")), ax = $(".feature-tabs .tabs-pane"), ab = $(".brand-carousel .inner"), Z = ($(".tile .share-btn i"), $(".offer-tabs .tab-navs a")), an = $(".offer-tabs .tab-navs"), X = ($(".sorting a"), $(".pagination li.active a")), aa = $(".filter-section .categories .has-subcategory > a"), ah = $(".filter-toggle"), K = $("#scrollTop-btn"), J = $(".qcf-btn"), az = $(".addItemToCart"), Y = $(".cart-message"), W = $(".promo-labels div"), O = $(".panel-toggle"), U = $(".accordion .panel-heading a");
    if ($(".mega-menu a.root-item").click(function () {
            if($("html").hasClass("touch") && $(this).next("ul").length > 0){
                return false;
            }
            $(this).attr("href") && $(this).attr("href").length > 0 && (document.location.href = $(this).attr("href"))
        }), $(".openGodlikeEdition").hover(function () {
            $(this).addClass("dropdown");
            var a = $(".mega-menu a.root-item[href='/game_computers/']+ul").clone();
            $(this).append(a);
            showHmenuDyn("#openGodlikeEdition")
        }, function () {
        }), $(".openProjects").hover(function () {
            $(".mega-menu a.root-item[href='/game_computers/']+ul").css({display: "block"}), showHmenuDyn("#openProjects")
        }, function () {
            $(".mega-menu a.root-item.dropdown-toggle+ul").css({display: ""}), showHmenuDyn("#MainGameMenu")
        }), $(".header-v6 .header-menu-big > li > a").hover(function () {
            var a = $(this).parents("li").index();
            $(this).parents("ul.dropdown-menu").find(".header-menu-dynamic .hidden-block").hide(), $(this).parents("ul.dropdown-menu").find(".header-menu-dynamic").children().eq(a).length > 0 ? $(this).parents("ul.dropdown-menu").find(".header-menu-dynamic").children().eq(a).show() : $(this).parents("ul.dropdown-menu").find(".header-menu-dynamic").children().eq(0).show()
        }, function () {
        }), $(".header-v6 [data-show-target]").hover(function () {
            $(this).parents(".hidden-block").find("[data-show]").hide(), $(this).parents(".hidden-block").find("[data-show=" + $(this).attr("data-show-target") + "]").length > 0 ? $(this).parents(".hidden-block").find("[data-show=" + $(this).attr("data-show-target") + "]").show() : $(this).parents(".hidden-block").find('[data-show="default"]').show()
        }, function () {
            $(this).parents(".hidden-block").find("[data-show]").hide(), $(this).parents(".hidden-block").find('[data-show="default"]').show()
        }), $(document).on("click", ".prod-gal .ms-slide .ms-slide-bgcont img", function () {
            if ($(this).attr("alt").length > 0) {
                var b = [], a = $(this).attr("alt");
                b[0] = {href: a}, $(this).parents(".prod-gal").find(".ms-slide img").each(function (c) {
                    a != $(this).attr("alt") && (b[c + 1] = {href: $(this).attr("alt")})
                }), $.fancybox(b)
            } else {
                $.fancybox({href: $(this).attr("src")})
            }
        }), ae.click(function () {
            ay.removeClass("closed").addClass("open")
        }), ap.click(function () {
            ay.removeClass("open").addClass("closed")
        }), $(".page-content, .subscr-widget, footer").click(function () {
            ay.removeClass("open").addClass("closed")
        }), $(document).ready(function () {
            $(".custom-modal-form").click(function () {
                $("#custom-modal-form").remove();
                var a = $(' <div id="custom-modal-form" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' + $(this).attr("data-head") + '</h4></div><form id="" class="quick-contact ajax-form validate-form QuestionForm" method="post" name="quick-contact"><div class="modal-body"><p>' + $(this).attr("data-body") + '</p><input type="hidden" name="SESSID" value="' + BX.bitrix_sessid() + '" /><input type="hidden" name="custom" value="Y" /><input type="hidden" name="PAGE" value="' + $(this).attr("data-head") + '"><div class="form-group"><label for="qc-name">ФИО</label><input required="required" class="form-control input-sm" type="text" name="FIO" id="qc-name" placeholder="Введите ФИО" value=""></div><div class="form-group"><label for="qc-email">Email</label><input required="required" class="form-control input-sm" type="email" name="EMAIL" id="qc-email" placeholder="Введите email" value=""></div><div class="form-group"><label for="qc-email">Телефон</label><input required="required" class="form-control input-sm" type="text" name="NUMBER" id="qc-email" placeholder="Введите телефон для связи" value=""></div><div class="form-group"><label for="qc-message">Ваш вопрос</label><textarea required="required" class="form-control input-sm" name="MESSAGE" id="qc-message" placeholder="Напишите ваше сообщение"></textarea></div><div class="response-holder"></div></div><div class="modal-footer"><button type="submit" id="send_custom_modal" class="btn btn-primary">Отправить</button><button type="button" class="btn btn-primary btn-primary-inv" data-dismiss="modal">Закрыть</button></div></form></div></div></div>');
                $("body").append(a), $("#custom-modal-form").modal("show"), $("#custom-modal-form form").submit(function () {
                    var b = $(this);
                    return $.post("/ajax/question.php", b.serialize(), function () {
                        b.html("<h3>Ваш вопрос отправлен.</h3><p>ожидайте ответа в ближайшее время.</p>"), $("#custom-modal-form #send_custom_modal").remove()
                    }), !1
                })
            })
        }), $(".QuestionForm").submit(function () {
            var a = $(this);
            return $.post("/ajax/question.php", a.serialize(), function () {
                $("#question-modal-form").is(":visible") ? ($("#question-modal-form .modal-body").html("<h3>Ваш вопрос отправлен.</h3><p>ожидайте ответа в ближайшее время.</p>"), $("#question-modal-form .modal-footer").remove()) : a.html('<h3>Ваш вопрос отправлен.</h3><p class="text-muted">ожидайте ответа в ближайшее время.</p>')
            }), !1
        }), au.validate(), af.validate(), ag.validate(), am.validate(), $("#log-password").focus(function () {
            $(this).attr("type", "password")
        }), av.validate(), aw.validate({
            rules: {
                co_postcode: {required: !0, number: !0},
                co_phone: {required: !0, number: !0}
            }
        }), ad.validate({
            rules: {
                ot_id: {required: !0, number: !0},
                ot_email: {required: !0, email: !0}
            }
        }), aq.validate({
            rules: {
                api_phone: {required: !0, number: !0},
                api_email: {required: !0, email: !0}
            }
        }), $("input, textarea").placeholder(), $(document).on("click", ".cart-dropdown .delete", function () {
            var d = $(this).parent().parent(), c = $(".cart-dropdown .item"), b = parseInt($(".cart-btn a span").text());
            d.hide(300, function () {
                $.when(d.remove()).then(function () {
                    b -= 1, $(".cart-btn a span").text(b), 1 === c.length && $(".cart-dropdown .body").html("<h3>Cart is empty!</h3>")
                })
            })
        }), $(document).on("click", ".shopping-cart .delete i", function () {
            var b = $(this).parent().parent(), a = $(".shopping-cart .item");
            b.hide(300, function () {
                $.when(b.remove()).then(function () {
                    1 === a.length && ($(".shopping-cart .items-list").remove(), $(".shopping-cart .title").text("Shopping cart is empty!"))
                })
            })
        }), $(document).on("click", ".wishlist .delete i", function () {
            var a = $(this).parent().parent();
            a.hide(300, function () {
                $.when(a.remove()).then(function () {
                    1 === $positions.length && ($(".wishlist .items-list").remove(), $(".wishlist .title").text("Wishlist is empty!"))
                })
            })
        }), $(".catalog .submenu .has-submenu").hover(function () {
            var a = $(this).position().top;
            $(this).find(".sub-submenu").height($(this).parents("ul.submenu").find(".offer").height() - 12), $(this).parents("ul.submenu").find(" .offer .col-1 p").hide(), $(this).find(".sub-submenu").css({top: -a + 12 + "px"}).show()
        }, function () {
            $(this).find(".sub-submenu").hide(), $(this).parents("ul.submenu").find(" .offer .col-1 p").show()
        }), $(".catalog .submenu li").hover(function () {
            $(this).attr("data-show") ? ($(this).parents(".submenu").find("li.offer .col-2 > div").hide(), $("#" + $(this).attr("data-show")).show()) : ($(this).parents(".submenu").find("li.offer .col-2 > div").hide(), $(this).parents(".submenu").find("li.offer .col-2 > div:first").show())
        }, function () {
        }), ai.click(function () {
            at.toggleClass("expanded")
        }), ac.click(function (a) {
            $(this).toggleClass("open"), $(this).parent().parent().find(".submenu").toggleClass("open"), a.preventDefault()
        }), ak.validate(), aj.click(function (b) {
            var a = $(this).parent();
            ak.valid() === !0 && a.hide("drop", 300, function () {
                a.next().show("drop", 300)
            }), b.preventDefault()
        }), $("input:not(.nojs)").iCheck({
            checkboxClass: "icheckbox",
            radioClass: "iradio"
        }), $(window).on("load", function () {
            Modernizr.touch && $("body").removeClass("parallax"), $(".parallax").stellar({
                horizontalScrolling: !1,
                responsive: !0
            })
        }), ar.on("mouseover", function () {
            ar.removeClass("active"), $(this).addClass("active");
            var a = $(this).attr("data-tab");
            ax.removeClass("current"), $(".feature-tabs .tabs-pane" + a).addClass("current")
        }), $(".carousel-inner").swipe({
            swipeRight: function (f, d, b, c, g) {
                $(this).parent().carousel("prev")
            }, swipeLeft: function () {
                $(this).parent().carousel("next")
            }, threshold: 0
        }), $(".gallery-grid").lightGallery({speed: 400}), ab.owlCarousel({
            itemsCustom: [[0, 1], [340, 2], [580, 3], [991, 4], [1200, 5]],
            navigation: !0,
            theme: "",
            navigationText: ["", ""]
        }), $("#hero-slider").length > 0) {
        var B = new MasterSlider;
        B.control("arrows"), B.control("bullets"), B.setup("hero-slider", {
            width: 1140,
            height: 455,
            space: 0,
            speed: 18,
            autoplay: !0,
            loop: !0,
            layout: "fullwidth",
            preload: "all",
            view: "basic",
            instantStartLayers: !0
        })
    }
    if ($("#fullscreen-slider").length > 0) {
        var A = new MasterSlider;
        A.control("arrows"), A.control("bullets"), A.setup("fullscreen-slider", {
            width: 1140,
            height: 455,
            space: 0,
            speed: 18,
            autoplay: !0,
            loop: !0,
            layout: "fullscreen",
            fullscreenMargin: 144,
            preload: "all",
            view: "mask",
            instantStartLayers: !0
        })
    }
    if ($("#cat-slider").length > 0) {
        var ao = new MasterSlider;
        ao.control("thumblist", {
            autohide: !1,
            dir: "h",
            type: "tabs",
            width: 164,
            height: 280,
            align: "bottom",
            space: 30,
            margin: 13,
            hideUnder: 400
        }), ao.setup("cat-slider", {
            width: 1050,
            height: 550,
            space: 0,
            speed: 25,
            layout: "fullwidth",
            preload: "all",
            view: "basic",
            instantStartLayers: !0
        })
    }
    Z.click(function () {
        Z.removeClass("active"), $(this).addClass("active")
    }), an.owlCarousel({
        itemsCustom: [[0, 1], [420, 2], [880, 3], [1200, 3]],
        navigation: !1,
        theme: ""
    }), X.click(function (a) {
        a.preventDefault()
    });
    var Q = parseInt($("#minVal").attr("data-min-val")), N = parseInt($("#maxVal").attr("data-max-val")), R = parseInt($("#minVal").val()), P = parseInt($("#maxVal").val());
    $("#price-range").length > 0 && ($("#price-range").noUiSlider({
        range: {min: Q, max: N},
        start: [R, P],
        connect: !0,
        serialization: {
            lower: [$.Link({target: $("#minVal"), format: {decimals: 0}})],
            upper: [$.Link({target: $("#maxVal"), format: {decimals: 0}})]
        }
    }), $("#price-range").on("change.one", function () {
        $(".hidden-submit").hide().find("input").removeClass("hvr-buzz-out"), $(this).parents(".filter-section").find(".hidden-submit").show().find("input").addClass("hvr-buzz-out")
    })), $("#clearPrice").click(function () {
        $("#minVal").val(Q), $("#maxVal").val(N), $("#price-range").val([Q, N], {set: !0})
    }), $(".clearChecks").click(function () {
        $(this).parent().find(".icheckbox").removeClass("checked")
    }), aa.click(function (a) {
        $(this).parent().toggleClass("opened"), $(this).parent().find(".subcategory").toggleClass("open"), a.preventDefault()
    }), ah.click(function () {
        $(".shop-filters").appendTo($("#filterModal .modal-body")), $("#filterModal .modal-body .shop-filters").css("display", "block")
    }), $("#filterModal").on("hide.bs.modal", function () {
        $(".shop-filters").appendTo(".filters-mobile")
    }), $(window).resize(function () {
        $(window).width() > 768 && $("#filterModal").modal("hide")
    }), $("#prod-gal").length > 0 && $(".prod-gal.master-slider").each(function (d, c) {
        var b = new MasterSlider;
        b.control("thumblist", {
            autohide: !1,
            dir: "h",
            align: "bottom",
            width: 137,
            height: 130,
            margin: 15,
            space: 0,
            hideUnder: 400
        }), b.setup($(this).attr("id"), {width: 550, height: 484, speed: 25, preload: !1, loop: !0, view: "fade"})
    }), $(".incr-btn").on("click", function (f) {
        var d = $(this), b = d.parent().find("input").val();
        if ("+" == d.text()) {
            var c = parseFloat(b) + 1
        } else {
            if (b > 1) {
                var c = parseFloat(b) - 1
            } else {
                c = 1
            }
        }
        d.parent().find("input").val(c), f.preventDefault()
    }), az.click(function () {
        Y.removeClass("visible");
        $(this).parent().parent().find("h1").text(), $(this).parent().parent().find(".price").text(), $(this).parent().find("#quantity").val(), parseInt($(".cart-btn a span").text()) + 1;
        Y.addClass("visible")
    }), W.popover({placement: "top", trigger: "hover"}), $(window).load(function () {
        var a = $(".special-offer .tile").height();
        $(".special-offer .offer").css("height", a)
    }), $(window).resize(function () {
        var a = $(".special-offer .tile").height();
        $(".special-offer .offer").css("height", a)
    }), O.click(function (b) {
        $(this).toggleClass("active");
        var a = $(this).attr("href");
        $(a).toggleClass("expanded"), b.preventDefault()
    }), U.click(function () {
        U.parent().removeClass("active"), $(this).parent().addClass("active")
    }), $(window).scroll(function () {
        $(this).scrollTop() > 500 ? K.parent().addClass("scrolled") : K.parent().removeClass("scrolled")
    }), K.click(function () {
        $("html, body").animate({scrollTop: 0}, {duration: 700, easing: "linear"})
    }), J.click(function () {
        $(this).toggleClass("active"), $(this).parent().find(".quick-contact").toggleClass("visible")
    }), $(".page-content, .subscr-widget, footer, header").click(function () {
        J.removeClass("active"), $(".quick-contact").removeClass("visible")
    })
});
var gallery = function (g) {
    var d = g(".gallery-grid"), b = g(".filters"), c = d.find(".shuffle__sizer"), j = function () {
        setTimeout(function () {
            f(), h()
        }, 100), d.shuffle({itemSelector: ".gallery-item", sizer: c})
    }, h = function () {
        var a = b.children();
        a.on("click", function (e) {
            var k = g(this), l = (k.hasClass("active"), k.data("group"));
            g(".filters .active").removeClass("active"), k.addClass("active"), d.shuffle("shuffle", l), e.preventDefault()
        }), a = null
    }, f = function () {
        var e = g.throttle(300, function () {
            d.shuffle("update")
        });
        d.find("img").each(function () {
            var a;
            this.complete && void 0 !== this.naturalWidth || (a = new Image, g(a).on("load", function () {
                g(this).off("load"), e()
            }), a.src = this.src)
        }), setTimeout(function () {
            e()
        }, 500)
    };
    return {init: j}
}(jQuery);
$(document).ready(function () {
    $(".masonry-start").masonry({itemSelector: ".grid-item"});
    $(".fancybox").fancybox({padding: 0, helpers: {thumbs: {width: 150, height: 150}}});
    $(".f-promo-tabs-wrap a").click(function () {
        return $(this).parents("ul").find("li").removeClass("active"), $(this).parent("li").addClass("active"), $($(this).attr("href")).hasClass("active") ? !1 : ($(this).parents(".f-promo-wrap").find(".tab-pane.active").slideUp(400, function () {
                $(this).removeClass("active")
            }), $($(this).attr("href")).length > 0 ? ($(this).parents(".f-promo-wrap").find(".tab-content").append($($(this).attr("href"))), $($(this).attr("href")).slideDown(400, function () {
                    $(this).addClass("active")
                }), !1) : void 0)
    });
    var a = $(".quick-order-form input[name=BUDGET]").slider({range: true});
    a.on("change", function () {
        var ArVal = $(this).val().split(',')
        var LeftVal = parseInt(ArVal[0]);
        var RightVal = parseInt(ArVal[1]);
        if (LeftVal > 500000) {
            LeftVal += 100000;
        }
        if (RightVal > 500000) {
            //RightVal = 2000000;
        }
        a.slider("setValue", [LeftVal,RightVal], true)
    });
    $(".quick-order-form").submit(function () {
        var b = false;
        $(".quick-order-form [required]").each(function () {
            if ($(this).val() < 3) {
                $(this).css({"border-color": "red"});
                b = true
            } else {
                $(this).css({"border-color": ""})
            }
        });
        if (b === false) {
            var c = $(this);
            return $.post("/ajax/question.php?ACTION=QUICK_ORDER", c.serialize(), function () {
                $("#quick-order-form").is(":visible") ? ($("#quick-order-form .modal-body").html("<h3>Заявка отправлена.</h3><p>ожидайте ответа в ближайшее время.</p>"), $("#quick-order-form .modal-footer").remove()) : c.html("<h3>Заявка отправлена.</h3><p>ожидайте ответа в ближайшее время.</p>")
            }), !1
        } else {
            return false
        }
    })



    $(".promo-filter-wrap:not(.show-all)").each(function () {
        promo_filter_set_more($(this),false);
    });
});


function promo_filter_set_more(wrap,animate) {
    var ArrItemsAll = $(wrap).find(".promo-filter-item:not(.hidden)");
    if(ArrItemsAll.length > 8){
        $(wrap).find(".promo-filter-more").show();
        ArrItemsAll.hide();
        if(animate)
            $(wrap).find(".promo-filter-item:not(.hidden):hidden:lt(8)").show().css("opacity","0").animate({opacity:1});
        else
            $(wrap).find(".promo-filter-item:not(.hidden):hidden:lt(8)").show();
    }else{

        if(animate)
            ArrItemsAll.show().css("opacity","0").animate({opacity:1});
        else
            ArrItemsAll.show();

        $(wrap).find(".promo-filter-more").hide();
    }
    var ArrItemsHidden = $(wrap).find(".promo-filter-item:hidden");


}


$(document).on("click",".promo-filter-menu > div",function () {
    var ff_code = $(this).attr("data-ff");
    $(this).parents(".promo-filter-menu").children("div").removeClass("active");
    $(this).addClass("active");
    var wrap = $(this).parents(".promo-filter-wrap");
    $(wrap).find(".promo-filter-item.hidden").removeClass("hidden");

    if(ff_code == 'all'){
        promo_filter_set_more(wrap,true);
    }else{
        $(wrap).find(".promo-filter-item:not('."+ff_code+"')").addClass("hidden");
        promo_filter_set_more(wrap,true);
    }




    return false;
});
$(document).on("click",".promo-filter-more",function () {
    var wrap = $(this).parents(".promo-filter-wrap");
    $(wrap).find(".promo-filter-item:not(.hidden):hidden:lt(4)").show().css("opacity","0").animate({opacity:1});
    if($(wrap).find(".promo-filter-item:not(.hidden):hidden").length < 1){
        $(wrap).find(".promo-filter-more").hide();
    }

    return false;
});





/*new_modal*/
$(document).on("click",".big-modal-close, .cnf-footer-panel,.main-cnf-tab-selector, #scrollTop-btn",function () {
    $(".big-modal").modal("hide");
    $("#jivo-iframe-container").css({"display":""});
});
$(document).on("click",".btn-delivery.search",function () {
    $("#DELIVERY_CITY_SEARCH").html('');
    $.get("/ajax/ajax_delivery.php?search="+$("input[name=DELIVERY_CITY]").val()+"&length="+$("input[name=DELIVERY_CITY]").attr("data-length")+"&weight="+$("input[name=DELIVERY_CITY]").attr("data-weight"),function (data) {
        $("#ResultDelivery").html(data);
    });
});

var DELIVERY_CITY = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

$(document).on("keyup","input[name='DELIVERY_CITY']",function () {
    if($(this).val().length < 2)
        return false;

    DELIVERY_CITY(function(){
        $.get("/ajax/ajax_delivery.php?search_city="+$("input[name=DELIVERY_CITY]").val()+"&length="+$("input[name=DELIVERY_CITY]").attr("data-length")+"&weight="+$("input[name=DELIVERY_CITY]").attr("data-weight"),function (data) {
            $("#DELIVERY_CITY_SEARCH").html(data);
        });

    }, 300 );
});

$(document).on("click","#DELIVERY_CITY_SEARCH > div",function () {
    $("input[name=DELIVERY_CITY]").val($(this).text());
    $("#DELIVERY_CITY_SEARCH").html('');
    $(".btn-delivery.search").click();

});
$(document).on("click",".btn-delivery-open",function () {

    if($(document).scrollTop() < 200)
        $("html, body").animate({scrollTop: 0}, {duration: 700, easing: "linear"});
    if($("body").hasClass("modal-open")){
        if( $("#DeliveryModule:visible").length > 0)
            var $stop_open = true;

        $(".big-modal").modal("hide");
        $("#jivo-iframe-container").css({"display":""});

        if ($stop_open)
            return false;
    }


        $("#jivo-iframe-container").style('display', 'none', 'important');
        $("#DeliveryModule").modal("show");
        $(".modal-backdrop").removeClass("modal-backdrop");
        $("#DeliveryModule img.delivery-map").height($( window ).height()/2);


    return false;
});
$(document).on("click",".compare-module-filter-top > div",function () {
    $("#CompareModule").addClass("no-animation animate");
    $(".compare-module-filter-top > div").removeClass("active");
    $(this).addClass("active");
    $(".compare-category-wrap").hide();
    $(".compare-category-wrap[data-cat='"+$(this).text()+"']").show();
    setTimeout(function () {
        $("#CompareModule").removeClass("animate no-animation");
    },50);
});
$(document).on("click",".compare-module-filter-bottom > div",function () {
    $("#CompareModule").addClass("no-animation animate");
    $(".compare-category-wrap:visible .compare-module-filter-bottom > div").removeClass("active");
    $(this).addClass("active");
    $(".compare-category-wrap:visible .compare-resolution-wrap").hide();

    $(".compare-category-wrap:visible .compare-resolution-wrap[data-res='"+$(this).text()+"']").show();
    setTimeout(function () {
        $("#CompareModule").removeClass("animate no-animation");
    },50);
});
$(document).on("click",".btn-compare-open",function () {


    if($(document).scrollTop() && $(document).scrollTop() < 200)
        $("html, body").animate({scrollTop: 0}, {duration: 700, easing: "linear"});

    $(".compare-module-wrap .active[data-code]").each(function () {
        $(this).removeClass("active").attr("data-val",$(this).attr("data-orgn"));
        $(this).find("span:first").html($(this).find("span:first").html().replace(/ ваш ПК/g, ''));
        $(this).css({"width":(parseFloat($(this).attr("data-orgn"))*100/parseFloat($(this).attr("data-max")))+"%"});
        $(this).find("span:last").html($(this).attr("data-orgn")+" "+$(this).attr("data-pref"));
    });
    var MODIFY = 0;
    $("input.for-config-val:checked").each(function () {
        if($(this).attr("data-cmodify")){
            MODIFY += parseFloat($(this).attr("data-cmodify"));
        }
    });

    $("input.for-config-val:checked").each(function () {
        if($(this).attr("data-code")){
            $(".compare-module-wrap [data-code="+$(this).attr("data-code")+"]").each(function () {
                $(this).addClass("active");
                $(this).find("span:first").html($(this).find("span:first").html()+"  ваш ПК");
                if(MODIFY !== 0){
                    $(this).attr("data-val",parseInt(parseInt($(this).attr("data-orgn"))*MODIFY));
                    $(this).css({"width":(parseInt($(this).attr("data-orgn"))*MODIFY*100/parseInt($(this).attr("data-max")))+"%"});
                    $(this).find("span:last").html(parseInt(parseInt($(this).attr("data-orgn"))*MODIFY)+" "+$(this).attr("data-pref"));
                }
            });
        }
    });


    $(".compare-module-wrap ul.compare-module-list").each(function () {
        var items = $(this).find('li').get();
        items.sort(function(a,b){
            var keyA = parseInt($(a).attr("data-val"));
            var keyB = parseInt($(b).attr("data-val"));

            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
        });
        var ul = $(this);
        $.each(items, function(i, li){
            ul.append(li);
        });
    });


    if($("body").hasClass("modal-open")){
        if( $("#CompareModule:visible").length > 0)
            var $stop_open = true;

        $(".big-modal").modal("hide");
        $("#jivo-iframe-container").css({"display":""});

        if ($stop_open)
            return false;


    }

        $("#jivo-iframe-container").style('display', 'none', 'important');
        $("#CompareModule").addClass("animate").modal("show");
        $(".modal-backdrop").removeClass("modal-backdrop");


    return false;
});

$(document).ready(function () {
    $('#CompareModule').on('shown.bs.modal', function () {
        $("#CompareModule").removeClass("animate");
    });

    $("#send-conf-form-exit .close, #send-conf-form-exit .btn-primary-inv").click(function(){
        $("#send-conf-form-exit, .modal-backdrop").remove();
        $("body").removeClass("modal-open");

    });
    $("#btn-send2mail").click(function(){
        var mail_ch = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim,
            email = $("#send-conf-form-exit [name=email]").val(),
            id = $("#send-conf-form-exit [name=id]").val();

        if ("" == email || !mail_ch.test(email)) {
            $("#send-conf-form-exit [name=email]").css({"background-color":"#d40000"});
        }else{
            $.post('/configurator/'+id+'/',{ACTION:"SEND2MAIL",email:email,SESSID:BX.bitrix_sessid()},function(data){
                var c = jQuery.parseJSON(data);
                $("#send-conf-form-exit h4.modal-title").html(c.DATA.TITLE);
                $("#send-conf-form-exit .modal-body > div").html(c.DATA.MESSAGE);
                $("#send-conf-form-exit .modal-footer").remove();
            });
        }
    });

});
$(document).ready(function () {
    setTimeout(function () {
        $(".open-jivo-chat").addClass("letshake");
    },30000);


    if($("html").hasClass("touch")){
        $("#horizontal-multilevel-menu").prepend($("#mobileLocalMenu").html());
    }


});

$(document).on("click","#horizontal-multilevel-menu a",function () {
    $(this).parent('li').toggleClass("open");
    if($("html").hasClass("touch") && $(this).next("ul").length > 0){
        return false;
    }
});
/*$(document).mouseleave(function(e){
    if($("#send-conf-form-exit").length  > 0) {
        $("#send-conf-form-exit").modal("show");
    }
});*/



$(document).on("click","[data-gtm],[data-buy],[data-buy-conf]",function () {
        var price   = parseInt($(this).attr("data-price"),10).toFixed(2);
        var name    = $(this).attr("data-name");
        var id      = $(this).attr("data-id");
        if (price && name){
            dataLayer.push({
                "event": "addToCart",
                "ecommerce": {
                    "currencyCode": "RUB",
                    "add": {
                        "products": [{
                            "id": id,
                            "name": name,
                            "price": '"'+price+'"',
                            "quantity": 1
                        }]
                    }
                }
            });

        }
});

$(document).on("click","[data-detail]",function () {
    var price   = parseInt($(this).attr("data-price"),10).toFixed(2);
    var name    = $(this).attr("data-name");
    var id      = $(this).attr("data-id");
    if (price && name){
        dataLayer.push({
            "event": "productClick",
            "ecommerce": {
                "currencyCode": "RUB",
                "click": {
                    "products": [{
                        "id": id,
                        "name": name,
                        "price": '"'+price+'"',
                        "quantity": 1
                    }]
                }
            }
        });

    }
});

$(document).on("click","[data-removeCart]",function () {
    var price   = parseInt($(this).attr("data-price"),10).toFixed(2);
    var name    = $(this).attr("data-name");
    var id      = $(this).attr("data-id");
    dataLayer.push({
        "event": "removeFromCart",
        "ecommerce": {
            "currencyCode": "RUB",
            "remove": {
                "products": [{
                    "id": id,
                    "name": name,
                    "price": price,
                    "quantity": 1
                }]
            }
        }
    });
});

$(document).ready(function () {
    var ImpressionProducts = new Array();
    if ($("[data-buy-conf]:first").length > 0){
        UpdateCnfPrice();
        var price   = parseInt($("[data-buy-conf]:first").attr("data-price"),10).toFixed(2);
        var name    = $("[data-buy-conf]:first").attr("data-name");
        var id      = $("[data-buy-conf]:first").attr("data-id");
        if (price && name){
            ImpressionProducts.push({
                "id": id,
                "name": name,
                "price": price,
                "list":window.location.pathname
            });

        }
    }
    $("[data-gtm]").each(function () {
            var price   = parseInt($(this).attr("data-price"),10).toFixed(2);
            var name    = $(this).attr("data-name");
            var id      = $(this).attr("data-id");
            if (price && name){
                ImpressionProducts.push({
                    "id": id,
                    "name": name,
                    "price": price,
                    "list":window.location.pathname
                });

            }


    });
    if (ImpressionProducts.length > 0){
        dataLayer.push({
            "event": "productImpression",
            "ecommerce": {
                "currencyCode": "RUB",
                "impressions": ImpressionProducts
            }
        });
    }

});

