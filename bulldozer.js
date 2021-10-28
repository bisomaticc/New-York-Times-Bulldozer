// ==UserScript==
// @name         New York Times Bulldozer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bypasses New York Times paywall & removes all ads.
// @author       GSRHackZ
// @match        https://www.nytimes.com/*
// @icon         https://www.google.com/s2/favicons?domain=nytimes.com
// @grant        none
// ==/UserScript==


function unlockArticle(){
    setTimeout(()=>{
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        let story = document.getElementById("story"),
            all = document.body.innerHTML,
            text = story.innerText,
            html = story.innerHTML,
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
                        showPics();
                    }
                    else{
                        clearInterval(unlock);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setTimeout(()=>{
                            alert("News article unlocked successfully! 🔓");
                        },500)
                    }
                }
            },100);
    },500)
    // More news pages coming soon....
}

function removeTrash(){
    let bottom = document.getElementById("bottom-wrapper"),
        top = document.getElementById("top-wrapper"),
        sub = document.getElementById("masthead-bar-one");
    setInterval(()=>{
        let ads = document.getElementsByClassName("ads");
        let others = document.getElementsByClassName("ad");
        for(let i=0;i<ads.length;i++){
            ads[0].remove();
        }
        for(let i=0;i<others.length;i++){
            others[0].remove();
        }
    },100)
    bottom.remove();
    top.remove();
    sub.remove();
}

function showPics(){
    let pics = document.getElementsByTagName("picture");
    for(let i=0;i<pics.length;i++){
        pics[i].style.opacity="100";
    }
}

unlockArticle();
