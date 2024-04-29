# FRCTBAAPI
An package for the TBA api that pulls only FRC data (WIP)

## Installation TS
`npm install frctbaapi`

```js
import { FUNCTIONS YOU WANT TO IMPORT } from "frctbaapi";
```

Example:

```js 
import { TBAaddToken, teamInfo, teamRobotImage } from "frctbaapi";
```

## Setup 


Set token:

```js
TBAaddToken(<token>)
```

## Usage

### Getting Team info

**Input:**

```js
teamInfo(team) 
```

**Output:**

```json
{
  "key": "string",
  "team_number": 0,
  "nickname": "string",
  "name": "string",
  "school_name": "string",
  "city": "string",
  "state_prov": "string",
  "country": "string",
  "address": "string",
  "postal_code": "string",
  "gmaps_place_id": "string",
  "gmaps_url": "string",
  "lat": 0,
  "lng": 0,
  "location_name": "string",
  "website": "string",
  "rookie_year": 0,
  "motto": "string",
  "home_championship": {}
}
```

### Getting Team logo

**Input:**

```js
teamLogo(team) 
```

**Output:**

URL or base64

### Getting robot image

**Input:**

```js
teamRobotImage(team, year) 
```

**Output:**

URL

### Getting Team awards

**Input:**

```js
teamAwards(team, year) 
```

**Output:**

```json
[
  {
    "name": "string",
    "award_type": 0,
    "event_key": "string",
    "recipient_list": [
      {
        "team_key": "string",
        "awardee": "string"
      }
    ],
    "year": 0
  }
]
```

### Getting match info

**Input:**

```js
matchInfo(matchkey) 
```

**Output:**

```json
{
  "key": "string",
  "comp_level": "qm",
  "set_number": 0,
  "match_number": 0,
  "alliances": {
    "red": {
      "score": 0,
      "team_keys": [
        "string"
      ],
      "surrogate_team_keys": [
        "string"
      ],
      "dq_team_keys": [
        "string"
      ]
    },
    "blue": {
      "score": 0,
      "team_keys": [
        "string"
      ],
      "surrogate_team_keys": [
        "string"
      ],
      "dq_team_keys": [
        "string"
      ]
    }
  },
  "winning_alliance": "red",
  "event_key": "string",
  "time": 0,
  "actual_time": 0,
  "predicted_time": 0,
  "post_result_time": 0,
  "score_breakdown": {},
  "videos": [
    {
      "type": "string",
      "key": "string"
    }
  ]
}
```