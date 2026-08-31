import{$n as m,$t as _h,Er as us,Ir as wh,Kn as kh,Kr as yh,Lt as Wf,Mn as gh,N as JP,Or as uw,Pt as VD,Q as O,Sr as sw,St as Tu,Tt as UI,Vr as xu,Xr as zd,Y as Nr,Yr as zI,Z as Nw,Zt as _I,_t as Sw,c as Bw,dt as Qw,f as DI,fr as pw,ft as Rh,gn as cw,gr as r1,in as b,kn as fw,mt as Sb,p as Db,rr as n1,un as bi,yn as dw,z as Ki}from"./chunk-CmcsrXIS.js";import{C as Re,Y as kn,c as Fs,ct as xn,f as Hs,ft as z,o as Fi,p as Is,s as Fn,t as $n}from"./chunk-BJsGms98.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&_h(0)}function se(t,r){if(t&1&&(Ki(0,`div`,1),uw(1,1),yh(2,pe,1,0,`ng-container`,2),Tu()),t&2){let e=sw();Nw(e.cx(`header`)),wh(`pBind`,e.ptm(`header`)),VD(2),wh(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&Bw(0),t&2)xu(` `,sw(2).header(),` `)}function ue(t,r){t&1&&_h(0)}function fe(t,r){if(t&1&&(Ki(0,`div`,1),UI(1,me,1,1),yh(2,ue,1,0,`ng-container`,2),Tu()),t&2){let e=sw();Nw(e.cx(`title`)),wh(`pBind`,e.ptm(`title`)),VD(),zI(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),VD(),wh(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&Bw(0),t&2)xu(` `,sw(2).subheader(),` `)}function he(t,r){t&1&&_h(0)}function ye(t,r){if(t&1&&(Ki(0,`div`,1),UI(1,_e,1,1),yh(2,he,1,0,`ng-container`,2),Tu()),t&2){let e=sw();Nw(e.cx(`subtitle`)),wh(`pBind`,e.ptm(`subtitle`)),VD(),zI(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),VD(),wh(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&_h(0)}function ge(t,r){t&1&&_h(0)}function be(t,r){if(t&1&&(Ki(0,`div`,1),uw(1,2),yh(2,ge,1,0,`ng-container`,2),Tu()),t&2){let e=sw();Nw(e.cx(`footer`)),wh(`pBind`,e.ptm(`footer`)),VD(2),wh(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends z{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=Wf(t)))(n||t)}})();static ɵprov=O({token:t,factory:t.ɵfac})}return t})();var ne=new b(`CARD_INSTANCE`);var Me=(()=>{class t extends Is{componentName=`Card`;$pcCard=m(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(Fs,{self:!0});_componentStyle=m(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=JP();subheader=JP();style=JP();styleClass=JP();headerFacet=n1($n);footerFacet=n1(xn);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=n1(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=bi(null);constructor(){super(),zd(()=>{let e=this.style();Re(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=r1(kn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=DI({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(kh(l,n.headerFacet,$n,5)(l,n.footerFacet,xn,5)(l,n.contentTemplate,ie,4)(l,n.templates,kn,4),Rh(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){pw(4);let d;dw(d=fw())&&(n.headerTemplate=d.first),dw(d=fw())&&(n.titleTemplate=d.first),dw(d=fw())&&(n.subtitleTemplate=d.first),dw(d=fw())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(Sw(n._style()),Nw(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[Qw([te,{provide:ne,useExisting:t},{provide:Fi,useExisting:t}]),_I([Fs]),gh],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(cw(de),UI(0,se,3,4,`div`,0),Ki(1,`div`,1),UI(2,fe,3,5,`div`,0),UI(3,ye,3,5,`div`,0),Ki(4,`div`,1),uw(5),yh(6,Te,1,0,`ng-container`,2),Tu(),UI(7,be,3,4,`div`,0),Tu()),i&2&&(zI(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),VD(),Nw(n.cx(`body`)),wh(`pBind`,n.ptm(`body`)),VD(),zI(n.header()||n.titleTemplate||n._titleTemplate?2:-1),VD(),zI(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),VD(),Nw(n.cx(`content`)),wh(`pBind`,n.ptm(`content`)),VD(2),wh(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),VD(),zI(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[Sb,Db,Fn,Hs,Fs],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=us({type:t});static ɵinj=Nr({imports:[Me,Fn,Hs,Fn,Hs]})}return t})();export{Ve as n,Me as t};