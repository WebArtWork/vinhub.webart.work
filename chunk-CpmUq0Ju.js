import{o as w,t as r}from"./chunk-Btz99zWn.js";import{$n as m,A as Ih,Cr as t1,Dn as ew,Er as us,Ft as Vh,G as NE,Gn as kd,Ht as XP,Ir as wh,J as Nh,Kr as yh,Lt as Wf,Mn as gh,N as JP,Nr as wd,Or as uw,Pt as VD,Q as O,Rn as hw,Sr as sw,St as Tu,Tt as UI,Vn as ii,Vr as xu,Y as Nr,Yr as zI,Z as Nw,Zt as _I,bn as e1,c as Bw,cr as pC,dt as Qw,f as DI,fr as pw,ft as Rh,g as Fh,gn as cw,i as AE,in as b,jn as gD,kn as fw,l as Cd,p as Db,qt as Xw,u as Ch,un as bi,yn as dw,z as Ki}from"./chunk-CmcsrXIS.js";import{_ as sn$1,a as Rt,l as an$1,o as St,r as Le$1,t as Ie,u as dn$1,v as un$1}from"./chunk-BmYfasZb.js";import{A as Xi,c as Fs,f as Hs,ft as z$1,o as Fi,p as Is,pt as zi,s as Fn,v as Nt,x as Qi}from"./chunk-BJsGms98.js";import{i as ft,n as Qe$1,r as at,z as e}from"./main-CWHSXZF7.js";import{n as Ln,o as zn,t as Ht}from"./chunk-lS3jGdrS.js";import{n as O$1,t as L}from"./chunk-Dihrl9bP.js";import{n as L$1,t as K}from"./chunk-C9-6b-ns.js";import{t as d}from"./chunk-RNJRpidY.js";import{t as f}from"./chunk-D0mOUcRj.js";var Ke=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var z=[`*`];var Ue=[`toggleicon`];var We=t=>({active:t});function ze(t,p){}function Ge(t,p){t&1&&yh(0,ze,0,0,`ng-template`)}function Je(t,p){if(t&1&&yh(0,Ge,1,0,null,0),t&2){let e=sw();wh(`ngTemplateOutlet`,e.toggleicon)(`ngTemplateOutletContext`,Xw(2,We,e.active()))}}function Xe(t,p){if(t&1&&Ch(0,`span`,3),t&2){let e=sw(3);Nw(e.cn(e.cx(`toggleicon`),e.pcAccordion.collapseIcon())),wh(`pBind`,e.ptm(`toggleicon`)),Ih(`aria-hidden`,!0)}}function Ye(t,p){if(t&1&&(kd(),Ch(0,`svg`,4)),t&2){let e=sw(3);Nw(e.cx(`toggleicon`)),wh(`pBind`,e.ptm(`toggleicon`)),Ih(`aria-hidden`,!0)}}function Ze(t,p){if(t&1&&(UI(0,Xe,1,4,`span`,1),UI(1,Ye,1,4,`:svg:svg`,2)),t&2){let e=sw(2);zI(e.pcAccordion.collapseIcon()?0:-1),VD(),zI(e.pcAccordion.collapseIcon()?-1:1)}}function en(t,p){if(t&1&&Ch(0,`span`,3),t&2){let e=sw(3);Nw(e.cn(e.cx(`toggleicon`),e.pcAccordion.expandIcon())),wh(`pBind`,e.ptm(`toggleicon`)),Ih(`aria-hidden`,!0)}}function nn(t,p){if(t&1&&(kd(),Ch(0,`svg`,5)),t&2)wh(`pBind`,sw(3).ptm(`toggleicon`)),Ih(`aria-hidden`,!0)}function tn(t,p){if(t&1&&(UI(0,en,1,4,`span`,1),UI(1,nn,1,2,`:svg:svg`,5)),t&2){let e=sw(2);zI(e.pcAccordion.expandIcon()?0:-1),VD(),zI(e.pcAccordion.expandIcon()?-1:1)}}function on(t,p){if(t&1&&(UI(0,Ze,2,2),UI(1,tn,2,2)),t&2){let e=sw();zI(e.active()?0:-1),VD(),zI(e.active()?-1:1)}}var an=`
${Ke}

/* For ngx-prime */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`;var rn={root:`p-accordion p-component`,panel:({instance:t})=>[`p-accordionpanel`,{"p-accordionpanel-active":t.active(),"p-disabled":t.disabled()}],header:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`,contentContainer:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`};var y=(()=>{class t extends z$1{name=`accordion`;style=an;classes=rn;static ɵfac=(()=>{let e;return function(o){return(e||(e=Wf(t)))(o||t)}})();static ɵprov=O({token:t,factory:t.ɵfac})}return t})();var Le=new b(`ACCORDION_PANEL_INSTANCE`);var je=new b(`ACCORDION_HEADER_INSTANCE`);var $e=new b(`ACCORDION_CONTENT_INSTANCE`);var Re=new b(`ACCORDION_INSTANCE`);var oe=(()=>{class t extends Is{$pcAccordionPanel=m(Le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(Fs,{self:!0});componentName=`AccordionPanel`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=m(ii(()=>G));value=e1(void 0);disabled=JP(!1,{transform:e=>ft(e)});active=pC(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,n){return Array.isArray(e)?e.includes(n):e===n}_componentStyle=m(y);static ɵfac=(()=>{let e;return function(o){return(e||(e=Wf(t)))(o||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-accordion-panel`],[`p-accordionpanel`]],hostVars:4,hostBindings:function(n,o){n&2&&(Ih(`data-p-disabled`,o.disabled())(`data-p-active`,o.active()),Nw(o.cx(`panel`)))},inputs:{value:[1,`value`],disabled:[1,`disabled`]},outputs:{value:`valueChange`},features:[Qw([y,{provide:Le,useExisting:t},{provide:Fi,useExisting:t}]),_I([Fs]),gh],ngContentSelectors:z,decls:1,vars:0,template:function(n,o){n&1&&(cw(),uw(0))},dependencies:[Hs],encapsulation:2})}return t})();var cn=(()=>{class t extends Is{$pcAccordionHeader=m(je,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(Fs,{self:!0});componentName=`AccordionHeader`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=m(ii(()=>G));pcAccordionPanel=m(ii(()=>oe));id=pC(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=pC(()=>this.pcAccordionPanel.active());disabled=pC(()=>this.pcAccordionPanel.disabled());ariaControls=pC(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let n=this.active();this.changeActiveValue();let o=this.active(),i=this.pcAccordionPanel.value();!n&&o?this.pcAccordion.onOpen.emit({originalEvent:e,index:i}):n&&!o&&this.pcAccordion.onClose.emit({originalEvent:e,index:i})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case`ArrowDown`:this.arrowDownKey(e);break;case`ArrowUp`:this.arrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`Space`:case`NumpadEnter`:this.onEnterKey(e);break;default:break}}_componentStyle=m(y);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest(`[data-pc-name="accordionpanel"]`)}findHeader(e){return zi(e,`[data-pc-name="accordionheader"]`)}findNextPanel(e,n=!1){let o=n?e:e.nextElementSibling;return o?Qi(o,`data-p-disabled`)?this.findNextPanel(o):this.findHeader(o):null}findPrevPanel(e,n=!1){let o=n?e:e.previousElementSibling;return o?Qi(o,`data-p-disabled`)?this.findPrevPanel(o):this.findHeader(o):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,n){Xi(n)}arrowDownKey(e){let n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEndKey(e){let n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}get dataP(){return this.cn({active:this.active()})}static ɵfac=(()=>{let e;return function(o){return(e||(e=Wf(t)))(o||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-accordion-header`],[`p-accordionheader`]],contentQueries:function(n,o,i){if(n&1&&Rh(i,Ue,5),n&2){let b;dw(b=fw())&&(o.toggleicon=b.first)}},hostVars:13,hostBindings:function(n,o){n&1&&Nh(`click`,function(b){return o.onClick(b)})(`focus`,function(){return o.onFocus()})(`keydown`,function(b){return o.onKeydown(b)}),n&2&&(Ih(`id`,o.id())(`aria-expanded`,o.active())(`aria-controls`,o.ariaControls())(`aria-disabled`,o.disabled())(`role`,`button`)(`tabindex`,o.disabled()?`-1`:`0`)(`data-p-active`,o.active())(`data-p-disabled`,o.disabled())(`data-p`,o.dataP),Nw(o.cx(`header`)),Vh(`user-select`,`none`))},features:[Qw([y,{provide:je,useExisting:t},{provide:Fi,useExisting:t}]),_I([Ht,Fs]),gh],ngContentSelectors:z,decls:3,vars:1,consts:[[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`],[`data-p-icon`,`chevron-up`,3,`class`,`pBind`],[3,`pBind`],[`data-p-icon`,`chevron-up`,3,`pBind`],[`data-p-icon`,`chevron-down`,3,`pBind`]],template:function(n,o){n&1&&(cw(),uw(0),UI(1,Je,1,4)(2,on,2,2)),n&2&&(VD(),zI(o.toggleicon?1:2))},dependencies:[d,f,Hs,Fs,Db],encapsulation:2})}return t})();var dn=(()=>{class t extends Is{$pcAccordionContent=m($e,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(Fs,{self:!0});componentName=`AccordionContent`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=m(ii(()=>G));pcAccordionPanel=m(ii(()=>oe));active=pC(()=>this.pcAccordionPanel.active());ariaLabelledby=pC(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=pC(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=m(y);ptParams=pC(()=>({context:this.active()}));computedMotionOptions=pC(()=>r(r({},this.ptm(`motion`,this.ptParams())),this.pcAccordion.computedMotionOptions()));static ɵfac=(()=>{let e;return function(o){return(e||(e=Wf(t)))(o||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-accordion-content`],[`p-accordioncontent`]],hostVars:6,hostBindings:function(n,o){n&2&&(Ih(`id`,o.id())(`role`,`region`)(`data-p-active`,o.active())(`aria-labelledby`,o.ariaLabelledby()),Nw(o.cx(`contentContainer`)))},features:[Qw([y,{provide:$e,useExisting:t},{provide:Fi,useExisting:t}]),_I([Fs]),gh],ngContentSelectors:z,decls:4,vars:10,consts:[[`name`,`p-collapsible`,`hideStrategy`,`visibility`,3,`visible`,`mountOnEnter`,`unmountOnLeave`,`options`],[3,`pBind`]],template:function(n,o){n&1&&(cw(),Ki(0,`p-motion`,0)(1,`div`,1)(2,`div`,1),uw(3),Tu()()()),n&2&&(wh(`visible`,o.active())(`mountOnEnter`,!1)(`unmountOnLeave`,!1)(`options`,o.computedMotionOptions()),VD(),Nw(o.cx(`contentWrapper`)),wh(`pBind`,o.ptm(`contentWrapper`,o.ptParams())),VD(),Nw(o.cx(`content`)),wh(`pBind`,o.ptm(`content`,o.ptParams())))},dependencies:[Hs,Fs,at,Qe$1],encapsulation:2})}return t})();var G=(()=>{class t extends Is{componentName=`Accordion`;$pcAccordion=m(Re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(Fs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}value=e1(void 0);multiple=JP(!1,{transform:e=>ft(e)});styleClass=JP();expandIcon=JP();collapseIcon=JP();selectOnFocus=JP(!1,{transform:e=>ft(e)});transitionOptions=JP(`400ms cubic-bezier(0.86, 0, 0.07, 1)`);motionOptions=JP(void 0);computedMotionOptions=pC(()=>r(r({},this.ptm(`motion`)),this.motionOptions()));onClose=XP();onOpen=XP();id=bi(Nt(`pn_id_`));_componentStyle=m(y);onKeydown(e){switch(e.code){case`ArrowDown`:this.onTabArrowDownKey(e);break;case`ArrowUp`:this.onTabArrowUpKey(e);break;case`Home`:e.shiftKey||this.onTabHomeKey(e);break;case`End`:e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let n=this.findNextHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let n=this.findPrevHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&Xi(e)}findNextHeaderAction(e,n=!1){let i=zi(n?e:e.nextElementSibling,`[data-pc-section="accordionheader"]`);return i?Qi(i,`data-p-disabled`)?this.findNextHeaderAction(i.parentElement):zi(i.parentElement,`[data-pc-section="accordionheader"]`):null}findPrevHeaderAction(e,n=!1){let i=zi(n?e:e.previousElementSibling,`[data-pc-section="accordionheader"]`);return i?Qi(i,`data-p-disabled`)?this.findPrevHeaderAction(i.parentElement):zi(i.parentElement,`[data-pc-section="accordionheader"]`):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let n=this.value();if(this.multiple()){let o=Array.isArray(n)?[...n]:[],i=o.indexOf(e);i!==-1?o.splice(i,1):o.push(e),this.value.set(o)}else n===e?this.value.set(void 0):this.value.set(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=Wf(t)))(o||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-accordion`]],hostVars:2,hostBindings:function(n,o){n&1&&Nh(`keydown`,function(b){return o.onKeydown(b)}),n&2&&Nw(o.cn(o.cx(`root`),o.styleClass()))},inputs:{value:[1,`value`],multiple:[1,`multiple`],styleClass:[1,`styleClass`],expandIcon:[1,`expandIcon`],collapseIcon:[1,`collapseIcon`],selectOnFocus:[1,`selectOnFocus`],transitionOptions:[1,`transitionOptions`],motionOptions:[1,`motionOptions`]},outputs:{value:`valueChange`,onClose:`onClose`,onOpen:`onOpen`},features:[Qw([y,{provide:Re,useExisting:t},{provide:Fi,useExisting:t}]),_I([Fs]),gh],ngContentSelectors:z,decls:1,vars:0,template:function(n,o){n&1&&(cw(),uw(0))},dependencies:[Fn,Hs],encapsulation:2})}return t})();var On=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=us({type:t});static ɵinj=Nr({imports:[G,Fn,oe,cn,dn,Hs,Fn,Hs]})}return t})();var Qe=(()=>{class t{send(e$1){return w(this,null,function*(){try{return(yield fetch(`${e.url}/api/telegram/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:e.contact.slug,message:e$1})})).ok}catch(n){return console.error(n),!1}})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=O({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var sn=[`nameInput`];function ln(t,p){t&1&&(Ki(0,`div`,2)(1,`p`),Bw(2,`Thanks! We got your message and will be in touch soon.`),Tu()())}function pn(t,p){t&1&&(Ki(0,`p`,9),Bw(1,`Something went wrong — please try again.`),Tu())}function un(t,p){if(t&1){let e=ew();Ki(0,`form`,4,0),Nh(`ngSubmit`,function(){wd(e);let o=hw(1);return Cd(sw().submit(o))}),Ki(2,`div`,5)(3,`label`),Bw(4,`Name`),Tu(),Ki(5,`input`,6,1),Nh(`ngModelChange`,function(o){wd(e);return Cd(sw().name.set(o))}),Tu(),NE(),Tu(),Ki(7,`div`,5)(8,`label`),Bw(9,`Email or phone`),Tu(),Ki(10,`input`,7),Nh(`ngModelChange`,function(o){wd(e);return Cd(sw().contact.set(o))}),Tu(),NE(),Tu(),Ki(11,`div`,5)(12,`label`),Bw(13,`Message`),Tu(),Ki(14,`textarea`,8),Nh(`ngModelChange`,function(o){wd(e);return Cd(sw().message.set(o))}),Tu(),NE(),Tu(),UI(15,pn,2,0,`p`,9),Ki(16,`button`,10),Bw(17),Tu()()}if(t&2){let e=hw(1),n=sw();VD(5),wh(`ngModel`,n.name()),AE(),VD(5),wh(`ngModel`,n.contact()),AE(),VD(4),wh(`ngModel`,n.message()),AE(),VD(),zI(n.status()===`error`?15:-1),VD(),wh(`disabled`,e.invalid||n.status()===`sending`),VD(),xu(` `,n.submitLabel()||`Send`,` `)}}var mn={user:`Buyer inquiry`,salesperson:`Salesperson application`,manufacturer:`Manufacturer application`,dealership:`Dealership application`};var et=(()=>{class t{constructor(){this._contactService=m(Qe),this.kind=JP.required(),this.submitLabel=JP(``),this._nameInput=t1(`nameInput`),this.name=bi(``),this.contact=bi(``),this.message=bi(``),this.status=bi(`idle`),gD(()=>this._nameInput()?.nativeElement.focus())}submit(e){return w(this,null,function*(){if(e.invalid||this.status()===`sending`)return;this.status.set(`sending`);let n=[`VIN Hub lead: ${mn[this.kind()]}`,`Name: ${this.name()}`,`Contact: ${this.contact()}`];if(this.message().trim()&&n.push(``,this.message().trim()),!(yield this._contactService.send(n.join(`
`)))){this.status.set(`error`);return}this.status.set(`success`),e.resetForm()})}retry(){this.status.set(`idle`)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=DI({type:t,selectors:[[`app-lead-form`]],viewQuery:function(n,o){n&1&&Fh(o._nameInput,sn,5),n&2&&pw()},inputs:{kind:[1,`kind`],submitLabel:[1,`submitLabel`]},decls:2,vars:1,consts:[[`leadForm`,`ngForm`],[`nameInput`,``],[1,`lead-form`,`lead-form--success`],[`novalidate`,``,1,`lead-form`],[`novalidate`,``,1,`lead-form`,3,`ngSubmit`],[1,`lead-form__field`],[`pInputText`,``,`type`,`text`,`name`,`name`,`required`,``,3,`ngModelChange`,`ngModel`],[`pInputText`,``,`type`,`text`,`name`,`contact`,`required`,``,3,`ngModelChange`,`ngModel`],[`pTextarea`,``,`rows`,`3`,`name`,`message`,3,`ngModelChange`,`ngModel`],[1,`lead-form__error`],[`pButton`,``,`type`,`submit`,3,`disabled`]],template:function(n,o){if(n&1&&UI(0,ln,3,0,`div`,2)(1,un,18,6,`form`,3),n&2)zI(o.status()===`success`?0:1)},dependencies:[dn$1,un$1,Ie,sn$1,an$1,Le$1,Rt,St,L$1,K,O$1,L,Ln,zn],styles:[`.lead-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;max-width:420px;margin:0 auto}.lead-form__field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem}.lead-form__field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%c-text-secondary)}.lead-form__error[_ngcontent-%COMP%]{margin:0;color:var(--%NS%c-danger, #e5484d);font-size:.85rem}.lead-form--success[_ngcontent-%COMP%]{text-align:center;color:var(--%NS%c-text-secondary)}`]})}}return t})();export{et as a,dn as i,On as n,oe as o,cn as r,G as t};