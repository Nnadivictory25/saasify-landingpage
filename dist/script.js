"use strict";var body=document.querySelector("body"),toggleMenu=document.querySelectorAll(".toggle-menu"),menu=document.querySelector(".mobileNav"),openIcon=document.querySelector("#open"),closeIcon=document.querySelector("#close"),headerText=document.querySelector(".animate-text"),h2ctn=document.querySelector(".h2Ctn");toggleMenu.forEach((function(e){e.addEventListener("click",(function(){menu.classList.contains("fade-in")&&body.classList.contains("no-scroll")?(menu.classList.remove("fade-in"),body.classList.remove("no-scroll"),menu.classList.add("fade-out"),closeIcon.classList.add("d-none"),openIcon.classList.remove("d-none")):(menu.classList.remove("fade-out"),menu.classList.add("fade-in"),body.classList.add("no-scroll"),closeIcon.classList.remove("d-none"),openIcon.classList.add("d-none"))}))}));var root=document.documentElement,marqueeElementsDisplayed=getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"),marqueeContent=document.querySelector("ul.marquee-content");if(screen.width<=639){root.style.setProperty("--marquee-elements",marqueeContent.children.length);for(var i=0;i<marqueeElementsDisplayed;i++)marqueeContent.appendChild(marqueeContent.children[i].cloneNode(!0))}var wordArray=["analysis","tracking","management"],time=1e4,displayWords=function(e){h2ctn.innerHTML="",h2ctn.innerHTML+='\n    <h2 class="flex flex-col items-center text-3xl font-bold heroSection__header">The fastest way for startups to do any <span class="animate-text fade-in-text">'.concat(e[0],"</span></h2>\n    "),setTimeout((function(){h2ctn.innerHTML="",h2ctn.innerHTML+='\n        <h2 class="flex flex-col items-center text-3xl font-bold heroSection__header">The fastest way for startups to do any <span class="animate-text fade-in-text">'.concat(e[1],"</span></h2>\n        ")}),5e3),setTimeout((function(){h2ctn.innerHTML="",h2ctn.innerHTML+='\n        <h2 class="flex flex-col items-center text-3xl font-bold heroSection__header">The fastest way for startups to do any <span class="animate-text fade-in-text">'.concat(e[2],"</span></h2>\n        ")}),1e4)};displayWords(wordArray),setInterval((function(){displayWords(wordArray)}),1.6*time);
//# sourceMappingURL=script.js.map