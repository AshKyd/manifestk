(function($){
	var appCache = window.applicationCache;
	
	var $dialog = $('<div class="downloading"></div>');
	var $progress = $('<progress max="100" value="0" style="width:100%;margin:40px 0"></progress>');
	
	var cacheTotal = 50;
	var cacheCurrent = 0;
	
	// This is a really rough figure and will be thrown further out the
	// more whitespace you have.
	$.get('manifest.appcache',function(appcache){
		// Assume we have a CACHE MANIFEST, a comment & a line of whitespace.
		var assumedFormattingMarks = 3;
		cacheTotal = appcache.split('\n').length - assumedFormattingMarks;
	});
	
	$dialog.append($progress);
	
	var downloading = function(){
		$dialog.dialog({
			modal: true,
			title : 'Downloading app…'
		});
		$('.ui-dialog-titlebar-close').remove();
	}
	
	var progress = function(){
		cacheCurrent++;
		$($progress).val((cacheCurrent/cacheTotal)*100);
	}
	
	var error = function(){
		$($dialog).dialog('close');
	}
	
	var complete = function(){
		$($progress).val('100');
		window.location.reload();
	}
	
	appCache.addEventListener('downloading',downloading,false);
	appCache.addEventListener('progress',progress,false);
	appCache.addEventListener('updateready',complete,false);
	appCache.addEventListener('cached',complete,false);
	appCache.addEventListener('obsolete',error,false);
	appCache.addEventListener('error',error,false);
		
})(jQuery);
