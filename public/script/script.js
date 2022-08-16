(($)=>{

  class Child {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
      this.section8();
      this.footer();
      this.popVideo();
      this.goToTop();
    }

    header(){

      let winW=$(window).width();

      $(window).resize(()=>{
        winW=$(window).width();
        return winW;
      });

      $(window).scroll(()=>{
        winW=$(window).width();

        $('#header').addClass('on');

        if($(window).scrollTop()===0){
          $('#header').removeClass('on');
          $('.sub, .sub-bg').fadeOut(0);
        }
        
      });

      $('.main-btn').on({
        mouseenter:function(){
          $('.sub').fadeOut(0); 
          $('.sub-bg').show().fadeIn(200);
          $('#header').addClass('on');
          $(this).next().fadeIn(200);
        },
        focus:function(){
          $('.sub').fadeOut(0); 
          $('.sub-bg').show().fadeIn(200);
          $('#header').addClass('on');
          $(this).next().fadeIn(200);
        }
      });

      $('#header').on({
        mouseleave:function(){
          $('#header').removeClass('on');
          $('.sub, .sub-bg').fadeOut(0);

          if($(window).scrollTop()>0){
            $('#header').addClass('on');
          }
        },
        focusout:function(){
          $('#header').removeClass('on');
          $('.sub, .sub-bg').fadeOut(0);

          if($(window).scrollTop()>0){
            $('#header').addClass('on');
          }
        }
    });
      
    }
    section1(){

      let cnt1=0;
      let cnt2=0;
      let tCnt=0;
      let setId=null;
      let setId2=null;
      let winW=$(window).width();
      let subW=$('.sub-slide-wrap').width();
      let subSlideW=subW/17;
      let result='';
      let dragStart=null;
      let dragEnd=null;
      let mouseDown=false;
      let touchStart=null;
      let touchEnd=null;
      
      $(window).resize(()=>{
        winW=$(window).width();
        subW=$('.sub-slide-wrap').width();
        subSlideW=subW/17;
        return winW;
      });

      function mainSlide(){
        $('#section1 .slide').removeClass('txt-ani');
        $('#section1 .slide').css({zIndex:1}).stop().animate({opacity:1},0);
        $('#section1 .slide').eq(cnt1).css({zIndex:2}).stop().animate({opacity:1},0).addClass('txt-ani');
        $('#section1 .slide').eq(cnt1===0?6:cnt1+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},500);
        if(cnt1===4){
          $('#header .logo-box, #header .inner-top, #header .inner-bottom').addClass('on');
        }
        else{
          $('#header .logo-box, #header .inner-top, #header .inner-bottom').removeClass('on');
        }
      }

      function subSlide(){
        $('#section1 .sub-slide').removeClass('on');
        $('#section1 .sub-slide-wrap').stop().animate({left:-subSlideW*cnt2},600,function(){
          cnt2>6?cnt2=0:cnt2;
          cnt2<0?cnt2=6:cnt2;
          $('#section1 .sub-slide-wrap').stop().animate({left:-subSlideW*cnt2},0)
        });
        $('#section1 .sub-slide').eq(cnt2+5).addClass('on');
      }
     
      function nextCount(){
        cnt1++;
        cnt2++;
        cnt1>6?cnt1=0:cnt1;
        mainSlide();
        subSlide();
      }

      function prevCount(){
        cnt1--;
        cnt2--;
        cnt1<0?cnt1=6:cnt1;
        mainSlide();
        subSlide();
      }
     
      function autoTimer(){
        setId = setInterval(nextCount,5000);
      }
      autoTimer();

      function pausefn(){

      tCnt=0;

      clearInterval(setId);
      clearInterval(setId2);

        setId2=setInterval(function(){
          tCnt++;  
          if(tCnt>6){ 
            clearInterval(setId); 
            clearInterval(setId2);
            nextCount();
            autoTimer();
          }
        },1000);
      }

      $('.slide-prev-btn').on({
        click:function(){
          if(!$('#section1 .slide').is(':animated')){
            prevCount();
            pausefn();
          }
        }
      });

      $('.slide-next-btn').on({
        click:function(){
          if(!$('#section1 .slide').is(':animated')){
            nextCount();
            pausefn();
          }
        }
      });

      $('#section1 .sub-slide').each((index)=>{
        $('#section1 .sub-slide').eq(index).click(()=>{
          if(!$('#section1 .slide-wrap').is(':animated')){
            cnt2=index-5;
            cnt1=index-5;
            console.log(cnt2,index)
            mainSlide();
            subSlide();
            pausefn();
          }
        });
      })

       //터치 스와이프
      $('#section1 .sub-slide-view').on({
        mousedown:function(e){
          pausefn();

          touchStart=e.clientX;
          dragStart=e.clientX-$('#section1 .sub-slide-wrap').offset().left+110;
          mouseDown=true;
          return;
        },

        mouseup:function(e){
          touchEnd=e.clientX;

          result=touchStart-touchEnd>0?'NEXT':'PREV'

          if(Math.abs(touchStart-touchEnd) > 10){
            if(result==='NEXT'){
              if(!$('#section1 .sub-slide-wrap').is(':animated')){
              nextCount();
              pausefn();
              }
            }
            if(result==='PREV'){
              if(!$('#section1 .sub-slide-wrap').is(':animated')){
              prevCount();
              pausefn();
              }
            }
          }
          mouseDown=false;
        },

        mouseleave:function(e){
          if(!mouseDown) return;
          touchEnd=e.clientX;
           result=touchStart-touchEnd>0?'NEXT':'PREV';
           if(Math.abs(touchStart-touchEnd) > 10){
            if(result==='NEXT'){
              if(!$('#section1 .sub-slide-wrap').is(':animated')){
              nextCount();
              pausefn();
              }
            }
            if(result==='PREV'){
              if(!$('#section1 .sub-slide-wrap').is(':animated')){
              prevCount();
              pausefn();
              }
            }
          }
           mouseDown=false;
         },

        mousemove:function(e){
          if(!mouseDown) return;
          dragEnd=e.clientX;
          $('#section1 .sub-slide-wrap').css({left:dragEnd-dragStart});
          return dragEnd=false;
        }

      });

      // 모바일 터치 이벤트
      $('#section1 .sub-slide-view').on({
        touchstart: function(e){
          pausefn();

          touchStart=e.originalEvent.changedTouches[0].clientX;                        
          dragStart=e.originalEvent.changedTouches[0].clientX-$('#section1 .sub-slide-wrap').offset().left+110;
          mouseDown=true;
          return;
        },

        touchend:function(e){
          touchEnd=e.originalEvent.changedTouches[0].clientX;  
          result=touchStart-touchEnd > 0 ? 'NEXT' : 'PREV';
          if(Math.abs(touchStart-touchEnd) > 10){
            if(result==='NEXT'){
              if(!$('#section1 .sub-slide-wrap').is(':animated')){
                nextCount();
                pausefn();
              }                  
            }
            if(result==='PREV'){
              if(!$('#section1 .sub-slide-wrap').is(':animated')){
                prevCount();
                pausefn();
              }
            }
          }
          mouseDown=false;
        },

        touchmove: function(e){
          if(!mouseDown) return;
          dragEnd=e.originalEvent.changedTouches[0].clientX;
          $('#section1 .sub-slide-wrap').css({left:dragEnd-dragStart});
          return dragEnd=false;
        }
      });

    }
    section2(){

      let winW=$(window).width();
      let sec2Top=$('#section2').offset().top-$(window).height();
      let cnt=0;
      let cols=5
      let slideW=winW/cols;
      let progressbarW=$('.pagination-progressbar').width();
      let barFill=progressbarW/6;
      let result='';
      let dragStart=null;
      let dragEnd=null;
      let mouseDown=false;
      let touchStart=null;
      let touchEnd=null;
      let slideItem=$('#section2 .sec2-slide');
      let slideList=$('#section2 .sec2-slide-wrap');

      $(window).resize(()=>{
        winW=$(window).width();
        slideW=winW/cols;
        resizeImg();
        sec2Slide();
        return winW;
      });

      $(window).scroll(()=>{
        sec2Top=$('#section2').offset().top-$(window).height();
        if($(window).scrollTop()>sec2Top){
          $('#section2 .title-wrap').addClass('title-ani');
          return;
        }
        if($(window).scrollTop()===0){
          cnt=0;
          $('#section2 .sec2-slide-wrap').stop().animate({left:-slideW*cnt},0);
          $('#section2 .title-wrap').removeClass('title-ani');
          return;
        }
      });

      function resizeImg(){

        winW=$(window).width();
        
        if(winW>=1500){
          cols=5;
        }
        else if(winW>=1280){
          cols=4;
        }
        else if(winW>=1024){
          cols=3;
        }
        else if(winW>=600){
          cols=2;
        }

        slideW=winW/cols;
        slideItem.css({width: slideW});
        slideList.css({width: slideW * 9});
      }
      
      function sec2Slide(){
        resizeImg();

        if(winW>=1500){
          if(cnt>5 || cnt < 1){
            $('#section2 .sec2-slide-wrap').stop().animate();
            cnt>5?cnt=5:cnt;
            cnt<1?cnt=0:cnt;
          }
          else {
            $('#section2 .sec2-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo');
          }
        }
        if(winW>=1280){
          if(cnt>6 || cnt < 1){
            $('#section2 .sec2-slide-wrap').stop().animate();
            cnt>6?cnt=6:cnt;
            cnt<1?cnt=0:cnt;
          }
          else {
            $('#section2 .sec2-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo');
          }
        }
        if(winW>=1024){
          if(cnt>7 || cnt < 0){
            $('#section2 .sec2-slide-wrap').stop().animate();
            cnt>7?cnt=7:cnt;
            cnt<0?cnt=0:cnt;
          }
          else {
            $('#section2 .sec2-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo');
          }
        }
        else{
          $('#section2 .sec2-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo',function(){
            cnt>7?cnt=0:cnt;
            cnt<0?cnt=7:cnt;
            $('#section2 .sec2-slide-wrap').stop().animate({left:-slideW*cnt},0)
          });
        }

        sec2Bar();
      }


      function nextCount(){
        cnt++;
        sec2Slide();
      }

      function prevCount(){
        cnt--;
        sec2Slide();
      }

      $('.sec2-next-btn').on({
        click:function(){
          nextCount();
        }
      });

      $('.sec2-prev-btn').on({
        click:function(){
          prevCount();
        }
      });

      function sec2Bar(){
        if(winW>=1500){
          barFill=progressbarW/6;
          $('#section2 .progressbar').animate({left:-(barFill*5)+(barFill*cnt)},600,'easeOutExpo');
        }
        else if(winW>=1280){
          barFill=progressbarW/7;
          $('#section2 .progressbar').animate({left:-(barFill*6)+(barFill*cnt)},600,'easeOutExpo');
        }
        else if(winW>=1024){
          barFill=progressbarW/8;
          $('#section2 .progressbar').animate({left:-(barFill*7)+(barFill*cnt)},600,'easeOutExpo');
        }
        else{
          barFill=progressbarW/8;
          if(cnt===7){
            $('#section6 .progressbar').animate({left:-980},600,'easeOutExpo');
          }
          else {
            if(cnt===-1){
              $('#section2 .progressbar').animate({left:0},600,'easeOutExpo');
            }
            else {
              $('.progressbar').animate({left:-(barFill*7)+(barFill*cnt)},600,'easeOutExpo');
            }
          }
        }
      }

      //터치 스와이프
      $('#section2 .sec2-slide-view').on({
        mousedown:function(e){

          touchStart=e.clientX;
          dragStart=e.clientX-$('#section2 .sec2-slide-wrap').offset().left+slideW;
          mouseDown=true;
        },

        mouseup:function(e){
          touchEnd=e.clientX;

          result=touchStart-touchEnd>0?'NEXT':'PREV'

          if(Math.abs(touchStart-touchEnd) > 10){
            if(result==='NEXT'){
              if(!$('#section2 .sec2-slide-wrap').is(':animated')){
                cnt++;
                sec2Slide();
              }
            }
            if(result==='PREV'){
              if(!$('#section2 .sec2-slide-wrap').is(':animated')){
                cnt--;
                sec2Slide();
              }
            }
          }
          mouseDown=false;
        },

        mouseleave:function(e){
          if(!mouseDown) return;
           touchEnd=e.clientX;
           result=touchStart-touchEnd>0?'NEXT':'PREV';
           if(Math.abs(touchStart-touchEnd) > 10){
            if(result==='NEXT'){
              if(!$('#section2 .sec2-slide-wrap').is(':animated')){
                cnt++;
                sec2Slide();
              }
            }
            if(result==='PREV'){
              if(!$('#section2 .sec2-slide-wrap').is(':animated')){
                cnt--;
                sec2Slide();
              }
            }
          }
           mouseDown=false;
         },

         mousemove:function(e){
          if(!mouseDown) return;
          dragEnd=e.clientX
          $('#section2 .sec2-slide-wrap').css({left:dragEnd-dragStart});
          return dragEnd=false;
        }

      });

      // 모바일 터치 이벤트
      $('#section2 .sec2-slide-view').on({
        touchstart: function(e){

          touchStart=e.originalEvent.changedTouches[0].clientX;                        
          dragStart=e.originalEvent.changedTouches[0].clientX-$('#section2 .sec2-slide-wrap').offset().left+slideW;
          mouseDown=true;
        },

        touchend:function(e){
            touchEnd=e.originalEvent.changedTouches[0].clientX;  
            result=touchStart-touchEnd > 0 ? 'NEXT' : 'PREV';
            if(Math.abs(touchStart-touchEnd) > 10){
              if(result==='NEXT'){
                if(!$('#section2 .sec-slide-wrap').is(':animated')){
                  cnt++;
                  sec2Slide();
                }                  
              }
              if(result==='PREV'){
                if(!$('#section2 .sec2-slide-wrap').is(':animated')){
                  cnt--;
                  sec2Slide();
                }
              }
            }
            mouseDown=false;
        },

        touchmove: function(e){
            if(!mouseDown) return;
            dragEnd=e.originalEvent.changedTouches[0].clientX;
            $('#section2 .sec2-slide-wrap').css({left:dragEnd-dragStart});
            return dragEnd=false;
        }
      });

    }
    section3(){

      let winH=$(window).height();
      let sec3Top=$('#section3').offset().top-winH;

      let step1=74/1000;
      let step2=52/1000;
      let step3=148/1000;

      let sum1=0;
      let sum2=0;
      let sum3=0;

      let cnt=0;
      let setId=0;
      let t=false;

      const comma =/\B(?=(\d{3})*(?!(\d)))/g;

      $(window).resize(()=>{
        winH=$(window).height();
        return winH;
      });

      $(window).scroll(()=>{
        sec3Top=$('#section3').offset().top-winH;
        if($(window).scrollTop()>sec3Top){
          if(t===false){
            t=true;
            $('#section3 .title-wrap').addClass('title-ani');
            autoTimer();
          }
          return;
        }
        if($(window).scrollTop()===0){
          cnt=0;
          sum1=0;
          sum2=0;
          sum3=0;
          t=false;
          clearInterval(setId);
          $('#section3 .title-wrap').removeClass('title-ani');
          $('.count-num').text('0');
          return;
        }
      });


      function countfn(){
        cnt++;
        if(cnt>=1000){clearInterval(setId)}

        sum1+=step1;
        $('.count-num').eq(0).text(Math.round(sum1).toString().replace(comma,','));

        sum2+=step2;
        $('.count-num').eq(1).text(Math.round(sum2).toString().replace(comma,','));

        sum3+=step3;
        $('.count-num').eq(2).text(Math.round(sum3).toString().replace(comma,','));

      }
      
      function autoTimer(){
        setId=setInterval(countfn,1);
      }

    }
    section4(){

      let winW=$(window).width();
      let sec4Top=$('#section4').offset().top-$(window).height();
      let cnt=0;
      let idx=0;
      let cols=5;
      let slideW=winW/cols;
      let sliden=$('#section4 .sec4-slide.show-ani').length;
      let progressbarW=$('.pagination-progressbar').width();
      let barFill=progressbarW/(sliden-3);
      let result='';
      let dragStart=null;
      let dragEnd=null;
      let mouseDown=false;
      let touchStart=null;
      let touchEnd=null;
      const slideItem=$('#section4 .sec4-slide');
      const slideList=$('#section4 .sec4-slide-wrap');

      setTimeout(tabBtn, 100);

      $(window).resize(()=>{
        winW=$(window).width();
        tabBtn();
        sec4Slide();
        return winW;
      });

      $(window).scroll(()=>{
        sec4Top=$('#section4').offset().top-$(window).height();
        if($(window).scrollTop()>sec4Top){
          $('#section4 .title-box').addClass('title-ani');
          $('#section4 .sec4-slide').addClass('show-ani');
          sliden=$('#section4 .show-ani').length;
          return;
        }
        if($(window).scrollTop()===0){
          cnt=0;
          $('#section4 .sec4-slide-wrap').stop().animate({left:-slideW*cnt},0);
          $('#section4 .title-box').removeClass('title-ani');
          $('#section4 .sec4-slide').removeClass('show-ani');
          return;
        }
      });

      function sec4Slide(){
        
        if(winW>=1500){
          if(cnt > 7 || cnt < 1){
            $('#section4 .sec4-slide-wrap').stop().animate();
            cnt>7?cnt=7:cnt;
            cnt<1?cnt=0:cnt;
          }
          else {
            $('#section4 .sec4-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo');
          }
        }
        if(winW>=1280){
          if(cnt > 8 || cnt < 1){
            $('#section4 .sec4-slide-wrap').stop().animate();
            cnt>8?cnt=8:cnt;
            cnt<1?cnt=0:cnt;
          }
          else {
            $('#section4 .sec4-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo');
          }
        }
        if(winW>=1024){
          if(cnt > 9 || cnt < 0){
            $('#section4 .sec4-slide-wrap').stop().animate();
            cnt>9?cnt=8:cnt;
            cnt<0?cnt=0:cnt;
          }
          else {
            $('#section4 .sec4-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo');
          }
        }
        else{
          $('#section4 .sec4-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo',function(){
            cnt>6?cnt=0:cnt;
            cnt<1?cnt=6:cnt;
            $('#section4 .sec4-slide-wrap').stop().animate({left:-slideW*cnt},0)
          });
        }
        sec4Bar();
      }

      function nextCount(){
        cnt++;
        sec4Slide();
      }

      function prevCount(){
        cnt--;
        sec4Slide();
      }

      $('.sec4-next-btn').on({
        click:function(){
          nextCount();
        }
      });

      $('.sec4-prev-btn').on({
        click:function(){
          prevCount();
        }
      });

      function sec4Bar(){

        sliden=$('#section4 .sec4-slide.show-ani').length;

        if(winW>=1500){
          if(sliden<5){
            $('#section4 .progressbar').animate({left:0},600,'easeOutExpo');
          }
          else {
            barFill=progressbarW/(sliden-3);
            $('#section4 .progressbar').animate({left:-(barFill*(sliden-4))+(barFill*cnt)},600,'easeOutExpo');
          }
        }
        else if(winW>=1280){
          if(sliden<4){
            $('#section4 .progressbar').animate({left:0},600,'easeOutExpo');
          }
          else {
            barFill=progressbarW/(sliden-2);
            $('#section4 .progressbar').animate({left:-(barFill*(sliden-3))+(barFill*cnt)},600,'easeOutExpo');
          }
        }
        else{
          if(sliden<3){
            $('#section4 .progressbar').animate({left:0},600,'easeOutExpo');
          }
          else {
            barFill=progressbarW/sliden;
            $('#section4 .progressbar').animate({left:-(barFill*(sliden-1))+(barFill*cnt)},600,'easeOutExpo');
          }
        }
      }

      $('#section4 .tab-btn').each((index)=>{
        $('#section4 .tab-btn').eq(index).click((e)=>{
          e.preventDefault();
          idx=index;
          cnt=0;
          tabBtn();
          $('#section4 .tab-btn').removeClass('on');
          $('#section4 .tab-btn').eq(index).addClass('on');
        });
      }); 

      function tabBtn(){

        winW=$(window).width();
        
        if(winW>=1500){
          cols=5;
        }
        else if(winW>=1280){
          cols=4;
        }
        else if(winW>=1024){
          cols=3;
        }
        else {
          cols=2;
        }

        slideW=winW/cols;
        slideItem.css({width: slideW});
        slideList.css({width: slideW * 11});

        slideItem.removeClass('show-ani');
        $('#section4 .sec4-slide-wrap').stop().animate({left:-slideW*cnt},0);

        if(idx===0){
          switch(cols){
            case 5:
              slideItem.eq(2).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(3).stop().show().animate({left:slideW*2}).addClass('show-ani');
              slideItem.eq(4).stop().show().animate({left:slideW*3}).addClass('show-ani');
              slideItem.eq(5).stop().show().animate({left:slideW*4}).addClass('show-ani');
              slideItem.eq(6).stop().show().animate({left:slideW*5}).addClass('show-ani');
              slideItem.eq(7).stop().show().animate({left:slideW*6}).addClass('show-ani');
              slideItem.eq(8).stop().show().animate({left:slideW*7}).addClass('show-ani');
              slideItem.eq(9).stop().show().animate({left:slideW*8}).addClass('show-ani');
              slideItem.eq(10).stop().show().animate({left:slideW*9}).addClass('show-ani');
              slideItem.eq(11).stop().show().animate({left:slideW*10}).addClass('show-ani');
              slideItem.eq(12).stop().show().animate({left:slideW*11}).addClass('show-ani');
            break;

            case 4:
              slideItem.eq(2).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(3).stop().show().animate({left:slideW*2}).addClass('show-ani');
              slideItem.eq(4).stop().show().animate({left:slideW*3}).addClass('show-ani');
              slideItem.eq(5).stop().show().animate({left:slideW*4}).addClass('show-ani');
              slideItem.eq(6).stop().show().animate({left:slideW*5}).addClass('show-ani');
              slideItem.eq(7).stop().show().animate({left:slideW*6}).addClass('show-ani');
              slideItem.eq(8).stop().show().animate({left:slideW*7}).addClass('show-ani');
              slideItem.eq(9).stop().show().animate({left:slideW*8}).addClass('show-ani');
              slideItem.eq(10).stop().show().animate({left:slideW*9}).addClass('show-ani');
              slideItem.eq(11).stop().show().animate({left:slideW*10}).addClass('show-ani');
              slideItem.eq(12).stop().show().animate({left:slideW*11}).addClass('show-ani');
            break;

            case 3:
              slideItem.eq(2).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(3).stop().show().animate({left:slideW*2}).addClass('show-ani');
              slideItem.eq(4).stop().show().animate({left:slideW*3}).addClass('show-ani');
              slideItem.eq(5).stop().show().animate({left:slideW*4}).addClass('show-ani');
              slideItem.eq(6).stop().show().animate({left:slideW*5}).addClass('show-ani');
              slideItem.eq(7).stop().show().animate({left:slideW*6}).addClass('show-ani');
              slideItem.eq(8).stop().show().animate({left:slideW*7}).addClass('show-ani');
              slideItem.eq(9).stop().show().animate({left:slideW*8}).addClass('show-ani');
              slideItem.eq(10).stop().show().animate({left:slideW*9}).addClass('show-ani');
              slideItem.eq(11).stop().show().animate({left:slideW*10}).addClass('show-ani');
              slideItem.eq(12).stop().show().animate({left:slideW*11}).addClass('show-ani');
            break;

            default:
              slideItem.eq(2).stop().show().animate({left:slideW*0}).addClass('show-ani');
              slideItem.eq(3).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(4).stop().show().animate({left:slideW*2}).addClass('show-ani');
              slideItem.eq(5).stop().show().animate({left:slideW*3}).addClass('show-ani');
              slideItem.eq(6).stop().show().animate({left:slideW*4}).addClass('show-ani');
              slideItem.eq(7).stop().show().animate({left:slideW*5}).addClass('show-ani');
              slideItem.eq(8).stop().show().animate({left:slideW*6}).addClass('show-ani');
              slideItem.eq(9).stop().show().animate({left:slideW*7}).addClass('show-ani');
              slideItem.eq(10).stop().show().animate({left:slideW*8}).addClass('show-ani');
              slideItem.eq(11).stop().show().animate({left:slideW*9}).addClass('show-ani');
              slideItem.eq(12).stop().show().animate({left:slideW*10}).addClass('show-ani');
          }
        }
        if(idx===1){
          slideItem.eq(4).hide();
          slideItem.eq(7).hide();
          slideItem.eq(8).hide();
          slideItem.eq(10).hide();
          switch(cols){
            case 5:
              slideItem.eq(2).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(3).stop().show().animate({left:slideW*2}).addClass('show-ani');
              slideItem.eq(5).stop().show().animate({left:slideW*3}).addClass('show-ani');
              slideItem.eq(6).stop().show().animate({left:slideW*4}).addClass('show-ani');
              slideItem.eq(9).stop().show().animate({left:slideW*5}).addClass('show-ani');
              slideItem.eq(11).stop().show().animate({left:slideW*6}).addClass('show-ani');
              slideItem.eq(12).stop().show().animate({left:slideW*7}).addClass('show-ani');
            break;

            case 4:
              slideItem.eq(2).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(3).stop().show().animate({left:slideW*2}).addClass('show-ani');
              slideItem.eq(5).stop().show().animate({left:slideW*3}).addClass('show-ani');
              slideItem.eq(6).stop().show().animate({left:slideW*4}).addClass('show-ani');
              slideItem.eq(9).stop().show().animate({left:slideW*5}).addClass('show-ani');
              slideItem.eq(11).stop().show().animate({left:slideW*6}).addClass('show-ani');
              slideItem.eq(12).stop().show().animate({left:slideW*7}).addClass('show-ani');
            break;

            case 3:
              slideItem.eq(2).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(3).stop().show().animate({left:slideW*2}).addClass('show-ani');
              slideItem.eq(5).stop().show().animate({left:slideW*3}).addClass('show-ani');
              slideItem.eq(6).stop().show().animate({left:slideW*4}).addClass('show-ani');
              slideItem.eq(10).stop().show().animate({left:slideW*5}).addClass('show-ani');
              slideItem.eq(11).stop().show().animate({left:slideW*6}).addClass('show-ani');
              slideItem.eq(12).stop().show().animate({left:slideW*7}).addClass('show-ani');
            break;

            default:
              slideItem.eq(2).stop().show().animate({left:slideW*0}).addClass('show-ani');
              slideItem.eq(3).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(5).stop().show().animate({left:slideW*2}).addClass('show-ani');
              slideItem.eq(6).stop().show().animate({left:slideW*3}).addClass('show-ani');
              slideItem.eq(9).stop().show().animate({left:slideW*4}).addClass('show-ani');
              slideItem.eq(11).stop().show().animate({left:slideW*5}).addClass('show-ani');
              slideItem.eq(12).stop().show().animate({left:slideW*6}).addClass('show-ani');
          }
        }
        if(idx===2){
          slideItem.eq(2).hide();
          slideItem.eq(3).hide();
          slideItem.eq(5).hide();
          slideItem.eq(6).hide();
          slideItem.eq(8).hide();
          slideItem.eq(9).hide();
          slideItem.eq(10).hide();
          slideItem.eq(11).hide();
          slideItem.eq(12).hide();
          switch(cols){
            case 5:
              slideItem.eq(4).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(7).stop().show().animate({left:slideW*2}).addClass('show-ani');
            break;

            case 4:
              slideItem.eq(4).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(7).stop().show().animate({left:slideW*2}).addClass('show-ani');
            break;

            case 3:
              slideItem.eq(4).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(7).stop().show().animate({left:slideW*2}).addClass('show-ani');
            break;

            default:
              slideItem.eq(4).stop().show().animate({left:slideW*0}).addClass('show-ani');
              slideItem.eq(7).stop().show().animate({left:slideW*1}).addClass('show-ani');
          }
        }
        if(idx===3){
          slideItem.eq(2).hide();
          slideItem.eq(3).hide();
          slideItem.eq(4).hide();
          slideItem.eq(5).hide();
          slideItem.eq(6).hide();
          slideItem.eq(7).hide();
          slideItem.eq(9).hide();
          slideItem.eq(11).hide();
          slideItem.eq(12).hide();
          switch(cols){
            case 5:
              slideItem.eq(8).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(10).stop().show().animate({left:slideW*2}).addClass('show-ani');
            break;

            case 4:
              slideItem.eq(8).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(10).stop().show().animate({left:slideW*2}).addClass('show-ani');
            break;

            case 3:
              slideItem.eq(8).stop().show().animate({left:slideW*1}).addClass('show-ani');
              slideItem.eq(10).stop().show().animate({left:slideW*2}).addClass('show-ani');
            break;

            default:
              slideItem.eq(8).stop().show().animate({left:slideW*0}).addClass('show-ani');
              slideItem.eq(10).stop().show().animate({left:slideW*1}).addClass('show-ani');
          }
        }
        sec4Bar();
      }
      
      //터치 스와이프
      $('#section4 .sec4-slide-view').on({
        mousedown:function(e){

          touchStart=e.clientX;
          dragStart=e.clientX-$('#section4 .sec4-slide-wrap').offset().left+(slideW/3);
          mouseDown=true;
        },

        mouseup:function(e){
          touchEnd=e.clientX;
          result=touchStart-touchEnd>0?'NEXT':'PREV'

          if(Math.abs(touchStart-touchEnd) > 10){
            if(result==='NEXT'){
              if(!$('#section4 .sec4-slide-wrap').is(':animated')){
                cnt++;
                sec4Slide();
              }
            }
            if(result==='PREV'){
              if(!$('#section4 .sec4-slide-wrap').is(':animated')){
                cnt--;
                sec4Slide();
              }
            }
          }
          mouseDown=false;
        },

        mouseleave:function(e){
          if(!mouseDown) return;
          touchEnd=e.clientX;
          result=touchStart-touchEnd>0?'NEXT':'PREV';
          if(Math.abs(touchStart-touchEnd) > 10){
           if(result==='NEXT'){
             if(!$('#section4 .sec4-slide-wrap').is(':animated')){
              cnt++;
              sec4Slide();
             }
           }
           if(result==='PREV'){
             if(!$('#section4 .sec4-slide-wrap').is(':animated')){
              cnt--;
              sec4Slide();
             }
           }
          }
           mouseDown=false;
         },

         mousemove:function(e){
          if(!mouseDown) return;
          dragEnd=e.clientX;
          $('#section4 .sec4-slide-wrap').css({left:dragEnd-dragStart});
          return dragEnd=false;
        }

      });

      // 모바일 터치 이벤트
      $('#section4 .sec4-slide-view').on({
        touchstart: function(e){

          touchStart=e.originalEvent.changedTouches[0].clientX;                        
          dragStart=e.originalEvent.changedTouches[0].clientX-$('#section4 .sec4-slide-wrap').offset().left+(slideW/3);
          mouseDown=true;
        },

        touchend:function(e){
            touchEnd=e.originalEvent.changedTouches[0].clientX;  
            result=touchStart-touchEnd > 0 ? 'NEXT' : 'PREV';
            if(Math.abs(touchStart-touchEnd) > 10){
              if(result==='NEXT'){
                if(!$('#section4 .sec4-slide-wrap').is(':animated')){
                  cnt++;
                  sec4Slide();
                }                  
              }
              if(result==='PREV'){
                if(!$('#section4 .sec4-slide-wrap').is(':animated')){
                  cnt--;
                  sec4Slide();
                }
              }
            }
            mouseDown=false;
        },

        touchmove: function(e){
            if(!mouseDown) return;
            dragEnd=e.originalEvent.changedTouches[0].clientX;
            $('#section4 .sec4-slide-wrap').css({left:dragEnd-dragStart});
            return dragEnd=false;
        }
      });

    }
    section5(){}
    section6(){

      let winH=$(window).height();
      let sec6Top=$('#section6').offset().top-winH;
      let cnt=0;
      let slideW=$('#section6 .sec6-slide').width();
      let progressbarW=$('.pagination-progressbar').width();
      let barFill=progressbarW/7;
      let result='';
      let dragStart=null;
      let dragEnd=null;
      let mouseDown=false;
      let touchStart=null;
      let touchEnd=null;

      $(window).resize(()=>{
        winH=$(window).height();
        return winH;
      });

      $(window).scroll(()=>{
        sec6Top=$('#section6').offset().top-winH;
        if($(window).scrollTop()>sec6Top){
          $('#section6 .title-box').addClass('title-ani');
          return;
        }
        if($(window).scrollTop()===0){
          cnt=0;
          $('#section6 .sec6-slide-wrap').stop().animate({left:-slideW*cnt},0);
          $('#section6 .title-box').removeClass('title-ani');
          return;
        }
      });

      function sec6Slide(){
        $('#section6 .sec6-slide').removeClass('on');
        $('#section6 .sec6-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo',function(){
          cnt>6?cnt=0:cnt;
          cnt<0?cnt=6:cnt;
          $('#section6 .sec6-slide-wrap').stop().animate({left:-slideW*cnt},0)
        });
        
        if(cnt>6){
          $('#section6 .sec6-slide').eq(10).addClass('on');
          $('#section6 .sec6-slide').eq(3).addClass('on');
        }
        else{
          if(cnt<0){
            $('#section6 .sec6-slide').eq(9).addClass('on');
            $('#section6 .sec6-slide').eq(2).addClass('on');
          }
          else{
            $('#section6 .sec6-slide').eq(cnt+3).addClass('on');
          }
        }
        sec6Bar();
        sec6PageBtn();
      }

      function nextCount(){
        cnt++;
        sec6Slide();
      }
      function prevCount(){
        cnt--;
        sec6Slide();
      }

      $('.sec6-next-btn').on({
        click:function(){
          nextCount();
        }
      });
      
      $('.sec6-prev-btn').on({
        click:function(){
          prevCount();
        }
      });

      function sec6Bar(){
        if(cnt===7){
          $('#section6 .progressbar').animate({left:-960},600,'easeOutExpo');
        }
        else {
          if(cnt===-1){
            $('#section6 .progressbar').animate({left:0},600,'easeOutExpo');
          }
          else {
            $('#section6 .progressbar').animate({left:-(barFill*6)+(barFill*cnt)},600,'easeOutExpo');
          }
        }
      }

      function sec6PageBtn(){
        $('#section6 .page-btn').removeClass('on');
        $('#section6 .page-btn').eq(cnt>6?cnt=0:cnt).addClass('on');
      }

      $('#section6 .page-btn').each((index)=>{
        $('#section6 .page-btn').eq(index).click((e)=>{
          e.preventDefault();
          if(!$('#section6 .sec6-slide-wrap').is(':animated')){
            cnt=index;
            $('#section6 .page-btn').removeClass('on');
            sec6Slide();
            $('#section6 .page-btn').eq(index).addClass('on');
          }
        });
      });

      //터치 스와이프
      $('#section6 .sec6-slide-view').on({
        mousedown:function(e){

          touchStart=e.clientX;
          dragStart=e.clientX-$('#section6 .sec6-slide-wrap').offset().left-slideW;
          mouseDown=true;
        },

        mouseup:function(e){
          touchEnd=e.clientX;

          result=touchStart-touchEnd>0?'NEXT':'PREV'

          if(Math.abs(touchStart-touchEnd) > 10){
            if(result==='NEXT'){
              if(!$('#section6 .sec6-slide-wrap').is(':animated')){
              nextCount();
              }
            }
            if(result==='PREV'){
              if(!$('#section6 .sec6-slide-wrap').is(':animated')){
              prevCount();
              }
            }
          }
          mouseDown=false;

        },

        mouseleave:function(e){
          if(!mouseDown) return;
           touchEnd=e.clientX;
           result=touchStart-touchEnd>0?'NEXT':'PREV';
           if(Math.abs(touchStart-touchEnd) > 10){
            if(result==='NEXT'){
              if(!$('#section6 .sec6-slide-wrap').is(':animated')){
              nextCount();
              }
            }
            if(result==='PREV'){
              if(!$('#section6 .sec6-slide-wrap').is(':animated')){
              prevCount();
              }
            }
          }
           mouseDown=false;
         },

        mousemove:function(e){
          if(!mouseDown) return;
          dragEnd=e.clientX
          $('#section6 .sec6-slide-wrap').css({left:dragEnd-dragStart});
         return dragEnd=false;
        }

      });

      // 모바일 터치 이벤트
      $('#section6 .sec6-slide-view').on({
        touchstart: function(e){

          touchStart=e.originalEvent.changedTouches[0].clientX;                        
          dragStart=e.originalEvent.changedTouches[0].clientX-$('#section6 .sec6-slide-wrap').offset().left-slideW;
          mouseDown=true;
        },

        touchend:function(e){
          touchEnd=e.originalEvent.changedTouches[0].clientX;  
          result=touchStart-touchEnd > 0 ? 'NEXT' : 'PREV';
          if(Math.abs(touchStart-touchEnd) > 10){
            if(result==='NEXT'){
              if(!$('#section6 .sec6-slide-wrap').is(':animated')){
                nextCount();
              }                  
            }
            if(result==='PREV'){
              if(!$('#section6 .sec6-slide-wrap').is(':animated')){
                prevCount();
              }
            }
          }
          mouseDown=false;
        },

        touchmove: function(e){
          if(!mouseDown) return;
          dragEnd=e.originalEvent.changedTouches[0].clientX;
          $('#section6 .sec6-slide-wrap').css({left:dragEnd-dragStart});
          return dragEnd=false;
        }
      });

    }
    section7(){

      let winH=$(window).height();
      let sec7Top=$('#section7').offset().top-winH;
      let cnt=0;
      let slideW=$('#section7 .sec7-slide').width();
      let sideSlideH=$('#section7 .side-slide').height()+15;

      $(window).resize(()=>{
        winH=$(window).height();
        return winH;
      });

      $(window).scroll(()=>{
        sec7Top=$('#section7').offset().top-winH;
        if($(window).scrollTop()>sec7Top){
          $('#section7 .title-wrap').addClass('title-ani');
          return;
        }
        if($(window).scrollTop()===0){
          cnt=0;
          $('#section7 .sec7-slide-wrap').stop().animate({left:-slideW*cnt},0);
          $('#section7 .side-slide-wrap').stop().animate({top:-sideSlideH*cnt},0);
          $('#section7 .title-wrap').removeClass('title-ani');
          return;
        }
      });

      function sec7Slide(){
        $('#section7 .sec7-slide-wrap').stop().animate({left:-slideW*cnt},600,'easeOutExpo',function(){
          cnt>5?cnt=0:cnt;
          cnt<0?cnt=5:cnt;
          $('#section7 .sec7-slide-wrap').stop().animate({left:-slideW*cnt},0)
        });
      }

      function sec7SideSlide(){
        $('#section7 .side-slide-wrap').stop().animate({top:-sideSlideH*cnt},600,'easeOutExpo',function(){
          cnt>5?cnt=0:cnt;
          cnt<0?cnt=5:cnt;
          $('#section7 .side-slide-wrap').stop().animate({top:-sideSlideH*cnt},0)
        });
      }

      function nextCount(){
        cnt++;
        sec7Slide();
        sec7SideSlide();
      }

      function prevCount(){
        cnt--;
        sec7Slide();
        sec7SideSlide();
      }

      $('.slide-up-btn').on({
        click:function(e){
          e.preventDefault();
          nextCount();
        }
      });

      $('.slide-down-btn').on({
        click:function(e){
          e.preventDefault();
          prevCount();
        }
      })

      $('#section7 .play-btn1').on({
        click:function(){
          $('#popVideo').show().addClass('on');
          $('.video1').show();
        }
      });

      $('#section7 .play-btn2').on({
        click:function(){
          $('#popVideo').show().addClass('on');
          $('.video2').show();
        }
      });

      $('#section7 .play-btn3').on({
        click:function(){
          $('#popVideo').show().addClass('on');
          $('.video3').show();
        }
      });

      $('#section7 .play-btn4').on({
        click:function(){
          $('#popVideo').show().addClass('on');
          $('.video4').show();
        }
      });

      $('#section7 .play-btn5').on({
        click:function(){
          $('#popVideo').show().addClass('on');
          $('.video5').show();
        }
      });

      $('#section7 .play-btn6').on({
        click:function(){
          $('#popVideo').show().addClass('on');
          $('.video6').show();
        }
      });

    }
    section8(){

      let winH=$(window).height();
      let sec8Top=$('#section8').offset().top-winH;

      $(window).resize(()=>{
        winH=$(window).height();
        return winH;
      });

      $(window).scroll(()=>{
        sec8Top=$('#section8').offset().top-winH;
        if($(window).scrollTop()>sec8Top){
          $('#section8 .title-wrap').addClass('title-ani');
          return;
        }
        if($(window).scrollTop()===0){
          $('#section8 .title-wrap').removeClass('title-ani');
          return;
        }
      });

    }
    footer(){

      $('.select-btn-box').on({
        mouseenter:function(){
          $(this).next().show();
          $(this).addClass('on');
        },
        focus:function(){
          $(this).next().show();
          $(this).addClass('on');
        }
      });

      $('.select-box').on({
        mouseleave:function(){
          $('.option-list').hide();
          $('.select-btn-box').removeClass('on');
        },
        focusout:function(){
          $('.option-list').hide();
          $('.select-btn-box').removeClass('on');
        }
      });
    }
    popVideo(){

      $('#popVideo .video-close-btn').on({
        click:function(){
          $('#popVideo').hide().removeClass('on');
          $('#popVideo .video-item').hide().pauseVideo();
        }
      });

      $('#popVideo').on({
        mouseup:function(){
          $('#popVideo').hide().removeClass('on');
          $('#popVideo .video-item').hide().pauseVideo();
        }
      })

    }
    goToTop(){

      let winH = $(window).height();
      let section2Top = $('#section2').offset().top-winH;

      $(window).resize(()=>{
        winH=$(window).height();
        return winH;
      });

      $(window).scroll(()=>{
        section2Top = $('#section2').offset().top-winH;
        if($(window).scrollTop()>section2Top){
          $('#goToTop').fadeIn(500);
          return;
        }
        else {
          $('#goToTop').fadeOut(500);
          return;
        }
      });

      $('.go-to-top-btn').on({
        click:function(){
          $('html,body').stop().animate({scrollTop:0},600);
        }
      });

    }

  }
  const newChild = new Child();

  newChild.init();

})(jQuery);