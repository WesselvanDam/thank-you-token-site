import{s as j,n as M,x as W}from"../chunks/scheduler.BeaK0CkN.js";import{S as D,i as S,e as $,t as G,c as w,a as k,b as V,d as p,k as d,g as _,h as g,j as z,u as b,s as x,v as I,f as y,w as T,l as E,m as H,x as C,y as K,z as A}from"../chunks/index.DcCVRmqq.js";function O(f){return(f==null?void 0:f.length)!==void 0?f:Array.from(f)}function R(f){let t,e;return{c(){t=$("h1"),e=G(f[0]),this.h()},l(r){t=w(r,"H1",{class:!0});var i=k(t);e=V(i,f[0]),i.forEach(p),this.h()},h(){d(t,"class","text-3xl md:text-5xl py-4")},m(r,i){_(r,t,i),g(t,e)},p(r,[i]){i&1&&z(e,r[0])},i:M,o:M,d(r){r&&p(t)}}}function U(f,t,e){let{text:r}=t;return f.$$set=i=>{"text"in i&&e(0,r=i.text)},[r]}class L extends D{constructor(t){super(),S(this,t,U,R,j,{text:0})}}new TextEncoder;function Y(f,t,e){const r=f.slice();return r[2]=t[e],r}function q(f){let t,e,r,i,l,u=f[2].title+"",a,s,h,c=f[2].description+"",o,m;return{c(){t=$("div"),e=$("img"),i=x(),l=$("h2"),a=G(u),s=x(),h=$("p"),o=G(c),m=x(),this.h()},l(n){t=w(n,"DIV",{class:!0});var v=k(t);e=w(v,"IMG",{src:!0,alt:!0,class:!0}),i=y(v),l=w(v,"H2",{class:!0});var P=k(l);a=V(P,u),P.forEach(p),s=y(v),h=w(v,"P",{class:!0});var N=k(h);o=V(N,c),N.forEach(p),m=y(v),v.forEach(p),this.h()},h(){W(e.src,r=f[2].image)||d(e,"src",r),d(e,"alt",f[2].title),d(e,"class","bg-slate-200 w-full rounded-t-2xl min-h-48"),d(l,"class","text-lg sm:text-xl md:text-2xl px-4"),d(h,"class","text-center px-4"),d(t,"class","flex flex-col items-center border-2 border-"+f[2].color+" rounded-2xl")},m(n,v){_(n,t,v),g(t,e),g(t,i),g(t,l),g(l,a),g(t,s),g(t,h),g(h,o),g(t,m)},p:M,d(n){n&&p(t)}}}function B(f){let t,e,r,i,l;e=new L({props:{text:"How it works"}});let u=O(f[0]),a=[];for(let s=0;s<u.length;s+=1)a[s]=q(Y(f,u,s));return{c(){t=$("section"),b(e.$$.fragment),r=x(),i=$("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){t=w(s,"SECTION",{class:!0});var h=k(t);I(e.$$.fragment,h),r=y(h),i=w(h,"DIV",{class:!0});var c=k(i);for(let o=0;o<a.length;o+=1)a[o].l(c);c.forEach(p),h.forEach(p),this.h()},h(){d(i,"class","grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 px-4"),d(t,"class","py-8")},m(s,h){_(s,t,h),T(e,t,null),g(t,r),g(t,i);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(i,null);l=!0},p(s,[h]){if(h&1){u=O(s[0]);let c;for(c=0;c<u.length;c+=1){const o=Y(s,u,c);a[c]?a[c].p(o,h):(a[c]=q(o),a[c].c(),a[c].m(i,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=u.length}},i(s){l||(E(e.$$.fragment,s),l=!0)},o(s){H(e.$$.fragment,s),l=!1},d(s){s&&p(t),C(e),K(a,s)}}}function F(f){class t{constructor(i,l,u,a){this.title=i,this.description=l,this.image=u,this.color=a}}return[[new t("Have a meaningful interaction","A dinner date, a beach day with a friend, or just about anything you're grateful for","img/step1.png","tyt_red"),new t("Give/receive a thank you token","Surprise or get surprised with a Thank You Token for/from the other","img/step2.png","tyt_blue"),new t("Record the token in our app","Write down the story behind this token in our web app","img/step3.png","tyt_green"),new t("Keep tokens at home & regift","Put received tokens on display, ready to be given away again at a later event!","img/step4.png","tyt_yellow")]]}class J extends D{constructor(t){super(),S(this,t,F,B,j,{})}}function Q(f){let t,e='<img src="img/header.jpg" alt="Header" class="w-full"/> <div class="absolute inset-0 bg-gradient-to-r from-35% via-75% via-white/75 from-transparent to-white"></div> <div class="absolute top-1/2 w-2/5 -translate-y-1/2 right-0 -translate-x-1/4"><img src="img/logo-colour.png" alt="Logo" class="w-full"/></div>';return{c(){t=$("div"),t.innerHTML=e,this.h()},l(r){t=w(r,"DIV",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-1ugcdze"&&(t.innerHTML=e),this.h()},h(){d(t,"class","relative")},m(r,i){_(r,t,i)},p:M,i:M,o:M,d(r){r&&p(t)}}}class X extends D{constructor(t){super(),S(this,t,null,Q,j,{})}}function Z(f){let t,e,r,i,l=`<p>A philosophical conversation over a fancy dinner, a comforting pep-talk
      during a walk in the park, or a long overdue reunion with high school friends:
      life is full of <strong>memorable moments</strong> with people that matter to you. Such
      interactions can easily be taken for granted, while it may be difficult or
      daunting to <strong>show your gratitude</strong> with words or gifts.
      <br/><br/>
      The <strong>Thank You Token</strong> is a concept I came up with to thank the important people in my life. I don&#39;t like
      gift-giving, as gifts often are unwanted and because of its environmental
      impact, and at the same time I find it difficult to convert my grateful
      feelings into words. The idea of a simple token of appreciation, holding
      <strong>little intrinsic value</strong> but all the <strong>more sentimental value</strong>, helps me in
      thanking close friends and family.</p> <p class="text-end">— Wessel</p>`,u;return e=new L({props:{text:"A gesture of gratitude"}}),{c(){t=$("section"),b(e.$$.fragment),r=x(),i=$("div"),i.innerHTML=l,this.h()},l(a){t=w(a,"SECTION",{class:!0});var s=k(t);I(e.$$.fragment,s),r=y(s),i=w(s,"DIV",{class:!0,"data-svelte-h":!0}),A(i)!=="svelte-1ha5xic"&&(i.innerHTML=l),s.forEach(p),this.h()},h(){d(i,"class","text-justify max-w-screen-md"),d(t,"class","py-8 px-4 bg-tyt_blue text-white w-full flex flex-col items-center")},m(a,s){_(a,t,s),T(e,t,null),g(t,r),g(t,i),u=!0},p:M,i(a){u||(E(e.$$.fragment,a),u=!0)},o(a){H(e.$$.fragment,a),u=!1},d(a){a&&p(t),C(e)}}}class tt extends D{constructor(t){super(),S(this,t,null,Z,j,{})}}function et(f){let t,e,r,i,l,u,a,s,h=`A Thank You Token <strong>could be anything</strong>, but it typically has
      little intrinsic value and is preferably decorated (for example by painting)
      with our logo to make it stand out. Ideally,
      <strong>you shouldn&#39;t need to buy something</strong>
      to make a token. Simple wooden blocks, smooth rocks, and even bottle caps work,
      as do DIY crafts such as origami and paper mache. Ultimately, the purpose of the
      token is the <strong>sentimental value</strong> it carries - the look should not
      matter too much.`,c;return u=new L({props:{text:"What makes a token?"}}),{c(){t=$("section"),e=$("img"),i=x(),l=$("div"),b(u.$$.fragment),a=x(),s=$("p"),s.innerHTML=h,this.h()},l(o){t=w(o,"SECTION",{class:!0});var m=k(t);e=w(m,"IMG",{src:!0,alt:!0,class:!0}),i=y(m),l=w(m,"DIV",{class:!0});var n=k(l);I(u.$$.fragment,n),a=y(n),s=w(n,"P",{"data-svelte-h":!0}),A(s)!=="svelte-1hqoxhi"&&(s.innerHTML=h),n.forEach(p),m.forEach(p),this.h()},h(){W(e.src,r="stone_token.jpg")||d(e,"src",r),d(e,"alt","An example of a token"),d(e,"class","bg-slate-100 m-4 sm:w-1/3"),d(l,"class","sm:w-1/2 text-start p-4"),d(t,"class","flex flex-col sm:flex-row bg-tyt_red py-8 text-white w-screen justify-center")},m(o,m){_(o,t,m),g(t,e),g(t,i),g(t,l),T(u,l,null),g(l,a),g(l,s),c=!0},p:M,i(o){c||(E(u.$$.fragment,o),c=!0)},o(o){H(u.$$.fragment,o),c=!1},d(o){o&&p(t),C(u)}}}class nt extends D{constructor(t){super(),S(this,t,null,et,j,{})}}function st(f){let t,e,r,i,l,u=`There&#39;s no need to wrap the token in gift wrapping: just give it along
    with some kind words and our Thank You Token <strong>flyer</strong>, which
    helps
    <strong>explain the concept</strong>
    to those unfamiliar with it and contains a link to the
    <strong>web app</strong>.`,a,s,h,c;return r=new L({props:{text:"How to give one"}}),{c(){t=$("section"),e=$("div"),b(r.$$.fragment),i=x(),l=$("p"),l.innerHTML=u,a=x(),s=$("img"),this.h()},l(o){t=w(o,"SECTION",{class:!0});var m=k(t);e=w(m,"DIV",{class:!0});var n=k(e);I(r.$$.fragment,n),i=y(n),l=w(n,"P",{"data-svelte-h":!0}),A(l)!=="svelte-j04b1d"&&(l.innerHTML=u),n.forEach(p),a=y(m),s=w(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(p),this.h()},h(){d(e,"class","sm:w-1/2 text-start p-4"),W(s.src,h="flyter.jpg")||d(s,"src",h),d(s,"alt","Click for our flyer!"),d(s,"class","bg-slate-100 m-4 sm:w-1/3"),d(t,"class","flex flex-col sm:flex-row py-8 w-screen justify-center")},m(o,m){_(o,t,m),g(t,e),T(r,e,null),g(e,i),g(e,l),g(t,a),g(t,s),c=!0},p:M,i(o){c||(E(r.$$.fragment,o),c=!0)},o(o){H(r.$$.fragment,o),c=!1},d(o){o&&p(t),C(r)}}}class rt extends D{constructor(t){super(),S(this,t,null,st,j,{})}}function at(f){let t,e,r,i,l,u,a,s,h=`In the app, you can write down the story behind each received/given token\r
      along with a picture, which is stored securely in your own Google Drive.`,c;return u=new L({props:{text:"How does the web app work?"}}),{c(){t=$("section"),e=$("img"),i=x(),l=$("div"),b(u.$$.fragment),a=x(),s=$("p"),s.textContent=h,this.h()},l(o){t=w(o,"SECTION",{class:!0});var m=k(t);e=w(m,"IMG",{src:!0,alt:!0,class:!0}),i=y(m),l=w(m,"DIV",{class:!0});var n=k(l);I(u.$$.fragment,n),a=y(n),s=w(n,"P",{"data-svelte-h":!0}),A(s)!=="svelte-x0872n"&&(s.textContent=h),n.forEach(p),m.forEach(p),this.h()},h(){W(e.src,r="stone_token.jpg")||d(e,"src",r),d(e,"alt","An example of a token"),d(e,"class","bg-slate-100 m-4 sm:w-1/3"),d(l,"class","sm:w-1/2 text-start p-4"),d(t,"class","flex flex-col sm:flex-row bg-tyt_green py-8 text-white w-screen justify-center")},m(o,m){_(o,t,m),g(t,e),g(t,i),g(t,l),T(u,l,null),g(l,a),g(l,s),c=!0},p:M,i(o){c||(E(u.$$.fragment,o),c=!0)},o(o){H(u.$$.fragment,o),c=!1},d(o){o&&p(t),C(u)}}}class it extends D{constructor(t){super(),S(this,t,null,at,j,{})}}function lt(f){let t,e,r,i,l,u,a,s,h,c,o,m;return t=new X({}),r=new tt({}),l=new J({}),a=new nt({}),h=new rt({}),o=new it({}),{c(){b(t.$$.fragment),e=x(),b(r.$$.fragment),i=x(),b(l.$$.fragment),u=x(),b(a.$$.fragment),s=x(),b(h.$$.fragment),c=x(),b(o.$$.fragment)},l(n){I(t.$$.fragment,n),e=y(n),I(r.$$.fragment,n),i=y(n),I(l.$$.fragment,n),u=y(n),I(a.$$.fragment,n),s=y(n),I(h.$$.fragment,n),c=y(n),I(o.$$.fragment,n)},m(n,v){T(t,n,v),_(n,e,v),T(r,n,v),_(n,i,v),T(l,n,v),_(n,u,v),T(a,n,v),_(n,s,v),T(h,n,v),_(n,c,v),T(o,n,v),m=!0},p:M,i(n){m||(E(t.$$.fragment,n),E(r.$$.fragment,n),E(l.$$.fragment,n),E(a.$$.fragment,n),E(h.$$.fragment,n),E(o.$$.fragment,n),m=!0)},o(n){H(t.$$.fragment,n),H(r.$$.fragment,n),H(l.$$.fragment,n),H(a.$$.fragment,n),H(h.$$.fragment,n),H(o.$$.fragment,n),m=!1},d(n){n&&(p(e),p(i),p(u),p(s),p(c)),C(t,n),C(r,n),C(l,n),C(a,n),C(h,n),C(o,n)}}}class ut extends D{constructor(t){super(),S(this,t,null,lt,j,{})}}export{ut as component};
