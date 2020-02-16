(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{CBXp:function(e,t,c){"use strict";c.r(t);var b=c("d2mR"),o=c("tyNb"),n=c("leug"),i=c("fXoL"),l=c("LuDt"),d=c("5l+6"),s=c("ywDi"),m=c("4G1d"),a=c("dkiD"),r=c("9UYg"),h=c("3Pt+");const f=[{path:"",component:(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Switches",description:"Buttons allow users to take actions, and make choices, with a single tap.",references:[{name:"Material Design guidelines: Switches",url:"https://material.io/design/components/selection-controls.html#switches"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-switch/README.md"}],code:"import {MdcSwitchModule} from '@angular-mdc/web';",sass:"@use '@material/switch/mdc-switch';\n@use '@material/switch';"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var c;1&e&&i.tc(n.a,!0),2&e&&i.nc(c=i.ac())&&(t._componentViewer=c.first)},decls:1,vars:0,template:function(e,t){1&e&&i.Mb(0,"component-viewer")},directives:[l.a],encapsulation:2}),e})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["ng-component"]],decls:83,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"h3",1),i.xc(2,"MdcSwitch"),i.Qb(),i.Rb(3,"p"),i.xc(4," Selector: "),i.Rb(5,"span",2),i.xc(6,"mdc-switch"),i.Qb(),i.Qb(),i.xc(7," Exported as: "),i.Rb(8,"span",2),i.xc(9,"mdcSwitch"),i.Qb(),i.Rb(10,"h4",3),i.xc(11,"Properties"),i.Qb(),i.Rb(12,"table"),i.Rb(13,"thead"),i.Rb(14,"tr"),i.Rb(15,"th"),i.xc(16,"Name"),i.Qb(),i.Rb(17,"th"),i.xc(18,"Description"),i.Qb(),i.Qb(),i.Qb(),i.Rb(19,"tbody"),i.Rb(20,"tr"),i.Rb(21,"td"),i.xc(22,"id: string"),i.Qb(),i.Rb(23,"td"),i.xc(24,"Unique Id of the switch (auto generated if not supplied)."),i.Qb(),i.Qb(),i.Rb(25,"tr"),i.Rb(26,"td"),i.xc(27,"name: string"),i.Qb(),i.Rb(28,"td"),i.xc(29,"Name of the switch."),i.Qb(),i.Qb(),i.Rb(30,"tr"),i.Rb(31,"td"),i.xc(32,"ariaLabel: string"),i.Qb(),i.Rb(33,"td"),i.xc(34,"Used to set the 'aria-label' attribute on the underlying input element."),i.Qb(),i.Qb(),i.Rb(35,"tr"),i.Rb(36,"td"),i.xc(37,"ariaLabelledby: string"),i.Qb(),i.Rb(38,"td"),i.xc(39,"The 'aria-labelledby' attribute takes precedence as the element's text alternative."),i.Qb(),i.Qb(),i.Rb(40,"tr"),i.Rb(41,"td"),i.xc(42,"tabIndex: number"),i.Qb(),i.Rb(43,"td"),i.xc(44,"Set the underlying tab index of the switch. (Default: 0)"),i.Qb(),i.Qb(),i.Rb(45,"tr"),i.Rb(46,"td"),i.xc(47,"checked: boolean"),i.Qb(),i.Rb(48,"td"),i.xc(49,"Use to set the checked value."),i.Qb(),i.Qb(),i.Rb(50,"tr"),i.Rb(51,"td"),i.xc(52,"disabled: boolean"),i.Qb(),i.Rb(53,"td"),i.xc(54,"Disables the switch."),i.Qb(),i.Qb(),i.Rb(55,"tr"),i.Rb(56,"td"),i.xc(57,"required: boolean"),i.Qb(),i.Rb(58,"td"),i.xc(59,"Whether the switch is required."),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(60,"h4",3),i.xc(61,"Methods"),i.Qb(),i.Rb(62,"table"),i.Rb(63,"tbody"),i.Rb(64,"tr"),i.Rb(65,"td"),i.xc(66,"toggle()"),i.Qb(),i.Rb(67,"td"),i.xc(68,"Toggle the checked state of the switch."),i.Qb(),i.Qb(),i.Rb(69,"tr"),i.Rb(70,"td"),i.xc(71,"focus()"),i.Qb(),i.Rb(72,"td"),i.xc(73,"Set focus to the switch."),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(74,"h4",3),i.xc(75,"Events"),i.Qb(),i.Rb(76,"table"),i.Rb(77,"tbody"),i.Rb(78,"tr"),i.Rb(79,"td"),i.xc(80,"change(source: MdcSwitch, checked: boolean)"),i.Qb(),i.Rb(81,"td"),i.xc(82,"Event dispatched on value change."),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb())},directives:[d.i,d.l],encapsulation:2}),e})()},{path:"sass",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["ng-component"]],decls:59,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"h4",1),i.xc(2,"Sass Mixins"),i.Qb(),i.Rb(3,"table"),i.Rb(4,"thead"),i.Rb(5,"tr"),i.Rb(6,"th"),i.xc(7,"Mixin"),i.Qb(),i.Rb(8,"th"),i.xc(9,"Description"),i.Qb(),i.Qb(),i.Qb(),i.Rb(10,"tbody"),i.Rb(11,"tr"),i.Rb(12,"td"),i.Rb(13,"code"),i.xc(14,"toggled-on-color($color)"),i.Qb(),i.Qb(),i.Rb(15,"td"),i.xc(16,"Sets the base color of the track, thumb, and ripple when the switch is toggled on."),i.Qb(),i.Qb(),i.Rb(17,"tr"),i.Rb(18,"td"),i.Rb(19,"code"),i.xc(20,"toggled-off-color($color)"),i.Qb(),i.Qb(),i.Rb(21,"td"),i.xc(22,"Sets the base color of the track, thumb, and ripple when the switch is toggled off."),i.Qb(),i.Qb(),i.Rb(23,"tr"),i.Rb(24,"td"),i.Rb(25,"code"),i.xc(26,"toggled-on-track-color($color)"),i.Qb(),i.Qb(),i.Rb(27,"td"),i.xc(28,"Sets color of the track when the switch is toggled on."),i.Qb(),i.Qb(),i.Rb(29,"tr"),i.Rb(30,"td"),i.Rb(31,"code"),i.xc(32,"toggled-off-track-color($color)"),i.Qb(),i.Qb(),i.Rb(33,"td"),i.xc(34,"Sets color of the track when the switch is toggled off."),i.Qb(),i.Qb(),i.Rb(35,"tr"),i.Rb(36,"td"),i.Rb(37,"code"),i.xc(38,"toggled-on-thumb-color($color)"),i.Qb(),i.Qb(),i.Rb(39,"td"),i.xc(40,"Sets color of the thumb when the switch is toggled on."),i.Qb(),i.Qb(),i.Rb(41,"tr"),i.Rb(42,"td"),i.Rb(43,"code"),i.xc(44,"toggled-off-thumb-color($color)"),i.Qb(),i.Qb(),i.Rb(45,"td"),i.xc(46,"Sets color of the thumb when the switch is toggled off."),i.Qb(),i.Qb(),i.Rb(47,"tr"),i.Rb(48,"td"),i.Rb(49,"code"),i.xc(50,"toggled-on-ripple-color($color)"),i.Qb(),i.Qb(),i.Rb(51,"td"),i.xc(52,"Sets the color of the ripple surrounding the thumb when the switch is toggled on."),i.Qb(),i.Qb(),i.Rb(53,"tr"),i.Rb(54,"td"),i.Rb(55,"code"),i.xc(56,"toggled-off-ripple-color($color)"),i.Qb(),i.Qb(),i.Rb(57,"td"),i.xc(58,"Sets the color of the ripple surrounding the thumb when the switch is toggled off."),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb())},directives:[d.l],encapsulation:2}),e})()},{path:"examples",component:(()=>{class e{constructor(){this.isSwitchOn=!1,this.exampleBasic={html:"<mdc-switch></mdc-switch>\n\n<mdc-form-field>\n  <mdc-switch></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>\n\n<mdc-form-field>\n  <mdc-switch disabled></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>\n\n<mdc-form-field alignEnd>\n  <mdc-switch></mdc-switch>\n  <label>RTL</label>\n</mdc-form-field>"},this.exampleChangeEvent={html:'<mdc-form-field>\n  <mdc-switch (change)="onChange($event)"></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>',ts:"import { MdcSwitchChange } from '@angular-mdc/web';\n\nonChange(evt: MdcSwitchChange): void {\n  console.log(evt.checked);\n}"},this.exampleCustom={html:'<mdc-form-field class="custom-switch__label-left-margin">\n  <mdc-switch></mdc-switch>\n  <label>Label margin</label>\n</mdc-form-field>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_switch.scss"},this.exampleNgModel={html:'<mdc-form-field>\n  <mdc-switch [(ngModel)]="isSwitchOn"></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>\n\n<p>NgModel value: {{isSwitchOn}}</p>',ts:"isSwitchOn: boolean = false;"},this.exampleNgModelForm={html:'<form #demoForm="ngForm" id="demoForm">\n  <mdc-form-field>\n    <mdc-switch #demoSwitch ngModel name="demoSwitch" #demoSwitchModel="ngModel"></mdc-switch>\n    <label>off/on</label>\n  </mdc-form-field>\n</form>\n\n<p>Dirty: {{ demoSwitchModel.dirty }}</p>\n<p>Touched: {{ demoSwitchModel.touched }}</p>\n<p>Value: {{ demoSwitchModel.value }}</p>'},this.exampleTheme={html:'<mdc-form-field>\n  <mdc-switch class="demo-switch--custom"></mdc-switch>\n  <label>Custom Theme</label>\n</mdc-form-field>\n\n<mdc-form-field>\n  <mdc-switch class="custom-switch--thumb-color"></mdc-switch>\n  <label>Thumb Color</label>\n</mdc-form-field>\n\n<mdc-form-field>\n  <mdc-switch class="custom-switch--track-color"></mdc-switch>\n  <label>Track Color</label>\n</mdc-form-field>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_switch.scss"}}onChange(e){this.changeEvent=e.checked}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["ng-component"]],decls:92,vars:13,consts:[[1,"demo-content"],[1,"demo-layout__row"],[1,"demo-container",2,"align-items","center","padding","6px"],[1,"demo-container"],["disabled",""],["alignEnd",""],[3,"example"],[1,"demo-content__headline"],[3,"change"],["mdc-button","",3,"click"],["demoformfield",""],["name","demoswitch",3,"ngModel","ngModelChange"],["demoswitch",""],["id","demoForm"],["demoForm","ngForm"],["ngModel","","name","demoSwitch"],["demoSwitch","","demoSwitchModel","ngModel"],[1,"custom-switch__label-left-margin"],[1,"demo-switch--custom"],[1,"custom-switch--thumb-color"],[1,"custom-switch--track-color"]],template:function(e,t){if(1&e){const e=i.Sb();i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Mb(3,"mdc-switch"),i.Qb(),i.Rb(4,"div",3),i.Rb(5,"mdc-form-field"),i.Mb(6,"mdc-switch"),i.Rb(7,"label"),i.xc(8,"off/on"),i.Qb(),i.Qb(),i.Qb(),i.Rb(9,"div",3),i.Rb(10,"mdc-form-field"),i.Mb(11,"mdc-switch",4),i.Rb(12,"label"),i.xc(13,"Disabled"),i.Qb(),i.Qb(),i.Qb(),i.Rb(14,"div",3),i.Rb(15,"mdc-form-field",5),i.Mb(16,"mdc-switch"),i.Rb(17,"label"),i.xc(18,"RTL"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Mb(19,"example-viewer",6),i.Qb(),i.Rb(20,"div",0),i.Rb(21,"h3",7),i.xc(22,"Change event"),i.Qb(),i.Rb(23,"mdc-form-field"),i.Rb(24,"mdc-switch",8),i.Zb("change",(function(e){return t.onChange(e)})),i.Qb(),i.Rb(25,"label"),i.xc(26,"off/on"),i.Qb(),i.Qb(),i.Rb(27,"p"),i.xc(28),i.Qb(),i.Mb(29,"example-viewer",6),i.Qb(),i.Rb(30,"div",0),i.Rb(31,"h3",7),i.xc(32,"ngModel"),i.Qb(),i.Rb(33,"div",1),i.Rb(34,"button",9),i.Zb("click",(function(t){return i.pc(e),i.oc(41).toggle()})),i.xc(35,"Toggle"),i.Qb(),i.Rb(36,"button",9),i.Zb("click",(function(t){i.pc(e);const c=i.oc(41);return c.disabled=!c.disabled})),i.xc(37),i.Qb(),i.Qb(),i.Rb(38,"mdc-form-field",null,10),i.Rb(40,"mdc-switch",11,12),i.Zb("ngModelChange",(function(e){return t.isSwitchOn=e})),i.Qb(),i.Rb(42,"label"),i.xc(43,"off/on"),i.Qb(),i.Qb(),i.Rb(44,"p"),i.xc(45),i.Qb(),i.Mb(46,"example-viewer",6),i.Qb(),i.Rb(47,"div",0),i.Rb(48,"h3",7),i.xc(49,"NgModel Form Directive"),i.Qb(),i.Rb(50,"form",13,14),i.Rb(52,"mdc-form-field"),i.Mb(53,"mdc-switch",15,16),i.Rb(56,"label"),i.xc(57,"off/on"),i.Qb(),i.Qb(),i.Qb(),i.Rb(58,"p"),i.xc(59),i.Qb(),i.Rb(60,"p"),i.xc(61),i.Qb(),i.Rb(62,"p"),i.xc(63),i.Qb(),i.Mb(64,"example-viewer",6),i.Qb(),i.Rb(65,"div",0),i.Rb(66,"h3",7),i.xc(67,"Custom"),i.Qb(),i.Rb(68,"mdc-form-field",17),i.Mb(69,"mdc-switch"),i.Rb(70,"label"),i.xc(71,"Label margin"),i.Qb(),i.Qb(),i.Mb(72,"example-viewer",6),i.Qb(),i.Rb(73,"div",0),i.Rb(74,"h3",7),i.xc(75,"Theme"),i.Qb(),i.Rb(76,"div",3),i.Rb(77,"mdc-form-field"),i.Mb(78,"mdc-switch",18),i.Rb(79,"label"),i.xc(80,"Custom Theme"),i.Qb(),i.Qb(),i.Qb(),i.Rb(81,"div",3),i.Rb(82,"mdc-form-field"),i.Mb(83,"mdc-switch",19),i.Rb(84,"label"),i.xc(85,"Thumb Color"),i.Qb(),i.Qb(),i.Qb(),i.Rb(86,"div",3),i.Rb(87,"mdc-form-field"),i.Mb(88,"mdc-switch",20),i.Rb(89,"label"),i.xc(90,"Track Color"),i.Qb(),i.Qb(),i.Qb(),i.Mb(91,"example-viewer",6),i.Qb()}if(2&e){const e=i.oc(41),c=i.oc(55);i.Bb(19),i.ic("example",t.exampleBasic),i.Bb(9),i.zc("Change value: ",t.changeEvent,""),i.Bb(1),i.ic("example",t.exampleChangeEvent),i.Bb(8),i.zc("Disabled: ",e.disabled?"On":"Off",""),i.Bb(3),i.ic("ngModel",t.isSwitchOn),i.Bb(5),i.zc("NgModel value: ",t.isSwitchOn,""),i.Bb(1),i.ic("example",t.exampleNgModel),i.Bb(13),i.zc("Dirty: ",c.dirty,""),i.Bb(2),i.zc("Touched: ",c.touched,""),i.Bb(2),i.zc("Value: ",c.value,""),i.Bb(1),i.ic("example",t.exampleNgModelForm),i.Bb(8),i.ic("example",t.exampleCustom),i.Bb(19),i.ic("example",t.exampleTheme)}},directives:[s.a,m.a,a.a,r.a,h.k,h.n,h.r,h.l,h.m],encapsulation:2}),e})()}]}];let R=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[o.e.forChild(f)],o.e]}),e})();c.d(t,"SwitchModule",(function(){return Q}));let Q=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[b.a,R]]}),e})()}}]);