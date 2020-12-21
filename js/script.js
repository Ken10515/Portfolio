// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {

  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  //Logo-titleの文字アニメーション
$(function(){
var container= $(".logo-title");
var speed =300;
var content =$(container).html();
var text =$.trim(content);
var newHtml =""; 

text.split("").forEach(function(v){
  newHtml += '<span>' + v + '</span>';
});

$(container).html(newHtml);

var txtNum = 0;
setInterval(function(){
  $(container).find('span').eq(txtNum).css({opacity:1});
  txtNum++
},speed);
});

//header アニメーション
$(function(){

  var imgHeight = $('.js-mainVisual').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
  var header = $('.js-header'); //ヘッダーコンテンツ

  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight) {
       //メインビジュアル内にいるので、クラスを外す。
       header.removeClass('headerColor-default');
     }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
       header.addClass('headerColor-default');
     }
  });
});

//スクロールアニメーション1
$(function(){
  $(window).scroll(function(){
    $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).height();
      var windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight){
        $(this).addClass('effect-scroll');
      }
      return false;
    });
  });
});
//スクロールアニメーション2
$(function(){
  $(window).scroll(function(){
    var wHeight = $(window).height();
    var scrollAmount =$(window).scrollTop();
    $('.scrollanimation').each(function(){
      var targetPosition =$(this).offset().top;
      if(scrollAmount > targetPosition - wHeight + 60){
        $(this).addClass("downup");
      }
      return false;
    });
  });
});

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  jQuery(function() {
    var pagetop = $('#page-top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800); //0.5秒かけてトップへ移動
        return false;
    });
});
});

//Google Forms
   // Form Validator
   $(document).ready(function () {
    $("#form").validate({
        rules: {
            "entry.473128081": {
                required: true
            },
            "entry.1301828525": {
                required: true
            }
        },
        messages: {
            "entry.473128081": {
                required: "必須項目です"
            },
            "entry.1301828525": {
                required: "必須項目です"
            }
        },
        submitHandler: function (form) { // for demo
            form.submit();
        }
    });

});