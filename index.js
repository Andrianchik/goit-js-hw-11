import{a as u,S as h,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const m="47527494-043e5fa64e78cd3667b900e8d",g="https://pixabay.com/api/",f={key:m,image_type:"photo",orientation:"horizontal",safesearch:!0};async function y(s){var t;try{return(await u.get(g,{params:{...f,q:s}})).data.hits}catch(e){throw new Error(`Failed to fetch images: ${((t=e.response)==null?void 0:t.status)||e.message}`)}}const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgBrZQ9UsMwEIXXQoZhcgCocU6RNKlygPTOKUhPDz00UOBbpMenwFzBAzMUJMGOVhllFHlXUuK8xh57/T6t9yepJ5MWCKX5HC7zHGK0Kt5hXRTkO+kz35QlNNUn+CSyTMXO9T0Fkaz5cgl/T48QpfsFC5G9zZVMLAWRfc1DEHkOcx9E+syxgE1VeU3dGBciTLdQ5tfPLyo7vlXxcBiDsW4mm/JDQwQ+oFoRT4UpYhAFMZmv1QxQWZpn5BwY4QDZ6ZrC2eYrZsCMvAAKApBEm0cBKEisOUpApFrmPqSoDOx/vvtF/O45GsAVNBYiTzHnuosFiLus82K3hvlusSH/eq1XzvdDfU1+X9/a9IyrAnWl1recTvXhLhY/3w+JKlw6m4G4udWnMWrrGkJyY2xzzFza6ZqVcOpGdc1R+yL3hVDmB4A+EM68A+hABgNovkJFHoIcjdhuI+fgADIeQ0i+3bQFnGgNCyU078wAAAAASUVORK5CYII=",w=new h(".gallery-link",{captionsData:"alt",captionDelay:250}),A=document.querySelector(".loader"),p=document.querySelector(".gallery");function F(){A.style.display="block"}function v(){A.style.display="none"}function d(){p.innerHTML=""}function U(s){if(!s.length){a.show({iconUrl:c,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}const t=s.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="image-description">
        <div class="description-item">
          <h3>Likes</h3>
          <p>${e.likes}</p>
        </div>
        <div class="description-item">
          <h3>Views</h3>
          <p>${e.views}</p>
        </div>
        <div class="description-item">
          <h3>Comments</h3>
          <p>${e.comments}</p>
        </div>
        <div class="description-item">
          <h3>Downloads</h3>
          <p>${e.downloads}</p>
        </div>
      </div>
    </li>`).join(`
`);p.innerHTML=t,w.refresh()}const n=document.querySelector(".search-form");n.addEventListener("submit",async s=>{s.preventDefault();const t=n.elements.searchInput.value.trim();if(!t){d(),a.show({iconUrl:c,message:"Please enter what you want to find!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}F(),d();try{const e=await y(t);U(e)}catch(e){a.show({iconUrl:c,message:"Something went wrong. Please try again later.",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}),console.error(e)}finally{v(),n.reset()}});
//# sourceMappingURL=index.js.map
