
; /* Start:"a:4:{s:4:"full";s:106:"/bitrix/templates/.default/components/digitalrazor/configurator/digitalrazor_new/script.js?151759840926966";s:6:"source";s:90:"/bitrix/templates/.default/components/digitalrazor/configurator/digitalrazor_new/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
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
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/templates/digitalrazor/js/plugins/owl.carousel.js?148833708924209";s:6:"source";s:57:"/bitrix/templates/digitalrazor/js/plugins/owl.carousel.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;return new a()}}(function(a,e,d,c){var b={init:function(h,f){var g=this;g.$elem=a(f);g.options=a.extend({},a.fn.owlCarousel.options,g.$elem.data(),h);g.userOptions=h;g.loadContent()},loadContent:function(){var g=this;if(typeof g.options.beforeInit==="function"){g.options.beforeInit.apply(this,[g.$elem])}if(typeof g.options.jsonPath==="string"){var f=g.options.jsonPath;function h(k){if(typeof g.options.jsonSuccess==="function"){g.options.jsonSuccess.apply(this,[k])}else{var j="";for(var i in k.owl){j+=k.owl[i]["item"]}g.$elem.html(j)}g.logIn()}a.getJSON(f,h)}else{g.logIn()}},logIn:function(g){var f=this;f.$elem.data("owl-originalStyles",f.$elem.attr("style")).data("owl-originalClasses",f.$elem.attr("class"));f.$elem.css({opacity:0});f.orignalItems=f.options.items;f.checkBrowser();f.wrapperWidth=0;f.checkVisible;f.setVars()},setVars:function(){var f=this;if(f.$elem.children().length===0){return false}f.baseClass();f.eventTypes();f.$userItems=f.$elem.children();f.itemsAmount=f.$userItems.length;f.wrapItems();f.$owlItems=f.$elem.find(".owl-item");f.$owlWrapper=f.$elem.find(".owl-wrapper");f.playDirection="next";f.prevItem=0;f.prevArr=[0];f.currentItem=0;f.customEvents();f.onStartup()},onStartup:function(){var f=this;f.updateItems();f.calculateAll();f.buildControls();f.updateControls();f.response();f.moveEvents();f.stopOnHover();f.owlStatus();if(f.options.transitionStyle!==false){f.transitionTypes(f.options.transitionStyle)}if(f.options.autoPlay===true){f.options.autoPlay=5000}f.play();f.$elem.find(".owl-wrapper").css("display","block");if(!f.$elem.is(":visible")){f.watchVisibility()}else{f.$elem.css("opacity",1)}f.onstartup=false;f.eachMoveUpdate();if(typeof f.options.afterInit==="function"){f.options.afterInit.apply(this,[f.$elem])}},eachMoveUpdate:function(){var f=this;if(f.options.lazyLoad===true){f.lazyLoad()}if(f.options.autoHeight===true){f.autoHeight()}f.onVisibleItems();if(typeof f.options.afterAction==="function"){f.options.afterAction.apply(this,[f.$elem])}},updateVars:function(){var f=this;if(typeof f.options.beforeUpdate==="function"){f.options.beforeUpdate.apply(this,[f.$elem])}f.watchVisibility();f.updateItems();f.calculateAll();f.updatePosition();f.updateControls();f.eachMoveUpdate();if(typeof f.options.afterUpdate==="function"){f.options.afterUpdate.apply(this,[f.$elem])}},reload:function(g){var f=this;setTimeout(function(){f.updateVars()},0)},watchVisibility:function(){var f=this;if(f.$elem.is(":visible")===false){f.$elem.css({opacity:0});clearInterval(f.autoPlayInterval);clearInterval(f.checkVisible)}else{return false}f.checkVisible=setInterval(function(){if(f.$elem.is(":visible")){f.reload();f.$elem.animate({opacity:1},200);clearInterval(f.checkVisible)}},500)},wrapItems:function(){var f=this;f.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');f.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');f.wrapperOuter=f.$elem.find(".owl-wrapper-outer");f.$elem.css("display","block")},baseClass:function(){var g=this;var h=g.$elem.hasClass(g.options.baseClass);var f=g.$elem.hasClass(g.options.theme);if(!h){g.$elem.addClass(g.options.baseClass)}if(!f){g.$elem.addClass(g.options.theme)}},updateItems:function(){var g=this;if(g.options.responsive===false){return false}if(g.options.singleItem===true){g.options.items=g.orignalItems=1;g.options.itemsCustom=false;g.options.itemsDesktop=false;g.options.itemsDesktopSmall=false;g.options.itemsTablet=false;g.options.itemsTabletSmall=false;g.options.itemsMobile=false;return false}var f=a(g.options.responsiveBaseWidth).width();if(f>(g.options.itemsDesktop[0]||g.orignalItems)){g.options.items=g.orignalItems}if(typeof(g.options.itemsCustom)!=="undefined"&&g.options.itemsCustom!==false){g.options.itemsCustom.sort(function(j,i){return j[0]-i[0]});for(var h in g.options.itemsCustom){if(typeof(g.options.itemsCustom[h])!=="undefined"&&g.options.itemsCustom[h][0]<=f){g.options.items=g.options.itemsCustom[h][1]}}}else{if(f<=g.options.itemsDesktop[0]&&g.options.itemsDesktop!==false){g.options.items=g.options.itemsDesktop[1]}if(f<=g.options.itemsDesktopSmall[0]&&g.options.itemsDesktopSmall!==false){g.options.items=g.options.itemsDesktopSmall[1]}if(f<=g.options.itemsTablet[0]&&g.options.itemsTablet!==false){g.options.items=g.options.itemsTablet[1]}if(f<=g.options.itemsTabletSmall[0]&&g.options.itemsTabletSmall!==false){g.options.items=g.options.itemsTabletSmall[1]}if(f<=g.options.itemsMobile[0]&&g.options.itemsMobile!==false){g.options.items=g.options.itemsMobile[1]}}if(g.options.items>g.itemsAmount&&g.options.itemsScaleUp===true){g.options.items=g.itemsAmount}},response:function(){var g=this,f;if(g.options.responsive!==true){return false}var h=a(e).width();g.resizer=function(){if(a(e).width()!==h){if(g.options.autoPlay!==false){clearInterval(g.autoPlayInterval)}clearTimeout(f);f=setTimeout(function(){h=a(e).width();g.updateVars()},g.options.responsiveRefreshRate)}};a(e).resize(g.resizer)},updatePosition:function(){var f=this;f.jumpTo(f.currentItem);if(f.options.autoPlay!==false){f.checkAp()}},appendItemsSizes:function(){var g=this;var h=0;var f=g.itemsAmount-g.options.items;g.$owlItems.each(function(i){var j=a(this);j.css({width:g.itemWidth}).data("owl-item",Number(i));if(i%g.options.items===0||i===f){if(!(i>f)){h+=1}}j.data("owl-roundPages",h)})},appendWrapperSizes:function(){var g=this;var f=0;var f=g.$owlItems.length*g.itemWidth;g.$owlWrapper.css({width:f*2,left:0});g.appendItemsSizes()},calculateAll:function(){var f=this;f.calculateWidth();f.appendWrapperSizes();f.loops();f.max()},calculateWidth:function(){var f=this;f.itemWidth=Math.round(f.$elem.width()/f.options.items)},max:function(){var f=this;var g=((f.itemsAmount*f.itemWidth)-f.options.items*f.itemWidth)*-1;if(f.options.items>f.itemsAmount){f.maximumItem=0;g=0;f.maximumPixels=0}else{f.maximumItem=f.itemsAmount-f.options.items;f.maximumPixels=g}return g},min:function(){return 0},loops:function(){var h=this;h.positionsInArray=[0];h.pagesInArray=[];var g=0;var j=0;for(var i=0;i<h.itemsAmount;i++){j+=h.itemWidth;h.positionsInArray.push(-j);if(h.options.scrollPerPage===true){var k=a(h.$owlItems[i]);var f=k.data("owl-roundPages");if(f!==g){h.pagesInArray[g]=h.positionsInArray[i];g=f}}}},buildControls:function(){var f=this;if(f.options.navigation===true||f.options.pagination===true){f.owlControls=a('<div class="owl-controls"/>').toggleClass("clickable",!f.browser.isTouch).appendTo(f.$elem)}if(f.options.pagination===true){f.buildPagination()}if(f.options.navigation===true){f.buildButtons()}},buildButtons:function(){var g=this;var f=a('<div class="owl-buttons"/>');g.owlControls.append(f);g.buttonPrev=a("<div/>",{"class":"owl-prev",html:g.options.navigationText[0]||""});g.buttonNext=a("<div/>",{"class":"owl-next",html:g.options.navigationText[1]||""});f.append(g.buttonPrev).append(g.buttonNext);f.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(h){h.preventDefault()});f.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(h){h.preventDefault();if(a(this).hasClass("owl-next")){g.next()}else{g.prev()}})},buildPagination:function(){var f=this;f.paginationWrapper=a('<div class="owl-pagination"/>');f.owlControls.append(f.paginationWrapper);f.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(g){g.preventDefault();if(Number(a(this).data("owl-page"))!==f.currentItem){f.goTo(Number(a(this).data("owl-page")),true)}})},updatePagination:function(){var g=this;if(g.options.pagination===false){return false}g.paginationWrapper.html("");var l=0;var f=g.itemsAmount-g.itemsAmount%g.options.items;for(var j=0;j<g.itemsAmount;j++){if(j%g.options.items===0){l+=1;if(f===j){var k=g.itemsAmount-g.options.items}var h=a("<div/>",{"class":"owl-page"});var i=a("<span></span>",{text:g.options.paginationNumbers===true?l:"","class":g.options.paginationNumbers===true?"owl-numbers":""});h.append(i);h.data("owl-page",f===j?k:j);h.data("owl-roundPages",l);g.paginationWrapper.append(h)}}g.checkPagination()},checkPagination:function(){var f=this;if(f.options.pagination===false){return false}f.paginationWrapper.find(".owl-page").each(function(g,h){if(a(this).data("owl-roundPages")===a(f.$owlItems[f.currentItem]).data("owl-roundPages")){f.paginationWrapper.find(".owl-page").removeClass("active");a(this).addClass("active")}})},checkNavigation:function(){var f=this;if(f.options.navigation===false){return false}if(f.options.rewindNav===false){if(f.currentItem===0&&f.maximumItem===0){f.buttonPrev.addClass("disabled");f.buttonNext.addClass("disabled")}else{if(f.currentItem===0&&f.maximumItem!==0){f.buttonPrev.addClass("disabled");f.buttonNext.removeClass("disabled")}else{if(f.currentItem===f.maximumItem){f.buttonPrev.removeClass("disabled");f.buttonNext.addClass("disabled")}else{if(f.currentItem!==0&&f.currentItem!==f.maximumItem){f.buttonPrev.removeClass("disabled");f.buttonNext.removeClass("disabled")}}}}}},updateControls:function(){var f=this;f.updatePagination();f.checkNavigation();if(f.owlControls){if(f.options.items>=f.itemsAmount){f.owlControls.hide()}else{f.owlControls.show()}}},destroyControls:function(){var f=this;if(f.owlControls){f.owlControls.remove()}},next:function(g){var f=this;if(f.isTransition){return false}f.currentItem+=f.options.scrollPerPage===true?f.options.items:1;if(f.currentItem>f.maximumItem+(f.options.scrollPerPage==true?(f.options.items-1):0)){if(f.options.rewindNav===true){f.currentItem=0;g="rewind"}else{f.currentItem=f.maximumItem;return false}}f.goTo(f.currentItem,g)},prev:function(g){var f=this;if(f.isTransition){return false}if(f.options.scrollPerPage===true&&f.currentItem>0&&f.currentItem<f.options.items){f.currentItem=0}else{f.currentItem-=f.options.scrollPerPage===true?f.options.items:1}if(f.currentItem<0){if(f.options.rewindNav===true){f.currentItem=f.maximumItem;g="rewind"}else{f.currentItem=0;return false}}f.goTo(f.currentItem,g)},goTo:function(h,g,j){var f=this;if(f.isTransition){return false}if(typeof f.options.beforeMove==="function"){f.options.beforeMove.apply(this,[f.$elem])}if(h>=f.maximumItem){h=f.maximumItem}else{if(h<=0){h=0}}f.currentItem=f.owl.currentItem=h;if(f.options.transitionStyle!==false&&j!=="drag"&&f.options.items===1&&f.browser.support3d===true){f.swapSpeed(0);if(f.browser.support3d===true){f.transition3d(f.positionsInArray[h])}else{f.css2slide(f.positionsInArray[h],1)}f.afterGo();f.singleItemTransition();return false}var i=f.positionsInArray[h];if(f.browser.support3d===true){f.isCss3Finish=false;if(g===true){f.swapSpeed("paginationSpeed");setTimeout(function(){f.isCss3Finish=true},f.options.paginationSpeed)}else{if(g==="rewind"){f.swapSpeed(f.options.rewindSpeed);setTimeout(function(){f.isCss3Finish=true},f.options.rewindSpeed)}else{f.swapSpeed("slideSpeed");setTimeout(function(){f.isCss3Finish=true},f.options.slideSpeed)}}f.transition3d(i)}else{if(g===true){f.css2slide(i,f.options.paginationSpeed)}else{if(g==="rewind"){f.css2slide(i,f.options.rewindSpeed)}else{f.css2slide(i,f.options.slideSpeed)}}}f.afterGo()},jumpTo:function(f){var g=this;if(typeof g.options.beforeMove==="function"){g.options.beforeMove.apply(this,[g.$elem])}if(f>=g.maximumItem||f===-1){f=g.maximumItem}else{if(f<=0){f=0}}g.swapSpeed(0);if(g.browser.support3d===true){g.transition3d(g.positionsInArray[f])}else{g.css2slide(g.positionsInArray[f],1)}g.currentItem=g.owl.currentItem=f;g.afterGo()},afterGo:function(){var f=this;f.prevArr.push(f.currentItem);f.prevItem=f.owl.prevItem=f.prevArr[f.prevArr.length-2];f.prevArr.shift(0);if(f.prevItem!==f.currentItem){f.checkPagination();f.checkNavigation();f.eachMoveUpdate();if(f.options.autoPlay!==false){f.checkAp()}}if(typeof f.options.afterMove==="function"&&f.prevItem!==f.currentItem){f.options.afterMove.apply(this,[f.$elem])}},stop:function(){var f=this;f.apStatus="stop";clearInterval(f.autoPlayInterval)},checkAp:function(){var f=this;if(f.apStatus!=="stop"){f.play()}},play:function(){var f=this;f.apStatus="play";if(f.options.autoPlay===false){return false}clearInterval(f.autoPlayInterval);f.autoPlayInterval=setInterval(function(){f.next(true)},f.options.autoPlay)},swapSpeed:function(g){var f=this;if(g==="slideSpeed"){f.$owlWrapper.css(f.addCssSpeed(f.options.slideSpeed))}else{if(g==="paginationSpeed"){f.$owlWrapper.css(f.addCssSpeed(f.options.paginationSpeed))}else{if(typeof g!=="string"){f.$owlWrapper.css(f.addCssSpeed(g))}}}},addCssSpeed:function(g){var f=this;return{"-webkit-transition":"all "+g+"ms ease","-moz-transition":"all "+g+"ms ease","-o-transition":"all "+g+"ms ease",transition:"all "+g+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(f){return{"-webkit-transform":"translate3d("+f+"px, 0px, 0px)","-moz-transform":"translate3d("+f+"px, 0px, 0px)","-o-transform":"translate3d("+f+"px, 0px, 0px)","-ms-transform":"translate3d("+f+"px, 0px, 0px)",transform:"translate3d("+f+"px, 0px,0px)"}},transition3d:function(g){var f=this;f.$owlWrapper.css(f.doTranslate(g))},css2move:function(g){var f=this;f.$owlWrapper.css({left:g})},css2slide:function(g,f){var h=this;h.isCssFinish=false;h.$owlWrapper.stop(true,true).animate({left:g},{duration:f||h.options.slideSpeed,complete:function(){h.isCssFinish=true}})},checkBrowser:function(){var g=this;var i="translate3d(0px, 0px, 0px)",l=d.createElement("div");l.style.cssText="  -moz-transform:"+i+"; -ms-transform:"+i+"; -o-transform:"+i+"; -webkit-transform:"+i+"; transform:"+i;var j=/translate3d\(0px, 0px, 0px\)/g,f=l.style.cssText.match(j),h=(f!==null&&f.length===1);var k="ontouchstart" in e||navigator.msMaxTouchPoints;g.browser={support3d:h,isTouch:k}},moveEvents:function(){var f=this;if(f.options.mouseDrag!==false||f.options.touchDrag!==false){f.gestures();f.disabledEvents()}},eventTypes:function(){var g=this;var f=["s","e","x"];g.ev_types={};if(g.options.mouseDrag===true&&g.options.touchDrag===true){f=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]}else{if(g.options.mouseDrag===false&&g.options.touchDrag===true){f=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]}else{if(g.options.mouseDrag===true&&g.options.touchDrag===false){f=["mousedown.owl","mousemove.owl","mouseup.owl"]}}}g.ev_types.start=f[0];g.ev_types.move=f[1];g.ev_types.end=f[2]},disabledEvents:function(){var f=this;f.$elem.on("dragstart.owl",function(g){g.preventDefault()});f.$elem.on("mousedown.disableTextSelect",function(g){return a(g.target).is("input, textarea, select, option")})},gestures:function(){var j=this;var l={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};j.isCssFinish=true;function h(m){if(m.touches){return{x:m.touches[0].pageX,y:m.touches[0].pageY}}else{if(m.pageX!==c){return{x:m.pageX,y:m.pageY}}else{return{x:m.clientX,y:m.clientY}}}}function g(m){if(m==="on"){a(d).on(j.ev_types.move,i);a(d).on(j.ev_types.end,k)}else{if(m==="off"){a(d).off(j.ev_types.move);a(d).off(j.ev_types.end)}}}function f(m){var m=m.originalEvent||m||e.event;if(m.which===3){return false}if(j.itemsAmount<=j.options.items){return}if(j.isCssFinish===false&&!j.options.dragBeforeAnimFinish){return false}if(j.isCss3Finish===false&&!j.options.dragBeforeAnimFinish){return false}if(j.options.autoPlay!==false){clearInterval(j.autoPlayInterval)}if(j.browser.isTouch!==true&&!j.$owlWrapper.hasClass("grabbing")){j.$owlWrapper.addClass("grabbing")}j.newPosX=0;j.newRelativeX=0;a(this).css(j.removeTransition());var n=a(this).position();l.relativePos=n.left;l.offsetX=h(m).x-n.left;l.offsetY=h(m).y-n.top;g("on");l.sliding=false;l.targetElement=m.target||m.srcElement}function i(m){var m=m.originalEvent||m||e.event;j.newPosX=h(m).x-l.offsetX;j.newPosY=h(m).y-l.offsetY;j.newRelativeX=j.newPosX-l.relativePos;if(typeof j.options.startDragging==="function"&&l.dragging!==true&&j.newRelativeX!==0){l.dragging=true;j.options.startDragging.apply(j,[j.$elem])}if(j.newRelativeX>8||j.newRelativeX<-8&&j.browser.isTouch===true){m.preventDefault?m.preventDefault():m.returnValue=false;l.sliding=true}if((j.newPosY>10||j.newPosY<-10)&&l.sliding===false){a(d).off("touchmove.owl")}var n=function(){return j.newRelativeX/5};var o=function(){return j.maximumPixels+j.newRelativeX/5};j.newPosX=Math.max(Math.min(j.newPosX,n()),o());if(j.browser.support3d===true){j.transition3d(j.newPosX)}else{j.css2move(j.newPosX)}}function k(m){var m=m.originalEvent||m||e.event;m.target=m.target||m.srcElement;l.dragging=false;if(j.browser.isTouch!==true){j.$owlWrapper.removeClass("grabbing")}if(j.newRelativeX<0){j.dragDirection=j.owl.dragDirection="left"}else{j.dragDirection=j.owl.dragDirection="right"}if(j.newRelativeX!==0){var p=j.getNewPosition();j.goTo(p,false,"drag");if(l.targetElement===m.target&&j.browser.isTouch!==true){a(m.target).on("click.disable",function(q){q.stopImmediatePropagation();q.stopPropagation();q.preventDefault();a(m.target).off("click.disable")});var o=a._data(m.target,"events")["click"];var n=o.pop();o.splice(0,0,n)}}g("off")}j.$elem.on(j.ev_types.start,".owl-wrapper",f)},getNewPosition:function(){var g=this,f;f=g.closestItem();if(f>g.maximumItem){g.currentItem=g.maximumItem;f=g.maximumItem}else{if(g.newPosX>=0){f=0;g.currentItem=0}}return f},closestItem:function(){var f=this,g=f.options.scrollPerPage===true?f.pagesInArray:f.positionsInArray,h=f.newPosX,i=null;a.each(g,function(k,j){if(h-(f.itemWidth/20)>g[k+1]&&h-(f.itemWidth/20)<j&&f.moveDirection()==="left"){i=j;if(f.options.scrollPerPage===true){f.currentItem=a.inArray(i,f.positionsInArray)}else{f.currentItem=k}}else{if(h+(f.itemWidth/20)<j&&h+(f.itemWidth/20)>(g[k+1]||g[k]-f.itemWidth)&&f.moveDirection()==="right"){if(f.options.scrollPerPage===true){i=g[k+1]||g[g.length-1];f.currentItem=a.inArray(i,f.positionsInArray)}else{i=g[k+1];f.currentItem=k+1}}}});return f.currentItem},moveDirection:function(){var f=this,g;if(f.newRelativeX<0){g="right";f.playDirection="next"}else{g="left";f.playDirection="prev"}return g},customEvents:function(){var f=this;f.$elem.on("owl.next",function(){f.next()});f.$elem.on("owl.prev",function(){f.prev()});f.$elem.on("owl.play",function(h,g){f.options.autoPlay=g;f.play();f.hoverStatus="play"});f.$elem.on("owl.stop",function(){f.stop();f.hoverStatus="stop"});f.$elem.on("owl.goTo",function(g,h){f.goTo(h)});f.$elem.on("owl.jumpTo",function(g,h){f.jumpTo(h)})},stopOnHover:function(){var f=this;if(f.options.stopOnHover===true&&f.browser.isTouch!==true&&f.options.autoPlay!==false){f.$elem.on("mouseover",function(){f.stop()});f.$elem.on("mouseout",function(){if(f.hoverStatus!=="stop"){f.play()}})}},lazyLoad:function(){var h=this;if(h.options.lazyLoad===false){return false}for(var k=0;k<h.itemsAmount;k++){var i=a(h.$owlItems[k]);if(i.data("owl-loaded")==="loaded"){continue}var g=i.data("owl-item"),j=i.find(".lazyOwl"),f;if(typeof j.data("src")!=="string"){i.data("owl-loaded","loaded");continue}if(i.data("owl-loaded")===c){j.hide();i.addClass("loading").data("owl-loaded","checked")}if(h.options.lazyFollow===true){f=g>=h.currentItem}else{f=true}if(f&&g<h.currentItem+h.options.items&&j.length){h.lazyPreload(i,j)}}},lazyPreload:function(l,g){var k=this,j=0;if(g.prop("tagName")==="DIV"){g.css("background-image","url("+g.data("src")+")");var f=true}else{g[0].src=g.data("src")}h();function h(){j+=1;if(k.completeImg(g.get(0))||f===true){i()}else{if(j<=100){setTimeout(h,100)}else{i()}}}function i(){l.data("owl-loaded","loaded").removeClass("loading");g.removeAttr("data-src");k.options.lazyEffect==="fade"?g.fadeIn(400):g.show();if(typeof k.options.afterLazyLoad==="function"){k.options.afterLazyLoad.apply(this,[k.$elem])}}},autoHeight:function(){var f=this;var g=a(f.$owlItems[f.currentItem]).find("img");if(g.get(0)!==c){var j=0;i()}else{h()}function i(){j+=1;if(f.completeImg(g.get(0))){h()}else{if(j<=100){setTimeout(i,100)}else{f.wrapperOuter.css("height","")}}}function h(){var k=a(f.$owlItems[f.currentItem]).height();f.wrapperOuter.css("height",k+"px");if(!f.wrapperOuter.hasClass("autoHeight")){setTimeout(function(){f.wrapperOuter.addClass("autoHeight")},0)}}},completeImg:function(f){if(!f.complete){return false}if(typeof f.naturalWidth!=="undefined"&&f.naturalWidth==0){return false}return true},onVisibleItems:function(){var g=this;if(g.options.addClassActive===true){g.$owlItems.removeClass("active")}g.visibleItems=[];for(var f=g.currentItem;f<g.currentItem+g.options.items;f++){g.visibleItems.push(f);if(g.options.addClassActive===true){a(g.$owlItems[f]).addClass("active")}}g.owl.visibleItems=g.visibleItems},transitionTypes:function(f){var g=this;g.outClass="owl-"+f+"-out";g.inClass="owl-"+f+"-in"},singleItemTransition:function(){var f=this;f.isTransition=true;var i=f.outClass,l=f.inClass,k=f.$owlItems.eq(f.currentItem),j=f.$owlItems.eq(f.prevItem),n=Math.abs(f.positionsInArray[f.currentItem])+f.positionsInArray[f.prevItem],m=Math.abs(f.positionsInArray[f.currentItem])+f.itemWidth/2;f.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":m+"px","-moz-perspective-origin":m+"px","perspective-origin":m+"px"});function g(o,p){return{position:"relative",left:o+"px"}}var h="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";j.css(g(n,10)).addClass(i).on(h,function(){f.endPrev=true;j.off(h);f.clearTransStyle(j,i)});k.addClass(l).on(h,function(){f.endCurrent=true;k.off(h);f.clearTransStyle(k,l)})},clearTransStyle:function(f,h){var g=this;f.css({position:"",left:""}).removeClass(h);if(g.endPrev&&g.endCurrent){g.$owlWrapper.removeClass("owl-origin");g.endPrev=false;g.endCurrent=false;g.isTransition=false}},owlStatus:function(){var f=this;f.owl={userOptions:f.userOptions,baseElement:f.$elem,userItems:f.$userItems,owlItems:f.$owlItems,currentItem:f.currentItem,prevItem:f.prevItem,visibleItems:f.visibleItems,isTouch:f.browser.isTouch,browser:f.browser,dragDirection:f.dragDirection}},clearEvents:function(){var f=this;f.$elem.off(".owl owl mousedown.disableTextSelect");a(d).off(".owl owl");a(e).off("resize",f.resizer)},unWrap:function(){var f=this;if(f.$elem.children().length!==0){f.$owlWrapper.unwrap();f.$userItems.unwrap().unwrap();if(f.owlControls){f.owlControls.remove()}}f.clearEvents();f.$elem.attr("style",f.$elem.data("owl-originalStyles")||"").attr("class",f.$elem.data("owl-originalClasses"))},destroy:function(){var f=this;f.stop();clearInterval(f.checkVisible);f.unWrap();f.$elem.removeData()},reinit:function(g){var f=this;var h=a.extend({},f.userOptions,g);f.unWrap();f.init(h,f.$elem)},addItem:function(g,i){var f=this,h;if(!g){return false}if(f.$elem.children().length===0){f.$elem.append(g);f.setVars();return false}f.unWrap();if(i===c||i===-1){h=-1}else{h=i}if(h>=f.$userItems.length||h===-1){f.$userItems.eq(-1).after(g)}else{f.$userItems.eq(h).before(g)}f.setVars()},removeItem:function(f){var g=this,h;if(g.$elem.children().length===0){return false}if(f===c||f===-1){h=-1}else{h=f}g.unWrap();g.$userItems.eq(h).remove();g.setVars()}};a.fn.owlCarousel=function(f){return this.each(function(){if(a(this).data("owl-init")===true){return false}a(this).data("owl-init",true);var g=Object.create(b);g.init(f,this);a.data(this,"owlCarousel",g)})};a.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}})(jQuery,window,document);
/* End */
;; /* /bitrix/templates/.default/components/digitalrazor/configurator/digitalrazor_new/script.js?151759840926966*/
; /* /bitrix/templates/digitalrazor/js/plugins/owl.carousel.js?148833708924209*/
