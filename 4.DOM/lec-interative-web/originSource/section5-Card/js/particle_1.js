

window.onload = function(){
    var body = document.querySelector("body");
    var _buttonAll = document.querySelectorAll("button");
    var pageNum = 0;
    var windowWidth, windowHeight;
    var bgColorArr = ["#2eccc4", "#ea204f", "#20a9ea"];
    
    for( var i = 0; i < _buttonAll.length; i++ ){
        (function(idx) {
            _buttonAll[idx].onclick = function() {
                pageNum = idx;
                motionSetting();
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



    //textItem 100개 만들기
    var item;
    var section = document.querySelector("section");

    // <div class="textItem">  </div>
    var totalNum = 100;

    for(i=0; i< totalNum; i++) {
        item = document.createElement("div");
        item.setAttribute("class", "textItem");
        item.style.top = window.innerHeight / 2 + "px";
        item.style.left = window.innerWidth / 2 + "px";
        item.innerHTML = i;
        section.appendChild(item);
    }
    var _textItem = document.querySelectorAll(".textItem");

    
    
    function motionSetting(){
        //배경 컬러 변경
        body.style.background = bgColorArr[pageNum];

        for(var i=0; i<_buttonAll.length; i++){
             //전체 버튼 비활성
             if(pageNum == i){
                //버튼 활성
                _buttonAll[pageNum].classList.add("active");
             }else{
                 _buttonAll[i].classList.remove("active");
             }
        }


        //중복된 트윈 킬
        TweenMax.killTweensOf(_textItem);
        
        if(pageNum == 0){
            //가운데 정렬
            _textItem.forEach(function(item, i){
                // TweenMax.killTweensOf(item);
                TweenMax.to(item, 1, {
                    top : Math.random() * (windowHeight - 150) + 60,
                    left : Math.random() * (windowWidth - 80) + 20, 
                    rotationX :  0, 
                    rotationY : 0, 
                    rotationZ : 0,
                    autoAlpha :  "random(.1,1)",
                    scale : .5,
                    ease : Power4.easenOut, 
                    delay : "random(0,.5)"
                })
            })
        }else if(pageNum == 1){
            //랜덤
            _textItem.forEach(function(item, i){
                var scaleNum = Math.random() * 3;
                // console.log(scaleNum)
                TweenMax.to(item, 1, {
                    top : Math.random() * (windowHeight - 250) + 100,
                    left : Math.random() * (windowWidth - 200) + 80, 
                    rotationX :  "random(-60,60)", 
                    rotationY : "random(-60,60)", 
                    rotationZ : "random(-90,90)",
                    autoAlpha :  scaleNum / 3,
                    scale :  scaleNum, //"random(.1,2.5)",
                    //webkitFilter:"blur(" + scaleNum / 3 + "px)",
                    ease : Power4.easeInOut, 
                    delay : "random(0,.5)"
                })
            })
        }else if(pageNum == 2){
            //여러분이 해보세요
            _textItem.forEach(function(item, i){
                TweenMax.to(item, 1, {
                    top : windowHeight / 2 + Math.sin( i / 3 ) * 40 ,
                    left : i * 20, //windowWidth / 2 ,
                    rotationX : 0,
                    rotationY : 0,
                    rotationZ : 0,
                    autoAlpha :  1,
                    scale : .5,
                    ease : Power4.easeInOut, 
                    delay : i* .02 //"random(0,.5)"
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
        //console.log(windowWidth , windowHeight)
        motionSetting();
    }

    resize();

}


