$(function(){
    var audio=$('audio').get(0);
    var bofang=$('.bofang-zanting');
    var database=[
        {name:"丑八怪",infor:"大中国 凤凰传奇 词：高枫 曲：高枫", src:"song/薛之谦 - 丑八怪.mp3",songer:"薛之谦"},
        {name:"想着你的感觉", infor:"大中国 凤凰传奇 词：高枫 曲：高枫",src:"song/容祖儿 - 想着你的感觉.mp3",songer:"容祖儿"},
        {name:"一生有你",infor:"大中国 凤凰传奇 词：高枫 曲：高枫", src:"song/水木年华 - 一生有你.mp3",songer:"水木年华"},
        {name:"童话", infor:"大中国 凤凰传奇 词：高枫 曲：高枫",src:"song/光良 - 童话 - 电台版.mp3",songer:"光良"},
        {name:"龙卷风", infor:"大中国 凤凰传奇 词：高枫 曲：高枫",src:"song/G.E.M.邓紫棋 - 龙卷风.mp3",songer:"邓紫棋"},
        {name:" 最爱你的人是我",infor:"大中国 凤凰传奇 词：高枫 曲：高枫", src:"song/巫启贤 - 最爱你的人是我.mp3",songer:"巫启贤"},
    ];
    var pics=[{pic:"image/index0.jpg",lyric:"如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,不管同样的是非,又怎么不对,无所谓,如果像你一样,总有人赞美,围绕着我的卑微,也许能消退,其实我并不在意,有很多机会,像巨人一样的无畏,放纵我心里的鬼,可是我不配,丑八怪,能否别把灯打开,我要的爱,出没在漆黑一片的舞台,丑八怪,在这暧昧的时代,我的存在像意外,有人用一滴泪,会红颜祸水,有人丢掉称谓,什么也不会,只要你足够虚伪,就不怕魔鬼,对不对,如果剧本写好,谁比谁高贵,我只能沉默以对,美丽本无罪,当欲望开始贪杯,有更多机会,像尘埃一样的无畏,化成灰谁认得谁,管他配不配,丑八怪,能否别把灯打开,我要的爱,出没在漆黑一片的舞台,丑八怪,在这暧昧的时代,我的存在不意外,丑八怪,其实见多就不怪,放肆去HIGH 用力踩,那不堪一击的洁白,丑八怪,这是我们的时代,我不存在才意外"},
        {pic:"image/index1.jpg",lyric:"每一次我走近,总是那么悄悄地,不敢使你讶异,让你发觉自己是幻影,每一次我唤你,总是那么细细地,不让寂寞听到,嘲笑我用温柔的声,音一个一个想你的日子,砌成一栋孤单的房子,我在上楼下楼开门关门,翻着抽屉寻着你名字,一个一个想你的日子,从你回眸而去那天开始,我的日子写成诗,诗的背后寻着你名字,想着你的感觉,有如雨的缠绵,淋湿我的岁月,而我却依然不知不觉,想着你的感觉,有如风的缱绻,吹乱我的日夜,吹也吹不走你的容颜,一个一个想你的日子,砌成一栋孤单的房子,我在上楼下楼开门关门,翻着抽屉寻着你名字,一个一个想你的日子,从你回眸而去那天开始,我的日子写成诗,诗的背后寻着你名字,想着你的感觉,有如雨的缠绵,淋湿我的岁月,而我却依然不知不觉,想着你的感觉,有如风的缱绻,吹乱我的日夜,吹也吹不走你的容颜,想着你的感觉,有如雨的缠绵,淋湿我的岁月,而我却依然不知不觉,想着你的感觉,有如风的缱绻,吹乱我的日夜, 吹也吹不走你的容颜,吹乱我的日夜,吹也吹不走你的容颜"},
        {pic:"image/index2.jpg",lyric:"因为梦见你离开,我从哭泣中醒来,看夜风吹过窗台,你能否感受我的爱,等到老去那一天,你是否还在我身边,看那些誓言谎言,随往事慢慢飘散,多少人曾爱慕,你年轻时的容颜,可知谁愿承受,岁月无情的变迁,多少人曾在你生命中,来了又还,可知一生有你, 我都陪在你身边,因为梦见你离开,我从哭泣中醒来,看夜风吹过窗台,你能否感受我的爱,等到老去那一天,合你是否还在我身边,看那些誓言谎言,随往事慢慢飘散,多少人曾爱慕,你年轻时的容颜,可知谁愿承受,岁月无情的变迁, 多少人曾在你生命中,来了又还,可知一生有你,我都陪在你身边,当所有一切都已看平淡,是否有一种坚持还留在心间,多少人曾爱慕,你年轻时的容颜,可知谁愿承受,岁月无情的变迁,多少人曾在你生命中,来了又还,可知一生有你,我都陪在你身边,多少人曾爱慕,你年轻时的容颜,可知谁愿承受,岁月无情的变迁,多少人曾在你生命,来了又还,可知一生有你,我都陪在你身边,可知一生有你,我都陪在你身边"},
        {pic:"image/index3.jpg",lyric:"忘了有多久再没听到你,对我说你最爱的故事,我想了很久我开始慌了,是不是我又做错了什么,你哭着对我说,童话里都是骗人的,我不可能是你的王子,也许你不会懂,从你说爱我以后,我的天空星星都亮了,我愿变成童话里,你爱的那个天使,张开双手,变成翅膀守护你,你要相信,相信我们会像童话故事里,幸福和快乐是结局,你哭着对我说,童话里都是骗人的,我不可能是你的王子,也许你不会懂,从你说爱我以后,我的天空星星都亮了,我愿变成童话里,你爱的那个天使,张开双手变成翅膀守护你,你要相信,相信我们会像童话故事里,幸福和快乐是结局,我要变成童话里,你爱的那个天使,张开双手,变成翅膀守护你,你要相信,相信我们会像童话故事里,幸福和快乐是结局,我会变成童话里,你爱的那个天使,张开双手,变成翅膀守护你,你要相信,相信我们会像童话故事里,幸福和快乐是结局,一起写我们的结局"},
        {pic:"image/index4.jpg",lyric:"爱像一阵风 吹完它就走,这样的节奏 谁都无可奈何，没有你以后 我灵魂失控，黑云在降落 我被它拖着走，静静悄悄默默离开，陷入了危险边缘Baby，我的世界已狂风暴雨，爱情来的太快就像龙卷风，离不开暴风圈来不及逃，我不能再想 我不能再想，我不我不我不能，爱情走的太快就像龙卷风，不能承受我已无处可躲，我不要再想 我不要再想，我不我不我不要再想你，不知不觉 你已经离开我，不知不觉 我跟了这节奏，后知后觉 又过了一个秋，后知后觉 我该好好生活，静静悄悄默默离开，陷入了危险边缘Baby，我的世界已狂风暴雨，爱情来的太快就像龙卷风，离不开暴风圈来不及逃，我不能再想 我不能再想，我不我不我不能，爱情走的太快就像龙卷风，不能承受我已无处可躲，我不要再想 我不要再想，我不我不我不要再想你，现在 你要我说多难堪，我根本就不想分开，为什么还要我用 用微笑来带过，没有 我没有 没有这种天份，包容你也接受他，但不用担心太多，我会一直好好过，我 看着你已经远远离开，我 也会慢慢走开，为什么我连分开都迁就着你，我真的没有天份 安静的没那么快，and i will learn to give up because，我爱你，爱情来的太快就像龙卷风，离不开暴风圈来不及逃，我不能再想 我不能再想，我不我不我不能，爱情走的太快就像龙卷风，不能承受我已无处可躲，我不要再想 我不要再想，我不我不我不要再想你，不知不觉 你已经离开我，不知不觉 我跟了这节奏，后知后觉 又过了一个秋，后知后觉 我该好好生活，你已经离开我，我应该好好地生活，不知不觉 你已经离开我，不知不觉 我跟了这节奏后知后觉 又过了一个秋，后知后觉 后知后觉"},
        {pic:"image/index5.jpg",lyric:"你曾经对我说，你永远不会爱我，如此的坚定伤透我的心，我一直在意你要的，到底是什么，天天的约定，还是患难的真情，是不是泪流乾以后，是否你永远不回头，是不是满心的伤口，还是一个人孤独的走，是不是泪流乾以后，是否你永远不回头，是不是满心的伤口，还是一个人孤独的走，记得我曾经为你说，最爱你的人是我，如此的坚定给你我的心，你却不在意我，究竟付出了什么，等待的心情，还有无尽的深情，是不是泪流乾以后，是否你永远不回头，是不是满心的伤口，还是一个人孤独的走，是不是泪流乾以后，是否你永远不回头，是不是满心的伤口，还是一个人孤独的走，想做你永远的牵挂，为何你不点头，是不是泪流乾以后，是否你永远不回头，是不是满心的伤口，还是一个人孤独的走是不是泪流乾以，是否你永远不回头，是不是满心的伤口，还是一个人孤独的走，是不是泪流乾以后，是否你永远不回头，是不是满心的伤口，还是一个人孤独的走"},
       ]

    function infor(){
        var str=database[index].infor.split(" ");
        $.map(str,function(i,v){
            $('<li>').text(i).appendTo('.lyric');
        })
    }
    function addlyric(){
        var b=pics[index].lyric.split(",");
        $.map(b,function(i,v){
            $('<li>').text(i).appendTo('.lyric');
            $('<li>').text(i).appendTo('.lysic2');
        })
    }

    //切歌
    var index=0;
    $('.prev').on('click',function(){
        index-=1;
        var a=pics[index].pic;
        $('.pic img').attr('src',a);
        if(index==-1){index=database.length-1;};
        audio.src=database[index].src;
        audio.play();

    })
    $('.next').on('click',function(){
        index+=1;
        var a=pics[index].pic;
        $('.pic img').attr('src',a);
        if(index==database.length){index=0;};
        audio.src=database[index].src;
        audio.play();
    })
    function gedan(){
        $('.songs').empty();
        $.each(database,function(i,v){
            if(i===index){
                $('<li><div class="index1"></div><div class="name">'+v.name+'</div><div class="kong"><span class="biao1"></span><span class="biao2"></span><span class="biao3"></span><span class="biao4"></span></div><div class="songer">'+v.songer+'</div>').addClass('active').appendTo('.songs')
            }else{
                $('<li><div class="index">'+i+'</div><div class="name">'+v.name+'</div><div class="kong"><span class="biao1"></span><span class="biao2"></span><span class="biao3"></span><span class="biao4"></span></div><div class="songer">'+v.songer+'</div>').appendTo('.songs')
            }
        })
    }
    gedan();
    $('.songs').on('click',false);
    $('.songs').on('click','li',function(){
        // console.log( $(this).find('.kong'))
        // $(this).find('.kong').css({opacity:1})
        $('.lyric').empty();
        index=$(this).index();
        var a=pics[index].pic;
        $('.pic img').attr('src',a);
        addlyric();
        audio.src=database[index].src;
        audio.play();
    })
    $('.songs').on('mouseover','li',function(){
        $(this).find('.kong').css({opacity:1})
    })
    $('.songs').on('click',false);
    $('.songs').on('mouseout','li',function(){
        $(this).find('.kong').css({opacity:0})
    })
    $('.kong .biao1').on('click',false);
  $('.kong .biao1').on('click',function(){
      $(this).removeClass('biao1').addClass('actives')
  })
    $('.kong').on('click','.biao2',false);
    $('.kong').on('click','.biao3',false);
    $('.kong').on('click','.biao4',false);

    $('.kong').on('click','.biao2',function(){
       // var s=$(this).parent().parent().index();
        $(this).parentsUntil('.songs').remove();
        // database.splice(s,1);
        // gedan();
        audio.pause();
    })
    $('.shanchu').on('click',false);
    $('.shanchu').on('click',function(){
        $('.songs li:last').remove();
        database.pop();
        gedan();
        audio.pause();
    })

    // $('.kong').on('click','.biao4',function(){
    //     $(this).parent().parent().empty();
    //     console.log($(this).parent().parent())
    // })

    //歌词动
    function dong() {
        var d=$('.lyric li').height();
        var h=$('.lyric li').length;
        var b=audio.currentTime/audio.duration;
        $('.lyric').css({top:-(d*h*b)})
        // $('.songs').css({top:-5});
    }
    setInterval(dong,500);

    //纯净界面歌词动
    function dong2() {
        var d2=$('.lysic2 li').height();
        // console.log(d2)
        var h2=$('.lysic2 li').length;
        // console.log(h2)
        var b2=audio.currentTime/audio.duration;
        // console.log(b2)
        $('.lysic2').css({top:-(d2*h2*b2)})
        // $('.lysic2').css({top:-50});
    }
    setInterval(dong2,500);

    //开始  暂停
    bofang.on("click",function(){
        if(audio.paused){
            $('.pic').addClass('img1');
            addlyric();
            audio.play();
        }else{
            $('.pic').removeClass('img1');
            audio.pause();
        }
    })

    //歌曲开始播放之后
   $('audio').on('play',function(){
       bofang.addClass('zanting');
       $('.pic').addClass('img1');
       gedan();
   })
    $('audio').on('pause',function(){
        bofang.removeClass('zanting');
        gedan();
    })

    function timechange(t){
        var s=parseInt(t%60);
        var m=parseInt(t/60);
        s=(s<10)?'0'+s:s;
        m=(m<10)?'0'+m:m;
        var time=m+":"+s ;
        return time;
    }
    //歌曲在播放的过程中会一直调用
    $('audio').on('timeupdate',function(){
        $('.dangqianshichang').text(timechange(audio.currentTime));
        $('.zongshichang').text(timechange(audio.duration));
        $('.jindu .yuandian').css({ left:(audio.currentTime/audio.duration) *($('.jindu .jindutiao').width())})
    });
    //进度条
    $('.jindu .jindutiao').on('click',function(e){
        audio.currentTime=audio.duration *(  e.offsetX/$(this).width() );
        $('.jindu .yuandian').css({ left:(audio.currentTime/audio.duration) *($('.jindu .jindutiao').width())});
    })

    //音量发生变化

    $('audio').on('volumechange',function(){
        if(audio.volume==0){
            $('.laba').addClass('colors');
        }else{
            $('.laba').removeClass('colors');

        }
        //音量条
        $('.yinliangkongzhi .yuandian').css({ left:($('.yinliangkongzhi .yinliangtiao').width()-$('.yinliangkongzhi .yuandian').width()/2)*audio.volume});
    })
    $('.yinliangkongzhi .yinliangtiao').on('click',function(e){
        audio.volume=e.offsetX/$(this).width();
    })
    $('.yinliang .laba').on('click',function(){
        audio.value=0;
        if($(this).attr('pre-voice')){
            audio.volume=$(this).attr('pre-voice');
            $(this).removeAttr('pre-voice');
        }else{
            $(this).attr('pre-voice',audio.volume);
            audio.volume=0;
        }
    })
    var w=document.documentElement.clientWidth;
    var h=document.documentElement.clientHeight;
    $('.backgrounds').css({
        width:w,
        height:h
    })

//音量拖动
    $('.yinliangkongzhi .yuandian').on('mousedown',function(e){
        $(document).on('mousemove',function(e){
            var v=(e.pageX-$('.yinliangkongzhi').offset().left)/$('.yinliangkongzhi').width();
            v=(v>1)?1:v;
            v=(v<0)?0:v;
            audio.volume=v
        })
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
        })
    })

    //拖动进度条
    $('.jindu .yuandian').on('mousedown',function(){
        $(document).on('mousemove',function(e){
            var gjd=(e.pageX-$('.jindu').offset().left)/$('.jindu').width()*audio.duration;
            gjd=gjd>=audio.duration?audio.duration:gjd;
            gjd=gjd<=0?0:gjd;
            audio.currentTime=gjd;
        });
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
            $(document).off('mouseup')
        })

    })

//播放模式切换
//     var qie=0
//     $('#mode').on('click',function () {
//         $(this).removeAttr('class');
//         qie++;
//         if(qie>3){
//             qie=1
//         }
//         if(qie==1){
//             $(this).attr('class','only');
//         }else if(qie==2){
//             $(this).attr('class','random');
//         }else if(qie==3){
//             $(this).attr('class','xun')
//         }
//     })

// //纯净页面切换
    var simpleflag=true;
    $('.tb1').on('click',function(){
        if(simpleflag){
            $(this).addClass('tb11');
            $('.back-neikuang .shang').css('display','none');
            $('.back-neikuang .lysic1').css('display','block');
            simpleflag=false;
        }else{
            $(this).removeClass('tb11');
            $('.back-neikuang .shang').css('display','block');
            $('.back-neikuang .lysic1').css('display','none');
            simpleflag=true;
        }
    })

    $(".jindutiao .j").css({
        width:parseInt($('.j').width() * audio.currentTime/audio.duration)
    })
    $("audio").on("canplay",function () {
        $("audio").triggerHandler("timeupdate")
    })
    $(".jindutiao").click(function (e){
        var ev= e || window.event;
        audio.currentTime=audio.duration * (ev.offsetX/ $(this).width());
        audio.play()
    })
})