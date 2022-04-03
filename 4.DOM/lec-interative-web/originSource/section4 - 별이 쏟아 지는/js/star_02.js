

//https://www.youtube.com/watch?v=lyf7UkkcI1I
//[스타벅스 현대카드] 별이 쏟아지는, 스타벅스 현대카드]

//https://cdnjs.com/libraries/gsap
//트윈맥스 cdn

window.onload = function(){

    var starBg = document.querySelector(".starBg");
    var title = document.querySelector(".title");
    var topBtn = document.querySelector(".topBtn");
    
    //스크롤 이벤트
    window.addEventListener("scroll", function(event){
        // scrollTop = document.documentElement.scrollTop;
        var scroll = this.scrollY;
        starBg.style.transform = "translateY("+ -scroll/3 +"px)";
        title.style.transform = "translateY("+ scroll/1.7 +"px)";
    });

    //텍스트 모션
    for(var i=0; i < title.querySelectorAll('div').length; i++){
        
        var _text = title.querySelectorAll('div')[i];

        TweenMax.from( _text , 1, {
            autoAlpha:0,
            // scale:4,
            // rotate: Math.random()*360,
            delay : Math.random()*1,
            ease:Power3.easeInOut 
        });
    }

    
    //스크롤 이동하는 3가지 방법
    // setTimeout(function(){
    //     window.scrollTo({
    //         top: document.querySelector('.bottom').offsetTop
    //         ,behavior: 'smooth'
    //     });
    //     // document.querySelector('.bottom').scrollIntoView({ behavior: 'smooth' });
    // }, 2000)

    TweenMax.to( window, 2, {
        scrollTo:{
            y: ".bottom"
            //autoKill: true
        }, 
        delay : 1.7,
        ease:Power4.easeInOut 
    });
    
    //하단 영역 커지는 것
    TweenMax.from( ".bottom", 2.5, {
        scale : .7,
        y:100,
        delay : 2.2,
        ease:Power3.easeInOut 
    });

    topBtn.addEventListener("click", function(){
        TweenMax.to( window, 1.5, {
            scrollTo:{
                y: 0,
                autoKill: true
            }, 
            ease:Power3.easeInOut 
        });
    })


    // var bgColorArr = ["#85FFBD", "#FFFB7D", "#E0C3FC", "#00DBDE"];
    // var cardItem = document.querySelector(".contWrap").querySelectorAll("li");

    // for( var i = 0; i < cardItem.length; i++ ){
    //     (function(idx) {
    //         cardItem[idx].onclick = function() {
    //             // alert(idx)
    //             document.getElementsByTagName("body")[0].style.background = bgColorArr[idx];
    //         }
    //     })(i);
        
    // }

}


