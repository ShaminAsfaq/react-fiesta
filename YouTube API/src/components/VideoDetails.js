import React from 'react';


const VideoDetails = ({video}) => {

	if(video){
		const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
		return (
			<div>
				<div className="ui embed">
					<iframe title="video player" src={videoSrc} />
				</div>

				<div className="ui segment">
					<div>
						<h4 className="ui header">
							{video.snippet.title}
						</h4>
						<p>
							{video.snippet.description}
						</p>
					</div>
				</div>
			</div>
		);
	}
	return <div></div>;
}

export default VideoDetails;