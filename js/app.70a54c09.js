(function(e) {
    function t(t) {
        for (var o, r, l = t[0], n = t[1], i = t[2], v = 0, d = []; v < l.length; v++) r = l[v], Object.prototype.hasOwnProperty.call(s, r) && s[r] && d.push(s[r][0]), s[r] = 0;
        for (o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        u && u(t);
        while (d.length) d.shift()();
        return c.push.apply(c, i || []), a()
    }

    function a() {
        for (var e, t = 0; t < c.length; t++) {
            for (var a = c[t], o = !0, l = 1; l < a.length; l++) {
                var n = a[l];
                0 !== s[n] && (o = !1)
            }
            o && (c.splice(t--, 1), e = r(r.s = a[0]))
        }
        return e
    }
    var o = {},
        s = { app: 0 },
        c = [];

    function r(t) { if (o[t]) return o[t].exports; var a = o[t] = { i: t, l: !1, exports: {} }; return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports }
    r.m = e, r.c = o, r.d = function(e, t, a) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, r.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(a, o, function(t) { return e[t] }.bind(null, o));
        return a
    }, r.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        n = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var i = 0; i < l.length; i++) t(l[i]);
    var u = n;
    c.push([0, "chunk-vendors"]), a()
})({
    0: function(e, t, a) { e.exports = a("56d7") },
    "034f": function(e, t, a) {
        "use strict";
        var o = a("85ec"),
            s = a.n(o);
        s.a
    },
    "557b": function(e, t, a) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var o = a("2b0e"),
            s = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { attrs: { id: "app" } }, [a("Questions", { attrs: { questions: e.questions } })], 1)
            },
            c = [],
            r = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("div", { staticClass: "container" }, [e._m(0), a("form", { attrs: { action: "javascript:void(0)" } }, [a("div", { staticClass: "card shadow", style: e.showQr ? null : { "background-color": "#f0f0f0" } }, [e._m(1), a("div", { staticClass: "card-body" }, [e.showQr ? e._e() : a("div", [a("div", { staticClass: "row" }, e._l(e.questions.groupG, (function(t) { //color de linea
                    return a("div", { key: t.text, staticClass: "col-12 col-sm-6 col-md-4" }, [a("div", { staticClass: "form-group" }, [a("label", [e._v(e._s(t.text))]), "checkbox" === ("Documento" == t.text ? "number" : "text") ? a("input", {
                        directives: [{ name: "model", rawName: "v-model", value: t.value, expression: "quest.value" }],
                        staticClass: "form-control input-text",
                        attrs: { type: "checkbox" },
                        domProps: { checked: Array.isArray(t.value) ? e._i(t.value, null) > -1 : t.value },
                        on: {
                            change: function(a) {
                                var o = t.value,
                                    s = a.target,
                                    c = !!s.checked;
                                if (Array.isArray(o)) {
                                    var r = null,
                                        l = e._i(o, r);
                                    s.checked ? l < 0 && e.$set(t, "value", o.concat([r])) : l > -1 && e.$set(t, "value", o.slice(0, l).concat(o.slice(l + 1)))
                                } else e.$set(t, "value", c)
                            }
                        }
                    }) : "radio" === ("Documento" == t.text ? "number" : "text") ? a("input", { directives: [{ name: "model", rawName: "v-model", value: t.value, expression: "quest.value" }], staticClass: "form-control input-text", attrs: { type: "radio" }, domProps: { checked: e._q(t.value, null) }, on: { change: function(a) { return e.$set(t, "value", null) } } }) : a("input", { directives: [{ name: "model", rawName: "v-model", value: t.value, expression: "quest.value" }], staticClass: "form-control input-text", attrs: { type: "Documento" == t.text ? "number" : "text" }, domProps: { value: t.value }, on: { input: function(a) { a.target.composing || e.$set(t, "value", a.target.value) } } })])])
                })), 0), a("div", { staticClass: "row" }, e._l(e.questions.group1, (function(t) {
                    return a("div", { key: t.code, staticClass: "col-12 col-sm-12 col-md-12 group1" }, [a("div", { staticClass: "form-check" }, [a("input", {
                        directives: [{ name: "model", rawName: "v-model", value: t.value, expression: "quest.value" }],
                        staticClass: "form-check-input",
                        attrs: { id: "quest.code", type: "checkbox" },
                        domProps: { checked: Array.isArray(t.value) ? e._i(t.value, null) > -1 : t.value },
                        on: {
                            change: function(a) {
                                var o = t.value,
                                    s = a.target,
                                    c = !!s.checked;
                                if (Array.isArray(o)) {
                                    var r = null,
                                        l = e._i(o, r);
                                    s.checked ? l < 0 && e.$set(t, "value", o.concat([r])) : l > -1 && e.$set(t, "value", o.slice(0, l).concat(o.slice(l + 1)))
                                } else e.$set(t, "value", c)
                            }
                        }
                    }), a("label", { staticClass: "form-check-label" }, [e._v(" " + e._s(t.text) + " ")])])])
                })), 0), a("div", [a("h4", [e._v("¿Ha presentado alguno de los siguientes sintomas?")]), a("div", { staticClass: "row" }, e._l(e.questions.group2, (function(t) {
                    return a("div", { key: t.code, staticClass: "col-6 col-sm-4 col-md-3 group2" }, [a("div", { staticClass: "form-check" }, [a("input", {
                        directives: [{ name: "model", rawName: "v-model", value: t.value, expression: "quest.value" }],
                        staticClass: "form-check-input",
                        attrs: { id: "quest.code", type: "checkbox" },
                        domProps: { checked: Array.isArray(t.value) ? e._i(t.value, null) > -1 : t.value },
                        on: {
                            change: function(a) {
                                var o = t.value,
                                    s = a.target,
                                    c = !!s.checked;
                                if (Array.isArray(o)) {
                                    var r = null,
                                        l = e._i(o, r);
                                    s.checked ? l < 0 && e.$set(t, "value", o.concat([r])) : l > -1 && e.$set(t, "value", o.slice(0, l).concat(o.slice(l + 1)))
                                } else e.$set(t, "value", c)
                            }
                        }
                    }), a("label", { staticClass: "form-check-label" }, [e._v(" " + e._s(t.text) + " ")])])])
                })), 0)]), a ('div', [
                    a ('h4', [
                      e._v (
                        'De acuerdo a lo definido en el Protocolo de Bioseguridad para Servidores y Servidoras del Departamento de Antioquia se le recomienda mantenerse en casa hasta que se defina el reinicio de actividades presenciales para los servidores que se encuentran en aislamiento preventivo. Durante este tiempo le recomendamos la importancia de cuidarse en casa, lavarse las manos frecuentemente, mantener el distanciamiento social y reportar diariamente su estado de salud. #unidos nos cuidamos.'
                      ),
                    ]),
                  ]),
                  a ('div', [
                    a ('h4', [
                      e._v (
                        'Le recomendamos mantenerse en casa; en caso de que su jefe directo lo haya requerido para trabajo presencial, le recomendamos dar cumplimiento a las medidas preventivas definidas en su lugar de trabajo. Durante este tiempo le recordamos la importancia de cuidarse, lavarse las manos frecuentemente, mantener el distanciamiento social, hacer pausas activas y reportar diariamente su estado de salud. #unidos nos cuidamos.'
                      ),
                    ]),
                  ]),
                  a ('div', [
                    a ('h4', [
                      e._v (
                        'Aviso de Privacidad'
                      ),
                    ]),
                  ]),                          
                  a ('div', [
                    a ('h4', [
                      e._v (
                        'La Gobernación de Antioquia en cumplimiento de las normas vigentes en Colombia sobre Protección de Datos Personales ha adoptado una relación con los datos que describen de su actividad laboral, comunica a sus funcionarios que el presente formulario web hace parte de las estrategias para la contención y disminución del impacto de la infección por el Virus SARS Co-V 2(COVID-19) en la entidad, para el cuidado de su población laborante, y que recolecta datos públicos, privados y sensibles; con las finalidades de evitar el contagio masivo y cuidar a las familias y población en general, estrategias enmarcadas dentro de la legislación nacional y las recomendaciones de la O.M.S. (Organización Mundial de la Salud) y el Ministerio de Salud y de la Protección Social, y que de conformidad con la Ley 1581 de 2012, se podrá suministrar información a entidades públicas o administrativas que en el ejercicio de funciones legales así lo requieran.\nAsí mismo, comunica que los datos personales son tratados de manera segura y confidencial, y que cualquier consulta y/o reclamación o para acceder, rectificar o modificar estos, podrá realizarla a través del siguiente canal de comunicación: Buzón de correo electrónico: alertaciberseguridad@antioquia.gov.co'
                      ),
                    ]),
                    a("div", { staticClass: "row" }, e._l(e.questions.group3, (function(t) {
                    return a("div", { key: t.code, staticClass: "col-4 group3" }, [a("div", { class: t.text + " form-check" }, [a("input", {
                        directives: [{ name: "model", rawName: "v-model", value: t.value, expression: "quest.value" }],
                        staticClass: "form-check-input",
                        attrs: { id: "quest.code", type: "checkbox" },
                        domProps: { checked: Array.isArray(t.value) ? e._i(t.value, null) > -1 : t.value },
                        on: {
                            change: function(a) {
                                var o = t.value,
                                    s = a.target,
                                    c = !!s.checked;
                                if (Array.isArray(o)) {
                                    var r = null,
                                        l = e._i(o, r);
                                    s.checked ? l < 0 && e.$set(t, "value", o.concat([r])) : l > -1 && e.$set(t, "value", o.slice(0, l).concat(o.slice(l + 1)))
                                } else e.$set(t, "value", c)
                            }
                        }
                    }), a("label", { staticClass: "form-check-label" }, [e._v(" " + e._s(t.text) + " ")])])])
                })), 0)]), a("div", [e.showQr ? e._e() : a("button", { staticClass: "btn btn-primary", attrs: { disabled: e.checkDisabledButton }, on: { click: e.generateQR } }, [e._v(" Presentar ")])])]), e.showQr ? a("div", { staticClass: "qr-page" }, [a("qrcode-vue", { attrs: { value: e.qrValue, size: e.qrSize, level: e.level } }), a("button", { staticClass: "btn btn-primary", on: { click: function(t) { e.showQr = !1 } } }, [e._v(" Salir ")])], 1) : e._e()])])])]), e._m(2)])
            },
            l = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "row icarus-title" }, [a("div", { staticClass: "col-sm" }, [a("img", { staticClass: "img-sm-height", attrs: { src: "images/icarus-letter-alpha.png", alt: "" } })])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "card-header" }, [a("h2", [e._v("Formulario COVID-19")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "footer" }, [a("span", { staticClass: "row" }, [a("div", { staticClass: "col-lg-4 col-sm-4" }, [a("img", { staticClass: "logo-tecondor img-footer", attrs: { src: "images/logo-tecondor.svg", alt: "" } })]), a("div", { staticClass: "col-lg-4 col-sm-4" }, [a("img", { staticClass: "logo-servisel img-footer", attrs: { src: "images/logo-servisel-letter.svg", alt: "" } })]), a("div", { staticClass: "col-lg-4 col-sm-4" }, [a("img", { staticClass: "logo-vanguard img-footer", attrs: { src: "images/logo-vanguard.svg", alt: "" } })])])])
            }],
            n = (a("99af"), a("4160"), a("159b"), a("d7b0")),
            i = {
                name: "Questions",
                components: { QrcodeVue: n["a"] },
                data: function() { return { showQr: !1, qrSize: 300, level: "H", qrValue: null } },
                props: { questions: Object },
                computed: { checkDisabledButton: function() { var e = !1; return this.questions.groupG.forEach((function(t) { null != t.value && 0 != t.value.length || (e = !0) })), e } },
                methods: {
                    generateQR: function() {
                        var e = ",",
                            t = "ICA".concat(e);
                        this.questions.groupG.forEach((function(a) { t = t.concat("".concat(a.value).concat(e)) })), this.questions.group1.forEach((function(e) { t = t.concat("".concat(e.code).concat(e.value ? "1" : "0")) })), this.questions.group2.forEach((function(e) { t = t.concat("".concat(e.code).concat(e.value ? "1" : "0")) })), this.questions.group3.forEach((function(e) { t = t.concat("".concat(e.code).concat(e.value ? "1" : "0")) })), window.scrollTo(0, 0), this.showQr = !0, this.qrValue = t
                    }
                }
            },
            u = i,
            v = a("2877"),
            d = Object(v["a"])(u, r, l, !1, null, "a0cfbcbc", null),
            p = d.exports,
            m = {
                name: 'QRForm',
                components: {Questions: p},
                data: function () {
                  return {
                    questions: {
                      groupG: [
                        {text: 'Documento', value: null},
                        {text: 'Nombre', value: null},
                        {text: 'Apellido', value: null},
                      ],
                      group1: [
                        {
                          text: 'Me encuentro en descanso',
                          code: 'A',
                          value: !1,
                        },
                        {
                          text: 'Me encuentro en dia libre',
                          code: 'B',
                          value: !1,
                        },
                        {
                          text: 'Me encuentro en Permiso',
                          code: 'C',
                          value: !1,
                        },
                        {
                          text: 'Me encuentro Incapacitado',
                          code: 'D',
                          value: !1,
                        },
                        {
                          text: 'Me encuentro en vacaciones',
                          code: 'E',
                          value: !1,
                        }, 
                        {
                          text: '¿Ha tenido contacto estrecho con alguna persona o familiar que haya sido declarado como positivo o sospechoso para COVID 19 durante las últimas 24 horas? Entiéndase contacto estrecho como contacto sin protección a menos de dos metros de distancia durante mínimo 15 minutos?',
                          code: 'E',
                          value: !1,
                        },        
                      ],
                      group2: [
                        {text: 'Fiebre', code: 'F', value: !1},
                        {text: 'Tos', code: 'G', value: !1},
                        {text: 'Dificultad para respirar', code: 'H', value: !1},
                        {text: 'Dolor Muscular o malestar general', code: 'I', value: !1},
                        {text: 'Dolor o malestar en la garganta', code: 'J', value: !1},
                        {text: 'Perdida de olfato', code: 'K', value: !1},
                        
                      ],
                      group3: [
                        {text: 'Acepto Aviso de privacidad', code: 'L', value: !1},
                        
                      ],
                    },
                  };
                },
              },
            f = m,
            g = (a("034f"), Object(v["a"])(f, s, c, !1, null, null, null)),
            h = g.exports;
        a("4989"), a("ab8b"), a("557b");
        o["a"].config.productionTip = !1, new o["a"]({ render: function(e) { return e(h) } }).$mount("#app")
    },
    "85ec": function(e, t, a) {}
});
//# sourceMappingURL=app.70a54c09.js.map