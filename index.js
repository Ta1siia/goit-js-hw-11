import{a as m,S as p,i as a}from"./assets/vendor-Cce4fIue.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="56005358-f66c0c399bd798f5be4683e16",g="https://pixabay.com/api/";function y(i){return m.get(g,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),v=new p(".gallery a");function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`<li class="gallery-item">
      <a href="${n}">
        <img src="${o}" alt="${e}">
      </a>
      <div class="image-info">
          <div class="image-info-item">
      <h3>Likes</h3>
      <p>${t}</p>
    </div>
    <div class="image-info-item">
      <h3>Views</h3>
      <p>${s}</p>
    </div>
    <div class="image-info-item">
      <h3>Comments</h3>
      <p>${u}</p>
    </div>
    <div class="image-info-item">
      <h3>Downloads</h3>
      <p>${f}</p>
    </div>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",r),v.refresh()}function b(){l.innerHTML=""}function S(){d.classList.add("is-visible")}function c(){d.classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();r&&(b(),S(),y(r).then(o=>{c(),o.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(o.hits)}).catch(o=>{c(),a.error({message:"An error occured!",position:"topRight"})}))});
//# sourceMappingURL=index.js.map
