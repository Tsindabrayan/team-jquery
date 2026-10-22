$(function(){

    var $menuItems = $("#menu ul").children("li"),
    totalmenuItems = $menuItems.length,
    openedIndex = 2,
    init = function(){
       bindEvents();
       if(validIndex(openedIndex)){
        animateItem($menuItems.eq(openedIndex),true,700);
       }
    },
    bindEvents=function(){
        $menuItems.children(".image").click(function(){
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });

        $('.button').click(function(){
            var newIndex=$(this).index();
            checkAndAnimateItem(newIndex);
        });
    }
    validIndex = function(indexToCheck){
        return(indexToCheck >= 0) && (indexToCheck < totalmenuItems);
    },
    animateItem=function($item,toOpen,speed){
        var $colorImage =$item.find(".color"),
        itemParam =toOpen?{width:"420px"}: {width:"140px"} ,
        $colorImageParam = toOpen?{left:"0px"}:{left:"140px"};
        $colorImage.animate($colorImageParam,speed);
        $item.animate(itemParam,speed);
    },
    checkAndAnimateItem = function(indexToCheckAndAnimate)
    {
        if(openedIndex === indexToCheckAndAnimate){
            animateItem($menuItems.eq(indexToCheckAndAnimate),false,250);
            openedIndex =-1
        }else{
            if(validIndex(indexToCheckAndAnimate)){
                animateItem($menuItems.eq(openedIndex),false,250);
                openedIndex = indexToCheckAndAnimate;
                animateItem($menuItems.eq(indexToCheckAndAnimate),true,250);
            }
        }
    }
    ;

    init();
});