var E=Object.defineProperty;var j=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>j(e,typeof t!="symbol"?t+"":t,n);import{r as h,n as y,d as b,f as B,i as A,e as C,g as w,h as I,j as L,k as N,l as P,m as T,p as H}from"./scheduler.BPpWaw1T.js";let $=!1;function M(){$=!0}function O(){$=!1}function q(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=a?l+1:q(1,l,_=>t[n[_]].claim_order,a))-1;i[r]=n[o]+1;const c=o+1;n[c]=r,l=Math.max(c,l)}const u=[],s=[];let f=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(u.push(t[r-1]);f>=r;f--)s.push(t[f]);f--}for(;f>=0;f--)s.push(t[f]);u.reverse(),s.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<s.length;r++){for(;a<u.length&&s[r].claim_order>=u[a].claim_order;)a++;const o=a<u.length?u[a]:null;e.insertBefore(s[r],o)}}function D(e,t){if($){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?D(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function U(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return e.dataset.svelteH}function V(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,l=!1){W(e);const u=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const f=e[s];if(t(f)){const r=n(f);return r===void 0?e.splice(s,1):e[s]=r,l||(e.claim_info.last_index=s),f}}for(let s=e.claim_info.last_index-1;s>=0;s--){const f=e[s];if(t(f)){const r=n(f);return r===void 0?e.splice(s,1):e[s]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,f}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function F(e,t,n,i){return S(e,l=>l.nodeName===t,l=>{const u=[];for(let s=0;s<l.attributes.length;s++){const f=l.attributes[s];n[f.name]||u.push(f.name)}u.forEach(s=>l.removeAttribute(s))},()=>i(t))}function le(e,t,n){return F(e,t,n,U)}function G(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function fe(e){return G(e," ")}function ue(e,t){t=""+t,e.data!==t&&(e.data=t)}function ce(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function oe(e,t){return new e(t)}const m=new Set;let d;function de(){d={r:0,c:[],p:d}}function _e(){d.r||h(d.c),d=d.p}function J(e,t){e&&e.i&&(m.delete(e),e.i(t))}function me(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function he(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function $e(e){e&&e.c()}function pe(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),w(()=>{const u=e.$$.on_mount.map(P).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...u):h(u),e.$$.on_mount=[]}),l.forEach(w)}function Q(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(T.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ye(e,t,n,i,l,u,s=null,f=[-1]){const r=L;N(e);const a=e.$$={fragment:null,ctx:[],props:u,update:y,not_equal:l,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:b(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};s&&s(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(c,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&l(a.ctx[c],a.ctx[c]=v)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](v),o&&X(e,c)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){M();const c=V(t.target);a.fragment&&a.fragment.l(c),c.forEach(R)}else a.fragment&&a.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),O(),B()}N(r)}class xe{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!C(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{te as A,he as B,xe as S,V as a,G as b,le as c,R as d,U as e,fe as f,ee as g,D as h,ye as i,ue as j,ie as k,me as l,_e as m,J as n,ae as o,ce as p,de as q,oe as r,ne as s,x as t,$e as u,pe as v,K as w,Q as x,se as y,re as z};
