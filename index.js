import{S as h,i as A}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="47527494-043e5fa64e78cd3667b900e8d",d={key:u,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function m(){const s=`https://pixabay.com/api/?${new URLSearchParams(d)}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgBrZQ9UsMwEIXXQoZhcgCocU6RNKlygPTOKUhPDz00UOBbpMenwFzBAzMUJMGOVhllFHlXUuK8xh57/T6t9yepJ5MWCKX5HC7zHGK0Kt5hXRTkO+kz35QlNNUn+CSyTMXO9T0Fkaz5cgl/T48QpfsFC5G9zZVMLAWRfc1DEHkOcx9E+syxgE1VeU3dGBciTLdQ5tfPLyo7vlXxcBiDsW4mm/JDQwQ+oFoRT4UpYhAFMZmv1QxQWZpn5BwY4QDZ6ZrC2eYrZsCMvAAKApBEm0cBKEisOUpApFrmPqSoDOx/vvtF/O45GsAVNBYiTzHnuosFiLus82K3hvlusSH/eq1XzvdDfU1+X9/a9IyrAnWl1recTvXhLhY/3w+JKlw6m4G4udWnMWrrGkJyY2xzzFza6ZqVcOpGdc1R+yL3hVDmB4A+EM68A+hABgNovkJFHoIcjdhuI+fgADIeQ0i+3bQFnGgNCyU078wAAAAASUVORK5CYII=",f=new h(".gallery-link",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".loader"),l=document.querySelector(".gallery");c.style.display="none";function g(s){if(!s.hits.length)A.show({iconUrl:p,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const o=s.hits.map(t=>`<li class="gallery-item">
				<a class="gallery-link" href="${t.largeImageURL}" >
					<img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/>
				</a>
				<div class="image-description">
					<div class="decsription-item">
						<h3>Likes</h3>
						<p> ${t.likes}</p>
					</div>
					<div class="decsription-item">
						<h3>Views</h3>
						<p> ${t.views}</p>
					</div>
					<div class="decsription-item">
						<h3>Comments</h3>
						<p> ${t.comments}</p>
					</div>
					<div class="decsription-item">
						<h3>Downloads</h3>
						<p> ${t.downloads}</p>
					</div>
				</div>
			</li>`).join(`

`);l.innerHTML=o,f.refresh()}c.style.display="none"}const n=document.querySelector(".search-form");n.addEventListener("submit",s=>{s.preventDefault();const o=n.elements.searchInput.value.trim();o?(c.style.display="block",l.innerHTML="",d.q=o,m().then(t=>g(t)).catch(t=>console.log(t)),n.reset()):(l.innerHTML="",setTimeout(()=>{A.show({iconUrl:p,message:"Please enter what you want to find!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})},200))});
//# sourceMappingURL=index.js.map
