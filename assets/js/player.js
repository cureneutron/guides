
$( document ).ready(function() {
    $("a[title='webm']").each(function(index){
    	var url = this.href;
    	var width = $(this).children("img").width();
    	var height = $(this).children("img").height();
  	var dimensions = "";
    	if (width && height) {
    		dimensions = "width='"+width+"' height='"+height+"'";
    	}
    	$(this).replaceWith("<video "+dimensions+" src='"+url+"' controls>");
    });

    $("a[title='streamable']").each(function(index){
    	var url = this.href;
    	var width = $(this).children("img").width();
    	var height = $(this).children("img").height();

  	var html = "";
    	if (width && height) {
    		html = '<div style="width: '+width+'px; height: '+height+'px; position: relative; "><iframe src="https://streamable.com/s/l30qj/kigmjx" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe></div>';
    	} else {
    		html = '<div style="width: 100%; height: 0px; position: relative; padding-bottom: 56.250%;"><iframe src="https://streamable.com/s/l30qj/kigmjx" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe></div>';
    	}

    	

    	$(this).replaceWith(html);
    });    
});

