"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6442],{58798:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var n=a(63366),l=(a(67294),a(64983)),i=a(55602),r=["components"],o={},s={_frontmatter:o},p=i.Z;function d(e){var t=e.components,a=(0,n.Z)(e,r);return(0,l.kt)(p,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Overview"),(0,l.kt)("p",null,"The Player API enables sites using the ",(0,l.kt)("a",{parentName:"p",href:"https://video.ibm.com/"},"IBM Video Streaming")," embed iframe to build and adapt on the embed live player."),(0,l.kt)("p",null,"The Player API provides basic methods to control the live stream or recorded video playback and enables the user to access essential events of the live stream or the played video."),(0,l.kt)("p",null,"The Player API requires the ",(0,l.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/webmessaging/"},"postMessage")," DOM API, it won’t work in browsers that does not support the postMessage API."),(0,l.kt)("h2",null,"Usage"),(0,l.kt)("p",null,"First, a valid IBM Video Streaming embed iframe will be needed to use the Embed API. Log in to your managed ",(0,l.kt)("a",{href:"https://video.ibm.com/",target:"_blank"},"IBM Video Streaming")," account as an administrator of your channel. Then navigate to the Embed Configurator page on your Dashboard by selecting the “Embed” option as seen below:"),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.08333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAAB4UlEQVQoz3WSzW4TMRSF87i0UQQbWPMcLMqCRd8AFkhIbMKCDUhQBEJqA2nz4yEe22Nf3x9fo8kkaUnLJ81s7ONz7tUZjcfjJ1sebTndc3JycvoQ4/H48ZbJZDKaz+chBFVl5q7rmqZpTGOtFRFmlnswMxENR6MP0+n1fG6Mcc41TS9bm8aYprU2pRTvASkBgPfeWjsiohgjIhJR27YAoJyYwDkvIvVftNaMKKUgovd+lLbUWkWK9x6Jnp59Pnt7WShZ27+V9qhqUe1iQuKdmJlLKbXWUopzjkWmF+uLma1Vtf9uuRsh59yL/2ysMSbnHGO01jKzKqtKCGG1Wg3vHihFne8AcedszGaxuAkhOOestTmj71JMQFuODLVWKaWq7pwRMYQgIqratk77CyrCR557tdait7FTAmstIooUiOH73D0///LzxqfOL5ZLRMw5D39mKkVbFwD2sYnIOdefiaQYrpb+xZsfV0snjGkfnogQkZmPF0ZE3vth523bDjP+N/Yw90EMAMaYQRyD/73uXr27vG5iDH6z2RARAOScAUBE+tg+pJwTZNu6nTNRP48gfJ3ZZy8/fZttai3bCvMh+d3CFUHK3Wgo8FASACjCtTIhPNBN1dKvWhPK+fvZ64+//gKubUAb0+xhTwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Embed Configurator Page Location",title:"Embed Configurator Page Location",src:"/static/7559b89cbebcd5c46c4ff98be6d9255c/3cbba/embed-configurator-page-location.png",srcSet:["/static/7559b89cbebcd5c46c4ff98be6d9255c/7fc1e/embed-configurator-page-location.png 288w","/static/7559b89cbebcd5c46c4ff98be6d9255c/a5df1/embed-configurator-page-location.png 576w","/static/7559b89cbebcd5c46c4ff98be6d9255c/3cbba/embed-configurator-page-location.png 1152w","/static/7559b89cbebcd5c46c4ff98be6d9255c/e6ab7/embed-configurator-page-location.png 1169w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("p",null,"After selecting an option with the IBM Video Streaming Player, the Embed Configurator is displayed. The Configurator enables channel administrators to set the properties of the Player embed. When it’s done, the proper iframe HTML element can be copied to the clipboard with the button which is highlighted in the next picture."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"838px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"83.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFUlEQVQ4y42SS0wTYRSF/6CkEQSlrVBb7BSotNAKPsGAwRhd+CSaEGDjY62JbnTjwsR3jFhfjQvjQldudGPS8lJMWx61iZqoCYu2QEILbZl25n/M/NNpZ2qgkR3ql5Obs7g3uck5wGKx2O12m83GMIxWq9Xr9bo10Gq1BoPBbDabTCaGYYxGIxgeHh4aGhobG/P5fKMreL1ezxp4vd7BwcHi9Hg8QP1D4Q+EEAgh+ivFBcDzPEKIUprP5VVVVRQllUrF4/HYv5RIJAAhgkglRS2IVJLlXKFQWFpa4jIZghBGEEOIIFw2K0KrBvLJVAoIoiBJkizLxc9VVU2z7Lcfvz6PT/qDocBUKDD5xT8Z8k9M+canAhNB/2TQPxEMhr4uLi4CJOSWeImFWUxVRS2oioIw6u8/X66t1VUzm/TbNhoaNtfUVTKOmgZn5bamGsa+Xmdu3tcVjkQBRAQTKlKZiBKlkiiKHJe5fPFKV8+FzuM9thqTsUpfXV5hdOzcv7elotrQ6aiv0ul2trdFoxGAEBJFIStJ2awkSZIgiIjn+q7eAs7DlR2nrcfO7rK3HGzbc/LUma5dTQ6LscNq3F5Z1t7aOhOJAFnOYoxXo1IUBSPYfe4S2LBVY2wu23fCcrTvRE9vd09fu9N+qLl2d/3W8lJNa5MzEg6DFEcFga6mvHyMcXffBQDKNPq6DbZO/eHexo4jZvOWhsbGA+0HWlt2r9NsdDp2RKNRIAg8pZl8Dql5ouZJPocQhse6+wEoXVdRC6qsJdY2jaGxtKREb6pn7Htq65oBKDdbW8KRGYBTn9PxUcoFCjSkil8UEsykE2/ffbg98OzBkxf3Xe57A8/uudz3n768+8h96+HTOy73nUdu96s387EYwNxsmk0SlMaIxYjDXIRl4xwHCeJX+oAwRsXCEAQFjAhe9rBYEirMIH6W8LMCmpOzCTU3x85Nx6en52Pz87HYWorF48lkEvg/To14xv2jAd+I/9NIMDwxAr/5FhcSyf8AvH7uu37z54Dru+vx92s3fr5/9UlgZxdS6WTi3/e/AQYItr0wqTYrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Copy To Clipboard Button Location",title:"Copy To Clipboard Button Location",src:"/static/4b38f2b75a0a60a59dcc05c507d5c6f5/ade3b/embed-configurator-copy-to-clipboard.png",srcSet:["/static/4b38f2b75a0a60a59dcc05c507d5c6f5/7fc1e/embed-configurator-copy-to-clipboard.png 288w","/static/4b38f2b75a0a60a59dcc05c507d5c6f5/a5df1/embed-configurator-copy-to-clipboard.png 576w","/static/4b38f2b75a0a60a59dcc05c507d5c6f5/ade3b/embed-configurator-copy-to-clipboard.png 838w"],sizes:"(max-width: 838px) 100vw, 838px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("p",null,"The next step is to include a unique ID in this iframe element. We will use “PlayerIframe”."),(0,l.kt)("p",null,"Download the Player API from npm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install ibm-video-streaming-web-player-api\n")),(0,l.kt)("p",null,"Create an instance of the Embed API by providing the ID of the iframe. The iframe code should look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<iframe id="PlayerIframe" src="https://video.ibm.com/embed/1524" width="640" height="480" allowfullscreen webkitallowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let viewer = PlayerAPI('PlayerIframe');\n")),(0,l.kt)("p",null,"Content Owners can customize their Player’s user experience by ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#parameters"},"using query parameters")," in the src url above. The list of available URL parameters and their effects can be found here: ",(0,l.kt)("a",{parentName:"p",href:"/player-api-url-parameters"},"URL Parameters")," "),(0,l.kt)("h2",null,"Method Calls"),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"callMethod")," function one can call command methods on the player. Available commands:"),(0,l.kt)("h3",null,"play"),(0,l.kt)("p",null,"Starts playing the currently loaded channel or video."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('play');\n")),(0,l.kt)("h3",null,"pause"),(0,l.kt)("p",null,"Pauses the live stream, or the playback of a video."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('pause');\n")),(0,l.kt)("h3",null,"stop"),(0,l.kt)("p",null,"Pauses the live stream. For on demand videos it stops and jumps back to the start."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('stop');\n")),(0,l.kt)("h3",null,"load"),(0,l.kt)("p",null,"Loads a channel or a video in the player. Requires two additional arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," - content type (‘channel’ or ‘video’)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," - media id")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('load', 'video', 5903947);\nviewer.callMethod('load', 'channel', 1524);\n")),(0,l.kt)("h3",null,"seek"),(0,l.kt)("p",null,"Jumps to given position in a recorded video. Requires one argument:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"position")," - target time in seconds")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('seek', 180);\n")),(0,l.kt)("h3",null,"volume"),(0,l.kt)("p",null,"Sets the playback sound volume. Requires one argument:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"volume")," - percent between 0 and 100")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('volume', 0); //mute\n")),(0,l.kt)("h3",null,"quality"),(0,l.kt)("p",null,"Sets the stream quality, if available. Requires one argument:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"an ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," key from received quality options in ",(0,l.kt)("inlineCode",{parentName:"li"},"quality")," event")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('quality', 0); //set to highest quality\n")),(0,l.kt)("h3",null,"cc (closed caption)"),(0,l.kt)("p",null,"Displays the selected closed caption if available. You can use the ‘None’ option by using -1 as the argument. Otherwise it requires this argument:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"an ",(0,l.kt)("inlineCode",{parentName:"li"},"index")," key from the received closed caption object in ",(0,l.kt)("inlineCode",{parentName:"li"},"cc")," event")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('cc', 1); //enables the closed caption with index 1\nviewer.callMethod('cc', -1); //disables the closed caption\n")),(0,l.kt)("h3",null,"webkitEnterFullscreen (iOS)"),(0,l.kt)("p",null,"Calls ",(0,l.kt)("inlineCode",{parentName:"p"},"webkitEnterFullscreen")," on the ",(0,l.kt)("inlineCode",{parentName:"p"},"HTMLVideoElement")," to access the video’s native fullscreen UI."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('webkitEnterFullscreen');\n")),(0,l.kt)("h2",null,"getProperty"),(0,l.kt)("p",null,"Retrieves a property of the embed player. This method is ",(0,l.kt)("strong",{parentName:"p"},"asynchronous"),", the data will be passed to a callback function, given as argument."),(0,l.kt)("p",null,"Accessible properties by ",(0,l.kt)("inlineCode",{parentName:"p"},"getProperty"),":"),(0,l.kt)("h3",null,"duration"),(0,l.kt)("p",null,"Get the video duration in ",(0,l.kt)("inlineCode",{parentName:"p"},"seconds.milliseconds")," precision."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.getProperty('duration', function (duration) {\n    ...\n}); //passed value is e.g. 120.345\n")),(0,l.kt)("h3",null,"viewers"),(0,l.kt)("p",null,"Get the current viewer count for the loaded live stream. Doesn’t return anything in case of recorded videos."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.getProperty('viewers', function (viewerNumber) {\n    ...\n});\n")),(0,l.kt)("h3",null,"allTimeTotalViewers"),(0,l.kt)("p",null,"Get the accumulated total viewer number for the loaded channel. Doesn’t return anything in case of recorded videos."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.getProperty('allTimeTotalViewers', function (allTimeTotalViewers) {\n    ...\n});\n")),(0,l.kt)("h3",null,"progress"),(0,l.kt)("p",null,"Get the current progress for recorded video playback, in seconds."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.getProperty('progress', function (progress) {\n    ...\n});\n")),(0,l.kt)("h3",null,"content"),(0,l.kt)("p",null,"Get the current content type and ID as an array."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.getProperty('content', function (content) {\n    // content == ['channel', 1524]\n    // or\n    // content == ['recorded', 12345678]\n    ...\n});\n")),(0,l.kt)("h3",null,"playingContent"),(0,l.kt)("p",null,"Get the actual content type and ID as an array. This will return the currently played off-air video’s ID if the loaded content is an off-air channel or with the channel ID if the channel is live."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.callMethod('load', 'channel', 1524);\n// ...\nviewer.getProperty('playingContent', function (content) {\n    // content == ['channel', 1524]\n    //  - if it's live, or\n    // content == ['recorded', 123456]\n    //  - if it's off-air and has off-air video content, or\n    // content == []\n    //  - if it's off-air and doesn't have off-air video content\n    ...\n});\n")),(0,l.kt)("h3",null,"volume"),(0,l.kt)("p",null,"Get the player volume. This will return the actual value of volume in percent."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.getProperty('volume', function (volume) {\n    // volume == 0 for muted playback\n    ...\n});\n")),(0,l.kt)("h2",null,"addListener & removeListener"),(0,l.kt)("p",null,"The embedded player dispatches several events during playback. This method adds or removes event handlers to these events."),(0,l.kt)("p",null,"The event handler callback receives two arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," the type of the event"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," optional data sent along the event (this can be an array, object or boolean variable)")),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('playing', function (type, data) {\n    console.log(type); // \"playing\"\n    console.log(data); // true or false\n});\n")),(0,l.kt)("p",null,"Available events for ",(0,l.kt)("inlineCode",{parentName:"p"},"addListener")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"removeListener"),":"),(0,l.kt)("h3",null,"live"),(0,l.kt)("p",null,"Called when the currently loaded offline channel becomes live."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('live', callback);\n")),(0,l.kt)("h3",null,"offline"),(0,l.kt)("p",null,"Called when the currently loaded live channel goes offline."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('offline', callback);\n")),(0,l.kt)("h3",null,"finished"),(0,l.kt)("p",null,"Called when the currently loaded and played recorded video reaches its end."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('finished', callback);\n")),(0,l.kt)("h3",null,"contentAvailable"),(0,l.kt)("p",null,"Called when all metadata required to start playback is available."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('contentAvailable', callback);\n")),(0,l.kt)("h3",null,"playing"),(0,l.kt)("p",null,"Called when the currently loaded content playback is started or stopped. Sends data along the event:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"playing")," (boolean)")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('playing', function(type, playing) {\n    ...\n});\n")),(0,l.kt)("h3",null,"seekStarted"),(0,l.kt)("p",null,"Called when a user or system initiated seek started."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from")," (number) - previous position in sec"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"to")," (number) - next position in sec"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"initiator")," (string) - user|system")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('seekStarted', function(type, data) {\n    const { from, to, initiator } = data;\n    ...\n});\n")),(0,l.kt)("h3",null,"seekCompleted"),(0,l.kt)("p",null,"Called when a user or system initiated seek completed."),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('seekCompleted', callback);\n")),(0,l.kt)("h3",null,"size"),(0,l.kt)("p",null,"Called when the stream size is available. Sent data is the size of the calculated embed iframe according to the player width, and the stream aspect ratio. The player bar height is included, if the controls are visible.\nSends data along the event:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size")," (array) as ","[ ",(0,l.kt)("inlineCode",{parentName:"li"},"width"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"height")," ]"," in pixels")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('size', callback);\n")),(0,l.kt)("h3",null,"quality"),(0,l.kt)("p",null,"Fired when the stream quality options are available."),(0,l.kt)("p",null,"Receives the following array of quality based objects"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," (number) the ID with which the ",(0,l.kt)("inlineCode",{parentName:"li"},"quality")," method can be called"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"codec")," (string)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"width")," (number) width of the quality version in pixels"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"height")," (number) height of the quality version in pixels"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitrate")," (number) actual bitrate value in kbps"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"transcoded")," (boolean) is this quality one of the transcoded versions or the original ingested quality"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label")," (object): its ",(0,l.kt)("inlineCode",{parentName:"li"},"text")," key has the text to show to users on control UI, eg.: “480p”"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"selected")," (boolean) is this quality set to display")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('quality', function(type, qualities) {\n    ...\n});\n")),(0,l.kt)("p",null,"Example quality object from the quality array:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 0,\n    "codec": "avc1.4d001f",\n    "bitrate": 1406,\n    "transcoded": false,\n    "width": 1280,\n    "height": 720,\n    "label": {\n      "text": "720p",\n      "suffix": " HD",\n      "bitrate": " @ 1.4 Mbps"\n    },\n    "selected": false\n    ...\n}\n')),(0,l.kt)("h3",null,"cc"),(0,l.kt)("p",null,"Fired when there are closed captions available on the stream."),(0,l.kt)("p",null,"Returns an array containing closed captions as objects."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index")," (number) unique index of the closed caption"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label")," (string) displayed label of the closed caption"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"language")," (string) ISO language code of the closed caption"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"country")," (string) ISO code of country"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"active")," (boolean) height of the quality version in pixels")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('cc', function(type, captions) {\n    ...\n});\n")),(0,l.kt)("p",null,"Example cc object from the cc array:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "index": 0,\n    "label": "Spanish",\n    "language": "es",\n    "country": "00",\n    "active": true\n}\n')),(0,l.kt)("h3",null,"content"),(0,l.kt)("p",null,"Called when the video player content changes for some reason. Same data as received in ",(0,l.kt)("inlineCode",{parentName:"p"},"getProperty('content')")),(0,l.kt)("p",null,"Received arguments: ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," (array)"),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('content', callback);\n")),(0,l.kt)("h3",null,"liveCtaUpdate"),(0,l.kt)("p",null,"Fired when there is a live CTA (call to action) video overlay available on the stream."),(0,l.kt)("p",null,"Returns an object:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"buttonText")," (string) text of the button"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"buttonUrl")," (string) URL of CTA"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," (string) description of CTA"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," (integer) ID of CTA"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"imageUrl")," (string) URL of the image"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"title")," (string) title of CTA")),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('liveCtaUpdate', callback);\n")),(0,l.kt)("p",null,"Example CTA object when activated:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "activate": {\n        "buttonText": "Click here!",\n        "buttonUrl": "https://video.ibm.com",\n        "description": "The Future of Video with Watson",\n        "id": 123,\n        "imageUrl": "URL of image",\n        "title": "IBM Video Streaming"\n    }\n}\n')),(0,l.kt)("h3",null,"error"),(0,l.kt)("p",null,"Fired when an unexpected event occures."),(0,l.kt)("p",null,"Returns an object:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," (string) error name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message")," (string) error message")),(0,l.kt)("p",null,"Available error type(s):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"autoplayRejected")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"webkitEnterFullscreenRejected"))),(0,l.kt)("h6",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"viewer.addListener('error', function(type, errorEvent) {\n    switch (errorEvent.name) {\n        case 'autoplayRejected':\n            // TODO: display fallback button\n            console.log(errorEvent.message);\n            break;\n        case 'webkitEnterFullscreenRejected':\n            // TODO: browser prevented the request, user gesture is needed\n            console.log(errorEvent.message);\n            break;\n        // no default\n    }\n});\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-api-usage-mdx-d5e549c8310c0d1866f7.js.map