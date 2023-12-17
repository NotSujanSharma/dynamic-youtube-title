function myFunction() {
    var channel = 'UCQYZ3OepgjxidFz0-xgk8EQ'; //change this to your channel id
    var data = YouTube.Channels.list('statistics', {id: channel});
    var item = data.items[0];
    var totalSubs = item.statistics.subscriberCount; //Gets total subscriber count of the channel
    var videoID = 'PLQ25Zw50EY'; //https://www.youtube.com/watch?v=PLQ25Zw50EY (change this)
    var part = 'snippet,statistics';
    var params = {'id': videoID};
    var response = YouTube.Videos.list(part, params);
    var video = response.items[0];
    var videoViewsCount = video.statistics.viewCount; //Gets the total view count of the video
    var videoLikeCount = video.statistics.likeCount; //Gets the total like count of the video
    var videoCommentCount = video.statistics.commentCount; //Gets the total comment count of the video
    var videoTitle = 'Oh no this video has ' + videoViewsCount + ' views and ' + videoLikeCount + ' likes and ' + videoCommentCount + ' comments | subscribers:: ' + totalSubs; //New video title
    video.snippet.title = videoTitle;

    try
    {
        YouTube.Videos.update(video, part); //Updates the video title
    }
    catch(e)
    {
    }
}
