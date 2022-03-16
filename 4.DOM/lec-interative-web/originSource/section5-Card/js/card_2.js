

var windowWidth, windowHeight;

window.onload = function(){

    var _cards = document.querySelectorAll(".cardItem");
    var _buttonAll = document.querySelectorAll("button");
    var pageNum = 0;

    // _buttonAll[0].addEventListener('click', function(event) {
    //     pageNum = 0;
    //     cardSetting();
    // })
    // _buttonAll[1].addEventListener('click', function(event) {
    //     pageNum = 1;
    //     cardSetting();
    // })
    // _buttonAll[2].addEventListener('click', function(event) {
    //     pageNum = 2;
    //     cardSetting();
    // })
    // _buttonAll[3].addEventListener('click', function(event) {
    //     pageNum = 3;
    //     cardSetting();
    // })

    for( var i = 0; i < _buttonAll.length; i++ ){
        (function(idx) {
            _buttonAll[idx].onclick = function() {
                //alert(idx);
                pageNum = idx;
                cardSetting();
            }
        })(i);
    }

    TweenMax.from("h1", 1, {
        top : -50,
        autoAlpha : 0,
        ease : Power3.easeOut
    })

    _buttonAll.forEach(function(item, i){
        TweenMax.from(item, .4, {
            top : 100,
            autoAlpha : 0,
            ease : Power3.easeInOut, 
            delay : i * .1 + 1,
        })
    })

    TweenMax.set("section", {perspective: 400});

    function cardSetting(){

        for(var i=0; i<_buttonAll.length; i++){
             //전체 버튼 비활성
            _buttonAll[i].classList.remove("active");
        }
         //버튼 활성
        _buttonAll[pageNum].classList.add("active");

        if(pageNum == 0){
            //가운데 정렬
            _cards.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top : windowHeight / 2 - i * 50,
                    left : windowWidth / 2 + i * 60 - 200,
                    rotationX : 0, 
                    rotationY : 0, 
                    rotationZ : 0,
                    ease : Power4.easeInOut, 
                    delay : i * .15
                })
            })
        }else if(pageNum == 1){
            //랜덤
            _cards.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top : Math.random() * (windowHeight - 300) + 100,
                    left : Math.random() * (windowWidth - 300) + 100, 
                    rotationX : "random(-60,60)", //Math.random()*30 
                    rotationY : "random(-60,60)", 
                    rotationZ : "random(-90,90)",
                    //scale : Math.random() * .6 + .6,
                    ease : Power4.easeInOut, 
                    delay : "random(0,.5)"
                })
            })
        }else if(pageNum == 2){
            _cards.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top : windowHeight / 2 + i * 30 - 100,
                    left : windowWidth / 2 - i * 80 ,
                    rotationX : 0,
                    rotationY : -10 * i,
                    rotationZ : 20 * i,
                    ease : Power4.easeInOut, 
                    delay : i * .15
                })
            })
        }else if(pageNum == 3){
            //여러분이 해보세요
            _cards.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top : 0,
                    left : 0 ,
                    rotationX : 0,
                    rotationY : 0,
                    rotationZ : 0,
                    ease : Power4.easeInOut, 
                    delay : i * .15
                })
            })
        }
    }


    window.addEventListener('resize', function(){
        resize();
    });

    function resize(){
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        cardSetting();
    }

    resize();

}


