window.onload=function(){
//====================================================슬라이드01

setInterval(function() {
    let pan01 = document.querySelector(".pan01");  
    let firstChild = pan01.querySelector("div:first-child");

    // 좌측이동 ============================================================좌측으로 부드럽게 이동하기
    pan01.setAttribute("style", "left: -587px; transition:3s"); 
    
   
    // 마지막 이미지 뒤에 첫번째 그림 붙이기
    setTimeout(function() {
        pan01.setAttribute("style","left = 0px;"); 
        pan01.appendChild(firstChild); 
    }, 1000);
    
    
    let pan02=document.querySelector(".news_pan01");
    let pan02firstchild=pan02.querySelector("div:first-child");


    //======좌측이등======
    pan02.setAttribute("style", "left: -587px; transition:3s"); 
    
   
    // 마지막 이미지 뒤에 첫번째 그림 붙이기
    setTimeout(function() {
        pan02.setAttribute("style","left = 0px;"); 
        pan02.appendChild(pan02firstchild); 
    }, 1000);

    
}, 3000);





//======info : hover

let info = document.getElementsByClassName("info_div");
let arr=document.getElementsByClassName("arr");

for (let i = 0; i < info.length; i++) {
    info[i].addEventListener("mouseover", function() {
        this.setAttribute("style", "box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.7);");
        arr[i].setAttribute("style","transform: translateX(5px); transition:.3s");
    });
    info[i].addEventListener("mouseout", function() {
        this.removeAttribute("style");
        arr[i].setAttribute("style","transform: translateX(0px); transition:.3s");
    });
}


//=======news : hover
let news_01 = document.getElementsByClassName("news_01")[0];
let news_img = document.querySelector(".news_01>a>img");

const news = [news_01,news_img];

for (let i = 0; i < news.length; i++) {
 
    news[i].addEventListener("mouseover", function() {        
        this.setAttribute("style", "box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.7);");
       
    
    });  

    news[i].addEventListener("mouseout", function() {
        this.removeAttribute("style");
      
        
        
    });


    if (news_img) {
        news_img.addEventListener("mouseover", function(){
            this.setAttribute("style", "scale:105%; ");
    
        });

        news_img.addEventListener("mouseout", function(){
            this.removeAttribute("style");
    
        });
        
    };

};


   
//============================================================sns : hover
let sns=document.getElementsByClassName("snslink");

for(let i=0; i<sns.length; i++){
    sns[i].addEventListener("mouseover", function(){
        this.setAttribute("style","transform: translateY(-7px); transition:.3s;")
    });

    sns[i].addEventListener("mouseout", function(){
        this.setAttribute("style","transform: translateY(0px); transition:.3s;")
    });
};

let snsRight=document.getElementsByClassName("sns_right");
let snsHover=document.getElementsByClassName("snshover");
snsRight[0].addEventListener("mouseover", function(){
    snsHover[0].setAttribute("style","display:block;" );
});

snsRight[0].addEventListener("mouseout", function(){
    snsHover[0].setAttribute("style","display:none;" );
});


 
  









//=================================================사이트
let site=document.getElementsByClassName("name");
let group=document.getElementsByClassName("site_box_00");

function displaynone() {
    for (let j = 0; j < group.length; j++) {
        group[j].setAttribute("style","display:none;");
    }
}

for(let i=0; i<site.length; i++){
    site[i].addEventListener("mouseover", function(){
        site[i].setAttribute("style","color:red; border-bottom:4px solid red; font-size:bold;");
    
    });
    site[i].addEventListener("click",function(){
        displaynone();
        group[i].setAttribute("style","display:block;");
        
    });
    

    
    site[i].addEventListener("mouseout", function(){
        site[i].removeAttribute("style");
    });

};

let linkmore=document.getElementsByClassName("link_more");

    for(let i=0; i<linkmore.length; i++){
       linkmore[i].addEventListener("mouseover", function(){
            linkmore[i].setAttribute("style","transform:rotate(90deg);");
            
        });


        linkmore[i].addEventListener("mouseout", function(){
            linkmore[i].removeAttribute("style");
        });
    
    };

    
	//================================================================== sns
   
	
};    // 이 아래에는 아무것도 적으면 안됨

