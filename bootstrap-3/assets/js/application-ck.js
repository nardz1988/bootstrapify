// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
!function(e){e(function(){var t=e(window),n=e(document.body),r=e(".navbar").outerHeight(!0)+10;n.scrollspy({target:".bs-sidebar",offset:r});t.on("load",function(){n.scrollspy("refresh")});e(".bs-docs-container [href=#]").click(function(e){e.preventDefault()});setTimeout(function(){var t=e(".bs-sidebar");t.affix({offset:{top:function(){var n=t.offset().top,r=parseInt(t.children(0).css("margin-top"),10),i=e(".bs-docs-nav").height();return this.top=n-i-r},bottom:function(){return this.bottom=e(".bs-footer").outerHeight(!0)}}})},100);setTimeout(function(){e(".bs-top").affix()},100);e(".tooltip-demo").tooltip({selector:"[data-toggle=tooltip]",container:"body"});e(".tooltip-test").tooltip();e(".popover-test").popover();e(".bs-docs-navbar").tooltip({selector:"a[data-toggle=tooltip]",container:".bs-docs-navbar .nav"});e("[data-toggle=popover]").popover();e("#fat-btn").click(function(){var t=e(this);t.button("loading");setTimeout(function(){t.button("reset")},3e3)});e(".bs-docs-carousel-example").carousel()})}(window.jQuery);