(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{gQJD:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),u=n(a("o0o1")),c=a("n43w"),d={namespace:"profileAdvanced",state:{advancedOperation1:[],advancedOperation2:[],advancedOperation3:[]},effects:{fetchAdvanced:u.default.mark(function e(t,a){var n,r,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,r=a.put,e.next=3,n(c.queryAdvancedProfile);case 3:return d=e.sent,e.next=6,r({type:"show",payload:d});case 6:case"end":return e.stop()}},e)})},reducers:{show:function(e,t){var a=t.payload;return(0,r.default)({},e,a)}}},o=d;t.default=o},n43w:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.queryAdvancedProfile=d;var r=n(a("o0o1")),u=n(a("yXPU")),c=n(a("io9h"));function d(){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function e(){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/profile/advanced"));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}}}]);
//# sourceMappingURL=p__profile__advanced__model.ts.f69b047b.async.js.map