var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.023271056693250358,
        "pitch": -0.01285096051913115,
        "fov": 1.513843149153066
      },
      "linkHotspots": [
        {
          "yaw": -0.33974044485092136,
          "pitch": -0.2616810057805985,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7294732101939356,
          "pitch": 0.09197220939374162,
          "title": "Engineering Signboard",
          "text": "Welcome to the Faculty of Engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.39813617442731797,
        "pitch": -0.05749628322811162,
        "fov": 1.513843149153066
      },
      "linkHotspots": [
        {
          "yaw": 0.1330408910879175,
          "pitch": 0.0432231809413377,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -2.2701883980993536,
          "pitch": -0.1648621166205011,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3326639257644644,
          "pitch": 0.2851730783225346,
          "title": "Sculpture",
          "text": "Kinda cute."
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.01684957186470193,
        "pitch": 0.1237609121923775,
        "fov": 1.3713077473253033
      },
      "linkHotspots": [
        {
          "yaw": -3.0960600935494664,
          "pitch": 0.48984107608369065,
          "rotation": 6.283185307179586,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2473452404071335,
          "pitch": 0.014934150244975797,
          "title": "Lifts",
          "text": "Take lift to Level 6 for access to other blocks"
        }
      ]
    }
  ],
  "name": "Engineering Tour _ Maureen",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
