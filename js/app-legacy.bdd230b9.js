(function(){"use strict";var t={74:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var o=n(5010),i=n(3396),l=n.p+"img/pens.092f5b23.svg",a=(0,i._)("img",{src:l,alt:""},null,-1),s=[a];function c(t,e,n,l,a,c){var r=(0,i.up)("Navbar"),u=(0,i.up)("Notes"),d=(0,i.up)("Modal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r,{onSearch:e[0]||(e[0]=function(t){return a.searchValue=t})}),(0,i.Wm)(u,{notes:c.filterNotes,onDelNote:c.delNote,onChange:c.change},null,8,["notes","onDelNote","onChange"]),(0,i.wy)((0,i.Wm)(d,{onClose:e[1]||(e[1]=function(t){return a.isModalOpen=!1}),onAddNote:c.addNote,edit:a.edit,editedNote:a.editedNote,onChangedNote:c.changedNote},null,8,["onAddNote","edit","editedNote","onChangedNote"]),[[o.F8,a.isModalOpen]]),(0,i.wy)((0,i._)("button",{class:"addNote",onClick:e[2]||(e[2]=function(t){a.isModalOpen=!0,a.edit=!1})},s,512),[[o.F8,!a.isModalOpen]])],64)}n(7658),n(561),n(9826),n(1539),n(4747),n(7941),n(7327),n(6699),n(2023),n(8862);var r=n(7139),u={class:"modal__block_title"},d={class:"modal__block_inputs"},h=(0,i._)("span",null,"Title",-1),_=(0,i._)("span",null,"Content",-1),f={class:"modal__block_btns"};function p(t,e,n,l,a,s){return(0,i.wg)(),(0,i.j4)(o.uT,{name:"modal"},{default:(0,i.w5)((function(){return[(0,i._)("div",{class:"modal",onClick:e[6]||(e[6]=function(){return s.closeModal&&s.closeModal.apply(s,arguments)})},[(0,i._)("div",{class:"modal__block",onClick:e[5]||(e[5]=(0,o.iM)((function(){}),["stop"]))},[(0,i._)("h3",u,(0,r.zw)(n.edit?t.$t("changeNote"):t.$t("addNote")),1),(0,i._)("div",d,[(0,i._)("label",null,[h,(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Title","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.title=t})},null,512),[[o.nr,a.title]])]),(0,i._)("label",null,[_,(0,i.wy)((0,i._)("textarea",{placeholder:"Content","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.text=t})},null,512),[[o.nr,a.text]])])]),(0,i._)("div",f,[(0,i._)("button",{class:"modal__block_btns-btn del",onClick:e[2]||(e[2]=function(){return s.closeModal&&s.closeModal.apply(s,arguments)})},(0,r.zw)(t.$t("cancel")),1),n.edit?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"modal__block_btns-btn edit",onClick:e[4]||(e[4]=function(){return s.changeNote&&s.changeNote.apply(s,arguments)})},(0,r.zw)(t.$t("change")),1)):((0,i.wg)(),(0,i.iD)("button",{key:0,class:"modal__block_btns-btn edit",onClick:e[3]||(e[3]=function(){return s.addNote&&s.addNote.apply(s,arguments)})},(0,r.zw)(t.$t("add")),1))])])])]})),_:1})}var g=n(3029),v={methods:{closeModal:function(){this.$emit("close"),this.title=this.text=""},addNote:function(){if(""!=this.text||""!=this.title){var t={id:(0,g.Z)(),title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("addNote",t),this.closeModal()}},changeNote:function(){if(this.title.length>=3&&this.text.length>=3){var t={id:this.editedNote.id,title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("changedNote",t),this.closeModal()}}},data:function(){return{title:"",text:""}},props:{edit:Boolean,editedNote:Object}},m=n(89);const N=(0,m.Z)(v,[["render",p]]);var w=N,b=(n(4916),n(4765),n.p+"img/search.2c9e71ed.svg"),y=n.p+"img/back.014b4ff1.svg",k=n.p+"img/close.1d4d165f.svg",C={key:0,class:"nav"},$={class:"nav__title"},x=(0,i._)("img",{src:b,alt:""},null,-1),O=[x],M={key:1,class:"nav"},D=(0,i._)("img",{src:y,alt:""},null,-1),z=[D],S=["placeholder"],j=(0,i._)("button",{class:"nav__clear"},[(0,i._)("img",{src:k,alt:""})],-1);function A(t,e,n,l,a,s){return a.nav?((0,i.wg)(),(0,i.iD)("nav",C,[(0,i._)("button",{class:"nav__lang",style:{"text-transform":"uppercase"},onClick:e[0]||(e[0]=function(){return s.switchlang&&s.switchlang.apply(s,arguments)})},(0,r.zw)(t.$i18n.locale),1),(0,i._)("h1",$,(0,r.zw)(t.$t("notes")),1),(0,i._)("button",{class:"nav__search_icon",onClick:e[1]||(e[1]=function(t){return a.nav=!a.nav})},O)])):((0,i.wg)(),(0,i.iD)("nav",M,[(0,i._)("button",{class:"nav__back",onClick:e[2]||(e[2]=function(t){return a.nav=!a.nav})},z),(0,i.wy)((0,i._)("input",{type:"text",class:"nav__input",placeholder:t.$t("searchInput"),"onUpdate:modelValue":e[3]||(e[3]=function(t){return a.search=t})},null,8,S),[[o.nr,a.search]]),j]))}var V={data:function(){return{nav:!0,search:""}},watch:{search:function(t){this.$emit("search",t)}},methods:{switchlang:function(){"ru"==this.$i18n.locale?this.$i18n.locale="eng":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}}};const Z=(0,m.Z)(V,[["render",A]]);var E=Z,F=n.p+"img/list.4ed3d4be.svg",I=n.p+"img/layout.dbae4039.svg",L={class:"notes container"},T={class:"notes__top"},J={class:"notes__top_title"},W={src:F,alt:""},U={src:I,alt:""};function B(t,e,n,l,a,s){var c=(0,i.up)("NotesItem");return(0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("div",T,[(0,i._)("h2",J,(0,r.zw)(t.$t("allNotes")),1),(0,i._)("button",{class:"notes__top_btn",onClick:e[0]||(e[0]=function(t){return a.view=!a.view})},[(0,i.wy)((0,i._)("img",W,null,512),[[o.F8,a.view]]),(0,i.wy)((0,i._)("img",U,null,512),[[o.F8,!a.view]]),(0,i._)("span",null,(0,r.zw)(a.view?t.$t("list"):t.$t("grid")),1)])]),(0,i._)("div",{class:(0,r.C_)(["notes__list",{active:!a.view}])},[(0,i.Wm)(c,{notes:n.notes,view:a.view,onDelNote:e[1]||(e[1]=function(e){return t.$emit("delNote",e)}),onChange:e[2]||(e[2]=function(e){return t.$emit("change",e)})},null,8,["notes","view"])],2)])}var H=n.p+"img/basket.f04c87ff.svg",P={class:"notes__item_top-title"},Y={class:"notes__item_top-date"},G={class:"notes__item_text"},K={class:"notes__item_btns"},q=["onClick"],Q=(0,i._)("img",{src:l,alt:""},null,-1),R=["onClick"],X=(0,i._)("img",{src:H,alt:""},null,-1);function tt(t,e,n,o,l,a){return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.notes,(function(e){return(0,i.wg)(),(0,i.iD)("div",{class:"notes__item",key:e.id},[(0,i._)("div",{class:(0,r.C_)(["notes__item_top",{between:!n.view}])},[(0,i._)("h3",P,(0,r.zw)(e.title),1),(0,i._)("p",Y,(0,r.zw)(e.date),1)],2),(0,i._)("p",G,(0,r.zw)(e.text),1),(0,i._)("div",K,[(0,i._)("button",{class:"notes__item_btns-btn edit",onClick:function(n){return t.$emit("change",e.id)}},[Q,(0,i._)("span",null,(0,r.zw)(t.$t("edit")),1)],8,q),(0,i._)("button",{class:"notes__item_btns-btn del",onClick:function(n){return t.$emit("delNote",e.id)}},[X,(0,i._)("span",null,(0,r.zw)(t.$t("del")),1)],8,R)])])})),128)}var et={props:{notes:{typeof:Array},view:{typeof:Boolean}}};const nt=(0,m.Z)(et,[["render",tt]]);var ot=nt,it={components:{NotesItem:ot},data:function(){return{view:!0}},props:{notes:{typeof:Array}},methods:{switchlang:function(){"ru"==this.$i18n.locale?this.$i18n.locale="eng":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}}};const lt=(0,m.Z)(it,[["render",B]]);var at=lt,st={components:{Navbar:E,Notes:at,Modal:w},data:function(){return{notes:[],isModalOpen:!1,edit:!1,editedNote:null,searchValue:""}},methods:{addNote:function(t){this.notes.push(t)},delNote:function(t){this.notes.splice(t,1)},change:function(t){this.isModalOpen=this.edit=!0;var e=this.notes.find((function(e){return e.id==t}));this.editedNote=e},changedNote:function(t){this.notes.forEach((function(e){e.id==t.id&&(e.title=t.title,e.text=t.text,e.date=t.date)}))},getNotes:function(){var t=localStorage.notes;t&&(this.notes=JSON.parse(t))}},computed:{filterNotes:function(){var t=this;return this.searchValue?this.notes.filter((function(e){return e.title.toLowerCase().includes(t.searchValue.toLowerCase())})):this.notes}},watch:{notes:{handler:function(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}},created:function(){this.getNotes()}};const ct=(0,m.Z)(st,[["render",c]]);var rt=ct,ut=JSON.parse('{"notes":"Заметки","allNotes":"Все заметки","noNotes":"Нет заметок","list":"Список","grid":"Сетка","edit":"Редактировать","del":"Удалить","addNote":"Добавить заметку","add":"Добавить","cancel":"Отмена","changeNote":"Изменить заметку","change":"Изменить","searchInput":"Поиск..."}'),dt=JSON.parse('{"notes":"Notes","allNotes":"All Notes","noNotes":"No Notes","list":"List","grid":"Grid","edit":"Edit","del":"Delete","addNote":"Add Note","add":"Add","cancel":"Cancel","changeNote":"Edit Note","change":"Edit","searchInput":"Search..."}'),ht={ru:ut,eng:dt},_t=n(556),ft=localStorage.lang,pt=(0,_t.o)({legacy:!0,locale:ft||"ru",messages:ht});(0,o.ri)(rt).use(pt).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var l=e[o]={exports:{}};return t[o].call(l.exports,l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,l){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],l=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&l||a>=l)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,l<a&&(a=l));if(s){t.splice(u--,1);var r=i();void 0!==r&&(e=r)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[o,i,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/todo/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,l,a=o[0],s=o[1],c=o[2],r=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(e&&e(o);r<a.length;r++)l=a[r],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(u)},o=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(74)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.bdd230b9.js.map