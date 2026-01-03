(function(){
    var script = {
 "mouseWheelEnabled": true,
 "class": "Player",
 "borderRadius": 0,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "definitions": [{
 "items": [
  {
   "media": "this.panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_C1C0933C_CA58_DFDE_41D4_01FAE33F61B1_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_camera"
  },
  {
   "media": "this.panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_C1C0933C_CA58_DFDE_41D4_01FAE33F61B1_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_camera"
  },
  {
   "media": "this.panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_C1C0933C_CA58_DFDE_41D4_01FAE33F61B1_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_camera"
  },
  {
   "media": "this.panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_C1C0933C_CA58_DFDE_41D4_01FAE33F61B1_playlist, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_camera"
  }
 ],
 "id": "DropDown_C1C0933C_CA58_DFDE_41D4_01FAE33F61B1_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 81.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0.91
 },
 "class": "PanoramaCamera",
 "id": "panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
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
  ]
 }
},
{
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_t.jpg",
 "label": "21st Floor",
 "audios": [
  "this.audio_57ACA123_45E8_B653_41C3_4F403CC3D04E"
 ],
 "id": "panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6",
 "hfovMax": 130,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_t.jpg",
 "label": "18th Floor",
 "audios": [
  "this.audio_57A7F46A_45E8_5EDD_41C0_44139E93F7A7"
 ],
 "id": "panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA",
 "hfovMax": 130,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_57ACA123_45E8_B653_41C3_4F403CC3D04E",
 "audio": "this.audioresource_DB626145_CAA8_7BAF_41DB_76D1CA468113",
 "data": {
  "label": "Audio1"
 }
},
{
 "items": [
  {
   "media": "this.panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_camera"
  },
  {
   "media": "this.panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_camera"
  },
  {
   "media": "this.panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C4854BEA_CAA8_6E7A_41D5_5F32E01069DA_camera"
  },
  {
   "media": "this.panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -73.37,
  "class": "PanoramaCameraPosition",
  "pitch": 1.34
 },
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": -73.37,
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "pitch": -90
 },
 "id": "panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 1.34,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
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
  ]
 }
},
{
 "levels": [
  {
   "url": "media/popup_5A0B18B8_4AC8_88AB_41C4_6EE9C9F52316_0_0.jpg",
   "width": 7015,
   "class": "ImageResourceLevel",
   "height": 4961
  },
  {
   "url": "media/popup_5A0B18B8_4AC8_88AB_41C4_6EE9C9F52316_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2896
  },
  {
   "url": "media/popup_5A0B18B8_4AC8_88AB_41C4_6EE9C9F52316_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1448
  },
  {
   "url": "media/popup_5A0B18B8_4AC8_88AB_41C4_6EE9C9F52316_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 724
  },
  {
   "url": "media/popup_5A0B18B8_4AC8_88AB_41C4_6EE9C9F52316_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 362
  }
 ],
 "id": "ImageResource_5E1C7342_4AD7_F9DE_41CC_28706B0E2C32",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_DB574C04_CAA8_A9AE_41BA_41921E7EE682",
 "audio": "this.audioresource_DB626145_CAA8_7BAF_41DB_76D1CA468113",
 "data": {
  "label": "Confident"
 }
},
{
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_t.jpg",
 "label": "Nearby Area",
 "audios": [
  "this.audio_5C71C634_4ACB_7BBB_41CA_88D0ECDE471B"
 ],
 "id": "panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC",
 "hfovMax": 130,
 "pitch": 0,
 "overlays": [
  "this.overlay_44CA1A94_4AC8_8B64_41C3_2DEB12C55437",
  "this.overlay_44C4CA94_4AC8_8B64_419B_D94DF04E6618",
  "this.overlay_44C4DA94_4AC8_8B64_41C7_A69E3EC9981E",
  "this.overlay_44C40A94_4AC8_8B64_41C3_B41E316B1AAF",
  "this.overlay_44C41A94_4AC8_8B64_4169_F665DCF9ACDD",
  "this.overlay_44C42A94_4AC8_8B64_41D1_836104AF2505",
  "this.overlay_44C44A94_4AC8_8B64_41C1_F19F0ECB2280",
  "this.overlay_44C46A94_4AC8_8B64_4153_07267CABBC84",
  "this.overlay_44C58A94_4AC8_8B64_418E_57032301CA43",
  "this.overlay_44C5AA94_4AC8_8B64_41A2_BD09474D45F3",
  "this.overlay_44C5BA94_4AC8_8B64_41C7_1F8F0AA32020",
  "this.overlay_44C5DA94_4AC8_8B64_41BD_E5D35BC3D380",
  "this.overlay_44C50A94_4AC8_8B64_41B2_90FCA02CA30F",
  "this.overlay_44C51A94_4AC8_8B64_41CE_AFE585FC1DA9",
  "this.overlay_44C52A94_4AC8_8B64_41C5_DC56C58AC373",
  "this.overlay_44C54A94_4AC8_8B64_41D2_09648A26ADAF",
  "this.overlay_44C56A94_4AC8_8B64_41CA_59E54D497953",
  "this.overlay_44C28A94_4AC8_8B64_41D1_4A5D2B4F6C40",
  "this.overlay_44C29A94_4AC8_8B64_41C2_02963913E937",
  "this.overlay_44C2BA94_4AC8_8B64_41D2_62EE706B9F89",
  "this.overlay_44C44A94_4AC8_8B64_41C4_0184D04C644D",
  "this.overlay_44C45A94_4AC8_8B64_41BF_B00C49E93134",
  "this.overlay_44C58A94_4AC8_8B64_416A_CCA247B86030",
  "this.overlay_44C5AA94_4AC8_8B64_41C5_71B1D4FE0FB6",
  "this.overlay_44C5CA94_4AC8_8B64_41A5_249BFF903013",
  "this.overlay_44C5EA94_4AC8_8B64_41CD_B7946E52F650",
  "this.overlay_44C5FA94_4AC8_8B64_41C9_CB0DD200E789",
  "this.overlay_44C52A94_4AC8_8B64_41D2_9923162EC7C5",
  "this.overlay_44C54A94_4AC8_8B64_41D0_B5D14A46DBF2",
  "this.overlay_44C55A94_4AC8_8B64_41CB_40B52F7670C8",
  "this.overlay_44C56A94_4AC8_8B64_419C_2EC3B6C48BBC",
  "this.overlay_44C28A94_4AC8_8B64_41D1_FBC723582A70",
  "this.overlay_44C2AA94_4AC8_8B64_41B8_12B9EE62A1A5",
  "this.overlay_44C2BA94_4AC8_8B64_41B6_FF0D165A1C93",
  "this.popup_47136A76_4AC8_8BA4_41C7_F36B8896E307",
  "this.overlay_5AA2CEEC_4AF8_88AB_418B_216E02E0AC6B",
  "this.overlay_451C8DD1_4AF8_88FD_41C5_DD1548C4D71B",
  "this.overlay_5B1A3D5F_4AFB_89E6_4180_AAAF3D9F302F",
  "this.overlay_45B52003_4ACB_775D_41C2_CB80E2D7FC07",
  "this.popup_5A0B18B8_4AC8_88AB_41C4_6EE9C9F52316"
 ],
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "rowCount": 9,
      "tags": "ondemand",
      "height": 4608
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "height": 2560
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "height": 1536
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_t.jpg"
  }
 ]
},
{
 "levels": [
  {
   "url": "media/popup_47136A76_4AC8_8BA4_41C7_F36B8896E307_0_0.png",
   "width": 4961,
   "class": "ImageResourceLevel",
   "height": 3508
  },
  {
   "url": "media/popup_47136A76_4AC8_8BA4_41C7_F36B8896E307_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2896
  },
  {
   "url": "media/popup_47136A76_4AC8_8BA4_41C7_F36B8896E307_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1448
  },
  {
   "url": "media/popup_47136A76_4AC8_8BA4_41C7_F36B8896E307_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 724
  },
  {
   "url": "media/popup_47136A76_4AC8_8BA4_41C7_F36B8896E307_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 362
  }
 ],
 "id": "ImageResource_47108A76_4AC8_8BA4_41CB_2DC14B6A8097",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "hideEasing": "cubic_out",
 "id": "popup_5A0B18B8_4AC8_88AB_41C4_6EE9C9F52316",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5A0B18B8_4AC8_88AB_41C4_6EE9C9F52316_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 724
   }
  ]
 },
 "popupDistance": 100,
 "yaw": 0,
 "hfov": 90.76,
 "pitch": -75.37
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_5C71C634_4ACB_7BBB_41CA_88D0ECDE471B",
 "audio": "this.audioresource_DB626145_CAA8_7BAF_41DB_76D1CA468113",
 "data": {
  "label": "Audio1"
 }
},
{
 "buttonMoveLeft": "this.IconButton_C76F98C9_CA68_AAA6_41D0_29E20A47F4E1",
 "buttonMoveUp": "this.IconButton_C76C78C9_CA68_AAA6_41C1_6DF83DC675F0",
 "buttonMoveRight": "this.IconButton_C76C38C9_CA68_AAA6_41E6_F7D2323E0820",
 "class": "PanoramaPlayer",
 "buttonZoomOut": "this.IconButton_C76FA8C9_CA68_AAA6_41E7_7B1A23D647B3",
 "buttonRestart": "this.IconButton_C76FB8C9_CA68_AAA6_41D2_E9685A8725F4",
 "id": "MainViewerPanoramaPlayer",
 "buttonPause": "this.IconButton_C76C48C9_CA68_AAA6_41D8_A23A765B6A96",
 "displayPlaybackBar": true,
 "buttonZoomIn": "this.IconButton_C76CF8C9_CA68_AAA6_41D4_D56219ABBD37",
 "viewerArea": "this.MainViewer",
 "buttonPlayLeft": "this.IconButton_C76F88C9_CA68_AAA6_41DE_94EAB8A3DC1D",
 "buttonMoveDown": "this.IconButton_C76C58C9_CA68_AAA6_41E7_CAAE2F8D26D8",
 "buttonPlayRight": "this.IconButton_C76C18C9_CA68_AAA6_41D8_BFE92D0F5CC5",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": -60.55,
  "class": "PanoramaCameraPosition",
  "pitch": 2.57
 },
 "class": "PanoramaCamera",
 "id": "panorama_C764DE46_CAA9_A9AA_41AF_19F216E4DAC6_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
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
  ]
 }
},
{
 "autoplay": true,
 "loop": true,
 "class": "PanoramaAudio",
 "id": "audio_57A7F46A_45E8_5EDD_41C0_44139E93F7A7",
 "audio": "this.audioresource_DB626145_CAA8_7BAF_41DB_76D1CA468113",
 "data": {
  "label": "Audio1"
 }
},
{
 "initialPosition": {
  "yaw": -66.24,
  "class": "PanoramaCameraPosition",
  "pitch": 1.67
 },
 "class": "PanoramaCamera",
 "id": "panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
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
  ]
 }
},
{
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_t.jpg",
 "label": "10th Floor",
 "audios": [
  "this.audio_DB574C04_CAA8_A9AE_41BA_41921E7EE682"
 ],
 "id": "panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3",
 "hfovMax": 130,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 14,
      "width": 7168,
      "rowCount": 14,
      "tags": "ondemand",
      "height": 7168
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_C4B73E33_CAA8_69EA_41E0_49114B32F3A3_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "hideEasing": "cubic_out",
 "id": "popup_47136A76_4AC8_8BA4_41C7_F36B8896E307",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_47136A76_4AC8_8BA4_41C7_F36B8896E307_0_3.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 724
   }
  ]
 },
 "popupDistance": 100,
 "yaw": 0.02,
 "hfov": 230.09,
 "pitch": 50.22
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "minWidth": 100,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "transitionMode": "blending",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "paddingTop": 0,
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "transitionDuration": 500,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6
},
{
 "backgroundOpacity": 0.9,
 "class": "DropDown",
 "borderRadius": 4,
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "id": "DropDown_C1C0933C_CA58_DFDE_41D4_01FAE33F61B1",
 "popUpBackgroundColor": "#FFFFFF",
 "width": "11.212%",
 "fontColor": "#333333",
 "arrowColor": "#8A8A8A",
 "fontFamily": "Arial",
 "arrowBeforeLabel": false,
 "right": "1.02%",
 "propagateClick": false,
 "paddingRight": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "popUpShadow": false,
 "paddingLeft": 5,
 "selectedPopUpBackgroundColor": "#33CCFF",
 "data": {
  "name": "DropDown1204"
 },
 "popUpFontColor": "#000000",
 "minHeight": 20,
 "borderSize": 0,
 "popUpBackgroundOpacity": 0.9,
 "playList": "this.DropDown_C1C0933C_CA58_DFDE_41D4_01FAE33F61B1_playlist",
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "popUpGap": 0,
 "top": "2.13%",
 "fontSize": 14,
 "minWidth": 200,
 "backgroundColor": [
  "#FFFFFF",
  "#999999"
 ],
 "popUpShadowBlurRadius": 6,
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "gap": 0,
 "popUpShadowColor": "#000000",
 "fontStyle": "normal",
 "paddingTop": 0,
 "shadow": false,
 "popUpShadowSpread": 1,
 "textDecoration": "none",
 "height": "3.618%",
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 30,
 "maxWidth": 30,
 "id": "Image_C7457560_CA58_7A66_41E0_3FAFF3B8F00A",
 "horizontalAlign": "center",
 "right": "0%",
 "propagateClick": false,
 "paddingRight": 0,
 "url": "skin/Image_C7457560_CA58_7A66_41E0_3FAFF3B8F00A.png",
 "width": "1.305%",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://spin360.in/', '_blank')",
 "minWidth": 1,
 "bottom": "0%",
 "verticalAlign": "middle",
 "height": "2.368%",
 "data": {
  "name": "Image2377"
 },
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside"
},
{
 "cursor": "hand",
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "Image_C6D99604_CA5F_B9AE_41CC_EBDDFCE897DB",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "right": "0%",
 "propagateClick": false,
 "paddingRight": 0,
 "url": "skin/Image_C6D99604_CA5F_B9AE_41CC_EBDDFCE897DB.png",
 "width": "3.264%",
 "paddingLeft": 0,
 "minHeight": 70,
 "borderSize": 0,
 "top": "47.04%",
 "paddingBottom": 0,
 "click": "this.openLink('https://maps.app.goo.gl/4yk7HReZraJSf6LH7', '_blank')",
 "minWidth": 70,
 "verticalAlign": "middle",
 "height": "5.919%",
 "data": {
  "name": "Image2419"
 },
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "cursor": "hand",
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "Image_C7311117_CA58_FBAA_41B4_44C449CB4A6C",
 "left": "0%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "url": "skin/Image_C7311117_CA58_FBAA_41B4_44C449CB4A6C.png",
 "width": "3.046%",
 "paddingLeft": 0,
 "minHeight": 70,
 "borderSize": 0,
 "top": "47.2%",
 "paddingBottom": 0,
 "click": "this.openLink('https://wa.me/+919825700500', '_blank')",
 "minWidth": 70,
 "verticalAlign": "middle",
 "height": "5.525%",
 "data": {
  "name": "Image2470"
 },
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "class": "Container",
 "borderRadius": 0,
 "id": "Container_C76CD8C9_CA68_AAA6_41DC_0785EFDFE733",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "right": "0%",
 "propagateClick": false,
 "children": [
  "this.IconButton_C76FA8C9_CA68_AAA6_41E7_7B1A23D647B3",
  "this.IconButton_C76FB8C9_CA68_AAA6_41D2_E9685A8725F4",
  "this.IconButton_C76F88C9_CA68_AAA6_41DE_94EAB8A3DC1D",
  "this.IconButton_C76F98C9_CA68_AAA6_41D0_29E20A47F4E1",
  "this.Container_C76C68C9_CA68_AAA6_41E1_E6FE10D32971",
  "this.IconButton_C76C38C9_CA68_AAA6_41E6_F7D2323E0820",
  "this.IconButton_C76C18C9_CA68_AAA6_41D8_BFE92D0F5CC5",
  "this.IconButton_C76CE8C9_CA68_AAA6_41E9_375D2A4A8737",
  "this.IconButton_C76CF8C9_CA68_AAA6_41D4_D56219ABBD37"
 ],
 "paddingRight": 0,
 "width": "99.913%",
 "paddingLeft": 0,
 "minHeight": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "bottom": "0.06%",
 "verticalAlign": "middle",
 "height": "16.103%",
 "layout": "horizontal",
 "gap": 4,
 "data": {
  "name": "Container8703"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "hidden",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 367,
 "maxWidth": 831,
 "id": "Image_5914384D_49CC_803A_417C_15C6CC567386",
 "left": "0.04%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "url": "skin/Image_5914384D_49CC_803A_417C_15C6CC567386.png",
 "width": "10.052%",
 "paddingLeft": 0,
 "minHeight": 100,
 "borderSize": 0,
 "top": "0%",
 "paddingBottom": 0,
 "click": "this.openLink('https://www.shreebuildcon.com/', '_blank')",
 "minWidth": 250,
 "verticalAlign": "middle",
 "height": "7.972%",
 "data": {
  "name": "Image2121"
 },
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "class": "UIComponent",
 "borderRadius": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "minHeight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "top": 0,
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "UIComponent9489"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.55
},
{
 "class": "ZoomImage",
 "borderRadius": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [],
 "paddingLeft": 0,
 "minHeight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "top": 0,
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [],
 "data": {
  "name": "ZoomImage9490"
 },
 "paddingTop": 0,
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 1,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "class": "CloseButton",
 "borderRadius": 0,
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "iconWidth": 20,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 0.3,
 "right": 10,
 "propagateClick": false,
 "paddingRight": 5,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "paddingLeft": 5,
 "iconHeight": 20,
 "minHeight": 0,
 "borderSize": 0,
 "borderColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconLineWidth": 5,
 "paddingBottom": 5,
 "mode": "push",
 "top": 10,
 "fontSize": "1.29vmin",
 "label": "",
 "minWidth": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontFamily": "Arial",
 "iconBeforeLabel": true,
 "iconColor": "#000000",
 "pressedIconColor": "#888888",
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "gap": 5,
 "shadowSpread": 1,
 "data": {
  "name": "CloseButton9491"
 },
 "paddingTop": 5,
 "layout": "horizontal",
 "shadow": false,
 "visible": false,
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76CE8C9_CA68_AAA6_41E9_375D2A4A8737",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76CE8C9_CA68_AAA6_41E9_375D2A4A8737.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "toggle",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "pressedIconURL": "skin/IconButton_C76CE8C9_CA68_AAA6_41E9_375D2A4A8737_pressed.png",
 "data": {
  "name": "Button8714"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "oggUrl": "media/audio_DB574C04_CAA8_A9AE_41BA_41921E7EE682.ogg",
 "class": "AudioResource",
 "id": "audioresource_DB626145_CAA8_7BAF_41DB_76D1CA468113",
 "mp3Url": "media/audio_DB574C04_CAA8_A9AE_41BA_41921E7EE682.mp3"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_0_0.png",
      "width": 494,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ]
   },
   "pitch": 8.27,
   "yaw": -75.66,
   "hfov": 12.5,
   "distance": 50
  }
 ],
 "id": "overlay_44CA1A94_4AC8_8B64_41C3_2DEB12C55437",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Kudasan Lake"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_0_0_map.gif",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -75.66,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.5,
   "pitch": 8.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_1_0.png",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 1013
     }
    ]
   },
   "pitch": -5.36,
   "yaw": -76.05,
   "hfov": 1.41
  }
 ],
 "id": "overlay_44C4CA94_4AC8_8B64_419B_D94DF04E6618",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_1_1_0_map.gif",
      "width": 10,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -76.05,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 1.41,
   "pitch": -5.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58BDF347_4AC8_B9E5_41CF_BA55493DFED1",
   "hfov": 13.38,
   "pitch": -17.91,
   "yaw": -76.02,
   "distance": 100
  }
 ],
 "id": "overlay_44C4DA94_4AC8_8B64_41C7_A69E3EC9981E",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_2_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -76.02,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.38,
   "pitch": -17.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_3_0.png",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 400
     }
    ]
   },
   "pitch": -4.01,
   "yaw": -142.18,
   "hfov": 1.01
  }
 ],
 "id": "overlay_44C40A94_4AC8_8B64_41C3_B41E316B1AAF",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_3_1_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -142.18,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 1.01,
   "pitch": -4.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_4_0.png",
      "width": 374,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ]
   },
   "pitch": 6.55,
   "yaw": -151.65,
   "hfov": 9.49,
   "distance": 50
  }
 ],
 "id": "overlay_44C41A94_4AC8_8B64_4169_F665DCF9ACDD",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Connplex Cinemas"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_4_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -151.65,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.49,
   "pitch": 6.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_5_0.png",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 319
     }
    ]
   },
   "pitch": -2.63,
   "yaw": -171.12,
   "hfov": 0.61
  }
 ],
 "id": "overlay_44C42A94_4AC8_8B64_41D1_836104AF2505",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_5_1_0_map.gif",
      "width": 11,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "yaw": -171.12,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 0.61,
   "pitch": -2.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_6_0.png",
      "width": 347,
      "class": "ImageResourceLevel",
      "height": 143
     }
    ]
   },
   "pitch": 7.58,
   "yaw": -90.45,
   "hfov": 8.79,
   "distance": 50
  }
 ],
 "id": "overlay_44C44A94_4AC8_8B64_41C1_F19F0ECB2280",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "SMVS"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_6_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.45,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.79,
   "pitch": 7.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_7_0.png",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 561
     }
    ]
   },
   "pitch": 0.05,
   "yaw": -35.89,
   "hfov": 1.02
  }
 ],
 "id": "overlay_44C46A94_4AC8_8B64_4153_07267CABBC84",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_7_1_0_map.gif",
      "width": 13,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -35.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 1.02,
   "pitch": 0.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_8_0.png",
      "width": 761,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ]
   },
   "pitch": 9.86,
   "yaw": -15.22,
   "hfov": 19.16,
   "distance": 50
  }
 ],
 "id": "overlay_44C58A94_4AC8_8B64_418E_57032301CA43",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Apollo International School"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_8_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -15.22,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.16,
   "pitch": 9.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_9_0.png",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 774
     }
    ]
   },
   "pitch": -0.01,
   "yaw": -15.31,
   "hfov": 1.2
  }
 ],
 "id": "overlay_44C5AA94_4AC8_8B64_41A2_BD09474D45F3",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_9_1_0_map.gif",
      "width": 11,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "yaw": -15.31,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 1.2,
   "pitch": -0.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_10_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ]
   },
   "pitch": -0.35,
   "yaw": -99.75,
   "hfov": 0.82
  }
 ],
 "id": "overlay_44C5BA94_4AC8_8B64_41C7_1F8F0AA32020",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_10_1_0_map.gif",
      "width": 14,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -99.75,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 0.82,
   "pitch": -0.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_11_0.png",
      "width": 572,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ]
   },
   "pitch": 5.85,
   "yaw": -99.53,
   "hfov": 14.55,
   "distance": 50
  }
 ],
 "id": "overlay_44C5DA94_4AC8_8B64_41BD_E5D35BC3D380",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Vishal Supermarket"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_11_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -99.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.55,
   "pitch": 5.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_12_0.png",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 665
     }
    ]
   },
   "pitch": 4.35,
   "yaw": -126.85,
   "hfov": 0.89
  }
 ],
 "id": "overlay_44C50A94_4AC8_8B64_41B2_90FCA02CA30F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_12_1_0_map.gif",
      "width": 10,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -126.85,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 0.89,
   "pitch": 4.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_13_0.png",
      "width": 493,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "pitch": 1.5,
   "yaw": -141.92,
   "hfov": 12.59,
   "distance": 50
  }
 ],
 "id": "overlay_44C51A94_4AC8_8B64_41CE_AFE585FC1DA9",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Vachhani Speciality Hospital"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_13_0_map.gif",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -141.92,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.59,
   "pitch": 1.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_14_0.png",
      "width": 584,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ]
   },
   "pitch": 7.94,
   "yaw": -35.73,
   "hfov": 14.79,
   "distance": 50
  }
 ],
 "id": "overlay_44C52A94_4AC8_8B64_41C5_DC56C58AC373",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "School of Achiever"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_14_0_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -35.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.79,
   "pitch": 7.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_15_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 387
     }
    ]
   },
   "pitch": 1.18,
   "yaw": -151.59,
   "hfov": 0.82
  }
 ],
 "id": "overlay_44C54A94_4AC8_8B64_41D2_09648A26ADAF",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_15_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 193
     }
    ]
   },
   "yaw": -151.59,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 0.82,
   "pitch": 1.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_16_0.png",
      "width": 523,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 13.15,
   "yaw": -126.78,
   "hfov": 13.02,
   "distance": 50
  }
 ],
 "id": "overlay_44C56A94_4AC8_8B64_41CA_59E54D497953",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Reliance Chowkdi"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_16_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -126.78,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.02,
   "pitch": 13.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_17_0.png",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 788
     }
    ]
   },
   "pitch": 4.35,
   "yaw": -155.94,
   "hfov": 1.08
  }
 ],
 "id": "overlay_44C28A94_4AC8_8B64_41D1_4A5D2B4F6C40",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_17_1_0_map.gif",
      "width": 10,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -155.94,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 1.08,
   "pitch": 4.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_18_0.png",
      "width": 489,
      "class": "ImageResourceLevel",
      "height": 115
     }
    ]
   },
   "pitch": 15.01,
   "yaw": -156.26,
   "hfov": 12.07,
   "distance": 50
  }
 ],
 "id": "overlay_44C29A94_4AC8_8B64_41C2_02963913E937",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Aashka Hospital"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_18_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -156.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.07,
   "pitch": 15.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_19_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 383
     }
    ]
   },
   "pitch": 2.47,
   "yaw": -91.65,
   "hfov": 0.82
  }
 ],
 "id": "overlay_44C2BA94_4AC8_8B64_41D2_62EE706B9F89",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_19_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 191
     }
    ]
   },
   "yaw": -91.65,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 0.82,
   "pitch": 2.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_20_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ]
   },
   "pitch": 2.21,
   "yaw": -171.26,
   "hfov": 5.87,
   "distance": 50
  }
 ],
 "id": "overlay_44C44A94_4AC8_8B64_41C4_0184D04C644D",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "D Mart"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_20_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -171.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.87,
   "pitch": 2.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C41FD20_4F89_6797_41CE_9769BDA5E93A",
   "hfov": 4.29,
   "pitch": -6.47,
   "yaw": -171.08,
   "distance": 100
  }
 ],
 "id": "overlay_44C45A94_4AC8_8B64_41BF_B00C49E93134",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_21_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -171.08,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.29,
   "pitch": -6.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C0177E9_4F89_229F_41D3_F3779DD90C61",
   "hfov": 4.07,
   "pitch": -3.59,
   "yaw": -151.61,
   "distance": 100
  }
 ],
 "id": "overlay_44C58A94_4AC8_8B64_416A_CCA247B86030",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_22_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -151.61,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.07,
   "pitch": -3.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C1ED7E9_4F89_229F_41CB_E246A692EF55",
   "hfov": 7.4,
   "pitch": -5.4,
   "yaw": -155.93,
   "distance": 100
  }
 ],
 "id": "overlay_44C5AA94_4AC8_8B64_41C5_71B1D4FE0FB6",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_23_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -155.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.4,
   "pitch": -5.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C42BD20_4F89_6797_41CC_F5B5291016B8",
   "hfov": 4.92,
   "pitch": -8.93,
   "yaw": -142.12,
   "distance": 100
  }
 ],
 "id": "overlay_44C5CA94_4AC8_8B64_41A5_249BFF903013",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_24_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -142.12,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.92,
   "pitch": -8.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C1EA7E9_4F89_229F_419A_B9797A1B367A",
   "hfov": 4.68,
   "pitch": -3.93,
   "yaw": -126.84,
   "distance": 100
  }
 ],
 "id": "overlay_44C5EA94_4AC8_8B64_41CD_B7946E52F650",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_25_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -126.84,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.68,
   "pitch": -3.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58B15348_4AC8_B9EB_41B4_85D652F33273",
   "hfov": 10.36,
   "pitch": -5.77,
   "yaw": -99.7,
   "distance": 100
  }
 ],
 "id": "overlay_44C5FA94_4AC8_8B64_41C9_CB0DD200E789",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_26_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -99.7,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.36,
   "pitch": -5.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58B08348_4AC8_B9EB_41B6_FCB0149DB3E5",
   "hfov": 10.4,
   "pitch": -2.3,
   "yaw": -91.71,
   "distance": 100
  }
 ],
 "id": "overlay_44C52A94_4AC8_8B64_41D2_9923162EC7C5",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_27_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -91.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.4,
   "pitch": -2.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C424D20_4F89_6797_41D3_8E14B7F7715C",
   "hfov": 10.34,
   "pitch": -6.85,
   "yaw": -35.84,
   "distance": 100
  }
 ],
 "id": "overlay_44C54A94_4AC8_8B64_41D0_B5D14A46DBF2",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_28_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -35.84,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.34,
   "pitch": -6.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_58B01349_4AC8_B9ED_41BF_0374FCE4D3B8",
   "hfov": 10.26,
   "pitch": -9.66,
   "yaw": -15.26,
   "distance": 100
  }
 ],
 "id": "overlay_44C55A94_4AC8_8B64_41CB_40B52F7670C8",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_29_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -15.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.26,
   "pitch": -9.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_44C56A94_4AC8_8B64_419C_2EC3B6C48BBC",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_47136A76_4AC8_8BA4_41C7_F36B8896E307, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','iconWidth':20,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'paddingRight':5,'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'borderColor':'#000000','rollOverBorderColor':'#000000','pressedIconHeight':20,'borderSize':0,'rollOverIconWidth':20,'backgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorDirection':'vertical'}, this.ImageResource_47108A76_4AC8_8BA4_41CB_2DC14B6A8097, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_30_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 90,
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_30_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 90,
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_30_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 90,
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_30_4_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 90,
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_30_5_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 90,
   "pitch": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_31_0.png",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 331
     }
    ]
   },
   "pitch": -2.58,
   "yaw": 152.58,
   "hfov": 0.78
  }
 ],
 "id": "overlay_44C28A94_4AC8_8B64_41D1_FBC723582A70",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_31_1_6_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ]
   },
   "yaw": 152.58,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 0.78,
   "pitch": -2.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C437D21_4F89_6799_41B0_B4782B424708",
   "hfov": 3.52,
   "pitch": -6.66,
   "yaw": 152.59,
   "distance": 100
  }
 ],
 "id": "overlay_44C2AA94_4AC8_8B64_41B8_12B9EE62A1A5",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_32_0_6_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 152.59,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.52,
   "pitch": -6.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_33_0.png",
      "width": 142,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ]
   },
   "pitch": 2.43,
   "yaw": 152.66,
   "hfov": 3.64
  }
 ],
 "id": "overlay_44C2BA94_4AC8_8B64_41B6_FF0D165A1C93",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.openLink('http://tour.spin360.in/Ekaiva', '_blank')"
  }
 ],
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_33_0_6_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 152.66,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.64,
   "pitch": 2.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_34_0.png",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 429
     }
    ]
   },
   "pitch": -0.8,
   "yaw": 150.22,
   "hfov": 0.75
  }
 ],
 "id": "overlay_5AA2CEEC_4AF8_88AB_418B_216E02E0AC6B",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_34_1_0_map.gif",
      "width": 13,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 150.22,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 0.75,
   "pitch": -0.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_35_0.png",
      "width": 185,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ]
   },
   "pitch": 5.59,
   "yaw": 150.25,
   "hfov": 4.71
  }
 ],
 "id": "overlay_451C8DD1_4AF8_88FD_41C5_DD1548C4D71B",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.openLink('https://tour.spin360.in/Tatvamsky/', '_blank')"
  }
 ],
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_35_0_6_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 150.25,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.71,
   "pitch": 5.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C7C5D21_4F89_6799_41BA_446C28095C5B",
   "hfov": 4.03,
   "pitch": -6.11,
   "yaw": 150.16,
   "distance": 100
  }
 ],
 "id": "overlay_5B1A3D5F_4AFB_89E6_4180_AAAF3D9F302F",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_36_0_6_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 150.16,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.03,
   "pitch": -6.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_45B52003_4ACB_775D_41C2_CB80E2D7FC07",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_5A0B18B8_4AC8_88AB_41C4_6EE9C9F52316, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','iconWidth':20,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'paddingRight':5,'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'borderColor':'#000000','rollOverBorderColor':'#000000','pressedIconHeight':20,'borderSize':0,'rollOverIconWidth':20,'backgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'backgroundColorDirection':'vertical'}, this.ImageResource_5E1C7342_4AD7_F9DE_41CC_28706B0E2C32, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_37_1_0_map.gif",
      "width": 157,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 60.58,
   "pitch": -75.37
  }
 ]
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76F98C9_CA68_AAA6_41D0_29E20A47F4E1",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76F98C9_CA68_AAA6_41D0_29E20A47F4E1.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_C76F98C9_CA68_AAA6_41D0_29E20A47F4E1_rollover.png",
 "pressedIconURL": "skin/IconButton_C76F98C9_CA68_AAA6_41D0_29E20A47F4E1_pressed.png",
 "data": {
  "name": "Button8707"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76C78C9_CA68_AAA6_41C1_6DF83DC675F0",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76C78C9_CA68_AAA6_41C1_6DF83DC675F0.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_C76C78C9_CA68_AAA6_41C1_6DF83DC675F0_rollover.png",
 "pressedIconURL": "skin/IconButton_C76C78C9_CA68_AAA6_41C1_6DF83DC675F0_pressed.png",
 "data": {
  "name": "Button8709"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76C38C9_CA68_AAA6_41E6_F7D2323E0820",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76C38C9_CA68_AAA6_41E6_F7D2323E0820.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_C76C38C9_CA68_AAA6_41E6_F7D2323E0820_rollover.png",
 "pressedIconURL": "skin/IconButton_C76C38C9_CA68_AAA6_41E6_F7D2323E0820_pressed.png",
 "data": {
  "name": "Button8712"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76FA8C9_CA68_AAA6_41E7_7B1A23D647B3",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76FA8C9_CA68_AAA6_41E7_7B1A23D647B3.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_C76FA8C9_CA68_AAA6_41E7_7B1A23D647B3_rollover.png",
 "pressedIconURL": "skin/IconButton_C76FA8C9_CA68_AAA6_41E7_7B1A23D647B3_pressed.png",
 "data": {
  "name": "Button8704"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76FB8C9_CA68_AAA6_41D2_E9685A8725F4",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76FB8C9_CA68_AAA6_41D2_E9685A8725F4.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_C76FB8C9_CA68_AAA6_41D2_E9685A8725F4_rollover.png",
 "pressedIconURL": "skin/IconButton_C76FB8C9_CA68_AAA6_41D2_E9685A8725F4_pressed.png",
 "data": {
  "name": "Button8705"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76C48C9_CA68_AAA6_41D8_A23A765B6A96",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76C48C9_CA68_AAA6_41D8_A23A765B6A96.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "toggle",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "pressedIconURL": "skin/IconButton_C76C48C9_CA68_AAA6_41D8_A23A765B6A96_pressed.png",
 "data": {
  "name": "Button8710"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76CF8C9_CA68_AAA6_41D4_D56219ABBD37",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76CF8C9_CA68_AAA6_41D4_D56219ABBD37.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_C76CF8C9_CA68_AAA6_41D4_D56219ABBD37_rollover.png",
 "pressedIconURL": "skin/IconButton_C76CF8C9_CA68_AAA6_41D4_D56219ABBD37_pressed.png",
 "data": {
  "name": "Button8715"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76F88C9_CA68_AAA6_41DE_94EAB8A3DC1D",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76F88C9_CA68_AAA6_41DE_94EAB8A3DC1D.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_C76F88C9_CA68_AAA6_41DE_94EAB8A3DC1D_rollover.png",
 "pressedIconURL": "skin/IconButton_C76F88C9_CA68_AAA6_41DE_94EAB8A3DC1D_pressed.png",
 "data": {
  "name": "Button8706"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76C58C9_CA68_AAA6_41E7_CAAE2F8D26D8",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76C58C9_CA68_AAA6_41E7_CAAE2F8D26D8.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_C76C58C9_CA68_AAA6_41E7_CAAE2F8D26D8_rollover.png",
 "pressedIconURL": "skin/IconButton_C76C58C9_CA68_AAA6_41E7_CAAE2F8D26D8_pressed.png",
 "data": {
  "name": "Button8711"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "class": "IconButton",
 "borderRadius": 0,
 "id": "IconButton_C76C18C9_CA68_AAA6_41D8_BFE92D0F5CC5",
 "transparencyActive": true,
 "width": 40,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_C76C18C9_CA68_AAA6_41D8_BFE92D0F5CC5.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "mode": "push",
 "minWidth": 0,
 "verticalAlign": "middle",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_C76C18C9_CA68_AAA6_41D8_BFE92D0F5CC5_rollover.png",
 "pressedIconURL": "skin/IconButton_C76C18C9_CA68_AAA6_41D8_BFE92D0F5CC5_pressed.png",
 "data": {
  "name": "Button8713"
 },
 "paddingTop": 0,
 "shadow": false
},
{
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "id": "Container_C76C68C9_CA68_AAA6_41E1_E6FE10D32971",
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "width": 40,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "propagateClick": false,
 "children": [
  "this.IconButton_C76C78C9_CA68_AAA6_41C1_6DF83DC675F0",
  "this.IconButton_C76C48C9_CA68_AAA6_41D8_A23A765B6A96",
  "this.IconButton_C76C58C9_CA68_AAA6_41E7_CAAE2F8D26D8"
 ],
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "minWidth": 20,
 "verticalAlign": "middle",
 "height": "100%",
 "layout": "vertical",
 "gap": 4,
 "data": {
  "name": "Container8708"
 },
 "paddingTop": 0,
 "shadow": false,
 "overflow": "hidden"
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_58BDF347_4AC8_B9E5_41CF_BA55493DFED1",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_21_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C41FD20_4F89_6797_41CE_9769BDA5E93A",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_22_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C0177E9_4F89_229F_41D3_F3779DD90C61",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_23_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C1ED7E9_4F89_229F_41CB_E246A692EF55",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_24_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C42BD20_4F89_6797_41CC_F5B5291016B8",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_25_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C1EA7E9_4F89_229F_419A_B9797A1B367A",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_26_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_58B15348_4AC8_B9EB_41B4_85D652F33273",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_27_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_58B08348_4AC8_B9EB_41B6_FCB0149DB3E5",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_28_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C424D20_4F89_6797_41D3_8E14B7F7715C",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_1_HS_29_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_58B01349_4AC8_B9ED_41BF_0374FCE4D3B8",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_32_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C437D21_4F89_6799_41B0_B4782B424708",
 "frameDuration": 41,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_44FDD596_4AC9_9967_41BC_8B410F168AEC_0_HS_36_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C7C5D21_4F89_6799_41BA_446C28095C5B",
 "frameDuration": 41,
 "colCount": 4
}],
 "propagateClick": false,
 "children": [
  "this.MainViewer",
  "this.DropDown_C1C0933C_CA58_DFDE_41D4_01FAE33F61B1",
  "this.Image_C7457560_CA58_7A66_41E0_3FAFF3B8F00A",
  "this.Image_C6D99604_CA5F_B9AE_41CC_EBDDFCE897DB",
  "this.Image_C7311117_CA58_FBAA_41B4_44C449CB4A6C",
  "this.Container_C76CD8C9_CA68_AAA6_41DC_0785EFDFE733",
  "this.Image_5914384D_49CC_803A_417C_15C6CC567386",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "paddingRight": 0,
 "start": "this.init(); this.syncPlaylists([this.DropDown_C1C0933C_CA58_DFDE_41D4_01FAE33F61B1_playlist,this.mainPlayList])",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "minHeight": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "buttonToggleMute": "this.IconButton_C76CE8C9_CA68_AAA6_41E9_375D2A4A8737",
 "gap": 10,
 "data": {
  "name": "Player485"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "shadow": false,
 "overflow": "visible",
 "height": "100%"
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
