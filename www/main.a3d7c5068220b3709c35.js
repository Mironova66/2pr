(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"09TK":function(e,_,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_,"__esModule",{value:!0}),_.Index=void 0;const i=n(t("q1tI")),d=t("/MKj"),o=t("55Ip"),l=t("qOC2"),a=n(t("ZOnT"));class r extends i.default.Component{constructor(e,_){super(e,_),this.state={phone:""}}render(){const{cart:e,removeFromCart:_,clearCart:t}=this.props,{phone:n}=this.state,d=0===e.array.length||0===n.length;return i.default.createElement("div",{className:a.default.container},i.default.createElement("div",{className:a.default.cartInner},i.default.createElement("div",{className:a.default.list},0!==e.array.length?e.array.map((e,t)=>i.default.createElement("div",{className:a.default.item,key:t},i.default.createElement("img",{src:e.img,alt:""}),i.default.createElement("div",{className:a.default.name},e.name," - ",e.price," ₽"),i.default.createElement("div",{className:a.default.description},e.description),i.default.createElement("div",{className:a.default.close,onClick:()=>_(t)},"X"))):i.default.createElement("div",{className:a.default.placeholder},i.default.createElement("div",{className:a.default.title},"Ничего не найдено"),i.default.createElement("div",{className:a.default.description},"Сначала добавьте товары в корзину"))),i.default.createElement("div",{className:a.default.order},i.default.createElement("div",{className:a.default.item},i.default.createElement("div",{className:a.default.caption},"Телефон для связи"),i.default.createElement("input",{value:n,type:"text",placeholder:"+7 985 876 12 53",disabled:0===e.array.length,onChange:e=>this.setState({phone:e.target.value})})),i.default.createElement("div",{className:a.default.item},i.default.createElement(o.Link,{to:"/"},i.default.createElement("button",{disabled:d,onClick:()=>t()},"Подтвердить заказ"))))))}}_.Index=r,_.default=(0,d.connect)(e=>({cart:e.cart}),{removeFromCart:l.removeFromCart,clearCart:l.clearCart})(r)},"2efh":function(e,_,t){(_=e.exports=t("I1BE")(!1)).push([e.i,".index-module__container___26zwT{width:950px;margin:0 auto}.index-module__header___1BwDt{height:72px;display:flex;align-items:center;font-family:'Montserrat', sans-serif;font-size:18px;color:#fff;background:#292929}.index-module__header___1BwDt a{text-decoration:none;color:#fff}.index-module__header___1BwDt .index-module__container___26zwT{display:flex;justify-content:space-between}.index-module__header___1BwDt .index-module__menu___1gaCK .index-module__item___3DjPp{cursor:pointer}.index-module__header___1BwDt .index-module__cart___14-SC{display:flex;align-items:center;gap:8px;position:relative;font-family:'Montserrat', sans-serif;font-size:16px;cursor:pointer}.index-module__header___1BwDt .index-module__cart___14-SC .index-module__count___2FlHc{padding:5px 10px;position:absolute;right:-45px;border-radius:20px;background:#212121}\n",""]),_.locals={container:"index-module__container___26zwT",header:"index-module__header___1BwDt",menu:"index-module__menu___1gaCK",item:"index-module__item___3DjPp",cart:"index-module__cart___14-SC",count:"index-module__count___2FlHc"}},"7Rx/":function(e,_,t){(_=e.exports=t("I1BE")(!1)).push([e.i,".index-module__container___uLOrz{width:950px;margin:0 auto}.index-module__section___3EWX9{padding:20px 0;color:#fff}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL{display:grid;align-items:flex-start;grid-template-columns:auto 300px;gap:0 10px}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig{display:flex;flex-wrap:wrap;gap:20px}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__placeholder___vEp2u{width:100% !important;text-align:center}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__placeholder___vEp2u .index-module__title___7OTW9{margin-bottom:20px;font-family:'Montserrat', sans-serif;font-size:18px;font-weight:bold}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__placeholder___vEp2u .index-module__description___1u_SR{align-self:center !important}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP{width:200px;padding:20px;display:flex;flex-direction:column;align-items:center;gap:10px;border-radius:16px;background:#292929}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP img{max-width:100%;max-height:200px}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP .index-module__name___2CBKG,.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP .index-module__description___1u_SR{align-self:flex-start}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP .index-module__name___2CBKG{font-family:'Montserrat', sans-serif;font-size:16px}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP .index-module__description___1u_SR{font-family:'Montserrat', sans-serif;font-size:12px;color:rgba(255,255,255,0.5)}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP button{width:100%;margin-top:auto;padding:12px;font-family:'Montserrat', sans-serif;font-size:14px;resize:none;border:none;outline:none;border-radius:9px;transition:.2s ease-in-out;color:#FFFFFF;background:#212121}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP button:not(:disabled){cursor:pointer}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP button:not(:disabled):hover{opacity:.7}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP button:disabled{opacity:.5}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__list___39Rig .index-module__item___1mUiP button::placeholder{font-size:14px}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s{padding:20px;display:flex;flex-direction:column;gap:15px;border-radius:16px;background:#292929}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s select,.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s input,.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s textarea,.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s button{width:100%;padding:12px;font-family:'Montserrat', sans-serif;font-size:14px;resize:none;border:none;outline:none;border-radius:9px;color:#FFFFFF;background:#212121}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s select::placeholder,.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s input::placeholder,.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s textarea::placeholder,.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s button::placeholder{font-size:14px}.index-module__section___3EWX9 .index-module__sectionInner___3qVRL .index-module__filter___L3k5s .index-module__item___1mUiP .index-module__caption___2E6CP{margin-bottom:5px;font-family:'Montserrat', sans-serif;font-size:14px}\n",""]),_.locals={container:"index-module__container___uLOrz",section:"index-module__section___3EWX9",sectionInner:"index-module__sectionInner___3qVRL",list:"index-module__list___39Rig",placeholder:"index-module__placeholder___vEp2u",title:"index-module__title___7OTW9",description:"index-module__description___1u_SR",item:"index-module__item___1mUiP",name:"index-module__name___2CBKG",filter:"index-module__filter___L3k5s",caption:"index-module__caption___2E6CP"}},Fd7D:function(e,_,t){"use strict";Object.defineProperty(_,"__esModule",{value:!0}),_.cartReducer=void 0;const n=t("qOC2"),i={array:[]};_.cartReducer=(e=i,_)=>{const{type:t,payload:d}=_;if(t===n.ADD_TO_CART){const t=[...e.array];return t.push(_.payload),{array:t}}if(t===n.REMOVE_FROM_CART){const _=[...e.array];return _.splice(d,1),{array:_}}return t===n.CLEAR_CART?{array:[]}:e}},NLiy:function(e,_,t){var n=t("7Rx/");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(e.exports=n.locals)},QeBL:function(e,_,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_,"__esModule",{value:!0}),_.Index=void 0;const i=n(t("q1tI")),d=t("/MKj"),o=n(t("rxjh")),l=t("qOC2"),a=n(t("NLiy")),r=[{id:1,name:"Nemoloko",description:"Растительный напиток Nemoloko овсяный, обогащенный кальцием и витамином В2, 3,2%, 1 л",img:"https://cdn1.ozone.ru/multimedia/1025743190.jpg",price:50},{id:2,name:"Nemoloko",description:"Растительный напиток Nemoloko овсяный, обогащенный кальцием и витамином В2, 3,2%, 1 л",img:"https://cdn1.ozone.ru/multimedia/1022185071.jpg",price:200},{id:3,name:"Nemoloko",description:"Растительный напиток Nemoloko овсяный, обогащенный кальцием и витамином В2, 3,2%, 1 л",img:"https://cdn1.ozone.ru/multimedia/1022185078.jpg",price:150},{id:4,name:"Nemoloko",description:"Растительный напиток Nemoloko овсяный",img:"https://cdn1.ozone.ru/s3/multimedia-i/6032795586.jpg",price:100},{id:5,name:"Nemoloko",description:"Растительный напиток Nemoloko овсяный, обогащенный кальцием и витамином В2, 3,2%, 1 л",img:"https://cdn1.ozone.ru/multimedia/1022185078.jpg",price:50}];class s extends i.default.Component{constructor(e){super(e),this.state={search:"",items:[...r]},this.handleFilterSearch=this.handleFilterSearch.bind(this),this.handlePriceOrder=this.handlePriceOrder.bind(this)}onCartAdd(e){const{addToCart:_}=this.props,{items:t}=this.state;_(t[e])}handleFilterSearch(e){const{value:_}=e.target;this.setState({search:_},()=>{clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{const e=this.state.search.toLowerCase();0!==e.length?this.setState({items:r.filter(_=>_.name.toLowerCase().indexOf(e)>-1)}):this.setState({items:r})},500)})}handlePriceOrder(e){const{value:_}=e.target,{items:t}=this.state;this.setState({search:_}),"DEFAULT"!==_?this.setState({items:[...t.sort((e,t)=>"ASC"===_?e.price-t.price:t.price-e.price)]}):this.setState({items:[...r]})}render(){const{items:e,search:_}=this.state;return i.default.createElement("section",{className:a.default.section},i.default.createElement("div",{className:a.default.container},i.default.createElement("div",{className:a.default.sectionInner},i.default.createElement("div",{className:a.default.list},0!==e.length?e.map((e,_)=>i.default.createElement("div",{className:a.default.item,key:e.id},i.default.createElement("img",{src:e.img,alt:""}),i.default.createElement("div",{className:a.default.name},e.name," - ",e.price," ₽"),i.default.createElement("div",{className:a.default.description},e.description),i.default.createElement("button",{onClick:()=>this.onCartAdd(_)},"В корзину"))):i.default.createElement("div",{className:(0,o.default)([a.default.item,a.default.placeholder])},i.default.createElement("div",{className:a.default.title},"Ничего не найдено"),i.default.createElement("div",{className:a.default.description},"Похоже товар который вы искали отсутствует, попробуйте позже"))),i.default.createElement("div",{className:a.default.filter},i.default.createElement("div",{className:a.default.item},i.default.createElement("div",{className:a.default.caption},"Поиск"),i.default.createElement("input",{type:"text",placeholder:"Банан",onChange:this.handleFilterSearch})),i.default.createElement("div",{className:a.default.item},i.default.createElement("div",{className:a.default.caption},"Цена"),i.default.createElement("select",{value:_,onChange:this.handlePriceOrder},i.default.createElement("option",{value:"DEFAULT"},"Не выбрано"),i.default.createElement("option",{value:"ASC"},"По возрастанию"),i.default.createElement("option",{value:"DESC"},"По убыванию")))))))}}_.Index=s,_.default=(0,d.connect)(e=>({cart:e.cart}),{addToCart:l.addToCart})(s)},Tl8R:function(e,_,t){(_=e.exports=t("I1BE")(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap);",""]),_.push([e.i,"*{box-sizing:border-box}body{margin:0;background:#212121}\n",""])},ZOnT:function(e,_,t){var n=t("m+sW");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(e.exports=n.locals)},"h/Eg":function(e,_,t){"use strict";Object.defineProperty(_,"__esModule",{value:!0});const n=t("ANjH"),i=t("Fd7D");_.default=(0,n.combineReducers)({cart:i.cartReducer})},jh8G:function(e,_,t){var n=t("Tl8R");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(e.exports=n.locals)},"m+sW":function(e,_,t){(_=e.exports=t("I1BE")(!1)).push([e.i,".index-module__container___1qi0h{width:950px;margin:0 auto}.index-module__cartInner___2LOUi{padding:20px 0;display:grid;align-items:flex-start;grid-template-columns:auto 300px;gap:0 10px}.index-module__cartInner___2LOUi .index-module__list___1H0vk{padding:20px;display:flex;flex-direction:column;gap:20px;border-radius:16px;color:#fff;background:#292929}.index-module__cartInner___2LOUi .index-module__list___1H0vk .index-module__placeholder___34459{width:100% !important;display:flex;flex-direction:column;text-align:center}.index-module__cartInner___2LOUi .index-module__list___1H0vk .index-module__placeholder___34459 .index-module__title___2F-7G{margin-bottom:20px;font-family:'Montserrat', sans-serif;font-size:18px;font-weight:bold}.index-module__cartInner___2LOUi .index-module__list___1H0vk .index-module__placeholder___34459 .index-module__description___2qy4G{font-family:'Montserrat', sans-serif;font-size:12px;color:rgba(255,255,255,0.5)}.index-module__cartInner___2LOUi .index-module__list___1H0vk .index-module__item___2vRQB{display:grid;align-items:center;grid-template-columns:50px 150px 300px auto;gap:20px;font-family:'Montserrat', sans-serif;font-size:16px}.index-module__cartInner___2LOUi .index-module__list___1H0vk .index-module__item___2vRQB img{max-width:100%}.index-module__cartInner___2LOUi .index-module__list___1H0vk .index-module__item___2vRQB .index-module__close___IMadL{opacity:.7;cursor:pointer}.index-module__cartInner___2LOUi .index-module__order___vKMMz{padding:20px;display:flex;flex-direction:column;gap:15px;border-radius:16px;color:#fff;background:#292929}.index-module__cartInner___2LOUi .index-module__order___vKMMz select,.index-module__cartInner___2LOUi .index-module__order___vKMMz input,.index-module__cartInner___2LOUi .index-module__order___vKMMz textarea,.index-module__cartInner___2LOUi .index-module__order___vKMMz button{width:100%;padding:12px;font-family:'Montserrat', sans-serif;font-size:14px;resize:none;border:none;outline:none;border-radius:9px;color:#FFFFFF;background:#212121}.index-module__cartInner___2LOUi .index-module__order___vKMMz select::placeholder,.index-module__cartInner___2LOUi .index-module__order___vKMMz input::placeholder,.index-module__cartInner___2LOUi .index-module__order___vKMMz textarea::placeholder,.index-module__cartInner___2LOUi .index-module__order___vKMMz button::placeholder{font-size:14px}.index-module__cartInner___2LOUi .index-module__order___vKMMz button{transition:.2s ease-in-out}.index-module__cartInner___2LOUi .index-module__order___vKMMz button:not(:disabled){cursor:pointer}.index-module__cartInner___2LOUi .index-module__order___vKMMz button:not(:disabled):hover{opacity:.7}.index-module__cartInner___2LOUi .index-module__order___vKMMz button:disabled{opacity:.5}.index-module__cartInner___2LOUi .index-module__order___vKMMz .index-module__item___2vRQB .index-module__caption___297P6{margin-bottom:5px;font-family:'Montserrat', sans-serif;font-size:14px}\n",""]),_.locals={container:"index-module__container___1qi0h",cartInner:"index-module__cartInner___2LOUi",list:"index-module__list___1H0vk",placeholder:"index-module__placeholder___34459",title:"index-module__title___2F-7G",description:"index-module__description___2qy4G",item:"index-module__item___2vRQB",close:"index-module__close___IMadL",order:"index-module__order___vKMMz",caption:"index-module__caption___297P6"}},qOC2:function(e,_,t){"use strict";Object.defineProperty(_,"__esModule",{value:!0}),_.clearCart=_.removeFromCart=_.addToCart=_.CLEAR_CART=_.REMOVE_FROM_CART=_.ADD_TO_CART=void 0,_.ADD_TO_CART="ADD_TO_CART",_.REMOVE_FROM_CART="REMOVE_FROM_CART",_.CLEAR_CART="CLEAR_CART";_.addToCart=e=>({type:_.ADD_TO_CART,payload:e});_.removeFromCart=e=>({type:_.REMOVE_FROM_CART,payload:e});_.clearCart=()=>({type:_.CLEAR_CART})},"r5d+":function(e,_,t){var n=t("2efh");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(e.exports=n.locals)},ruvs:function(e,_,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_,"__esModule",{value:!0}),_.Header=void 0;const i=n(t("q1tI")),d=t("/MKj"),o=t("55Ip"),l=t("tmq1"),a=n(t("r5d+"));class r extends i.default.Component{constructor(e,_){super(e,_)}render(){const{cart:e}=this.props;return i.default.createElement("header",{className:a.default.header},i.default.createElement("div",{className:a.default.container},i.default.createElement("div",{className:a.default.menu},i.default.createElement(o.Link,{to:"/"},i.default.createElement("div",{className:a.default.item},"Главная"))),i.default.createElement(o.Link,{to:"/cart"},i.default.createElement("div",{className:a.default.cart},i.default.createElement(l.Icon16ShoppingCartOutline,{fill:"#fff"}),"Корзина",0!==e.array.length&&i.default.createElement("div",{className:a.default.count},e.array.length)))))}}_.Header=r,_.default=(0,d.connect)(e=>({cart:e.cart}))((0,o.withRouter)(r))},rxjh:function(e,_,t){"use strict";Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e){return e.join(" ")}},tVvj:function(e,_,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_,"__esModule",{value:!0}),_.store=void 0;const i=n(t("q1tI")),d=n(t("i8i4")),o=t("ANjH"),l=t("/MKj"),a=n(t("sINF")),r=t("55Ip");t("jh8G");const s=n(t("ruvs")),u=n(t("QeBL")),m=n(t("09TK")),c=n(t("h/Eg"));_.store=(0,o.createStore)(c.default,(0,o.applyMiddleware)(a.default));const x=document.getElementById("root");d.default.render(i.default.createElement(l.Provider,{store:_.store},i.default.createElement(r.BrowserRouter,null,i.default.createElement(s.default,null),i.default.createElement(r.Switch,null,i.default.createElement(r.Route,{path:"/",component:u.default,exact:!0}),i.default.createElement(r.Route,{path:"/cart",component:m.default}),i.default.createElement(r.Redirect,{to:"/"})))),x)}},[["tVvj",25,23,12,1,8,13,10,11,9,18,19,20,2,3,4,5,6,7,14,16,15,17,21,22,24]]]);