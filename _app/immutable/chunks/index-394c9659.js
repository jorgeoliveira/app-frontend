function b(){}const tt=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function et(t){return t()}function Q(){return Object.create(null)}function $(t){t.forEach(et)}function C(t){return typeof t=="function"}function Ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Jt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function vt(t){return Object.keys(t).length===0}function Et(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t,e,n){t.$$.on_destroy.push(Et(e,n))}function Qt(t,e,n,i){if(t){const s=nt(t,e,n,i);return t[0](s)}}function nt(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function Xt(t,e,n,i,s,c){if(s){const r=nt(e,n,i,c);t.p(r,s)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){const e={};for(const n in t)e[n]=!0;return e}function te(t){return t&&C(t.destroy)?t.destroy:b}const it=typeof window<"u";let st=it?()=>window.performance.now():()=>Date.now(),J=it?t=>requestAnimationFrame(t):b;const v=new Set;function rt(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&J(rt)}function ot(t){let e;return v.size===0&&J(rt),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let R=!1;function kt(){R=!0}function Nt(){R=!1}function At(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:At(1,s,h=>e[n[h]].claim_order,a))-1;i[l]=n[d]+1;const u=d+1;n[u]=l,s=Math.max(u,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(r[l],d)}}function ct(t,e){t.appendChild(e)}function lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=q("style");return Ct(lt(t),e),e.sheet}function Ct(t,e){return ct(t.head||t,e),e.sheet}function Dt(t,e){if(R){for(Tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Mt(t,e,n){t.insertBefore(e,n||null)}function jt(t,e,n){R&&!n?Dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function q(t){return document.createElement(t)}function at(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function K(t){return document.createTextNode(t)}function ne(){return K(" ")}function ie(){return K("")}function V(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t){return function(e){return e.preventDefault(),t.call(this,e)}}function re(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function oe(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ut(t,i,e[i])}function ce(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:ut(t,e,n)}function Ht(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,s=!1){ft(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function _t(t,e,n,i){return dt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function le(t,e,n){return _t(t,e,n,q)}function ae(t,e,n){return _t(t,e,n,at)}function Pt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function ue(t){return Pt(t," ")}function X(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function fe(t,e){const n=X(t,"HTML_TAG_START",0),i=X(t,"HTML_TAG_END",n);if(n===i)return new Y(void 0,e);ft(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Y(c,e)}function de(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function he(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let H;function zt(){if(H===void 0){H=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{H=!0}}return H}function me(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=q("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=zt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=V(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=V(i.contentWindow,"resize",e)}),ct(t,i),()=>{(s||c&&i.contentWindow)&&c(),E(i)}}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ye(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Lt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=at(n.nodeName):this.e=q(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Mt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class Y extends Lt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}}function ge(t,e){return new t(e)}const L=new Map;let O=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:St(e),rules:{}};return L.set(t,n),n}function G(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*c(m);a+=m*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Ot(d)}_${o}`,h=lt(t),{stylesheet:f,rules:_}=L.get(h)||Rt(h,t);_[u]||(_[u]=!0,f.insertRule(`@keyframes ${u} ${d}`,f.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${s}ms 1 both`,O+=1,u}function mt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),O-=s,O||qt())}function qt(){J(()=>{O||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),L.clear())})}let T;function N(t){T=t}function D(){if(!T)throw new Error("Function called outside component initialization");return T}function be(t){D().$$.before_update.push(t)}function $e(t){D().$$.on_mount.push(t)}function xe(t){D().$$.after_update.push(t)}function we(t){D().$$.on_destroy.push(t)}function ve(){const t=D();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=ht(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Ee(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],Z=[],P=[],I=[],pt=Promise.resolve();let U=!1;function yt(){U||(U=!0,pt.then(gt))}function ke(){return yt(),pt}function S(t){P.push(t)}function Ne(t){I.push(t)}const F=new Set;let x=0;function gt(){if(x!==0)return;const t=T;do{try{for(;x<w.length;){const e=w[x];x++,N(e),Bt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(N(null),w.length=0,x=0;Z.length;)Z.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];F.has(n)||(F.add(n),n())}P.length=0}while(w.length);for(;I.length;)I.pop()();U=!1,F.clear(),N(t)}function Bt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}let k;function bt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function A(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const z=new Set;let y;function Ae(){y={r:0,c:[],p:y}}function Te(){y.r||$(y.c),y=y.p}function Wt(t,e){t&&t.i&&(z.delete(t),t.i(e))}function Se(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),y.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const $t={duration:0};function Ce(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const o=y;o.r+=1;function l(){const{delay:a=0,duration:d=300,easing:u=tt,tick:h=b,css:f}=s||$t;f&&(r=G(t,1,0,d,a,u,f));const _=st()+a,p=_+d;S(()=>A(t,!1,"start")),ot(m=>{if(c){if(m>=p)return h(0,1),A(t,!1,"end"),--o.r||$(o.c),!1;if(m>=_){const g=u((m-_)/d);h(1-g,g)}}return c})}return C(s)?bt().then(()=>{s=s(i),l()}):l(),{end(a){a&&s.tick&&s.tick(1,0),c&&(r&&mt(t,r),c=!1)}}}function De(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,o=null,l=null,a=null;function d(){a&&mt(t,a)}function u(f,_){const p=f.b-r;return _*=Math.abs(p),{a:r,b:f.b,d:p,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:p=300,easing:m=tt,tick:g=b,css:B}=c||$t,W={start:st()+_,b:f};f||(W.group=y,y.r+=1),o||l?l=W:(B&&(d(),a=G(t,r,f,p,_,m,B)),f&&g(0,1),o=u(W,p),S(()=>A(t,f,"start")),ot(M=>{if(l&&M>l.start&&(o=u(l,p),l=null,A(t,o.b,"start"),B&&(d(),a=G(t,r,o.b,o.duration,0,m,c.css))),o){if(M>=o.end)g(r=o.b,1-r),A(t,o.b,"end"),l||(o.b?d():--o.group.r||$(o.group.c)),o=null;else if(M>=o.start){const xt=M-o.start;r=o.a+o.d*m(xt/o.duration),g(r,1-r)}}return!!(o||l)}))}return{run(f){C(c)?bt().then(()=>{c=c(s),h(f)}):h(f)},end(){d(),o=l=null}}}const Me=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function je(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function He(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Pe(t){t&&t.c()}function ze(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||S(()=>{const r=t.$$.on_mount.map(et).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...r):$(r),t.$$.on_mount=[]}),c.forEach(S)}function Gt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(w.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Le(t,e,n,i,s,c,r,o=[-1]){const l=T;N(t);const a=t.$$={fragment:null,ctx:[],props:c,update:b,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Q(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const _=f.length?f[0]:h;return a.ctx&&s(a.ctx[u],a.ctx[u]=_)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](_),d&&It(t,u)),h}):[],a.update(),d=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){kt();const u=Ht(e.target);a.fragment&&a.fragment.l(u),u.forEach(E)}else a.fragment&&a.fragment.c();e.intro&&Wt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),Nt(),gt()}N(l)}class Oe{$destroy(){Gt(this,1),this.$destroy=b}$on(e,n){if(!C(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{oe as $,Gt as A,ke as B,b as C,Dt as D,V as E,$ as F,ve as G,Me as H,ce as I,ee as J,Y as K,fe as L,Jt as M,se as N,S as O,De as P,at as Q,ae as R,Oe as S,Qt as T,Xt as U,Yt as V,Vt as W,Kt as X,tt as Y,ye as Z,wt as _,ne as a,je as a0,Ce as a1,me as a2,we as a3,pe as a4,_e as a5,te as a6,Zt as a7,be as a8,re as a9,Ee as aa,C as ab,He as ac,Ne as ad,jt as b,ue as c,Te as d,ie as e,Wt as f,Ae as g,E as h,Le as i,xe as j,q as k,le as l,Ht as m,ut as n,$e as o,he as p,K as q,Pt as r,Ut as s,Se as t,de as u,Z as v,ge as w,Pe as x,ze as y,Ft as z};
