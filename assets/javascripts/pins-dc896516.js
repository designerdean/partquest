$(".listings-pin-name").on("click",function(){var n=$(this);n.parent(".listings-pin").toggleClass("open"),n.parent().nextUntil(".listings-pin").toggleClass("open")});