import{A as Gf,Bt as Yf,G as Kf,Ht as Zf,J as LL,Jn as pc,L as JI,Nr as zI,Ot as Uf,Pn as lI,Q as ML,Rt as Xv,Sr as wl,Tt as T,U as KI,Wt as _I,Z as MI,cr as sp,ir as re$1,k as GI,l as CE,mr as ui,mt as QI,nn as cp,o as AL,or as rm,p as Cp,q as LE,ur as tI,vn as hE,vt as S,x as Ey,zt as YI}from"./chunk-LOPIX45B.js";import{l as Ga,n as Bo,u as Ha}from"./chunk-BQFaQbXM.js";import{J as ks,O as Y$1,ct as ws,i as Fi,lt as xn,q as kn}from"./chunk-DQjbJifl.js";var U=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&Kf(0,`span`,3),e&2){let t=GI(2);hE(t.cx(`icon`)),Yf(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&_I(0,ee,1,4,`span`,2),e&2)MI(GI().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&Gf(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(ui(0,`span`,4),Gf(1,oe,1,0,null,5),pc()),e&2){let t=GI();hE(t.cx(`icon`)),Yf(`pBind`,t.ptm(`icon`)),Ey(),Yf(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends Y$1{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=rm(e)))(n||e)}})();static ɵprov=re$1({token:e,factory:e.ɵfac})}return e})();var X=new S(`TAG_INSTANCE`);var re=(()=>{class e extends ws{componentName=`Tag`;$pcTag=T(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=T(ks,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=ML();severity=ML();value=ML();icon=ML();rounded=ML(!1,{transform:LL});iconTemplate;templates=AL(xn);_iconTemplate;_componentStyle=T(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=rm(e)))(n||e)}})();static ɵcmp=Xv({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(cp(C,n.templates,xn,4),sp(C,Y,4)),o&2){JI();let _;YI(_=KI())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(Zf(`data-p`,n.dataP),hE(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[LE([W,{provide:X,useExisting:e},{provide:Fi,useExisting:e}]),lI([ks]),Uf],ngContentSelectors:Z,decls:5,vars:6,consts:[[`aria-hidden`,`true`,3,`class`,`pBind`],[3,`pBind`],[`aria-hidden`,`true`,3,`class`,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(zI(),QI(0),_I(1,te,1,1),_I(2,ie,2,4,`span`,0),ui(3,`span`,1),CE(4),pc()),o&2&&(Ey(),MI(!n.iconTemplate&&!n._iconTemplate?1:-1),Ey(),MI(n.iconTemplate||n._iconTemplate?2:-1),Ey(),hE(n.cx(`label`)),Yf(`pBind`,n.ptm(`label`)),Ey(),Cp(n.value()))},dependencies:[Bo,Ha,Ga,kn,ks],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=tI({type:e});static ɵinj=wl({imports:[re,kn,kn]})}return e})();export{re as n,ke as t};