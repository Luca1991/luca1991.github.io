import{s as ne,n as J,x as F,b as Ee,y as ye}from"../chunks/scheduler.vowxHrQJ.js";import{S as se,i as ie,e as p,t as X,s as V,c as v,a as w,b as Z,d as m,f as M,o as c,g as $,h,j as ee,z as De,k as de,y as Be,A as Ie,B as Re,u as L,v as O,w as S,n as z,l as U,x as H}from"../chunks/index.dSfRJGUR.js";function oe(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Ae(r){let e,t,a,u,o;return{c(){e=p("div"),t=p("h1"),a=X(r[0]),u=V(),o=p("hr"),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=w(e);t=v(n,"H1",{class:!0});var i=w(t);a=Z(i,r[0]),i.forEach(m),u=M(n),o=v(n,"HR",{}),n.forEach(m),this.h()},h(){c(t,"class","font-amsterdam_graffiti text-5xl"),c(e,"class","p-8")},m(l,n){$(l,e,n),h(e,t),h(t,a),h(e,u),h(e,o)},p(l,[n]){n&1&&ee(a,l[0])},i:J,o:J,d(l){l&&m(e)}}}function Ve(r,e,t){let{parTitle:a=""}=e;return r.$$set=u=>{"parTitle"in u&&t(0,a=u.parTitle)},[a]}class fe extends se{constructor(e){super(),ie(this,e,Ve,Ae,ne,{parTitle:0})}}function Me(r){let e,t,a,u,o,l,n,i,d,g,f,_,b,E,T,P,G;return{c(){e=p("div"),t=p("figure"),a=p("img"),o=V(),l=p("div"),n=p("h2"),i=X(r[0]),d=V(),g=p("p"),f=X(r[1]),_=V(),b=p("div"),E=p("button"),T=X(r[3]),this.h()},l(j){e=v(j,"DIV",{class:!0});var I=w(e);t=v(I,"FIGURE",{});var y=w(t);a=v(y,"IMG",{src:!0,alt:!0}),y.forEach(m),o=M(I),l=v(I,"DIV",{class:!0});var D=w(l);n=v(D,"H2",{class:!0});var B=w(n);i=Z(B,r[0]),B.forEach(m),d=M(D),g=v(D,"P",{});var x=w(g);f=Z(x,r[1]),x.forEach(m),_=M(D),b=v(D,"DIV",{class:!0});var R=w(b);E=v(R,"BUTTON",{class:!0});var k=w(E);T=Z(k,r[3]),k.forEach(m),R.forEach(m),D.forEach(m),I.forEach(m),this.h()},h(){F(a.src,u=r[2])||c(a,"src",u),c(a,"alt",r[0]),c(n,"class","card-title"),c(E,"class","btn btn-primary"),c(b,"class","card-actions justify-end"),c(l,"class","card-body"),c(e,"class","card w-96 bg-base-100 shadow-xl image-full")},m(j,I){$(j,e,I),h(e,t),h(t,a),h(e,o),h(e,l),h(l,n),h(n,i),h(l,d),h(l,g),h(g,f),h(l,_),h(l,b),h(b,E),h(E,T),P||(G=De(E,"click",r[4]),P=!0)},p(j,[I]){I&4&&!F(a.src,u=j[2])&&c(a,"src",u),I&1&&c(a,"alt",j[0]),I&1&&ee(i,j[0]),I&2&&ee(f,j[1]),I&8&&ee(T,j[3])},i:J,o:J,d(j){j&&m(e),P=!1,G()}}}function xe(r,e,t){let{cardTitle:a=""}=e,{cardText:u=""}=e,{cardImage:o=""}=e,{cardBtnText:l=""}=e,{onBtnClick:n=()=>{}}=e;const i=()=>{n()};return r.$$set=d=>{"cardTitle"in d&&t(0,a=d.cardTitle),"cardText"in d&&t(1,u=d.cardText),"cardImage"in d&&t(2,o=d.cardImage),"cardBtnText"in d&&t(3,l=d.cardBtnText),"onBtnClick"in d&&t(5,n=d.onBtnClick)},[a,u,o,l,i,n]}class Q extends se{constructor(e){super(),ie(this,e,xe,Me,ne,{cardTitle:0,cardText:1,cardImage:2,cardBtnText:3,onBtnClick:5})}}function me(r){let e,t,a,u,o;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=w(e);t=v(n,"A",{rel:!0,href:!0});var i=w(t);a=v(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),F(a.src,u="resources/icons/github.png")||c(a,"src",u),c(a,"alt","github"),c(t,"rel","external"),c(t,"href",o="https://github.com/"+r[3]),c(e,"class","px-2")},m(l,n){$(l,e,n),h(e,t),h(t,a)},p(l,n){n&8&&o!==(o="https://github.com/"+l[3])&&c(t,"href",o)},d(l){l&&m(e)}}}function he(r){let e,t,a,u,o;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=w(e);t=v(n,"A",{rel:!0,href:!0});var i=w(t);a=v(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),F(a.src,u="resources/icons/youtube.png")||c(a,"src",u),c(a,"alt","youtube"),c(t,"rel","external"),c(t,"href",o="https://www.youtube.com/"+r[4]),c(e,"class","px-2")},m(l,n){$(l,e,n),h(e,t),h(t,a)},p(l,n){n&16&&o!==(o="https://www.youtube.com/"+l[4])&&c(t,"href",o)},d(l){l&&m(e)}}}function ge(r){let e,t,a,u,o;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=w(e);t=v(n,"A",{rel:!0,href:!0});var i=w(t);a=v(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),F(a.src,u="resources/icons/linkedin.png")||c(a,"src",u),c(a,"alt","linkedin"),c(t,"rel","external"),c(t,"href",o="https://www.linkedin.com/in/"+r[5]),c(e,"class","px-2")},m(l,n){$(l,e,n),h(e,t),h(t,a)},p(l,n){n&32&&o!==(o="https://www.linkedin.com/in/"+l[5])&&c(t,"href",o)},d(l){l&&m(e)}}}function pe(r){let e,t,a,u,o;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=w(e);t=v(n,"A",{rel:!0,href:!0});var i=w(t);a=v(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),F(a.src,u="resources/icons/twitter.png")||c(a,"src",u),c(a,"alt","twitter"),c(t,"rel","external"),c(t,"href",o="https://twitter.com/"+r[6]),c(e,"class","px-2")},m(l,n){$(l,e,n),h(e,t),h(t,a)},p(l,n){n&64&&o!==(o="https://twitter.com/"+l[6])&&c(t,"href",o)},d(l){l&&m(e)}}}function ve(r){let e,t,a,u,o;return{c(){e=p("div"),t=p("a"),a=p("img"),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=w(e);t=v(n,"A",{rel:!0,href:!0});var i=w(t);a=v(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(m),n.forEach(m),this.h()},h(){c(a,"class","object-cover w-16"),F(a.src,u="resources/icons/email.png")||c(a,"src",u),c(a,"alt","email"),c(t,"rel","external"),c(t,"href",o="mailto:"+r[7]),c(e,"class","px-2")},m(l,n){$(l,e,n),h(e,t),h(t,a)},p(l,n){n&128&&o!==(o="mailto:"+l[7])&&c(t,"href",o)},d(l){l&&m(e)}}}function $e(r){let e,t,a,u,o,l,n,i,d,g,f,_,b,E,T,P,G,j,I,y=r[3].length>0&&me(r),D=r[4].length>0&&he(r),B=r[5].length>0&&ge(r),x=r[6].length>0&&pe(r),R=r[7].length>0&&ve(r);return{c(){e=p("div"),t=p("div"),a=p("div"),u=p("div"),o=p("img"),n=V(),i=p("div"),d=p("h1"),g=X(r[0]),f=V(),_=p("p"),b=X(r[1]),E=V(),T=p("div"),y&&y.c(),P=V(),D&&D.c(),G=V(),B&&B.c(),j=V(),x&&x.c(),I=V(),R&&R.c(),this.h()},l(k){e=v(k,"DIV",{class:!0});var C=w(e);t=v(C,"DIV",{class:!0});var Y=w(t);a=v(Y,"DIV",{class:!0});var q=w(a);u=v(q,"DIV",{class:!0});var K=w(u);o=v(K,"IMG",{src:!0,class:!0,alt:!0}),K.forEach(m),q.forEach(m),n=M(Y),i=v(Y,"DIV",{});var N=w(i);d=v(N,"H1",{class:!0});var ce=w(d);g=Z(ce,r[0]),ce.forEach(m),f=M(N),_=v(N,"P",{class:!0});var te=w(_);b=Z(te,r[1]),te.forEach(m),E=M(N),T=v(N,"DIV",{class:!0});var s=w(T);y&&y.l(s),P=M(s),D&&D.l(s),G=M(s),B&&B.l(s),j=M(s),x&&x.l(s),I=M(s),R&&R.l(s),s.forEach(m),N.forEach(m),Y.forEach(m),C.forEach(m),this.h()},h(){F(o.src,l=r[2])||c(o,"src",l),c(o,"class","max-w-sm rounded-lg shadow-2xl"),c(o,"alt","avatar"),c(u,"class","rounded-full object-cover w-64"),c(a,"class","avatar"),c(d,"class","text-5xl font-bold"),c(_,"class","whitespace-pre-line py-6"),c(T,"class","flex justify-center"),c(t,"class","hero-content flex-col lg:flex-row-reverse"),c(e,"class","hero bg-base-200")},m(k,C){$(k,e,C),h(e,t),h(t,a),h(a,u),h(u,o),h(t,n),h(t,i),h(i,d),h(d,g),h(i,f),h(i,_),h(_,b),h(i,E),h(i,T),y&&y.m(T,null),h(T,P),D&&D.m(T,null),h(T,G),B&&B.m(T,null),h(T,j),x&&x.m(T,null),h(T,I),R&&R.m(T,null)},p(k,[C]){C&4&&!F(o.src,l=k[2])&&c(o,"src",l),C&1&&ee(g,k[0]),C&2&&ee(b,k[1]),k[3].length>0?y?y.p(k,C):(y=me(k),y.c(),y.m(T,P)):y&&(y.d(1),y=null),k[4].length>0?D?D.p(k,C):(D=he(k),D.c(),D.m(T,G)):D&&(D.d(1),D=null),k[5].length>0?B?B.p(k,C):(B=ge(k),B.c(),B.m(T,j)):B&&(B.d(1),B=null),k[6].length>0?x?x.p(k,C):(x=pe(k),x.c(),x.m(T,I)):x&&(x.d(1),x=null),k[7].length>0?R?R.p(k,C):(R=ve(k),R.c(),R.m(T,null)):R&&(R.d(1),R=null)},i:J,o:J,d(k){k&&m(e),y&&y.d(),D&&D.d(),B&&B.d(),x&&x.d(),R&&R.d()}}}function je(r,e,t){let{title:a=""}=e,{text:u=""}=e,{avatarUrl:o=""}=e,{githubRef:l=""}=e,{youtubeRef:n=""}=e,{linkedinRef:i=""}=e,{twitterRef:d=""}=e,{emailAddr:g=""}=e;return r.$$set=f=>{"title"in f&&t(0,a=f.title),"text"in f&&t(1,u=f.text),"avatarUrl"in f&&t(2,o=f.avatarUrl),"githubRef"in f&&t(3,l=f.githubRef),"youtubeRef"in f&&t(4,n=f.youtubeRef),"linkedinRef"in f&&t(5,i=f.linkedinRef),"twitterRef"in f&&t(6,d=f.twitterRef),"emailAddr"in f&&t(7,g=f.emailAddr)},[a,u,o,l,n,i,d,g]}class Ce extends se{constructor(e){super(),ie(this,e,je,$e,ne,{title:0,text:1,avatarUrl:2,githubRef:3,youtubeRef:4,linkedinRef:5,twitterRef:6,emailAddr:7})}}const Pe=[{title:"Disk Knight (worm.diskknight/knight)",download:[{language:"en",url:"/papers/malware_analysis/DiskKnight.pdf"},{language:"ita",url:"/papers/malware_analysis/DiskKnight_ITA.pdf"}]}],Ge=[{title:"Pepsi 2.0",download:[{language:"en",url:"/papers/packers/Pepsi_2.0.pdf"},{language:"ita",url:"/papers/packers/Pepsi_2.0_ITA.pdf"}]}],Le=[{title:"Safedisc 1.06-1.11 (Midtown Madness)",download:[{language:"en",url:"/papers/drms/safedisc/MidtownMadness.pdf"},{language:"ita",url:"/papers/drms/safedisc/MidtownMadness_ITA.pdf"}]},{title:"Laserlock (Evolva)",download:[{language:"en",url:"/papers/drms/laserlock/Evolva.pdf"},{language:"ita",url:"/papers/drms/laserlock/Evolva_ITA.pdf"}]},{title:"SecuROM new 4.48.00.0004 (Arabian Nights)",download:[{language:"en",url:"/papers/drms/securom/ArabianNights.pdf"},{language:"ita",url:"/papers/drms/securom/ArabianNights_ITA.pdf"}]},{title:"SecuROM new 3.06.00.0003 (South Park Rally)",download:[{language:"ita",url:"/papers/drms/securom/SouthParkRally_ITA.pdf"}]}],ue={malware_analysis:Pe,unpacking:Ge,drm:Le};function _e(r,e,t){const a=r.slice();return a[1]=e[t],a}function be(r,e,t){const a=r.slice();return a[4]=e[t],a}function we(r){let e,t,a,u='<tr class="text-center uppercase text-sm bg-base-200"><th>Title</th> <th>Download</th></tr>',o,l,n=oe(r[0]),i=[];for(let d=0;d<n.length;d+=1)i[d]=Te(_e(r,n,d));return{c(){e=p("div"),t=p("table"),a=p("thead"),a.innerHTML=u,o=V(),l=p("tbody");for(let d=0;d<i.length;d+=1)i[d].c();this.h()},l(d){e=v(d,"DIV",{class:!0});var g=w(e);t=v(g,"TABLE",{class:!0});var f=w(t);a=v(f,"THEAD",{"data-svelte-h":!0}),Be(a)!=="svelte-qjsgnz"&&(a.innerHTML=u),o=M(f),l=v(f,"TBODY",{});var _=w(l);for(let b=0;b<i.length;b+=1)i[b].l(_);_.forEach(m),f.forEach(m),g.forEach(m),this.h()},h(){c(t,"class","table table-sm"),c(e,"class","overflow-x-auto my-2.5 py-8")},m(d,g){$(d,e,g),h(e,t),h(t,a),h(t,o),h(t,l);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(l,null)},p(d,g){if(g&1){n=oe(d[0]);let f;for(f=0;f<n.length;f+=1){const _=_e(d,n,f);i[f]?i[f].p(_,g):(i[f]=Te(_),i[f].c(),i[f].m(l,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=n.length}},d(d){d&&m(e),Ie(i,d)}}}function ke(r){let e,t,a,u,o,l,n;return{c(){e=p("div"),t=p("a"),a=p("img"),n=V(),this.h()},l(i){e=v(i,"DIV",{class:!0});var d=w(e);t=v(d,"A",{href:!0,target:!0});var g=w(t);a=v(g,"IMG",{src:!0,alt:!0}),g.forEach(m),n=M(d),d.forEach(m),this.h()},h(){F(a.src,u="/resources/icons/flags/"+r[4].language+".png")||c(a,"src",u),c(a,"alt",o=r[4].language),c(t,"href",l=r[4].url),c(t,"target","_blank"),c(e,"class","px-4")},m(i,d){$(i,e,d),h(e,t),h(t,a),h(e,n)},p(i,d){d&1&&!F(a.src,u="/resources/icons/flags/"+i[4].language+".png")&&c(a,"src",u),d&1&&o!==(o=i[4].language)&&c(a,"alt",o),d&1&&l!==(l=i[4].url)&&c(t,"href",l)},d(i){i&&m(e)}}}function Te(r){let e,t,a=r[1].title+"",u,o,l,n,i,d=oe(r[1].download),g=[];for(let f=0;f<d.length;f+=1)g[f]=ke(be(r,d,f));return{c(){e=p("tr"),t=p("td"),u=X(a),o=V(),l=p("td"),n=p("div");for(let f=0;f<g.length;f+=1)g[f].c();i=V(),this.h()},l(f){e=v(f,"TR",{class:!0});var _=w(e);t=v(_,"TD",{class:!0});var b=w(t);u=Z(b,a),b.forEach(m),o=M(_),l=v(_,"TD",{});var E=w(l);n=v(E,"DIV",{class:!0});var T=w(n);for(let P=0;P<g.length;P+=1)g[P].l(T);T.forEach(m),E.forEach(m),i=M(_),_.forEach(m),this.h()},h(){c(t,"class","min-w-[14rem] text-center"),c(n,"class","flex justify-center"),c(e,"class","hover:bg-base-300 bg-base-100")},m(f,_){$(f,e,_),h(e,t),h(t,u),h(e,o),h(e,l),h(l,n);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(n,null);h(e,i)},p(f,_){if(_&1&&a!==(a=f[1].title+"")&&ee(u,a),_&1){d=oe(f[1].download);let b;for(b=0;b<d.length;b+=1){const E=be(f,d,b);g[b]?g[b].p(E,_):(g[b]=ke(E),g[b].c(),g[b].m(n,null))}for(;b<g.length;b+=1)g[b].d(1);g.length=d.length}},d(f){f&&m(e),Ie(g,f)}}}function Oe(r){let e,t=r[0]!=null&&r[0].length>0&&we(r);return{c(){t&&t.c(),e=de()},l(a){t&&t.l(a),e=de()},m(a,u){t&&t.m(a,u),$(a,e,u)},p(a,[u]){a[0]!=null&&a[0].length>0?t?t.p(a,u):(t=we(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:J,o:J,d(a){a&&m(e),t&&t.d(a)}}}function Se(r,e,t){let{documents:a}=e;return r.$$set=u=>{"documents"in u&&t(0,a=u.documents)},[a]}class ze extends se{constructor(e){super(),ie(this,e,Se,Oe,ne,{documents:0})}}function Ue(r){let e,t,a,u,o,l,n,i,d,g,f,_,b,E,T,P,G,j,I,y,D,B,x,R,k,C,Y,q,K,N;e=new Ce({props:{title:"Hi and welcome to my website",text:`Well, if you are here you probably already know who I am, but in case you don't:
I'm Luca, a software developer mainly interested in reverse engineering, cyber security and low level stuff.
From time to time I publish some research papers about malware analysis, unpacking etc. and I have a 
YouTube channel where I talk about reverse engineering (in italian).
If you want to know more about what I do, you can tave a look at my Linkedin profile or Github page.
This website serve to keep track of my projects and to host my technical papers.
`,avatarUrl:"https://avatars2.githubusercontent.com/u/3731220",githubRef:"Luca1991",youtubeRef:"@LucaDAmico91",linkedinRef:"luca91",twitterRef:"LucaDAmico91",emailAddr:"contact@lucadamico.dev"}}),a=new fe({props:{parTitle:"Technical Papers"}}),l=new Q({props:{cardTitle:"Malware Analysis",cardText:"Technical papers about different malware I’ve reverse engineered and analyzed",cardImage:"/resources/cards/papers/malware.png",cardBtnText:"Open",onBtnClick:r[1]}}),i=new Q({props:{cardTitle:"Unpacking",cardText:"Technical papers about some obscure and underground packers",cardImage:"/resources/cards/papers/unpacking.png",cardBtnText:"Open",onBtnClick:r[2]}}),g=new Q({props:{cardTitle:"Old-Skool DRMs",cardText:"Technical papers I’ve written while reverse engineering very old DRMs that aren’t used anymore, just for learning purposes.",cardImage:"/resources/cards/papers/cracking.png",cardBtnText:"Open",onBtnClick:r[3]}});function ce(s){r[4](s)}let te={};return r[0]!==void 0&&(te.documents=r[0]),E=new ze({props:te}),Ee.push(()=>Re(E,"documents",ce)),G=new fe({props:{parTitle:"Apps/Tools"}}),y=new Q({props:{cardTitle:"NDSFactory",cardText:"Unpack & Repack Nintendo DS Roms (.nds)",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[5]}}),B=new Q({props:{cardTitle:"MoRePhun",cardText:"Experimental MoPhun Emulator",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[6]}}),R=new Q({props:{cardTitle:"Puzzle Bobble Grub2 Theme",cardText:"Puzzle Booble Theme for Grub2",cardImage:"/resources/icons/github.png",cardBtnText:"Open repo",onBtnClick:r[7]}}),C=new fe({props:{parTitle:"Projects"}}),K=new Q({props:{cardTitle:"ReverseIT",cardText:"Open source initiative with the aim of becoming the de facto space for reverse engineering and cybersecurity in Italy!",cardImage:"/resources/cards/projects/reverseit.png",cardBtnText:"Visit website",onBtnClick:r[8]}}),{c(){L(e.$$.fragment),t=V(),L(a.$$.fragment),u=V(),o=p("div"),L(l.$$.fragment),n=V(),L(i.$$.fragment),d=V(),L(g.$$.fragment),f=V(),_=p("div"),b=p("div"),L(E.$$.fragment),P=V(),L(G.$$.fragment),j=V(),I=p("div"),L(y.$$.fragment),D=V(),L(B.$$.fragment),x=V(),L(R.$$.fragment),k=V(),L(C.$$.fragment),Y=V(),q=p("div"),L(K.$$.fragment),this.h()},l(s){O(e.$$.fragment,s),t=M(s),O(a.$$.fragment,s),u=M(s),o=v(s,"DIV",{class:!0});var A=w(o);O(l.$$.fragment,A),n=M(A),O(i.$$.fragment,A),d=M(A),O(g.$$.fragment,A),A.forEach(m),f=M(s),_=v(s,"DIV",{class:!0,id:!0});var ae=w(_);b=v(ae,"DIV",{class:!0});var le=w(b);O(E.$$.fragment,le),le.forEach(m),ae.forEach(m),P=M(s),O(G.$$.fragment,s),j=M(s),I=v(s,"DIV",{class:!0});var W=w(I);O(y.$$.fragment,W),D=M(W),O(B.$$.fragment,W),x=M(W),O(R.$$.fragment,W),W.forEach(m),k=M(s),O(C.$$.fragment,s),Y=M(s),q=v(s,"DIV",{class:!0});var re=w(q);O(K.$$.fragment,re),re.forEach(m),this.h()},h(){c(o,"class","flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto"),c(b,"class","w-full md:w-2/3"),c(_,"class","flex place-content-center"),c(_,"id","docs-table"),c(I,"class","flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto"),c(q,"class","flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto")},m(s,A){S(e,s,A),$(s,t,A),S(a,s,A),$(s,u,A),$(s,o,A),S(l,o,null),h(o,n),S(i,o,null),h(o,d),S(g,o,null),$(s,f,A),$(s,_,A),h(_,b),S(E,b,null),$(s,P,A),S(G,s,A),$(s,j,A),$(s,I,A),S(y,I,null),h(I,D),S(B,I,null),h(I,x),S(R,I,null),$(s,k,A),S(C,s,A),$(s,Y,A),$(s,q,A),S(K,q,null),N=!0},p(s,[A]){const ae={};A&1&&(ae.onBtnClick=s[1]),l.$set(ae);const le={};A&1&&(le.onBtnClick=s[2]),i.$set(le);const W={};A&1&&(W.onBtnClick=s[3]),g.$set(W);const re={};!T&&A&1&&(T=!0,re.documents=s[0],ye(()=>T=!1)),E.$set(re)},i(s){N||(z(e.$$.fragment,s),z(a.$$.fragment,s),z(l.$$.fragment,s),z(i.$$.fragment,s),z(g.$$.fragment,s),z(E.$$.fragment,s),z(G.$$.fragment,s),z(y.$$.fragment,s),z(B.$$.fragment,s),z(R.$$.fragment,s),z(C.$$.fragment,s),z(K.$$.fragment,s),N=!0)},o(s){U(e.$$.fragment,s),U(a.$$.fragment,s),U(l.$$.fragment,s),U(i.$$.fragment,s),U(g.$$.fragment,s),U(E.$$.fragment,s),U(G.$$.fragment,s),U(y.$$.fragment,s),U(B.$$.fragment,s),U(R.$$.fragment,s),U(C.$$.fragment,s),U(K.$$.fragment,s),N=!1},d(s){s&&(m(t),m(u),m(o),m(f),m(_),m(P),m(j),m(I),m(k),m(Y),m(q)),H(e,s),H(a,s),H(l),H(i),H(g),H(E),H(G,s),H(y),H(B),H(R),H(C,s),H(K)}}}function He(r,e,t){let a;const u=()=>{var _;t(0,a=ue.malware_analysis),(_=document.getElementById("docs-table"))==null||_.scrollIntoView({behavior:"smooth",block:"center"})},o=()=>{var _;t(0,a=ue.unpacking),(_=document.getElementById("docs-table"))==null||_.scrollIntoView({behavior:"smooth",block:"center"})},l=()=>{var _;t(0,a=ue.drm),(_=document.getElementById("docs-table"))==null||_.scrollIntoView({behavior:"smooth",block:"center"})};function n(_){a=_,t(0,a)}return[a,u,o,l,n,()=>{window.open("https://github.com/Luca1991/NDSFactory","_blank")},()=>{window.open("https://github.com/Luca1991/MoRePhun","_blank")},()=>{window.open("https://github.com/Luca1991/Puzzle-Bobble-Grub2-Theme","_blank")},()=>{window.open("https://reverseit.space","_blank")}]}class qe extends se{constructor(e){super(),ie(this,e,He,Ue,ne,{})}}export{qe as component};
