!function(){var e=document.getElementsByName("email")[0],t=document.getElementsByName("message")[0],a=document.getElementsByTagName("button")[0],l="feedback-form-state",n=JSON.parse(localStorage.getItem(l));function o(){var a={email:e.value,message:t.value};localStorage.setItem(l,JSON.stringify(a))}e.value=(null==n?void 0:n.email)||"",t.value=(null==n?void 0:n.message)||"",e.addEventListener("input",o),t.addEventListener("input",o),a.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem(l));console.log(e),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.0136afcb.js.map
