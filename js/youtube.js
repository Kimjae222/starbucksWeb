 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads
 //    tag.src 함수이름이 같음 절대 값
 function onYouTubeIframeAPIReady() {
  // HTML : <div id="player"></id>
   new YT.Player('player', {
     videoId: 'yz6o31J-eUk', // 최초 재생할 유튜브 영상 ID
     playerVars: {
      autoplay: true, // 자동재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'yz6o31J-eUk' // 반복 재생할 유튜브 영상 ID목록
     },
     events: {
      onReady: function (event) {
        event.target.mute() // mute = 음소거
      }
     }
  });
 }