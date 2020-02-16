function _classCallCheck(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,c){for(var t=0;t<c.length;t++){var n=c[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,c,t){return c&&_defineProperties(e.prototype,c),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{IMdT:function(e,c,t){"use strict";t.r(c);var n=t("d2mR"),i=t("tyNb"),o=t("leug"),d=t("fXoL"),b=t("LuDt"),m=t("5l+6"),a=t("9UYg"),l=t("kDKR"),r=t("ofXK"),s=t("6D23"),u=t("4G1d"),p=t("uwiL"),h=t("KWDx"),R=t("uOkQ"),Q=t("M9Bb"),x=t("roy6"),f=t("uAA3"),v=t("dkiD"),g=t("BAer"),S=t("o085"),M=t("RkLD"),w=t("6tDd"),k=t("o/N6"),y=t("CBIf");function C(e,c){if(1&e&&(d.Rb(0,"mdc-form-field"),d.Mb(1,"mdc-radio",54),d.Rb(2,"label"),d.xc(3),d.Qb(),d.Qb()),2&e){var t=c.$implicit;d.Bb(1),d.ic("value",t),d.Bb(2),d.yc(t)}}function A(e,c){if(1&e&&(d.Rb(0,"mdc-list-item"),d.xc(1),d.Qb()),2&e){var t=d.dc().$implicit;d.Bb(1),d.yc(t.label)}}function _(e,c){1&e&&d.Mb(0,"mdc-list-divider")}function B(e,c){1&e&&(d.Pb(0,55),d.vc(1,A,2,1,"mdc-list-item",56),d.vc(2,_,1,0,"mdc-list-divider",56),d.Ob()),2&e&&(d.ic("ngSwitch",!!c.$implicit.label),d.Bb(1),d.ic("ngSwitchCase",!0),d.Bb(1),d.ic("ngSwitchCase",!1))}var I,G,L,F,O,E=function(e,c,t,n){return{top:e,bottom:c,left:t,right:n}},D=[{path:"",component:(F=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Menus",description:"A menu displays a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.",references:[{name:"Material Design guidelines: Menus",url:"https://material.io/design/components/menus.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/README.md"}],code:"import {MdcMenuModule} from '@angular-mdc/web';",sass:"@use '@material/menu/mdc-menu';\n@use '@material/menu';\n@use '@material/list/mdc-list';\n@use '@material/menu-surface/mdc-menu-surface';"}}}]),e}(),F.\u0275fac=function(e){return new(e||F)},F.\u0275cmp=d.Fb({type:F,selectors:[["ng-component"]],viewQuery:function(e,c){var t;1&e&&d.tc(o.a,!0),2&e&&d.nc(t=d.ac())&&(c._componentViewer=t.first)},decls:1,vars:0,template:function(e,c){1&e&&d.Mb(0,"component-viewer")},directives:[b.a],encapsulation:2}),F),children:[{path:"",redirectTo:"api"},{path:"api",component:(L=function e(){_classCallCheck(this,e)},L.\u0275fac=function(e){return new(e||L)},L.\u0275cmp=d.Fb({type:L,selectors:[["ng-component"]],decls:116,vars:2,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,c){1&e&&(d.Rb(0,"div",0),d.Rb(1,"h3",1),d.xc(2,"MdcMenu"),d.Qb(),d.Rb(3,"p"),d.xc(4," Selector: "),d.Rb(5,"span",2),d.xc(6,"mdc-menu"),d.Qb(),d.Qb(),d.xc(7," Exported as: "),d.Rb(8,"span",2),d.xc(9,"mdcMenu"),d.Qb(),d.Rb(10,"h4",3),d.xc(11,"Properties"),d.Qb(),d.Rb(12,"table"),d.Rb(13,"thead"),d.Rb(14,"tr"),d.Rb(15,"th"),d.xc(16,"Name"),d.Qb(),d.Rb(17,"th"),d.xc(18,"Description"),d.Qb(),d.Qb(),d.Qb(),d.Rb(19,"tbody"),d.Rb(20,"tr"),d.Rb(21,"td"),d.xc(22,"id: string"),d.Qb(),d.Rb(23,"td"),d.xc(24,"Unique id of the menu (auto generated if not supplied)."),d.Qb(),d.Qb(),d.Rb(25,"tr"),d.Rb(26,"td"),d.xc(27,"open: boolean"),d.Qb(),d.Rb(28,"td"),d.xc(29,"Opens or closes the menu."),d.Qb(),d.Qb(),d.Rb(30,"tr"),d.Rb(31,"td"),d.xc(32,"anchorCorner: string"),d.Qb(),d.Rb(33,"td"),d.xc(34,"Override the opening point of the menu. (Default: topStart) "),d.Rb(35,"p"),d.xc(36,"Values: 'bottomEnd' | 'bottomStart' | 'topEnd' | 'topStart'"),d.Qb(),d.Qb(),d.Qb(),d.Rb(37,"tr"),d.Rb(38,"td"),d.xc(39),d.Qb(),d.Rb(40,"td"),d.xc(41,"Sets the distance from the anchor point that the menu surface should be shown."),d.Qb(),d.Qb(),d.Rb(42,"tr"),d.Rb(43,"td"),d.xc(44,"quickOpen: boolean"),d.Qb(),d.Rb(45,"td"),d.xc(46,"Sets whether the menu should open and close without animation when the open/close methods are called."),d.Qb(),d.Qb(),d.Rb(47,"tr"),d.Rb(48,"td"),d.xc(49,"anchorElement: Element | mdcMenuSurfaceAnchor"),d.Qb(),d.Rb(50,"td"),d.xc(51,"Set to indicate an element the menu should be anchored to."),d.Qb(),d.Qb(),d.Rb(52,"tr"),d.Rb(53,"td"),d.xc(54,"fixed: boolean"),d.Qb(),d.Rb(55,"td"),d.xc(56,"Used to indicate that the menu is using fixed positioning."),d.Qb(),d.Qb(),d.Rb(57,"tr"),d.Rb(58,"td"),d.xc(59,"wrapFocus: boolean"),d.Qb(),d.Rb(60,"td"),d.xc(61,"Sets the list to allow the up arrow on the first element to focus the last element of the list and vice versa."),d.Qb(),d.Qb(),d.Rb(62,"tr"),d.Rb(63,"td"),d.xc(64,"closeSurfaceOnSelection: boolean"),d.Qb(),d.Rb(65,"td"),d.xc(66,"Sets whether the menu surface should close after item selection. Default is true"),d.Qb(),d.Qb(),d.Rb(67,"tr"),d.Rb(68,"td"),d.xc(69,"defaultFocusState: 'none' | 'list' | 'firstItem' | 'lastItem'"),d.Qb(),d.Rb(70,"td"),d.xc(71,"Sets default focus state where the menu should focus every time when menu is opened. Focuses the list root ('list') element by default."),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(72,"h4",3),d.xc(73,"Events"),d.Qb(),d.Rb(74,"table"),d.Rb(75,"tbody"),d.Rb(76,"tr"),d.Rb(77,"td"),d.xc(78,"selected(item: MdcMenuItem, index: number)"),d.Qb(),d.Rb(79,"td"),d.xc(80,"Dispatches an event that a menu item has been selected."),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(81,"div",0),d.Rb(82,"h3",1),d.xc(83,"MdcMenuSurfaceAnchor"),d.Qb(),d.xc(84," Sets the anchor element used as an anchor for menu-surface positioning logic. "),d.Rb(85,"p"),d.xc(86," Selector: "),d.Rb(87,"span",2),d.xc(88,"mdcMenuSurfaceAnchor"),d.Qb(),d.Rb(89,"span",2),d.xc(90,"mdc-menu-surface-anchor"),d.Qb(),d.Qb(),d.xc(91," Exported as: "),d.Rb(92,"span",2),d.xc(93,"mdcMenuSurfaceAnchor"),d.Qb(),d.Qb(),d.Rb(94,"div",0),d.Rb(95,"h3",1),d.xc(96,"MdcMenuSelectionGroup"),d.Qb(),d.xc(97," Optional. Used to wrap a group of mdc-list-item elements that will represent a selection group. "),d.Rb(98,"p"),d.xc(99," Selector: "),d.Rb(100,"span",2),d.xc(101,"mdc-menu-selection-group"),d.Qb(),d.Qb(),d.xc(102," Exported as: "),d.Rb(103,"span",2),d.xc(104,"mdcMenuSelectionGroup"),d.Qb(),d.Qb(),d.Rb(105,"div",0),d.Rb(106,"h3",1),d.xc(107,"MdcMenuSelectionGroupIcon"),d.Qb(),d.xc(108," Required when using a selection group to indicate which item is selected. Should contain an icon or svg that indicates the selected state of the list item. "),d.Rb(109,"p"),d.xc(110," Selector: "),d.Rb(111,"span",2),d.xc(112,"mdcMenuSelectionGroupIcon"),d.Qb(),d.Qb(),d.xc(113," Exported as: "),d.Rb(114,"span",2),d.xc(115,"mdcMenuSelectionGroupIcon"),d.Qb(),d.Qb()),2&e&&(d.Bb(39),d.Ac("anchorMargin: ","{","top: number, bottom: number, left: number, right : number","}",""))},directives:[m.i,m.l],encapsulation:2}),L)},{path:"sass",component:(G=function e(){_classCallCheck(this,e)},G.\u0275fac=function(e){return new(e||G)},G.\u0275cmp=d.Fb({type:G,selectors:[["ng-component"]],decls:52,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""],["mdc-button","","href","/#/menu-surface-demo/sass"],["mdc-button","","href","/#/list-demo/sass"]],template:function(e,c){1&e&&(d.Rb(0,"div",0),d.Rb(1,"h4",1),d.xc(2,"Sass Mixins"),d.Qb(),d.Rb(3,"table"),d.Rb(4,"thead"),d.Rb(5,"tr"),d.Rb(6,"th"),d.xc(7,"Mixin"),d.Qb(),d.Rb(8,"th"),d.xc(9,"Description"),d.Qb(),d.Qb(),d.Qb(),d.Rb(10,"tbody"),d.Rb(11,"tr"),d.Rb(12,"td"),d.Rb(13,"code"),d.xc(14,"width($width)"),d.Qb(),d.Qb(),d.Rb(15,"td"),d.xc(16,"Used to set the "),d.Rb(17,"code"),d.xc(18,"width"),d.Qb(),d.xc(19," of the menu. When used without units (e.g. "),d.Rb(20,"code"),d.xc(21,"4"),d.Qb(),d.xc(22," or "),d.Rb(23,"code"),d.xc(24,"5"),d.Qb(),d.xc(25,") it computes the "),d.Rb(26,"code"),d.xc(27,"width"),d.Qb(),d.xc(28," by multiplying by the base width ("),d.Rb(29,"code"),d.xc(30,"56px"),d.Qb(),d.xc(31,"). When used with units (e.g. "),d.Rb(32,"code"),d.xc(33,"240px"),d.Qb(),d.xc(34,", "),d.Rb(35,"code"),d.xc(36,"15%"),d.Qb(),d.xc(37,", or "),d.Rb(38,"code"),d.xc(39,"calc(200px + 10px)"),d.Qb(),d.xc(40," it sets the "),d.Rb(41,"code"),d.xc(42,"width"),d.Qb(),d.xc(43," to the exact value provided."),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(44,"p"),d.xc(45,"See "),d.Rb(46,"a",2),d.xc(47,"Menu Surface"),d.Qb(),d.xc(48," and "),d.Rb(49,"a",3),d.xc(50,"List"),d.Qb(),d.xc(51," documentation for additional style customization options."),d.Qb(),d.Qb())},directives:[m.l,a.a],encapsulation:2}),G)},{path:"examples",component:(I=function(){function e(){_classCallCheck(this,e),this.corners=["topStart","topEnd","bottomStart","bottomEnd"],this.fruits=[{label:"Passionfruit"},{label:"Orange"},{label:"Guava"},{label:"Pitaya"},{label:null},{label:"Pinaeapple"},{label:"Mango"},{label:"Papaya"},{label:"Lychee"}],this.exampleMenu={html:'<div mdcMenuSurfaceAnchor #demoAnchor>\n  <button mdc-button raised (click)="demo.open = !demo.open">\n    Show Menu\n  </button>\n\n  <mdc-menu #demo [anchorElement]="demoAnchor" (selected)="onMenuSelect($event)">\n    <mdc-list>\n      <ng-container *ngFor="let fruit of fruits" [ngSwitch]="!!fruit.label">\n        <mdc-list-item *ngSwitchCase="true">{{fruit.label}}</mdc-list-item>\n        <mdc-list-divider *ngSwitchCase="false"></mdc-list-divider>\n      </ng-container>\n    </mdc-list>\n  </mdc-menu>\n</div>',ts:"import { MdcListItem } from '@angular-mdc/web';\n\nfruits = [\n  { label: 'Passionfruit' },\n  { label: 'Orange' },\n  { label: 'Guava' },\n  { label: 'Pitaya'},\n  { label: null }, // The html uses ngSwitchCase to check for a null label, and displays mdc-list-divider\n  { label: 'Pinaeapple'},\n  { label: 'Mango'},\n  { label: 'Papaya'},\n  { label: 'Lychee'}\n];\n\nonMenuSelect(event: { index: number, item: MdcListItem }) {\n  console.log(event.index);\n}\n\naddFruit() {\n  this.fruits.push({ label: 'New fruit item' });\n}"},this.exampleSelectionGroup={html:'<div mdcMenuSurfaceAnchor #demoSelectionAnchor>\n  <button mdc-button raised (click)="demoSelectionGroup.open = !demoSelectionGroup.open">\n    Show Selection Group Menu\n  </button>\n  <mdc-menu #demoSelectionGroup [anchorElement]="demoSelectionAnchor">\n    <mdc-list>\n      <mdc-menu-selection-group>\n        <mdc-list-item>\n          <mdc-icon mdcMenuSelectionGroupIcon>check</mdc-icon>\n          Single\n        </mdc-list-item>\n        <mdc-list-item disabled>\n          <mdc-icon mdcMenuSelectionGroupIcon>check</mdc-icon>\n          1.15\n        </mdc-list-item>\n        <mdc-list-item>\n          <mdc-icon mdcMenuSelectionGroupIcon>check</mdc-icon>\n          Double\n        </mdc-list-item>\n        <mdc-list-item>\n          <mdc-icon mdcMenuSelectionGroupIcon>check</mdc-icon>\n          Custom: 1.2\n        </mdc-list-item>\n      </mdc-menu-selection-group>\n      <mdc-list-divider></mdc-list-divider>\n      <mdc-menu-selection-group>\n        <mdc-list-item>\n          <mdc-icon mdcMenuSelectionGroupIcon>check</mdc-icon>\n          Item\n        </mdc-list-item>\n        <mdc-list-item>\n          <mdc-icon mdcMenuSelectionGroupIcon>check</mdc-icon>\n          Another Item\n        </mdc-list-item>\n      </mdc-menu-selection-group>\n      <mdc-list-divider></mdc-list-divider>\n      <mdc-list-item>Add space before paragraph</mdc-list-item>\n      <mdc-list-item>Add space after paragraph</mdc-list-item>\n      <mdc-list-divider></mdc-list-divider>\n      <mdc-list-item>Custom spacing...</mdc-list-item>\n    </mdc-list>\n  </mdc-menu>\n</div>'},this.exampleSelectionGroupSvg={html:'<div mdcMenuSurfaceAnchor #demoSimpleAnchor>\n  <button mdc-button raised (click)="demoSimple.open = !demoSimple.open">\n    Show Selection Group Menu\n  </button>\n  <mdc-menu #demoSimple [anchorElement]="demoSimpleAnchor">\n    <mdc-list>\n      <mdc-menu-selection-group>\n        <mdc-list-item>\n          <mdc-icon mdcMenuSelectionGroupIcon>\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n              <path fill="none" d="M0 0h24v24H0z" />\n              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n            </svg>\n          </mdc-icon>\n          Single\n        </mdc-list-item>\n        <mdc-list-item disabled>\n          <mdc-icon mdcMenuSelectionGroupIcon>\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n              <path fill="none" d="M0 0h24v24H0z" />\n              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n            </svg>\n          </mdc-icon>\n          1.15\n        </mdc-list-item>\n        <mdc-list-item>\n          <mdc-icon mdcMenuSelectionGroupIcon>\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n              <path fill="none" d="M0 0h24v24H0z" />\n              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n            </svg>\n          </mdc-icon>\n          Double\n        </mdc-list-item>\n        <mdc-list-item>\n          <mdc-icon mdcMenuSelectionGroupIcon>\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n              <path fill="none" d="M0 0h24v24H0z" />\n              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />\n            </svg>\n          </mdc-icon>\n          Custom: 1.2\n        </mdc-list-item>\n      </mdc-menu-selection-group>\n      <mdc-list-divider></mdc-list-divider>\n      <mdc-list-item>Add space before paragraph</mdc-list-item>\n      <mdc-list-item>Add space after paragraph</mdc-list-item>\n      <mdc-list-divider></mdc-list-divider>\n      <mdc-list-item>Custom spacing...</mdc-list-item>\n    </mdc-list>\n  </mdc-menu>\n</div>'},this.exampleCard={html:'<div class="demo-content">\n<mdc-card class="demo-card">\n  <mdc-card-primary-action>\n    <div class="demo-card__primary">\n      <h2 class="demo-card__title" mdcHeadline6>Our Changing Planet</h2>\n      <h3 class="demo-card__subtitle" mdcSubtitle2>by Kurt Wagner</h3>\n    </div>\n    <div class="demo-card__secondary" mdcBody2>\n      Select the vertical menu icon button below.\n    </div>\n  </mdc-card-primary-action>\n  <mdc-card-actions>\n    <mdc-card-action-buttons>\n      <button mdc-button mdcCardAction="button">Read</button>\n    </mdc-card-action-buttons>\n    <mdc-card-action-icons>\n      <button mdcIconButton mdcCardAction="icon" icon="share"></button>\n      <div mdcMenuSurfaceAnchor #cardAnchor>\n        <button mdcIconButton mdcCardAction="icon" icon="more_vert"\n          (click)="cardMenu.open = !cardMenu.open"></button>\n        <mdc-menu #cardMenu [anchorElement]="cardAnchor">\n          <mdc-list>\n            <mdc-list-item>Open</mdc-list-item>\n            <mdc-list-item>Dismiss</mdc-list-item>\n          </mdc-list>\n        </mdc-menu>\n      </div>\n    </mdc-card-action-icons>\n  </mdc-card-actions>\n</mdc-card>'}}return _createClass(e,[{key:"onMenuSelect",value:function(e){this.lastSelection=e.index}},{key:"addFruit",value:function(){this.fruits.push({label:"New fruit item"})}}]),e}(),I.\u0275fac=function(e){return new(e||I)},I.\u0275cmp=d.Fb({type:I,selectors:[["ng-component"]],decls:190,vars:26,consts:[[1,"demo-content"],[1,"demo-layout__row"],[1,"demo-content__headline"],[1,"demo-layout__column"],["menuSurfaceAnchorCorner",""],[4,"ngFor","ngForOf"],["label","Top margin","type","number"],["marginTop",""],["label","Bottom margin","type","number"],["marginBottom",""],["label","Left margin","type","number"],["marginLeft",""],["label","Right margin","type","number"],["marginRight",""],["quickOpen",""],["fixed",""],["wrapFocus",""],[3,"checked"],["closeSurfaceOnSelection",""],["placeholder","Default Focus State"],["defaultFocusState",""],["value","0"],["value","1"],["value","2"],["value","3"],[1,"demo-layout--center"],["mdcMenuSurfaceAnchor",""],["demoAnchor",""],["mdc-button","","raised","",3,"click"],[3,"anchorElement","anchorCorner","quickOpen","defaultFocusState","fixed","wrapFocus","closeSurfaceOnSelection","anchorMargin","selected"],["demo",""],[3,"ngSwitch",4,"ngFor","ngForOf"],["mdc-button","",3,"click"],[3,"example"],["demoSelectionAnchor",""],[3,"anchorElement"],["demoSelectionGroup",""],["mdcMenuSelectionGroupIcon",""],["disabled",""],["demoSimpleAnchor",""],["demoSimple",""],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24"],["fill","none","d","M0 0h24v24H0z"],["d","M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"],[1,"demo-card"],[1,"demo-card__primary"],["mdcHeadline6","",1,"demo-card__title"],["mdcSubtitle2","",1,"demo-card__subtitle"],["mdcBody2","",1,"demo-card__secondary"],["mdc-button","","mdcCardAction","button"],["mdcIconButton","","mdcCardAction","icon","icon","share"],["cardAnchor",""],["mdcIconButton","","mdcCardAction","icon","icon","more_vert",3,"click"],["cardMenu",""],[3,"value"],[3,"ngSwitch"],[4,"ngSwitchCase"]],template:function(e,c){if(1&e){var t=d.Sb();d.Rb(0,"div",0),d.Rb(1,"div",1),d.Rb(2,"div",0),d.Rb(3,"h3",2),d.xc(4,"Anchor Corner"),d.Qb(),d.Rb(5,"div",3),d.Rb(6,"mdc-radio-group",3,4),d.vc(8,C,4,2,"mdc-form-field",5),d.Qb(),d.Qb(),d.Qb(),d.Rb(9,"div",0),d.Rb(10,"h3",2),d.xc(11,"Anchor Margin"),d.Qb(),d.Rb(12,"div",3),d.Mb(13,"mdc-text-field",6,7),d.Mb(15,"mdc-text-field",8,9),d.Mb(17,"mdc-text-field",10,11),d.Mb(19,"mdc-text-field",12,13),d.Qb(),d.Qb(),d.Rb(21,"div",0),d.Rb(22,"div",3),d.Rb(23,"mdc-form-field"),d.Mb(24,"mdc-checkbox",null,14),d.Rb(26,"label"),d.xc(27),d.Qb(),d.Qb(),d.Rb(28,"mdc-form-field"),d.Mb(29,"mdc-checkbox",null,15),d.Rb(31,"label"),d.xc(32,"Fixed position (scrolls with page)"),d.Qb(),d.Qb(),d.Rb(33,"mdc-form-field"),d.Mb(34,"mdc-checkbox",null,16),d.Rb(36,"label"),d.xc(37,"Wrap keyboard focus"),d.Qb(),d.Qb(),d.Rb(38,"mdc-form-field"),d.Mb(39,"mdc-checkbox",17,18),d.Rb(41,"label"),d.xc(42,"Close Surface on Selection"),d.Qb(),d.Qb(),d.Rb(43,"mdc-select",19,20),d.Rb(45,"mdc-menu"),d.Rb(46,"mdc-list"),d.Rb(47,"mdc-list-item",21),d.xc(48,"None"),d.Qb(),d.Rb(49,"mdc-list-item",22),d.xc(50,"List Root"),d.Qb(),d.Rb(51,"mdc-list-item",23),d.xc(52,"First Item"),d.Qb(),d.Rb(53,"mdc-list-item",24),d.xc(54,"Last Item"),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(55,"div",25),d.Rb(56,"div",26,27),d.Rb(58,"button",28),d.Zb("click",(function(e){d.pc(t);var c=d.oc(61);return c.open=!c.open})),d.xc(59," Show Menu "),d.Qb(),d.Rb(60,"mdc-menu",29,30),d.Zb("selected",(function(e){return c.onMenuSelect(e)})),d.Rb(62,"mdc-list"),d.vc(63,B,3,3,"ng-container",31),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(64,"button",32),d.Zb("click",(function(e){return c.addFruit()})),d.xc(65,"Add Fruit"),d.Qb(),d.Rb(66,"p"),d.xc(67),d.Qb(),d.Rb(68,"p"),d.xc(69),d.Qb(),d.Mb(70,"example-viewer",33),d.Qb(),d.Rb(71,"div",0),d.Rb(72,"h3",2),d.xc(73,"Selection Group Menu"),d.Qb(),d.Rb(74,"div",26,34),d.Rb(76,"button",28),d.Zb("click",(function(e){d.pc(t);var c=d.oc(79);return c.open=!c.open})),d.xc(77," Show Selection Group Menu "),d.Qb(),d.Rb(78,"mdc-menu",35,36),d.Rb(80,"mdc-list"),d.Rb(81,"mdc-menu-selection-group"),d.Rb(82,"mdc-list-item"),d.Rb(83,"mdc-icon",37),d.xc(84,"check"),d.Qb(),d.xc(85," Single "),d.Qb(),d.Rb(86,"mdc-list-item",38),d.Rb(87,"mdc-icon",37),d.xc(88,"check"),d.Qb(),d.xc(89," 1.15 "),d.Qb(),d.Rb(90,"mdc-list-item"),d.Rb(91,"mdc-icon",37),d.xc(92,"check"),d.Qb(),d.xc(93," Double "),d.Qb(),d.Rb(94,"mdc-list-item"),d.Rb(95,"mdc-icon",37),d.xc(96,"check"),d.Qb(),d.xc(97," Custom: 1.2 "),d.Qb(),d.Qb(),d.Mb(98,"mdc-list-divider"),d.Rb(99,"mdc-menu-selection-group"),d.Rb(100,"mdc-list-item"),d.Rb(101,"mdc-icon",37),d.xc(102,"check"),d.Qb(),d.xc(103," Item "),d.Qb(),d.Rb(104,"mdc-list-item"),d.Rb(105,"mdc-icon",37),d.xc(106,"check"),d.Qb(),d.xc(107," Another Item "),d.Qb(),d.Qb(),d.Mb(108,"mdc-list-divider"),d.Rb(109,"mdc-list-item"),d.xc(110,"Add space before paragraph"),d.Qb(),d.Rb(111,"mdc-list-item"),d.xc(112,"Add space after paragraph"),d.Qb(),d.Mb(113,"mdc-list-divider"),d.Rb(114,"mdc-list-item"),d.xc(115,"Custom spacing..."),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Mb(116,"example-viewer",33),d.Qb(),d.Rb(117,"div",0),d.Rb(118,"h3",2),d.xc(119,"Selection Group Menu - Svg"),d.Qb(),d.Rb(120,"div",26,39),d.Rb(122,"button",28),d.Zb("click",(function(e){d.pc(t);var c=d.oc(125);return c.open=!c.open})),d.xc(123," Show Selection Group Menu "),d.Qb(),d.Rb(124,"mdc-menu",35,40),d.Rb(126,"mdc-list"),d.Rb(127,"mdc-menu-selection-group"),d.Rb(128,"mdc-list-item"),d.Rb(129,"mdc-icon",37),d.cc(),d.Rb(130,"svg",41),d.Mb(131,"path",42),d.Mb(132,"path",43),d.Qb(),d.Qb(),d.xc(133," Single "),d.Qb(),d.bc(),d.Rb(134,"mdc-list-item",38),d.Rb(135,"mdc-icon",37),d.cc(),d.Rb(136,"svg",41),d.Mb(137,"path",42),d.Mb(138,"path",43),d.Qb(),d.Qb(),d.xc(139," 1.15 "),d.Qb(),d.bc(),d.Rb(140,"mdc-list-item"),d.Rb(141,"mdc-icon",37),d.cc(),d.Rb(142,"svg",41),d.Mb(143,"path",42),d.Mb(144,"path",43),d.Qb(),d.Qb(),d.xc(145," Double "),d.Qb(),d.bc(),d.Rb(146,"mdc-list-item"),d.Rb(147,"mdc-icon",37),d.cc(),d.Rb(148,"svg",41),d.Mb(149,"path",42),d.Mb(150,"path",43),d.Qb(),d.Qb(),d.xc(151," Custom: 1.2 "),d.Qb(),d.Qb(),d.bc(),d.Mb(152,"mdc-list-divider"),d.Rb(153,"mdc-list-item"),d.xc(154,"Add space before paragraph"),d.Qb(),d.Rb(155,"mdc-list-item"),d.xc(156,"Add space after paragraph"),d.Qb(),d.Mb(157,"mdc-list-divider"),d.Rb(158,"mdc-list-item"),d.xc(159,"Custom spacing..."),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Mb(160,"example-viewer",33),d.Qb(),d.Rb(161,"div",0),d.Rb(162,"h3",2),d.xc(163,"Open Menu from Card icon"),d.Qb(),d.Rb(164,"mdc-card",44),d.Rb(165,"mdc-card-primary-action"),d.Rb(166,"div",45),d.Rb(167,"h2",46),d.xc(168,"Our Changing Planet"),d.Qb(),d.Rb(169,"h3",47),d.xc(170,"by Kurt Wagner"),d.Qb(),d.Qb(),d.Rb(171,"div",48),d.xc(172," Select the vertical menu icon button below. "),d.Qb(),d.Qb(),d.Rb(173,"mdc-card-actions"),d.Rb(174,"mdc-card-action-buttons"),d.Rb(175,"button",49),d.xc(176,"Read"),d.Qb(),d.Qb(),d.Rb(177,"mdc-card-action-icons"),d.Mb(178,"button",50),d.Rb(179,"div",26,51),d.Rb(181,"button",52),d.Zb("click",(function(e){d.pc(t);var c=d.oc(183);return c.open=!c.open})),d.Qb(),d.Rb(182,"mdc-menu",35,53),d.Rb(184,"mdc-list"),d.Rb(185,"mdc-list-item"),d.xc(186,"Open"),d.Qb(),d.Rb(187,"mdc-list-item"),d.xc(188,"Dismiss"),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Mb(189,"example-viewer",33),d.Qb()}if(2&e){var n=d.oc(7),i=d.oc(14),o=d.oc(16),b=d.oc(18),m=d.oc(20),a=d.oc(25),l=d.oc(30),r=d.oc(35),s=d.oc(40),u=d.oc(44),p=d.oc(57),h=d.oc(61),R=d.oc(75),Q=d.oc(121),x=d.oc(180);d.Bb(8),d.ic("ngForOf",c.corners),d.Bb(19),d.zc("Disable open animation: ",a.checked,""),d.Bb(12),d.ic("checked",s),d.Bb(21),d.ic("anchorElement",p)("anchorCorner",n.value)("quickOpen",a.checked)("defaultFocusState",u.value)("fixed",l.checked)("wrapFocus",r.checked)("closeSurfaceOnSelection",s.checked)("anchorMargin",d.mc(21,E,i.value,o.value,b.value,m.value)),d.Bb(3),d.ic("ngForOf",c.fruits),d.Bb(4),d.zc("Selected index: ",c.lastSelection,""),d.Bb(2),d.zc("Anchor corner: ",h.anchorCorner,""),d.Bb(1),d.ic("example",c.exampleMenu),d.Bb(8),d.ic("anchorElement",R),d.Bb(38),d.ic("example",c.exampleSelectionGroup),d.Bb(8),d.ic("anchorElement",Q),d.Bb(36),d.ic("example",c.exampleSelectionGroupSvg),d.Bb(22),d.ic("anchorElement",x),d.Bb(7),d.ic("example",c.exampleCard)}},directives:[l.a,r.j,s.a,u.a,p.a,h.a,R.a,Q.a,x.b,f.a,a.a,v.a,g.a,S.b,g.b,M.a,w.a,w.h,m.i,m.l,m.b,w.e,w.c,w.b,w.d,k.a,y.b,r.l,r.m],encapsulation:2}),I)}]}],P=((O=function e(){_classCallCheck(this,e)}).\u0275mod=d.Jb({type:O}),O.\u0275inj=d.Ib({factory:function(e){return new(e||O)},imports:[[i.e.forChild(D)],i.e]}),O);t.d(c,"MenuModule",(function(){return H}));var z,H=((z=function e(){_classCallCheck(this,e)}).\u0275mod=d.Jb({type:z}),z.\u0275inj=d.Ib({factory:function(e){return new(e||z)},imports:[[n.a,P]]}),z)}}]);