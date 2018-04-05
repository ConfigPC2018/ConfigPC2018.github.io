$.Tween.propHooks.number = {
    get: function ( tween ){
        var num = tween.elem.innerHTML.replace(/^[^\d-]+/, '').replace(/\s/,'');
        return  parseFloat(num) || 0;
    },

    set: function( tween ) {
        var opts = tween.options;

        tween.elem.innerHTML = number_format((opts.prefix || '')
            + tween.now.toFixed(opts.fixed || 0)
            + (opts.postfix || ''), 0, " ", " ");
    }
};

function number_format(c, n, e, p) {
    var o, r, q, i, a;
    return isNaN(n = Math.abs(n)) && (n = 2), void 0 == e && (e = ","), void 0 == p && (p = "."), o = parseInt(c = (+c || 0).toFixed(n)) + "", (r = o.length) > 3 ? r %= 3 : r = 0, a = r ? o.substr(0, r) + p : "", q = o.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + p), i = n ? e + Math.abs(c - o).toFixed(n).replace(/-/, 0).slice(2) : "", a + q + i
}
function UpdateCnfPrice(get_price) {
    var d = 0, c = !1;
    $(".cnf-chipset-wrap:visible .hidden-exept").removeClass("hidden-exept");



    $(".cnf-chipset-wrap:visible .for-config-val:checked").each(function () {
        var a = parseFloat($(this).attr("data-price"));
        a = isNaN(a) ? 0 : a;
        d += a * parseFloat($("#for-config-quantity-val-" + $(this).val()).val()), 1 == c;
    });
    d = 500*Math.ceil(d/500);

    if (get_price)
        return d;

    $(".total-price").animate({ number: d },'normal',function () {
        $(".total-price").html(number_format(d, 0, " ", " "))
    });

    $("[data-buy-conf]").attr("data-price",d);
   // $(".total-price").html(number_format(d, 0, " ", " "))

    if($(".cnf-chipset-wrap.simple:visible").length > 0){
        var $summ = 0;
        $(".cnf-chipset-wrap.simple:visible select.for-config-val").each(function () {
            $summ += (parseFloat($(this).children("option[value="+$(this).val()+"]").attr("data-price"))*parseFloat($(".for-config-quantity-val[data-id="+$(this).attr("data-id")+"]:last").val()));
        });
        $(".cnf-chipset-wrap.simple:visible input.for-config-val:checked").each(function () {
            var a = parseFloat($(this).attr("data-price"));
            a = isNaN(a) ? 0 : a, $summ += a * parseFloat($(".cnf-chipset-wrap:visible .for-config-quantity-val[name=q_" + $(this).val() + "]").val()), 1 == c
        });
        if (get_price)
            return $summ;

        $(".total-price").html(number_format($summ, 0, " ", " "));
        $(".total-price").animate({ number: d },'normal',function () {
            $(".total-price").html(number_format($summ, 0, " ", " "))
        });
        //$(".total-price").html(number_format($summ, 0, " ", " "))

    }

}
function FixSliderHeight() {
    var b = 0;
    $(".carousel").each(function () {
        b = 0, $(this).find(".carousel-inner .item").each(function () {
            var f = $(this);
            f.removeAttr("style");
            var a = f.css(["top", "overflow", "height"]);
            f.css({top: 0, height: 0, overflow: "scroll"});
            var e = f.prop("scrollHeight");
            f.css("top", a), $(this).attr("style", ""), e >= b && (b = e)
        }), $(this).find(".item").css("height", b + "px")
    })
}
!function (b) {
    b.each(["show", "hide"], function (f, a) {
        var e = b.fn[a];
        b.fn[a] = function () {
            return this.trigger(a), e.apply(this, arguments)
        }
    })
}(jQuery), $(document).ready(function () {
    $(".note-save-close").click(function () {
       $("#note-save-conf").removeClass("open");
    });

    $("#note-save-conf > .btn").click(function () {
        var email = $("#note-save-conf > input").val();
        var f = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
        $("#note-save-conf > input").css("border-color","");
        if ("" == email || !f.test(email)) {
            $("#note-save-conf > input").css("border-color","#d40000");
            return false;
        }
        $("#loading").fadeIn();
        var FormData = $(".cnf-chipset-wrap:visible .configurator-form").serialize()+"&ACTION=SAVE&number=&email=" + email + "&comment=";

        $.post("", FormData, function (b) {
            var c = jQuery.parseJSON(b);
            $(".save-to-pdf").attr({href: "/upload/pdf/conf" + c.DATA.ID + ".pdf"});
            $("#loading").fadeOut();

           $("#note-save-conf .note-save-conf-title").html(c.DATA.TITLE);
           $("#note-save-conf .note-save-conf-desc").html(c.DATA.MESSAGE);
           $("#note-save-conf input, #note-save-conf .btn").remove();

            $("#loading").fadeOut();
        });


    });


    setTimeout(function () {
        $("#note-save-conf").addClass("open");
        setTimeout(function () {
            if ($("#note-save-conf").val() == "")
                $("#note-save-conf").removeClass("open")
        },60000)
    },60000);
    
    if (window.screen.availWidth < 1200){
        $(".dr-config-view-sel a").removeClass("active");
        $(".dr-config-view-sel a[data-type=simple]").addClass("active");
        if ($(".dr-config-view-sel a[data-type=simple]").attr("data-type") == "simple") {
            $("body").addClass("simple-configurator")
        } else {
            $("body").removeClass("simple-configurator")
        }
    }

    $(document).on("click", ".cnf-var-sub-item", function (b) {
        if ($(this).find(".for-config-val").prop("checked")) {
            $(this).find(".for-config-val").prop("checked", false);
            if ($("#preview_" + $(this).parents(".tab-pane").find("input:checked").val()).length > 0) {
                $(this).parents(".cnf-block-main").find(".cnf-var-detail > div").hide(), $("#preview_" + $(this).parents(".tab-pane").find("input:checked").val()).show()
            }
        } else {
            if ($("#preview_" + $(this).find(".for-config-val").val()).length > 0) {
                $(this).parents(".cnf-block-main").find(".cnf-var-detail > div").hide(), $("#preview_" + $(this).find(".for-config-val").val()).show()
            }
            $(this).find(".for-config-val").prop("checked", true)
        }
        UpdateCnfPrice();
        b.preventDefault()
    });
    UpdateCnfPrice();



    $(".configurator-form input").change(function () {
            //var time = performance.now();
            $(".save-to-pdf").attr("save", "save");
            UpdateCnfPrice()
            //time = performance.now() - time,console.log('Время выполнения = ', time);
    });

        $(document).on("click", ".cnf-var-sub-wrap input:checked + i, .ACCES-TAB input:checked + i", function () {

        var b = $(this).parents(".cnf-var-right").prev(".cnf-var-left").find("input");
        $(b).parents(".cnf-block-main").find(".cnf-var-detail > div").hide(), $("#preview_" + $(b).val()).show();
        return $(this).prev().prop("checked", !1), $(this).prev().removeAttr("checked"), UpdateCnfPrice(), !1
    }), $(".configurator-form input[type=radio]").change(function () {
        if ($("#preview_" + $(this).val()).length > 0) {
            $(this).prop("checked") && ($(this).parents(".cnf-block-main").find(".cnf-var-detail > div").hide(), $(this).parents(".cnf-block-main").find("#preview_" + $(this).val()).show())
        } else {
            if ($("#preview_" + $(this).attr("data-id")).length > 0) {
                $(this).prop("checked") && ($(this).parents(".cnf-block-main").find(".cnf-var-detail > div").hide(), $(this).parents(".cnf-block-main").find("#preview_" + $(this).attr("data-id")).show())
            } else {
                var b = $(this).parents(".cnf-var-right").prev(".cnf-var-left").find("input");
                $(b).parents(".cnf-block-main").find(".cnf-var-detail > div").hide(), $(this).parents(".cnf-block-main").find("#preview_" + $(b).val()).show()
            }
        }
    }), $(document).on("change", "input[name=chipset_selector]", function () {
        $(this).prop("checked") && ($(".cnf-chipset-wrap").hide(), $("div[data-chipset=" + $(this).val() + "]").show(), $(this).parents(".cnf-block-main").find(".cnf-var-detail > div").hide(), $("#preview_" + $(this).val()).show(), UpdateCnfPrice(), construct_dot_menu())
    }), $(".cnf-qnt-selector .minus_qnt").click(function () {
        var d = $(this).parents(".cnf-qnt-selector").find("input"), c = parseInt(d.val(), 10);
        1 >= c ? d.val(1) : d.val(c - 1), UpdateCnfPrice()
    }), $(".cnf-qnt-selector .plus_qnt").click(function () {
        var f = $(this).parents(".cnf-qnt-selector").find("input"), e = parseInt(f.attr("data-max")), a = parseInt(f.val(), 10);
        a >= e ? f.val(e) : f.val(a + 1), UpdateCnfPrice()
    }), $(".cnf-option-label").click(function () {
        return $(this).parents(".cnf-var-right").find(".cnf-var-sub-wrap").slideToggle(), !1
    }), $(".sub-header .menu li a").click(function () {
        setTimeout("UpdateCnfPrice();", 100)
    }), $(".main-cnf-tab-selector > a, .main-cnf-tab-selector .container> a").click(function () {
        $(".cnf-breadcrumbs-wrap").hide();
        $(".main-tab-wrap").hide();
        $(".cnf-breadcrumbs-wrap[data-code='" + $(this).attr("data-lnk") + "']").removeAttr("style");
        "MAIN-TAB" != $(this).attr("data-lnk") ? $(".header-selector-chipset").hide() : $(".header-selector-chipset").show();


            $(".main-cnf-tab-selector > a, .main-cnf-tab-selector .container> a").removeClass("active");
            $(".dotted-menu-wrap > div").removeClass("active");
            $(".dotted-menu-wrap > div[data-lnk='"+$(this).attr("data-lnk")+"']").addClass("active");
            $(this).addClass("active");
        $(".configurator-form > div").hide();
        $(".cnf-chipset-wrap:visible ." + $(this).attr("data-lnk")).show();
        $(window).scrollTop(180);
        construct_dot_menu()

        return false;
    }), $(".cnf-breadcrumbs-wrap > a").click(function () {
        return $("html,body").animate({scrollTop: parseInt($(".cnf-chipset-wrap:visible ." + $(this).attr("data-lnk")).offset().top, 10) - 100}, 400), !1
    }), $(".cnf-next-step > a, .cnf-next-step > div").click(function () {
        $(".main-cnf-tab-selector > a.active + a, .main-cnf-tab-selector .container> a.active + a").click()
    }), $(window).load(function () {
        var b = !1;
        var TopPosition = $(".main-cnf-tab-selector").offset().top;
        $(window).scroll(function () {

            if ($(window).scrollTop() < TopPosition){
                $("body").removeClass("fixed")
            }else if($(window).scrollTop() >= $(".main-cnf-tab-selector").offset().top){
                $("body").addClass("fixed");
            }


            /*$(window).scrollTop() > $(".main-cnf-tab-selector").offset().top -100 ? (b = $(".main-cnf-tab-selector").offset().top -100, $("body").addClass("fixed")) : $(window).scrollTop() <= b && $("body").removeClass("fixed");
            if ($(window).scrollTop() < 190) {
                $("body").removeClass("fixed")
            }*/
        })
    }), $("#scrollUp").click(function () {
        $("html,body").animate({scrollTop: 0}, 300)
    }), $(document).on("click", "#btn-save-config", function () {
        $("#loading").fadeIn();
        var f = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim, e = $('#save-modal-form input[name="email"]');
        if ("" == e.val() || !f.test(e.val())) {
            return $("#save-modal-form input[name='email']").val(e.val()), e.parent().addClass("has-error"), e.prev("label").fadeIn(), !1
        }
        e.parent().removeClass("has-error"), e.prev("label").fadeOut();
        var a = $(".cnf-chipset-wrap:visible .configurator-form").serialize();
        return a += "&ACTION=SAVE&number=" + encodeURIComponent($("#save-modal-form input[name='number']").val()) + "&email=" + $("#save-modal-form input[name='email']").val() + "&comment=" + encodeURIComponent($("#save-modal-form textarea").val()), $.post("", a, function (b) {
            var c = jQuery.parseJSON(b);

            yaCounter31063266.reachGoal('save_config');

            $(".save-to-pdf").attr({href: "/upload/pdf/conf" + c.DATA.ID + ".pdf"});
            $("#loading").fadeOut();
            $(".QuestionOnClose").removeClass('QuestionOnClose');
            c.DATA.ID && ($("#save-modal-form h4.modal-title").html(c.DATA.TITLE), $("#save-modal-form .modal-body > div").html(c.DATA.MESSAGE), $("#save-modal-form .modal-footer").remove())
        }), !0
    }), $(document).on("click", ".order-config", function () {
        $("#loading").fadeIn();
        var b = $(".cnf-chipset-wrap:visible .configurator-form").serialize();
        b += "&ACTION=ADD2BASKET", $.post("", b, function (a) {
        }), $(this).hasClass("CreditBtn") ? setTimeout("document.location.href='/personal/order/?credit=y'", 1000) : ($(this).hasClass("PartPayBtn")?setTimeout("document.location.href='/personal/order/?partpay=y'", 1000):setTimeout("document.location.href='/personal/cart/'", 1000))
    }), $(".add-cart-btn").click(function () {
        return $.get("/ajax/addtobasket.php?ACTION=ADD2BASKET&ID=" + $(this).attr("data-id"), function (b) {
            $.get("/ajax/small-cart.php", function (a) {
                $("#small-cart-wrap").replaceWith(a)
            }), $("#small-cart-wrap-footer .badge").html(parseInt($("#small-cart-wrap-footer .badge").text(), 10) + 1)
        }), $(this).css("background", "#2ba8db").children("span").html("В корзине"), !1
    }), $(".cnf-tocompare").click(function () {
        return $(this).hasClass("active") ? $(this).removeClass("active").html("Сравнить") : $(this).addClass("active").html("Убрать"), $(".compare-footer-cnt").html($(".cnf-tocompare.active").length), !1
    }), $(document).on("click", ".compare-footer-wrap", function () {
        if ($(".cnf-tocompare.active").length > 0) {
            var b = "";
            $(".cnf-tocompare.active").each(function () {
                b += "," + $(this).attr("data-id")
            }), $.post("/ajax/compare.php", {ID: b, CURR: !1}, function (a) {
                $("#CompareModal").modal("show"), $("#CompareModal .modal-body").html(a)
            })
        }
        return !1
    })
});
$(document).ready(function () {
    var b = $(this).scrollTop();
    var a = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() > b) {
            //$(".main-cnf-tab-selector").css("top", "-258px");
            //$(".fixed .cnf-breadcrumbs-wrap").css("top", "0");
            a = true
        } else {
            if (a && $(this).scrollTop() < b) {
                $("#admin-panel-bx").css("display", "none");
               // $(".main-cnf-tab-selector").css("top", "0");
                //$(".fixed .cnf-breadcrumbs-wrap").css("top", "58px");
                a = false
            }
        }
        b = $(this).scrollTop()
    })
});
$(document).on("click", ".save-to-pdf", function () {
    if ($(this).attr("save")) {
        $("#loading").fadeIn();
        var $CUR_BTN = $(this);
        $(this).find(".cnf-butt-text").html("Сохраняем PDF...");
        var a = $(".cnf-chipset-wrap:visible .configurator-form").serialize();
        a += "&ACTION=SAVE&email=empty_pdf@digital-razor.ru";
        $.post("", a, function (b) {
            var c = jQuery.parseJSON(b);


            if ($CUR_BTN.hasClass('pdf-show-promo') && !$CUR_BTN.hasClass('pdf-show-promo-active')){
                $CUR_BTN.addClass("pdf-show-promo-active");
                $("#PromoCode").attr("data-hash",c.DATA.HASH);
                $("#PromoCode").attr("data-id",c.DATA.ID);
                $("#PromoCode").modal('show');
            }


            $(".save-to-pdf").attr({href: "/upload/pdf/conf" + c.DATA.ID + ".pdf"});
            $(".save-to-pdf").removeAttr("save");



            var hiddenIFrameID = 'hiddenDownloader',
                iframe = document.getElementById(hiddenIFrameID);
            if (iframe === null) {
                iframe = document.createElement('iframe');
                iframe.id = hiddenIFrameID;
                iframe.style.display = 'none';
                iframe.onload = function () {
                    $("#loading").fadeOut();
                    $(".save-to-pdf").find(".cnf-butt-text").html("Сохранить в PDF");
                };
                document.body.appendChild(iframe);
            }
            iframe.src = '/upload/pdf/conf' + c.DATA.ID + '.pdf';







        });
        return false
    }
});
$(document).on("click", "#btn-send-promocode", function () {
    var f = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim, e = $('#PromoCode input[name="PROMO_EMAIL"]');
    if ("" == e.val() || !f.test(e.val())) {
        $('#PromoCode input[name="PROMO_EMAIL"]').css({"border-color":"red"});
    }else{
        $('#PromoCode input[name="PROMO_EMAIL"]').css({"border-color":""});
        var a = $(".cnf-chipset-wrap:visible .configurator-form").serialize();
        a += "&ACTION=SAVE_EMAIL&NEW_ID="+$("#PromoCode").attr("data-id")+"&HASH="+$("#PromoCode").attr("data-hash")+"&PROMO=Y&email="+$('#PromoCode input[name=PROMO_EMAIL]').val();
        $.post("", a, function (b) {
            var c = jQuery.parseJSON(b);
            $(".save-to-pdf").removeAttr("save");
        });
        $("#PromoCode").modal('hide');
    }

    return false;
});
$(document).on("click", ".dr-config-view-sel a", function () {
    $(this).parents(".dr-config-view-sel").find("a").removeClass("active");
    $(this).addClass("active");
    if ($(this).attr("data-type") == "simple") {
        $("body").addClass("simple-configurator")
    } else {
        $("body").removeClass("simple-configurator")
    }
});
$(document).on("click", ".cnf-var-wrap", function () {
    $(this).find(".cnf-var-sub-wrap").slideDown()
});
$(document).on("click",function () {
    setTimeout(function () {
        $("img.lazy").lazyload();
    },300);
});
$(document).on("click", ".QuestionOnClose",function () {
    $(".QuestionOnClose").removeClass('QuestionOnClose');
    $('#QuestionOnClose').modal('show');
    return false;
});

$(function() {
    $("img.lazy").lazyload();
});








function jivo_onLoadCallback(){
    $(".open-jivo-chat").fadeIn();
    window.jivo_cstm_widget = document.createElement('div');
    jivo_cstm_widget.setAttribute('id', 'jivo_custom_widget');
    document.body.appendChild(jivo_cstm_widget);

    jivo_cstm_widget.onclick = function(){
        jivo_api.open();
    }

    if (jivo_config.chat_mode == "online"){
        jivo_cstm_widget.setAttribute("class", "jivo_online");
    }

    window.jivo_cstm_widget.style.display='block';
}


function jivo_onOpen(){
    if (jivo_cstm_widget)
        jivo_cstm_widget.style.display = 'none';
}
function jivo_onClose(){
    if (jivo_cstm_widget)
        jivo_cstm_widget.style.display = 'block';
}


$(document).ready(function () {
    $(".startScreenMobile i.fa").click(function () {
       $(".startScreenMobile").removeClass("enable");
       $(".MAIN-TAB .cnf-next-step-block-hidden:lt(3)").show();
    });

    $(".cnf-next-step-block").click(function () {
        $(".cnf-next-step-block-hidden").hide();
        if ($(this).hasClass("prev")){

            if ($(this).parent(".cnf-next-step-block-hidden").prev().prev().prevAll(".cnf-next-step-block-hidden:lt(-3)").length >= 3){
                $(this).parent(".cnf-next-step-block-hidden").prev().prev().prevAll(".cnf-next-step-block-hidden:lt(-3)").show();
            }else if ($(this).parents(".main-tab-wrap").prev(".main-tab-wrap").length > 0){
                console.info(123);
                $(".main-tab-wrap").hide();
                $(this).parents(".main-tab-wrap").prev(".main-tab-wrap").show()
                $(".main-tab-wrap:visible .cnf-next-step-block-hidden").slice(-3).show();

            }else {
            $(".MAIN-TAB .cnf-next-step-block-hidden:lt(3)").show();
            }
        }else {
            if ($(this).parent(".cnf-next-step-block-hidden").nextAll(".cnf-next-step-block-hidden:lt(3)").length >= 3)
                $(this).parent(".cnf-next-step-block-hidden").nextAll(".cnf-next-step-block-hidden:lt(3)").show();
            else {
                $(this).parent(".cnf-next-step-block-hidden").parent().hide().next().show().find(".cnf-next-step-block-hidden:lt(3)").show();
            }
        }
    });
    if ($("html").hasClass("touch")){
        var widget_id = '20XpDYhzqH';var d=document;var w=window;function l(){
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = '//code.jivosite.com/script/widget/'+widget_id;
            var ss = document.getElementsByTagName('script')[0];
            ss.parentNode.insertBefore(s, ss);}
            if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}


    }
});


$(document).on("click",'[data-target=".navbar-responsive-collapse"]',function () {
    if($("body").hasClass("mainMenuOpened"))
        $("body").removeClass("mainMenuOpened");
    else
        $("body").addClass("mainMenuOpened");
});
$(document).on("click",".cnf-need-help",function () {
    $("jdiv .button_1O").click()
});
$(document).on("click","#horizontal-multilevel-menu a[data-code]",function () {
    $(".startScreenMobile").removeClass("enable");
    var CODE = $(this).attr("data-code");
    $("#horizontal-multilevel-menu a[data-code]").removeClass("active");
    $(this).addClass("active");
    $(".main-tab-wrap, .cnf-next-step-block-hidden").hide();
    $(".cnf-head-"+CODE).parents(".cnf-next-step-block-hidden").show().next().show().next().show().parents(".main-tab-wrap").show();
    $(this).parents(".navbar-responsive-collapse").removeClass("in");
    $("body").removeClass("mainMenuOpened");

});


$(document).on("click", ".cnf-series-ff", function () {
    $(this).parent().find(".cnf-series-ff").removeClass("active");
    $(this).addClass("active");
    if ($(this).text() == "ВСЕ"){
        $(this).parent().parent().find("[data-series]").show();
    }else {
        $(this).parent().parent().find("[data-series]").hide();
        $(this).parent().parent().find("[data-series='" + $(this).text() + "']").show();
    }


})
$(document).on("click", "#btn-save-config-mobile", function () {
    $("#loading").fadeIn();
    var f = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim, e = $('#save-modal-form-mobile input[name="email"]');
    if ("" == e.val() || !f.test(e.val())) {
        return $("#save-modal-form-mobile input[name='email']").val(e.val()), e.parent().addClass("has-error"), e.prev("label").fadeIn(), !1
    }
    e.parent().removeClass("has-error"), e.prev("label").fadeOut();
    var a = $(".cnf-chipset-wrap:visible .configurator-form").serialize();
    return a += "&ACTION=SAVE&number=" + encodeURIComponent($("#save-modal-form-mobile input[name='number']").val()) + "&email=" + $("#save-modal-form-mobile input[name='email']").val() + "&comment=" + encodeURIComponent($("#save-modal-form-mobile textarea").val()), $.post("", a, function (b) {
        var c = jQuery.parseJSON(b);

        yaCounter31063266.reachGoal('save_config');

        $(".save-to-pdf").attr({href: "/upload/pdf/conf" + c.DATA.ID + ".pdf"});
        $("#loading").fadeOut();
        $(".QuestionOnClose").removeClass('QuestionOnClose');
        $("#save-modal-form-mobile .modal-body > p").remove();
        c.DATA.ID && ($("#save-modal-form-mobile h4.modal-title").html(c.DATA.TITLE), $("#save-modal-form-mobile .modal-body > div").html(c.DATA.MESSAGE), $("#save-modal-form-mobile.modal-footer").remove())
    }), !0
})




function UpdateConfigTotal(){
    var bodyParams = '';
    $(".cnf-chipset-wrap:visible .main-tab-wrap").each(function($k,$v){
        var MAIN_TITLE = '';
        switch ($k){
            case 0:
                MAIN_TITLE = 'ОСНОВНЫЕ КОМПОНЕНТЫ';
            break;
            case 1:
                MAIN_TITLE = 'МОДДИНГ';
            break;
            case 2:
                MAIN_TITLE = 'СЕРВИС И ГАРАНТИЯ';
            break;
            case 2:
                MAIN_TITLE = 'АКСЕССУАРЫ';
            break;
        }
        $(this).find(".for-config-val:checked").each(function($k,$v){

            var TITLE = $(this).parents(".cnf-block-main").prev().find(".dotted-title > div").text();
            var VALUE = $(this).parents(".cnf-var-wrap").find(".cnf-var-right b").html();

            if(!VALUE)
                VALUE = $(this).parents(".alt-view-wrap").find("i + span").html();


            VALUE = VALUE.replace(/(<([^>]+)>.*<\/span>)/ig,'');


            if(VALUE.trim() != 'Не выбрано') {
                if (MAIN_TITLE) {
                    bodyParams += "<div>" + MAIN_TITLE + "</div>";
                    MAIN_TITLE = false;
                }
                bodyParams += '<p>' + TITLE + ': ' + VALUE + '  x ' + $("#for-config-quantity-val-" + $(this).val()).val() + '</p>';
            }
        });
    });



    $("#fs-conf-body").html(bodyParams);

    var price = UpdateCnfPrice(true);

    $("#fs-conf-body").parents(".fs-cart").find(".credit .total-price-credit").html(number_format((price+price*0.5)/24, 0, " ", " "));
    $("#fs-conf-body").parents(".fs-cart").find(".partpay .total-price-part").html(number_format((price)/(parseInt($("#fs-conf-body").parents(".fs-cart").find(".partpay .total-price").attr("data-plan"))),0, " "," "));
}

$(document).on("click",".conf-smart-save-btn",function () {
    $("#loading").fadeIn();
    var f = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim, e = $('.conf-smart-save input[name="email"]');
    if ("" == e.val() || !f.test(e.val())) {
        return $(".conf-smart-save input[name='email']").val(e.val()), e.parent().addClass("has-error"), e.prev("label").fadeIn(), !1
    }
    e.parent().removeClass("has-error"), e.prev("label").fadeOut();
    var a = $(".cnf-chipset-wrap:visible .configurator-form").serialize();
    return a += "&ACTION=SAVE&number=" + encodeURIComponent($(".conf-smart-save input[name='number']").val()) + "&email=" + $(".conf-smart-save input[name='email']").val() + "&comment=" + encodeURIComponent($(".conf-smart-save textarea").val()), $.post("", a, function (b) {
        var c = jQuery.parseJSON(b);

        yaCounter31063266.reachGoal('save_config');

        $(".save-to-pdf").attr({href: "/upload/pdf/conf" + c.DATA.ID + ".pdf"});
        $("#loading").fadeOut();
        c.DATA.ID && ($(".conf-smart-save").html(c.DATA.MESSAGE))
    }), !0
});
$(document).on("click",".dotted-menu-wrap > div",function () {
    if ($(this).attr("data-lnk") == "MAKE-ORDER"){
        $(".dotted-menu-wrap > div").removeClass("active");
        $(this).addClass("active");
        $(".main-tab-wrap").hide();

        UpdateConfigTotal();

        $(".cnf-chipset-wrap:visible .MAKE-ORDER").show();
    }else{
        $(".main-cnf-tab-selector a[data-lnk=" + $(this).attr("data-lnk") + "]:visible").click();
    }
});


$(document).ready(function () {
   if(location.hash == "#preorder"){
        $("[data-lnk=MAKE-ORDER]").click();
   }
});