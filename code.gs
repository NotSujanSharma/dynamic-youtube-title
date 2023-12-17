function myFunction() {
    var channel = 'UCQYZ3OepgjxidFz0-xgk8EQ';
    var data = YouTube.Channels.list('statistics', {id: channel});
    var item = data.items[0];
    var info = item.statistics.subscriberCount;
    var videoID = 'PLQ25Zw50EY'; //https://www.youtube.com/watch?v=PLQ25Zw50EY
    var part = 'snippet,statistics';
    var params = {'id': videoID};
    var response = YouTube.Videos.list(part, params);
    var video = response.items[0];
    var videoViewsCount = video.statistics.viewCount;
    var videoLikeCount = video.statistics.likeCount;
    var videoCommentCount = video.statistics.commentCount;
    var videoTitle = 'Oh no this video has ' + videoViewsCount + ' views and ' + videoLikeCount + ' likes and ' + videoCommentCount + ' comments | subscribers:: ' + info;
    video.snippet.title = videoTitle;

    try
    {
        YouTube.Videos.update(video, part);
    }
    catch(e)
    {
    }
}
