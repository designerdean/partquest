window.PORTAL_UI.toggleSelect=function(e){var l=window.PORTAL_UI.usingAngular?$(e).closest(".listings-result"):$(this).closest(".listings-result");l.toggleClass("selected")},window.PORTAL_UI.usingAngular||$(document).ready(function(){$(".listings-result").click(window.PORTAL_UI.toggleSelect)}),window.PORTAL_UI.toggleDrawer=function(e){window.PORTAL_UI.usingAngular||e.stopPropagation();var l=window.PORTAL_UI.usingAngular?$(e).parents(".listings-result"):$(this).parents(".listings-result"),n=l,t=n.next(".listings-result-drawer").children().children(".listings-result-drawer-collapse"),s=t.children("div");t.outerHeight(n.hasClass("open")?0:s.outerHeight()),n.toggleClass("open")},window.PORTAL_UI.usingAngular||$(document).ready(function(){$(".listings-result-icon").click(window.PORTAL_UI.toggleDrawer)}),window.PORTAL_UI.selectAll=function(){$("tr.listings-result").addClass("selected"),window.PORTAL_UI.enableSelectNone(),window.PORTAL_UI.disableSelectAll()},window.PORTAL_UI.selectNone=function(){$("tr.listings-result").removeClass("selected"),window.PORTAL_UI.disableSelectNone(),window.PORTAL_UI.enableSelectAll()},window.PORTAL_UI.enableSelectNone=function(){$("#selectNoneButton").removeClass("deactive")},window.PORTAL_UI.disableSelectNone=function(){$("#selectNoneButton").addClass("deactive")},window.PORTAL_UI.enableSelectAll=function(){$("#selectAllButton").removeClass("deactive")},window.PORTAL_UI.disableSelectAll=function(){$("#selectAllButton").addClass("deactive")},window.PORTAL_UI.scrollToTop=function(){$(".listings-results-container").animate({scrollTop:0},300)};