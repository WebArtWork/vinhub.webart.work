import{$n as m,A as Ih,Er as us,Gr as yb,Ir as wh,Kn as kh,Kr as yh,Lt as Wf,Mn as gh,N as JP,Nt as VC,Or as uw,Pt as VD,Q as O,Sr as sw,St as Tu,Tt as UI,Y as Nr,Yr as zI,Z as Nw,Zt as _I,c as Bw,dt as Qw,f as DI,fr as pw,ft as Rh,gn as cw,gr as r1,in as b,kn as fw,mt as Sb,ot as Qh,p as Db,u as Ch,yn as dw,z as Ki}from"./chunk-CmcsrXIS.js";import{Y as kn,c as Fs,ft as z,o as Fi,p as Is,s as Fn}from"./chunk-BJsGms98.js";var U=`
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
`;var Y=[`icon`];var Z=[`*`];function ee(e,s){if(e&1&&Ch(0,`span`,3),e&2){let t=sw(2);Nw(t.cx(`icon`)),wh(`ngClass`,t.icon())(`pBind`,t.ptm(`icon`))}}function te(e,s){if(e&1&&UI(0,ee,1,4,`span`,2),e&2)zI(sw().icon()?0:-1)}function ne(e,s){}function oe(e,s){e&1&&yh(0,ne,0,0,`ng-template`)}function ie(e,s){if(e&1&&(Ki(0,`span`,4),yh(1,oe,1,0,null,5),Tu()),e&2){let t=sw();Nw(t.cx(`icon`)),wh(`pBind`,t.ptm(`icon`)),VD(),wh(`ngTemplateOutlet`,t.iconTemplate||t._iconTemplate)}}var ae={root:({instance:e})=>[`p-tag p-component`,{"p-tag-info":e.severity===`info`,"p-tag-success":e.severity===`success`,"p-tag-warn":e.severity===`warn`,"p-tag-danger":e.severity===`danger`,"p-tag-secondary":e.severity===`secondary`,"p-tag-contrast":e.severity===`contrast`,"p-tag-rounded":e.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var W=(()=>{class e extends z{name=`tag`;style=U;classes=ae;static ɵfac=(()=>{let t;return function(n){return(t||(t=Wf(e)))(n||e)}})();static ɵprov=O({token:e,factory:e.ɵfac})}return e})();var X=new b(`TAG_INSTANCE`);var re=(()=>{class e extends Is{componentName=`Tag`;$pcTag=m(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(Fs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=JP();severity=JP();value=JP();icon=JP();rounded=JP(!1,{transform:VC});iconTemplate;templates=r1(kn);_iconTemplate;_componentStyle=m(W);onAfterContentInit(){this.templates()?.forEach(t=>{t.getType()===`icon`&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let t;return function(n){return(t||(t=Wf(e)))(n||e)}})();static ɵcmp=DI({type:e,selectors:[[`p-tag`]],contentQueries:function(o,n,C){if(o&1&&(kh(C,n.templates,kn,4),Rh(C,Y,4)),o&2){pw();let _;dw(_=fw())&&(n.iconTemplate=_.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(Ih(`data-p`,n.dataP),Nw(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[Qw([W,{provide:X,useExisting:e},{provide:Fi,useExisting:e}]),_I([Fs]),gh],ngContentSelectors:Z,decls:5,vars:6,consts:[[`aria-hidden`,`true`,3,`class`,`pBind`],[3,`pBind`],[`aria-hidden`,`true`,3,`class`,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`ngClass`,`pBind`],[`aria-hidden`,`true`,3,`pBind`],[4,`ngTemplateOutlet`]],template:function(o,n){o&1&&(cw(),uw(0),UI(1,te,1,1),UI(2,ie,2,4,`span`,0),Ki(3,`span`,1),Bw(4),Tu()),o&2&&(VD(),zI(!n.iconTemplate&&!n._iconTemplate?1:-1),VD(),zI(n.iconTemplate||n._iconTemplate?2:-1),VD(),Nw(n.cx(`label`)),wh(`pBind`,n.ptm(`label`)),VD(),Qh(n.value()))},dependencies:[Sb,yb,Db,Fn,Fs],encapsulation:2})}return e})();var ke=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵmod=us({type:e});static ɵinj=Nr({imports:[re,Fn,Fn]})}return e})();export{re as n,ke as t};