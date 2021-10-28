// ==UserScript==
// @name         New York Times Bulldozer
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Bypasses New York Times paywall & removes all ads.
// @author       GSRHackZ
// @match        https://www.nytimes.com/*
// @icon         https://www.google.com/s2/favicons?domain=nytimes.com
// @grant        none
// ==/UserScript==


function unlockArticle(){
    if(location.href.replaceAll("/","")!==location.origin.replaceAll("/","")){
        setTimeout(()=>{
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
            let story,
                all = document.body.innerHTML,
                done = false,
                paywall,
                alerted = false,
                unlock = setInterval(()=>{
                    if(document.getElementById("gateway-content")!==undefined){
                        paywall = document.getElementById("gateway-content");
                        if(!done){
                            document.body.innerHTML = all;
                            done=true;
                            removeTrash();
                        }
                        else{
                            clearInterval(unlock);
                            showPics();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setTimeout(()=>{
                                alert("News article unlocked and ads removed successfully! 🔓");
                            },500)
                        }
                    }
                },100);
        },500)
        // More news pages coming soon....
    }
}

String.prototype.replaceAll = function(str1, str2, ignore){
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

function removeTrash(){
    let bottom = document.getElementById("bottom-wrapper"),
        top = document.getElementById("top-wrapper"),
        sub = document.getElementById("masthead-bar-one");
    setInterval(()=>{
        let ads = document.getElementsByClassName("ads");
        let others = document.getElementsByClassName("ad");
        let special = document.getElementsByClassName("css-11cg26");
        for(let i=0;i<ads.length;i++){
            ads[0].remove();
        }
        for(let i=0;i<others.length;i++){
            others[0].remove();
        }
        for(let i=0;i<special.length;i++){
            if(special[0].id.includes("ad-")){
                special[0].remove();
            }
        }
    },100)
    bottom.remove()
    top.remove()
    sub.remove()
}

function showPics(){
    setInterval(()=>{
        let pics = document.getElementsByTagName("picture");
        for(let i=0;i<pics.length;i++){
            pics[i].style.opacity="100";
        }
    },1000)
}


unlockArticle();
