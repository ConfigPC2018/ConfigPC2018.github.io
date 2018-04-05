"use strict";
if (typeof veTagData == "undefined") var veTagData = function() {
    var t, n = document.getElementById("veConnect"),
        i = {
            journeycode: "1BB7FA50-7C22-4253-9982-BD6A0EC6A763",
            captureConfigUrl: "drs2.veinteractive.com/CaptureConfigService.asmx/CaptureConfig",
            appsServicesUrl: "appsapi.veinteractive.com",
            veHostDomain: "//config1.veinteractive.com",
            promoteLanding: "uk.findrz.com",
            evaDomain: "cookiee1.veinteractive.com",
            vePlatformHostDomain: "//veplatform.veinteractive.com",
            panelSettingsDomain: "",
            captureConfig: {
                CaptureUrl: "rcs.veinteractive.com/CaptureConfigService.asmx/CaptureConfig",
                customerid: 49507,
                datareceiverurl: "drs2.veinteractive.com/DataReceiverService.asmx/DataReceiver",
                Forms: [{
                    ChatAgentId: null,
                    EmailOptOut: !1,
                    FormFields: [],
                    FormId: 125190,
                    FormTypeId: 1,
                    FormURLs: ["digital-razor.ru/"],
                    IdentifyAbandonmentOr: !0,
                    NumberIdentifiedFields: 0,
                    Name: null,
                    OptOuts: [],
                    Paremeter: []
                }, {
                    ChatAgentId: null,
                    EmailOptOut: !1,
                    FormFields: [{
                        ClientFieldName: ".form-group input:visible:not(:last):last",
                        DomEvent: "DynamicActivity",
                        FieldTypeName: "Raw",
                        FormMappingId: 392261,
                        HtmlAttributeTag: "Value",
                        HtmlType: ":text",
                        IdentifyAbandonment: !1,
                        isEmail: !0,
                        FormMappingTypeId: 2,
                        HtmlPath: null,
                        FormMappingTypeName: "Mail"
                    }, {
                        ClientFieldName: ".form-group input:visible:odd:first",
                        DomEvent: "OnChange",
                        FieldTypeName: "Raw",
                        FormMappingId: 392262,
                        HtmlAttributeTag: "Value",
                        HtmlType: ":text",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 1,
                        HtmlPath: null,
                        FormMappingTypeName: "Text"
                    }],
                    FormId: 127417,
                    FormTypeId: 1,
                    FormURLs: ["digital-razor.ru/auth/*"],
                    IdentifyAbandonmentOr: !0,
                    NumberIdentifiedFields: 0,
                    Name: null,
                    OptOuts: [],
                    Paremeter: []
                }, {
                    ChatAgentId: null,
                    EmailOptOut: !1,
                    FormFields: [{
                        ClientFieldName: ".ms-slide.ms-sl-selected img",
                        DomEvent: "OnLoad",
                        FieldTypeName: "Raw",
                        FormMappingId: 392310,
                        HtmlAttributeTag: "src",
                        HtmlType: "img",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 13,
                        HtmlPath: "",
                        FormMappingTypeName: "Small Image Url"
                    }, {
                        ClientFieldName: ".col-lg-6 h1",
                        DomEvent: "OnLoad",
                        FieldTypeName: "Raw",
                        FormMappingId: 392311,
                        HtmlAttributeTag: "Value",
                        HtmlType: "h1",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 11,
                        HtmlPath: null,
                        FormMappingTypeName: "Product Name"
                    }, {
                        ClientFieldName: ".col-lg-6 h1",
                        DomEvent: "OnLoad",
                        FieldTypeName: "Raw",
                        FormMappingId: 392317,
                        HtmlAttributeTag: "Value",
                        HtmlType: "h1",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 12,
                        HtmlPath: "",
                        FormMappingTypeName: "Product Description"
                    }, {
                        ClientFieldName: ".col-lg-6 .price",
                        DomEvent: "OnLoad",
                        FieldTypeName: "Raw",
                        FormMappingId: 392318,
                        HtmlAttributeTag: "Value",
                        HtmlType: "div",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 16,
                        HtmlPath: "",
                        FormMappingTypeName: "Price & Currency"
                    }, {
                        ClientFieldName: ".col-lg-6 h1",
                        DomEvent: "OnLoad",
                        FieldTypeName: "Raw",
                        FormMappingId: 392319,
                        HtmlAttributeTag: "Value",
                        HtmlType: "h1",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 10,
                        HtmlPath: null,
                        FormMappingTypeName: "Product Code"
                    }, {
                        ClientFieldName: ".breadcrumb li:odd:last",
                        DomEvent: "OnLoad",
                        FieldTypeName: "Raw",
                        FormMappingId: 392320,
                        HtmlAttributeTag: "Value",
                        HtmlType: "li",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 18,
                        HtmlPath: null,
                        FormMappingTypeName: "Product Category"
                    }, {
                        ClientFieldName: "window.location.href",
                        DomEvent: "OnLoad",
                        FieldTypeName: "Raw",
                        FormMappingId: 392321,
                        HtmlAttributeTag: "href",
                        HtmlType: "a",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 29,
                        HtmlPath: null,
                        FormMappingTypeName: "Product Url"
                    }, {
                        ClientFieldName: ".form-group input:first",
                        DomEvent: "DynamicActivity",
                        FieldTypeName: "Raw",
                        FormMappingId: 392322,
                        HtmlAttributeTag: "Value",
                        HtmlType: ":text",
                        IdentifyAbandonment: !1,
                        isEmail: !0,
                        FormMappingTypeId: 2,
                        HtmlPath: "",
                        FormMappingTypeName: "Mail"
                    }],
                    FormId: 127424,
                    FormTypeId: 4,
                    FormURLs: ["digital-razor.ru/*/", "digital-razor.ru/*/*/", "digital-razor.ru/*/*/*/", "digital-razor.ru/*/*/*/*", "digital-razor.ru/about/", "digital-razor.ru/catalog/*/*/*/", "digital-razor.ru"],
                    IdentifyAbandonmentOr: !0,
                    NumberIdentifiedFields: 0,
                    Name: null,
                    OptOuts: [],
                    Paremeter: []
                }, {
                    ChatAgentId: null,
                    EmailOptOut: !1,
                    FormFields: [{
                        ClientFieldName: ".items-list .name a",
                        DomEvent: "OnLoad",
                        FieldTypeName: "RawSeries",
                        FormMappingId: 392375,
                        HtmlAttributeTag: "Value",
                        HtmlType: "a",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 11,
                        HtmlPath: "",
                        FormMappingTypeName: "Product Name"
                    }, {
                        ClientFieldName: ".items-list img",
                        DomEvent: "OnLoad",
                        FieldTypeName: "RawSeries",
                        FormMappingId: 392376,
                        HtmlAttributeTag: "src",
                        HtmlType: "img",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 13,
                        HtmlPath: "",
                        FormMappingTypeName: "Small Image Url"
                    }, {
                        ClientFieldName: ".items-list .name a",
                        DomEvent: "OnLoad",
                        FieldTypeName: "RawSeries",
                        FormMappingId: 392377,
                        HtmlAttributeTag: "href",
                        HtmlType: "a",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 29,
                        HtmlPath: "",
                        FormMappingTypeName: "Product Url"
                    }, {
                        ClientFieldName: ".price nobr",
                        DomEvent: "OnLoad",
                        FieldTypeName: "RawSeries",
                        FormMappingId: 392378,
                        HtmlAttributeTag: "Value",
                        HtmlType: "div",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 16,
                        HtmlPath: "",
                        FormMappingTypeName: "Price & Currency"
                    }, {
                        ClientFieldName: ".qnt-count input:visible",
                        DomEvent: "OnloadOnChange",
                        FieldTypeName: "RawSeries",
                        FormMappingId: 392379,
                        HtmlAttributeTag: "Value",
                        HtmlType: ":text",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 1,
                        HtmlPath: "",
                        FormMappingTypeName: "Text"
                    }, {
                        ClientFieldName: "#coupon",
                        DomEvent: "OnChange",
                        FieldTypeName: "Raw",
                        FormMappingId: 392380,
                        HtmlAttributeTag: "Value",
                        HtmlType: ":text",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 7,
                        HtmlPath: "",
                        FormMappingTypeName: "Promo Code"
                    }, {
                        ClientFieldName: ".fs-cart-footer h4:last",
                        DomEvent: "OnLoad",
                        FieldTypeName: "Raw",
                        FormMappingId: 392382,
                        HtmlAttributeTag: "Value",
                        HtmlType: "h4",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 8,
                        HtmlPath: "",
                        FormMappingTypeName: "Total Basket"
                    }],
                    FormId: 127445,
                    FormTypeId: 1,
                    FormURLs: ["digital-razor.ru/personal/cart/"],
                    IdentifyAbandonmentOr: !0,
                    NumberIdentifiedFields: 0,
                    Name: null,
                    OptOuts: [],
                    Paremeter: []
                }, {
                    ChatAgentId: null,
                    EmailOptOut: !1,
                    FormFields: [{
                        ClientFieldName: "#ORDER_PROP_1",
                        DomEvent: "OnChange",
                        FieldTypeName: "Raw",
                        FormMappingId: 392433,
                        HtmlAttributeTag: "Value",
                        HtmlType: ":text",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 1,
                        HtmlPath: null,
                        FormMappingTypeName: "Text"
                    }, {
                        ClientFieldName: "#ORDER_PROP_2",
                        DomEvent: "DynamicActivity",
                        FieldTypeName: "Raw",
                        FormMappingId: 392434,
                        HtmlAttributeTag: "Value",
                        HtmlType: ":text",
                        IdentifyAbandonment: !1,
                        isEmail: !0,
                        FormMappingTypeId: 2,
                        HtmlPath: null,
                        FormMappingTypeName: "Mail"
                    }, {
                        ClientFieldName: ".bx_ordercart_order_sum .custom_t2",
                        DomEvent: "DynamicActivity",
                        FieldTypeName: "Raw",
                        FormMappingId: 392436,
                        HtmlAttributeTag: "Value",
                        HtmlType: "td",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 8,
                        HtmlPath: null,
                        FormMappingTypeName: "Total Basket"
                    }, {
                        ClientFieldName: ".col-sm-10 #ORDER_PROP_13",
                        DomEvent: "DynamicActivity",
                        FieldTypeName: "Raw",
                        FormMappingId: 402101,
                        HtmlAttributeTag: "Value",
                        HtmlType: ":text",
                        IdentifyAbandonment: !1,
                        isEmail: !0,
                        FormMappingTypeId: 2,
                        HtmlPath: null,
                        FormMappingTypeName: "Mail"
                    }],
                    FormId: 127449,
                    FormTypeId: 1,
                    FormURLs: ["digital-razor.ru/personal/order/"],
                    IdentifyAbandonmentOr: !0,
                    NumberIdentifiedFields: 0,
                    Name: null,
                    OptOuts: [],
                    Paremeter: []
                }, {
                    ChatAgentId: null,
                    EmailOptOut: !1,
                    FormFields: [{
                        ClientFieldName: ".sale_order_full_table td b",
                        DomEvent: "DynamicActivity",
                        FieldTypeName: "Raw",
                        FormMappingId: 402106,
                        HtmlAttributeTag: "Value",
                        HtmlType: "td",
                        IdentifyAbandonment: !1,
                        isEmail: !1,
                        FormMappingTypeId: 9,
                        HtmlPath: null,
                        FormMappingTypeName: "Order Number"
                    }],
                    FormId: 128268,
                    FormTypeId: 2,
                    FormURLs: ["digital-razor.ru/personal/order/"],
                    IdentifyAbandonmentOr: !0,
                    NumberIdentifiedFields: 0,
                    Name: null,
                    OptOuts: [],
                    Paremeter: [{
                        ParameterValue: "*",
                        Paremeter: "ORDER_ID"
                    }]
                }],
                IdentifyAbandonmentOr: !0,
                JourneyCode: "1BB7FA50-7C22-4253-9982-BD6A0EC6A763",
                JourneyId: 48121,
                JourneyTimeOut: 1800,
                NumberIdentifiedFields: 0,
                OptOutField: 0
            },
            settings: {
                domainsToIgnore: ["digital-razor.ru"],
                elementsStoppingAppsOnClick: [],
                autocompleteInputsHandler: [],
                keywordsRegExp: [{
                    source: "Example",
                    regexp: / /,
                    notSearchEngine: !1,
                    replaceCharactersBySpace: "-",
                    storeSearchTerm: !1,
                    showNoProducts: !1,
                    ignoreCloses: !1
                }],
                cookies: {
                    enabled: !0,
                    timeToLive: 60
                },
                veAds: {
                    config: {
                        timeStamp: "Mon Mar 20 2017 10:37:25 GMT+0000 (GMT Standard Time)",
                        version: "2.0.0",
                        uuid: "gvi",
                        avoidDOM: !1,
                        storageAcrossProtocols: !0
                    },
                    pages: [{
                        id: 1,
                        name: "product",
                        type: "product",
                        urls: ["digital-razor.ru/catalog/*/*/*/"],
                        dynamicIdentifiers: []
                    }, {
                        id: 2,
                        name: "basket",
                        type: "basket",
                        urls: ["digital-razor.ru/personal/cart/"],
                        dynamicIdentifiers: []
                    }, {
                        id: 3,
                        name: "conversion",
                        type: "conversion",
                        urls: ["digital-razor.ru/personal/order(/)", "digital-razor.ru/personal/order/*"],
                        dynamicIdentifiers: [{
                            selector: ".dotted-title div",
                            criteria: "contains",
                            values: ["Ваш заказ сформирован"]
                        }]
                    }, {
                        id: 4,
                        name: "home",
                        type: "home",
                        urls: ["digital-razor.ru(/)"],
                        dynamicIdentifiers: []
                    }],
                    dataElements: [{
                        id: 1,
                        name: "order value",
                        type: "orderVal",
                        fallback: "0.00",
                        mask: "currency",
                        mapping: {},
                        regex: {
                            include: [""],
                            exclude: [""]
                        },
                        capture: {
                            type: "selector",
                            mappingCriteria: "contains",
                            element: ".fs-cart-footer h4",
                            keepChecking: !1,
                            useMappings: !1
                        },
                        pages: [2]
                    }, {
                        id: 2,
                        name: "currency",
                        type: "currency",
                        fallback: "RUB",
                        mask: "nothing",
                        mapping: {},
                        regex: {
                            include: [""],
                            exclude: [""]
                        },
                        capture: {
                            type: "selector",
                            mappingCriteria: "contains",
                            element: "null",
                            keepChecking: !1,
                            useMappings: !1
                        },
                        pages: [2]
                    }, {
                        id: 3,
                        name: "order id",
                        type: "orderId",
                        fallback: "__timestamp__",
                        mask: "nothing",
                        mapping: {},
                        regex: {
                            include: [""],
                            exclude: ["№"]
                        },
                        capture: {
                            type: "selector",
                            mappingCriteria: "contains",
                            element: ".sale_order_full_table b",
                            keepChecking: !1,
                            useMappings: !1
                        },
                        pages: [3]
                    }, {
                        id: 4,
                        name: "product id",
                        type: "productId",
                        fallback: "__timestamp__",
                        mask: "nothing",
                        mapping: {},
                        regex: {
                            include: [""],
                            exclude: [""]
                        },
                        capture: {
                            type: "selector",
                            mappingCriteria: "contains",
                            element: ".col-lg-6 h1",
                            keepChecking: !1,
                            useMappings: !1
                        },
                        pages: [1]
                    }],
                    pixels: [{
                        id: 1,
                        name: "Main Products Integration",
                        type: "ve",
                        config: {
                            journeyCode: "m7zooBbxVs4H1TkqKSTL"
                        },
                        overrides: {}
                    }, {
                        id: 2,
                        name: "AdForm Pixels for Pages",
                        type: "adForm",
                        config: {
                            pmId: "855846"
                        },
                        overrides: {}
                    }]
                }
            },
            customEvents: {
                onPageLoad: function() {
                    window.veTagData.customEvents.veAds()
                },
                veAds: function() {
                    ! function n(t, i, r) {
                        function u(f, o) {
                            var h, c, s;
                            if (!i[f]) {
                                if (!t[f]) {
                                    if (h = "function" == typeof require && require, !o && h) return h(f, !0);
                                    if (e) return e(f, !0);
                                    c = new Error("Cannot find module '" + f + "'");
                                    throw c.code = "MODULE_NOT_FOUND", c;
                                }
                                s = i[f] = {
                                    exports: {}
                                };
                                t[f][0].call(s.exports, function(n) {
                                    var i = t[f][1][n];
                                    return u(i ? i : n)
                                }, s, s.exports, n, t, i, r)
                            }
                            return i[f].exports
                        }
                        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++) u(r[f]);
                        return u
                    }({
                        1: [function(n, t) {
                            var i;
                            n("./utils").type;
                            t.exports = i = {
                                always: function() {
                                    return !0
                                },
                                equal: function(n, t, i) {
                                    return n = String(n), t = String(t), i || (n = n.toLowerCase(), t = t.toLowerCase()), n === t
                                },
                                notEqual: function(n, t, r) {
                                    return !i.equal(n, t, r)
                                },
                                contains: function(n, t, i) {
                                    return n = String(n), t = String(t), i || (n = n.toLowerCase(), t = t.toLowerCase()), t.indexOf(n) > -1
                                },
                                notContains: function(n, t, r) {
                                    return !i.contains(n, t, r)
                                }
                            }
                        }, {
                            "./utils": 8
                        }],
                        2: [function(n, t) {
                            t.exports = function(n) {
                                return "true" === window.localStorage.getItem("VeAdsConsoleLogEnabled") ? function(t) {
                                    console.log((n ? n + " : " : "") + (t || ""))
                                } : function() {}
                            }
                        }, {}],
                        3: [function(n, t) {
                            function u(n) {
                                return f.type(n, "jquery") || (n = i(n)), n.length ? (n = n.first(), n.val() ? i.trim(n.val()) : i.trim(n.text())) : ""
                            }

                            function h(n) {
                                var t = [];
                                return n.each(function(n, r) {
                                    var f = u(i(r));
                                    t.push(i.trim(f))
                                }), t
                            }

                            function o(n) {
                                var t, r, i, u;
                                return t = 0, r = s.ELEMENT_MS, i = s.ELEMENT_MAX_RETRIES, u = setInterval(function() {
                                    var r = n();
                                    t++;
                                    (r || i && t >= i) && clearInterval(u)
                                }, r)
                            }

                            function r(n) {
                                return i(n)
                            }

                            function c(n) {
                                var t = r(n),
                                    u = i.Deferred();
                                return t.length && u.resolve(t), o(function() {
                                    return t = r(n), !!t.length && (u.resolve(t), !0)
                                }), u.promise()
                            }

                            function l(n) {
                                var t = {
                                        complete: !1,
                                        value: null,
                                        fail: !1
                                    },
                                    c = null,
                                    s = r(n),
                                    h = i.Deferred();
                                return t.remove = function(n) {
                                    n ? t.complete = !0 : t.fail = !0
                                }, s.length && (t.value = u(s), h.notify(s, t)), t.complete ? (h.resolve(s), !0) : t.fail ? (h.reject(), !0) : (e("#progressCheck - calling interval", t), o(function() {
                                    return s = r(n), t.value = u(s), f.type(t.value, "nan") || f.type(t.value, "undefined") || f.type(t.value, "null") || c === t.value || (c = t.value, h.notify(s, t)), t.complete ? (h.resolve(s), e("#progressCheck - success", t), !0) : t.fail ? (h.reject(), e("#progressCheck - rejection", t), !0) : void 0
                                }), h.promise())
                            }
                            var a, s = n("../settings"),
                                i = n("./jq"),
                                f = n("./utils"),
                                e = n("./debug")("ve:elements");
                            t.exports = a = {
                                instantCheck: r,
                                dynamicCheck: c,
                                progressCheck: l,
                                obtainValue: u,
                                obtainValues: h
                            }
                        }, {
                            "../settings": 30,
                            "./debug": 2,
                            "./jq": 5,
                            "./utils": 8
                        }],
                        4: [function(n, t) {
                            function i(n) {
                                if (n) return r(n)
                            }

                            function r(n) {
                                for (var t in i.prototype) n[t] = i.prototype[t];
                                return n
                            }
                            t.exports = i;
                            i.prototype.on = i.prototype.addEventListener = function(n, t) {
                                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(t), this
                            };
                            i.prototype.once = function(n, t) {
                                function i() {
                                    this.off(n, i);
                                    t.apply(this, arguments)
                                }
                                return i.fn = t, this.on(n, i), this
                            };
                            i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(n, t) {
                                var i, u, r;
                                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                                if (i = this._callbacks["$" + n], !i) return this;
                                if (1 == arguments.length) return delete this._callbacks["$" + n], this;
                                for (r = 0; r < i.length; r++)
                                    if (u = i[r], u === t || u.fn === t) {
                                        i.splice(r, 1);
                                        break
                                    }
                                return this
                            };
                            i.prototype.emit = function(n) {
                                var r, t, i, u;
                                if (this._callbacks = this._callbacks || {}, r = [].slice.call(arguments, 1), t = this._callbacks["$" + n], t)
                                    for (t = t.slice(0), i = 0, u = t.length; i < u; ++i) t[i].apply(this, r);
                                return this
                            };
                            i.prototype.listeners = function(n) {
                                return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || []
                            };
                            i.prototype.hasListeners = function(n) {
                                return !!this.listeners(n).length
                            }
                        }, {}],
                        5: [function(n, t) {
                            t.exports = window.VEjQuery || window.$
                        }, {}],
                        6: [function(n, t) {
                            var i = n("./utils").type,
                                r = /[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/,
                                u = {
                                    number: function(n) {
                                        var t = String(n).match(/([\d]{3,25})/);
                                        return i(t, "array") ? t[1] : ""
                                    },
                                    alphanumeric: function(n) {
                                        var t = String(n).match(/([\dA-Za-z]{4,100})/);
                                        return i(t, "array") ? t[1] : ""
                                    },
                                    currency: function(n) {
                                        return String(n).replace(/[^0-9\.,]/g, "")
                                    },
                                    symbol: function(n) {
                                        var t = String(n).match(r);
                                        return i(t, "array") ? t[0] : ""
                                    },
                                    nothing: function(n) {
                                        return String(n)
                                    }
                                };
                            t.exports = u
                        }, {
                            "./utils": 8
                        }],
                        7: [function(n, t) {
                            function r(n) {
                                this.pageURL = n || this.generatePageURL();
                                this.searchObject = this.generateSearchObject()
                            }

                            function h(n) {
                                if ("" === n || "?" === n) return {};
                                for (var r, u = {}, i = n.replace(/^\?/, "").split("&"), t = 0; t < i.length; t++) r = i[t].split("="), u[r[0]] = r[1];
                                return u
                            }

                            function o(n) {
                                try {
                                    var t = (n + "").toLowerCase();
                                    return t = t.replace(/http[s]?:\/\//, ""), t = t.replace("#", "?"), t = t.replace(";", "?"), "www." === t.substr(0, 4) && (t = t.replace("www.", "")), t
                                } catch (i) {
                                    return ""
                                }
                            }
                            var f, e = n("./utils"),
                                u = n("./jq"),
                                i = "__MATCH__",
                                c = /\((.*?)\)/g,
                                l = /(\(\?)?:\w+/g,
                                a = /[*]{1}/g,
                                v = /[*]{2}/g,
                                s = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                            r.prototype._getPageURL = function() {
                                return this.locationObj ? this.locationObj : this.locationObj = e.parseURL(window.location.href)
                            };
                            r.prototype.generateSearchObject = function() {
                                var n = this._getPageURL();
                                return h(n.query)
                            };
                            r.prototype.generatePageURL = function() {
                                var n = this._getPageURL(),
                                    t = n.hostname + (n.pathname.length > 1 ? n.pathname : "");
                                return o(t)
                            };
                            r.prototype._patternToRegex = function(n) {
                                return n = n.replace(s, "\\$&").replace(c, "(?:$1)?").replace(l, function(n, t) {
                                    return t ? n : "([^/?]+)"
                                }).replace(v, "([^?]+|[^?]?)").replace(a, "([^\\/?]*?)"), new RegExp("^" + n + "(?:\\?([\\s\\S]*))?$")
                            };
                            r.prototype.match = function(n) {
                                var r, f, t = {},
                                    o = {};
                                return e.type(n, "object") ? t = n : t.url = n, r = this.checkPatternMatches(t.url), f = this.checkParamMatches(t.params), r[i] && f[i] ? u.extend({}, r, f) : (o[i] = !1, o)
                            };
                            r.prototype.checkPatternMatches = function(n, t) {
                                var h, c, e, f, u, s, r = {};
                                if (r[i] = !1, t || (n = o(n)), h = this._patternToRegex(n), c = this._getNamedParameters(n), e = h.exec(t || this.pageURL), !e) return r;
                                for (f = e.slice(1), r[i] = !0, u = 0; u < f.length; u++) s = c[u], f[u] && ("_" === s ? (r._ = r._ || [], r._.push(f[u])) : r[s] = f[u]);
                                return r
                            };
                            r.prototype.checkParamMatches = function(n) {
                                var f, o, t = {},
                                    r = this;
                                return t[i] = !0, e.objectLength(n) ? (u.each(n, function(n, e) {
                                    var s;
                                    return n = String(n), e = String(e), s = decodeURIComponent(e), null == r.searchObject[n] ? (t[i] = !1, !1) : (f = r.checkPatternMatches(e, r.searchObject[n]), o = r.checkPatternMatches(s, r.searchObject[n]), f[i] ? (u.extend(t, f), "continue") : o[i] ? (u.extend(t, o), "continue") : (t[i] = !1, !1))
                                }), t) : t
                            };
                            r.prototype._getNamedParameters = function(n) {
                                var f, i, r, t;
                                for (f = new RegExp("((:?:[^\\/()]+)|(?:[*])|(?:[**]))", "g"), i = [], r = f.exec(n); r;) {
                                    if (t = r[1].slice(1), "_" == t) throw new TypeError(":_ can't be used as a pattern name in pattern: " + n);
                                    if (u.inArray(t, i) > -1) throw new TypeError("duplicate pattern name :" + t + " in pattern: " + n);
                                    i.push(t || "_");
                                    r = f.exec(n)
                                }
                                return i
                            };
                            t.exports = f = new r;
                            f.MATCH_PROPERTY = i;
                            f.Matcher = r;
                            f.escapeRegExp = s
                        }, {
                            "./jq": 5,
                            "./utils": 8
                        }],
                        8: [function(n, t) {
                            function r(n) {
                                var t = document.createElement("a");
                                return t.href = n, {
                                    element: t,
                                    href: t.href,
                                    host: t.host,
                                    port: "0" === t.port || "" === t.port ? "" : t.port,
                                    hash: t.hash,
                                    hostname: t.hostname,
                                    pathname: "/" !== t.pathname.charAt(0) ? "/" + t.pathname : t.pathname,
                                    protocol: t.protocol && ":" !== t.protocol ? t.protocol : "https:",
                                    search: t.search,
                                    query: t.search.slice(1)
                                }
                            }

                            function u(n, t) {
                                switch (c.call(n)) {
                                    case "[object Date]":
                                        return t ? "date" === t : "date";
                                    case "[object RegExp]":
                                        return t ? "regexp" === t : "regexp";
                                    case "[object Arguments]":
                                        return t ? "arguments" === t : "arguments";
                                    case "[object Array]":
                                        return t ? "array" === t : "array";
                                    case "[object Error]":
                                        return t ? "error" === t : "error"
                                }
                                return null === n ? t ? "null" === t : "null" : void 0 === n ? t ? "undefined" === t : "undefined" : n !== n ? t ? "nan" === t : "nan" : i && n instanceof i ? t ? "jquery" === t : "jQuery" : n && 1 === n.nodeType ? t ? "element" === t : "element" : (n = n.valueOf ? n.valueOf() : Object.prototype.valueOf.apply(n), t ? t === typeof n : typeof n)
                            }

                            function f(n) {
                                var t, i = 0;
                                for (t in n) n.hasOwnProperty(t) && i++;
                                return i
                            }

                            function e(n) {
                                var t = i.Deferred();
                                return arguments.length > 1 && (n = Array.prototype.slice.call(arguments)), i.each(n, function(n, i) {
                                    i.done(function() {
                                        var n = [].slice.call(arguments);
                                        t.resolve.apply(t, n)
                                    })
                                }), t.promise()
                            }

                            function o(n, t) {
                                return i.ajax({
                                    type: "GET",
                                    url: n,
                                    data: null,
                                    success: t,
                                    dataType: "script",
                                    cache: !0
                                })
                            }

                            function s(n) {
                                var t = new Image(1, 1),
                                    r = i.Deferred();
                                return t.onload = function() {
                                    r.resolve()
                                }, t.src = n, r.promise()
                            }

                            function h(n) {
                                var t = document.createElement("script");
                                t.type = "text/javascript";
                                t.appendChild(document.createTextNode(n));
                                document.head.appendChild(t)
                            }
                            var i = n("./jq"),
                                c = Object.prototype.toString;
                            t.exports = {
                                parseURL: r,
                                type: u,
                                objectLength: f,
                                whenAny: e,
                                getScript: o,
                                getImage: s,
                                insertTagIntoDOM: h
                            }
                        }, {
                            "./jq": 5
                        }],
                        9: [function(n, t) {
                            function i(n, t) {
                                t instanceof o && (this.page = t, this.currentPage = !0);
                                t = t || {};
                                this.storeConfig(n, t)
                            }
                            var r = (n("../common/utils"), n("./capture")),
                                u = n("../common/emitter"),
                                f = (n("../storage/store"), n("../settings")),
                                e = n("../common/jq"),
                                o = n("../pages/Page"),
                                s = n("./types"),
                                h = n("../common/debug"),
                                c = {
                                    __timestamp__: (new Date).toUTCString().replace(/[\s,]+/g, "-"),
                                    __random__: ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
                                };
                            u(i.prototype);
                            i.prototype.storeConfig = function(n, t) {
                                this.config = n;
                                this.name = n.name;
                                this.type = n.type;
                                this.valueType = s[n.type];
                                this.id = n.id;
                                this.capture = n.capture;
                                this.fallback = n.fallback;
                                this.urlData = t.matchingURLs || [{}];
                                this.key = this.generateKey();
                                this.logger()
                            };
                            i.prototype.logger = function() {
                                this.log = h("ve:dataElement:" + this.type + ":" + this.id)
                            };
                            i.prototype.setData = function() {
                                this.log("About to set data with the following object", this.config);
                                r[this.capture.type](this.config, this)
                            };
                            i.prototype.getValue = function() {
                                this.log("VALUE!!", this.value);
                                var n = this.value || ("list" === this.valueType ? [] : "");
                                return this.log("#getValue with value", n), n
                            };
                            i.prototype.generateKey = function() {
                                return f.fromObjectConfig("uuid") + this.type + this.id
                            };
                            i.prototype.cacheValue = function(n) {
                                this.lastUpdated = e.now();
                                this.log("Caching value", n, this.lastUpdated);
                                this.value = n
                            };
                            i.prototype.getFallback = function() {
                                var n = String(c[this.fallback] || this.fallback);
                                return this.log("#getFallback - The fallback value being obtained", n), n
                            };
                            t.exports = i
                        }, {
                            "../common/debug": 2,
                            "../common/emitter": 4,
                            "../common/jq": 5,
                            "../common/utils": 8,
                            "../pages/Page": 13,
                            "../settings": 30,
                            "../storage/store": 32,
                            "./capture": 10,
                            "./types": 11
                        }],
                        10: [function(n, t) {
                            function a(n, t) {
                                var i = t.include,
                                    u = t.exclude;
                                return r.type(i, "string") && (i = [i]), r.type(u, "string") && (u = [u]), r.type(i, "array") && i.length && (n = y(n, i)), r.type(u, "array") && u.length && (n = v(n, u)), n
                            }

                            function v(n, t) {
                                return u.each(t, function(t, i) {
                                    var r;
                                    r = new RegExp(i, "gim");
                                    n = n.replace(r, "")
                                }), i("Matching with REGEX exclude", n, t), n
                            }

                            function y(n, t) {
                                return u.each(t, function(t, i) {
                                    var u, r = n;
                                    u = new RegExp(i, "gi");
                                    r = r.match(u) || r;
                                    r[1] && (n = r);
                                    n instanceof Array && (n = n.join(""))
                                }), i("Matching with REGEX", n, t), n
                            }

                            function p(n, t) {
                                var i = c[t] || c.nothing;
                                return i(n)
                            }

                            function w(n, t) {
                                return r.objectLength(t) ? t[n] || n : n
                            }

                            function f(n, t) {
                                return r.type(n, "array") ? (i("#runTransformations - running on a LIST of values"), u.each(n, function(i, r) {
                                    n[i] = s(r, t)
                                }), n) : (i("#runTransformations - SINLE value type"), s(n, t))
                            }

                            function s(n, t) {
                                return i("#transform - running on value"), n = a(n, t.regex), n = p(n, t.mask), n = w(n, t.mappings)
                            }

                            function e(n, t) {
                                n.cacheValue(t);
                                n.emit("store");
                                it.set(n.key, t)
                            }

                            function b(n) {
                                var t = window,
                                    i = n.split(".");
                                return u.each(i, function(n) {
                                    t = t[i[n]]
                                }), String(t)
                            }

                            function k(n, t) {
                                i("Running via DOM #selector", n, t);
                                var u = n.capture.element,
                                    r = "",
                                    s = function(u) {
                                        i("#selector value found about to run transformations", u);
                                        r = l[t.valueType](u);
                                        i("#selector VALUES", r, t);
                                        r = f(r, n);
                                        e(t, r)
                                    };
                                n.capture.keepChecking && "list" !== t.valueType ? (i("#selector keep checking active setting up progress check"), o.progressCheck(u).progress(s)) : (i("#selector keep checking NOT active simpler check for element "), o.dynamicCheck(u).then(s))
                            }

                            function d(n, t) {
                                var i = b(n.capture.element);
                                i = f(i, n);
                                e(t, i)
                            }

                            function g(n, t) {
                                var i = "";
                                u.each(t.urlData, function(t, r) {
                                    if (r.matches[n.capture.element]) return i = r.matches[n.capture.element], !1
                                });
                                i = f(i, n);
                                e(t, i)
                            }

                            function nt(n, t) {
                                var r = window.dataLayer;
                                if (!r) return "";
                                for (var u = t ? r.reverse() : r, f = "", i = 0; i < u.length; i++)
                                    if (u[i][n]) {
                                        f = u[i][n];
                                        break
                                    }
                                return f
                            }

                            function h(n, t, i) {
                                var r = nt(n.capture.element, i);
                                r = f(r, n);
                                e(t, r)
                            }

                            function tt(n, t) {
                                h(n, t, !0)
                            }
                            var r = n("../common/utils"),
                                o = n("../common/elements"),
                                u = n("../common/jq"),
                                c = (n("../common/url-matcher").escapeRegExp, n("../common/masks")),
                                it = n("../storage/store"),
                                i = n("../common/debug")("ve:capture"),
                                l;
                            t.exports = {
                                selector: k,
                                globalVariable: d,
                                url: g,
                                dataLayer: h,
                                dataLayerReverse: tt
                            };
                            l = {
                                single: function(n) {
                                    return i("#singleOrList.single - Obtaining single value from element."), o.obtainValue(n)
                                },
                                list: function(n) {
                                    return i("#singleOrList.list - Obtaining multiple values from element."), o.obtainValues(n)
                                }
                            }
                        }, {
                            "../common/debug": 2,
                            "../common/elements": 3,
                            "../common/jq": 5,
                            "../common/masks": 6,
                            "../common/url-matcher": 7,
                            "../common/utils": 8,
                            "../storage/store": 32
                        }],
                        11: [function(n, t) {
                            t.exports = {
                                orderId: "single",
                                orderVal: "single",
                                productId: "single",
                                productList: "list",
                                priceList: "list",
                                currency: "single",
                                contentId: "list"
                            }
                        }, {}],
                        12: [function(n, t) {
                            function r(n) {
                                var t = this;
                                this.log = w("ve:main");
                                this.veAdsConfig = n || this.getVeAdsConfig();
                                this.veAdsConfig.config.consoleMessagesEnabled ? window.localStorage.setItem("VeAdsConsoleLogEnabled", "true") : window.localStorage.removeItem("VeAdsConsoleLogEnabled");
                                this.runChecks().then(function() {
                                    t.instantiatePages()
                                })
                            }

                            function h(n, t, r) {
                                var u = !1;
                                return i.each(n, function(n, i) {
                                    if (i[t] === r) return u = !0, !1
                                }), u
                            }

                            function c(n, t) {
                                return f[n.type] - f[t.type]
                            }

                            function l(n, t, i) {
                                if (n.getValue().length) return n.getValue();
                                return i.getValue(n.key) || []
                            }

                            function a(n, t) {
                                var r = [];
                                return i.each(n, function(n, i) {
                                    i.type === t && r.push(i)
                                }), r
                            }
                            var v = n("./common/utils"),
                                i = n("./common/jq"),
                                y = n("./pages/Page"),
                                e = n("./storage/store"),
                                o = n("./data/DataElement"),
                                u = n("./settings"),
                                p = n("./pixels/type"),
                                w = n("./common/debug"),
                                b = n("./data/types"),
                                k = n("./pixels/Pixel"),
                                f, s;
                            t.exports = r;
                            f = {
                                ros: 1,
                                conversion: 2,
                                product: 3,
                                category: 4,
                                basket: 5,
                                custom: 6,
                                completeReg: 7,
                                viewContent: 8,
                                search: 9,
                                addToCart: 10,
                                addToWishlist: 11,
                                initiateCheckout: 12,
                                addPaymentInfo: 13,
                                lead: 14
                            };
                            s = {
                                id: 0,
                                name: "ROS Injected Page",
                                type: "ros",
                                urls: ["**"],
                                dynamicIdentifiers: []
                            };
                            r.prototype.getVeAdsConfig = function() {
                                try {
                                    return i.extend({}, window.veTagData.settings.veAds)
                                } catch (n) {
                                    this.log(new Error("Please define a valid veAds object"), n)
                                }
                            };
                            r.prototype.testJSON = function() {
                                return window.JSON && "parse" in window.JSON && "stringify" in window.JSON
                            };
                            r.prototype.runChecks = function() {
                                var n = i.Deferred();
                                return this.testJSON() ? (this.jsonAvailable = !0, this.log("JSON natively available"), n.resolve()) : (this.log("NO JSON on this page, adding a script to the page."), this.jsonAvailable = !1, this.jsonPromise = i.getScript("https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js").done(function() {
                                    n.resolve()
                                })), n.promise()
                            };
                            r.prototype.instantiatePages = function() {
                                this.log("Instantiating PAGES");
                                var n = this;
                                h(this.veAdsConfig.pages, "type", "ros") || this.veAdsConfig.pages.unshift(s);
                                this.veAdsConfig.pages.sort(c);
                                this.log("Pages have been sorted into a running order", this.veAdsConfig.pages);
                                i.each(n.veAdsConfig.pages, function(t, i) {
                                    if (i[u.MAIN_PAGE_PROPERTY]) return "continue";
                                    var r = new y(i);
                                    i[u.MAIN_PAGE_PROPERTY] = r;
                                    n.setupPageListeners(r)
                                })
                            };
                            r.prototype.setupPageListeners = function(n) {
                                this.log("Setting page listener for: " + n.name);
                                n.once("success", i.proxy(this.setPageElements, this, n));
                                n.once("success", i.proxy(this.runPagePixels, this, n));
                                n.once("fail", i.proxy(n.off, n));
                                n.checkURLs()
                            };
                            r.prototype.setupDataListeners = function(n) {
                                this.log("#setupDataListeners - setting up data listeners for: " + n.name, n);
                                n.once("store", i.proxy(this.storeValue, this, n))
                            };
                            r.prototype.storeValue = function(n) {
                                var t = n.key,
                                    i = n.getValue();
                                return this.log("#storeValue - storing key: " + t + ", with value: " + i), e.set(t, i)
                            };
                            r.prototype.getValue = function(n) {
                                return e.get(n)
                            };
                            r.prototype.setPageElements = function(n) {
                                this.log("Setting DataElements for identified page " + n.name, n);
                                var t = this;
                                i.each(this.veAdsConfig.dataElements, function(r, f) {
                                    var e;
                                    return f[u.MAIN_DATA_ELEMENT] ? (t.log("dataElement object already exists for dataElement: " + f.name, f), e = f[u.MAIN_DATA_ELEMENT], e.setData(), "continue") : void(v.type(f.pages, "array") && f.pages.length && i.inArray(n.id, f.pages) > -1 && (e = new o(f, n), f[u.MAIN_DATA_ELEMENT] = e, t.setupDataListeners(e), e.setData()))
                                })
                            };
                            r.prototype.runPagePixels = function(n) {
                                var r = this,
                                    t = i.proxy(this.obtainDataFromStorage, this);
                                i.each(this.veAdsConfig.pixels, function(i, f) {
                                    var e, o = p[f.type];
                                    return o.hasOwnProperty(n.type) ? (f[u.MAIN_PIXEL] ? e = f[u.MAIN_PIXEL] : (e = new k(f, t), f[u.MAIN_PIXEL] = e), void e.run(t, n.type, n.id)) : (r.log("Page type: " + n.type + " not supported by pixel: " + f.name), "continue")
                                })
                            };
                            r.prototype.obtainDataFromStorage = function(n) {
                                var t = this,
                                    r = {};
                                return i.each(n, function(n, i) {
                                    var u = a(t.veAdsConfig.dataElements, i);
                                    r[i] = t._obtainDataValue(u, b[i])
                                }), r
                            };
                            r.prototype._obtainDataValue = function(n, t) {
                                var r = "list" === t ? [] : "",
                                    f = this;
                                return i.each(n, function(n, t) {
                                    var i = t[u.MAIN_DATA_ELEMENT] || (t[u.MAIN_DATA_ELEMENT] = new o(t));
                                    r = "single" !== i.valueType || r ? l(i, r, f) : i.getValue() || f.getValue(i.key)
                                }), "single" !== t || r || (this.log("FALLBACK: No value has been found checking for fallbacks"), i.each(n, function(n, t) {
                                    var i = t[u.MAIN_DATA_ELEMENT];
                                    r = i.getFallback();
                                    f.log("FALLBACK VALUE USED: Current value found for this.", r, i)
                                })), r
                            }
                        }, {
                            "./common/debug": 2,
                            "./common/jq": 5,
                            "./common/utils": 8,
                            "./data/DataElement": 9,
                            "./data/types": 11,
                            "./pages/Page": 13,
                            "./pixels/Pixel": 14,
                            "./pixels/type": 24,
                            "./settings": 30,
                            "./storage/store": 32
                        }],
                        13: [function(n, t) {
                            function i(n) {
                                if (!r.type(n, "object")) throw new Error("Pages need to be called with a configuration object");
                                this.storeConfig(n);
                                this.logger();
                                this.matchingURLs = [];
                                this.dynamic = this._checkDynamic();
                                this.log("Page object created")
                            }
                            var r = n("../common/utils"),
                                e = n("../common/emitter"),
                                f = n("../common/url-matcher"),
                                u = n("../common/jq"),
                                o = n("../settings"),
                                s = n("../common/elements"),
                                h = n("../common/criteria"),
                                c = n("../common/debug");
                            e(i.prototype);
                            i.prototype.checkURLs = function() {
                                var n = this;
                                this.log("Checking through URLs");
                                u.each(this.urls, function(t, i) {
                                    var r = f.match(i);
                                    r[f.MATCH_PROPERTY] && n.matchingURLs.push({
                                        url: i,
                                        matches: r
                                    })
                                });
                                this.matchingURLs.length && !this.dynamic ? (this.log("Page URL matches with object", this.matchingURLs), this.pageIdentified()) : this.matchingURLs.length && this.dynamic ? (this.log("Page URL matches but dynamic tests are needed", this.matchingURLs), this.runDynamics()) : (this.emit("fail"), this.log("ZERO MATCHES for: " + this.name))
                            };
                            i.prototype.runDynamics = function() {
                                var t = [],
                                    n = this;
                                this.log("Dynamically testing");
                                u.each(this.dynamicIdentifiers, function(i, r) {
                                    var f;
                                    return !r.selector || r.criteria && !r.values ? (n.log("Dynamic Identifier: " + i + "1 can't run", r), "continue") : (f = s.progressCheck(r.selector), t.push(f), void f.progress(function(t, i) {
                                        n.log("Update in element value", t, i);
                                        u.each(r.values, function(t, u) {
                                            if (n.log("Checking against: " + u), h[r.criteria](u, i.value)) return n.log("Value has been found for: " + i.value), i.remove(!0), !1
                                        });
                                        n.stopChecks && (n.log("Another dynamic Identifier has already passed"), i.remove())
                                    }))
                                });
                                r.whenAny(t).done(function() {
                                    n.pageIdentified()
                                })
                            };
                            i.prototype.pageIdentified = function() {
                                this.log("Page Matches for: " + this.name, this.matchingURLs);
                                this.stopChecks = !0;
                                this.emit("success", this)
                            };
                            i.prototype.storeConfig = function(n) {
                                if (!r.type(n.id, "number")) throw new Error("Must provide an ID with every page ", n);
                                if (!r.type(n.type, "string")) throw new Error("Must be provided with a valid type");
                                this.config = n;
                                this.id = n.id;
                                this.urls = n.urls || [];
                                this.type = n.type || o.DEFAULT_PAGE_TYPE;
                                this.dynamicIdentifiers = n.dynamicIdentifiers || [];
                                this.name = n.name
                            };
                            i.prototype.logger = function() {
                                this.log = c("ve:page:" + this.type + ":" + this.id)
                            };
                            i.prototype._checkDynamic = function() {
                                return !!this.dynamicIdentifiers.length
                            };
                            t.exports = i
                        }, {
                            "../common/criteria": 1,
                            "../common/debug": 2,
                            "../common/elements": 3,
                            "../common/emitter": 4,
                            "../common/jq": 5,
                            "../common/url-matcher": 7,
                            "../common/utils": 8,
                            "../settings": 30
                        }],
                        14: [function(n, t) {
                            function i(n) {
                                this.storeConfig(n);
                                this.logger()
                            }
                            var u = n("../common/utils"),
                                f = n("../common/emitter"),
                                e = n("./type"),
                                o = n("../common/debug"),
                                r = n("../common/jq");
                            f(i.prototype);
                            i.prototype.run = function(n, t, i) {
                                this.pages.push(i);
                                this.data = this.collateData(this._pixel[t].needs, n);
                                this.generatePixels(this.data, this.config, t, i)
                            };
                            i.prototype.storeConfig = function(n) {
                                this.settings = n;
                                this.config = n.config;
                                this.id = n.id;
                                this.type = n.type;
                                this.name = n.name;
                                this.overrides = n.overrides;
                                this._pixel = e[this.type];
                                this.pages = []
                            };
                            i.prototype.logger = function() {
                                this.log = o("ve:pixel:" + this.type + ":" + this.id)
                            };
                            i.prototype.collateData = function(n, t) {
                                return this.log("Collating data for: ", n), t(n, this)
                            };
                            i.prototype.checkOverrides = function(n, t) {
                                return this.log("Checking for pixel OVERRIDES"), !this.overrides.active || !(!this.overrides.ros || "ros" !== n || this.overrides.pages.length) || !this.overrides.pages.length || !!(this.overrides.pages.length && r.inArray(t, this.overrides.pages) > -1) || (this.log("The pixel has been OVERRIDDEN"), !1)
                            };
                            i.prototype.generatePixels = function(n, t, i, f) {
                                var e, o = this;
                                return this.checkOverrides(i, f) ? (e = this._pixel[i] && this._pixel[i].produces || [], e.length ? (this.log("Generating Pixel(s) for: " + this.name + " with type: " + this.type), this.log("Data to be passed in will be ", n, t), void r.each(e, function(i, r) {
                                    var e = r(n, t, f);
                                    e && (u.getImage(e), o.log("Image pixel generated with `src`: " + e))
                                })) : void this.log("There are ZERO runners for this pageType:" + i)) : void this.log("Pixels will not be generated")
                            };
                            t.exports = i
                        }, {
                            "../common/debug": 2,
                            "../common/emitter": 4,
                            "../common/jq": 5,
                            "../common/utils": 8,
                            "./type": 24
                        }],
                        15: [function(n, t) {
                            function r(n) {
                                return window._adftrack = Array.isArray(window._adftrack) ? window._adftrack : window._adftrack ? [window._adftrack] : [], window._adftrack.push(n), f.getScript("https://track.adform.net/serving/scripts/trackpoint/async/"), !1
                            }

                            function u(n, t) {
                                r({
                                    pm: t.pmId,
                                    divider: encodeURIComponent("|"),
                                    pagename: encodeURIComponent("Complete"),
                                    order: {
                                        sales: n.orderVal,
                                        orderid: n.orderId,
                                        sv8: n.currency
                                    }
                                })
                            }

                            function i(n) {
                                return function(t, i) {
                                    r({
                                        pm: i.pmId,
                                        divider: encodeURIComponent("|"),
                                        pagename: encodeURIComponent(n)
                                    })
                                }
                            }
                            var f = (n("../../common/debug")("ve:pixels:type:adForm"), n("../../common/utils"));
                            t.exports = {
                                conversion: {
                                    needs: ["orderVal", "orderId", "currency"],
                                    produces: [u]
                                },
                                ros: {
                                    needs: [],
                                    produces: [i("ROS")]
                                },
                                product: {
                                    needs: [],
                                    produces: [i("Product")]
                                },
                                home: {
                                    needs: [],
                                    produces: [i("Homepage")]
                                }
                            }
                        }, {
                            "../../common/debug": 2,
                            "../../common/utils": 8
                        }],
                        16: [function(n, t) {
                            function i(n, t) {
                                return f("#conversion - 0.data 1.config", n, t), "https://secure.adnxs.com/px?id=" + t.conversionId + "&seg=" + t.segmentConversion + "&order_id=" + n.orderId + "&value=" + n.orderVal + "&other=[" + n.currency + "]&t=2"
                            }

                            function r(n, t) {
                                return "//secure.adnxs.com/seg?add=" + t.segmentROS + "&t=2"
                            }

                            function u(n, t) {
                                return "//secure.adnxs.com/seg?add=" + t.segmentProduct + "&t=2"
                            }
                            var f = n("../../common/debug")("ve:pixels:type:appNexus");
                            t.exports = {
                                product: {
                                    needs: [],
                                    produces: [u]
                                },
                                conversion: {
                                    needs: ["orderVal", "orderId", "currency"],
                                    produces: [i]
                                },
                                ros: {
                                    needs: [],
                                    produces: [r]
                                }
                            }
                        }, {
                            "../../common/debug": 2
                        }],
                        17: [function(n, t) {
                            function i(n, t) {
                                return "script" === t.type && t.src ? (u("adding script to the page"), r.getScript(t.src), !1) : t.src
                            }
                            var r = n("../../common/utils"),
                                u = n("../../common/debug")("ve:pixels:type:customConversion");
                            t.exports = {
                                conversion: {
                                    needs: [],
                                    produces: [i]
                                }
                            }
                        }, {
                            "../../common/debug": 2,
                            "../../common/utils": 8
                        }],
                        18: [function(n, t) {
                            function u(n, t, u) {
                                return f("Checking customPage Pixel", i.type(t.pages, "array"), r.inArray(u, t.pages)), (!i.type(t.pages, "array") || r.inArray(u, t.pages) !== -1) && ("script" === t.type && t.src ? (i.getScript(t.src), !1) : t.src)
                            }
                            var i = n("../../common/utils"),
                                r = n("../../common/jq"),
                                f = n("../../common/debug")("ve:pixels:type:customPage");
                            t.exports = {
                                custom: {
                                    needs: [],
                                    produces: [u]
                                }
                            }
                        }, {
                            "../../common/debug": 2,
                            "../../common/jq": 5,
                            "../../common/utils": 8
                        }],
                        19: [function(n, t) {
                            function i(n, t) {
                                return "script" === t.type && t.src ? (r.getScript(t.src), !1) : t.src
                            }
                            var r = n("../../common/utils");
                            t.exports = {
                                ros: {
                                    needs: [],
                                    produces: [i]
                                }
                            }
                        }, {
                            "../../common/utils": 8
                        }],
                        20: [function(n, t) {
                            function i(n, t) {
                                if ("script" === t.type && t.src) return r.insertTagIntoDOM(t.src), !1
                            }
                            var r = n("../../common/utils");
                            t.exports = {
                                conversion: {
                                    needs: [],
                                    produces: [i]
                                },
                                ros: {
                                    needs: [],
                                    produces: [i]
                                },
                                product: {
                                    needs: [],
                                    produces: [i]
                                },
                                basket: {
                                    needs: [],
                                    produces: [i]
                                },
                                custom: {
                                    needs: [],
                                    produces: [i]
                                }
                            }
                        }, {
                            "../../common/utils": 8
                        }],
                        21: [function(n, t) {
                            function u(n, t) {
                                return t.catConversion ? "https://ad.doubleclick.net/ddm/activity/src=" + t.src + ";type=sales;cat=" + t.catConversion + ";qty=1;cost=" + n.orderVal + ";ord=" + n.orderId + "?" : void r("No catConversion provided for Conversion page")
                            }

                            function f(n, t) {
                                var i = n.productId,
                                    u = 1e13 * (Math.random() + "");
                                return t.catProduct ? "https://ad.doubleclick.net/ddm/activity/src=" + t.src + ";type=invmedia;cat=" + t.catProduct + ";u1=" + i + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + u + "?" : void r("No catProduct provided for Product page DBM Pixel")
                            }

                            function i(n) {
                                var t = "cat" + n;
                                return function(i, u) {
                                    if (!u[t]) return void r("No property provided for page type: " + n);
                                    var f = 1e13 * (Math.random() + "");
                                    return "https://ad.doubleclick.net/ddm/activity/src=" + u.src + ";type=invmedia;cat=" + u[t] + ";ord=" + f
                                }
                            }
                            var r = n("../../common/debug")("ve:pixels:type:dbm");
                            t.exports = {
                                conversion: {
                                    needs: ["orderVal", "orderId"],
                                    produces: [u]
                                },
                                ros: {
                                    needs: [],
                                    produces: [i("ROS")]
                                },
                                product: {
                                    needs: ["productId"],
                                    produces: [f]
                                },
                                basket: {
                                    needs: [],
                                    produces: [i("Basket")]
                                },
                                custom: {
                                    needs: [],
                                    produces: [i("Custom")]
                                }
                            }
                        }, {
                            "../../common/debug": 2
                        }],
                        22: [function(n, t) {
                            function e() {
                                var n;
                                window.fbq || (n = window.fbq = function() {
                                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                                }, window._fbq || (window._fbq = n), n.push = n, n.loaded = !0, n.version = "2.0", n.queue = [])
                            }

                            function o() {
                                e();
                                d.getScript("https://connect.facebook.net/en_US/fbevents.js");
                                i = !0
                            }

                            function u(n) {
                                return n.contentId.length > 1 ? "productGroup" : "product"
                            }

                            function s(n) {
                                f.each(g, function(t, i, r) {
                                    return !(!n[i] || !n[i].selector) && void f.each(n[i].selector, function(n, t) {
                                        f(t).click(function() {
                                            fbq("track", i, {
                                                content_ids: r.contentId,
                                                content_type: u(r)
                                            })
                                        })
                                    })
                                })
                            }

                            function r(n, t) {
                                o();
                                s(n, t);
                                window.fbq("init", "" + n.facebookId);
                                window.fbq("track", "PageView")
                            }

                            function h(n, t) {
                                return i || r(t), !1
                            }

                            function c(n, t) {
                                return i || r(t), n.contentId.length && "%5B%5D" != n.contentId ? (window.fbq("track", "Purchase", {
                                    value: n.orderVal,
                                    currency: n.currency,
                                    content_ids: n.contentId
                                }), window.fbq("trackCustom", "OrderId", {
                                    custom_param1: n.orderId
                                })) : (window.fbq("track", "Purchase", {
                                    value: n.orderVal,
                                    currency: n.currency
                                }), window.fbq("trackCustom", "OrderId", {
                                    custom_param1: n.orderId
                                })), !1
                            }

                            function l(n, t) {
                                return i || r(t), window.fbq("track", "CompleteRegistration"), !1
                            }

                            function a(n, t) {
                                return i || r(t), n.contentId.length || "%5B%22%22%5B" != n.contentId ? window.fbq("track", "ViewContent", {
                                    content_ids: n.contentId,
                                    content_type: u(n)
                                }) : window.fbq("track", "ViewContent"), !1
                            }

                            function v(n, t) {
                                return i || r(t), t.Search.clickOnly || window.fbq("track", "Search"), !1
                            }

                            function y(n, t) {
                                return i || r(t), t.AddToCart.clickOnly || (n.contentId.length ? window.fbq("track", "AddToCart", {
                                    content_ids: n.contentId,
                                    content_type: u(n)
                                }) : window.fbq("track", "AddToCart")), !1
                            }

                            function p(n, t) {
                                return i || r(t), t.AddToWishlist.clickOnly || window.fbq("track", "AddToWishlist"), !1
                            }

                            function w(n, t) {
                                return i || r(t), window.fbq("track", "InitiateCheckout"), !1
                            }

                            function b(n, t) {
                                return i || r(t), t.AddPaymentInfo.clickOnly || window.fbq("track", "AddPaymentInfo"), !1
                            }

                            function k(n, t) {
                                return i || r(t), t.Lead.clickOnly || window.fbq("track", "Lead"), !1
                            }
                            var d = n("../../common/utils"),
                                f = n("../../common/jq"),
                                i = !1,
                                g = (n("../../common/debug")("ve:pixels:type:facebook"), ["Search", "AddToCart", "AddToWishlist", "AddPaymentInfo", "Lead"]);
                            t.exports = {
                                ros: {
                                    needs: [],
                                    produces: [h]
                                },
                                conversion: {
                                    needs: ["orderVal", "currency", "orderId", "contentId"],
                                    produces: [c]
                                },
                                viewContent: {
                                    needs: ["contentId"],
                                    produces: [a]
                                },
                                search: {
                                    needs: [],
                                    produces: [v]
                                },
                                addToCart: {
                                    needs: ["contentId"],
                                    produces: [y]
                                },
                                addToWishlist: {
                                    needs: [],
                                    produces: [p]
                                },
                                initiateCheckout: {
                                    needs: [],
                                    produces: [w]
                                },
                                addPaymentInfo: {
                                    needs: [],
                                    produces: [b]
                                },
                                lead: {
                                    needs: [],
                                    produces: [k]
                                },
                                completeReg: {
                                    needs: [],
                                    produces: [l]
                                }
                            }
                        }, {
                            "../../common/debug": 2,
                            "../../common/jq": 5,
                            "../../common/utils": 8
                        }],
                        23: [function(n, t) {
                            function i(n, t) {
                                var i, r = t.flexId;
                                return function(n) {
                                    var i = document,
                                        t = i.createElement("script");
                                    t.async = !0;
                                    t.defer = !0;
                                    t.src = n;
                                    i.getElementsByTagName("head")[0].appendChild(t)
                                }((i = window.location.href.indexOf("iatDev=1") > -1 || document.cookie.indexOf("iatDev=1") > -1, "//" + ("http:" != window.location.protocol || i ? "" : "h") + "fp.gdmdigital.com/" + r + ".js?r=" + 1e16 * Math.random() + "&m=992&a=" + r + (i ? "&d=1" : ""))), !1
                            }
                            t.exports = {
                                ros: {
                                    needs: [],
                                    produces: [i]
                                }
                            }
                        }, {}],
                        24: [function(n, t) {
                            t.exports = {
                                ve: n("./ve"),
                                dbm: n("./dbm"),
                                flex: n("./flex"),
                                smartFlex: n("./smartFlex"),
                                appNexus: n("./appNexus"),
                                customROS: n("./customROS"),
                                customConversion: n("./customConversion"),
                                customTag: n("./customTag"),
                                customPage: n("./customPage"),
                                facebook: n("./facebook"),
                                mediaMath: n("./mediaMath"),
                                volvelle: n("./volvelle"),
                                adForm: n("./adForm")
                            }
                        }, {
                            "./adForm": 15,
                            "./appNexus": 16,
                            "./customConversion": 17,
                            "./customPage": 18,
                            "./customROS": 19,
                            "./customTag": 20,
                            "./dbm": 21,
                            "./facebook": 22,
                            "./flex": 23,
                            "./mediaMath": 25,
                            "./smartFlex": 26,
                            "./ve": 27,
                            "./volvelle": 28
                        }],
                        25: [function(n, t) {
                            function r(n, t) {
                                if (t.conversionId && t.advertiserId) {
                                    var r = "//pixel.mathtag.com/event/js?mt_id=" + t.conversionId + "&mt_adid=" + t.advertiserId + "&v1=" + n.orderId + "&v2=&v3=&s1=" + n.orderVal + "&s2=" + n.currency + "&s3=";
                                    return i.getScript(r), !1
                                }
                            }

                            function u(n, t) {
                                if (t.rosId && t.advertiserId) {
                                    var r = "//pixel.mathtag.com/event/js?mt_id=" + t.rosId + "&mt_adid=" + t.advertiserId + "&v1=&v2=&v3=&s1=&s2=&s3=";
                                    return i.getScript(r), !1
                                }
                            }
                            var i = n("../../common/utils");
                            n("../../common/debug")("ve:pixels:type:mediaMath");
                            t.exports = {
                                conversion: {
                                    needs: ["orderVal", "orderId", "currency"],
                                    produces: [r]
                                },
                                ros: {
                                    needs: [],
                                    produces: [u]
                                }
                            }
                        }, {
                            "../../common/debug": 2,
                            "../../common/utils": 8
                        }],
                        26: [function(n, t) {
                            function u(n, t) {
                                var r = t.flexId,
                                    u = function() {
                                        i("Generating Script"),
                                            function(n) {
                                                var i = document,
                                                    t = i.createElement("script");
                                                t.async = !0;
                                                t.defer = !0;
                                                t.src = n;
                                                i.getElementsByTagName("head")[0].appendChild(t)
                                            }("//c.vepxl1.net/4-" + r + ".js?id=" + r + "&m=4")
                                    };
                                return f(u), u(), !1
                            }

                            function f(n) {
                                i("Listening to page changes");
                                r(window.history, "push", n);
                                r(window.history, "replace", n);
                                addEventListener(window, "hashchange", n, !1);
                                addEventListener(window, "popstate", n, !1)
                            }

                            function r(n, t, r) {
                                var f = t + "State",
                                    u = "on" + t + "state",
                                    e = n[f];
                                n[f] = function(f) {
                                    return "function" == typeof n[u] && n[u]({
                                        state: f
                                    }), i("Setting up stateListener with type: " + t), r({
                                        state: f,
                                        event: u
                                    }), e.apply(n, arguments)
                                }
                            }
                            var i = n("../../common/debug")("ve:pixels:type:smartFlex");
                            t.exports = {
                                ros: {
                                    needs: [],
                                    produces: [u]
                                }
                            }
                        }, {
                            "../../common/debug": 2
                        }],
                        27: [function(n, t) {
                            function u(n, t) {
                                return "//veads.veinteractive.com/genieTracker.php?adgCompanyID=" + t.journeyCode + "&adgItem=" + encodeURIComponent(n.productId)
                            }

                            function f(n, t) {
                                var i = h(n.priceList);
                                return "//veads.veinteractive.com/conversion.php?companyId=" + t.journeyCode + "&items=" + (i ? i + "|" : "") + "BASKETVAL:" + n.orderVal + "&orderId=" + n.orderId
                            }

                            function e(n, t) {
                                var r = i(n.productList);
                                return "//veads.veinteractive.com/genieTracker.php?adgCompanyID=" + t.journeyCode + "&adgPurchasedItems=" + r
                            }

                            function o(n, t) {
                                return "//veads.veinteractive.com/genieTracker.php?adgCompanyID=" + t.journeyCode + "&adgItem=" + i(n.productList)
                            }

                            function s(n, t) {
                                return "//veads.veinteractive.com/genieTracker.php?adgCompanyID=" + t.journeyCode + "&adgBasketItems=" + i(n.productList)
                            }

                            function i(n) {
                                var t = "";
                                return n = n || [], r.each(n, function(i, r) {
                                    r = encodeURIComponent(r);
                                    t += r + (i < n.length - 1 ? "|" : "")
                                }), t
                            }

                            function h(n) {
                                var t = "";
                                return n = n || [], r.each(n, function(i, r) {
                                    r = encodeURIComponent(r);
                                    t += "PROD" + (i + 1) + ":" + r + (i < n.length - 1 ? "|" : "")
                                }), t
                            }
                            var r = n("../../common/jq");
                            t.exports = {
                                product: {
                                    needs: ["productId"],
                                    produces: [u]
                                },
                                conversion: {
                                    needs: ["orderVal", "orderId", "productList", "priceList"],
                                    produces: [f, e]
                                },
                                basket: {
                                    needs: ["productList", "priceList"],
                                    produces: [s]
                                },
                                category: {
                                    needs: ["productList"],
                                    produces: [o]
                                }
                            }
                        }, {
                            "../../common/jq": 5
                        }],
                        28: [function(n, t) {
                            function r(n, t) {
                                var i = (new Date).toUTCString().replace(/[\s,]+/g, "-");
                                return "https://a.volvelle.tech/pixel?id=" + t.conversionId + "&type=img&aid=" + t.advertiserId + "&c1=" + n.orderId + "&c2=" + n.orderVal + "&c3=" + n.currency + "&c4=" + i
                            }

                            function i(n) {
                                var t = n + "Id";
                                return function(n, i) {
                                    if (!i[t]) return void u("No property provided for page type: " + t);
                                    var r = "https://a.volvelle.tech/pixel?id=" + i[t] + "&aid=" + i.advertiserId + "&type=js";
                                    return f.getScript(r), !1
                                }
                            }
                            var u = n("../../common/debug")("ve:pixels:type:volvelle"),
                                f = n("../../common/utils");
                            t.exports = {
                                conversion: {
                                    needs: ["conversionId", "orderId", "orderVal", "currency"],
                                    produces: [r]
                                },
                                ros: {
                                    needs: [],
                                    produces: [i("ros")]
                                },
                                product: {
                                    needs: [],
                                    produces: [i("product")]
                                },
                                basket: {
                                    needs: [],
                                    produces: [i("basket")]
                                },
                                home: {
                                    needs: [],
                                    produces: [i("home")]
                                },
                                custom: {
                                    needs: [],
                                    produces: [i("custom")]
                                }
                            }
                        }, {
                            "../../common/debug": 2,
                            "../../common/utils": 8
                        }],
                        29: [function(n) {
                            var t = n("./common/debug")("ve:run"),
                                i;
                            try {
                                t("Code is starting");
                                i = n("./main");
                                new i
                            } catch (r) {
                                t("There was an error OOPS", r)
                            }
                        }, {
                            "./common/debug": 2,
                            "./main": 12
                        }],
                        30: [function(n, t) {
                            var i = n("./common/debug")("ve:settings");
                            t.exports = {
                                DEFAULT_PAGE_TYPE: "custom",
                                MAIN_PAGE_PROPERTY: "_pageObject",
                                MAIN_DATA_ELEMENT: "_dataElementObject",
                                MAIN_PIXEL: "_pixelObject",
                                ELEMENT_MS: 750,
                                ELEMENT_MAX_RETRIES: 3e3,
                                fromObjectConfig: function(n) {
                                    try {
                                        return window.veTagData.settings.veAds.config[n]
                                    } catch (t) {
                                        i("Unable to load veAds config", t)
                                    }
                                }
                            }
                        }, {
                            "./common/debug": 2
                        }],
                        31: [function(n, t) {
                            var i = {
                                getItem: function(n) {
                                    return n ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(n).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
                                },
                                setItem: function(n, t, i, r, u, f) {
                                    if (!n || /^(?:expires|max\-age|path|domain|secure)$/i.test(n)) return !1;
                                    var e = "";
                                    if (i) switch (i.constructor) {
                                        case Number:
                                            e = i === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + i;
                                            break;
                                        case String:
                                            e = "; expires=" + i;
                                            break;
                                        case Date:
                                            e = "; expires=" + i.toUTCString()
                                    }
                                    return document.cookie = encodeURIComponent(n) + "=" + encodeURIComponent(t) + e + (u ? "; domain=" + u : "") + (r ? "; path=" + r : "") + (f ? "; secure" : ""), !0
                                },
                                removeItem: function(n, t, i) {
                                    return !!this.hasItem(n) && (document.cookie = encodeURIComponent(n) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (i ? "; domain=" + i : "") + (t ? "; path=" + t : ""), !0)
                                },
                                hasItem: function(n) {
                                    return !!n && new RegExp("(?:^|;\\s*)" + encodeURIComponent(n).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
                                },
                                keys: function() {
                                    for (var n = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), i = n.length, t = 0; t < i; t++) n[t] = decodeURIComponent(n[t]);
                                    return n
                                }
                            };
                            t.exports = i
                        }, {}],
                        32: [function(n, t) {
                            function p() {
                                try {
                                    return u in h && h[u]
                                } catch (n) {
                                    return !1
                                }
                            }
                            var r, i = {},
                                h = window,
                                c = h.document,
                                u = "localStorage",
                                a = "script",
                                v = n("../common/utils"),
                                w = n("../settings").fromObjectConfig("storageAcrossProtocols"),
                                y = n("./cookies"),
                                b = 3600,
                                e, o, f;
                            if (i.disabled = !1, i.version = "1.3.17", i.set = function() {}, i.get = function() {}, i.has = function(n) {
                                    return void 0 !== i.get(n)
                                }, i.remove = function() {}, i.clear = function() {}, i.transact = function(n, t, r) {
                                    null == r && (r = t, t = null);
                                    null == t && (t = {});
                                    var u = i.get(n, t);
                                    r(u);
                                    i.set(n, u)
                                }, i.getAll = function() {}, i.forEach = function() {}, i.serialize = function(n) {
                                    return JSON.stringify(n)
                                }, i.deserialize = function(n) {
                                    if (v.type("string")) try {
                                        return JSON.parse(n)
                                    } catch (t) {
                                        return n || void 0
                                    }
                                }, p()) r = h[u], i.set = function(n, t) {
                                return v.type(t, "undefined") ? i.remove(n) : (r.setItem(n, i.serialize(t)), w && y.setItem(n, i.serialize(t), b), t)
                            }, i.get = function(n, t) {
                                var u = i.deserialize(r.getItem(n));
                                return u || (u = i.deserialize(y.getItem(n))), void 0 === u ? t : u
                            }, i.remove = function(n) {
                                r.removeItem(n)
                            }, i.clear = function() {
                                r.clear()
                            }, i.getAll = function() {
                                var n = {};
                                return i.forEach(function(t, i) {
                                    n[t] = i
                                }), n
                            }, i.forEach = function(n) {
                                for (var u, t = 0; t < r.length; t++) u = r.key(t), n(u, i.get(u))
                            };
                            else if (c.documentElement.addBehavior) {
                                try {
                                    o = new ActiveXObject("htmlfile");
                                    o.open();
                                    o.write("<" + a + ">document.w=window<\/" + a + '><iframe src="/favicon.ico"><\/iframe>');
                                    o.close();
                                    e = o.w.frames[0].document;
                                    r = e.createElement("div")
                                } catch (d) {
                                    r = c.createElement("div");
                                    e = c.body
                                }
                                var s = function(n) {
                                        return function() {
                                            var t = Array.prototype.slice.call(arguments, 0),
                                                f;
                                            return t.unshift(r), e.appendChild(r), r.addBehavior("#default#userData"), r.load(u), f = n.apply(i, t), e.removeChild(r), f
                                        }
                                    },
                                    k = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
                                    l = function(n) {
                                        return n.replace(/^d/, "___$&").replace(k, "___")
                                    };
                                i.set = s(function(n, t, r) {
                                    return t = l(t), void 0 === r ? i.remove(t) : (n.setAttribute(t, i.serialize(r)), n.save(u), r)
                                });
                                i.get = s(function(n, t, r) {
                                    t = l(t);
                                    var u = i.deserialize(n.getAttribute(t));
                                    return void 0 === u ? r : u
                                });
                                i.remove = s(function(n, t) {
                                    t = l(t);
                                    n.removeAttribute(t);
                                    n.save(u)
                                });
                                i.clear = s(function(n) {
                                    var t = n.XMLDocument.documentElement.attributes;
                                    for (n.load(u); t.length;) n.removeAttribute(t[0].name);
                                    n.save(u)
                                });
                                i.getAll = function() {
                                    var n = {};
                                    return i.forEach(function(t, i) {
                                        n[t] = i
                                    }), n
                                };
                                i.forEach = s(function(n, t) {
                                    for (var r, f = n.XMLDocument.documentElement.attributes, u = 0; r = f[u]; ++u) t(r.name, i.deserialize(n.getAttribute(r.name)))
                                })
                            }
                            try {
                                f = "__storejs__";
                                i.set(f, f);
                                i.get(f) != f && (i.disabled = !0);
                                i.remove(f)
                            } catch (d) {
                                i.disabled = !0
                            }
                            i.enabled = !i.disabled;
                            t.exports = i
                        }, {
                            "../common/utils": 8,
                            "../settings": 30,
                            "./cookies": 31
                        }]
                    }, {}, [29])
                }
            },
            appsMappings: {},
            apps: [],
            configUICustomSettings: {
                eventHubConfig: {
                    namespace: "ve1appseventssb",
                    hubName: "panel-app-eventshub-e1",
                    saName: "SENDER",
                    saKey: "WgpJpFGCH/jZBtUSflu0uBTja/yZwdNZkIpetafYXJs=",
                    dataCenter: "Production UK"
                },
                blobSetting: {
                    blobDomainName: "panelsettingse1.azureedge.net"
                }
            }
        };
    return n || (n = document.createElement("script"), n.type = "text/javascript", n.id = "veConnect", n.async = !0, n.crossOrigin = "anonymous", n.src = window.location.protocol + i.veHostDomain + "/scripts/5.0-empty/capture-apps-5.0.0.js", t = document.getElementsByTagName("script")[0], t.parentNode.insertBefore(n, t)), i
}()