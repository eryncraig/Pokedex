let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(e){"object"==typeof e&&"name"in e&&"detailsUrl"in e?t.push(e):console.log("This is not the correct format for a pokemon.")}function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.weight=e.weight}).catch(function(t){console.error(t)})}function i(t){o(t).then(function(){!function(t){let e=$(".modal-body"),n=$(".modal-title");$(".modal-header"),n.empty(),e.empty();let o=$("<h1>"+t.name+"</h1>"),i=$('<img class="modal-img" style="width:50%">');i.attr("src",t.imageUrl);let l=$("<p>Height: "+t.height+"</p>"),a=$("<p>Weight: "+t.weight+"</p>");n.append(o),e.append(i),e.append(l),e.append(a),$("#pokemon-modal").modal("toggle")}(t)})}return{getAll:function(){return t},add:n,addListItem:function(t){let e=document.querySelector(".pokemon-list"),n=document.createElement("li"),o=document.createElement("button");o.innerText=t.name,o.classList.add("button"),o.classList.add("btn"),o.classList.add("btn-primary"),o.classList.add("col"),n.classList.add("list-item"),n.appendChild(o),n.classList.add("group-list-item"),e.appendChild(n),o.addEventListener("click",function(e){i(t)})},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){let e={name:t.name,detailsUrl:t.url};n(e),console.log(e)})}).catch(function(t){console.error(t)})},loadDetails:o,showDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});