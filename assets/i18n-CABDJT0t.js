const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CqP4eCeb.js","assets/index-uKTaGHi9.css"])))=>i.map(i=>d[i]);
import{e as Ln,w as tt,i as wn,r as An,s as vn,c as Ee,d as mt,h as qt,g as In,F as Jt,a as Nn,o as Pn,b as Rn,f as xn,T as Mn,j as On,_ as Dn}from"./index-CqP4eCeb.js";function Fn(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const Pe=typeof window<"u",se=(e,t=!1)=>t?Symbol.for(e):Symbol(e),Un=(e,t,n)=>zn({l:e,k:t,s:n}),zn=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),B=e=>typeof e=="number"&&isFinite(e),Wn=e=>dt(e)==="[object Date]",Re=e=>dt(e)==="[object RegExp]",Me=e=>R(e)&&Object.keys(e).length===0,K=Object.assign,Vn=Object.create,D=(e=null)=>Vn(e);function St(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Tt(e){return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hn(e){return e=e.replace(/(\w+)\s*=\s*"([^"]*)"/g,(r,l,i)=>`${l}="${Tt(i)}"`),e=e.replace(/(\w+)\s*=\s*'([^']*)'/g,(r,l,i)=>`${l}='${Tt(i)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e)&&(e=e.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(r=>{e=e.replace(r,"$1javascript&#58;")}),e}const Gn=Object.prototype.hasOwnProperty;function Y(e,t){return Gn.call(e,t)}const G=Array.isArray,U=e=>typeof e=="function",L=e=>typeof e=="string",z=e=>typeof e=="boolean",x=e=>e!==null&&typeof e=="object",Bn=e=>x(e)&&U(e.then)&&U(e.catch),Qt=Object.prototype.toString,dt=e=>Qt.call(e),R=e=>dt(e)==="[object Object]",jn=e=>e==null?"":G(e)||R(e)&&e.toString===Qt?JSON.stringify(e,null,2):String(e);function ft(e,t=""){return e.reduce((n,r,l)=>l===0?n+r:n+t+r,"")}const Ae=e=>!x(e)||G(e);function Ne(e,t){if(Ae(e)||Ae(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:r,des:l}=n.pop();Object.keys(r).forEach(i=>{i!=="__proto__"&&(x(r[i])&&!x(l[i])&&(l[i]=Array.isArray(r[i])?[]:D()),Ae(l[i])||Ae(r[i])?l[i]=r[i]:n.push({src:r[i],des:l[i]}))})}}function Kn(e,t,n){return{line:e,column:t,offset:n}}function nt(e,t,n){return{start:e,end:t}}const M={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},$n=17;function Oe(e,t,n={}){const{domain:r,messages:l,args:i}=n,o=e,c=new SyntaxError(String(o));return c.code=e,t&&(c.location=t),c.domain=r,c}function Zn(e){throw e}const Q=" ",Xn="\r",$=`
`,Yn="\u2028",qn="\u2029";function Jn(e){const t=e;let n=0,r=1,l=1,i=0;const o=E=>t[E]===Xn&&t[E+1]===$,c=E=>t[E]===$,d=E=>t[E]===qn,f=E=>t[E]===Yn,y=E=>o(E)||c(E)||d(E)||f(E),T=()=>n,_=()=>r,I=()=>l,N=()=>i,A=E=>o(E)||d(E)||f(E)?$:t[E],v=()=>A(n),u=()=>A(n+i);function p(){return i=0,y(n)&&(r++,l=0),o(n)&&n++,n++,l++,t[n]}function S(){return o(n+i)&&i++,i++,t[n+i]}function g(){n=0,r=1,l=1,i=0}function C(E=0){i=E}function k(){const E=n+i;for(;E!==n;)p();i=0}return{index:T,line:_,column:I,peekOffset:N,charAt:A,currentChar:v,currentPeek:u,next:p,peek:S,reset:g,resetPeek:C,skipToPeek:k}}const re=void 0,Qn=".",kt="'",er="tokenizer";function tr(e,t={}){const n=t.location!==!1,r=Jn(e),l=()=>r.index(),i=()=>Kn(r.line(),r.column(),r.index()),o=i(),c=l(),d={currentType:13,offset:c,startLoc:o,endLoc:o,lastType:13,lastOffset:c,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},f=()=>d,{onError:y}=t;function T(a,s,h,...w){const F=f();if(s.column+=h,s.offset+=h,y){const P=n?nt(F.startLoc,s):null,m=Oe(a,P,{domain:er,args:w});y(m)}}function _(a,s,h){a.endLoc=i(),a.currentType=s;const w={type:s};return n&&(w.loc=nt(a.startLoc,a.endLoc)),h!=null&&(w.value=h),w}const I=a=>_(a,13);function N(a,s){return a.currentChar()===s?(a.next(),s):(T(M.EXPECTED_TOKEN,i(),0,s),"")}function A(a){let s="";for(;a.currentPeek()===Q||a.currentPeek()===$;)s+=a.currentPeek(),a.peek();return s}function v(a){const s=A(a);return a.skipToPeek(),s}function u(a){if(a===re)return!1;const s=a.charCodeAt(0);return s>=97&&s<=122||s>=65&&s<=90||s===95}function p(a){if(a===re)return!1;const s=a.charCodeAt(0);return s>=48&&s<=57}function S(a,s){const{currentType:h}=s;if(h!==2)return!1;A(a);const w=u(a.currentPeek());return a.resetPeek(),w}function g(a,s){const{currentType:h}=s;if(h!==2)return!1;A(a);const w=a.currentPeek()==="-"?a.peek():a.currentPeek(),F=p(w);return a.resetPeek(),F}function C(a,s){const{currentType:h}=s;if(h!==2)return!1;A(a);const w=a.currentPeek()===kt;return a.resetPeek(),w}function k(a,s){const{currentType:h}=s;if(h!==7)return!1;A(a);const w=a.currentPeek()===".";return a.resetPeek(),w}function E(a,s){const{currentType:h}=s;if(h!==8)return!1;A(a);const w=u(a.currentPeek());return a.resetPeek(),w}function W(a,s){const{currentType:h}=s;if(!(h===7||h===11))return!1;A(a);const w=a.currentPeek()===":";return a.resetPeek(),w}function V(a,s){const{currentType:h}=s;if(h!==9)return!1;const w=()=>{const P=a.currentPeek();return P==="{"?u(a.peek()):P==="@"||P==="|"||P===":"||P==="."||P===Q||!P?!1:P===$?(a.peek(),w()):J(a,!1)},F=w();return a.resetPeek(),F}function Z(a){A(a);const s=a.currentPeek()==="|";return a.resetPeek(),s}function J(a,s=!0){const h=(F=!1,P="")=>{const m=a.currentPeek();return m==="{"||m==="@"||!m?F:m==="|"?!(P===Q||P===$):m===Q?(a.peek(),h(!0,Q)):m===$?(a.peek(),h(!0,$)):!0},w=h();return s&&a.resetPeek(),w}function j(a,s){const h=a.currentChar();return h===re?re:s(h)?(a.next(),h):null}function Fe(a){const s=a.charCodeAt(0);return s>=97&&s<=122||s>=65&&s<=90||s>=48&&s<=57||s===95||s===36}function Ue(a){return j(a,Fe)}function ze(a){const s=a.charCodeAt(0);return s>=97&&s<=122||s>=65&&s<=90||s>=48&&s<=57||s===95||s===36||s===45}function We(a){return j(a,ze)}function Ve(a){const s=a.charCodeAt(0);return s>=48&&s<=57}function He(a){return j(a,Ve)}function ne(a){const s=a.charCodeAt(0);return s>=48&&s<=57||s>=65&&s<=70||s>=97&&s<=102}function Te(a){return j(a,ne)}function ke(a){let s="",h="";for(;s=He(a);)h+=s;return h}function Ge(a){let s="";for(;;){const h=a.currentChar();if(h==="{"||h==="}"||h==="@"||h==="|"||!h)break;if(h===Q||h===$)if(J(a))s+=h,a.next();else{if(Z(a))break;s+=h,a.next()}else s+=h,a.next()}return s}function Be(a){v(a);let s="",h="";for(;s=We(a);)h+=s;const w=a.currentChar();if(w&&w!=="}"&&w!==re&&w!==Q&&w!==$&&w!=="　"){const F=Le(a);return T(M.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,h+F),h+F}return a.currentChar()===re&&T(M.UNTERMINATED_CLOSING_BRACE,i(),0),h}function je(a){v(a);let s="";return a.currentChar()==="-"?(a.next(),s+=`-${ke(a)}`):s+=ke(a),a.currentChar()===re&&T(M.UNTERMINATED_CLOSING_BRACE,i(),0),s}function yt(a){return a!==kt&&a!==$}function Ke(a){v(a),N(a,"'");let s="",h="";for(;s=j(a,yt);)s==="\\"?h+=$e(a):h+=s;const w=a.currentChar();return w===$||w===re?(T(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),w===$&&(a.next(),N(a,"'")),h):(N(a,"'"),h)}function $e(a){const s=a.currentChar();switch(s){case"\\":case"'":return a.next(),`\\${s}`;case"u":return Ce(a,s,4);case"U":return Ce(a,s,6);default:return T(M.UNKNOWN_ESCAPE_SEQUENCE,i(),0,s),""}}function Ce(a,s,h){N(a,s);let w="";for(let F=0;F<h;F++){const P=Te(a);if(!P){T(M.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${s}${w}${a.currentChar()}`);break}w+=P}return`\\${s}${w}`}function Ze(a){return a!=="{"&&a!=="}"&&a!==Q&&a!==$}function Le(a){v(a);let s="",h="";for(;s=j(a,Ze);)h+=s;return h}function Xe(a){let s="",h="";for(;s=Ue(a);)h+=s;return h}function Ye(a){const s=h=>{const w=a.currentChar();return w==="{"||w==="@"||w==="|"||w==="("||w===")"||!w||w===Q?h:(h+=w,a.next(),s(h))};return s("")}function pe(a){v(a);const s=N(a,"|");return v(a),s}function me(a,s){let h=null;switch(a.currentChar()){case"{":return s.braceNest>=1&&T(M.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),a.next(),h=_(s,2,"{"),v(a),s.braceNest++,h;case"}":return s.braceNest>0&&s.currentType===2&&T(M.EMPTY_PLACEHOLDER,i(),0),a.next(),h=_(s,3,"}"),s.braceNest--,s.braceNest>0&&v(a),s.inLinked&&s.braceNest===0&&(s.inLinked=!1),h;case"@":return s.braceNest>0&&T(M.UNTERMINATED_CLOSING_BRACE,i(),0),h=de(a,s)||I(s),s.braceNest=0,h;default:{let F=!0,P=!0,m=!0;if(Z(a))return s.braceNest>0&&T(M.UNTERMINATED_CLOSING_BRACE,i(),0),h=_(s,1,pe(a)),s.braceNest=0,s.inLinked=!1,h;if(s.braceNest>0&&(s.currentType===4||s.currentType===5||s.currentType===6))return T(M.UNTERMINATED_CLOSING_BRACE,i(),0),s.braceNest=0,be(a,s);if(F=S(a,s))return h=_(s,4,Be(a)),v(a),h;if(P=g(a,s))return h=_(s,5,je(a)),v(a),h;if(m=C(a,s))return h=_(s,6,Ke(a)),v(a),h;if(!F&&!P&&!m)return h=_(s,12,Le(a)),T(M.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,h.value),v(a),h;break}}return h}function de(a,s){const{currentType:h}=s;let w=null;const F=a.currentChar();switch((h===7||h===8||h===11||h===9)&&(F===$||F===Q)&&T(M.INVALID_LINKED_FORMAT,i(),0),F){case"@":return a.next(),w=_(s,7,"@"),s.inLinked=!0,w;case".":return v(a),a.next(),_(s,8,".");case":":return v(a),a.next(),_(s,9,":");default:return Z(a)?(w=_(s,1,pe(a)),s.braceNest=0,s.inLinked=!1,w):k(a,s)||W(a,s)?(v(a),de(a,s)):E(a,s)?(v(a),_(s,11,Xe(a))):V(a,s)?(v(a),F==="{"?me(a,s)||w:_(s,10,Ye(a))):(h===7&&T(M.INVALID_LINKED_FORMAT,i(),0),s.braceNest=0,s.inLinked=!1,be(a,s))}}function be(a,s){let h={type:13};if(s.braceNest>0)return me(a,s)||I(s);if(s.inLinked)return de(a,s)||I(s);switch(a.currentChar()){case"{":return me(a,s)||I(s);case"}":return T(M.UNBALANCED_CLOSING_BRACE,i(),0),a.next(),_(s,3,"}");case"@":return de(a,s)||I(s);default:{if(Z(a))return h=_(s,1,pe(a)),s.braceNest=0,s.inLinked=!1,h;if(J(a))return _(s,0,Ge(a));break}}return h}function qe(){const{currentType:a,offset:s,startLoc:h,endLoc:w}=d;return d.lastType=a,d.lastOffset=s,d.lastStartLoc=h,d.lastEndLoc=w,d.offset=l(),d.startLoc=i(),r.currentChar()===re?_(d,13):be(r,d)}return{nextToken:qe,currentOffset:l,currentPosition:i,context:f}}const nr="parser",rr=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function ir(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(t||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function ar(e={}){const t=e.location!==!1,{onError:n}=e;function r(u,p,S,g,...C){const k=u.currentPosition();if(k.offset+=g,k.column+=g,n){const E=t?nt(S,k):null,W=Oe(p,E,{domain:nr,args:C});n(W)}}function l(u,p,S){const g={type:u};return t&&(g.start=p,g.end=p,g.loc={start:S,end:S}),g}function i(u,p,S,g){t&&(u.end=p,u.loc&&(u.loc.end=S))}function o(u,p){const S=u.context(),g=l(3,S.offset,S.startLoc);return g.value=p,i(g,u.currentOffset(),u.currentPosition()),g}function c(u,p){const S=u.context(),{lastOffset:g,lastStartLoc:C}=S,k=l(5,g,C);return k.index=parseInt(p,10),u.nextToken(),i(k,u.currentOffset(),u.currentPosition()),k}function d(u,p){const S=u.context(),{lastOffset:g,lastStartLoc:C}=S,k=l(4,g,C);return k.key=p,u.nextToken(),i(k,u.currentOffset(),u.currentPosition()),k}function f(u,p){const S=u.context(),{lastOffset:g,lastStartLoc:C}=S,k=l(9,g,C);return k.value=p.replace(rr,ir),u.nextToken(),i(k,u.currentOffset(),u.currentPosition()),k}function y(u){const p=u.nextToken(),S=u.context(),{lastOffset:g,lastStartLoc:C}=S,k=l(8,g,C);return p.type!==11?(r(u,M.UNEXPECTED_EMPTY_LINKED_MODIFIER,S.lastStartLoc,0),k.value="",i(k,g,C),{nextConsumeToken:p,node:k}):(p.value==null&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,ee(p)),k.value=p.value||"",i(k,u.currentOffset(),u.currentPosition()),{node:k})}function T(u,p){const S=u.context(),g=l(7,S.offset,S.startLoc);return g.value=p,i(g,u.currentOffset(),u.currentPosition()),g}function _(u){const p=u.context(),S=l(6,p.offset,p.startLoc);let g=u.nextToken();if(g.type===8){const C=y(u);S.modifier=C.node,g=C.nextConsumeToken||u.nextToken()}switch(g.type!==9&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,p.lastStartLoc,0,ee(g)),g=u.nextToken(),g.type===2&&(g=u.nextToken()),g.type){case 10:g.value==null&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,p.lastStartLoc,0,ee(g)),S.key=T(u,g.value||"");break;case 4:g.value==null&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,p.lastStartLoc,0,ee(g)),S.key=d(u,g.value||"");break;case 5:g.value==null&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,p.lastStartLoc,0,ee(g)),S.key=c(u,g.value||"");break;case 6:g.value==null&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,p.lastStartLoc,0,ee(g)),S.key=f(u,g.value||"");break;default:{r(u,M.UNEXPECTED_EMPTY_LINKED_KEY,p.lastStartLoc,0);const C=u.context(),k=l(7,C.offset,C.startLoc);return k.value="",i(k,C.offset,C.startLoc),S.key=k,i(S,C.offset,C.startLoc),{nextConsumeToken:g,node:S}}}return i(S,u.currentOffset(),u.currentPosition()),{node:S}}function I(u){const p=u.context(),S=p.currentType===1?u.currentOffset():p.offset,g=p.currentType===1?p.endLoc:p.startLoc,C=l(2,S,g);C.items=[];let k=null;do{const V=k||u.nextToken();switch(k=null,V.type){case 0:V.value==null&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,p.lastStartLoc,0,ee(V)),C.items.push(o(u,V.value||""));break;case 5:V.value==null&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,p.lastStartLoc,0,ee(V)),C.items.push(c(u,V.value||""));break;case 4:V.value==null&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,p.lastStartLoc,0,ee(V)),C.items.push(d(u,V.value||""));break;case 6:V.value==null&&r(u,M.UNEXPECTED_LEXICAL_ANALYSIS,p.lastStartLoc,0,ee(V)),C.items.push(f(u,V.value||""));break;case 7:{const Z=_(u);C.items.push(Z.node),k=Z.nextConsumeToken||null;break}}}while(p.currentType!==13&&p.currentType!==1);const E=p.currentType===1?p.lastOffset:u.currentOffset(),W=p.currentType===1?p.lastEndLoc:u.currentPosition();return i(C,E,W),C}function N(u,p,S,g){const C=u.context();let k=g.items.length===0;const E=l(1,p,S);E.cases=[],E.cases.push(g);do{const W=I(u);k||(k=W.items.length===0),E.cases.push(W)}while(C.currentType!==13);return k&&r(u,M.MUST_HAVE_MESSAGES_IN_PLURAL,S,0),i(E,u.currentOffset(),u.currentPosition()),E}function A(u){const p=u.context(),{offset:S,startLoc:g}=p,C=I(u);return p.currentType===13?C:N(u,S,g,C)}function v(u){const p=tr(u,K({},e)),S=p.context(),g=l(0,S.offset,S.startLoc);return t&&g.loc&&(g.loc.source=u),g.body=A(p),e.onCacheKey&&(g.cacheKey=e.onCacheKey(u)),S.currentType!==13&&r(p,M.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,u[S.offset]||""),i(g,p.currentOffset(),p.currentPosition()),g}return{parse:v}}function ee(e){if(e.type===13)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function lr(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Ct(e,t){for(let n=0;n<e.length;n++)ht(e[n],t)}function ht(e,t){switch(e.type){case 1:Ct(e.cases,t),t.helper("plural");break;case 2:Ct(e.items,t);break;case 6:{ht(e.key,t),t.helper("linked"),t.helper("type");break}case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function sr(e,t={}){const n=lr(e);n.helper("normalize"),e.body&&ht(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function or(e){const t=e.body;return t.type===2?Lt(t):t.cases.forEach(n=>Lt(n)),e}function Lt(e){if(e.items.length===1){const t=e.items[0];(t.type===3||t.type===9)&&(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;t.push(r.value)}if(t.length===e.items.length){e.static=ft(t);for(let n=0;n<e.items.length;n++){const r=e.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function he(e){switch(e.t=e.type,e.type){case 0:{const t=e;he(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let r=0;r<n.length;r++)he(n[r]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let r=0;r<n.length;r++)he(n[r]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;he(t.key),t.k=t.key,delete t.key,t.modifier&&(he(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}}delete e.type}function ur(e,t){const{filename:n,breakLineCode:r,needIndent:l}=t,i=t.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:l,indentLevel:0};i&&e.loc&&(o.source=e.loc.source);const c=()=>o;function d(A,v){o.code+=A}function f(A,v=!0){const u=v?r:"";d(l?u+"  ".repeat(A):u)}function y(A=!0){const v=++o.indentLevel;A&&f(v)}function T(A=!0){const v=--o.indentLevel;A&&f(v)}function _(){f(o.indentLevel)}return{context:c,push:d,indent:y,deindent:T,newline:_,helper:A=>`_${A}`,needIndent:()=>o.needIndent}}function cr(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),ge(e,t.key),t.modifier?(e.push(", "),ge(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function mr(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const l=t.items.length;for(let i=0;i<l&&(ge(e,t.items[i]),i!==l-1);i++)e.push(", ");e.deindent(r()),e.push("])")}function dr(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const l=t.cases.length;for(let i=0;i<l&&(ge(e,t.cases[i]),i!==l-1);i++)e.push(", ");e.deindent(r()),e.push("])")}}function fr(e,t){t.body?ge(e,t.body):e.push("null")}function ge(e,t){const{helper:n}=e;switch(t.type){case 0:fr(e,t);break;case 1:dr(e,t);break;case 2:mr(e,t);break;case 6:cr(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const hr=(e,t={})=>{const n=L(t.mode)?t.mode:"normal",r=L(t.filename)?t.filename:"message.intl";t.sourceMap;const l=t.breakLineCode!=null?t.breakLineCode:n==="arrow"?";":`
`,i=t.needIndent?t.needIndent:n!=="arrow",o=e.helpers||[],c=ur(e,{filename:r,breakLineCode:l,needIndent:i});c.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),c.indent(i),o.length>0&&(c.push(`const { ${ft(o.map(y=>`${y}: _${y}`),", ")} } = ctx`),c.newline()),c.push("return "),ge(c,e),c.deindent(i),c.push("}"),delete e.helpers;const{code:d,map:f}=c.context();return{ast:e,code:d,map:f?f.toJSON():void 0}};function gr(e,t={}){const n=K({},t),r=!!n.jit,l=!!n.minify,i=n.optimize==null?!0:n.optimize,c=ar(n).parse(e);return r?(i&&or(c),l&&he(c),{ast:c,code:""}):(sr(c,n),hr(c,n))}function te(e){return x(e)&&gt(e)===0&&(Y(e,"b")||Y(e,"body"))}const en=["b","body"];function pr(e){return oe(e,en)}const tn=["c","cases"];function br(e){return oe(e,tn,[])}const nn=["s","static"];function Er(e){return oe(e,nn)}const rn=["i","items"];function _r(e){return oe(e,rn,[])}const an=["t","type"];function gt(e){return oe(e,an)}const ln=["v","value"];function ve(e,t){const n=oe(e,ln);if(n!=null)return n;throw ye(t)}const sn=["m","modifier"];function yr(e){return oe(e,sn)}const on=["k","key"];function Sr(e){const t=oe(e,on);if(t)return t;throw ye(6)}function oe(e,t,n){for(let r=0;r<t.length;r++){const l=t[r];if(Y(e,l)&&e[l]!=null)return e[l]}return n}const un=[...en,...tn,...nn,...rn,...on,...sn,...ln,...an];function ye(e){return new Error(`unhandled node type: ${e}`)}function Je(e){return n=>Tr(n,e)}function Tr(e,t){const n=pr(t);if(n==null)throw ye(0);if(gt(n)===1){const i=br(n);return e.plural(i.reduce((o,c)=>[...o,wt(e,c)],[]))}else return wt(e,n)}function wt(e,t){const n=Er(t);if(n!=null)return e.type==="text"?n:e.normalize([n]);{const r=_r(t).reduce((l,i)=>[...l,rt(e,i)],[]);return e.normalize(r)}}function rt(e,t){const n=gt(t);switch(n){case 3:return ve(t,n);case 9:return ve(t,n);case 4:{const r=t;if(Y(r,"k")&&r.k)return e.interpolate(e.named(r.k));if(Y(r,"key")&&r.key)return e.interpolate(e.named(r.key));throw ye(n)}case 5:{const r=t;if(Y(r,"i")&&B(r.i))return e.interpolate(e.list(r.i));if(Y(r,"index")&&B(r.index))return e.interpolate(e.list(r.index));throw ye(n)}case 6:{const r=t,l=yr(r),i=Sr(r);return e.linked(rt(e,i),l?rt(e,l):void 0,e.type)}case 7:return ve(t,n);case 8:return ve(t,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const kr=e=>e;let Ie=D();function Cr(e,t={}){let n=!1;const r=t.onError||Zn;return t.onError=l=>{n=!0,r(l)},{...gr(e,t),detectError:n}}function Lr(e,t){if(L(e)){z(t.warnHtmlMessage)&&t.warnHtmlMessage;const r=(t.onCacheKey||kr)(e),l=Ie[r];if(l)return l;const{ast:i,detectError:o}=Cr(e,{...t,location:!1,jit:!0}),c=Je(i);return o?c:Ie[r]=c}else{const n=e.cacheKey;if(n){const r=Ie[n];return r||(Ie[n]=Je(e))}else return Je(e)}}const ie={INVALID_ARGUMENT:$n,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},wr=24;function ae(e){return Oe(e,null,void 0)}function pt(e,t){return t.locale!=null?At(t.locale):At(e.locale)}let Qe;function At(e){if(L(e))return e;if(U(e)){if(e.resolvedOnce&&Qe!=null)return Qe;if(e.constructor.name==="Function"){const t=e();if(Bn(t))throw ae(ie.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Qe=t}else throw ae(ie.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw ae(ie.NOT_SUPPORT_LOCALE_TYPE)}function Ar(e,t,n){return[...new Set([n,...G(t)?t:x(t)?Object.keys(t):L(t)?[t]:[n]])]}function cn(e,t,n){const r=L(n)?n:xe,l=e;l.__localeChainCache||(l.__localeChainCache=new Map);let i=l.__localeChainCache.get(r);if(!i){i=[];let o=[n];for(;G(o);)o=vt(i,o,t);const c=G(t)||!R(t)?t:t.default?t.default:null;o=L(c)?[c]:c,G(o)&&vt(i,o,!1),l.__localeChainCache.set(r,i)}return i}function vt(e,t,n){let r=!0;for(let l=0;l<t.length&&z(r);l++){const i=t[l];L(i)&&(r=vr(e,t[l],n))}return r}function vr(e,t,n){let r;const l=t.split("-");do{const i=l.join("-");r=Ir(e,i,n),l.splice(-1,1)}while(l.length&&r===!0);return r}function Ir(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const l=t.replace(/!/g,"");e.push(l),(G(n)||R(n))&&n[l]&&(r=n[l])}return r}const ue=[];ue[0]={w:[0],i:[3,0],"[":[4],o:[7]};ue[1]={w:[1],".":[2],"[":[4],o:[7]};ue[2]={w:[2],i:[3,0],0:[3,0]};ue[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ue[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ue[5]={"'":[4,0],o:8,l:[5,0]};ue[6]={'"':[4,0],o:8,l:[6,0]};const Nr=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Pr(e){return Nr.test(e)}function Rr(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function xr(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Mr(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Pr(t)?Rr(t):"*"+t}function Or(e){const t=[];let n=-1,r=0,l=0,i,o,c,d,f,y,T;const _=[];_[0]=()=>{o===void 0?o=c:o+=c},_[1]=()=>{o!==void 0&&(t.push(o),o=void 0)},_[2]=()=>{_[0](),l++},_[3]=()=>{if(l>0)l--,r=4,_[0]();else{if(l=0,o===void 0||(o=Mr(o),o===!1))return!1;_[1]()}};function I(){const N=e[n+1];if(r===5&&N==="'"||r===6&&N==='"')return n++,c="\\"+N,_[0](),!0}for(;r!==null;)if(n++,i=e[n],!(i==="\\"&&I())){if(d=xr(i),T=ue[r],f=T[d]||T.l||8,f===8||(r=f[0],f[1]!==void 0&&(y=_[f[1]],y&&(c=i,y()===!1))))return;if(r===7)return t}}const It=new Map;function Dr(e,t){return x(e)?e[t]:null}function Fr(e,t){if(!x(e))return null;let n=It.get(t);if(n||(n=Or(t),n&&It.set(t,n)),!n)return null;const r=n.length;let l=e,i=0;for(;i<r;){const o=n[i];if(un.includes(o)&&te(l))return null;const c=l[o];if(c===void 0||U(l))return null;l=c,i++}return l}const Ur="11.2.8",De=-1,xe="en-US",Nt="",Pt=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function zr(){return{upper:(e,t)=>t==="text"&&L(e)?e.toUpperCase():t==="vnode"&&x(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&L(e)?e.toLowerCase():t==="vnode"&&x(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&L(e)?Pt(e):t==="vnode"&&x(e)&&"__v_isVNode"in e?Pt(e.children):e}}let mn;function Wr(e){mn=e}let dn;function Vr(e){dn=e}let fn;function Hr(e){fn=e}let hn=null;const Rt=e=>{hn=e},Gr=()=>hn;let xt=0;function Br(e={}){const t=U(e.onWarn)?e.onWarn:Fn,n=L(e.version)?e.version:Ur,r=L(e.locale)||U(e.locale)?e.locale:xe,l=U(r)?xe:r,i=G(e.fallbackLocale)||R(e.fallbackLocale)||L(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:l,o=R(e.messages)?e.messages:et(l),c=R(e.datetimeFormats)?e.datetimeFormats:et(l),d=R(e.numberFormats)?e.numberFormats:et(l),f=K(D(),e.modifiers,zr()),y=e.pluralRules||D(),T=U(e.missing)?e.missing:null,_=z(e.missingWarn)||Re(e.missingWarn)?e.missingWarn:!0,I=z(e.fallbackWarn)||Re(e.fallbackWarn)?e.fallbackWarn:!0,N=!!e.fallbackFormat,A=!!e.unresolving,v=U(e.postTranslation)?e.postTranslation:null,u=R(e.processor)?e.processor:null,p=z(e.warnHtmlMessage)?e.warnHtmlMessage:!0,S=!!e.escapeParameter,g=U(e.messageCompiler)?e.messageCompiler:mn,C=U(e.messageResolver)?e.messageResolver:dn||Dr,k=U(e.localeFallbacker)?e.localeFallbacker:fn||Ar,E=x(e.fallbackContext)?e.fallbackContext:void 0,W=e,V=x(W.__datetimeFormatters)?W.__datetimeFormatters:new Map,Z=x(W.__numberFormatters)?W.__numberFormatters:new Map,J=x(W.__meta)?W.__meta:{};xt++;const j={version:n,cid:xt,locale:r,fallbackLocale:i,messages:o,modifiers:f,pluralRules:y,missing:T,missingWarn:_,fallbackWarn:I,fallbackFormat:N,unresolving:A,postTranslation:v,processor:u,warnHtmlMessage:p,escapeParameter:S,messageCompiler:g,messageResolver:C,localeFallbacker:k,fallbackContext:E,onWarn:t,__meta:J};return j.datetimeFormats=c,j.numberFormats=d,j.__datetimeFormatters=V,j.__numberFormatters=Z,j}const et=e=>({[e]:D()});function bt(e,t,n,r,l){const{missing:i,onWarn:o}=e;if(i!==null){const c=i(e,n,t,l);return L(c)?c:t}else return t}function _e(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function jr(e,t){return e===t?!1:e.split("-")[0]===t.split("-")[0]}function Kr(e,t){const n=t.indexOf(e);if(n===-1)return!1;for(let r=n+1;r<t.length;r++)if(jr(e,t[r]))return!0;return!1}function Mt(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:l,onWarn:i,localeFallbacker:o}=e,{__datetimeFormatters:c}=e,[d,f,y,T]=it(...t),_=z(y.missingWarn)?y.missingWarn:e.missingWarn;z(y.fallbackWarn)?y.fallbackWarn:e.fallbackWarn;const I=!!y.part,N=pt(e,y),A=o(e,l,N);if(!L(d)||d==="")return new Intl.DateTimeFormat(N,T).format(f);let v={},u,p=null;const S="datetime format";for(let k=0;k<A.length&&(u=A[k],v=n[u]||{},p=v[d],!R(p));k++)bt(e,d,u,_,S);if(!R(p)||!L(u))return r?De:d;let g=`${u}__${d}`;Me(T)||(g=`${g}__${JSON.stringify(T)}`);let C=c.get(g);return C||(C=new Intl.DateTimeFormat(u,K({},p,T)),c.set(g,C)),I?C.formatToParts(f):C.format(f)}const gn=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function it(...e){const[t,n,r,l]=e,i=D();let o=D(),c;if(L(t)){const d=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!d)throw ae(ie.INVALID_ISO_DATE_ARGUMENT);const f=d[3]?d[3].trim().startsWith("T")?`${d[1].trim()}${d[3].trim()}`:`${d[1].trim()}T${d[3].trim()}`:d[1].trim();c=new Date(f);try{c.toISOString()}catch{throw ae(ie.INVALID_ISO_DATE_ARGUMENT)}}else if(Wn(t)){if(isNaN(t.getTime()))throw ae(ie.INVALID_DATE_ARGUMENT);c=t}else if(B(t))c=t;else throw ae(ie.INVALID_ARGUMENT);return L(n)?i.key=n:R(n)&&Object.keys(n).forEach(d=>{gn.includes(d)?o[d]=n[d]:i[d]=n[d]}),L(r)?i.locale=r:R(r)&&(o=r),R(l)&&(o=l),[i.key||"",c,i,o]}function Ot(e,t,n){const r=e;for(const l in n){const i=`${t}__${l}`;r.__datetimeFormatters.has(i)&&r.__datetimeFormatters.delete(i)}}function Dt(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:l,onWarn:i,localeFallbacker:o}=e,{__numberFormatters:c}=e,[d,f,y,T]=at(...t),_=z(y.missingWarn)?y.missingWarn:e.missingWarn;z(y.fallbackWarn)?y.fallbackWarn:e.fallbackWarn;const I=!!y.part,N=pt(e,y),A=o(e,l,N);if(!L(d)||d==="")return new Intl.NumberFormat(N,T).format(f);let v={},u,p=null;const S="number format";for(let k=0;k<A.length&&(u=A[k],v=n[u]||{},p=v[d],!R(p));k++)bt(e,d,u,_,S);if(!R(p)||!L(u))return r?De:d;let g=`${u}__${d}`;Me(T)||(g=`${g}__${JSON.stringify(T)}`);let C=c.get(g);return C||(C=new Intl.NumberFormat(u,K({},p,T)),c.set(g,C)),I?C.formatToParts(f):C.format(f)}const pn=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function at(...e){const[t,n,r,l]=e,i=D();let o=D();if(!B(t))throw ae(ie.INVALID_ARGUMENT);const c=t;return L(n)?i.key=n:R(n)&&Object.keys(n).forEach(d=>{pn.includes(d)?o[d]=n[d]:i[d]=n[d]}),L(r)?i.locale=r:R(r)&&(o=r),R(l)&&(o=l),[i.key||"",c,i,o]}function Ft(e,t,n){const r=e;for(const l in n){const i=`${t}__${l}`;r.__numberFormatters.has(i)&&r.__numberFormatters.delete(i)}}const $r=e=>e,Zr=e=>"",Xr="text",Yr=e=>e.length===0?"":ft(e),qr=jn;function Ut(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Jr(e){const t=B(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(B(e.named.count)||B(e.named.n))?B(e.named.count)?e.named.count:B(e.named.n)?e.named.n:t:t}function Qr(e,t){t.count||(t.count=e),t.n||(t.n=e)}function ei(e={}){const t=e.locale,n=Jr(e),r=x(e.pluralRules)&&L(t)&&U(e.pluralRules[t])?e.pluralRules[t]:Ut,l=x(e.pluralRules)&&L(t)&&U(e.pluralRules[t])?Ut:void 0,i=u=>u[r(n,u.length,l)],o=e.list||[],c=u=>o[u],d=e.named||D();B(e.pluralIndex)&&Qr(n,d);const f=u=>d[u];function y(u,p){const S=U(e.messages)?e.messages(u,!!p):x(e.messages)?e.messages[u]:!1;return S||(e.parent?e.parent.message(u):Zr)}const T=u=>e.modifiers?e.modifiers[u]:$r,_=R(e.processor)&&U(e.processor.normalize)?e.processor.normalize:Yr,I=R(e.processor)&&U(e.processor.interpolate)?e.processor.interpolate:qr,N=R(e.processor)&&L(e.processor.type)?e.processor.type:Xr,v={list:c,named:f,plural:i,linked:(u,...p)=>{const[S,g]=p;let C="text",k="";p.length===1?x(S)?(k=S.modifier||k,C=S.type||C):L(S)&&(k=S||k):p.length===2&&(L(S)&&(k=S||k),L(g)&&(C=g||C));const E=y(u,!0)(v),W=C==="vnode"&&G(E)&&k?E[0]:E;return k?T(k)(W,C):W},message:y,type:N,interpolate:I,normalize:_,values:K(D(),o,d)};return v}const zt=()=>"",le=e=>U(e);function Wt(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:l,messageCompiler:i,fallbackLocale:o,messages:c}=e,[d,f]=lt(...t),y=z(f.missingWarn)?f.missingWarn:e.missingWarn,T=z(f.fallbackWarn)?f.fallbackWarn:e.fallbackWarn,_=z(f.escapeParameter)?f.escapeParameter:e.escapeParameter,I=!!f.resolvedMessage,N=L(f.default)||z(f.default)?z(f.default)?i?d:()=>d:f.default:n?i?d:()=>d:null,A=n||N!=null&&(L(N)||U(N)),v=pt(e,f);_&&ti(f);let[u,p,S]=I?[d,v,c[v]||D()]:bn(e,d,v,o,T,y),g=u,C=d;if(!I&&!(L(g)||te(g)||le(g))&&A&&(g=N,C=g),!I&&(!(L(g)||te(g)||le(g))||!L(p)))return l?De:d;let k=!1;const E=()=>{k=!0},W=le(g)?g:En(e,d,p,g,C,E);if(k)return g;const V=ii(e,p,S,f),Z=ei(V),J=ni(e,W,Z);let j=r?r(J,d):J;return _&&L(j)&&(j=Hn(j)),j}function ti(e){G(e.list)?e.list=e.list.map(t=>L(t)?St(t):t):x(e.named)&&Object.keys(e.named).forEach(t=>{L(e.named[t])&&(e.named[t]=St(e.named[t]))})}function bn(e,t,n,r,l,i){const{messages:o,onWarn:c,messageResolver:d,localeFallbacker:f}=e,y=f(e,r,n);let T=D(),_,I=null;const N="translate";for(let A=0;A<y.length&&(_=y[A],T=o[_]||D(),(I=d(T,t))===null&&(I=T[t]),!(L(I)||te(I)||le(I)));A++)if(!Kr(_,y)){const v=bt(e,t,_,i,N);v!==t&&(I=v)}return[I,_,T]}function En(e,t,n,r,l,i){const{messageCompiler:o,warnHtmlMessage:c}=e;if(le(r)){const f=r;return f.locale=f.locale||n,f.key=f.key||t,f}if(o==null){const f=(()=>r);return f.locale=n,f.key=t,f}const d=o(r,ri(e,n,l,r,c,i));return d.locale=n,d.key=t,d.source=r,d}function ni(e,t,n){return t(n)}function lt(...e){const[t,n,r]=e,l=D();if(!L(t)&&!B(t)&&!le(t)&&!te(t))throw ae(ie.INVALID_ARGUMENT);const i=B(t)?String(t):(le(t),t);return B(n)?l.plural=n:L(n)?l.default=n:R(n)&&!Me(n)?l.named=n:G(n)&&(l.list=n),B(r)?l.plural=r:L(r)?l.default=r:R(r)&&K(l,r),[i,l]}function ri(e,t,n,r,l,i){return{locale:t,key:n,warnHtmlMessage:l,onError:o=>{throw i&&i(o),o},onCacheKey:o=>Un(t,n,o)}}function ii(e,t,n,r){const{modifiers:l,pluralRules:i,messageResolver:o,fallbackLocale:c,fallbackWarn:d,missingWarn:f,fallbackContext:y}=e,_={locale:t,modifiers:l,pluralRules:i,messages:(I,N)=>{let A=o(n,I);if(A==null&&(y||N)){const[,,v]=bn(y||e,I,t,c,d,f);A=o(v,I)}if(L(A)||te(A)){let v=!1;const p=En(e,I,t,A,I,()=>{v=!0});return v?zt:p}else return le(A)?A:zt}};return e.processor&&(_.processor=e.processor),r.list&&(_.list=r.list),r.named&&(_.named=r.named),B(r.plural)&&(_.pluralIndex=r.plural),_}const ai="11.2.8",X={UNEXPECTED_RETURN_TYPE:wr,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function q(e,...t){return Oe(e,null,void 0)}const st=se("__translateVNode"),ot=se("__datetimeParts"),ut=se("__numberParts"),li=se("__setPluralRules"),si=se("__injectWithOption"),ct=se("__dispose");function Se(e){if(!x(e)||te(e))return e;for(const t in e)if(Y(e,t))if(!t.includes("."))x(e[t])&&Se(e[t]);else{const n=t.split("."),r=n.length-1;let l=e,i=!1;for(let o=0;o<r;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in l||(l[n[o]]=D()),!x(l[n[o]])){i=!0;break}l=l[n[o]]}if(i||(te(l)?un.includes(n[r])||delete e[t]:(l[n[r]]=e[t],delete e[t])),!te(l)){const o=l[n[r]];x(o)&&Se(o)}}return e}function _n(e,t){const{messages:n,__i18n:r,messageResolver:l,flatJson:i}=t,o=R(n)?n:G(r)?D():{[e]:D()};if(G(r)&&r.forEach(c=>{if("locale"in c&&"resource"in c){const{locale:d,resource:f}=c;d?(o[d]=o[d]||D(),Ne(f,o[d])):Ne(f,o)}else L(c)&&Ne(JSON.parse(c),o)}),l==null&&i)for(const c in o)Y(o,c)&&Se(o[c]);return o}function oi(e){return e.type}function ui(e,t,n){let r=x(t.messages)?t.messages:D();"__i18nGlobal"in n&&(r=_n(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const l=Object.keys(r);l.length&&l.forEach(i=>{e.mergeLocaleMessage(i,r[i])});{if(x(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(o=>{e.mergeDateTimeFormat(o,t.datetimeFormats[o])})}if(x(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(o=>{e.mergeNumberFormat(o,t.numberFormats[o])})}}}function Vt(e){return xn(Mn,null,e,0)}function yn(){return In()}const Ht=()=>[],ci=()=>!1;let Gt=0;function Bt(e){return((t,n,r,l)=>e(n,r,yn()||void 0,l))}function Sn(e={}){const{__root:t,__injectWithOption:n}=e,r=t===void 0,l=e.flatJson,i=Pe?An:vn;let o=z(e.inheritLocale)?e.inheritLocale:!0;const c=i(t&&o?t.locale.value:L(e.locale)?e.locale:xe),d=i(t&&o?t.fallbackLocale.value:L(e.fallbackLocale)||G(e.fallbackLocale)||R(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:c.value),f=i(_n(c.value,e)),y=i(R(e.datetimeFormats)?e.datetimeFormats:{[c.value]:{}}),T=i(R(e.numberFormats)?e.numberFormats:{[c.value]:{}});let _=t?t.missingWarn:z(e.missingWarn)||Re(e.missingWarn)?e.missingWarn:!0,I=t?t.fallbackWarn:z(e.fallbackWarn)||Re(e.fallbackWarn)?e.fallbackWarn:!0,N=t?t.fallbackRoot:z(e.fallbackRoot)?e.fallbackRoot:!0,A=!!e.fallbackFormat,v=U(e.missing)?e.missing:null,u=U(e.missing)?Bt(e.missing):null,p=U(e.postTranslation)?e.postTranslation:null,S=t?t.warnHtmlMessage:z(e.warnHtmlMessage)?e.warnHtmlMessage:!0,g=!!e.escapeParameter;const C=t?t.modifiers:R(e.modifiers)?e.modifiers:{};let k=e.pluralRules||t&&t.pluralRules,E;E=(()=>{r&&Rt(null);const m={version:ai,locale:c.value,fallbackLocale:d.value,messages:f.value,modifiers:C,pluralRules:k,missing:u===null?void 0:u,missingWarn:_,fallbackWarn:I,fallbackFormat:A,unresolving:!0,postTranslation:p===null?void 0:p,warnHtmlMessage:S,escapeParameter:g,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};m.datetimeFormats=y.value,m.numberFormats=T.value,m.__datetimeFormatters=R(E)?E.__datetimeFormatters:void 0,m.__numberFormatters=R(E)?E.__numberFormatters:void 0;const b=Br(m);return r&&Rt(b),b})(),_e(E,c.value,d.value);function V(){return[c.value,d.value,f.value,y.value,T.value]}const Z=Ee({get:()=>c.value,set:m=>{E.locale=m,c.value=m}}),J=Ee({get:()=>d.value,set:m=>{E.fallbackLocale=m,d.value=m,_e(E,c.value,m)}}),j=Ee(()=>f.value),Fe=Ee(()=>y.value),Ue=Ee(()=>T.value);function ze(){return U(p)?p:null}function We(m){p=m,E.postTranslation=m}function Ve(){return v}function He(m){m!==null&&(u=Bt(m)),v=m,E.missing=u}const ne=(m,b,O,H,ce,we)=>{V();let fe;try{r||(E.fallbackContext=t?Gr():void 0),fe=m(E)}finally{r||(E.fallbackContext=void 0)}if(O!=="translate exists"&&B(fe)&&fe===De||O==="translate exists"&&!fe){const[Cn,xi]=b();return t&&N?H(t):ce(Cn)}else{if(we(fe))return fe;throw q(X.UNEXPECTED_RETURN_TYPE)}};function Te(...m){return ne(b=>Reflect.apply(Wt,null,[b,...m]),()=>lt(...m),"translate",b=>Reflect.apply(b.t,b,[...m]),b=>b,b=>L(b))}function ke(...m){const[b,O,H]=m;if(H&&!x(H))throw q(X.INVALID_ARGUMENT);return Te(b,O,K({resolvedMessage:!0},H||{}))}function Ge(...m){return ne(b=>Reflect.apply(Mt,null,[b,...m]),()=>it(...m),"datetime format",b=>Reflect.apply(b.d,b,[...m]),()=>Nt,b=>L(b)||G(b))}function Be(...m){return ne(b=>Reflect.apply(Dt,null,[b,...m]),()=>at(...m),"number format",b=>Reflect.apply(b.n,b,[...m]),()=>Nt,b=>L(b)||G(b))}function je(m){return m.map(b=>L(b)||B(b)||z(b)?Vt(String(b)):b)}const Ke={normalize:je,interpolate:m=>m,type:"vnode"};function $e(...m){return ne(b=>{let O;const H=b;try{H.processor=Ke,O=Reflect.apply(Wt,null,[H,...m])}finally{H.processor=null}return O},()=>lt(...m),"translate",b=>b[st](...m),b=>[Vt(b)],b=>G(b))}function Ce(...m){return ne(b=>Reflect.apply(Dt,null,[b,...m]),()=>at(...m),"number format",b=>b[ut](...m),Ht,b=>L(b)||G(b))}function Ze(...m){return ne(b=>Reflect.apply(Mt,null,[b,...m]),()=>it(...m),"datetime format",b=>b[ot](...m),Ht,b=>L(b)||G(b))}function Le(m){k=m,E.pluralRules=k}function Xe(m,b){return ne(()=>{if(!m)return!1;const O=L(b)?b:c.value,H=me(O),ce=E.messageResolver(H,m);return te(ce)||le(ce)||L(ce)},()=>[m],"translate exists",O=>Reflect.apply(O.te,O,[m,b]),ci,O=>z(O))}function Ye(m){let b=null;const O=cn(E,d.value,c.value);for(let H=0;H<O.length;H++){const ce=f.value[O[H]]||{},we=E.messageResolver(ce,m);if(we!=null){b=we;break}}return b}function pe(m){const b=Ye(m);return b??(t?t.tm(m)||{}:{})}function me(m){return f.value[m]||{}}function de(m,b){if(l){const O={[m]:b};for(const H in O)Y(O,H)&&Se(O[H]);b=O[m]}f.value[m]=b,E.messages=f.value}function be(m,b){f.value[m]=f.value[m]||{};const O={[m]:b};if(l)for(const H in O)Y(O,H)&&Se(O[H]);b=O[m],Ne(b,f.value[m]),E.messages=f.value}function qe(m){return y.value[m]||{}}function a(m,b){y.value[m]=b,E.datetimeFormats=y.value,Ot(E,m,b)}function s(m,b){y.value[m]=K(y.value[m]||{},b),E.datetimeFormats=y.value,Ot(E,m,b)}function h(m){return T.value[m]||{}}function w(m,b){T.value[m]=b,E.numberFormats=T.value,Ft(E,m,b)}function F(m,b){T.value[m]=K(T.value[m]||{},b),E.numberFormats=T.value,Ft(E,m,b)}Gt++,t&&Pe&&(tt(t.locale,m=>{o&&(c.value=m,E.locale=m,_e(E,c.value,d.value))}),tt(t.fallbackLocale,m=>{o&&(d.value=m,E.fallbackLocale=m,_e(E,c.value,d.value))}));const P={id:Gt,locale:Z,fallbackLocale:J,get inheritLocale(){return o},set inheritLocale(m){o=m,m&&t&&(c.value=t.locale.value,d.value=t.fallbackLocale.value,_e(E,c.value,d.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:j,get modifiers(){return C},get pluralRules(){return k||{}},get isGlobal(){return r},get missingWarn(){return _},set missingWarn(m){_=m,E.missingWarn=_},get fallbackWarn(){return I},set fallbackWarn(m){I=m,E.fallbackWarn=I},get fallbackRoot(){return N},set fallbackRoot(m){N=m},get fallbackFormat(){return A},set fallbackFormat(m){A=m,E.fallbackFormat=A},get warnHtmlMessage(){return S},set warnHtmlMessage(m){S=m,E.warnHtmlMessage=m},get escapeParameter(){return g},set escapeParameter(m){g=m,E.escapeParameter=m},t:Te,getLocaleMessage:me,setLocaleMessage:de,mergeLocaleMessage:be,getPostTranslationHandler:ze,setPostTranslationHandler:We,getMissingHandler:Ve,setMissingHandler:He,[li]:Le};return P.datetimeFormats=Fe,P.numberFormats=Ue,P.rt=ke,P.te=Xe,P.tm=pe,P.d=Ge,P.n=Be,P.getDateTimeFormat=qe,P.setDateTimeFormat=a,P.mergeDateTimeFormat=s,P.getNumberFormat=h,P.setNumberFormat=w,P.mergeNumberFormat=F,P[si]=n,P[st]=$e,P[ot]=Ze,P[ut]=Ce,P}const Et={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function mi({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,l)=>[...r,...l.type===Jt?l.children:[l]],[]):t.reduce((n,r)=>{const l=e[r];return l&&(n[r]=l()),n},D())}function Tn(){return Jt}const di=mt({name:"i18n-t",props:K({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>B(e)||!isNaN(e)}},Et),setup(e,t){const{slots:n,attrs:r}=t,l=e.i18n||_t({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(T=>T[0]!=="_"),o=D();e.locale&&(o.locale=e.locale),e.plural!==void 0&&(o.plural=L(e.plural)?+e.plural:e.plural);const c=mi(t,i),d=l[st](e.keypath,c,o),f=K(D(),r),y=L(e.tag)||x(e.tag)?e.tag:Tn();return qt(y,f,d)}}}),jt=di;function fi(e){return G(e)&&!L(e[0])}function kn(e,t,n,r){const{slots:l,attrs:i}=t;return()=>{const o={part:!0};let c=D();e.locale&&(o.locale=e.locale),L(e.format)?o.key=e.format:x(e.format)&&(L(e.format.key)&&(o.key=e.format.key),c=Object.keys(e.format).reduce((_,I)=>n.includes(I)?K(D(),_,{[I]:e.format[I]}):_,D()));const d=r(e.value,o,c);let f=[o.key];G(d)?f=d.map((_,I)=>{const N=l[_.type],A=N?N({[_.type]:_.value,index:I,parts:d}):[_.value];return fi(A)&&(A[0].key=`${_.type}-${I}`),A}):L(d)&&(f=[d]);const y=K(D(),i),T=L(e.tag)||x(e.tag)?e.tag:Tn();return qt(T,y,f)}}const hi=mt({name:"i18n-n",props:K({value:{type:Number,required:!0},format:{type:[String,Object]}},Et),setup(e,t){const n=e.i18n||_t({useScope:e.scope,__useComponent:!0});return kn(e,t,pn,(...r)=>n[ut](...r))}}),Kt=hi;function gi(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function pi(e){const t=o=>{const{instance:c,value:d}=o;if(!c||!c.$)throw q(X.UNEXPECTED_ERROR);const f=gi(e,c.$),y=$t(d);return[Reflect.apply(f.t,f,[...Zt(y)]),f]};return{created:(o,c)=>{const[d,f]=t(c);Pe&&e.global===f&&(o.__i18nWatcher=tt(f.locale,()=>{c.instance&&c.instance.$forceUpdate()})),o.__composer=f,o.textContent=d},unmounted:o=>{Pe&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:c})=>{if(o.__composer){const d=o.__composer,f=$t(c);o.textContent=Reflect.apply(d.t,d,[...Zt(f)])}},getSSRProps:o=>{const[c]=t(o);return{textContent:c}}}}function $t(e){if(L(e))return{path:e};if(R(e)){if(!("path"in e))throw q(X.REQUIRED_VALUE,"path");return e}else throw q(X.INVALID_VALUE)}function Zt(e){const{path:t,locale:n,args:r,choice:l,plural:i}=e,o={},c=r||{};return L(n)&&(o.locale=n),B(l)&&(o.plural=l),B(i)&&(o.plural=i),[t,c,o]}function bi(e,t,...n){const r=R(n[0])?n[0]:{};(!z(r.globalInstall)||r.globalInstall)&&([jt.name,"I18nT"].forEach(i=>e.component(i,jt)),[Kt.name,"I18nN"].forEach(i=>e.component(i,Kt)),[Yt.name,"I18nD"].forEach(i=>e.component(i,Yt))),e.directive("t",pi(t))}const Ei=se("global-vue-i18n");function _i(e={}){const t=z(e.globalInjection)?e.globalInjection:!0,n=new Map,[r,l]=yi(e),i=se("");function o(y){return n.get(y)||null}function c(y,T){n.set(y,T)}function d(y){n.delete(y)}const f={get mode(){return"composition"},async install(y,...T){if(y.__VUE_I18N_SYMBOL__=i,y.provide(y.__VUE_I18N_SYMBOL__,f),R(T[0])){const N=T[0];f.__composerExtend=N.__composerExtend,f.__vueI18nExtend=N.__vueI18nExtend}let _=null;t&&(_=vi(y,f.global)),bi(y,f,...T);const I=y.unmount;y.unmount=()=>{_&&_(),f.dispose(),I()}},get global(){return l},dispose(){r.stop()},__instances:n,__getInstance:o,__setInstance:c,__deleteInstance:d};return f}function _t(e={}){const t=yn();if(t==null)throw q(X.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw q(X.NOT_INSTALLED);const n=Si(t),r=ki(n),l=oi(t),i=Ti(e,l);if(i==="global")return ui(r,e,l),r;if(i==="parent"){let d=Ci(n,t,e.__useComponent);return d==null&&(d=r),d}const o=n;let c=o.__getInstance(t);if(c==null){const d=K({},e);"__i18n"in l&&(d.__i18n=l.__i18n),r&&(d.__root=r),c=Sn(d),o.__composerExtend&&(c[ct]=o.__composerExtend(c)),wi(o,t,c),o.__setInstance(t,c)}return c}function yi(e,t){const n=Ln(),r=n.run(()=>Sn(e));if(r==null)throw q(X.UNEXPECTED_ERROR);return[n,r]}function Si(e){const t=Nn(e.isCE?Ei:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw q(e.isCE?X.NOT_INSTALLED_WITH_PROVIDE:X.UNEXPECTED_ERROR);return t}function Ti(e,t){return Me(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function ki(e){return e.mode==="composition"?e.global:e.global.__composer}function Ci(e,t,n=!1){let r=null;const l=t.root;let i=Li(t,n);for(;i!=null;){const o=e;if(e.mode==="composition"&&(r=o.__getInstance(i)),r!=null||l===i)break;i=i.parent}return r}function Li(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function wi(e,t,n){Pn(()=>{},t),Rn(()=>{const r=n;e.__deleteInstance(t);const l=r[ct];l&&(l(),delete r[ct])},t)}const Ai=["locale","fallbackLocale","availableLocales"],Xt=["t","rt","d","n","tm","te"];function vi(e,t){const n=Object.create(null);return Ai.forEach(l=>{const i=Object.getOwnPropertyDescriptor(t,l);if(!i)throw q(X.UNEXPECTED_ERROR);const o=wn(i.value)?{get(){return i.value.value},set(c){i.value.value=c}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,l,o)}),e.config.globalProperties.$i18n=n,Xt.forEach(l=>{const i=Object.getOwnPropertyDescriptor(t,l);if(!i||!i.value)throw q(X.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${l}`,i)}),()=>{delete e.config.globalProperties.$i18n,Xt.forEach(l=>{delete e.config.globalProperties[`$${l}`]})}}const Ii=mt({name:"i18n-d",props:K({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Et),setup(e,t){const n=e.i18n||_t({useScope:e.scope,__useComponent:!0});return kn(e,t,gn,(...r)=>n[ot](...r))}}),Yt=Ii;Wr(Lr);Vr(Fr);Hr(cn);const Ni={minvv:{auth:{title:{login:"Login",register:"Register Admin"},fields:{email:"Email",username:"Username",password:"Password",confirmPassword:"Confirm Password",passwordMismatch:"Passwords do not match",firstName:"First name",lastName:"Last name",locale:"Locale",enabled:"Enabled",roles:"Roles (comma-separated)"},hints:{rolesExample:"Example: ROLE_API_ACCESS, ROLE_ADMINISTRATION_ACCESS, ROLE_MINVV_SUPER_ADMIN"},actions:{login:"Login",register:"Register",switchToLogin:"Already have an account? Login",switchToRegister:"No admin yet? Register",resetLocale:"Reset Locale",rememberMe:"Remember me"}},config:{title:"Minvv – Builder Init",subtitle:"No layouts exist yet. Create the first layout to begin building.",actions:{continue:"Continue",back:"Back"},validation:{countryRequired:"Enable at least one country first.",localeRequired:"Enable at least one locale first.",zoneRequired:"Create at least one zone first.",taxCategoryRequired:"Create at least one tax category first.",taxRateRequired:"Create at least one tax rate first.",catalogRequired:"Create at least one category first.",channelRequired:"Create at least one channel first."},steps:{country:{title:"Country",help:"Choose the countries your store will operate in."},currency:{title:"Currency",help:"Enable the currencies customers can use."},zones:{title:"Zones",help:"Zones group countries for shipping, taxation, and business rules."},taxCategory:{title:"Tax Category",help:"Tax categories classify products for taxation."},taxRate:{title:"Tax Rate",help:"Tax rates apply percentages to tax categories within zones."},catalog:{title:"Categories",help:"Organize products into categories for navigation and browsing."},channel:{title:"Channel",help:"Channels define storefronts, currencies, locales, and sales settings."},layout:{title:"Layout",help:"Create the first site layout or start from a saved template."}},theme:{title:"Theme (optional)",enable:"Create theme for this channel",name:"Theme Name",token:"Token",hex:"Hex",addColor:"Add Color"},layout:{templateTitle:"Start from Template",selectTemplate:"Select Template",createFromTemplate:"Create Project From Template",layoutName:"Layout name",path:"Path",pathHint:"Defaults to",channel:"Channel (default)",createLayout:"Create layout"},injected:{common:{enable:"Enable",update:"Update"},country:{selectCountries:"Select countries",deleteTitle:"Delete Country",deleteMessage:"Delete {name}?"},province:{code:"Code",name:"Name",abbreviation:"Abbrev",codeRule:"Must be 2 letters",fullCode:"Full code will be:",deleteTitle:"Delete Province",deleteMessage:"Delete {name}?"},currency:{selectCurrency:"Select currency",deleteTitle:"Delete Currency",deleteMessage:"Delete {name}?"},locale:{selectLocale:"Select locale",deleteTitle:"Delete Locale",deleteMessage:"Delete {name}?"},zone:{code:"Code",name:"Name",type:"Type",scope:"Scope",selectMember:"Select member",create:"Create Zone"},zoneNode:{zoneName:"Zone name",addMember:"Add member",deleteTitle:"Delete Zone",deleteMessage:"Delete {name}?"},taxCategoryCreateNode:{code:"Code",name:"Name",description:"Description",defaultVatDescription:"Standard Value Added Tax",defaultSalesTaxDescription:"Standard Sales Tax"},taxCategoryNode:{name:"Name",description:"Description",deleteTitle:"Delete Tax Category",deleteMessage:"Delete {name}?"},taxRateCreateNode:{code:"Code",name:"Name",zone:"Zone",category:"Category",amount:"Amount (%)",includedInPrice:"Included in price",confirm:"I confirm tax rates are correct",confirmHelp:"Tax rates vary by jurisdiction and may change. Minvv provides suggested defaults, but the merchant is responsible for verifying legal compliance.",create:"Create Tax Rate",defaultName:"Standard {rate}%"},taxRateNode:{name:"Name",amount:"Amount",included:"Included",zone:"Zone",category:"Category",start:"Start",end:"End",deleteTitle:"Delete Tax Rate",deleteMessage:"Delete {name}?"},channelCreateNode:{billingData:"Billing Data",company:"Company",taxId:"Tax ID",billingCountry:"Billing Country",street:"Street",city:"City",postcode:"Postcode",contactEmail:"Contact Email",contactPhone:"Contact Phone",code:"Code",name:"Name",hostname:"Hostname",description:"Description",baseCurrency:"Base Currency",defaultLocale:"Default Locale",defaultTaxZone:"Default Tax Zone",addCurrency:"Add Currency",addLocale:"Add Locale",addCountry:"Add Country",skipShipping:"Skip shipping step if only one method available",skipShippingHelp:"If only one shipping method is available at checkout, the shipping selection step is skipped automatically.",skipPayment:"Skip payment step if only one method available",skipPaymentHelp:"If only one payment method is available, customers go directly to the next checkout step.",accountVerification:"Account verification required",accountVerificationHelp:"Customers must verify their account (usually by email) before they can fully use it or place orders, depending on configuration.",shippingAddressRequired:"Shipping address required in checkout",shippingAddressRequiredHelp:"If enabled, customers must enter a shipping address during checkout. Disable for digital-only stores or pickup-only sales.",menuTaxon:"Menu Taxon",create:"Create Channel"},taxonCreateNode:{general:"General",parent:"Parent",enabled:"Enabled",translations:"Translations",slug:"Slug",create:"Create Taxon"},taxonNode:{uploadImage:"Upload image"}}},dock:{actions:{logout:{label:"Logout",description:"Sign out of the builder and return to the authentication screen."},pin:{label:"Pin",description:"Keep the dock permanently expanded instead of collapsing automatically."},setup:{label:"Setup",description:"Open the project setup panel to configure global settings and structure."},closeLayoutEditor:{label:"Close",description:"Close the layout editing dialog and return to normal view mode."},side:{label:"Side",description:"Move the dock to the opposite side of the screen."},undo:{label:"Undo",description:"Revert the last change made in the current layout or page."},redo:{label:"Redo",description:"Reapply the most recently undone change."},inspector:{label:"Inspector",description:"Open the layout inspector to adjust structure and container settings."},preview:{label:"Preview",description:"Toggle preview mode to see the page without editing overlays."},layout:{label:"Layout",description:"Edit the layout structure used by the current page."},addPage:{label:"Add Page",description:"Create a new page and attach it to the current layout."},deletePage:{label:"Delete Page",description:"Permanently remove the current page from the project."},addLayout:{label:"Add Layout",description:"Create a new layout template for structuring pages."},deleteLayout:{label:"Delete Layout",description:"Permanently remove this layout from the project."}},hints:{startHere:"Start Here"}},flex:{labels:{direction:"Flex dir",wrap:"Flex Wrap",justify:"Justify Content",alignItems:"Align Items",alignContent:"Align Content",gap:"Gap",rowGap:"Row Gap",columnGap:"Column Gap",growShrink:"Grow / Shrink",grow:"Grow",shrink:"Shrink",spacing:"Spacing",marginAuto:"Margin Right Auto",widthLimits:"Min / Max Width",heightLimits:"Min / Max Height",min:"Min",max:"Max",alignSelf:"Align Self"},tooltips:{growShrink:{minimal:"Flex growth behavior",full:`
Controls how an item grows or shrinks inside a flex container.

GROW
- Defines how much the item expands relative to others

SHRINK
- Defines how much the item can shrink when space is limited

TIP
Use grow for flexible layouts, shrink to prevent overflow issues.
`},spacing:{minimal:"Auto spacing",full:`
Applies automatic margin to push items apart.

Margin Right Auto:
- Pushes the item to the left
- Creates space between items

TIP
Useful for layout separation (e.g. pushing buttons to edges).
`},widthLimits:{minimal:"Width constraints",full:`
Defines minimum and maximum width of the item.

- Min prevents shrinking below a size
- Max prevents over-expansion

TIP
Use with grow/shrink to control responsive behavior.
`},heightLimits:{minimal:"Height constraints",full:`
Defines minimum and maximum height.

- Vertical range slider adjusts both values
- Useful for responsive vertical layouts
`},alignSelf:{minimal:"Override alignment",full:`
Overrides align-items for this specific element.

- auto: inherit from container
- others: override alignment

TIP
Use this when one item needs different positioning.
`},direction:{minimal:"Main axis direction",full:"Defines the main axis of the flex container. Row = horizontal layout, Column = vertical layout. Reverse flips the direction."},wrap:{minimal:"Allow multiple lines",full:`Controls whether flex items stay on one line or wrap onto multiple lines when they overflow.  
          IMPORTANT:  When using no-wrap and elements overflow, header and footer must be locked.  Navigate to Layout Creator in the current Layout Path and lock header and footer to prevent them from being cut off.
          `},justify:{minimal:"Main axis alignment",full:"Controls how items are distributed along the main axis (defined by flex direction). Start, center, end, or spaced layouts."},alignItems:{minimal:"Cross axis alignment",full:"Aligns items along the cross axis (perpendicular to flex direction). Controls vertical alignment in rows and horizontal alignment in columns."},alignContent:{minimal:"Multi-line alignment",full:"Controls alignment of multiple flex lines. Only works when wrap is enabled and there are multiple rows/columns."},gap:{minimal:"Uniform spacing",full:"Sets equal spacing between items in both row and column directions."},rowGap:{minimal:"Vertical spacing",full:"Controls spacing between rows of items. Has effect when items wrap or when using column direction."},columnGap:{minimal:"Horizontal spacing",full:"Controls spacing between columns of items. Has effect in row direction layouts."},directionMatrix:{minimal:"Direction, alignment and spacing control",full:`
This control combines direction, alignment, and spacing into a single layout matrix.

DIRECTION
- Outer buttons set the flex direction:
  Row / Column / Reverse variants
- This defines the main axis of the layout

MATRIX
- Center grid controls alignment:
  justify-content (main axis)
  align-items (cross axis)
- Click a cell to position items

EXTRA CONTROLS
- Between / Around: distribute space along the main axis
- Stretch: makes items fill the cross axis

GAP
- Left slider: row gap (vertical spacing)
- Bottom slider: column gap (horizontal spacing)

TIP
Think of this as a visual flexbox controller: direction defines flow, matrix defines alignment, and gaps define spacing.
`}}},grid:{labels:{repeatMode:"Repeat Mode",minmax:"Min / Max",add:"Add",addSecondary:"Add (secondary)",row:"Row",column:"Column",rows:"Rows",columns:"Columns",template:"Template",auto:"Auto",justifyItems:"Justify Items",justifyContent:"Justify Content",itemAlignmentGap:"Item Alignment / Gap",colStart:"Col Start",colEnd:"Col End",rowStart:"Row Start",rowEnd:"Row End",justifySelf:"Justify Self",alignSelf:"Align Self"},tooltips:{childMatrix:{minimal:"Position and align item",full:`
Controls grid item placement and alignment.

COLUMNS / ROWS
- Start / End define span across grid lines
- +/- buttons shift the range
- Sliders adjust visually

SELF MATRIX
- Center grid controls justify-self + align-self
- Each cell = position inside the grid area

AUTO
- Inherits alignment from container

STRETCH
- Fills available space in that direction

TIP
Use ranges for placement, matrix for alignment.
`},columnSpan:{minimal:"Column span",full:`
Defines where the item starts and ends across columns.

- Start: column line where item begins
- End: column line where item stops

Example:
1 → 3 spans across 2 columns

TIP
Use this to control width and placement in the grid.
`},rowSpan:{minimal:"Row span",full:`
Defines where the item starts and ends across rows.

- Start: row line where item begins
- End: row line where item stops

Example:
1 → 3 spans across 2 rows

TIP
Use this to control height and vertical placement.
`},justifySelf:{minimal:"Horizontal alignment",full:`
Aligns the item inside its grid cell horizontally.

- Overrides justify-items from container
- Applies only to this element

TIP
Use for fine-tuning individual item alignment.
`},alignSelf:{minimal:"Vertical alignment",full:`
Aligns the item inside its grid cell vertically.

- Overrides align-items from container
- Applies only to this element

TIP
Useful when one item needs different positioning.
`},itemAlignmentGap:{minimal:"Align items and adjust spacing",full:`
This matrix controls how items are positioned inside their grid cells.

MATRIX
- Each cell represents alignment:
  top / center / bottom (vertical)
  left / center / right (horizontal)
- Click a cell to set both align-items and justify-items together

STRETCH
- V Stretch: items fill cell height
- H Stretch: items fill cell width

GAP CONTROLS
- Right slider: row gap (vertical spacing between rows)
- Bottom slider: column gap (horizontal spacing between columns)

TIP
Use the matrix for positioning, and gaps for spacing between items.
`},justifyItems:{minimal:"Inline axis alignment",full:"Aligns items inside their grid cells along the inline (row) axis. Controls horizontal alignment in most layouts."},justifyContent:{minimal:"Track distribution",full:"Controls how the entire grid is distributed along the inline axis when there is extra space. Affects spacing between tracks, not individual items."},secondaryAxis:{minimal:"Secondary axis tracks",full:"Controls the tracks on the secondary axis (opposite of the main flow). These are either manually defined (Template) or automatically generated (Auto)."},autoSize:{minimal:"Auto track size",full:"Defines the size of automatically generated tracks. This applies to all implicit rows or columns created by the grid."},autoUnit:{minimal:"Auto track unit",full:"Defines the unit used for auto-generated track sizes (px, fr, %, etc)."},add:{minimal:"Add track on primary axis",full:"Adds a new track on the primary axis. This follows the current flow direction (columns in row mode, rows in column mode)."},addSecondary:{minimal:"Add track on secondary axis",full:"Adds a new track on the secondary axis. This is the opposite direction of the main flow and is only available when auto tracks are disabled."},flow:{minimal:"Main layout direction",full:"Controls how items flow in the grid. Row = items fill rows first (left to right). Column = items fill columns first (top to bottom)."},primaryAxis:{minimal:"Primary track axis",full:"Defines the main track dimension you are editing. When flow is row, you control columns. When flow is column, you control rows."},repeatMode:{minimal:"Track generation mode",full:`
Defines how tracks (rows/columns) are created.

REPEAT
Automatically generates tracks using a pattern.
Works with:
- fixed count (e.g. 3 columns)

CUSTOM
Lets you manually define each track size.
Example:
100px 1fr 2fr

WHEN TO USE
Use Repeat for responsive layouts and dynamic content.
Use Custom for precise, fixed layouts.
`},minmax:{minimal:"Flexible track sizing",full:`
Enables minmax() behavior for tracks.

OFF
Tracks use fixed sizes or fractions.
Example:
repeat(3, 1fr)

ON
Tracks become flexible with minimum and maximum limits.
Example:
repeat(auto-fit, minmax(200px, 1fr))

WHAT IT DOES
- Allows tracks to shrink and grow
- Prevents items from becoming too small

REQUIREMENT
Min/Max must be enabled to use auto-fit or auto-fill.
`},auto:{minimal:"Auto-fit vs Auto-fill behavior",full:`
AUTO-FIT (recommended)
| item | item |
→ Empty columns collapse
→ Items stretch to fill space

Example:
Container can fit 5 columns, but you have 2 items

auto-fit:
|-------------item-------------|-------------item-------------|
|---column---|---column---|---column---|---column---|

AUTO-FILL
| item | item | column | column | column |
→ Empty columns remain
→ Items do NOT stretch

Example:
Container can fit 5 columns, but you have 2 items

auto-fill:
|--item--|--item--|  empty  |  empty  |  empty  |

WHEN THEY LOOK THE SAME
If all tracks are filled (enough items), both behave identically.

TIP
Use auto-fit for responsive layouts.
Use auto-fill only when you need consistent column structure.
`},repeatCount:{minimal:"Number of tracks",full:`
Defines how many tracks (rows or columns) are created when using Repeat with a fixed count.

Example:
repeat(3, 1fr)
→ Creates 3 equal columns

TIP
Use this for simple, fixed grid layouts.
`},size:{minimal:"Track size",full:`
Defines the size of each track when Min/Max is disabled.

Examples:
100px → fixed size
1fr → flexible size (shares available space)

TIP
Use fr units for flexible layouts and px for fixed layouts.
`},unit:{minimal:"Size unit",full:`
Defines the unit used for track sizing.

Common units:
- px → fixed size
- fr → flexible fraction of available space
- % → relative to container

TIP
Use fr for responsive layouts.
`},minSize:{minimal:"Minimum size",full:`
Defines the minimum size of a track when Min/Max is enabled.

Example:
minmax(200px, 1fr)
→ Track will never shrink below 200px

TIP
Prevents content from becoming too small.
`},minUnit:{minimal:"Minimum unit",full:`
Defines the unit used for the minimum track size.

Common units:
- px → fixed minimum
- % → relative minimum

TIP
Use px to enforce a strict minimum size.
`},maxSize:{minimal:"Maximum size",full:`
Defines the maximum size of a track when using Min/Max in fixed mode.

Example:
minmax(200px, 400px)
→ Track grows up to 400px maximum

TIP
Use this to limit expansion in controlled layouts.
`},maxUnit:{minimal:"Maximum unit",full:`
Defines the unit used for the maximum track size.

Common units:
- px → fixed maximum
- fr → flexible maximum (fills remaining space)

TIP
Use 1fr for responsive expansion.
`},autoMax:{minimal:"Auto maximum (1fr)",full:`
In auto-fit / auto-fill mode, the maximum size is fixed to 1fr.

This means:
- Tracks expand to fill available space
- You cannot manually change the max value

Example:
minmax(200px, 1fr)

TIP
This is required for responsive auto layouts.
`}}},presets:{labels:{create:"Presets",createButton:"Create",editButton:"Edit",saveButton:"Save"},tooltips:{create:{minimal:"Create and manage reusable layout presets",full:`
Presets allow you to save reusable blocks of layout and content.

CREATE
- Starts a new preset from scratch

EDIT
- Opens the selected preset for modification

SAVE
- Converts the current selection into a reusable preset

USE CASES
- Reusable sections (hero, cards, grids)
- Product listing templates
- Consistent design patterns

TIP
Use presets to avoid rebuilding the same structures repeatedly.
`}}},injectChild:{tooltips:{minimal:"This container has 0 width and height because it has no content. Click to select the container and add elements.",full:`This container currently has no content, which is why it has 0 width and height. To start building your layout, click on this container to select it. Once selected, you can use the layout inspector to add new elements inside this container, such as text, images, buttons, or even nested containers for more complex structures. This placeholder is designed to help you identify empty containers and encourage you to fill them with content to create your desired layout.
`}}}},Pi={minvv:{auth:{title:{login:"Anmeldung",register:"Admin registrieren"},fields:{email:"E-Mail",username:"Benutzername",password:"Passwort",confirmPassword:"Passwort bestätigen",passwordMismatch:"Passwörter stimmen nicht überein",firstName:"Vorname",lastName:"Nachname",locale:"Sprache",enabled:"Aktiviert",roles:"Rollen (kommagetrennt)"},hints:{rolesExample:"Beispiel: ROLE_API_ACCESS, ROLE_ADMINISTRATION_ACCESS, ROLE_MINVV_SUPER_ADMIN"},actions:{login:"Anmelden",register:"Registrieren",switchToLogin:"Bereits ein Konto? Anmelden",switchToRegister:"Noch kein Admin? Registrieren",resetLocale:"Sprache zurücksetzen",rememberMe:"Angemeldet bleiben"}},config:{title:"Minvv – Builder Initialisierung",subtitle:"Es existieren noch keine Layouts. Erstelle das erste Layout, um zu beginnen.",actions:{continue:"Weiter",back:"Zurück"},validation:{countryRequired:"Aktiviere zuerst mindestens ein Land.",localeRequired:"Aktiviere zuerst mindestens eine Sprache.",zoneRequired:"Erstelle zuerst mindestens eine Zone.",taxCategoryRequired:"Erstelle zuerst mindestens eine Steuerkategorie.",taxRateRequired:"Erstelle zuerst mindestens einen Steuersatz.",catalogRequired:"Erstelle zuerst mindestens eine Kategorie.",channelRequired:"Erstelle zuerst mindestens einen Kanal."},steps:{country:{title:"Land",help:"Wähle die Länder aus, in denen dein Shop betrieben wird."},currency:{title:"Währung",help:"Aktiviere die Währungen, die Kunden verwenden können."},zones:{title:"Zonen",help:"Zonen gruppieren Länder für Versand, Steuern und Geschäftsregeln."},taxCategory:{title:"Steuerkategorie",help:"Steuerkategorien klassifizieren Produkte für die Besteuerung."},taxRate:{title:"Steuersatz",help:"Steuersätze wenden Prozentsätze auf Steuerkategorien innerhalb von Zonen an."},catalog:{title:"Kategorien",help:"Organisiere Produkte in Kategorien für Navigation und Übersicht."},channel:{title:"Kanal",help:"Kanäle definieren Storefronts, Währungen, Sprachen und Verkaufseinstellungen."},layout:{title:"Layout",help:"Erstelle das erste Seitenlayout oder starte mit einer Vorlage."}},theme:{title:"Theme (optional)",enable:"Theme für diesen Kanal erstellen",name:"Theme-Name",token:"Token",hex:"Hex",addColor:"Farbe hinzufügen"},layout:{templateTitle:"Mit Vorlage starten",selectTemplate:"Vorlage auswählen",createFromTemplate:"Projekt aus Vorlage erstellen",layoutName:"Layoutname",path:"Pfad",pathHint:"Standard ist",channel:"Kanal (Standard)",createLayout:"Layout erstellen"},injected:{common:{enable:"Aktivieren",update:"Aktualisieren"},country:{selectCountries:"Länder auswählen",deleteTitle:"Land löschen",deleteMessage:"{name} löschen?"},province:{code:"Code",name:"Name",abbreviation:"Abk.",codeRule:"Muss aus 2 Buchstaben bestehen",fullCode:"Vollständiger Code wird sein:",deleteTitle:"Bundesland löschen",deleteMessage:"{name} löschen?"},currency:{selectCurrency:"Währung auswählen",deleteTitle:"Währung löschen",deleteMessage:"{name} löschen?"},locale:{selectLocale:"Sprache auswählen",deleteTitle:"Sprache löschen",deleteMessage:"{name} löschen?"},zone:{code:"Code",name:"Name",type:"Typ",scope:"Bereich",selectMember:"Mitglied auswählen",create:"Zone erstellen"},zoneNode:{zoneName:"Zonenname",addMember:"Mitglied hinzufügen",deleteTitle:"Zone löschen",deleteMessage:"{name} löschen?"},taxCategoryCreateNode:{code:"Code",name:"Name",description:"Beschreibung",defaultVatDescription:"Standard-Mehrwertsteuer",defaultSalesTaxDescription:"Standard-Umsatzsteuer"},taxCategoryNode:{name:"Name",description:"Beschreibung",deleteTitle:"Steuerkategorie löschen",deleteMessage:"{name} löschen?"},taxRateCreateNode:{code:"Code",name:"Name",zone:"Zone",category:"Kategorie",amount:"Betrag (%)",includedInPrice:"Im Preis enthalten",confirm:"Ich bestätige, dass die Steuersätze korrekt sind",confirmHelp:"Steuersätze unterscheiden sich je nach Land/Region und können sich ändern. Minvv stellt Standardwerte bereit, der Händler ist jedoch für die rechtliche Prüfung verantwortlich.",create:"Steuersatz erstellen",defaultName:"Standard {rate}%"},taxRateNode:{name:"Name",amount:"Betrag",included:"Inklusive",zone:"Zone",category:"Kategorie",start:"Beginn",end:"Ende",deleteTitle:"Steuersatz löschen",deleteMessage:"{name} löschen?"},channelCreateNode:{billingData:"Rechnungsdaten",company:"Firma",taxId:"Steuer-ID",billingCountry:"Rechnungsland",street:"Straße",city:"Stadt",postcode:"Postleitzahl",contactEmail:"Kontakt E-Mail",contactPhone:"Kontakttelefon",code:"Code",name:"Name",hostname:"Hostname",description:"Beschreibung",baseCurrency:"Basiswährung",defaultLocale:"Standardsprache",defaultTaxZone:"Standard-Steuerzone",addCurrency:"Währung hinzufügen",addLocale:"Sprache hinzufügen",addCountry:"Land hinzufügen",skipShipping:"Versandschritt überspringen, wenn nur eine Methode verfügbar ist",skipShippingHelp:"Wenn beim Checkout nur eine Versandmethode verfügbar ist, wird die Auswahl automatisch übersprungen.",skipPayment:"Zahlungsschritt überspringen, wenn nur eine Methode verfügbar ist",skipPaymentHelp:"Wenn nur eine Zahlungsmethode verfügbar ist, gelangen Kunden direkt zum nächsten Checkout-Schritt.",accountVerification:"Kontobestätigung erforderlich",accountVerificationHelp:"Kunden müssen ihr Konto bestätigen (meist per E-Mail), bevor sie es vollständig nutzen oder Bestellungen aufgeben können – je nach Konfiguration.",shippingAddressRequired:"Lieferadresse im Checkout erforderlich",shippingAddressRequiredHelp:"Wenn aktiviert, müssen Kunden im Checkout eine Lieferadresse eingeben. Deaktivieren für rein digitale Shops oder reine Abholung.",menuTaxon:"Menü-Taxon",create:"Kanal erstellen"},taxonCreateNode:{general:"Allgemein",parent:"Übergeordnet",enabled:"Aktiviert",translations:"Übersetzungen",slug:"Slug",create:"Taxon erstellen"},taxonNode:{uploadImage:"Bild hochladen"}}},dock:{actions:{logout:{label:"Abmelden",description:"Melden Sie sich vom Builder ab und kehren Sie zur Anmeldeseite zurück."},pin:{label:"Anheften",description:"Das Dock dauerhaft geöffnet halten, anstatt es automatisch einklappen zu lassen."},setup:{label:"Einrichtung",description:"Öffnen Sie das Projekt-Einrichtungsfenster, um globale Einstellungen und die Struktur zu konfigurieren."},closeLayoutEditor:{label:"Schließen",description:"Schließen Sie den Layout-Editor und kehren Sie zur normalen Ansicht zurück."},side:{label:"Seite",description:"Verschieben Sie das Dock auf die gegenüberliegende Seite des Bildschirms."},undo:{label:"Rückgängig",description:"Machen Sie die letzte Änderung im aktuellen Layout oder auf der Seite rückgängig."},redo:{label:"Wiederholen",description:"Wenden Sie die zuletzt rückgängig gemachte Änderung erneut an."},inspector:{label:"Inspektor",description:"Öffnen Sie den Layout-Inspektor, um Struktur- und Container-Einstellungen anzupassen."},preview:{label:"Vorschau",description:"Aktivieren oder deaktivieren Sie den Vorschaumodus, um die Seite ohne Bearbeitungs-Overlays zu sehen."},layout:{label:"Layout",description:"Bearbeiten Sie die Layout-Struktur, die von der aktuellen Seite verwendet wird."},addPage:{label:"Seite hinzufügen",description:"Erstellen Sie eine neue Seite und verknüpfen Sie sie mit dem aktuellen Layout."},deletePage:{label:"Seite löschen",description:"Entfernen Sie die aktuelle Seite dauerhaft aus dem Projekt."},addLayout:{label:"Layout hinzufügen",description:"Erstellen Sie eine neue Layout-Vorlage zur Strukturierung von Seiten."},deleteLayout:{label:"Layout löschen",description:"Entfernen Sie dieses Layout dauerhaft aus dem Projekt."}},hints:{startHere:"Hier beginnen"}},flex:{labels:{direction:"Flex-Richtung",wrap:"Flex-Wrap",justify:"Justify Content",alignItems:"Align Items",alignContent:"Align Content",gap:"Gap",rowGap:"Zeilenabstand",columnGap:"Spaltenabstand",growShrink:"Wachsen / Schrumpfen",grow:"Wachsen",shrink:"Schrumpfen",spacing:"Abstand",marginAuto:"Margin Rechts Auto",widthLimits:"Min / Max Breite",heightLimits:"Min / Max Höhe",min:"Min",max:"Max",alignSelf:"Align Self"},tooltips:{growShrink:{minimal:"Flex-Wachstumsverhalten",full:`
Steuert, wie ein Element innerhalb eines Flex-Containers wächst oder schrumpft.

WACHSEN
- Bestimmt, wie stark sich das Element im Vergleich zu anderen ausdehnt

SCHRUMPFEN
- Bestimmt, wie stark es bei Platzmangel schrumpfen darf

TIPP
Nutze Grow für flexible Layouts und Shrink, um Überlauf zu vermeiden.
`},spacing:{minimal:"Automatischer Abstand",full:`
Wendet automatische Margins an, um Elemente auseinanderzuschieben.

Margin Right Auto:
- Schiebt das Element nach links
- Erzeugt Abstand zwischen Elementen

TIPP
Nützlich, um Elemente gezielt zu verteilen (z. B. Buttons).
`},widthLimits:{minimal:"Breitenbegrenzung",full:`
Definiert minimale und maximale Breite.

- Min verhindert zu starkes Schrumpfen
- Max verhindert zu starkes Wachsen

TIPP
Kombiniere dies mit Grow/Shrink für responsive Verhalten.
`},heightLimits:{minimal:"Höhenbegrenzung",full:`
Definiert minimale und maximale Höhe.

- Der vertikale Slider steuert beide Werte
- Nützlich für responsive vertikale Layouts
`},alignSelf:{minimal:"Ausrichtung überschreiben",full:`
Überschreibt align-items für dieses Element.

- auto: übernimmt Container-Wert
- andere Werte: eigene Ausrichtung

TIPP
Verwende dies, wenn ein Element anders positioniert werden soll.
`},direction:{minimal:"Hauptachsen-Richtung",full:"Definiert die Hauptachse des Flex-Containers. Row = horizontales Layout, Column = vertikales Layout. Reverse kehrt die Richtung um."},wrap:{minimal:"Mehrere Zeilen erlauben",full:`Bestimmt, ob Flex-Elemente in einer Zeile bleiben oder bei Überlauf in mehrere Zeilen umbrechen.
          WICHTIG: Wenn kein Umbruch verwendet wird und Elemente überlaufen, müssen Header und Footer gesperrt werden. Navigiere zum Layout-Ersteller im aktuellen Layout-Pfad und sperre Header und Footer, um zu verhindern, dass sie abgeschnitten werden.
          `},justify:{minimal:"Ausrichtung auf Hauptachse",full:"Steuert, wie Elemente entlang der Hauptachse (abhängig von der Flex-Richtung) verteilt werden. Start, Center, End oder mit Abstand."},alignItems:{minimal:"Ausrichtung auf Querachse",full:"Richtet Elemente entlang der Querachse (senkrecht zur Flex-Richtung) aus. Steuert vertikale Ausrichtung bei Rows und horizontale bei Columns."},alignContent:{minimal:"Mehrzeilige Ausrichtung",full:"Steuert die Ausrichtung mehrerer Flex-Zeilen. Funktioniert nur, wenn Wrap aktiviert ist und mehrere Zeilen vorhanden sind."},gap:{minimal:"Gleichmäßiger Abstand",full:"Legt einen gleichmäßigen Abstand zwischen Elementen fest, sowohl für Zeilen als auch für Spalten."},rowGap:{minimal:"Vertikaler Abstand",full:"Steuert den Abstand zwischen Zeilen von Elementen. Wirksam bei Umbruch oder bei Verwendung der Spaltenrichtung."},columnGap:{minimal:"Horizontaler Abstand",full:"Steuert den Abstand zwischen Spalten von Elementen. Wirksam bei Layouts mit Reihenrichtung."},directionMatrix:{minimal:"Richtung, Ausrichtung und Abstände",full:`
Diese Steuerung kombiniert Richtung, Ausrichtung und Abstände in einer einzigen Layout-Matrix.

RICHTUNG
- Äußere Buttons setzen die Flex-Richtung:
  Row / Column / Reverse-Varianten
- Bestimmt die Hauptachse des Layouts

MATRIX
- Das zentrale Grid steuert die Ausrichtung:
  justify-content (Hauptachse)
  align-items (Querachse)
- Klick auf eine Zelle positioniert die Elemente

ZUSÄTZLICHE OPTIONEN
- Between / Around: verteilt den Platz entlang der Hauptachse
- Stretch: lässt Elemente die Querachse ausfüllen

ABSTAND
- Linker Slider: Zeilenabstand (vertikal)
- Unterer Slider: Spaltenabstand (horizontal)

TIPP
Betrachte dies als visuellen Flexbox-Controller: Richtung bestimmt den Fluss, die Matrix die Ausrichtung und die Abstände den Zwischenraum.
`}}},grid:{labels:{repeatMode:"Wiederholungsmodus",minmax:"Min / Max",add:"Hinzufügen",addSecondary:"Hinzufügen (sekundär)",row:"Zeile",column:"Spalte",rows:"Zeilen",columns:"Spalten",template:"Template",auto:"Auto",justifyItems:"Justify Items",justifyContent:"Justify Content",itemAlignmentGap:"Element-Ausrichtung / Abstand",colStart:"Spaltenstart",colEnd:"Spaltenende",rowStart:"Zeilenstart",rowEnd:"Zeilenende",justifySelf:"Justify Self",alignSelf:"Align Self"},tooltips:{childMatrix:{minimal:"Position und Ausrichtung",full:`
Steuert die Platzierung und Ausrichtung eines Grid-Elements.

SPALTEN / ZEILEN
- Start / Ende definieren den Bereich im Grid
- +/- verschiebt den Bereich
- Slider zur visuellen Anpassung

SELF MATRIX
- Mittlere Matrix steuert justify-self + align-self
- Jede Zelle = Position innerhalb des Bereichs

AUTO
- Übernimmt die Ausrichtung vom Container

STRETCH
- Füllt den verfügbaren Platz in diese Richtung

TIPP
Verwende die Bereiche für Position und die Matrix für Ausrichtung.
`},columnSpan:{minimal:"Spaltenbereich",full:`
Definiert, wo das Element über Spalten beginnt und endet.

- Start: Spaltenlinie, an der das Element beginnt
- Ende: Spaltenlinie, an der es endet

Beispiel:
1 → 3 überspannt 2 Spalten

TIPP
Steuert Breite und Position im Grid.
`},rowSpan:{minimal:"Zeilenbereich",full:`
Definiert, wo das Element über Zeilen beginnt und endet.

- Start: Zeilenlinie, an der das Element beginnt
- Ende: Zeilenlinie, an der es endet

Beispiel:
1 → 3 überspannt 2 Zeilen

TIPP
Steuert Höhe und vertikale Position.
`},justifySelf:{minimal:"Horizontale Ausrichtung",full:`
Richtet das Element innerhalb seiner Grid-Zelle horizontal aus.

- Überschreibt justify-items des Containers
- Gilt nur für dieses Element

TIPP
Für feine Anpassung einzelner Elemente.
`},alignSelf:{minimal:"Vertikale Ausrichtung",full:`
Richtet das Element innerhalb seiner Grid-Zelle vertikal aus.

- Überschreibt align-items des Containers
- Gilt nur für dieses Element

TIPP
Nützlich, wenn ein Element anders positioniert werden soll.
`},itemAlignmentGap:{minimal:"Ausrichtung und Abstände steuern",full:`
Diese Matrix steuert, wie Elemente innerhalb ihrer Grid-Zellen positioniert werden.

MATRIX
- Jede Zelle steht für eine Ausrichtung:
  oben / mitte / unten (vertikal)
  links / mitte / rechts (horizontal)
- Ein Klick setzt gleichzeitig align-items und justify-items

STRETCH
- V Stretch: Elemente füllen die Zellhöhe
- H Stretch: Elemente füllen die Zellbreite

ABSTAND
- Rechter Slider: Zeilenabstand (vertikal)
- Unterer Slider: Spaltenabstand (horizontal)

TIPP
Nutze die Matrix für die Positionierung und die Abstände für den Raum zwischen Elementen.
`},justifyItems:{minimal:"Inline-Achsen-Ausrichtung",full:"Richtet Elemente innerhalb ihrer Grid-Zellen entlang der Inline-Achse aus. Steuert meist die horizontale Ausrichtung."},justifyContent:{minimal:"Track-Verteilung",full:"Steuert, wie das gesamte Grid entlang der Inline-Achse verteilt wird, wenn zusätzlicher Platz vorhanden ist. Beeinflusst den Abstand zwischen Tracks, nicht einzelne Elemente."},secondaryAxis:{minimal:"Nebenachsen-Tracks",full:"Steuert die Tracks auf der Nebenachse (entgegengesetzt zur Hauptachse). Diese können entweder manuell definiert (Template) oder automatisch erzeugt (Auto) werden."},autoSize:{minimal:"Auto-Track-Größe",full:"Definiert die Größe automatisch erzeugter Tracks. Gilt für alle impliziten Zeilen oder Spalten im Grid."},autoUnit:{minimal:"Auto-Track-Einheit",full:"Definiert die Einheit für automatisch erzeugte Track-Größen (px, fr, %, usw.)."},add:{minimal:"Track auf Hauptachse hinzufügen",full:"Fügt einen neuen Track auf der Hauptachse hinzu. Entspricht der aktuellen Flow-Richtung (Spalten im Row-Modus, Zeilen im Column-Modus)."},addSecondary:{minimal:"Track auf Nebenachse hinzufügen",full:"Fügt einen neuen Track auf der Nebenachse hinzu. Dies ist die entgegengesetzte Richtung der Hauptachse und nur verfügbar, wenn Auto-Tracks deaktiviert sind."},flow:{minimal:"Hauptlayout-Richtung",full:"Bestimmt, wie Elemente im Grid angeordnet werden. Row = Elemente füllen zuerst Zeilen (von links nach rechts). Column = Elemente füllen zuerst Spalten (von oben nach unten)."},primaryAxis:{minimal:"Primäre Achse",full:"Definiert die Hauptachse, die bearbeitet wird. Bei Row steuerst du die Spalten. Bei Column steuerst du die Zeilen."},repeatMode:{minimal:"Track-Erzeugungsmodus",full:`
Definiert, wie Tracks (Zeilen/Spalten) erzeugt werden.

REPEAT
Erzeugt Tracks automatisch anhand eines Musters.
Funktioniert mit:
- fester Anzahl (z. B. 3 Spalten)

CUSTOM
Erlaubt das manuelle Festlegen jeder Track-Größe.
Beispiel:
100px 1fr 2fr

WANN VERWENDEN
Verwende Repeat für responsive Layouts und dynamische Inhalte.
Verwende Custom für präzise, feste Layouts.
`},minmax:{minimal:"Flexible Track-Größe",full:`
Aktiviert das minmax()-Verhalten für Tracks.

AUS
Tracks verwenden feste Größen oder Fraktionen.
Beispiel:
repeat(3, 1fr)

AN
Tracks werden flexibel mit Mindest- und Maximalwerten.
Beispiel:
repeat(auto-fit, minmax(200px, 1fr))

WAS ES MACHT
- Ermöglicht Schrumpfen und Wachsen von Tracks
- Verhindert, dass Elemente zu klein werden

VORAUSSETZUNG
Min/Max muss aktiviert sein, um auto-fit oder auto-fill zu nutzen.
`},auto:{minimal:"Auto-fit vs Auto-fill Verhalten",full:`
AUTO-FIT (empfohlen)
| Element | Element |
→ Leere Spalten werden entfernt
→ Elemente dehnen sich aus und füllen den verfügbaren Platz

Beispiel:
Der Container hat Platz für 5 Spalten, aber es gibt nur 2 Elemente

auto-fit:
|-----------Element-----------|-----------Element-----------|
|---Spalte---|---Spalte---|---Spalte---|---Spalte---|

AUTO-FILL
| Element | Element | Spalte | Spalte | Spalte |
→ Leere Spalten bleiben bestehen
→ Elemente dehnen sich NICHT aus

Beispiel:
Der Container hat Platz für 5 Spalten, aber es gibt nur 2 Elemente

auto-fill:
|--Element--|--Element--|  leer  |  leer  |  leer  |

WANN SIE GLEICH AUSSEHEN
Wenn alle Spalten gefüllt sind (genug Elemente vorhanden), verhalten sich beide identisch.

TIPP
Verwende auto-fit für responsive Layouts.
Verwende auto-fill nur, wenn eine feste Spaltenstruktur benötigt wird.
`},repeatCount:{minimal:"Anzahl der Tracks",full:`
Definiert, wie viele Tracks (Zeilen oder Spalten) bei Verwendung von Repeat mit fester Anzahl erzeugt werden.

Beispiel:
repeat(3, 1fr)
→ Erstellt 3 gleich große Spalten

TIPP
Verwende dies für einfache, feste Grid-Layouts.
`},size:{minimal:"Track-Größe",full:`
Definiert die Größe jedes Tracks, wenn Min/Max deaktiviert ist.

Beispiele:
100px → feste Größe
1fr → flexible Größe (teilt verfügbaren Platz)

TIPP
Verwende fr für flexible Layouts und px für feste Layouts.
`},unit:{minimal:"Einheit",full:`
Definiert die Einheit für die Track-Größe.

Gängige Einheiten:
- px → feste Größe
- fr → flexibler Anteil am verfügbaren Platz
- % → relativ zum Container

TIPP
Verwende fr für responsive Layouts.
`},minSize:{minimal:"Minimale Größe",full:`
Definiert die minimale Größe eines Tracks, wenn Min/Max aktiviert ist.

Beispiel:
minmax(200px, 1fr)
→ Track wird nie kleiner als 200px

TIPP
Verhindert, dass Inhalte zu klein werden.
`},minUnit:{minimal:"Minimale Einheit",full:`
Definiert die Einheit für die minimale Track-Größe.

Gängige Einheiten:
- px → feste Mindestgröße
- % → relative Mindestgröße

TIPP
Verwende px für eine feste Mindestgröße.
`},maxSize:{minimal:"Maximale Größe",full:`
Definiert die maximale Größe eines Tracks im festen Min/Max-Modus.

Beispiel:
minmax(200px, 400px)
→ Track wächst maximal bis 400px

TIPP
Begrenzt das Wachstum in kontrollierten Layouts.
`},maxUnit:{minimal:"Maximale Einheit",full:`
Definiert die Einheit für die maximale Track-Größe.

Gängige Einheiten:
- px → feste Maximalgröße
- fr → flexible Maximalgröße (füllt restlichen Platz)

TIPP
Verwende 1fr für flexible Expansion.
`},autoMax:{minimal:"Automatisches Maximum (1fr)",full:`
Im auto-fit / auto-fill Modus ist das Maximum fest auf 1fr gesetzt.

Das bedeutet:
- Tracks füllen den verfügbaren Platz
- Der Maximalwert kann nicht manuell geändert werden

Beispiel:
minmax(200px, 1fr)

TIPP
Dies ist notwendig für responsive Auto-Layouts.
`}}},presets:{labels:{create:"Vorlagen",createButton:"Erstellen",editButton:"Bearbeiten",saveButton:"Speichern"},tooltips:{create:{minimal:"Wiederverwendbare Layout-Presets erstellen und verwalten",full:`
Presets ermöglichen es, wiederverwendbare Layout- und Inhaltsblöcke zu speichern.

ERSTELLEN
- Startet ein neues Preset von Grund auf

BEARBEITEN
- Öffnet das ausgewählte Preset zur Bearbeitung

SPEICHERN
- Wandelt die aktuelle Auswahl in ein wiederverwendbares Preset um

ANWENDUNGSFÄLLE
- Wiederverwendbare Abschnitte (Hero, Karten, Grids)
- Produktlisten-Vorlagen
- Konsistente Designmuster

TIPP
Verwende Presets, um identische Strukturen nicht immer neu erstellen zu müssen.
`}}},injectChild:{tooltips:{minimal:"Dieser Container hat eine Breite und Höhe von 0, da er keinen Inhalt enthält. Klicken Sie, um den Container auszuwählen und Elemente hinzuzufügen.",full:`Dieser Container enthält derzeit keinen Inhalt, weshalb er eine Breite und Höhe von 0 hat. Um mit dem Aufbau Ihres Layouts zu beginnen, klicken Sie auf diesen Container, um ihn auszuwählen. Nach der Auswahl können Sie den Layout-Inspektor verwenden, um neue Elemente innerhalb dieses Containers hinzuzufügen, wie z. B. Text, Bilder, Schaltflächen oder sogar verschachtelte Container für komplexere Strukturen. Dieser Platzhalter soll Ihnen helfen, leere Container zu erkennen und Sie dazu ermutigen, sie mit Inhalten zu füllen, um Ihr gewünschtes Layout zu erstellen.
`}}}},Ri={en_US:Ni,de_DE:Pi},Oi=On(async({app:e})=>{let t="en_US";t=(await Dn(()=>import("./index-CqP4eCeb.js").then(l=>l.k),__vite__mapDeps([0,1]))).runtimeLocale;const n=_i({locale:t,messages:Ri});e.use(n)});export{Oi as default};
