import{Ft as XE,Ht as Zf,J as LL,Ot as Uf,Pn as lI,Q as ML,Sr as wl,Tt as T,Wn as oI,ir as re,or as rm,q as LE,sr as rp,ur as tI,vn as hE,vt as S,xn as hu}from"./chunk-LOPIX45B.js";import{s as V}from"./chunk-DFNPONwo.js";import{J as ks,O as Y,i as Fi}from"./chunk-DQjbJifl.js";import{i as gt}from"./chunk-BoGnVY4z.js";import{t as v}from"./chunk-D8eMI7Te.js";var z=`
    
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }


    /* For ngx-prime */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var P={root:({instance:t})=>[`p-inputtext p-component`,{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize()===`small`,"p-inputtext-lg":t.pSize()===`large`,"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-inputtext-fluid":t.hasFluid}]};var w=(()=>{class t extends Y{name=`inputtext`;style=z;classes=P;static ɵfac=(()=>{let e;return function(o){return(e||(e=rm(t)))(o||t)}})();static ɵprov=re({token:t,factory:t.ɵfac})}return t})();var F=new S(`INPUTTEXT_INSTANCE`);var K=(()=>{class t extends v{componentName=`InputText`;hostName=ML(``);ptInputText=ML();pInputTextPT=ML();pInputTextUnstyled=ML();bindDirectiveInstance=T(ks,{self:!0});$pcInputText=T(F,{optional:!0,skipSelf:!0})??void 0;ngControl=T(V,{optional:!0,self:!0});pcFluid=T(gt,{optional:!0,host:!0,skipSelf:!0});pSize=ML();variant=ML();fluid=ML(void 0,{transform:LL});invalid=ML(void 0,{transform:LL});$variant=XE(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=T(w);constructor(){super(),hu(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),hu(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize()]:this.pSize()})}static ɵfac=function(i){return new(i||t)};static ɵdir=oI({type:t,selectors:[[``,`pInputText`,``]],hostVars:4,hostBindings:function(i,o){i&1&&rp(`input`,function(){return o.onInput()}),i&2&&(Zf(`data-p`,o.dataP)(`aria-invalid`,o.invalid()||null),hE(o.cx(`root`)))},inputs:{hostName:[1,`hostName`],ptInputText:[1,`ptInputText`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[LE([w,{provide:F,useExisting:t},{provide:Fi,useExisting:t}]),lI([ks]),Uf]})}return t})();var L=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=tI({type:t});static ɵinj=wl({})}return t})();export{L as n,K as t};