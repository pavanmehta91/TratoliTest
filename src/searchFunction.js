//returns an array of videos which match the criteria
  var youtubeVideos = {
    "items": [{
      "name": "Yomaste Ladakh VR experience",
      "tag": "Ladakh,india,vr,360,animals",
      "url": "https://www.youtube.com/watch?v=V6sw_JlqO2w",
      "embedUrl:" "https://www.youtube.com/embed/V6sw_JlqO2w"
    }, {
      "name": " Reasons to Travel to Dubai - A 360° VR Experience",
      "tag": "Dubai,360,vr",
      "url": "https://www.youtube.com/watch?v=3-DmcL90Y_s",
      "embedUrl:" "https://www.youtube.com/embed/3-DmcL90Y_s"
    }, {
      "name": "Elephants in Ziro",
      "tag": "Ziro,elephants,vr,360,animals",
      "url": "https://www.youtube.com/watch?v=LJcz9t0vqvw&index=4&list=PLqyZah7czyURRTRjdkghzQoX9u3Q8mkN1",
      "embedUrl:" "https://www.youtube.com/embed/LJcz9t0vqvw"
    }, {
      "name": "Italy 360VR experience",
      "tag": "italy,vr,360",
      "url": "https://www.youtube.com/watch?v=i0qhK1Koz0U&list=PLqyZah7czyURRTRjdkghzQoX9u3Q8mkN1&index=5",
      "embedUrl:" "https://www.youtube.com/embed/i0qhK1Koz0U"
    }]
  };
function getYoutubeList(){
  return youtubeVideos.items;
}
function searchForVideo(keyword) {

  var filteredList = youtubeVideos.items.filter(function(videoItem) {
    return videoItem.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ? true :
      videoItem.tag.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ? true :
      false;
  });

  return filteredList;
}

console.log(searchForVideo('dubai'));
console.log(searchForVideo('360'));
console.log(searchForVideo('india'));