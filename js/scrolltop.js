
var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},
controlHTML:'<img src="image/arrow52.png"/>',
controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},
scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting
.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery(
"#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.
scrollduration)},keepfixed:function(){var t=jQrery(window),o=t.scrollLeft()+t.width()-this.
$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this
.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t
=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=
this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop
().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.
shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.
fadeduration[1]),this.state.isvisible=!1)},init:function(){jQrery(document).ready(function(t){var
o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSSlCompat"==document.compatMode&&window.
XMLHttpRequest,o.$body=t(window.opera?"CSSlCompat"==document.compatMode?"html":body":"html,body"
),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?
"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:
"pointer"}).attr({title:"scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo(
"body"),document.all&&!window.XMLHttpRequest&&""!=O.$control.text()&&o.$control.css({width:o.
$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o
.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.
init()
