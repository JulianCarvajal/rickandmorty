(()=>{"use strict";const a="https://rickandmortyapi.com/api/character/",n=async n=>{const e=n?`${a}${n}`:a;try{const a=await fetch(e);return await a.json()}catch(a){console.log("Fetch Error",a)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",s=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>\n    ',t=()=>{let a=`?name=${document.getElementById("searchInput").value}`;location.href=`#/${a}`},c={"/":async()=>{const a=await n(),e=a.info.prev,s=a.info.next,t=e?`\n        <a href="#/${e.split("/")[5]}" class="Pages__button">\n            <i class="fas fa-chevron-circle-left"></i>\n        </a>`:" ",c=s?`\n        <a href="#/${s.split("/")[5]}" class="Pages__button">\n            <i class="fas fa-chevron-circle-right"></i>\n        </a>`:" ";return`\n    <div class="Characters">\n        ${a.results.map((a=>`\n            <article class="Character-item">\n                <a href="#/${a.id}/">\n                    <img src="${a.image}" alt="${a.name}" />\n                    <h2>${a.name}</h2>\n                </a>\n            </article>\n        `)).join("")}\n    </div>\n\n    <div class="Pages">\n        ${t}${c}\n    </div>\n    `},"/:id":async()=>{const a=e(),s=await n(a);return`\n        <div class="Characters-inner">\n            <article class="Character-image">\n                <img src="${s.image}" alt="${s.name}">\n            </article>\n\n            <article class="Character-card">\n                <h2>${s.name}</h2>\n                <h3>Episodes: <span>${s.episode.length}</span> </h3>\n                <h3>Status: <span>${s.status}</span> </h3>\n                <h3>Species: <span>${s.species}</span> </h3>\n                <h3>Gender: <span>${s.gender}</span> </h3>\n                <h3>Origin: <span>${s.origin.name}</span> </h3>\n                <h3>Last location: <span>${s.location.name}</span> </h3>\n            </article>\n        </div>\n    `},"/pages":async()=>{const a=e(),s=await n(a),t=s.info.prev,c=s.info.next,i=t?`\n        <a href="#/${t.split("/")[5]}" class="Pages__button">\n            <i class="fas fa-chevron-circle-left"></i>\n        </a>`:" ",r=c?`\n        <a href="#/${c.split("/")[5]}" class="Pages__button">\n            <i class="fas fa-chevron-circle-right"></i>\n        </a>`:" ";return`\n\n    <div class="Characters">\n        ${s.results.map((a=>`\n            <article class="Character-item">\n                <a href="#/${a.id}/">\n                    <img src="${a.image}" alt="${a.name}" />\n                    <h2>${a.name}</h2>\n                </a>\n            </article>\n        `)).join("")}\n    </div>\n\n    <div class="Pages">\n        ${i}${r}\n    </div>\n    `},"/contact":"Contact"},i=async()=>{const a=document.getElementById("header"),n=document.getElementById("search"),i=document.getElementById("content"),r=document.getElementById("footer");a.innerHTML=await'\n        <div class="Header-main">\n            <a href="https://juliancarvajal.github.io/rickandmorty/" class="Heder--home">\n                <div class="Header-logo">\n                    <h1>\n                        <figure class="Header-logo">\n                            <img src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png" alt="logo">\n                        </figure>\n                    </h1>\n                </div>\n            </a>\n        </div>\n\n        <section class="Welcome">\n            <h2 class="Welcome--title">\n                Bienvenido!!!\n            </h2>\n            <p class="Welcome--text">\n                Esta es una web para los amantes de Rick y Morty o aquellos que simplemente quieren conocer más acerca de este interesante multiverso lleno de comedia, paradojas y sobre todo mucha ciencia.\n            </p>\n            <p class="Welcome--text second">\n                Aquí encontrarás una lista completa de todos los personajes de la serie y podrás ver sus principales características, además podrás buscar a tu personaje favorito por su nombre y conocer todas sus versiones en el multiverso y su estado actual. Para hacer esto utilicé la API gratuita de Rick and Morty, podrás leer más sobre ella en <a class="Welcome--link" target="_blank" href="https://rickandmortyapi.com/">Rick and Morty API</a>\n            </p>\n        </section>\n    ',n.innerHTML=await'\n        <div class="Search">\n            <label class="Search--content" for="searchContent">\n                <input id="searchInput" type="search" class="search--bar" placeholder="Busca a tu personaje favorito ..." />\n                <button class="search--button" id="searchButton" type="submit" value="Submit">\n                    Buscar\n                </button>\n            </label>\n        </div>\n    ';let o=e(),l=await(a=>"/"===a?"/":a.length<=3?"/:id":"/pages")(o),d=c[l]?c[l]:s;i.innerHTML=await d(),r.innerHTML=await'\n        <section class="Footer-contact">\n            <a href="https://github.com/JulianCarvajal" class="contact-item">\n                <i class="fab fa-github"></i> <span>JulianCarvajal</span>\n            </a>\n            <a href="https://www.linkedin.com/in/julian-carvajal-18bb441a0/" class="contact-item">\n                <i class="fab fa-linkedin"></i> <span>Julian Carvajal</span>\n            </a>\n        </section>\n    ';const h=document.getElementById("searchButton"),p=document.getElementById("searchInput");h.addEventListener("click",t),p.addEventListener("keyup",(({key:a})=>{"Enter"==a&&t()}))};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();