# dynamic-youtube-title
This script gets the total views and likes of your youtube video through Youtube Analytics API and YouTube Data API v3 and generates a new video title with those data and then updates the video title. Visit this url to see the example:

```
https://www.youtube.com/watch?v=PLQ25Zw50EY
```
We can automate the script by using trigger to call the function every 5 or 10 minutes. (10 minutes time interval is suggested because YouTube gives limited amount of Youtube API v3 quota to call the API daily).
## Usage:
- Create new appscript project by visiting: https://script.google.com/ 
- Goto services and add YouTube Analytics API and YouTube Data API v3.
- Paste the code in code editor.(Change the channel id and the video id.)
- Save the project.
- Go to triggers and set the trigger to call the function every 5 or 10 minutes.
- Congrats !! Now the title of your video will update every 5 or 10 minutes, depending on what you chose.

## Inspiration
I got the idea to write this script from Tom Scott. Don't forget to check the originl video:
```
https://www.youtube.com/watch?v=BxV14h0kFs0
```