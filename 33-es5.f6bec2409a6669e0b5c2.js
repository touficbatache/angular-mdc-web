function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}}function _createClass(a,e,t){return e&&_defineProperties(a.prototype,e),t&&_defineProperties(a,t),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{lBVn:function(a,e,t){"use strict";t.r(e),t.d(e,"TabsModule",(function(){return I}));var c=t("d2mR"),n=t("tyNb"),b=t("leug"),i=t("fXoL"),o=t("LuDt"),l=t("w0pw"),r=t("9UYg"),s=t("vaAN"),m=t("NmUe"),d=t("ofXK"),u=t("dkiD"),p=t("+lgO"),f=t("o085");function h(a,e){if(1&a&&i.Mb(0,"mdc-tab",29),2&a){var t=e.$implicit;i.ic("label",t.label)("icon",t.icon)}}function v(a,e){1&a&&i.Mb(0,"mdc-tab",30),2&a&&i.ic("label",e.$implicit.label)}function g(a,e){if(1&a&&i.Mb(0,"mdc-tab",29),2&a){var t=e.$implicit;i.ic("label",t.label)("icon",t.icon)}}function x(a,e){1&a&&i.Mb(0,"mdc-tab",31),2&a&&i.ic("icon",e.$implicit.icon)}function T(a,e){if(1&a&&i.Mb(0,"mdc-tab",29),2&a){var t=e.$implicit;i.ic("label",t.label)("icon",t.icon)}}function w(a,e){1&a&&i.Mb(0,"mdc-tab",30),2&a&&i.ic("label",e.$implicit.label)}function y(a,e){if(1&a&&i.Mb(0,"mdc-tab",29),2&a){var t=e.$implicit;i.ic("label",t.label)("icon",t.icon)}}function R(a,e){if(1&a&&i.Mb(0,"mdc-tab",29),2&a){var t=e.$implicit;i.ic("label",t.label)("icon",t.icon)}}var A,Q,M,k,O,B=[{path:"",component:(M=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Tabs",description:"Tabs organize content across different screens, data sets, and other interactions.",references:[{name:"Material Design guidelines: Tabs",url:"https://material.io/design/components/tabs.html"},{name:"Material Components Web: Tab Bar",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-bar/README.md"},{name:"Material Components Web: Tab Scroller",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-scroller/README.md"},{name:"Material Components Web: Tab",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab/README.md"},{name:"Material Components Web: Tab Indicator",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-indicator/README.md"}],mdcUrls:[{name:"Tab Bar Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-bar/README.md#sass-mixins"},{name:"Scroller Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-scroller/README.md#sass-mixins"},{name:"Tab Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab/README.md#sass-mixins"},{name:"Indicator Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-tab-indicator/README.md#sass-mixins"}],code:"import {MdcTabBarModule} from '@angular-mdc/web/tab-bar';",sass:"@use '@material/tab-bar/mdc-tab-bar';\n@use '@material/tab-bar';\n@use '@material/tab-scroller/mdc-tab-scroller';\n@use '@material/tab-scroller';\n@use '@material/tab-indicator/mdc-tab-indicator';\n@use '@material/tab-indicator';\n@use '@material/tab/mdc-tab';\n@use '@material/tab';"}}}]),a}(),M.\u0275fac=function(a){return new(a||M)},M.\u0275cmp=i.Fb({type:M,selectors:[["ng-component"]],viewQuery:function(a,e){var t;1&a&&i.tc(b.b,!0),2&a&&i.nc(t=i.ac())&&(e._componentViewer=t.first)},decls:1,vars:0,template:function(a,e){1&a&&i.Mb(0,"component-viewer")},directives:[o.a],encapsulation:2}),M),children:[{path:"",redirectTo:"api"},{path:"api",component:(Q=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"ngOnInit",value:function(){this._componentApi.docApi={sections:[{header:"MdcTabBar",selectors:["mdc-tab-bar"],exportedAs:"mdcTabBar",categories:[{name:"Properties",items:[{name:"stacked: boolean",summary:"Indicates that the tab icon and label should flow vertically instead of horizontally."},{name:"fixed: boolean",summary:"Indicates that the tab should shrink in size to be as narrow as possible without causing text to wrap."},{name:"fade: boolean",summary:"Sets up the tab indicator to fade in on activation and fade out on deactivation. Default is false."},{name:"activeTabIndex: number",summary:"Set the active tab by index. (Default is 0). Set to -1 for no initially selected tab."},{name:"iconIndicator: string",summary:"A material icon to display in the center of the tab."},{name:"useAutomaticActivation: boolean",summary:"If true, permits using movement keys to switch tabs."},{name:"focusOnActivate: boolean",summary:"Sets whether the tab should focus itself when activated. Defaults to true."},{name:"align: string",summary:"Sets the elements inside the scroll content element to be aligned to the start, center or end of the scroll content element.\n                Valid values: 'start' | 'center' | 'end' * Only for Fixed Tabs."}]},{name:"Methods",items:[{name:"activateTab(index: number)",summary:"Activates the Tab at the given index."},{name:"scrollIntoView(index: number)",summary:"Scrolls the Tab at the given index into view."},{name:"getActiveTabIndex(): number",summary:"Returns the index of the active Tab."},{name:"getActiveTab(): MdcTab | undefined",summary:"Returns the MdcTab that is active."},{name:"getTabIndex(tab: MdcTab): number",summary:"Returns the MdcTab index for given tab."},{name:"disableTab(index: number, disabled: boolean)",summary:"Control whether or not the tab is in a disable state."}]},{name:"Events",items:[{name:"activated: (source: MdcTabBar, index: number, tab: MdcTab)",summary:"Emitted when a tab is activated."}]}]},{header:"MdcTabBarScroller",selectors:["mdc-tab-scroller"],exportedAs:"mdcTabBarScroller",categories:[{name:"Properties",items:[{name:"scrollTo(scrollX: number)",summary:"Scrolls to the scrollX value."},{name:"incrementScroll(scrollXIncrement: number)\t",summary:"Increments the current scroll value by the scrollX value."},{name:"getScrollPosition(): number",summary:"Returns the current visual scroll position."}]}]},{header:"MdcTab",selectors:["mdc-tab"],exportedAs:"mdcTab",categories:[{name:"Properties",items:[{name:"id: string",summary:"Unique id of the tab (auto generated if not supplied)."},{name:"label: string",summary:"Optional. Adds a label in the tab."},{name:"icon: string",summary:"Optional. Indicates a leading icon in the tab."},{name:"disabled: boolean",summary:"Optional. Control the disabled state of the tab."},{name:"stacked: boolean",summary:"Indicates that the tab icon and label should flow vertically instead of horizontally."},{name:"fixed: boolean",summary:"Indicates that the tab should shrink in size to be as narrow as possible without causing text to wrap."},{name:"focusOnActivate: boolean",summary:"Sets whether the tab should focus itself when activated. Defaults to true."}]},{name:"Methods",items:[{name:"getTabBarParent(): MdcTabBarParentComponent",summary:"Interface for communicating with ancestor MdcTabBar."},{name:"focus(): void",summary:"Sets focus to the tab."}]},{name:"Events",items:[{name:"interacted: (detail: MdcTab)",summary:"Emitted when a tab is interacted with."}]}]},{header:"MdcTabLabel",summary:"Optional. Allows customizing a label in the tab.",selectors:["mdc-tab-label","mdcTabLabel"],exportedAs:"mdcTabLabel"},{header:"MdcTabIcon",summary:"Optional. Allows customizing a leading icon in the tab.",selectors:["mdc-icon[mdcTabIcon]"],exportedAs:"mdcTabIcon"}]}}}]),a}(),Q.\u0275fac=function(a){return new(a||Q)},Q.\u0275cmp=i.Fb({type:Q,selectors:[["ng-component"]],viewQuery:function(a,e){var t;1&a&&i.tc(b.a,!0),2&a&&i.nc(t=i.ac())&&(e._componentApi=t.first)},decls:1,vars:0,template:function(a,e){1&a&&i.Mb(0,"component-api")},directives:[l.a],encapsulation:2}),Q)},{path:"examples",component:(A=function(){function a(){_classCallCheck(this,a),this.tabs=[{label:"Flights",icon:"airplanemode_active"},{label:"Hotel",icon:"hotel"},{label:"Favorites",icon:"favorite"}],this.scrollingTabs=[{label:"Person",icon:"person"},{label:"Explore",icon:"explore"},{label:"Build",icon:"build"},{label:"Accessibility",icon:"accessibility"},{label:"Flights",icon:"airplanemode_active"},{label:"Hotel",icon:"hotel"},{label:"Favorites",icon:"favorite"}],this.exampleTS="tabs = [\n  { label: 'Flights', icon: 'airplanemode_active' },\n  { label: 'Hotel', icon: 'hotel' },\n  { label: 'Favorites', icon: 'favorite' }\n];",this.exampleFullTS="import { MdcTabActivatedEvent } from '@angular-mdc/web';\n\ntabs = [\n  { label: 'Flights', icon: 'airplanemode_active' },\n  { label: 'Hotel', icon: 'hotel' },\n  { label: 'Favorites', icon: 'favorite' }\n];\n\nlogTab(event: MdcTabActivatedEvent): void {\n  console.log(event.index);\n}\n\naddTab(): void {\n  this.tabs.push({\n    label: 'New Tab',\n    icon: 'hotel'\n  });\n}",this.exampleDynamicTabs={html:'<mdc-tab-bar #example1 (activated)="logTab($event)" [activeTabIndex]="1" useAutomaticActivation>\n  <mdc-tab-scroller>\n    <mdc-tab *ngFor="let tab of tabs" [label]="tab.label" [icon]="tab.icon"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>\n\n<p>Activated tab: {{ example1.activeTabIndex }}</p>',ts:this.exampleFullTS},this.exampleTabNoSelection={html:'<mdc-tab-bar [activeTabIndex]="-1">\n  <mdc-tab-scroller>\n    <mdc-tab label="Flights"></mdc-tab>\n    <mdc-tab label="Hotel"></mdc-tab>\n    <mdc-tab label="Favorites"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>',ts:this.exampleTS},this.exampleIconOnLeft={html:'<mdc-tab-bar>\n  <mdc-tab-scroller>\n    <mdc-tab>\n      <mdc-icon mdcTabIcon>favorite</mdc-icon>\n      <mdc-tab-label>Favorites</mdc-tab-label>\n    </mdc-tab>\n    <mdc-tab label="Flights" icon="airplanemode_active"></mdc-tab>\n    <mdc-tab label="Hotel" icon="hotel"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>'},this.exampleStacked={html:'<mdc-tab-bar stacked>\n  <mdc-tab-scroller>\n    <mdc-tab *ngFor="let tab of tabs" [label]="tab.label" [icon]="tab.icon"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>',ts:this.exampleTS},this.exampleTabFade={html:'<mdc-tab-bar fade>\n  <mdc-tab-scroller>\n    <mdc-tab *ngFor="let tab of tabs" [label]="tab.label" [icon]="tab.icon"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>',ts:this.exampleTS},this.exampleIconIndicatorLabels={html:'<mdc-tab-bar iconIndicator=\'star\'>\n  <mdc-tab-scroller>\n    <mdc-tab *ngFor="let tab of tabs" [label]="tab.label"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>',ts:this.exampleTS},this.exampleIconIndicator={html:'<mdc-tab-bar iconIndicator=\'donut_large\'>\n  <mdc-tab-scroller>\n    <mdc-tab icon="camera"></mdc-tab>\n    <mdc-tab icon="accessibility"></mdc-tab>\n    <mdc-tab icon="exit_to_app"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>'},this.exampleFixedTabs={html:'<mdc-tab-bar fixed>\n  <mdc-tab-scroller>\n    <mdc-tab *ngFor="let tab of tabs" [label]="tab.label" [icon]="tab.icon"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>',ts:this.exampleTS},this.exampleScrollingTabs={html:'<mdc-tab-bar>\n  <mdc-tab-scroller>\n    <mdc-tab *ngFor="let tab of scrollingTabs" [label]="tab.label" [icon]="tab.icon"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>',ts:"scrollingTabs = [\n  { label: 'Person', icon: 'person'},\n  { label: 'Explore', icon: 'explore'},\n  { label: 'Build', icon: 'build'},\n  { label: 'Accessibility', icon: 'accessibility'},\n  { label: 'Flights', icon: 'airplanemode_active' },\n  { label: 'Hotel', icon: 'hotel' },\n  { label: 'Favorites', icon: 'favorite' }\n];"},this.exampleTabNoLabels={html:'<mdc-tab-bar>\n  <mdc-tab-scroller>\n    <mdc-tab *ngFor="let tab of tabs" [icon]="tab.icon"></mdc-tab>\n  </mdc-tab-scroller>\n</mdc-tab-bar>',ts:this.exampleTS}}return _createClass(a,[{key:"logTab",value:function(a){console.log(a.index)}},{key:"addTab",value:function(){this.tabs.push({label:"New Tab",icon:"hotel"})}}]),a}(),A.\u0275fac=function(a){return new(a||A)},A.\u0275cmp=i.Fb({type:A,selectors:[["ng-component"]],decls:127,vars:40,consts:[[1,"demo-content"],[1,"demo-content__headline"],[1,"demo-layout__row"],["mdc-button","","primary","",3,"click"],["mdc-button","",3,"click"],["useAutomaticActivation","",3,"activeTabIndex","focusOnActivate","activated"],["exampleDynamic",""],[3,"label","icon",4,"ngFor","ngForOf"],[3,"example"],[3,"activeTabIndex","focusOnActivate"],["demoTabNoIndex",""],[3,"label",4,"ngFor","ngForOf"],[3,"focusOnActivate"],["demoTabBarDefault",""],["mdcTabIcon",""],["label","Flights","icon","airplanemode_active"],["label","Hotel","icon","hotel"],["stacked","",3,"focusOnActivate"],["demoStackedTabBar",""],[3,"icon",4,"ngFor","ngForOf"],["fade","",3,"focusOnActivate"],["iconIndicator","star",3,"focusOnActivate"],["iconIndicator","donut_large",3,"focusOnActivate"],["icon","camera"],["icon","accessibility"],["icon","exit_to_app"],["fixed","",3,"focusOnActivate"],["demoFixedTabsTabBar",""],["demoScrollingTabBar",""],[3,"label","icon"],[3,"label"],[3,"icon"]],template:function(a,e){if(1&a){var t=i.Sb();i.Rb(0,"div",0),i.Rb(1,"h3",1),i.wc(2,"Dynamic"),i.Qb(),i.Rb(3,"div",2),i.Rb(4,"button",3),i.Zb("click",(function(){return e.addTab()})),i.wc(5,"Add Tab"),i.Qb(),i.Rb(6,"button",4),i.Zb("click",(function(){i.pc(t);var a=i.oc(13);return a.useAutomaticActivation=!a.useAutomaticActivation})),i.wc(7),i.Qb(),i.Rb(8,"button",4),i.Zb("click",(function(){return i.pc(t),i.oc(13).activateTab(2)})),i.wc(9,"Activate Tab(3)"),i.Qb(),i.Rb(10,"button",4),i.Zb("click",(function(){return i.pc(t),i.oc(13).disableTab(1,!0)})),i.wc(11,"Disable Tab(2)"),i.Qb(),i.Qb(),i.Rb(12,"mdc-tab-bar",5,6),i.Zb("activated",(function(a){return e.logTab(a)})),i.Rb(14,"mdc-tab-scroller"),i.uc(15,h,1,2,"mdc-tab",7),i.Qb(),i.Qb(),i.Rb(16,"p"),i.wc(17),i.Qb(),i.Mb(18,"example-viewer",8),i.Qb(),i.Rb(19,"div",0),i.Rb(20,"h3",1),i.wc(21,"No initial selection"),i.Qb(),i.Rb(22,"mdc-tab-bar",9,10),i.Rb(24,"mdc-tab-scroller"),i.uc(25,v,1,1,"mdc-tab",11),i.Qb(),i.Qb(),i.Rb(26,"p"),i.wc(27),i.Qb(),i.Mb(28,"example-viewer",8),i.Qb(),i.Rb(29,"div",0),i.Rb(30,"h3",1),i.wc(31,"Icon with label"),i.Qb(),i.Rb(32,"div",2),i.Rb(33,"button",4),i.Zb("click",(function(){i.pc(t);var a=i.oc(36);return a.fade=!a.fade})),i.wc(34),i.Qb(),i.Qb(),i.Rb(35,"mdc-tab-bar",12,13),i.Rb(37,"mdc-tab-scroller"),i.Rb(38,"mdc-tab"),i.Rb(39,"mdc-icon",14),i.wc(40,"favorite"),i.Qb(),i.Rb(41,"mdc-tab-label"),i.wc(42,"Favorites"),i.Qb(),i.Qb(),i.Mb(43,"mdc-tab",15),i.Mb(44,"mdc-tab",16),i.Qb(),i.Qb(),i.Mb(45,"example-viewer",8),i.Qb(),i.Rb(46,"div",0),i.Rb(47,"h3",1),i.wc(48,"Stacked"),i.Qb(),i.Rb(49,"div",2),i.Rb(50,"button",4),i.Zb("click",(function(){i.pc(t);var a=i.oc(53);return a.fade=!a.fade})),i.wc(51),i.Qb(),i.Qb(),i.Rb(52,"mdc-tab-bar",17,18),i.Rb(54,"mdc-tab-scroller"),i.uc(55,g,1,2,"mdc-tab",7),i.Qb(),i.Qb(),i.Mb(56,"example-viewer",8),i.Qb(),i.Rb(57,"div",0),i.Rb(58,"h3",1),i.wc(59,"No labels"),i.Qb(),i.Rb(60,"mdc-tab-bar",12),i.Rb(61,"mdc-tab-scroller"),i.uc(62,x,1,1,"mdc-tab",19),i.Qb(),i.Qb(),i.Mb(63,"example-viewer",8),i.Qb(),i.Rb(64,"div",0),i.Rb(65,"h3",1),i.wc(66,"Fading indicator"),i.Qb(),i.Rb(67,"mdc-tab-bar",20),i.Rb(68,"mdc-tab-scroller"),i.uc(69,T,1,2,"mdc-tab",7),i.Qb(),i.Qb(),i.Mb(70,"example-viewer",8),i.Qb(),i.Rb(71,"div",0),i.Rb(72,"h3",1),i.wc(73,"Icon indicator with label"),i.Qb(),i.Rb(74,"mdc-tab-bar",21),i.Rb(75,"mdc-tab-scroller"),i.uc(76,w,1,1,"mdc-tab",11),i.Qb(),i.Qb(),i.Mb(77,"example-viewer",8),i.Qb(),i.Rb(78,"div",0),i.Rb(79,"h3",1),i.wc(80,"Icon indicator"),i.Qb(),i.Rb(81,"mdc-tab-bar",22),i.Rb(82,"mdc-tab-scroller"),i.Mb(83,"mdc-tab",23),i.Mb(84,"mdc-tab",24),i.Mb(85,"mdc-tab",25),i.Qb(),i.Qb(),i.Mb(86,"example-viewer",8),i.Qb(),i.Rb(87,"div",0),i.Rb(88,"h3",1),i.wc(89,"Fixed"),i.Qb(),i.Rb(90,"div",2),i.Rb(91,"button",4),i.Zb("click",(function(){return i.pc(t),i.oc(104).align="start"})),i.wc(92,"Align Start"),i.Qb(),i.Rb(93,"button",4),i.Zb("click",(function(){return i.pc(t),i.oc(104).align="center"})),i.wc(94,"Align Center"),i.Qb(),i.Rb(95,"button",4),i.Zb("click",(function(){return i.pc(t),i.oc(104).align="end"})),i.wc(96,"Align End"),i.Qb(),i.Rb(97,"button",4),i.Zb("click",(function(){i.pc(t);var a=i.oc(104);return a.stacked=!a.stacked})),i.wc(98),i.Qb(),i.Rb(99,"button",4),i.Zb("click",(function(){i.pc(t);var a=i.oc(104);return a.fade=!a.fade})),i.wc(100),i.Qb(),i.Rb(101,"button",4),i.Zb("click",(function(){i.pc(t);var a=i.oc(104);return a.useAutomaticActivation=!a.useAutomaticActivation})),i.wc(102),i.Qb(),i.Qb(),i.Rb(103,"mdc-tab-bar",26,27),i.Rb(105,"mdc-tab-scroller"),i.uc(106,y,1,2,"mdc-tab",7),i.Qb(),i.Qb(),i.Mb(107,"example-viewer",8),i.Qb(),i.Rb(108,"div",0),i.Rb(109,"h3",1),i.wc(110,"Scrolling"),i.Qb(),i.Rb(111,"div",2),i.Rb(112,"button",4),i.Zb("click",(function(){return i.pc(t),i.oc(123).scrollIntoView(0)})),i.wc(113,"Scroll Start"),i.Qb(),i.Rb(114,"button",4),i.Zb("click",(function(){return i.pc(t),i.oc(123).scrollIntoView(6)})),i.wc(115,"Scroll End"),i.Qb(),i.Rb(116,"button",4),i.Zb("click",(function(){return i.pc(t),i.oc(123).activateTab(5)})),i.wc(117,"Activate Hotel"),i.Qb(),i.Rb(118,"button",4),i.Zb("click",(function(){i.pc(t);var a=i.oc(123);return a.stacked=!a.stacked})),i.wc(119),i.Qb(),i.Rb(120,"button",4),i.Zb("click",(function(){i.pc(t);var a=i.oc(123);return a.fade=!a.fade})),i.wc(121),i.Qb(),i.Qb(),i.Rb(122,"mdc-tab-bar",12,28),i.Rb(124,"mdc-tab-scroller"),i.uc(125,R,1,2,"mdc-tab",7),i.Qb(),i.Qb(),i.Mb(126,"example-viewer",8),i.Qb()}if(2&a){var c=i.oc(13),n=i.oc(23),b=i.oc(36),o=i.oc(53),l=i.oc(104),r=i.oc(123);i.Bb(7),i.yc("Automatic Activation: ",c.useAutomaticActivation?"On":"Off",""),i.Bb(5),i.ic("activeTabIndex",1)("focusOnActivate",!1),i.Bb(3),i.ic("ngForOf",e.tabs),i.Bb(2),i.yc("Activated tab: ",c.activeTabIndex,""),i.Bb(1),i.ic("example",e.exampleDynamicTabs),i.Bb(4),i.ic("activeTabIndex",-1)("focusOnActivate",!1),i.Bb(3),i.ic("ngForOf",e.tabs),i.Bb(2),i.yc("Activated tab: ",n.activeTabIndex,""),i.Bb(1),i.ic("example",e.exampleTabNoSelection),i.Bb(6),i.yc("Fade: ",b.fade?"On":"Off",""),i.Bb(1),i.ic("focusOnActivate",!1),i.Bb(10),i.ic("example",e.exampleIconOnLeft),i.Bb(6),i.yc("Fade: ",o.fade?"On":"Off",""),i.Bb(1),i.ic("focusOnActivate",!1),i.Bb(3),i.ic("ngForOf",e.tabs),i.Bb(1),i.ic("example",e.exampleStacked),i.Bb(4),i.ic("focusOnActivate",!1),i.Bb(2),i.ic("ngForOf",e.tabs),i.Bb(1),i.ic("example",e.exampleTabNoLabels),i.Bb(4),i.ic("focusOnActivate",!1),i.Bb(2),i.ic("ngForOf",e.tabs),i.Bb(1),i.ic("example",e.exampleTabFade),i.Bb(4),i.ic("focusOnActivate",!1),i.Bb(2),i.ic("ngForOf",e.tabs),i.Bb(1),i.ic("example",e.exampleIconIndicatorLabels),i.Bb(4),i.ic("focusOnActivate",!1),i.Bb(5),i.ic("example",e.exampleIconIndicator),i.Bb(12),i.yc("Stacked: ",l.stacked?"On":"Off",""),i.Bb(2),i.yc("Fade: ",l.fade?"On":"Off",""),i.Bb(2),i.yc("Automatic Activation: ",l.useAutomaticActivation?"On":"Off",""),i.Bb(1),i.ic("focusOnActivate",!1),i.Bb(3),i.ic("ngForOf",e.tabs),i.Bb(1),i.ic("example",e.exampleFixedTabs),i.Bb(12),i.yc("Stacked: ",r.stacked?"On":"Off",""),i.Bb(2),i.yc("Fade: ",r.fade?"On":"Off",""),i.Bb(1),i.ic("focusOnActivate",!1),i.Bb(3),i.ic("ngForOf",e.scrollingTabs),i.Bb(1),i.ic("example",e.exampleScrollingTabs)}},directives:[r.a,s.a,m.a,d.j,u.a,p.b,f.b,p.c,p.d],encapsulation:2}),A)}]}],F=((O=function a(){_classCallCheck(this,a)}).\u0275mod=i.Jb({type:O}),O.\u0275inj=i.Ib({factory:function(a){return new(a||O)},imports:[[n.e.forChild(B)],n.e]}),O),I=((k=function a(){_classCallCheck(this,a)}).\u0275mod=i.Jb({type:k}),k.\u0275inj=i.Ib({factory:function(a){return new(a||k)},imports:[[c.a,F]]}),k)}}]);