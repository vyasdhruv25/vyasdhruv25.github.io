(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.DropDown_AF1B1389_BFBC_AC19_41DB_13D90BAE58F1_playlist,this.mainPlayList])",
 "children": [
  "this.MainViewer",
  "this.DropDown_AF1B1389_BFBC_AC19_41DB_13D90BAE58F1",
  "this.Image_AF4EBF4F_BFB4_D41A_41DB_867A5B1429A7",
  "this.Image_B0F7428F_BFB5_6C1A_419F_D6BDB4507B56",
  "this.Image_AF79384F_BFB4_FC19_41E3_A296915AB6AD",
  "this.Image_B01C42B4_BFAB_AC0E_41E7_78CC75D3A607",
  "this.Container_D24D7943_CAD8_6BAB_41E2_9A4704F8B0A5",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } }
 },
 "paddingLeft": 0,
 "defaultVRPointer": "laser",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_D24D5943_CAD8_6BAB_41DE_0C1FD4A27F98",
 "borderSize": 0,
 "paddingBottom": 0,
 "desktopMipmappingEnabled": false,
 "paddingTop": 0,
 "definitions": [{
 "initialPosition": {
  "yaw": -20.79,
  "class": "PanoramaCameraPosition",
  "pitch": -0.85
 },
 "id": "panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_5C5AF2C2_5070_5142_41CB_8338AD790498",
   "begin": "this.setEndToItemIndex(this.DropDown_AF1B1389_BFBC_AC19_41DB_13D90BAE58F1_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_camera"
  },
  {
   "media": "this.panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036",
   "begin": "this.setEndToItemIndex(this.DropDown_AF1B1389_BFBC_AC19_41DB_13D90BAE58F1_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_camera"
  },
  {
   "media": "this.panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880",
   "begin": "this.setEndToItemIndex(this.DropDown_AF1B1389_BFBC_AC19_41DB_13D90BAE58F1_playlist, 2, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_camera"
  }
 ],
 "id": "DropDown_AF1B1389_BFBC_AC19_41DB_13D90BAE58F1_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4241310A_5070_50C2_41D3_D75C511EA35A",
  "this.overlay_4246A10B_5070_50C2_41BE_EBAC90D8ECEF",
  "this.overlay_4245610B_5070_50C2_41A5_305B182895A8",
  "this.overlay_4245110B_5070_50C2_419F_4A2502FFB515",
  "this.overlay_4245010B_5070_50C2_41BA_4AB0AC30BD05",
  "this.overlay_4245210B_5070_50C2_41C0_C309B5B2598C",
  "this.overlay_4245C10B_5070_50C2_41BC_DE8AE3372A7A",
  "this.overlay_4245E10B_5070_50C2_41D3_75D5E0501CDA",
  "this.overlay_4245810B_5070_50C2_41CD_55240DDE4AE1",
  "this.overlay_4245A10B_5070_50C2_41D1_0B5070209B83",
  "this.overlay_4244110B_5070_50C2_41BE_FF92C2ABB57D",
  "this.overlay_4244010B_5070_50C2_41C5_76EF5FEB88D6",
  "this.overlay_4244D10B_5070_50C2_41AD_9198CE6811B2",
  "this.overlay_4244F10B_5070_50C2_41CD_BDCF2717E44B",
  "this.overlay_4244E10C_5070_50C6_41AB_640AE52C82B6",
  "this.overlay_4244B10C_5070_50C6_41C5_EB8A4137F8E3",
  "this.overlay_4244A10C_5070_50C6_418A_6A7E20DE0E4B",
  "this.overlay_424B710C_5070_50C6_41AE_10A73FFBF881",
  "this.overlay_424B010C_5070_50C6_41C9_5D9134BDCC64",
  "this.overlay_424B310C_5070_50C6_41C4_1C37276DD043",
  "this.overlay_424BD10C_5070_50C6_4199_3F6C0BD1C168",
  "this.overlay_424BF10C_5070_50C6_4187_B13A9A127908",
  "this.overlay_424BA10C_5070_50C6_41C7_9B528718F1BC",
  "this.overlay_424A410C_5070_50C6_417C_3B90ED214F0E",
  "this.overlay_424A110C_5070_50C6_41B4_ABDECC63441D",
  "this.overlay_424A210C_5070_50C6_41B2_09E7D9026C2D",
  "this.overlay_424AD10C_5070_50C6_41D1_780C97EE128E",
  "this.overlay_424B110C_5070_50C6_416F_789EBBEB4AB9",
  "this.overlay_424B310C_5070_50C6_41AD_D029C2816663",
  "this.overlay_424BC10C_5070_50C6_41B3_CDBC2AE837EF",
  "this.overlay_424BF10C_5070_50C6_41CA_C1C1215A01FE",
  "this.overlay_424B910C_5070_50C6_41A0_DF8F80B1D487",
  "this.overlay_424BB10C_5070_50C6_41C9_AD1FE7F7AEB0",
  "this.overlay_424A410C_5070_50C6_41AB_3D6A508446F3",
  "this.overlay_424A010C_5070_50C6_41D0_5D3E471B1120",
  "this.overlay_5FA4806D_5070_B146_41BD_2EF209A2075D",
  "this.overlay_407C4E5A_5070_514D_41D2_F7BC4289368B",
  "this.popup_41A990E4_5070_5146_4182_8EFE03CC5E86",
  "this.overlay_40D93628_5070_D0CE_41C3_02007E98D595",
  "this.overlay_416E99F6_5070_D342_41A7_8092AEC3C58A",
  "this.overlay_41E1F6CC_5070_D145_41CC_8740355646A6",
  "this.overlay_41D9011C_5070_50C5_41C6_00A4F1E60FAB",
  "this.overlay_42291D79_5071_B34F_41C2_EA4C7A1FC9C2",
  "this.overlay_40C5E602_5071_F0C2_4195_6474354BDE1E",
  "this.overlay_41EBD153_5071_B343_41CD_F594F691E311",
  "this.overlay_40999FC9_5070_4F4F_41D1_2F88D98ADDCE",
  "this.overlay_41F77237_5070_B0C2_41D1_490202E1454A",
  "this.overlay_40959732_5070_F0C2_41B4_2490C8CCBEF3",
  "this.overlay_4198D1D5_5070_B347_41C0_B9E7480F7587",
  "this.overlay_41025E0C_5070_70C5_41D3_F16E9FAEB693",
  "this.overlay_415256E4_5073_D146_41C0_356F82EC66A5",
  "this.overlay_414A6450_5070_715E_41C4_AE7B9385B0C0",
  "this.overlay_417BA057_5070_B142_4189_0D2186AD7F2A",
  "this.overlay_412C0302_5070_B0BD_4181_51FB20B5A612",
  "this.overlay_4082B4CA_5070_5142_419F_C5777B5C1E60",
  "this.overlay_40EC7A75_5071_B146_41B7_FE4F4136552C",
  "this.overlay_414C4854_5070_5146_419D_BA5F13AAD21A",
  "this.overlay_4177A98D_5091_B3C6_41C8_4BC09398F856",
  "this.popup_406A7494_5090_51C6_41CE_66A03EC319F7"
 ],
 "thumbnailUrl": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_t.jpg",
 "id": "panorama_5C5AF2C2_5070_5142_41CB_8338AD790498",
 "label": "Nearby Area",
 "audios": [
  "this.audio_44F7E6A1_5090_51FF_41D0_73E8D8A7691E"
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -21.86,
  "class": "PanoramaCameraPosition",
  "pitch": -0.14
 },
 "id": "panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "loop": true,
 "audio": "this.audioresource_B14A6102_BFC5_7165_41C7_0C97D394A474",
 "autoplay": true,
 "id": "audio_B14A1102_BFC5_7165_41E3_797383439FAD",
 "class": "PanoramaAudio",
 "data": {
  "label": "Confident"
 }
},
{
 "levels": [
  {
   "url": "media/popup_41A990E4_5070_5146_4182_8EFE03CC5E86_0_0.jpg",
   "width": 4961,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_41A990E4_5070_5146_4182_8EFE03CC5E86_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2896
  },
  {
   "url": "media/popup_41A990E4_5070_5146_4182_8EFE03CC5E86_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1448
  },
  {
   "url": "media/popup_41A990E4_5070_5146_4182_8EFE03CC5E86_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 724
  },
  {
   "url": "media/popup_41A990E4_5070_5146_4182_8EFE03CC5E86_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 362
  }
 ],
 "id": "ImageResource_41A850E4_5070_5146_41C5_DBFA71114856",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.panorama_5C5AF2C2_5070_5142_41CB_8338AD790498",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_camera"
  },
  {
   "media": "this.panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_camera"
  },
  {
   "media": "this.panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "loop": true,
 "audio": "this.audioresource_B14A6102_BFC5_7165_41C7_0C97D394A474",
 "autoplay": true,
 "id": "audio_B1495019_BFC5_6F67_41D2_790039F8EF97",
 "class": "PanoramaAudio",
 "data": {
  "label": "Confident"
 }
},
{
 "loop": true,
 "audio": "this.audioresource_B14A6102_BFC5_7165_41C7_0C97D394A474",
 "autoplay": true,
 "id": "audio_44F7E6A1_5090_51FF_41D0_73E8D8A7691E",
 "class": "PanoramaAudio",
 "data": {
  "label": "Confident"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880_t.jpg",
 "id": "panorama_B35B32AB_BFC7_50BA_41B1_2D06D114B880",
 "label": "7th Floor",
 "audios": [
  "this.audio_B1495019_BFC5_6F67_41D2_790039F8EF97"
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "width": 7168,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 7168
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036_t.jpg",
 "id": "panorama_B51FC0CF_BFC7_70FA_41E4_DA418DFE9036",
 "label": "13th Floor",
 "audios": [
  "this.audio_B14A1102_BFC5_7165_41E3_797383439FAD"
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveRight": "this.IconButton_D24D3943_CAD8_6BAB_41E1_A3CE6085D3DC",
 "class": "PanoramaPlayer",
 "buttonPlayLeft": "this.IconButton_D24D8943_CAD8_6BAB_41D8_C90304E09814",
 "buttonZoomOut": "this.IconButton_D24C7943_CAD8_6BAB_41E0_33B9D38DE597",
 "buttonMoveLeft": "this.IconButton_D24DB943_CAD8_6BAB_4194_E51B860AB779",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonPlayRight": "this.IconButton_D24D2943_CAD8_6BAB_41C8_6598C7CFA89A",
 "viewerArea": "this.MainViewer",
 "buttonPause": "this.IconButton_D24DF943_CAD8_6BAB_41C5_80B96005AFC8",
 "buttonMoveDown": "this.IconButton_D24DE943_CAD8_6BAB_41D0_9DE91F97BE4C",
 "buttonRestart": "this.IconButton_D24D9943_CAD8_6BAB_41E1_154BB1C139FC",
 "buttonZoomIn": "this.IconButton_D24D4943_CAD8_6BAB_41E7_5F10545596BF",
 "buttonMoveUp": "this.IconButton_D24DC943_CAD8_6BAB_41CA_478A1C3E3003",
 "mouseControlMode": "drag_acceleration"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 72.06,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "id": "popup_41A990E4_5070_5146_4182_8EFE03CC5E86",
 "yaw": 0.26,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_41A990E4_5070_5146_4182_8EFE03CC5E86_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 724
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -78.42
},
{
 "levels": [
  {
   "url": "media/popup_406A7494_5090_51C6_41CE_66A03EC319F7_0_0.jpg",
   "width": 4961,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_406A7494_5090_51C6_41CE_66A03EC319F7_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2896
  },
  {
   "url": "media/popup_406A7494_5090_51C6_41CE_66A03EC319F7_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1448
  },
  {
   "url": "media/popup_406A7494_5090_51C6_41CE_66A03EC319F7_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 724
  },
  {
   "url": "media/popup_406A7494_5090_51C6_41CE_66A03EC319F7_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 362
  }
 ],
 "id": "ImageResource_444E0D85_5090_73C6_41CA_56F896768D27",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -153.04,
  "class": "PanoramaCameraPosition",
  "pitch": -0.78
 },
 "id": "panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_camera",
 "displayOriginPosition": {
  "yaw": -153.04,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": -0.78,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 70.48,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "id": "popup_406A7494_5090_51C6_41CE_66A03EC319F7",
 "yaw": 0.87,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_406A7494_5090_51C6_41CE_66A03EC319F7_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 724
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -78.73
},
{
 "playbackBarBottom": 5,
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "toolTipFontSize": "1.11vmin",
 "toolTipShadowBlurRadius": 3,
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "toolTipShadowColor": "#333333",
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadWidth": 6,
 "minWidth": 100,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "borderSize": 0,
 "height": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "displayTooltipInTouchScreens": true,
 "toolTipFontColor": "#606060",
 "transitionMode": "blending",
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingBottom": 0,
 "paddingTop": 0,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "popUpFontColor": "#000000",
 "arrowColor": "#8A8A8A",
 "id": "DropDown_AF1B1389_BFBC_AC19_41DB_13D90BAE58F1",
 "popUpShadowOpacity": 0,
 "popUpBorderRadius": 0,
 "popUpShadowSpread": 1,
 "right": "0.58%",
 "width": "11.212%",
 "backgroundColorDirection": "vertical",
 "paddingRight": 5,
 "arrowBeforeLabel": false,
 "paddingLeft": 5,
 "popUpShadowColor": "#000000",
 "minHeight": 20,
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "selectedPopUpBackgroundColor": "#33CCFF",
 "top": "1.89%",
 "playList": "this.DropDown_AF1B1389_BFBC_AC19_41DB_13D90BAE58F1_playlist",
 "popUpBackgroundColor": "#FFFFFF",
 "minWidth": 200,
 "fontSize": 14,
 "borderSize": 0,
 "backgroundOpacity": 0.9,
 "backgroundColor": [
  "#FFFFFF",
  "#999999"
 ],
 "paddingBottom": 0,
 "gap": 0,
 "popUpBackgroundOpacity": 0.9,
 "paddingTop": 0,
 "popUpGap": 0,
 "height": "3.618%",
 "popUpShadow": false,
 "fontStyle": "normal",
 "class": "DropDown",
 "borderRadius": 4,
 "data": {
  "name": "DropDown1204"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "popUpShadowBlurRadius": 6,
 "shadow": false,
 "fontColor": "#333333",
 "fontWeight": "normal"
},
{
 "maxHeight": 329,
 "maxWidth": 886,
 "id": "Image_AF4EBF4F_BFB4_D41A_41DB_867A5B1429A7",
 "left": "0.04%",
 "width": "10.705%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_AF4EBF4F_BFB4_D41A_41DB_867A5B1429A7.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "height": "8.051%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://www.shreebuildcon.com/', '_blank')",
 "class": "Image",
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6075"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 701,
 "maxWidth": 70,
 "id": "Image_B0F7428F_BFB5_6C1A_419F_D6BDB4507B56",
 "left": "0%",
 "width": "3.046%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_B0F7428F_BFB5_6C1A_419F_D6BDB4507B56.png",
 "paddingLeft": 0,
 "minHeight": 70,
 "top": "47.2%",
 "height": "5.525%",
 "minWidth": 70,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://wa.me/+919825700500', '_blank')",
 "class": "Image",
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6146"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "Image_AF79384F_BFB4_FC19_41E3_A296915AB6AD",
 "right": "0%",
 "width": "3.264%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_AF79384F_BFB4_FC19_41E3_A296915AB6AD.png",
 "paddingLeft": 0,
 "minHeight": 70,
 "top": "46.96%",
 "height": "5.919%",
 "minWidth": 70,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://maps.app.goo.gl/UDbB5MepCU2ibDT57', '_blank')",
 "class": "Image",
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6189"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 30,
 "maxWidth": 30,
 "id": "Image_B01C42B4_BFAB_AC0E_41E7_78CC75D3A607",
 "right": "0%",
 "width": "1.305%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_B01C42B4_BFAB_AC0E_41E7_78CC75D3A607.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": "0%",
 "height": "2.368%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://spin360.in/', '_blank')",
 "class": "Image",
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6373"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_D24C7943_CAD8_6BAB_41E0_33B9D38DE597",
  "this.IconButton_D24D9943_CAD8_6BAB_41E1_154BB1C139FC",
  "this.IconButton_D24D8943_CAD8_6BAB_41D8_C90304E09814",
  "this.IconButton_D24DB943_CAD8_6BAB_4194_E51B860AB779",
  "this.Container_D24DD943_CAD8_6BAB_41D1_EF90FC3B0979",
  "this.IconButton_D24D3943_CAD8_6BAB_41E1_A3CE6085D3DC",
  "this.IconButton_D24D2943_CAD8_6BAB_41C8_6598C7CFA89A",
  "this.IconButton_D24D5943_CAD8_6BAB_41DE_0C1FD4A27F98",
  "this.IconButton_D24D4943_CAD8_6BAB_41E7_5F10545596BF"
 ],
 "id": "Container_D24D7943_CAD8_6BAB_41E2_9A4704F8B0A5",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "bottom": "0.06%",
 "height": "16.103%",
 "minWidth": 20,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "gap": 4,
 "paddingTop": 0,
 "overflow": "hidden",
 "class": "Container",
 "layout": "horizontal",
 "data": {
  "name": "Container8703"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "borderRadius": 0
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "borderSize": 0,
 "backgroundOpacity": 0.55,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "borderRadius": 0,
 "data": {
  "name": "UIComponent1876"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "borderRadius": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage1877"
 },
 "backgroundColorRatios": [],
 "propagateClick": false,
 "visible": false,
 "shadow": false
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "id": "closeButtonPopupPanorama",
 "fontFamily": "Arial",
 "right": 10,
 "iconHeight": 20,
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconColor": "#000000",
 "minHeight": 0,
 "iconLineWidth": 5,
 "borderColor": "#000000",
 "top": 10,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minWidth": 0,
 "fontSize": "1.29vmin",
 "pressedIconColor": "#888888",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 5,
 "label": "",
 "paddingTop": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 5,
 "fontStyle": "normal",
 "class": "CloseButton",
 "borderRadius": 0,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "rollOverIconColor": "#666666",
 "propagateClick": false,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "fontWeight": "normal",
 "shadow": false,
 "iconWidth": 20,
 "cursor": "hand",
 "data": {
  "name": "CloseButton1878"
 }
},
{
 "id": "IconButton_D24D5943_CAD8_6BAB_41DE_0C1FD4A27F98",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24D5943_CAD8_6BAB_41DE_0C1FD4A27F98.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8714"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24D5943_CAD8_6BAB_41DE_0C1FD4A27F98_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 41.41,
   "yaw": 0.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_0_1_0_map.gif",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -78.42
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_41A990E4_5070_5146_4182_8EFE03CC5E86, {'pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'pressedBorderColor':'#000000','borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBorderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedIconLineWidth':5,'iconLineWidth':5,'paddingLeft':5,'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'iconWidth':20,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, this.ImageResource_41A850E4_5070_5146_41C5_DBFA71114856, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_4241310A_5070_50C2_41D3_D75C511EA35A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.59,
   "yaw": 143.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_1_1_0_map.gif",
      "width": 8,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0.6
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.59,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_1_0.png",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 778
     }
    ]
   },
   "pitch": 0.6,
   "yaw": 143.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4246A10B_5070_50C2_41BE_EBAC90D8ECEF",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.54,
   "yaw": 158.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_2_1_0_map.gif",
      "width": 6,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.48
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.54,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_2_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 929
     }
    ]
   },
   "pitch": 2.48,
   "yaw": 158.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4245610B_5070_50C2_41A5_305B182895A8",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.84,
   "yaw": -171.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_3_1_0_map.gif",
      "width": 11,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.52
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.84,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_3_0.png",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 871
     }
    ]
   },
   "pitch": -2.52,
   "yaw": -171.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4245110B_5070_50C2_419F_4A2502FFB515",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.54,
   "yaw": -152.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_4_1_0_map.gif",
      "width": 7,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.99
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.54,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_4_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 853
     }
    ]
   },
   "pitch": -3.99,
   "yaw": -152.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4245010B_5070_50C2_41BA_4AB0AC30BD05",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.47,
   "yaw": -138.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_5_1_0_map.gif",
      "width": 7,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.25
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.47,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_5_0.png",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 756
     }
    ]
   },
   "pitch": -2.25,
   "yaw": -138.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4245210B_5070_50C2_41C0_C309B5B2598C",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.49,
   "yaw": -105.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_6_1_0_map.gif",
      "width": 13,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.94
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.49,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_6_0.png",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 430
     }
    ]
   },
   "pitch": -1.94,
   "yaw": -105.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4245C10B_5070_50C2_41BC_DE8AE3372A7A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.51,
   "yaw": -96.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_7_1_0_map.gif",
      "width": 13,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 1.67
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.51,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_7_0.png",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 433
     }
    ]
   },
   "pitch": 1.67,
   "yaw": -96.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4245E10B_5070_50C2_41D3_75D5E0501CDA",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.45,
   "yaw": -72.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_8_1_0_map.gif",
      "width": 10,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.99
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.45,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_8_0.png",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 517
     }
    ]
   },
   "pitch": 2.99,
   "yaw": -72.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4245810B_5070_50C2_41CD_55240DDE4AE1",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.53,
   "yaw": -68.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_9_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 1.04
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.53,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_9_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 401
     }
    ]
   },
   "pitch": 1.04,
   "yaw": -68.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4245A10B_5070_50C2_41D1_0B5070209B83",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.54,
   "yaw": -63.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_10_1_0_map.gif",
      "width": 8,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": 4.56
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.54,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_10_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 739
     }
    ]
   },
   "pitch": 4.56,
   "yaw": -63.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4244110B_5070_50C2_41BE_FF92C2ABB57D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.53,
   "yaw": -59.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_11_1_0_map.gif",
      "width": 12,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.85
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.53,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_11_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 531
     }
    ]
   },
   "pitch": 2.85,
   "yaw": -59.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4244010B_5070_50C2_41C5_76EF5FEB88D6",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.53,
   "yaw": -55.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_12_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 181
     }
    ]
   },
   "pitch": 1.96
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.53,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_12_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 362
     }
    ]
   },
   "pitch": 1.96,
   "yaw": -55.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4244D10B_5070_50C2_41AD_9198CE6811B2",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.53,
   "yaw": -53.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_13_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 181
     }
    ]
   },
   "pitch": 0.06
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.53,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_13_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 362
     }
    ]
   },
   "pitch": 0.06,
   "yaw": -53.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4244F10B_5070_50C2_41CD_BDCF2717E44B",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.53,
   "yaw": -46.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_14_1_0_map.gif",
      "width": 11,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.71
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.53,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_14_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 539
     }
    ]
   },
   "pitch": 3.71,
   "yaw": -46.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4244E10C_5070_50C6_41AB_640AE52C82B6",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.53,
   "yaw": -32.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_15_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ]
   },
   "pitch": 2.92
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.53,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_15_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 353
     }
    ]
   },
   "pitch": 2.92,
   "yaw": -32.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4244B10C_5070_50C6_41C5_EB8A4137F8E3",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.05,
   "yaw": 143.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_16_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.66
  }
 ],
 "data": {
  "label": "Adalaj Cross Road"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_16_0.png",
      "width": 670,
      "class": "ImageResourceLevel",
      "height": 143
     }
    ]
   },
   "pitch": 7.66,
   "hfov": 11.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 143.11,
   "distance": 50
  }
 ],
 "id": "overlay_4244A10C_5070_50C6_418A_6A7E20DE0E4B",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.73,
   "yaw": 158.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_17_0_map.gif",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.79
  }
 ],
 "data": {
  "label": "Trimandir, Adalaj"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_17_0.png",
      "width": 595,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 10.79,
   "hfov": 9.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 158.66,
   "distance": 50
  }
 ],
 "id": "overlay_424B710C_5070_50C6_41AE_10A73FFBF881",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.55,
   "yaw": -171.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_18_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.36
  }
 ],
 "data": {
  "label": "SG Highway"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_18_0.png",
      "width": 456,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ]
   },
   "pitch": 5.36,
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -171.69,
   "distance": 50
  }
 ],
 "id": "overlay_424B010C_5070_50C6_41C9_5D9134BDCC64",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.52,
   "yaw": -152.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_19_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.16
  }
 ],
 "data": {
  "label": "Thakers Farm"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_19_0.png",
      "width": 513,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ]
   },
   "pitch": 4.16,
   "hfov": 8.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -152.15,
   "distance": 50
  }
 ],
 "id": "overlay_424B310C_5070_50C6_41C4_1C37276DD043",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.1,
   "yaw": -138.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_20_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.58
  }
 ],
 "data": {
  "label": "Swagat Holiday Mall"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_20_0.png",
      "width": 730,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ]
   },
   "pitch": 4.58,
   "hfov": 12.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -138.21,
   "distance": 50
  }
 ],
 "id": "overlay_424BD10C_5070_50C6_4199_3F6C0BD1C168",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.88,
   "yaw": -96.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_21_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.85
  }
 ],
 "data": {
  "label": "Mahatma Mandir"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_21_0.png",
      "width": 597,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ]
   },
   "pitch": 5.85,
   "hfov": 9.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -96.52,
   "distance": 50
  }
 ],
 "id": "overlay_424BF10C_5070_50C6_4187_B13A9A127908",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.71,
   "yaw": -105.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_22_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.17
  }
 ],
 "data": {
  "label": "Sargasan Cross"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_22_0.png",
      "width": 584,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ]
   },
   "pitch": 2.17,
   "hfov": 9.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.6,
   "distance": 50
  }
 ],
 "id": "overlay_424BA10C_5070_50C6_41C7_9B528718F1BC",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.85,
   "yaw": -77.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_23_1_0_map.gif",
      "width": 13,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.85,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_23_0.png",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 730
     }
    ]
   },
   "pitch": -4,
   "yaw": -77.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_424A410C_5070_50C6_417C_3B90ED214F0E",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.71,
   "yaw": -72.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_24_0_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.04
  }
 ],
 "data": {
  "label": "Gujarat Vidhan Sabha"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_24_0.png",
      "width": 772,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ]
   },
   "pitch": 8.04,
   "hfov": 12.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -72.19,
   "distance": 50
  }
 ],
 "id": "overlay_424A110C_5070_50C6_41B4_ABDECC63441D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.52,
   "yaw": -77.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_25_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.58
  }
 ],
 "data": {
  "label": "Sargasan lake"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_25_0.png",
      "width": 512,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ]
   },
   "pitch": 2.58,
   "hfov": 8.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.82,
   "distance": 50
  }
 ],
 "id": "overlay_424A210C_5070_50C6_41B2_09E7D9026C2D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 3.18,
   "yaw": -68.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_26_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.93
  }
 ],
 "data": {
  "label": "TCS"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_26_0.png",
      "width": 191,
      "class": "ImageResourceLevel",
      "height": 117
     }
    ]
   },
   "pitch": 4.93,
   "hfov": 3.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -68.62,
   "distance": 50
  }
 ],
 "id": "overlay_424AD10C_5070_50C6_41D1_780C97EE128E",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 3.4,
   "yaw": -59.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_27_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.92
  }
 ],
 "data": {
  "label": "NIFT"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_27_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 117
     }
    ]
   },
   "pitch": 7.92,
   "hfov": 3.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -59.57,
   "distance": 50
  }
 ],
 "id": "overlay_424B110C_5070_50C6_416F_789EBBEB4AB9",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -63.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_28_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.35
  }
 ],
 "data": {
  "label": "Infocity"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_28_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ]
   },
   "pitch": 11.35,
   "hfov": 4.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.84,
   "distance": 50
  }
 ],
 "id": "overlay_424B310C_5070_50C6_41AD_D029C2816663",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 5.13,
   "yaw": -55.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_29_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.79
  }
 ],
 "data": {
  "label": "DA-IICT"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_29_0.png",
      "width": 309,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 5.79,
   "hfov": 5.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -55.85,
   "distance": 50
  }
 ],
 "id": "overlay_424BC10C_5070_50C6_41B3_CDBC2AE837EF",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": -46.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_30_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.5
  }
 ],
 "data": {
  "label": "Raksha Shakti Cir"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_30_0.png",
      "width": 576,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 8.5,
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -46.93,
   "distance": 50
  }
 ],
 "id": "overlay_424BF10C_5070_50C6_41CA_C1C1215A01FE",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 2.81,
   "yaw": -53.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_31_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.57
  }
 ],
 "data": {
  "label": "NID"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_31_0.png",
      "width": 169,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ]
   },
   "pitch": 3.57,
   "hfov": 2.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.22,
   "distance": 50
  }
 ],
 "id": "overlay_424B910C_5070_50C6_41A0_DF8F80B1D487",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.1,
   "yaw": -32.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_32_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.44
  }
 ],
 "data": {
  "label": "GIFT City"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_32_0.png",
      "width": 369,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 6.44,
   "hfov": 6.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -32.84,
   "distance": 50
  }
 ],
 "id": "overlay_424BB10C_5070_50C6_41C9_AD1FE7F7AEB0",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 1.17,
   "yaw": -14.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_33_1_0_map.gif",
      "width": 4,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -17.28
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.17,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_33_0.png",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": -17.28,
   "yaw": -14.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_424A410C_5070_50C6_41AB_3D6A508446F3",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.21,
   "yaw": -14.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_34_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.02
  }
 ],
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.openLink('https://www.reneevdevelopers.com/ekaiva/360-ekaiva.htm', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_34_0.png",
      "width": 620,
      "class": "ImageResourceLevel",
      "height": 391
     }
    ]
   },
   "pitch": 8.02,
   "yaw": -14.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_424A010C_5070_50C6_41D0_5D3E471B1120",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 0.53,
   "yaw": 8.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_35_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ]
   },
   "pitch": -1.16
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 0.53,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_35_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 353
     }
    ]
   },
   "pitch": -1.16,
   "yaw": 8.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5FA4806D_5070_B146_41BD_2EF209A2075D",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.46,
   "yaw": 8.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_36_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.22
  }
 ],
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.openLink('http://tour.spin360.in/TatvamAura', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.46,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_36_0.png",
      "width": 449,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 3.22,
   "yaw": 8.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_407C4E5A_5070_514D_41D2_F7BC4289368B",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.16,
   "yaw": -14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_37_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.58
  }
 ],
 "data": {
  "label": "Circle Point 02a"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43BB3A86_5070_D1C5_41CE_495C93AFF010",
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -39.58,
   "yaw": -14,
   "distance": 100
  }
 ],
 "id": "overlay_40D93628_5070_D0CE_41C3_02007E98D595",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -32.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_38_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.06
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43BB6A87_5070_D1C3_419E_346C9A940CCD",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.06,
   "yaw": -32.82,
   "distance": 100
  }
 ],
 "id": "overlay_416E99F6_5070_D342_41A7_8092AEC3C58A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.97,
   "yaw": 8.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_39_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.97
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43BA9A87_5070_D1C3_41A3_BAC7B6B9FB03",
   "hfov": 4.97,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.97,
   "yaw": 8.31,
   "distance": 100
  }
 ],
 "id": "overlay_41E1F6CC_5070_D145_41CC_8740355646A6",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -46.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_40_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.67
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43BADA87_5070_D1C3_418D_F4B65C6C358C",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.67,
   "yaw": -46.87,
   "distance": 100
  }
 ],
 "id": "overlay_41D9011C_5070_50C5_41C6_00A4F1E60FAB",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -53.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_41_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.84
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43BA1A87_5070_D1C3_41C9_8BE1C2296775",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.84,
   "yaw": -53.17,
   "distance": 100
  }
 ],
 "id": "overlay_42291D79_5071_B34F_41C2_EA4C7A1FC9C2",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -55.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_42_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.97
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43BA4A87_5070_D1C3_4196_942F53E53EDB",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.97,
   "yaw": -55.9,
   "distance": 100
  }
 ],
 "id": "overlay_40C5E602_5071_F0C2_4195_6474354BDE1E",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -63.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_43_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B98A87_5070_D1C3_41B2_71F2BD0653FF",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.44,
   "yaw": -63.82,
   "distance": 100
  }
 ],
 "id": "overlay_41EBD153_5071_B343_41CD_F594F691E311",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -55.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_44_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.97
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B93A87_5070_D1C3_417D_4EEBFB9912D3",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.97,
   "yaw": -55.9,
   "distance": 100
  }
 ],
 "id": "overlay_40999FC9_5070_4F4F_41D1_2F88D98ADDCE",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -59.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_45_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B96A87_5070_D1C3_41D1_396FA25690BE",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.44,
   "yaw": -59.43,
   "distance": 100
  }
 ],
 "id": "overlay_41F77237_5070_B0C2_41D1_490202E1454A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -72.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_46_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.21
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B8AA87_5070_D1C3_4163_2D6401D1CE7E",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.21,
   "yaw": -72.05,
   "distance": 100
  }
 ],
 "id": "overlay_40959732_5070_F0C2_41B4_2490C8CCBEF3",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -68.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_47_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.17
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B8EA87_5070_D1C3_418A_5DA143C54CFC",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.17,
   "yaw": -68.58,
   "distance": 100
  }
 ],
 "id": "overlay_4198D1D5_5070_B347_41C0_B9E7480F7587",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -96.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_48_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.84
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B81A87_5070_D1C3_41C7_89B2956A7E9E",
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.84,
   "yaw": -96.42,
   "distance": 100
  }
 ],
 "id": "overlay_41025E0C_5070_70C5_41D3_F16E9FAEB693",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.96,
   "yaw": -105.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_49_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.4
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B86A8C_5070_D1C6_4199_0655F04CCAAE",
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.4,
   "yaw": -105.58,
   "distance": 100
  }
 ],
 "id": "overlay_415256E4_5073_D146_41C0_356F82EC66A5",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.93,
   "yaw": -138.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_50_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.39
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B7BA8C_5070_D1C6_41D2_9980E15935E1",
   "hfov": 4.93,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -8.39,
   "yaw": -138.08,
   "distance": 100
  }
 ],
 "id": "overlay_414A6450_5070_715E_41C4_AE7B9385B0C0",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.91,
   "yaw": -171.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_51_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.62
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B7CA8C_5070_D1C6_41CC_877DDD0EBCAB",
   "hfov": 4.91,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.62,
   "yaw": -171.31,
   "distance": 100
  }
 ],
 "id": "overlay_417BA057_5070_B142_4189_0D2186AD7F2A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.89,
   "yaw": -152.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_52_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.89
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B70A8C_5070_D1C6_419A_02BA744E3490",
   "hfov": 4.89,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.89,
   "yaw": -152.1,
   "distance": 100
  }
 ],
 "id": "overlay_412C0302_5070_B0BD_4181_51FB20B5A612",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.91,
   "yaw": -77.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_53_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.89
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B75A8C_5070_D1C6_41C1_164DCAB1AF90",
   "hfov": 4.91,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.89,
   "yaw": -77.61,
   "distance": 100
  }
 ],
 "id": "overlay_4082B4CA_5070_5142_419F_C5777B5C1E60",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.96,
   "yaw": 143.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_54_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.69
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B6FA8C_5070_D1C6_41C5_7A004DF4E181",
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.69,
   "yaw": 143.32,
   "distance": 100
  }
 ],
 "id": "overlay_40EC7A75_5071_B146_41B7_FE4F4136552C",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.96,
   "yaw": 158.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_55_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.13
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_43B63A8C_5070_D1C6_41C7_5FD58F57BD02",
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.13,
   "yaw": 158.74,
   "distance": 100
  }
 ],
 "id": "overlay_414C4854_5070_5146_419D_BA5F13AAD21A",
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 40.71,
   "yaw": 0.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_56_1_0_map.gif",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -78.73
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_406A7494_5090_51C6_41CE_66A03EC319F7, {'pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'pressedBorderColor':'#000000','borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBorderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','pressedIconLineWidth':5,'iconLineWidth':5,'paddingLeft':5,'pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'iconWidth':20,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3}, this.ImageResource_444E0D85_5090_73C6_41CA_56F896768D27, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "id": "overlay_4177A98D_5091_B3C6_41C8_4BC09398F856",
 "class": "HotspotPanoramaOverlay"
},
{
 "oggUrl": "media/audio_B14A1102_BFC5_7165_41E3_797383439FAD.ogg",
 "mp3Url": "media/audio_B14A1102_BFC5_7165_41E3_797383439FAD.mp3",
 "id": "audioresource_B14A6102_BFC5_7165_41C7_0C97D394A474",
 "class": "AudioResource"
},
{
 "id": "IconButton_D24D3943_CAD8_6BAB_41E1_A3CE6085D3DC",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "rollOverIconURL": "skin/IconButton_D24D3943_CAD8_6BAB_41E1_A3CE6085D3DC_rollover.png",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24D3943_CAD8_6BAB_41E1_A3CE6085D3DC.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8712"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24D3943_CAD8_6BAB_41E1_A3CE6085D3DC_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_D24D8943_CAD8_6BAB_41D8_C90304E09814",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "rollOverIconURL": "skin/IconButton_D24D8943_CAD8_6BAB_41D8_C90304E09814_rollover.png",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24D8943_CAD8_6BAB_41D8_C90304E09814.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8706"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24D8943_CAD8_6BAB_41D8_C90304E09814_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_D24C7943_CAD8_6BAB_41E0_33B9D38DE597",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "rollOverIconURL": "skin/IconButton_D24C7943_CAD8_6BAB_41E0_33B9D38DE597_rollover.png",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24C7943_CAD8_6BAB_41E0_33B9D38DE597.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8704"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24C7943_CAD8_6BAB_41E0_33B9D38DE597_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_D24DB943_CAD8_6BAB_4194_E51B860AB779",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "rollOverIconURL": "skin/IconButton_D24DB943_CAD8_6BAB_4194_E51B860AB779_rollover.png",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24DB943_CAD8_6BAB_4194_E51B860AB779.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8707"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24DB943_CAD8_6BAB_4194_E51B860AB779_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_D24D2943_CAD8_6BAB_41C8_6598C7CFA89A",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "rollOverIconURL": "skin/IconButton_D24D2943_CAD8_6BAB_41C8_6598C7CFA89A_rollover.png",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24D2943_CAD8_6BAB_41C8_6598C7CFA89A.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8713"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24D2943_CAD8_6BAB_41C8_6598C7CFA89A_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_D24DF943_CAD8_6BAB_41C5_80B96005AFC8",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24DF943_CAD8_6BAB_41C5_80B96005AFC8.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8710"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24DF943_CAD8_6BAB_41C5_80B96005AFC8_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_D24DE943_CAD8_6BAB_41D0_9DE91F97BE4C",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "rollOverIconURL": "skin/IconButton_D24DE943_CAD8_6BAB_41D0_9DE91F97BE4C_rollover.png",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24DE943_CAD8_6BAB_41D0_9DE91F97BE4C.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8711"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24DE943_CAD8_6BAB_41D0_9DE91F97BE4C_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_D24D9943_CAD8_6BAB_41E1_154BB1C139FC",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "rollOverIconURL": "skin/IconButton_D24D9943_CAD8_6BAB_41E1_154BB1C139FC_rollover.png",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24D9943_CAD8_6BAB_41E1_154BB1C139FC.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8705"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24D9943_CAD8_6BAB_41E1_154BB1C139FC_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_D24D4943_CAD8_6BAB_41E7_5F10545596BF",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "rollOverIconURL": "skin/IconButton_D24D4943_CAD8_6BAB_41E7_5F10545596BF_rollover.png",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24D4943_CAD8_6BAB_41E7_5F10545596BF.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8715"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24D4943_CAD8_6BAB_41E7_5F10545596BF_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "id": "IconButton_D24DC943_CAD8_6BAB_41CA_478A1C3E3003",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "height": 40,
 "minWidth": 0,
 "rollOverIconURL": "skin/IconButton_D24DC943_CAD8_6BAB_41CA_478A1C3E3003_rollover.png",
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_D24DC943_CAD8_6BAB_41CA_478A1C3E3003.png",
 "transparencyActive": true,
 "class": "IconButton",
 "data": {
  "name": "Button8709"
 },
 "propagateClick": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_D24DC943_CAD8_6BAB_41CA_478A1C3E3003_pressed.png",
 "shadow": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_D24DC943_CAD8_6BAB_41CA_478A1C3E3003",
  "this.IconButton_D24DF943_CAD8_6BAB_41C5_80B96005AFC8",
  "this.IconButton_D24DE943_CAD8_6BAB_41D0_9DE91F97BE4C"
 ],
 "id": "Container_D24DD943_CAD8_6BAB_41D1_EF90FC3B0979",
 "width": 40,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "height": "100%",
 "minWidth": 20,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "gap": 4,
 "paddingTop": 0,
 "overflow": "hidden",
 "class": "Container",
 "borderRadius": 0,
 "layout": "vertical",
 "data": {
  "name": "Container8708"
 },
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_37_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1440
  }
 ],
 "id": "AnimatedImageResource_43BB3A86_5070_D1C5_41CE_495C93AFF010",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_38_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43BB6A87_5070_D1C3_419E_346C9A940CCD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_39_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43BA9A87_5070_D1C3_41A3_BAC7B6B9FB03",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_40_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43BADA87_5070_D1C3_418D_F4B65C6C358C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_41_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43BA1A87_5070_D1C3_41C9_8BE1C2296775",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_42_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43BA4A87_5070_D1C3_4196_942F53E53EDB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_43_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43B98A87_5070_D1C3_41B2_71F2BD0653FF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_44_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43B93A87_5070_D1C3_417D_4EEBFB9912D3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_45_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43B96A87_5070_D1C3_41D1_396FA25690BE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_46_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43B8AA87_5070_D1C3_4163_2D6401D1CE7E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_47_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43B8EA87_5070_D1C3_418A_5DA143C54CFC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_48_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43B81A87_5070_D1C3_41C7_89B2956A7E9E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_49_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43B86A8C_5070_D1C6_4199_0655F04CCAAE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_50_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_43B7BA8C_5070_D1C6_41D2_9980E15935E1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_51_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_43B7CA8C_5070_D1C6_41CC_877DDD0EBCAB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_52_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_43B70A8C_5070_D1C6_419A_02BA744E3490",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_53_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_43B75A8C_5070_D1C6_41C1_164DCAB1AF90",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_54_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43B6FA8C_5070_D1C6_41C5_7A004DF4E181",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C5AF2C2_5070_5142_41CB_8338AD790498_0_HS_55_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_43B63A8C_5070_D1C6_41C7_5FD58F57BD02",
 "rowCount": 6,
 "frameCount": 24
}],
 "overflow": "visible",
 "gap": 10,
 "class": "Player",
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "mouseWheelEnabled": true,
 "mobileMipmappingEnabled": false,
 "data": {
  "name": "Player500"
 },
 "vrPolyfillScale": 0.5,
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
