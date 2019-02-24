/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
// function loadPlaylist(){
cordovaHTTP.post("https://google.com/", {
    id: 12,
    message: "test"
}, { Authorization: "OAuth2: token" }, function(response) {
    // prints 200
    console.log(response.status);
    try {
        response.data = JSON.parse(response.data);
        // prints test
        console.log(response.data.message);
    } catch(e) {
        console.error("JSON parsing error");
    }
}, function(response) {
    // prints 403
    console.log(response.status);
    
    //prints Permission denied 
    console.log(response.error);
});

/*
$.post('http://villomediapps.julydesign.com/apps.php?crypto=hiloulaRabetnewRab!',{data: JSON.stringify({ "action": 'playlist' })},function(e){
obj = JSON.parse(e);  console.log('JSON '+obj);

																																	});
*/

/*
let xhr = new XMLHttpRequest();

xhr.open('POST', 'http://villomediapps.julydesign.com/apps.php?crypto=hiloulaRabetnewRab!'); // the third parameter is true by default
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send( "action=playlist" ); // (1)
//JSON.stringify({"action": 'playlist'})
xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;

  

  if (xhr.status != 200) {
    alert(xhr.status + ':' + xhr.statusText);
    $('#error').html(xhr.responseText);
  } else {
    $('#error').html(xhr.responseText);
  }

}*/
				  //  }	
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
