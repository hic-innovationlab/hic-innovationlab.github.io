// hacks for Video.js
$(".video-js").each(function(idx,item){
	
	var video = $(item)[0],
			videoId = $(item).attr("id"),
			playBtn = $(this).find(".vjs-big-play-button"),
			volumeSliderTextLabel = "Volume level";
	
			videojs(videoId, {}, function(){
			
				// 1. Send focus to play button after large play it clicked
				var $videoPlayBtn = $("#"+videoId+" .vjs-big-play-button");
						$videoPlayBtn.on("click", function(e){
							e.preventDefault();
							setTimeout(function(){
								$("#"+videoId+" .vjs-play-control").focus();
							},200);
						});
				
				// 2. add missing volume level hidden text to volume slider
				var $volumeSliderTextWraper = $("#"+videoId+" .vjs-volume-bar .vjs-control-text");
						$volumeSliderTextWraper.text(volumeSliderTextLabel);
				
				// 3. add tabindex to video
				$("#"+videoId).find("video").attr("tabindex","0");
	
			}); // videojs event
	
}); // each video
