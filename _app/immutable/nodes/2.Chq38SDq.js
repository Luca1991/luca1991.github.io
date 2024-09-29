import{s as te,n as W,x as U,b as be,y as we}from"../chunks/scheduler.BPpWaw1T.js";import{S as ae,i as le,e as _,t as Q,s as V,c as p,a as b,b as X,d as m,f as M,o,g as x,h as d,j as Z,z as ke,k as se,y as Te,A as ve,B as Ie,u as H,v as N,w as F,n as q,l as K,x as $}from"../chunks/index.Ej2YfyF9.js";function re(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Ee(r){let e,t,a,f,c;return{c(){e=_("div"),t=_("h1"),a=Q(r[0]),f=V(),c=_("hr"),this.h()},l(l){e=p(l,"DIV",{class:!0});var n=b(e);t=p(n,"H1",{class:!0});var i=b(t);a=X(i,r[0]),i.forEach(m),f=M(n),c=p(n,"HR",{}),n.forEach(m),this.h()},h(){o(t,"class","font-amsterdam_graffiti text-5xl"),o(e,"class","p-8")},m(l,n){x(l,e,n),d(e,t),d(t,a),d(e,f),d(e,c)},p(l,[n]){n&1&&Z(a,l[0])},i:W,o:W,d(l){l&&m(e)}}}function ye(r,e,t){let{parTitle:a=""}=e;return r.$$set=f=>{"parTitle"in f&&t(0,a=f.parTitle)},[a]}class ie extends ae{constructor(e){super(),le(this,e,ye,Ee,te,{parTitle:0})}}function De(r){let e,t,a,f,c,l,n,i,u,g,s,w,v,E,T,G,j;return{c(){e=_("div"),t=_("figure"),a=_("img"),c=V(),l=_("div"),n=_("h2"),i=Q(r[0]),u=V(),g=_("p"),s=Q(r[1]),w=V(),v=_("div"),E=_("button"),T=Q(r[3]),this.h()},l(C){e=p(C,"DIV",{class:!0});var I=b(e);t=p(I,"FIGURE",{});var y=b(t);a=p(y,"IMG",{src:!0,alt:!0}),y.forEach(m),c=M(I),l=p(I,"DIV",{class:!0});var D=b(l);n=p(D,"H2",{class:!0});var B=b(n);i=X(B,r[0]),B.forEach(m),u=M(D),g=p(D,"P",{});var P=b(g);s=X(P,r[1]),P.forEach(m),w=M(D),v=p(D,"DIV",{class:!0});var R=b(v);E=p(R,"BUTTON",{class:!0});var k=b(E);T=X(k,r[3]),k.forEach(m),R.forEach(m),D.forEach(m),I.forEach(m),this.h()},h(){U(a.src,f=r[2])||o(a,"src",f),o(a,"alt",r[0]),o(n,"class","card-title"),o(E,"class","btn btn-primary"),o(v,"class","card-actions justify-end"),o(l,"class","card-body"),o(e,"class","card w-96 bg-base-100 shadow-xl image-full")},m(C,I){x(C,e,I),d(e,t),d(t,a),d(e,c),d(e,l),d(l,n),d(n,i),d(l,u),d(l,g),d(g,s),d(l,w),d(l,v),d(v,E),d(E,T),G||(j=ke(E,"click",r[4]),G=!0)},p(C,[I]){I&4&&!U(a.src,f=C[2])&&o(a,"src",f),I&1&&o(a,"alt",C[0]),I&1&&Z(i,C[0]),I&2&&Z(s,C[1]),I&8&&Z(T,C[3])},i:W,o:W,d(C){C&&m(e),G=!1,j()}}}function Be(r,e,t){let{cardTitle:a=""}=e,{cardText:f=""}=e,{cardImage:c=""}=e,{cardBtnText:l=""}=e,{onBtnClick:n=()=>{}}=e;const i=()=>{n()};return r.$$set=u=>{"cardTitle"in u&&t(0,a=u.cardTitle),"cardText"in u&&t(1,f=u.cardText),"cardImage"in u&&t(2,c=u.cardImage),"cardBtnText"in u&&t(3,l=u.cardBtnText),"onBtnClick"in u&&t(5,n=u.onBtnClick)},[a,f,c,l,i,n]}class ee extends ae{constructor(e){super(),le(this,e,Be,De,te,{cardTitle:0,cardText:1,cardImage:2,cardBtnText:3,onBtnClick:5})}}function ce(r){let e,t,a,f,c;return{c(){e=_("div"),t=_("a"),a=_("img"),this.h()},l(l){e=p(l,"DIV",{class:!0});var n=b(e);t=p(n,"A",{rel:!0,href:!0});var i=b(t);a=p(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){o(a,"class","object-cover w-16"),U(a.src,f="resources/icons/github.png")||o(a,"src",f),o(a,"alt","github"),o(t,"rel","external"),o(t,"href",c="https://github.com/"+r[3]),o(e,"class","px-2")},m(l,n){x(l,e,n),d(e,t),d(t,a)},p(l,n){n&8&&c!==(c="https://github.com/"+l[3])&&o(t,"href",c)},d(l){l&&m(e)}}}function oe(r){let e,t,a,f,c;return{c(){e=_("div"),t=_("a"),a=_("img"),this.h()},l(l){e=p(l,"DIV",{class:!0});var n=b(e);t=p(n,"A",{rel:!0,href:!0});var i=b(t);a=p(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){o(a,"class","object-cover w-16"),U(a.src,f="resources/icons/youtube.png")||o(a,"src",f),o(a,"alt","youtube"),o(t,"rel","external"),o(t,"href",c="https://www.youtube.com/"+r[4]),o(e,"class","px-2")},m(l,n){x(l,e,n),d(e,t),d(t,a)},p(l,n){n&16&&c!==(c="https://www.youtube.com/"+l[4])&&o(t,"href",c)},d(l){l&&m(e)}}}function fe(r){let e,t,a,f,c;return{c(){e=_("div"),t=_("a"),a=_("img"),this.h()},l(l){e=p(l,"DIV",{class:!0});var n=b(e);t=p(n,"A",{rel:!0,href:!0});var i=b(t);a=p(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){o(a,"class","object-cover w-16"),U(a.src,f="resources/icons/linkedin.png")||o(a,"src",f),o(a,"alt","linkedin"),o(t,"rel","external"),o(t,"href",c="https://www.linkedin.com/in/"+r[5]),o(e,"class","px-2")},m(l,n){x(l,e,n),d(e,t),d(t,a)},p(l,n){n&32&&c!==(c="https://www.linkedin.com/in/"+l[5])&&o(t,"href",c)},d(l){l&&m(e)}}}function ue(r){let e,t,a,f,c;return{c(){e=_("div"),t=_("a"),a=_("img"),this.h()},l(l){e=p(l,"DIV",{class:!0});var n=b(e);t=p(n,"A",{rel:!0,href:!0});var i=b(t);a=p(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){o(a,"class","object-cover w-16"),U(a.src,f="resources/icons/twitter.png")||o(a,"src",f),o(a,"alt","twitter"),o(t,"rel","external"),o(t,"href",c="https://twitter.com/"+r[6]),o(e,"class","px-2")},m(l,n){x(l,e,n),d(e,t),d(t,a)},p(l,n){n&64&&c!==(c="https://twitter.com/"+l[6])&&o(t,"href",c)},d(l){l&&m(e)}}}function de(r){let e,t,a,f,c;return{c(){e=_("div"),t=_("a"),a=_("img"),this.h()},l(l){e=p(l,"DIV",{class:!0});var n=b(e);t=p(n,"A",{rel:!0,href:!0});var i=b(t);a=p(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){o(a,"class","object-cover w-16"),U(a.src,f="resources/icons/email.png")||o(a,"src",f),o(a,"alt","email"),o(t,"rel","external"),o(t,"href",c="mailto:"+r[7]),o(e,"class","px-2")},m(l,n){x(l,e,n),d(e,t),d(t,a)},p(l,n){n&128&&c!==(c="mailto:"+l[7])&&o(t,"href",c)},d(l){l&&m(e)}}}function Re(r){let e,t,a,f,c,l,n,i,u,g,s,w,v,E,T,G,j,C,I,y=r[3].length>0&&ce(r),D=r[4].length>0&&oe(r),B=r[5].length>0&&fe(r),P=r[6].length>0&&ue(r),R=r[7].length>0&&de(r);return{c(){e=_("div"),t=_("div"),a=_("div"),f=_("div"),c=_("img"),n=V(),i=_("div"),u=_("h1"),g=Q(r[0]),s=V(),w=_("p"),v=Q(r[1]),E=V(),T=_("div"),y&&y.c(),G=V(),D&&D.c(),j=V(),B&&B.c(),C=V(),P&&P.c(),I=V(),R&&R.c(),this.h()},l(k){e=p(k,"DIV",{class:!0});var L=b(e);t=p(L,"DIV",{class:!0});var J=b(t);a=p(J,"DIV",{class:!0});var h=b(a);f=p(h,"DIV",{class:!0});var A=b(f);c=p(A,"IMG",{src:!0,class:!0,alt:!0}),A.forEach(m),h.forEach(m),n=M(J),i=p(J,"DIV",{});var S=b(i);u=p(S,"H1",{class:!0});var Y=b(u);g=X(Y,r[0]),Y.forEach(m),s=M(S),w=p(S,"P",{class:!0});var z=b(w);v=X(z,r[1]),z.forEach(m),E=M(S),T=p(S,"DIV",{class:!0});var O=b(T);y&&y.l(O),G=M(O),D&&D.l(O),j=M(O),B&&B.l(O),C=M(O),P&&P.l(O),I=M(O),R&&R.l(O),O.forEach(m),S.forEach(m),J.forEach(m),L.forEach(m),this.h()},h(){U(c.src,l=r[2])||o(c,"src",l),o(c,"class","max-w-sm rounded-lg shadow-2xl"),o(c,"alt","avatar"),o(f,"class","rounded-full object-cover w-64"),o(a,"class","avatar"),o(u,"class","text-5xl font-bold"),o(w,"class","whitespace-pre-line py-6"),o(T,"class","flex justify-center"),o(t,"class","hero-content flex-col lg:flex-row-reverse"),o(e,"class","hero bg-base-200")},m(k,L){x(k,e,L),d(e,t),d(t,a),d(a,f),d(f,c),d(t,n),d(t,i),d(i,u),d(u,g),d(i,s),d(i,w),d(w,v),d(i,E),d(i,T),y&&y.m(T,null),d(T,G),D&&D.m(T,null),d(T,j),B&&B.m(T,null),d(T,C),P&&P.m(T,null),d(T,I),R&&R.m(T,null)},p(k,[L]){L&4&&!U(c.src,l=k[2])&&o(c,"src",l),L&1&&Z(g,k[0]),L&2&&Z(v,k[1]),k[3].length>0?y?y.p(k,L):(y=ce(k),y.c(),y.m(T,G)):y&&(y.d(1),y=null),k[4].length>0?D?D.p(k,L):(D=oe(k),D.c(),D.m(T,j)):D&&(D.d(1),D=null),k[5].length>0?B?B.p(k,L):(B=fe(k),B.c(),B.m(T,C)):B&&(B.d(1),B=null),k[6].length>0?P?P.p(k,L):(P=ue(k),P.c(),P.m(T,I)):P&&(P.d(1),P=null),k[7].length>0?R?R.p(k,L):(R=de(k),R.c(),R.m(T,null)):R&&(R.d(1),R=null)},i:W,o:W,d(k){k&&m(e),y&&y.d(),D&&D.d(),B&&B.d(),P&&P.d(),R&&R.d()}}}function Ae(r,e,t){let{title:a=""}=e,{text:f=""}=e,{avatarUrl:c=""}=e,{githubRef:l=""}=e,{youtubeRef:n=""}=e,{linkedinRef:i=""}=e,{twitterRef:u=""}=e,{emailAddr:g=""}=e;return r.$$set=s=>{"title"in s&&t(0,a=s.title),"text"in s&&t(1,f=s.text),"avatarUrl"in s&&t(2,c=s.avatarUrl),"githubRef"in s&&t(3,l=s.githubRef),"youtubeRef"in s&&t(4,n=s.youtubeRef),"linkedinRef"in s&&t(5,i=s.linkedinRef),"twitterRef"in s&&t(6,u=s.twitterRef),"emailAddr"in s&&t(7,g=s.emailAddr)},[a,f,c,l,n,i,u,g]}class Ve extends ae{constructor(e){super(),le(this,e,Ae,Re,te,{title:0,text:1,avatarUrl:2,githubRef:3,youtubeRef:4,linkedinRef:5,twitterRef:6,emailAddr:7})}}const Me=[{title:"Disk Knight (worm.diskknight/knight)",download:[{language:"en",url:"/papers/malware_analysis/DiskKnight.pdf"},{language:"ita",url:"/papers/malware_analysis/DiskKnight_ITA.pdf"}]}],Pe=[{title:"Pepsi 2.0",download:[{language:"en",url:"/papers/packers/Pepsi_2.0.pdf"},{language:"ita",url:"/papers/packers/Pepsi_2.0_ITA.pdf"}]}],Ce=[{title:"Safedisc 1.06-1.11 (Midtown Madness)",download:[{language:"en",url:"/papers/drms/safedisc/MidtownMadness.pdf"},{language:"ita",url:"/papers/drms/safedisc/MidtownMadness_ITA.pdf"}]},{title:"Laserlock (Evolva)",download:[{language:"en",url:"/papers/drms/laserlock/Evolva.pdf"},{language:"ita",url:"/papers/drms/laserlock/Evolva_ITA.pdf"}]},{title:"SecuROM new 4.48.00.0004 (Arabian Nights)",download:[{language:"en",url:"/papers/drms/securom/ArabianNights.pdf"},{language:"ita",url:"/papers/drms/securom/ArabianNights_ITA.pdf"}]},{title:"SecuROM new 3.06.00.0003 (South Park Rally)",download:[{language:"ita",url:"/papers/drms/securom/SouthParkRally_ITA.pdf"}]},{title:"phenoProtect (Carrera Grand Prix)",download:[{language:"en",url:"/papers/drms/phenoprotect/CarreraGrandPrix.pdf"},{language:"ita",url:"/papers/drms/phenoprotect/CarreraGrandPrix_ITA.pdf"}]}],ne={malware_analysis:Me,unpacking:Pe,drm:Ce};function he(r,e,t){const a=r.slice();return a[1]=e[t],a}function me(r,e,t){const a=r.slice();return a[4]=e[t],a}function ge(r){let e,t,a,f='<tr class="text-center uppercase text-sm bg-base-200"><th>Title</th> <th>Download</th></tr>',c,l,n=re(r[0]),i=[];for(let u=0;u<n.length;u+=1)i[u]=pe(he(r,n,u));return{c(){e=_("div"),t=_("table"),a=_("thead"),a.innerHTML=f,c=V(),l=_("tbody");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=p(u,"DIV",{class:!0});var g=b(e);t=p(g,"TABLE",{class:!0});var s=b(t);a=p(s,"THEAD",{"data-svelte-h":!0}),Te(a)!=="svelte-qjsgnz"&&(a.innerHTML=f),c=M(s),l=p(s,"TBODY",{});var w=b(l);for(let v=0;v<i.length;v+=1)i[v].l(w);w.forEach(m),s.forEach(m),g.forEach(m),this.h()},h(){o(t,"class","table table-sm"),o(e,"class","overflow-x-auto my-2.5 py-8")},m(u,g){x(u,e,g),d(e,t),d(t,a),d(t,c),d(t,l);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(l,null)},p(u,g){if(g&1){n=re(u[0]);let s;for(s=0;s<n.length;s+=1){const w=he(u,n,s);i[s]?i[s].p(w,g):(i[s]=pe(w),i[s].c(),i[s].m(l,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}},d(u){u&&m(e),ve(i,u)}}}function _e(r){let e,t,a,f,c,l,n;return{c(){e=_("div"),t=_("a"),a=_("img"),n=V(),this.h()},l(i){e=p(i,"DIV",{class:!0});var u=b(e);t=p(u,"A",{href:!0,target:!0});var g=b(t);a=p(g,"IMG",{src:!0,alt:!0}),g.forEach(m),n=M(u),u.forEach(m),this.h()},h(){U(a.src,f="/resources/icons/flags/"+r[4].language+".png")||o(a,"src",f),o(a,"alt",c=r[4].language),o(t,"href",l=r[4].url),o(t,"target","_blank"),o(e,"class","px-4")},m(i,u){x(i,e,u),d(e,t),d(t,a),d(e,n)},p(i,u){u&1&&!U(a.src,f="/resources/icons/flags/"+i[4].language+".png")&&o(a,"src",f),u&1&&c!==(c=i[4].language)&&o(a,"alt",c),u&1&&l!==(l=i[4].url)&&o(t,"href",l)},d(i){i&&m(e)}}}function pe(r){let e,t,a=r[1].title+"",f,c,l,n,i,u=re(r[1].download),g=[];for(let s=0;s<u.length;s+=1)g[s]=_e(me(r,u,s));return{c(){e=_("tr"),t=_("td"),f=Q(a),c=V(),l=_("td"),n=_("div");for(let s=0;s<g.length;s+=1)g[s].c();i=V(),this.h()},l(s){e=p(s,"TR",{class:!0});var w=b(e);t=p(w,"TD",{class:!0});var v=b(t);f=X(v,a),v.forEach(m),c=M(w),l=p(w,"TD",{});var E=b(l);n=p(E,"DIV",{class:!0});var T=b(n);for(let G=0;G<g.length;G+=1)g[G].l(T);T.forEach(m),E.forEach(m),i=M(w),w.forEach(m),this.h()},h(){o(t,"class","min-w-[14rem] text-center"),o(n,"class","flex justify-center"),o(e,"class","hover:bg-base-300 bg-base-100")},m(s,w){x(s,e,w),d(e,t),d(t,f),d(e,c),d(e,l),d(l,n);for(let v=0;v<g.length;v+=1)g[v]&&g[v].m(n,null);d(e,i)},p(s,w){if(w&1&&a!==(a=s[1].title+"")&&Z(f,a),w&1){u=re(s[1].download);let v;for(v=0;v<u.length;v+=1){const E=me(s,u,v);g[v]?g[v].p(E,w):(g[v]=_e(E),g[v].c(),g[v].m(n,null))}for(;v<g.length;v+=1)g[v].d(1);g.length=u.length}},d(s){s&&m(e),ve(g,s)}}}function xe(r){let e,t=r[0]!=null&&r[0].length>0&&ge(r);return{c(){t&&t.c(),e=se()},l(a){t&&t.l(a),e=se()},m(a,f){t&&t.m(a,f),x(a,e,f)},p(a,[f]){a[0]!=null&&a[0].length>0?t?t.p(a,f):(t=ge(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:W,o:W,d(a){a&&m(e),t&&t.d(a)}}}function Ge(r,e,t){let{documents:a}=e;return r.$$set=f=>{"documents"in f&&t(0,a=f.documents)},[a]}class je extends ae{constructor(e){super(),le(this,e,Ge,xe,te,{documents:0})}}function Le(r){let e,t,a,f,c,l,n,i,u,g,s,w,v,E,T,G,j,C,I,y,D,B,P,R,k;e=new Ve({props:{title:"Hi and welcome to my website",text:`Well, if you are here you probably already know who I am, but in case you don't:
I'm Luca, a software developer mainly interested in reverse engineering, cyber security and low level stuff.
From time to time I publish some research papers about malware analysis, unpacking etc. and I have a 
YouTube channel where I talk about reverse engineering (in italian).
If you want to know more about what I do, you can tave a look at my Linkedin profile or Github page.
This website serve to keep track of my projects and to host my technical papers.
`,avatarUrl:"https://avatars2.githubusercontent.com/u/3731220",githubRef:"Luca1991",youtubeRef:"@LucaDAmico91",linkedinRef:"luca91",twitterRef:"LucaDAmico91",emailAddr:"contact@lucadamico.dev"}}),a=new ie({props:{parTitle:"Technical Papers"}}),l=new ee({props:{cardTitle:"Malware Analysis",cardText:"Technical papers about different malware I’ve reverse engineered and analyzed",cardImage:"/resources/cards/papers/malware.png",cardBtnText:"Open",onBtnClick:r[1]}}),i=new ee({props:{cardTitle:"Unpacking",cardText:"Technical papers about some obscure and underground packers",cardImage:"/resources/cards/papers/unpacking.png",cardBtnText:"Open",onBtnClick:r[2]}}),g=new ee({props:{cardTitle:"Old-Skool DRMs",cardText:"Technical papers I’ve written while reverse engineering very old DRMs that aren’t used anymore, just for learning purposes.",cardImage:"/resources/cards/papers/cracking.png",cardBtnText:"Open",onBtnClick:r[3]}});function L(h){r[4](h)}let J={};return r[0]!==void 0&&(J.documents=r[0]),E=new je({props:J}),be.push(()=>Ie(E,"documents",L)),j=new ie({props:{parTitle:"Apps/Tools"}}),y=new ee({props:{cardTitle:"NDSFactory",cardText:"Unpack & Repack Nintendo DS Roms (.nds)",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[5]}}),B=new ee({props:{cardTitle:"MoRePhun",cardText:"Experimental MoPhun Emulator",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[6]}}),R=new ee({props:{cardTitle:"Puzzle Bobble Grub2 Theme",cardText:"Puzzle Booble Theme for Grub2",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[7]}}),{c(){H(e.$$.fragment),t=V(),H(a.$$.fragment),f=V(),c=_("div"),H(l.$$.fragment),n=V(),H(i.$$.fragment),u=V(),H(g.$$.fragment),s=V(),w=_("div"),v=_("div"),H(E.$$.fragment),G=V(),H(j.$$.fragment),C=V(),I=_("div"),H(y.$$.fragment),D=V(),H(B.$$.fragment),P=V(),H(R.$$.fragment),this.h()},l(h){N(e.$$.fragment,h),t=M(h),N(a.$$.fragment,h),f=M(h),c=p(h,"DIV",{class:!0});var A=b(c);N(l.$$.fragment,A),n=M(A),N(i.$$.fragment,A),u=M(A),N(g.$$.fragment,A),A.forEach(m),s=M(h),w=p(h,"DIV",{class:!0,id:!0});var S=b(w);v=p(S,"DIV",{class:!0});var Y=b(v);N(E.$$.fragment,Y),Y.forEach(m),S.forEach(m),G=M(h),N(j.$$.fragment,h),C=M(h),I=p(h,"DIV",{class:!0});var z=b(I);N(y.$$.fragment,z),D=M(z),N(B.$$.fragment,z),P=M(z),N(R.$$.fragment,z),z.forEach(m),this.h()},h(){o(c,"class","flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto"),o(v,"class","w-full md:w-2/3"),o(w,"class","flex place-content-center"),o(w,"id","docs-table"),o(I,"class","flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto")},m(h,A){F(e,h,A),x(h,t,A),F(a,h,A),x(h,f,A),x(h,c,A),F(l,c,null),d(c,n),F(i,c,null),d(c,u),F(g,c,null),x(h,s,A),x(h,w,A),d(w,v),F(E,v,null),x(h,G,A),F(j,h,A),x(h,C,A),x(h,I,A),F(y,I,null),d(I,D),F(B,I,null),d(I,P),F(R,I,null),k=!0},p(h,[A]){const S={};A&1&&(S.onBtnClick=h[1]),l.$set(S);const Y={};A&1&&(Y.onBtnClick=h[2]),i.$set(Y);const z={};A&1&&(z.onBtnClick=h[3]),g.$set(z);const O={};!T&&A&1&&(T=!0,O.documents=h[0],we(()=>T=!1)),E.$set(O)},i(h){k||(q(e.$$.fragment,h),q(a.$$.fragment,h),q(l.$$.fragment,h),q(i.$$.fragment,h),q(g.$$.fragment,h),q(E.$$.fragment,h),q(j.$$.fragment,h),q(y.$$.fragment,h),q(B.$$.fragment,h),q(R.$$.fragment,h),k=!0)},o(h){K(e.$$.fragment,h),K(a.$$.fragment,h),K(l.$$.fragment,h),K(i.$$.fragment,h),K(g.$$.fragment,h),K(E.$$.fragment,h),K(j.$$.fragment,h),K(y.$$.fragment,h),K(B.$$.fragment,h),K(R.$$.fragment,h),k=!1},d(h){h&&(m(t),m(f),m(c),m(s),m(w),m(G),m(C),m(I)),$(e,h),$(a,h),$(l),$(i),$(g),$(E),$(j,h),$(y),$(B),$(R)}}}function Oe(r,e,t){let a;const f=()=>{var s;t(0,a=ne.malware_analysis),(s=document.getElementById("docs-table"))==null||s.scrollIntoView({behavior:"smooth",block:"center"})},c=()=>{var s;t(0,a=ne.unpacking),(s=document.getElementById("docs-table"))==null||s.scrollIntoView({behavior:"smooth",block:"center"})},l=()=>{var s;t(0,a=ne.drm),(s=document.getElementById("docs-table"))==null||s.scrollIntoView({behavior:"smooth",block:"center"})};function n(s){a=s,t(0,a)}return[a,f,c,l,n,()=>{window.open("https://github.com/Luca1991/NDSFactory","_blank")},()=>{window.open("https://github.com/Luca1991/MoRePhun","_blank")},()=>{window.open("https://github.com/Luca1991/Puzzle-Bobble-Grub2-Theme","_blank")}]}class Ue extends ae{constructor(e){super(),le(this,e,Oe,Le,te,{})}}export{Ue as component};
