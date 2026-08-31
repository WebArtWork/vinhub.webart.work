import{$n as m,$t as _h,A as Ih,Dn as ew,Er as us,Gn as kd,Gr as yb,H as Kw,Ht as XP,I as Jw,Ir as wh,It as WI,J as Nh,Kn as kh,Kr as yh,Lt as Wf,Mn as gh,N as JP,Nr as wd,Nt as VC,Or as uw,Pt as VD,Q as O$1,Sr as sw,St as Tu,Tt as UI,Vn as ii,Y as Nr,Yr as zI,Yt as ZI,Z as Nw,Zt as _I,_t as Sw,c as Bw,cr as pC,dr as pp,dt as Qw,en as _u,f as DI,fr as pw,ft as Rh,gn as cw,gr as r1,gt as Su,ht as Sh,in as b,kn as fw,kr as vb,l as Cd,ln as bh,mr as qI,mt as Sb,ot as Qh,p as Db,pn as c1,u as Ch,un as bi,w as HC,yn as dw,z as Ki}from"./chunk-CmcsrXIS.js";import{i as Ne}from"./chunk-BmYfasZb.js";import{A as Xi,Y as kn,c as Fs,f as Hs,ft as z,m as Ji,o as Fi,p as Is,s as Fn,v as Nt$1}from"./chunk-BJsGms98.js";import{l as S}from"./main-CWHSXZF7.js";import{n as Q}from"./chunk-DB7B7Heg.js";import{t as c}from"./chunk-jZeUNnZX.js";var Et=[{_id:`user-001`,name:`Jordan Blake`,role:`seller`,avatar:`/assets/user/jordan-blake.jpg`,bio:`Private seller listing a well-kept family sedan. Quick, friendly communication.`,location:`San Francisco, CA`,memberSince:`2024-03-12T00:00:00.000Z`,listingsCount:1,rating:4.7},{_id:`user-002`,name:`Riley Sato`,role:`buyer`,avatar:`/assets/user/riley-sato.jpg`,bio:`Looking for a reliable electric or hybrid vehicle for daily commuting.`,location:`Oakland, CA`,memberSince:`2025-01-08T00:00:00.000Z`,listingsCount:0,rating:4.9},{_id:`user-003`,name:`Downtown Auto Group`,role:`dealer`,avatar:`/assets/dealership/downtown.png`,bio:`Official Vinhub presence for Downtown Auto Group's sales team.`,location:`San Francisco, CA`,memberSince:`2023-09-01T00:00:00.000Z`,listingsCount:12,rating:4.6}].map(Qt);function Qt(t){return{_id:O(t._id),name:O(t.name),role:Zt(t.role,[`buyer`,`seller`,`dealer`],`buyer`),avatar:O(t.avatar),bio:O(t.bio),location:O(t.location),memberSince:O(t.memberSince),listingsCount:wt(t.listingsCount),rating:wt(t.rating)}}function O(t,o=``){return typeof t==`string`&&t.trim().length>0?t.trim():o}function wt(t,o=0){return typeof t==`number`&&Number.isFinite(t)?t:o}function Zt(t,o,e){return o.includes(t)?t:e}var Ot=Et;var Oe=(()=>{class t{constructor(){this.users=bi(Ot)}getById(e){return pC(()=>this.users().find(n=>n._id===e))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=O$1({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var At=(()=>{class t extends S{pathId;onInit(){this.pathId=`url(#`+Nt$1()+`)`}static ɵfac=(()=>{let e;return function(i){return(e||(e=Wf(t)))(i||t)}})();static ɵcmp=DI({type:t,selectors:[[``,`data-p-icon`,`star`]],features:[gh],decls:5,vars:2,consts:[[`d`,`M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(n,i){n&1&&(kd(),_u(0,`g`),bh(1,`path`,0),Su(),_u(2,`defs`)(3,`clipPath`,1),bh(4,`rect`,2),Su()()),n&2&&(Ih(`clip-path`,i.pathId),VD(3),Sh(`id`,i.pathId))},encapsulation:2})}return t})();var Nt=(()=>{class t extends S{pathId;onInit(){this.pathId=`url(#`+Nt$1()+`)`}static ɵfac=(()=>{let e;return function(i){return(e||(e=Wf(t)))(i||t)}})();static ɵcmp=DI({type:t,selectors:[[``,`data-p-icon`,`star-fill`]],features:[gh],decls:5,vars:2,consts:[[`d`,`M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(n,i){n&1&&(kd(),_u(0,`g`),bh(1,`path`,0),Su(),_u(2,`defs`)(3,`clipPath`,1),bh(4,`rect`,2),Su()()),n&2&&(Ih(`clip-path`,i.pathId),VD(3),Sh(`id`,i.pathId))},encapsulation:2})}return t})();var Rt=`
    .p-rating {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: dt('rating.gap');
    }

    .p-rating-option {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        outline-color: transparent;
        border-radius: 50%;
        transition:
            background dt('rating.transition.duration'),
            color dt('rating.transition.duration'),
            border-color dt('rating.transition.duration'),
            outline-color dt('rating.transition.duration'),
            box-shadow dt('rating.transition.duration');
    }

    .p-rating-option.p-focus-visible {
        box-shadow: dt('rating.focus.ring.shadow');
        outline: dt('rating.focus.ring.width') dt('rating.focus.ring.style') dt('rating.focus.ring.color');
        outline-offset: dt('rating.focus.ring.offset');
    }

    .p-rating-icon {
        color: dt('rating.icon.color');
        transition:
            background dt('rating.transition.duration'),
            color dt('rating.transition.duration'),
            border-color dt('rating.transition.duration'),
            outline-color dt('rating.transition.duration'),
            box-shadow dt('rating.transition.duration');
        font-size: dt('rating.icon.size');
        width: dt('rating.icon.size');
        height: dt('rating.icon.size');
    }

    .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
        color: dt('rating.icon.hover.color');
    }

    .p-rating-option-active .p-rating-icon {
        color: dt('rating.icon.active.color');
    }

    .p-rating-icon.p-invalid {
        /* @todo */
        stroke: dt('rating.invalid.icon.color');
    }

    .p-rating.p-readonly .p-rating-option {
        cursor: not-allowed;
    }
`;var Wt=[`onicon`];var Xt=[`officon`];var Yt=(t,o)=>({star:t,value:o});var zt=(t,o)=>({$implicit:t,class:o});function te(t,o){t&1&&_h(0)}function ee(t,o){if(t&1&&yh(0,te,1,0,`ng-container`,4),t&2){let e=sw(2).$implicit,n=sw();wh(`ngTemplateOutlet`,n.onIconTemplate||n._onIconTemplate)(`ngTemplateOutletContext`,Jw(2,zt,e+1,n.cx(`onIcon`)))}}function ne(t,o){if(t&1&&Ch(0,`span`,7),t&2){let e=sw(4);Nw(e.cx(`onIcon`)),wh(`ngStyle`,e.iconOnStyle())(`ngClass`,e.iconOnClass())(`pBind`,e.ptm(`onIcon`))}}function ie(t,o){if(t&1&&(kd(),Ch(0,`svg`,8)),t&2){let e=sw(4);Nw(e.cx(`onIcon`)),wh(`ngStyle`,e.iconOnStyle())(`pBind`,e.ptm(`onIcon`))}}function oe(t,o){if(t&1&&(UI(0,ne,1,5,`span`,5),UI(1,ie,1,4,`:svg:svg`,6)),t&2){let e=sw(3);zI(e.iconOnClass()?0:-1),VD(),zI(e.iconOnClass()?-1:1)}}function ae(t,o){if(t&1&&UI(0,ee,1,5,`ng-container`)(1,oe,2,2),t&2){let e=sw(2);zI(e.onIconTemplate||e._onIconTemplate?0:1)}}function re(t,o){t&1&&_h(0)}function se(t,o){if(t&1&&yh(0,re,1,0,`ng-container`,4),t&2){let e=sw(2).$implicit,n=sw();wh(`ngTemplateOutlet`,n.offIconTemplate||n._offIconTemplate)(`ngTemplateOutletContext`,Jw(2,zt,e+1,n.cx(`offIcon`)))}}function le(t,o){if(t&1&&Ch(0,`span`,7),t&2){let e=sw(4);Nw(e.cx(`offIcon`)),wh(`ngStyle`,e.iconOffStyle())(`ngClass`,e.iconOffClass())(`pBind`,e.ptm(`offIcon`))}}function ce(t,o){if(t&1&&(kd(),Ch(0,`svg`,10)),t&2){let e=sw(4);Nw(e.cx(`offIcon`)),wh(`ngStyle`,e.iconOffStyle())(`pBind`,e.ptm(`offIcon`))}}function de(t,o){if(t&1&&(UI(0,le,1,5,`span`,5),UI(1,ce,1,4,`:svg:svg`,9)),t&2){let e=sw(3);zI(e.iconOffClass()?0:-1),VD(),zI(e.iconOffClass()?-1:1)}}function pe(t,o){if(t&1&&UI(0,se,1,5,`ng-container`)(1,de,2,2),t&2){let e=sw(2);zI(e.offIconTemplate||e._offIconTemplate?0:1)}}function ue(t,o){if(t&1){let e=ew();Ki(0,`div`,1),Nh(`click`,function(i){let l=wd(e).$implicit;return Cd(sw().onOptionClick(i,l+1))}),Ki(1,`span`,2)(2,`input`,3),Nh(`focus`,function(i){let l=wd(e).$implicit;return Cd(sw().onInputFocus(i,l+1))})(`blur`,function(i){wd(e);return Cd(sw().onInputBlur(i))})(`change`,function(i){let l=wd(e).$implicit;return Cd(sw().onChange(i,l+1))}),Tu()(),UI(3,ae,2,1)(4,pe,2,1),Tu()}if(t&2){let e=o.$implicit,n=sw();Nw(n.cx(`option`,Jw(16,Yt,e,n.value))),wh(`pBind`,n.ptm(`option`)),VD(),wh(`pBind`,n.ptm(`hiddenOptionInputContainer`)),Ih(`data-p-hidden-accessible`,!0),VD(),wh(`value`,e+1)(`checked`,n.value===e+1)(`pAutoFocus`,n.autofocus())(`pBind`,n.ptm(`hiddenOptionInput`)),Ih(`name`,n.name()||n.nameattr+`_name`)(`value`,n.modelValue())(`required`,n.required()?``:void 0)(`readonly`,n.readonly()?``:void 0)(`disabled`,n.$disabled()?``:void 0)(`aria-label`,n.starAriaLabel(e+1)),VD(),zI(e+1<=n.value?3:4)}}var fe=`
    ${Rt}

    /* For ngx-prime */
    p-rating.ng-invalid.ng-dirty > .p-rating > .p-rating-icon {
        stroke: dt('rating.invalid.icon.color');
    }
`;var me={root:({instance:t})=>[`p-rating`,{"p-readonly":t.readonly(),"p-disabled":t.$disabled()}],option:({instance:t,star:o,value:e})=>[`p-rating-option`,{"p-rating-option-active":o+1<=e,"p-focus-visible":o+1===t.focusedOptionIndex()&&t.isFocusVisibleItem}],onIcon:({instance:t})=>[`p-rating-icon p-rating-on-icon`,{"p-invalid":t.invalid()}],offIcon:({instance:t})=>[`p-rating-icon p-rating-off-icon`,{"p-invalid":t.invalid()}]};var kt=(()=>{class t extends z{name=`rating`;style=fe;classes=me;static ɵfac=(()=>{let e;return function(i){return(e||(e=Wf(t)))(i||t)}})();static ɵprov=O$1({token:t,factory:t.ɵfac})}return t})();var Vt=new b(`RATING_INSTANCE`);var ge={provide:Ne,useExisting:ii(()=>Pt),multi:!0};var Pt=(()=>{class t extends c{componentName=`Rating`;$pcRating=m(Vt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(Fs,{self:!0});constructor(){super(),c1()&&console.warn('`<p-rating>` is deprecated and will be removed in a future major version. Use a native `<input type="radio" pRating>` instead.')}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}readonly=JP(void 0,{transform:VC});stars=JP(5,{transform:HC});iconOnClass=JP();iconOnStyle=JP();iconOffClass=JP();iconOffStyle=JP();autofocus=JP(void 0,{transform:VC});onRate=XP();onFocus=XP();onBlur=XP();onIconTemplate;offIconTemplate;templates=r1(kn);value;starsArray;isFocusVisibleItem=!0;focusedOptionIndex=bi(-1);nameattr;_componentStyle=m(kt);_onIconTemplate;_offIconTemplate;onInit(){this.nameattr=this.nameattr||Nt$1(`pn_id_`),this.starsArray=[];for(let e=0;e<this.stars();e++)this.starsArray[e]=e}onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`onicon`:this._onIconTemplate=e.template;break;case`officon`:this._offIconTemplate=e.template;break}})}onOptionClick(e,n){if(!this.readonly()&&!this.$disabled()){this.onOptionSelect(e,n),this.isFocusVisibleItem=!1;let i=Ji(e.currentTarget,``);i&&Xi(i)}}onOptionSelect(e,n){!this.readonly()&&!this.$disabled()&&(this.focusedOptionIndex()===n||n===this.value?(this.focusedOptionIndex.set(-1),this.updateModel(e,null)):(this.focusedOptionIndex.set(n),this.updateModel(e,n||null)))}onChange(e,n){this.onOptionSelect(e,n),this.isFocusVisibleItem=!0}onInputBlur(e){this.focusedOptionIndex.set(-1),this.onBlur.emit(e)}onInputFocus(e,n){!this.readonly()&&!this.$disabled()&&(this.focusedOptionIndex.set(n),this.isFocusVisibleItem=e.sourceCapabilities?.firesTouchEvents===!1,this.onFocus.emit(e))}updateModel(e,n){this.writeValue(n),this.onModelChange(this.value),this.onModelTouched(),this.onRate.emit({originalEvent:e,value:n})}starAriaLabel(e){return e===1?this.config.translation.aria?.star:this.config.translation.aria?.stars?.replace(/{star}/g,e)}getIconTemplate(e){return!this.value||e>=this.value?this.offIconTemplate||this._offIconTemplate:this.onIconTemplate||this.offIconTemplate}writeControlValue(e,n){this.value=e,n(e)}get isCustomIcon(){return!!(this.onIconTemplate||this._onIconTemplate||this.offIconTemplate||this._offIconTemplate)}get dataP(){return this.cn({readonly:this.readonly(),disabled:this.$disabled()})}static ɵfac=function(n){return new(n||t)};static ɵcmp=DI({type:t,selectors:[[`p-rating`]],contentQueries:function(n,i,l){if(n&1&&(kh(l,i.templates,kn,4),Rh(l,Wt,4)(l,Xt,4)),n&2){pw();let m;dw(m=fw())&&(i.onIconTemplate=m.first),dw(m=fw())&&(i.offIconTemplate=m.first)}},hostVars:3,hostBindings:function(n,i){n&2&&(Ih(`data-p`,i.dataP),Nw(i.cx(`root`)))},inputs:{readonly:[1,`readonly`],stars:[1,`stars`],iconOnClass:[1,`iconOnClass`],iconOnStyle:[1,`iconOnStyle`],iconOffClass:[1,`iconOffClass`],iconOffStyle:[1,`iconOffStyle`],autofocus:[1,`autofocus`]},outputs:{onRate:`onRate`,onFocus:`onFocus`,onBlur:`onBlur`},features:[Qw([ge,kt,{provide:Vt,useExisting:t},{provide:Fi,useExisting:t}]),_I([Fs]),gh],decls:2,vars:0,consts:[[3,`class`,`pBind`],[3,`click`,`pBind`],[1,`p-hidden-accessible`,3,`pBind`],[`type`,`radio`,3,`focus`,`blur`,`change`,`value`,`checked`,`pAutoFocus`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`aria-hidden`,`true`,3,`class`,`ngStyle`,`ngClass`,`pBind`],[`data-p-icon`,`star-fill`,`aria-hidden`,`true`,3,`ngStyle`,`class`,`pBind`],[`aria-hidden`,`true`,3,`ngStyle`,`ngClass`,`pBind`],[`data-p-icon`,`star-fill`,`aria-hidden`,`true`,3,`ngStyle`,`pBind`],[`data-p-icon`,`star`,`aria-hidden`,`true`,3,`ngStyle`,`class`,`pBind`],[`data-p-icon`,`star`,`aria-hidden`,`true`,3,`ngStyle`,`pBind`]],template:function(n,i){n&1&&qI(0,ue,5,19,`div`,0,WI),n&2&&ZI(i.starsArray)},dependencies:[Sb,yb,Db,vb,Q,Nt,At,Fn,Hs,Fs],encapsulation:2})}return t})();var dn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=us({type:t});static ɵinj=Nr({imports:[Pt,Fn,Fn]})}return t})();var jt=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var _e=[`*`];function he(t,o){if(t&1&&(Ki(0,`span`,1),Bw(1),Tu()),t&2){let e=sw();Nw(e.cx(`label`)),wh(`pBind`,e.ptm(`label`)),Ih(`data-p`,e.dataP),VD(),Qh(e.label())}}function ve(t,o){if(t&1&&Ch(0,`span`,3),t&2){let e=sw(2);Nw(e.icon()),wh(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`)),Ih(`data-p`,e.dataP)(`aria-hidden`,!0)}}function Ce(t,o){if(t&1){let e=ew();Ki(0,`img`,5),Nh(`error`,function(i){wd(e);return Cd(sw(3).imageError(i))}),Tu()}if(t&2){let e=sw(3);wh(`pBind`,e.ptm(`image`))(`src`,e.image(),pp),Ih(`alt`,e.ariaLabel()??``)(`data-p`,e.dataP)}}function ye(t,o){if(t&1&&UI(0,Ce,1,4,`img`,4),t&2)zI(sw(2).image()?0:-1)}function be(t,o){if(t&1&&UI(0,ve,1,6,`span`,2)(1,ye,1,1),t&2)zI(sw().icon()?0:1)}var xe={root:({instance:t})=>[`p-avatar p-component`,{"p-avatar-image":t.image()!=null,"p-avatar-circle":t.shape()===`circle`,"p-avatar-lg":t.size()===`large`,"p-avatar-xl":t.size()===`xlarge`}],label:`p-avatar-label`,icon:`p-avatar-icon`};var $t=(()=>{class t extends z{name=`avatar`;style=jt;classes=xe;static ɵfac=(()=>{let e;return function(i){return(e||(e=Wf(t)))(i||t)}})();static ɵprov=O$1({token:t,factory:t.ɵfac})}return t})();var Ht=new b(`AVATAR_INSTANCE`);var nt=(()=>{class t extends Is{componentName=`Avatar`;$pcAvatar=m(Ht,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(Fs,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=JP();icon=JP();image=JP();size=JP(`normal`);shape=JP(`square`);styleClass=JP();ariaLabel=JP();ariaLabelledBy=JP();onImageError=XP();_componentStyle=m($t);imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({[this.shape()]:this.shape(),[this.size()]:this.size()})}static ɵfac=(()=>{let e;return function(i){return(e||(e=Wf(t)))(i||t)}})();static ɵcmp=DI({type:t,selectors:[[`p-avatar`]],hostVars:5,hostBindings:function(n,i){n&2&&(Ih(`aria-label`,i.ariaLabel())(`aria-labelledby`,i.ariaLabelledBy())(`data-p`,i.dataP),Nw(i.cn(i.cx(`root`),i.styleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],size:[1,`size`],shape:[1,`shape`],styleClass:[1,`styleClass`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},outputs:{onImageError:`onImageError`},features:[Qw([$t,{provide:Ht,useExisting:t},{provide:Fi,useExisting:t}]),_I([Fs]),gh],ngContentSelectors:_e,decls:3,vars:1,consts:[[3,`pBind`,`class`],[3,`pBind`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`,`src`],[3,`error`,`pBind`,`src`]],template:function(n,i){n&1&&(cw(),uw(0),UI(1,he,2,5,`span`,0)(2,be,2,1)),n&2&&(VD(),zI(i.label()?1:2))},dependencies:[Sb,yb,Fn,Fs],encapsulation:2})}return t})();var Ut=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=us({type:t});static ɵinj=Nr({imports:[nt,Fn,Fn]})}return t})();var Fe=()=>({width:`2.5rem`,height:`2.5rem`});var Ln=(()=>{class t{constructor(){this.user=JP.required()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=DI({type:t,selectors:[[`app-user-icon`]],inputs:{user:[1,`user`]},decls:1,vars:5,consts:[[`shape`,`circle`,3,`image`,`label`]],template:function(n,i){n&1&&Ch(0,`p-avatar`,0),n&2&&(Sw(Kw(4,Fe)),wh(`image`,i.user().avatar||void 0)(`label`,i.user().avatar?void 0:i.user().name.charAt(0)))},dependencies:[Ut,nt],encapsulation:2})}}return t})();export{dn as a,Ut as i,Oe as n,nt as o,Pt as r,Ln as t};