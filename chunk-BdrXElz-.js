import{A as Gf,Bt as Yf,Jn as pc,L as JI,Nr as zI,Ot as Uf,Pn as lI,Q as ML,Rt as Xv,Sr as wl,Tr as xL,Tt as T,U as KI,Wt as _I,X as Lo,Z as MI,_r as vc,cr as sp,dn as fE,ir as re$1,k as GI,l as CE,mr as ui,mt as QI,nn as cp,o as AL,or as rm,q as LE,un as ep,ur as tI,vn as hE,vt as S,x as Ey,xn as hu,zt as YI}from"./chunk-LOPIX45B.js";import{l as Ga,n as Bo}from"./chunk-BQFaQbXM.js";import{J as ks,O as Y,ct as ws,f as Mn,i as Fi,lt as xn,o as Fs,q as kn,t as $n,v as Re}from"./chunk-DQjbJifl.js";var ee=`
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
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&ep(0)}function se(t,r){if(t&1&&(ui(0,`div`,1),QI(1,1),Gf(2,pe,1,0,`ng-container`,2),pc()),t&2){let e=GI();hE(e.cx(`header`)),Yf(`pBind`,e.ptm(`header`)),Ey(2),Yf(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&CE(0),t&2)vc(` `,GI(2).header(),` `)}function ue(t,r){t&1&&ep(0)}function fe(t,r){if(t&1&&(ui(0,`div`,1),_I(1,me,1,1),Gf(2,ue,1,0,`ng-container`,2),pc()),t&2){let e=GI();hE(e.cx(`title`)),Yf(`pBind`,e.ptm(`title`)),Ey(),MI(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),Ey(),Yf(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&CE(0),t&2)vc(` `,GI(2).subheader(),` `)}function he(t,r){t&1&&ep(0)}function ye(t,r){if(t&1&&(ui(0,`div`,1),_I(1,_e,1,1),Gf(2,he,1,0,`ng-container`,2),pc()),t&2){let e=GI();hE(e.cx(`subtitle`)),Yf(`pBind`,e.ptm(`subtitle`)),Ey(),MI(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),Ey(),Yf(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&ep(0)}function ge(t,r){t&1&&ep(0)}function be(t,r){if(t&1&&(ui(0,`div`,1),QI(1,2),Gf(2,ge,1,0,`ng-container`,2),pc()),t&2){let e=GI();hE(e.cx(`footer`)),Yf(`pBind`,e.ptm(`footer`)),Ey(2),Yf(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends Y{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=rm(t)))(n||t)}})();static ɵprov=re$1({token:t,factory:t.ɵfac})}return t})();var ne=new S(`CARD_INSTANCE`);var Me=(()=>{class t extends ws{componentName=`Card`;$pcCard=T(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=T(ks,{self:!0});_componentStyle=T(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=ML();subheader=ML();style=ML();styleClass=ML();headerFacet=xL(Mn);footerFacet=xL($n);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=xL(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Lo(null);constructor(){super(),hu(()=>{let e=this.style();Re(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=AL(xn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=Xv({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(cp(l,n.headerFacet,Mn,5)(l,n.footerFacet,$n,5)(l,n.contentTemplate,ie,4)(l,n.templates,xn,4),sp(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){JI(4);let d;YI(d=KI())&&(n.headerTemplate=d.first),YI(d=KI())&&(n.titleTemplate=d.first),YI(d=KI())&&(n.subtitleTemplate=d.first),YI(d=KI())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(fE(n._style()),hE(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[LE([te,{provide:ne,useExisting:t},{provide:Fi,useExisting:t}]),lI([ks]),Uf],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(zI(de),_I(0,se,3,4,`div`,0),ui(1,`div`,1),_I(2,fe,3,5,`div`,0),_I(3,ye,3,5,`div`,0),ui(4,`div`,1),QI(5),Gf(6,Te,1,0,`ng-container`,2),pc(),_I(7,be,3,4,`div`,0),pc()),i&2&&(MI(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),Ey(),hE(n.cx(`body`)),Yf(`pBind`,n.ptm(`body`)),Ey(),MI(n.header()||n.titleTemplate||n._titleTemplate?2:-1),Ey(),MI(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),Ey(),hE(n.cx(`content`)),Yf(`pBind`,n.ptm(`content`)),Ey(2),Yf(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),Ey(),MI(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[Bo,Ga,kn,Fs,ks],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=tI({type:t});static ɵinj=wl({imports:[Me,kn,Fs,kn,Fs]})}return t})();export{Ve as n,Me as t};