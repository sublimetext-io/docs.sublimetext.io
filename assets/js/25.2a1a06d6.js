(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{315:function(t,r,s){},349:function(t,r,s){"use strict";s(315)},360:function(t,r,s){"use strict";s.r(r);var o={props:{showTitle:{type:Boolean,default:!1},user:{type:String,require:!0},repo:{type:String,require:!0}},data:()=>({contributors:[]}),mounted(){this.getContributors()},methods:{getContributors(){const{user:t,repo:r}=this;fetch(`https://api.github.com/repos/${t}/${r}/contributors`).then((function(t){return t.json()})).then(t=>{this.contributors=t})}}},i=(s(349),s(7)),e=Object(i.a)(o,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"contributors-wrapper"},[t.showTitle?r("h3",{staticClass:"contributors-title"},[t._v("\n    "+t._s(t.repo)+"\n    "),r("GitHubLink",{attrs:{repo:`${t.user}/${t.repo}`}})],1):t._e(),t._v(" "),r("ul",{staticClass:"contributors-list"},t._l(t.contributors,(function(s,o){return r("li",{key:o,staticClass:"contributors-item"},[r("a",{attrs:{href:s.html_url}},[r("img",{staticClass:"avatar",attrs:{src:s.avatar_url,alt:s.login}}),t._v(" "),r("a",{staticClass:"name"},[t._v(t._s(s.login))])])])})),0)])}),[],!1,null,"c5729e4e",null);r.default=e.exports}}]);