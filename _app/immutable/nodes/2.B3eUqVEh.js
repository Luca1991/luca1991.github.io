import{s as te,n as Y,x as q,b as ke,y as Te}from"../chunks/scheduler.BPpWaw1T.js";import{S as ae,i as le,e as p,t as J,s as V,c as _,a as w,b as Q,d as m,f as M,o as c,g as G,h,j as X,z as Ie,k as ce,y as Ee,A as we,B as ye,u as S,v as $,w as U,n as H,l as N,x as F}from"../chunks/index.Ej2YfyF9.js";function ne(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function De(r){let e,t,a,u,i;return{c(){e=p("div"),t=p("h1"),a=J(r[0]),u=V(),i=p("hr"),this.h()},l(l){e=_(l,"DIV",{class:!0});var n=w(e);t=_(n,"H1",{class:!0});var s=w(t);a=Q(s,r[0]),s.forEach(m),u=M(n),i=_(n,"HR",{}),n.forEach(m),this.h()},h(){c(t,"class","font-amsterdam_graffiti text-5xl"),c(e,"class","p-8")},m(l,n){G(l,e,n),h(e,t),h(t,a),h(e,u),h(e,i)},p(l,[n]){n&1&&X(a,l[0])},i:Y,o:Y,d(l){l&&m(e)}}}function Be(r,e,t){let{parTitle:a=""}=e;return r.$$set=u=>{"parTitle"in u&&t(0,a=u.parTitle)},[a]}class oe extends ae{constructor(e){super(),le(this,e,Be,De,te,{parTitle:0})}}function Re(r){let e,t,a,u,i,l,n,s,d,g,o,v,b,E,k,j,z;return{c(){e=p("div"),t=p("figure"),a=p("img"),i=V(),l=p("div"),n=p("h2"),s=J(r[0]),d=V(),g=p("p"),o=J(r[1]),v=V(),b=p("div"),E=p("button"),k=J(r[3]),this.h()},l(P){e=_(P,"DIV",{class:!0});var T=w(e);t=_(T,"FIGURE",{});var y=w(t);a=_(y,"IMG",{src:!0,alt:!0}),y.forEach(m),i=M(T),l=_(T,"DIV",{class:!0});var D=w(l);n=_(D,"H2",{class:!0});var B=w(n);s=Q(B,r[0]),B.forEach(m),d=M(D),g=_(D,"P",{});var C=w(g);o=Q(C,r[1]),C.forEach(m),v=M(D),b=_(D,"DIV",{class:!0});var R=w(b);E=_(R,"BUTTON",{class:!0});var I=w(E);k=Q(I,r[3]),I.forEach(m),R.forEach(m),D.forEach(m),T.forEach(m),this.h()},h(){q(a.src,u=r[2])||c(a,"src",u),c(a,"alt",r[0]),c(n,"class","card-title"),c(E,"class","btn btn-primary"),c(b,"class","card-actions justify-end"),c(l,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl image-full")},m(P,T){G(P,e,T),h(e,t),h(t,a),h(e,i),h(e,l),h(l,n),h(n,s),h(l,d),h(l,g),h(g,o),h(l,v),h(l,b),h(b,E),h(E,k),j||(z=Ie(E,"click",r[4]),j=!0)},p(P,[T]){T&4&&!q(a.src,u=P[2])&&c(a,"src",u),T&1&&c(a,"alt",P[0]),T&1&&X(s,P[0]),T&2&&X(o,P[1]),T&8&&X(k,P[3])},i:Y,o:Y,d(P){P&&m(e),j=!1,z()}}}function Ae(r,e,t){let{cardTitle:a=""}=e,{cardText:u=""}=e,{cardImage:i=""}=e,{cardBtnText:l=""}=e,{onBtnClick:n=()=>{}}=e;const s=()=>{n()};return r.$$set=d=>{"cardTitle"in d&&t(0,a=d.cardTitle),"cardText"in d&&t(1,u=d.cardText),"cardImage"in d&&t(2,i=d.cardImage),"cardBtnText"in d&&t(3,l=d.cardBtnText),"onBtnClick"in d&&t(5,n=d.onBtnClick)},[a,u,i,l,s,n]}class W extends ae{constructor(e){super(),le(this,e,Ae,Re,te,{cardTitle:0,cardText:1,cardImage:2,cardBtnText:3,onBtnClick:5})}}function ue(r){let e,t,a,u,i;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=_(l,"DIV",{class:!0});var n=w(e);t=_(n,"A",{rel:!0,href:!0});var s=w(t);a=_(s,"IMG",{class:!0,src:!0,alt:!0}),s.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),q(a.src,u="resources/icons/github.png")||c(a,"src",u),c(a,"alt","github"),c(t,"rel","external"),c(t,"href",i="https://github.com/"+r[3]),c(e,"class","px-2")},m(l,n){G(l,e,n),h(e,t),h(t,a)},p(l,n){n&8&&i!==(i="https://github.com/"+l[3])&&c(t,"href",i)},d(l){l&&m(e)}}}function fe(r){let e,t,a,u,i;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=_(l,"DIV",{class:!0});var n=w(e);t=_(n,"A",{rel:!0,href:!0});var s=w(t);a=_(s,"IMG",{class:!0,src:!0,alt:!0}),s.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),q(a.src,u="resources/icons/youtube.png")||c(a,"src",u),c(a,"alt","youtube"),c(t,"rel","external"),c(t,"href",i="https://www.youtube.com/"+r[4]),c(e,"class","px-2")},m(l,n){G(l,e,n),h(e,t),h(t,a)},p(l,n){n&16&&i!==(i="https://www.youtube.com/"+l[4])&&c(t,"href",i)},d(l){l&&m(e)}}}function de(r){let e,t,a,u,i;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=_(l,"DIV",{class:!0});var n=w(e);t=_(n,"A",{rel:!0,href:!0});var s=w(t);a=_(s,"IMG",{class:!0,src:!0,alt:!0}),s.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),q(a.src,u="resources/icons/linkedin.png")||c(a,"src",u),c(a,"alt","linkedin"),c(t,"rel","external"),c(t,"href",i="https://www.linkedin.com/in/"+r[5]),c(e,"class","px-2")},m(l,n){G(l,e,n),h(e,t),h(t,a)},p(l,n){n&32&&i!==(i="https://www.linkedin.com/in/"+l[5])&&c(t,"href",i)},d(l){l&&m(e)}}}function he(r){let e,t,a,u,i;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=_(l,"DIV",{class:!0});var n=w(e);t=_(n,"A",{rel:!0,href:!0});var s=w(t);a=_(s,"IMG",{class:!0,src:!0,alt:!0}),s.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),q(a.src,u="resources/icons/twitter.png")||c(a,"src",u),c(a,"alt","twitter"),c(t,"rel","external"),c(t,"href",i="https://twitter.com/"+r[6]),c(e,"class","px-2")},m(l,n){G(l,e,n),h(e,t),h(t,a)},p(l,n){n&64&&i!==(i="https://twitter.com/"+l[6])&&c(t,"href",i)},d(l){l&&m(e)}}}function me(r){let e,t,a,u,i;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=_(l,"DIV",{class:!0});var n=w(e);t=_(n,"A",{rel:!0,href:!0});var s=w(t);a=_(s,"IMG",{class:!0,src:!0,alt:!0}),s.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),q(a.src,u="resources/icons/email.png")||c(a,"src",u),c(a,"alt","email"),c(t,"rel","external"),c(t,"href",i="mailto:"+r[7]),c(e,"class","px-2")},m(l,n){G(l,e,n),h(e,t),h(t,a)},p(l,n){n&128&&i!==(i="mailto:"+l[7])&&c(t,"href",i)},d(l){l&&m(e)}}}function Ve(r){let e,t,a,u,i,l,n,s,d,g,o,v,b,E,k,j,z,P,T,y=r[3].length>0&&ue(r),D=r[4].length>0&&fe(r),B=r[5].length>0&&de(r),C=r[6].length>0&&he(r),R=r[7].length>0&&me(r);return{c(){e=p("div"),t=p("div"),a=p("div"),u=p("div"),i=p("img"),n=V(),s=p("div"),d=p("h1"),g=J(r[0]),o=V(),v=p("p"),b=J(r[1]),E=V(),k=p("div"),y&&y.c(),j=V(),D&&D.c(),z=V(),B&&B.c(),P=V(),C&&C.c(),T=V(),R&&R.c(),this.h()},l(I){e=_(I,"DIV",{class:!0});var x=w(e);t=_(x,"DIV",{class:!0});var K=w(t);a=_(K,"DIV",{class:!0});var re=w(a);u=_(re,"DIV",{class:!0});var ee=w(u);i=_(ee,"IMG",{src:!0,class:!0,alt:!0}),ee.forEach(m),re.forEach(m),n=M(K),s=_(K,"DIV",{});var f=w(s);d=_(f,"H1",{class:!0});var A=w(d);g=Q(A,r[0]),A.forEach(m),o=M(f),v=_(f,"P",{class:!0});var Z=w(v);b=Q(Z,r[1]),Z.forEach(m),E=M(f),k=_(f,"DIV",{class:!0});var L=w(k);y&&y.l(L),j=M(L),D&&D.l(L),z=M(L),B&&B.l(L),P=M(L),C&&C.l(L),T=M(L),R&&R.l(L),L.forEach(m),f.forEach(m),K.forEach(m),x.forEach(m),this.h()},h(){q(i.src,l=r[2])||c(i,"src",l),c(i,"class","max-w-sm rounded-lg shadow-2xl"),c(i,"alt","avatar"),c(u,"class","rounded-full object-cover w-64"),c(a,"class","avatar"),c(d,"class","text-5xl font-bold"),c(v,"class","whitespace-pre-line py-6"),c(k,"class","flex justify-center"),c(t,"class","hero-content flex-col lg:flex-row-reverse"),c(e,"class","hero bg-base-200")},m(I,x){G(I,e,x),h(e,t),h(t,a),h(a,u),h(u,i),h(t,n),h(t,s),h(s,d),h(d,g),h(s,o),h(s,v),h(v,b),h(s,E),h(s,k),y&&y.m(k,null),h(k,j),D&&D.m(k,null),h(k,z),B&&B.m(k,null),h(k,P),C&&C.m(k,null),h(k,T),R&&R.m(k,null)},p(I,[x]){x&4&&!q(i.src,l=I[2])&&c(i,"src",l),x&1&&X(g,I[0]),x&2&&X(b,I[1]),I[3].length>0?y?y.p(I,x):(y=ue(I),y.c(),y.m(k,j)):y&&(y.d(1),y=null),I[4].length>0?D?D.p(I,x):(D=fe(I),D.c(),D.m(k,z)):D&&(D.d(1),D=null),I[5].length>0?B?B.p(I,x):(B=de(I),B.c(),B.m(k,P)):B&&(B.d(1),B=null),I[6].length>0?C?C.p(I,x):(C=he(I),C.c(),C.m(k,T)):C&&(C.d(1),C=null),I[7].length>0?R?R.p(I,x):(R=me(I),R.c(),R.m(k,null)):R&&(R.d(1),R=null)},i:Y,o:Y,d(I){I&&m(e),y&&y.d(),D&&D.d(),B&&B.d(),C&&C.d(),R&&R.d()}}}function Me(r,e,t){let{title:a=""}=e,{text:u=""}=e,{avatarUrl:i=""}=e,{githubRef:l=""}=e,{youtubeRef:n=""}=e,{linkedinRef:s=""}=e,{twitterRef:d=""}=e,{emailAddr:g=""}=e;return r.$$set=o=>{"title"in o&&t(0,a=o.title),"text"in o&&t(1,u=o.text),"avatarUrl"in o&&t(2,i=o.avatarUrl),"githubRef"in o&&t(3,l=o.githubRef),"youtubeRef"in o&&t(4,n=o.youtubeRef),"linkedinRef"in o&&t(5,s=o.linkedinRef),"twitterRef"in o&&t(6,d=o.twitterRef),"emailAddr"in o&&t(7,g=o.emailAddr)},[a,u,i,l,n,s,d,g]}class Ce extends ae{constructor(e){super(),le(this,e,Me,Ve,te,{title:0,text:1,avatarUrl:2,githubRef:3,youtubeRef:4,linkedinRef:5,twitterRef:6,emailAddr:7})}}const Pe=[{title:"Disk Knight (worm.diskknight/knight)",download:[{language:"en",url:"/papers/malware_analysis/DiskKnight.pdf"},{language:"ita",url:"/papers/malware_analysis/DiskKnight_ITA.pdf"}]}],xe=[{title:"Pepsi 2.0",download:[{language:"en",url:"/papers/packers/Pepsi_2.0.pdf"},{language:"ita",url:"/papers/packers/Pepsi_2.0_ITA.pdf"}]}],Ge=[{title:"Safedisc 1.06-1.11 (Midtown Madness)",download:[{language:"en",url:"/papers/drms/safedisc/MidtownMadness.pdf"},{language:"ita",url:"/papers/drms/safedisc/MidtownMadness_ITA.pdf"}]},{title:"Laserlock (Evolva)",download:[{language:"en",url:"/papers/drms/laserlock/Evolva.pdf"},{language:"ita",url:"/papers/drms/laserlock/Evolva_ITA.pdf"}]},{title:"SecuROM new 4.48.00.0004 (Arabian Nights)",download:[{language:"en",url:"/papers/drms/securom/ArabianNights.pdf"},{language:"ita",url:"/papers/drms/securom/ArabianNights_ITA.pdf"}]},{title:"SecuROM new 3.06.00.0003 (South Park Rally)",download:[{language:"ita",url:"/papers/drms/securom/SouthParkRally_ITA.pdf"}]},{title:"phenoProtect (Carrera Grand Prix)",download:[{language:"en",url:"/papers/drms/phenoprotect/CarreraGrandPrix.pdf"},{language:"ita",url:"/papers/drms/phenoprotect/CarreraGrandPrix_ITA.pdf"}]},{title:"phenoProtect new version (Zanzarah - German version)",download:[{language:"en",url:"/papers/drms/phenoprotect/Zanzarah.pdf"},{language:"ita",url:"/papers/drms/phenoprotect/Zanzarah_ITA.pdf"}]}],se={malware_analysis:Pe,unpacking:xe,drm:Ge};function ge(r,e,t){const a=r.slice();return a[1]=e[t],a}function pe(r,e,t){const a=r.slice();return a[4]=e[t],a}function _e(r){let e,t,a,u='<tr class="text-center uppercase text-sm bg-base-200"><th>Title</th> <th>Download</th></tr>',i,l,n=ne(r[0]),s=[];for(let d=0;d<n.length;d+=1)s[d]=be(ge(r,n,d));return{c(){e=p("div"),t=p("table"),a=p("thead"),a.innerHTML=u,i=V(),l=p("tbody");for(let d=0;d<s.length;d+=1)s[d].c();this.h()},l(d){e=_(d,"DIV",{class:!0});var g=w(e);t=_(g,"TABLE",{class:!0});var o=w(t);a=_(o,"THEAD",{"data-svelte-h":!0}),Ee(a)!=="svelte-qjsgnz"&&(a.innerHTML=u),i=M(o),l=_(o,"TBODY",{});var v=w(l);for(let b=0;b<s.length;b+=1)s[b].l(v);v.forEach(m),o.forEach(m),g.forEach(m),this.h()},h(){c(t,"class","table table-sm"),c(e,"class","overflow-x-auto my-2.5 py-8")},m(d,g){G(d,e,g),h(e,t),h(t,a),h(t,i),h(t,l);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(l,null)},p(d,g){if(g&1){n=ne(d[0]);let o;for(o=0;o<n.length;o+=1){const v=ge(d,n,o);s[o]?s[o].p(v,g):(s[o]=be(v),s[o].c(),s[o].m(l,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(d){d&&m(e),we(s,d)}}}function ve(r){let e,t,a,u,i,l,n;return{c(){e=p("div"),t=p("a"),a=p("img"),n=V(),this.h()},l(s){e=_(s,"DIV",{class:!0});var d=w(e);t=_(d,"A",{href:!0,target:!0});var g=w(t);a=_(g,"IMG",{src:!0,alt:!0}),g.forEach(m),n=M(d),d.forEach(m),this.h()},h(){q(a.src,u="/resources/icons/flags/"+r[4].language+".png")||c(a,"src",u),c(a,"alt",i=r[4].language),c(t,"href",l=r[4].url),c(t,"target","_blank"),c(e,"class","px-4")},m(s,d){G(s,e,d),h(e,t),h(t,a),h(e,n)},p(s,d){d&1&&!q(a.src,u="/resources/icons/flags/"+s[4].language+".png")&&c(a,"src",u),d&1&&i!==(i=s[4].language)&&c(a,"alt",i),d&1&&l!==(l=s[4].url)&&c(t,"href",l)},d(s){s&&m(e)}}}function be(r){let e,t,a=r[1].title+"",u,i,l,n,s,d=ne(r[1].download),g=[];for(let o=0;o<d.length;o+=1)g[o]=ve(pe(r,d,o));return{c(){e=p("tr"),t=p("td"),u=J(a),i=V(),l=p("td"),n=p("div");for(let o=0;o<g.length;o+=1)g[o].c();s=V(),this.h()},l(o){e=_(o,"TR",{class:!0});var v=w(e);t=_(v,"TD",{class:!0});var b=w(t);u=Q(b,a),b.forEach(m),i=M(v),l=_(v,"TD",{});var E=w(l);n=_(E,"DIV",{class:!0});var k=w(n);for(let j=0;j<g.length;j+=1)g[j].l(k);k.forEach(m),E.forEach(m),s=M(v),v.forEach(m),this.h()},h(){c(t,"class","min-w-[14rem] text-center"),c(n,"class","flex justify-center"),c(e,"class","hover:bg-base-300 bg-base-100")},m(o,v){G(o,e,v),h(e,t),h(t,u),h(e,i),h(e,l),h(l,n);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(n,null);h(e,s)},p(o,v){if(v&1&&a!==(a=o[1].title+"")&&X(u,a),v&1){d=ne(o[1].download);let b;for(b=0;b<d.length;b+=1){const E=pe(o,d,b);g[b]?g[b].p(E,v):(g[b]=ve(E),g[b].c(),g[b].m(n,null))}for(;b<g.length;b+=1)g[b].d(1);g.length=d.length}},d(o){o&&m(e),we(g,o)}}}function je(r){let e,t=r[0]!=null&&r[0].length>0&&_e(r);return{c(){t&&t.c(),e=ce()},l(a){t&&t.l(a),e=ce()},m(a,u){t&&t.m(a,u),G(a,e,u)},p(a,[u]){a[0]!=null&&a[0].length>0?t?t.p(a,u):(t=_e(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Y,o:Y,d(a){a&&m(e),t&&t.d(a)}}}function Le(r,e,t){let{documents:a}=e;return r.$$set=u=>{"documents"in u&&t(0,a=u.documents)},[a]}class ze extends ae{constructor(e){super(),le(this,e,Le,je,te,{documents:0})}}function Oe(r){let e,t,a,u,i,l,n,s,d,g,o,v,b,E,k,j,z,P,T,y,D,B,C,R,I,x,K;e=new Ce({props:{title:"Hi and welcome to my website",text:`Well, if you are here you probably already know who I am, but in case you don't:
I'm Luca, a software developer mainly interested in reverse engineering, cyber security and low level stuff.
From time to time I publish some research papers about malware analysis, unpacking etc. and I have a 
YouTube channel where I talk about reverse engineering (in italian).
If you want to know more about what I do, you can tave a look at my Linkedin profile or Github page.
This website serve to keep track of my projects and to host my technical papers.
`,avatarUrl:"https://avatars2.githubusercontent.com/u/3731220",githubRef:"Luca1991",youtubeRef:"@LucaDAmico91",linkedinRef:"luca91",twitterRef:"LucaDAmico91",emailAddr:"contact@lucadamico.dev"}}),a=new oe({props:{parTitle:"Technical Papers"}}),l=new W({props:{cardTitle:"Malware Analysis",cardText:"Technical papers about different malware I’ve reverse engineered and analyzed",cardImage:"/resources/cards/papers/malware.png",cardBtnText:"Open",onBtnClick:r[1]}}),s=new W({props:{cardTitle:"Unpacking",cardText:"Technical papers about some obscure and underground packers",cardImage:"/resources/cards/papers/unpacking.png",cardBtnText:"Open",onBtnClick:r[2]}}),g=new W({props:{cardTitle:"Old-Skool DRMs",cardText:"Technical papers I’ve written while reverse engineering very old DRMs that aren’t used anymore, just for learning purposes.",cardImage:"/resources/cards/papers/cracking.png",cardBtnText:"Open",onBtnClick:r[3]}});function re(f){r[4](f)}let ee={};return r[0]!==void 0&&(ee.documents=r[0]),E=new ze({props:ee}),ke.push(()=>ye(E,"documents",re)),z=new oe({props:{parTitle:"Apps/Tools"}}),y=new W({props:{cardTitle:"DiscCheckEmu",cardText:"Disc checks emulator!",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[5]}}),B=new W({props:{cardTitle:"NDSFactory",cardText:"Unpack & Repack Nintendo DS Roms (.nds)",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[6]}}),R=new W({props:{cardTitle:"MoRePhun",cardText:"Experimental MoPhun Emulator",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[7]}}),x=new W({props:{cardTitle:"Puzzle Bobble Grub2 Theme",cardText:"Puzzle Booble Theme for Grub2",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[8]}}),{c(){S(e.$$.fragment),t=V(),S(a.$$.fragment),u=V(),i=p("div"),S(l.$$.fragment),n=V(),S(s.$$.fragment),d=V(),S(g.$$.fragment),o=V(),v=p("div"),b=p("div"),S(E.$$.fragment),j=V(),S(z.$$.fragment),P=V(),T=p("div"),S(y.$$.fragment),D=V(),S(B.$$.fragment),C=V(),S(R.$$.fragment),I=V(),S(x.$$.fragment),this.h()},l(f){$(e.$$.fragment,f),t=M(f),$(a.$$.fragment,f),u=M(f),i=_(f,"DIV",{class:!0});var A=w(i);$(l.$$.fragment,A),n=M(A),$(s.$$.fragment,A),d=M(A),$(g.$$.fragment,A),A.forEach(m),o=M(f),v=_(f,"DIV",{class:!0,id:!0});var Z=w(v);b=_(Z,"DIV",{class:!0});var L=w(b);$(E.$$.fragment,L),L.forEach(m),Z.forEach(m),j=M(f),$(z.$$.fragment,f),P=M(f),T=_(f,"DIV",{class:!0});var O=w(T);$(y.$$.fragment,O),D=M(O),$(B.$$.fragment,O),C=M(O),$(R.$$.fragment,O),I=M(O),$(x.$$.fragment,O),O.forEach(m),this.h()},h(){c(i,"class","flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto"),c(b,"class","w-full md:w-2/3"),c(v,"class","flex place-content-center"),c(v,"id","docs-table"),c(T,"class","flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto")},m(f,A){U(e,f,A),G(f,t,A),U(a,f,A),G(f,u,A),G(f,i,A),U(l,i,null),h(i,n),U(s,i,null),h(i,d),U(g,i,null),G(f,o,A),G(f,v,A),h(v,b),U(E,b,null),G(f,j,A),U(z,f,A),G(f,P,A),G(f,T,A),U(y,T,null),h(T,D),U(B,T,null),h(T,C),U(R,T,null),h(T,I),U(x,T,null),K=!0},p(f,[A]){const Z={};A&1&&(Z.onBtnClick=f[1]),l.$set(Z);const L={};A&1&&(L.onBtnClick=f[2]),s.$set(L);const O={};A&1&&(O.onBtnClick=f[3]),g.$set(O);const ie={};!k&&A&1&&(k=!0,ie.documents=f[0],Te(()=>k=!1)),E.$set(ie)},i(f){K||(H(e.$$.fragment,f),H(a.$$.fragment,f),H(l.$$.fragment,f),H(s.$$.fragment,f),H(g.$$.fragment,f),H(E.$$.fragment,f),H(z.$$.fragment,f),H(y.$$.fragment,f),H(B.$$.fragment,f),H(R.$$.fragment,f),H(x.$$.fragment,f),K=!0)},o(f){N(e.$$.fragment,f),N(a.$$.fragment,f),N(l.$$.fragment,f),N(s.$$.fragment,f),N(g.$$.fragment,f),N(E.$$.fragment,f),N(z.$$.fragment,f),N(y.$$.fragment,f),N(B.$$.fragment,f),N(R.$$.fragment,f),N(x.$$.fragment,f),K=!1},d(f){f&&(m(t),m(u),m(i),m(o),m(v),m(j),m(P),m(T)),F(e,f),F(a,f),F(l),F(s),F(g),F(E),F(z,f),F(y),F(B),F(R),F(x)}}}function Se(r,e,t){let a;const u=()=>{var v;t(0,a=se.malware_analysis),(v=document.getElementById("docs-table"))==null||v.scrollIntoView({behavior:"smooth",block:"center"})},i=()=>{var v;t(0,a=se.unpacking),(v=document.getElementById("docs-table"))==null||v.scrollIntoView({behavior:"smooth",block:"center"})},l=()=>{var v;t(0,a=se.drm),(v=document.getElementById("docs-table"))==null||v.scrollIntoView({behavior:"smooth",block:"center"})};function n(v){a=v,t(0,a)}return[a,u,i,l,n,()=>{window.open("https://github.com/Luca1991/DiscCheckEmu","_blank")},()=>{window.open("https://github.com/Luca1991/NDSFactory","_blank")},()=>{window.open("https://github.com/Luca1991/MoRePhun","_blank")},()=>{window.open("https://github.com/Luca1991/Puzzle-Bobble-Grub2-Theme","_blank")}]}class He extends ae{constructor(e){super(),le(this,e,Se,Oe,te,{})}}export{He as component};
