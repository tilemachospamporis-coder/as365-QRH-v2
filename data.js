window.QRH_DATA = {
  "meta": {
    "title": "AS365 N3 QRH",
    "subtitle": "Airbus-style compact digital quick reference",
    "version": "v1.1",
    "offline": true
  },
  "warningIndex": [
  {
    "id": "warn-engine-fire",
    "title": "Engine Fire",
    "lights": ["ENG F", "ENG.1", "ENG.2"],
    "categoryId": "fire",
    "procedureId": "engine-fire"
  },
  {
    "id": "warn-cargo-bay-fire",
    "title": "Cargo Bay Fire",
    "lights": ["O/HEAT", "CARGO F", "ALARM"],
    "categoryId": "fire",
    "procedureId": "cargo-bay-fire"
  },
  {
    "id": "warn-engine-failure-in-flight",
    "title": "Engine Failure in Flight",
    "lights": ["ENG#", "DIF. ENG", "BUS CUPL", "GEN#"],
    "categoryId": "engines",
    "procedureId": "engine-failure-cruise"
  },
  {
    "id": "warn-major-governor-failure",
    "title": "Major Governing Failure",
    "lights": ["GOV#", "DIF. ENG", "THROTTLE LEVER"],
    "categoryId": "engines",
    "procedureId": "major-governor-failure"
  }
],
  "categories": [
        {
         
  "id": "general",
  "title": "GENERAL",
  "icon": "ℹ️",
  "procedures": [
    {
      "id": "warning-system-general",
      "title": "Warning System - General",
      "severity": "info",
      "condition": "Warning panel / aural warning reference",
      "actions": [
        "NR ≤ 345 RPM .............. 3 Hz DISCONTINUOUS",
        "NR ≥ 380 RPM .............. 10 Hz DISCONTINUOUS",
        "ΔNg > 6% ................. GONG",
        "FLIGHT LIMIT GONG ........ LOAD FACTOR / TORQUE / ΔNg / CYCLIC LIMIT"
      ],
      "followUp": [
        "LAND IMMEDIATELY .......... LAND WITHOUT DELAY",
        "LAND ASAP .................. NEAREST SUITABLE AREA",
        "LAND ASAP PRACTICABLE ...... SUITABLE AREA WITH SUPPORT",
        "CONTINUE FLIGHT ........... AS PLANNED"
      ],
      "crew": [
        "PF: REVIEW WARNING TYPE",
        "PM: CONFIRM VISUAL / AURAL INDICATION"
      ],
      "notes": [
        "General reference page, not a procedure."
      ],
      "image": "images/warning-system-general.jpeg"
    }  
]
},

        
      





  
    {
      "id": "fire",
      "title": "FIRE",
      "icon": "🔥",
      "procedures": [
        {
          "id": "engine-fire",
          "title": "Engine Fire",
          "severity": "warning",
          "condition": "ENG FIRE warning / identified engine",
          "actions": [
            "IDENTIFY ENGINE ............ CONFIRM",
            "SINGLE ENG FLIGHT .......... ESTABLISH (~55% TQ)",
            "FUEL SHUTOFF LEVER ......... CLOSE",
            "HEATING .................... OFF",
            "FLT-IDL-OFF SELECTOR ....... OFF",
            "BOOSTER PUMPS (BOTH) ....... OFF",
            "FIRE EXTG 1 ................ ACTUATE"
          ],
          "followUp": [
            "IF FIRE EXTINGUISHED ....... LAND ASAP",
            "IF FIRE PERSISTS ........... FIRE EXTG 2 ACTUATE",
            "IF FIRE STILL PERSISTS ..... LAND IMMEDIATELY",
            "RESTART .................... DO NOT ATTEMPT"
          ],
          "crew": [
            "PF: ENGINE FIRE – I HAVE CONTROL",
            "PM: CONFIRM – ENG 1 / ENG 2",
            "PM: TIME – 1 MIN"
          ],
          "notes": [
            "Single-engine landing profile required."
          ],
          "image": "images/engine-fire.jpeg",
        
          "lights": ["ENG F", "ENG.1", "ENG.2"]
        },
        {
          "id": "cargo-bay-fire",
          "title": "Cargo Bay Fire",
          "severity": "warning",
          "condition": "Cargo bay fire indication",
          "actions": [
            "IN FLIGHT .................. LAND IMMEDIATELY",
            "ON GROUND .................. EVACUATE AIRCRAFT",
            "EXTINGUISH FIRE ............ AS REQUIRED"
          ],
          "followUp": [
            "STOP OPERATIONS",
            "COORDINATE EVACUATION"
          ],
          "crew": [
            "PF: CARGO FIRE",
            "PM: EVACUATION / FIRE RESPONSE"
          ],
          "notes": [],
          "image": "images/cargo-bay-fire.jpeg"
        },
        {
          "id": "cargo-bay-overheat",
          "title": "Cargo Bay Overheat",
          "severity": "caution",
          "condition": "Cargo bay overheating indication",
          "actions": [
            "HEATING SYSTEM ............. OFF"
          ],
          "followUp": [
            "IF O/HEAT CLEARS ........... CONTINUE FLIGHT",
            "IF O/HEAT PERSISTS ......... LAND ASAP"
          ],
          "crew": [
            "PF: CARGO O/HEAT",
            "PM: MONITOR INDICATIONS"
          ],
          "notes": [],
          "image": ""
        },
        {
          "id": "smoke-in-cabin",
          "title": "Smoke in Cabin",
          "severity": "warning",
          "condition": "Smoke in cabin / source known or unknown",
          "actions": [
            "HEATING SYSTEM ............. OFF",
            "WINDOWS .................... OPEN IF POSSIBLE",
            "IF SOURCE IDENTIFIED ....... AFFECTED SYSTEM OFF",
            "IF SOURCE UNKNOWN .......... EMERGENCY CUT-OFF OFF",
            "ALL CONSUMERS .............. OFF",
            "EMERGENCY CUT-OFF .......... ON",
            "AP .......................... ENGAGE IF AVAILABLE"
          ],
          "followUp": [
            "RESTORE SYSTEMS ONE BY ONE",
            "AFFECTED SYSTEM ............ OFF",
            "IF SMOKE CLEARS ............ LAND ASAP",
            "IF SMOKE PERSISTS .......... LAND IMMEDIATELY"
          ],
          "crew": [
            "PF: SMOKE / FIRE – I HAVE CONTROL",
            "PM: CONFIRM – SOURCE / NO SOURCE"
          ],
          "notes": [
            "AP may disengage / SAS may be unavailable with emergency cut-off OFF."
          ],
          "image": "images/smoke-in-cabin.jpeg"
        },
        {
          "id": "fire-detection-failure",
          "title": "Fire Detection System Failure",
          "severity": "caution",
          "condition": "Fire detection system failed",
          "actions": [
            "FIRE DETECTION SYSTEM ...... FAIL"
          ],
          "followUp": [
            "LAND ASAP"
          ],
          "crew": [
            "PF: FIRE DETECTION FAILURE",
            "PM: MONITOR FIRE INDICATIONS"
          ],
          "notes": [],
          "image": ""
        },
        {
          "id": "fire-extinguishing-failure",
          "title": "Fire Extinguishing System Failure",
          "severity": "advisory",
          "condition": "Pressure drop / bottle empty",
          "actions": [
            "FIRE EXTG SYS .............. FAIL",
            "USE OTHER CYLINDER IF FIRE",
            "BOTH PUSHBUTTONS ........... PRESS"
          ],
          "followUp": [
            "CONTINUE FLIGHT IF NO FIRE"
          ],
          "crew": [
            "PF: FIRE SYS FAILURE",
            "PM: CONFIRM DETECTION / EXTINGUISHING STATUS"
          ],
          "notes": [],
          "image": ""
        }
      ]
    },
    {
      "id": "engines",
      "title": "ENGINES",
      "icon": "🚁",
      "procedures": [
        {
          "id": "engine-failure-cruise",
          "title": "Engine Failure in Cruise",
          "severity": "warning",
          "condition": "Engine failure in flight / cruise",
          "actions": [
            "COLLECTIVE / IAS ........... REDUCE",
            "OEI POWER .................. SET (CONTINUOUS)",
            "HEATING SYSTEM ............. OFF",
            "IDENTIFY ENGINE ............ CONFIRM",
            "FLT-IDL-OFF SELECTOR ....... OFF",
            "BOOSTER PUMPS .............. OFF"
          ],
          "followUp": [
            "LAND ASAP",
            "RELIGHT – STANDARD ......... APPLY GROUND START PROCEDURE",
            "RELIGHT – IMMEDIATE ........ OFF → FLT",
            "AUTO START ................. Ng < 15%"
          ],
          "crew": [
            "PF: ENGINE FAILURE – I HAVE CONTROL",
            "PM: CONFIRM – ENG 1 / ENG 2",
            "PM: OEI SET / PARAMETERS CHECK"
          ],
          "notes": [
            "Operative engine power ≤ MCP before start."
          ],
          "image": "images/engine-failure-cruise.jpeg"
        },
        {
          "id": "major-governor-failure",
          "title": "Major Governing Failure",
          "severity": "warning",
          "condition": "Major governing failure / manual engine control required",
          "actions": [
            "OEI MODE ................... AS REQUIRED",
            "IDENTIFY ENGINE ............ CONFIRM",
            "AUTO/MANU SWITCH ........... MANU",
            "Ng .......................... ≥ 62% MAINTAIN",
            "EMERG THROTTLE ............. ADJUST",
            "OPERATIVE ENGINE TQ ........ > 5% MAINTAIN"
          ],
          "followUp": [
            "LAND ASAP",
            "BEFORE LANDING ............. GEAR DOWN / PARK BRAKE RELEASE / NOSE WHEEL LOCK",
            "APPROACH IAS ............... ≤ 40 KT",
            "LANDING .................... LOWER COLLECTIVE SLOWLY"
          ],
          "crew": [
            "PF: GOVERNOR FAILURE – I HAVE CONTROL",
            "PM: Ng / TQ MONITOR",
            "PF: MANUAL CONTROL"
          ],
          "notes": [
            "Manual OEI management only.",
            "Avoid rapid throttle movements.",
            "Pause ~2 sec at neutral notch if crossing."
          ],
          
  "image": "images/IMG_2362.jpeg"

        },
        {
          "id": "minor-governor-failure",
          "title": "Minor Governor Failure",
          "severity": "advisory",
          "condition": "Minor governing anomaly / NR regulation offset",
          "actions": [
            "COLLECTIVE INPUT ........... AVOID ABRUPT CHANGES"
          ],
          "followUp": [
            "CONTINUE FLIGHT",
            "IF THROT MESSAGE ........... CHECK EMERG THROTTLE NEUTRAL"
          ],
          "crew": [
            "PF: MINOR GOV ISSUE",
            "PM: MONITOR NR / THROTTLE STATUS"
          ],
          "notes": [],
          "image": "images/minor-governor-failure.jpeg"
        },
        {
          "id": "ng-difference",
          "title": "Difference of Ng > 6%",
          "severity": "caution",
          "condition": "Multigong / ΔNg > 6%",
          "actions": [
            "SINGLE ENGINE CONDITIONS ... PREPARE",
            "OEI STOP ................... AS REQUIRED",
            "ENGINE PARAMETERS .......... MONITOR"
          ],
          "followUp": [
            "LAND ASAP",
            "LANDING .................... NO HOVER"
          ],
          "crew": [
            "PF: NG SPLIT / GOV ISSUE",
            "PM: MONITOR NG / TORQUE"
          ],
          "notes": [],
          "image": ""
        },
        {
          "id": "ng-indication-error",
          "title": "Ng Indication Error",
          "severity": "advisory",
          "condition": "Ng indication error / no DIFF Ng",
          "actions": [
            "FAULTY Ng INDICATOR ........ IDENTIFY (TEST)",
            "IF INDICATOR VALID ......... USE DIGITAL INDICATION",
            "IF INDICATOR INVALID ....... USE OTHER ENGINE INDICATION"
          ],
          "followUp": [
            "CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: INDICATION FAILURE",
            "PM: CONFIRM / CROSSCHECK"
          ],
          "notes": [],
          "image": "images/ng-indication-error.jpeg"
        },
        {
          "id": "abnormal-t4",
          "title": "Abnormal T4",
          "severity": "caution",
          "condition": "T4 high / low / doubtful indication",
          "actions": [
            "CHECK FAU .................. PRMTR MODE (CODE S)",
            "IF INDICATION INCORRECT .... REDUCE TORQUE 5%",
            "IF VALUE CONFIRMED ......... REDUCE POWER"
          ],
          "followUp": [
            "CONTINUE FLIGHT IF WITHIN LIMITS",
            "IF LIMIT EXCEEDED .......... ENGINE SHUT DOWN",
            "LAND ASAP"
          ],
          "crew": [
            "PF: T4 ABNORMAL",
            "PM: FAU / CROSSCHECK"
          ],
          "notes": [],
          "image": ""
        },
        {
          "id": "torque-indication-error",
          "title": "Torque Indication Error",
          "severity": "advisory",
          "condition": "Torque indication failed",
          "actions": [
            "FOLLOW Ng LAWS ............. USE COCKPIT TABLE",
            "TORQUE READING ............. FAU (PRMTR CODE A / 2)"
          ],
          "followUp": [
            "CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: TORQUE INDICATION FAILURE",
            "PM: BACKUP DATA / TABLE"
          ],
          "notes": [],
          "image": "images/torque-indication-error.jpeg"
        },
        {
          "id": "engine-oil-pressure",
          "title": "Engine Oil Pressure",
          "severity": "warning",
          "condition": "Engine oil pressure low or high",
          "actions": [
            "IF OIL PRESS < 1.1 BAR ..... SINGLE ENG FLIGHT ESTABLISH",
            "AFFECTED ENGINE ............ SHUT DOWN",
            "IF 1.1–8.8 BAR ............. MONITOR",
            "IF OIL PRESS > 8.8 BAR ..... SINGLE ENG FLIGHT ESTABLISH",
            "AFFECTED ENGINE ............ SHUT DOWN"
          ],
          "followUp": [
            "LAND ASAP FOR SHUTDOWN CASE",
            "CONTINUE FLIGHT FOR MONITOR CASE"
          ],
          "crew": [
            "PF: OIL PRESSURE – ENG 1 / ENG 2",
            "PM: CONFIRM / PARAMETERS"
          ],
          "notes": [],
          "image": "images/engine-oil-pressure.jpeg"
        },
        {
          "id": "engine-oil-temperature",
          "title": "Engine Oil Temperature",
          "severity": "caution",
          "condition": "Engine oil temperature high",
          "actions": [
            "CHECK ENG 1 / ENG 2 / MGB TEMP",
            "IF BOTH ENGINES OVERHEATED . LAND IMMEDIATELY",
            "IF ONE ENGINE OVERHEATED .... SINGLE ENG FLIGHT ESTABLISH",
            "FLT-IDL-OFF SELECTOR ....... IDL"
          ],
          "followUp": [
            "IF OIL TEMP CONFIRMED ...... AFFECTED ENGINE SHUT DOWN",
            "LAND ASAP",
            "IF MGB TEMP > 130°C ........ REFER TO MGB PROCEDURE"
          ],
          "crew": [
            "PF: OIL TEMP – ENG 1 / ENG 2",
            "PM: CONFIRM / CROSSCHECK"
          ],
          "notes": [],
          "image": "images/engine-oil-temperature.jpeg"
        },
        {
          "id": "engine-chip-burning",
          "title": "Engine Chip Detected (Chip Burning)",
          "severity": "caution",
          "condition": "Engine chip light / chip burn fitted",
          "actions": [
            "CHIP PULSE SYSTEM .......... ACTIVATE",
            "IF CHIP CLEARS ............. CONTINUE FLIGHT",
            "IF CHIP REMAINS ............ WAIT 30 SEC",
            "CHIP PULSE SYSTEM .......... ACTIVATE AGAIN"
          ],
          "followUp": [
            "IF CHIP PERSISTS ........... SINGLE ENG FLIGHT ESTABLISH",
            "AFFECTED ENGINE ............ IDLE / OEI DISARM 30 SEC",
            "PARAMETERS ................. MONITOR",
            "IF STABLE .................. LAND ASAP",
            "IF UNSTABLE ................ SHUT DOWN ENGINE / LAND ASAP"
          ],
          "crew": [
            "PF: CHIP DETECTED – ENG 1 / ENG 2",
            "PM: CHIP STATUS / PARAMETERS"
          ],
          "notes": [
            "No action on failed engine below 500 ft AGL / ASL.",
            "Max 2 burn attempts."
          ],
          "image": ""
        },
        {
          "id": "engine-chip-no-burning",
          "title": "Engine Chip Detected (No Burning)",
          "severity": "warning",
          "condition": "Engine chip warning without successful burn clearance",
          "actions": [
            "SINGLE ENG FLIGHT .......... ESTABLISH",
            "AFFECTED ENGINE ............ IDLE",
            "OEI DISARM ................. 30 SEC",
            "COLLECTIVE ................. ADJUST (NR ≥ 350 RPM)",
            "PARAMETERS ................. MONITOR"
          ],
          "followUp": [
            "IF STABLE .................. LAND ASAP",
            "IF UNSTABLE ................ SHUT DOWN ENGINE / LAND ASAP"
          ],
          "crew": [
            "PF: CHIP NO-BURN",
            "PM: MONITOR PARAMETERS"
          ],
          "notes": [
            "No action on failed engine below 500 ft AGL / ASL."
          ],
          "image": ""
        },
        {
          "id": "rpm-365",
          "title": "RPM 365",
          "severity": "advisory",
          "condition": "RPM 365 mode / system anomaly",
          "actions": [
            "RPM 365 SWITCH ............. OFF"
          ],
          "followUp": [
            "CONTINUE FLIGHT",
            "IAS ........................ ≤ 135 KT OR VNE",
            "BANK ANGLE ................. ≤ 40°"
          ],
          "crew": [
            "PF: RPM 365",
            "PM: MONITOR NR / ENGINE PARAMETERS"
          ],
          "notes": [],
          "image": "images/rpm-365.jpeg"
        },
        {
          "id": "variable-nr",
          "title": "Variable NR – Unsolicited Operation / Function Failure",
          "severity": "advisory",
          "condition": "Unexpected NR 365 / fixed NR / RPM 365 unavailable",
          "actions": [
            "RPM 365 SWITCH ............. ON IF UNSOLICITED OPERATION",
            "NR VARIABLE ................ NOT AVAILABLE / FIXED 365",
            "RPM 365 FUNCTION ........... NOT AVAILABLE"
          ],
          "followUp": [
            "CONTINUE FLIGHT",
            "IAS ........................ ≤ 135 KT",
            "BANK ANGLE ................. ≤ 40°",
            "CATEGORY A HELIPAD TKOF .... PROHIBITED IF RPM 365 UNAVAILABLE"
          ],
          "crew": [
            "PF: NR MODE FAILURE",
            "PM: CALL LIMITS"
          ],
          "notes": [
            "Hover above HP > 2000 ft limited to ≤10 ft when RPM 365 unavailable."
          ],
          "image": ""
        }
      ]
    },
    {
      "id": "transmission",
      "title": "MGB / TRANSMISSION",
      "icon": "⚙️",
      "procedures": [
        {
          "id": "mgb-oil-pressure",
          "title": "MGB Oil Pressure",
          "severity": "warning",
          "condition": "MGB oil pressure low / overpressure",
          "actions": [
            "POWER ...................... REDUCE",
            "STOPWATCH .................. START",
            "PRESSURE ................... CONFIRM < 0.8 BAR",
            "IF SAFE LANDING DELAYED .... POWER MINIMUM (Vy LEVEL)"
          ],
          "followUp": [
            "LAND ASAP",
            "LANDING .................... WITHIN 25 MIN MAX IF NO SAFE IMMEDIATE LANDING",
            "IF OVERPRESSURE ............ MONITOR / LAND ASAP"
          ],
          "crew": [
            "PF: MGB OIL – ABNORMAL",
            "PM: TIMER / PARAMETERS"
          ],
          "notes": [
            "Critical transmission limitation."
          ],
          "image": "images/mgb-oil-pressure.jpeg"
        },
        {
          "id": "mgb-oil-temperature",
          "title": "MGB Oil Temperature",
          "severity": "caution",
          "condition": "MGB temp high",
          "actions": [
            "CHECK ENG OIL TEMP / MGB OIL TEMP",
            "IF MGB TEMP > 130°C ........ IAS ~120 KT"
          ],
          "followUp": [
            "IF TEMP CONFIRMED .......... LAND ASAP",
            "IF INDICATION DOUBTFUL ..... CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: MGB TEMP HIGH",
            "PM: CROSSCHECK INDICATIONS"
          ],
          "notes": [],
          "image": "images/mgb-oil-temperature.jpeg"
        }
      ]
    },
    {
      "id": "hydraulic",
      "title": "HYDRAULIC",
      "icon": "💧",
      "procedures": [
        {
          "id": "hyd-overpressure-emergency",
          "title": "Emergency Hydraulic Overpressure",
          "severity": "advisory",
          "condition": "Emergency hydraulic overpressure",
          "actions": [
            "L/G PUMP SWITCH ............ NORM"
          ],
          "followUp": [
            "CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: HYD OVERPRESSURE",
            "PM: L/G PUMP NORMAL"
          ],
          "notes": [],
          "image": ""
        },
        {
          "id": "hyd-1-low-pressure",
          "title": "HYD System 1 Pressure < 10 Bar",
          "severity": "warning",
          "condition": "HYD 1 pressure low",
          "actions": [
            "HYD PRESSURE ............... CONFIRM",
            "HYD ISOLATE SWITCH ......... NORMAL",
            "MANOEUVRES ................. AVOID ABRUPT",
            "IAS ........................ ≤ 130 KT",
            "LANDING GEAR ............... EMERGENCY EXTENSION"
          ],
          "followUp": [
            "LAND ASAP"
          ],
          "crew": [
            "PF: HYD FAILURE – I HAVE CONTROL",
            "PM: MONITOR HYD / CONTROLS"
          ],
          "notes": [
            "Right pedal force increased.",
            "If accumulator < 100 bar, wheel braking lost."
          ],
          "image": ""
        },
        {
          "id": "hyd-2-low-pressure",
          "title": "HYD System 2 Pressure < 10 Bar",
          "severity": "caution",
          "condition": "HYD 2 pressure low",
          "actions": [
            "HYD PRESSURE ............... CONFIRM",
            "MANOEUVRES ................. AVOID ABRUPT",
            "IAS ........................ ≤ 130 KT"
          ],
          "followUp": [
            "LAND ASAP"
          ],
          "crew": [
            "PF: HYD 2 FAILURE – I HAVE CONTROL",
            "PM: MONITOR HYD / PEDAL FORCES"
          ],
          "notes": [
            "Right pedal force increased."
          ],
          "image": ""
        },
        {
          "id": "hydraulic-level-system-2",
          "title": "Hydraulic Level – System 2",
          "severity": "warning",
          "condition": "Hydraulic level low / system 2",
          "actions": [
            "HYD ISOLATE SWITCH ......... CUT OFF",
            "HYD 1 PRESSURE ............. CHECK"
          ],
          "followUp": [
            "IF PRESSURE NORMAL ......... CONTINUE FLIGHT",
            "IF PRESSURE < 10 BAR ....... HYD 1 FAILURE",
            "LANDING GEAR ............... EMERGENCY EXTENSION",
            "LANDING .................... T/R FAILURE PROCEDURE",
            "LAND ASAP"
          ],
          "crew": [
            "PF: HYD LEVEL LOW",
            "PM: ISOLATING SYSTEM"
          ],
          "notes": [
            "If accumulator < 100 bar, wheel braking lost."
          ],
          "image": "images/hydraulic-level-system-2.jpeg"
        },
        {
          "id": "aux-hydraulic",
          "title": "Auxiliary Hydraulic",
          "severity": "caution",
          "condition": "Auxiliary hydraulic active / gear extension concern",
          "actions": [
            "HYD AUX SWITCH ............. BY PASS",
            "LANDING GEAR ............... EXTEND"
          ],
          "followUp": [
            "IF GEAR EXTENDED ........... LAND ASAP",
            "IF GEAR NOT EXTENDED ....... CONTINUE FLIGHT",
            "BEFORE LANDING ............. HYD AUX SWITCH NORM (MOMENTARY) OR USE EMERG GEAR EXTENSION"
          ],
          "crew": [
            "PF: AUX HYD – I HAVE CONTROL",
            "PM: CONFIRM / GEAR STATUS"
          ],
          "notes": [
            "Do not use HYD AUX TEST outside normal checks."
          ],
          "image": ""
        },
        {
          "id": "servo-jam",
          "title": "Jamming of Servocontrol",
          "severity": "warning",
          "condition": "Main or tail servocontrol jam",
          "actions": [
            "CONTROL JAMMING ............ IDENTIFY AXIS",
            "FORCE ...................... MAINTAIN / DO NOT OVERCONTROL",
            "MANOEUVRES ................. LIMIT"
          ],
          "followUp": [
            "LAND ASAP"
          ],
          "crew": [
            "PF: CONTROL JAM – I HAVE CONTROL",
            "PM: MONITOR CONTROLS / ASSIST"
          ],
          "notes": [],
          "image": ""
        },
        {
          "id": "high-hydraulic-pressure",
          "title": "High Hydraulic Pressure",
          "severity": "caution",
          "condition": "Hydraulic pressure high",
          "actions": [
            "HYD PRESSURE ............... MONITOR",
            "MANOEUVRES ................. AVOID ABRUPT"
          ],
          "followUp": [
            "LAND ASAP"
          ],
          "crew": [
            "PF: HYD PRESS HIGH",
            "PM: MONITOR PRESSURE"
          ],
          "notes": [],
          "image": "images/high-hydraulic-pressure.jpeg"
        }
      ]
    },
    {
      "id": "landing-gear",
      "title": "LANDING GEAR",
      "icon": "🛬",
      "procedures": [
        {
          "id": "lg-retraction-failure",
          "title": "L/G Retraction Failure",
          "severity": "advisory",
          "condition": "Landing gear does not retract",
          "actions": [
            "L/G CONTROL ............... DOWN",
            "PERFORM ................... TOUCH & GO",
            "L/G CONTROL ............... UP"
          ],
          "followUp": [
            "IF GEAR RETRACTS .......... CONTINUE FLIGHT",
            "IF GEAR DOES NOT RETRACT .. L/G CONTROL DOWN / CONTINUE FLIGHT",
            "AFTER 15 SEC .............. L/G CONTROL DOWN / CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: GEAR NOT RETRACTING",
            "PM: MONITOR GEAR STATUS"
          ],
          "notes": [
            "Gear down is safe configuration."
          ],
          "image": "images/lg-retraction-failure.jpeg"
        },
        {
          "id": "lg-extension-failure",
          "title": "L/G Extension Failure",
          "severity": "caution",
          "condition": "No green gear lights",
          "actions": [
            "AMBER LIGHT ............... OFF",
            "GEAR WARNING (AURAL) ...... OFF (IAS < 55 KT)",
            "IF ABOVE MET .............. GEAR CONSIDERED DOWN & LOCKED",
            "L/G CONTROL ............... UP",
            "L/G CONTROL ............... DOWN"
          ],
          "followUp": [
            "IF GEAR DOES NOT EXTEND ... EMERGENCY GEAR EXTENSION"
          ],
          "crew": [
            "PF: GEAR PROBLEM",
            "PM: CHECK WARNINGS / IAS"
          ],
          "notes": [],
          "image": "images/lg-extension-failure.jpeg"
        },
        {
          "id": "lg-emergency-extension",
          "title": "Emergency Landing Gear Extension",
          "severity": "warning",
          "condition": "Gear cannot be extended normally",
          "actions": [
            "L/G CONTROL ............... DOWN",
            "L/G PUMP SWITCH ........... EMERG",
            "HYD AUX SWITCH ............ BY PASS",
            "WAIT ...................... ~1 MIN"
          ],
          "followUp": [
            "IF GEAR DOWN (3 GREEN) .... L/G PUMP SWITCH NORM",
            "IF EXTENSION FAILS ........ LOW HOVER ATTEMPT DOWNLOCK",
            "IF ALL GEAR EXTENDED ...... PRECAUTIONARY LANDING",
            "IF GEAR NOT EXTENDED ...... GEAR-UP LANDING"
          ],
          "crew": [
            "PF: GEAR EMERGENCY – I HAVE CONTROL",
            "PM: MONITOR LIGHTS / TIME"
          ],
          "notes": [
            "Cold weather may require > 3 min.",
            "Ensure area clear for gear-up landing."
          ],
          "image": "images/lg-extension-failure.jpeg"
        }
      ]
    },
    {
      "id": "fuel",
      "title": "FUEL",
      "icon": "⛽",
      "procedures": [
        {
          "id": "fuel-low-one-engine",
          "title": "Fuel Low Level (1 Engine)",
          "severity": "warning",
          "condition": "Fuel low level affecting one engine group",
          "actions": [
            "BOOSTER PUMPS ............. CHECK ON",
            "FUEL QUANTITY ............. CHECK GAUGES",
            "IF FUEL ≈ 0 ............... STOPWATCH START",
            "LEAK ...................... CHECK (NO LEAK)",
            "FUEL TRANSFER ............. ON",
            "ATTAIN SINGLE ENGINE CONDITIONS"
          ],
          "followUp": [
            "LAND ASAP",
            "IF FUEL ABOVE 0 ........... AVOID SUDDEN MANOEUVRES / LONGITUDINAL VARIATIONS"
          ],
          "crew": [
            "PF: FUEL LOW – I HAVE CONTROL",
            "PM: CONFIRM QUANTITY / PUMPS",
            "PM: MONITOR TRANSFER / TIME"
          ],
          "notes": [
            "If transfer impossible: ~5 min at MCP before engine shutdown.",
            "Unusable fuel increase LH +130 kg / RH +20 kg."
          ],
          "image": ""
        },
        {
          "id": "fuel-low-both-engines",
          "title": "Fuel Low Level (Both Engines)",
          "severity": "warning",
          "condition": "Low fuel both tanks / dual engine flameout risk",
          "actions": [
            "BOOSTER PUMPS ............. CHECK ON",
            "FUEL QUANTITY (BOTH) ...... CHECK",
            "STOPWATCH ................. START"
          ],
          "followUp": [
            "IF FUEL ≈ 0 ............... LAND / DITCH IMMEDIATELY",
            "IF FUEL ABOVE 0 ........... AVOID SUDDEN MANOEUVRES / LONGITUDINAL VARIATIONS",
            "LAND ASAP"
          ],
          "crew": [
            "PF: FUEL CRITICAL – I HAVE CONTROL",
            "PM: CONFIRM QUANTITY BOTH TANKS",
            "PM: START TIMER / MONITOR"
          ],
          "notes": [
            "~5 min at MCP may remain before both engines shut down.",
            "Unusable fuel increase LH +130 kg / RH +20 kg."
          ],
          "image": ""
        },
        {
          "id": "fuel-filter-clogging",
          "title": "Pre-clogging of Fuel Filter",
          "severity": "caution",
          "condition": "FILT light / pre-clogging",
          "actions": [
            "ENGINE PARAMETERS ......... MONITOR"
          ],
          "followUp": [
            "IF PARAMETERS UNSTEADY .... SINGLE ENGINE CONDITIONS / SHUT DOWN AFFECTED ENGINE / LAND ASAP",
            "IF PARAMETERS STEADY ...... CONTINUE FLIGHT",
            "IF BOTH FILT LIGHTS + UNSTEADY .... POWER REDUCE / LAND ASAP"
          ],
          "crew": [
            "PF: FUEL FILTER – I HAVE CONTROL",
            "PM: CONFIRM FILT LIGHT / PARAMETERS"
          ],
          "notes": [
            "Dual FILT lights may indicate contamination."
          ],
          "image": ""
        },
        {
          "id": "fuel-inlet-pressure-failure",
          "title": "Engine Fuel Inlet Pressure Failure",
          "severity": "caution",
          "condition": "Low engine fuel inlet pressure",
          "actions": [
            "FUEL PRESSURE ............. CHECK",
            "FLIGHT ALTITUDE ........... LOWER IF POSSIBLE",
            "AVOID ..................... HIGH POWER SETTINGS",
            "ENGINE PARAMETERS ......... MONITOR"
          ],
          "followUp": [
            "IF PARAMETERS UNSTEADY .... SINGLE ENGINE CONDITIONS / SHUT DOWN AFFECTED ENGINE",
            "LAND ASAP PRACTICABLE",
            "IF PARAMETERS STEADY ...... CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: FUEL PRESSURE – I HAVE CONTROL",
            "PM: CONFIRM LOW PRESSURE / CHECK GAUGES"
          ],
          "notes": [],
          "image": ""
        }
      ]
    },
    {
      "id": "electrical",
      "title": "ELECTRICAL",
      "icon": "⚡",
      "procedures": [
        {
          "id": "battery-overheat",
          "title": "Battery Internal Overheating",
          "severity": "caution",
          "condition": "BAT TEMP / internal battery overheat",
          "actions": [
            "BAT RLY 1 & BAT RLY 2 ..... OFF",
            "GENERATOR VOLTAGES ........ CHECK",
            "IF EITHER > 30V ........... FAULTY GENERATOR OFF"
          ],
          "followUp": [
            "IF BAT TEMP WARNING ....... LAND ASAP PRACTICABLE",
            "IF NO BAT TEMP ............ BAT RLY 1 & 2 ON / CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: BAT TEMP / ELECTRICAL – I HAVE CONTROL",
            "PM: IDENTIFY FAULTY GENERATOR"
          ],
          "notes": [],
          "image": ""
        },
        {
          "id": "one-generator-failure",
          "title": "1 Generator Isolated / Failure",
          "severity": "advisory",
          "condition": "Single generator failure",
          "actions": [
            "GENERATOR VOLTAGE ......... CHECK",
            "IF VOLTAGE = 0 ............ GENERATOR RESET RST THEN ON"
          ],
          "followUp": [
            "IF VOLTAGE RECOVERS ....... CONTINUE FLIGHT",
            "IF STILL ZERO ............. FAULTY GENERATOR OFF / CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: GEN FAILURE – I HAVE CONTROL",
            "PM: RESET ATTEMPT / MONITOR LOAD"
          ],
          "notes": [
            "If normal reset fails, use emergency reset."
          ],
          "image": ""
        },
        {
          "id": "total-generator-failure",
          "title": "Total Generator Failure",
          "severity": "warning",
          "condition": "All generators lost / battery-only flight",
          "actions": [
            "APPLY PREVIOUS PROCEDURE .. GENERATOR FAILURE",
            "IF FAILURE PERSISTS ....... STOPWATCH START",
            "GENERATORS ................. OFF",
            "SHED BUS ................... SELECT SHED",
            "ATC ........................ BAT IF REQUIRED",
            "BOOSTER PUMPS ............. 1 PER ENGINE OFF"
          ],
          "followUp": [
            "PREPARE AP DISCONNECT ..... HANDS ON CONTROLS",
            "INV 2 ...................... OFF",
            "VOR 2 ...................... OFF",
            "LAND ASAP"
          ],
          "crew": [
            "PF: TOTAL GEN FAILURE – I HAVE CONTROL",
            "PM: START TIMER / INITIATE LOAD SHEDDING"
          ],
          "notes": [
            "Extend landing gear before battery < 22V.",
            "Battery endurance ~30 min subject to load shedding."
          ],
          "image": "images/total-generator-failure.jpeg"
        },
        {
          "id": "bus-short-circuit",
          "title": "Short Circuit on Indicated Bus",
          "severity": "caution",
          "condition": "Bus fault / short circuit on indicated bus",
          "actions": [
            "GEN # + BAT RLY # ......... OFF",
            "INV # ...................... TRF"
          ],
          "followUp": [
            "LAND ASAP PRACTICABLE"
          ],
          "crew": [
            "PF: ELECTRICAL BUS FAULT – I HAVE CONTROL",
            "PM: CONFIRM AFFECTED BUS / RECONFIGURE"
          ],
          "notes": [
            "Potential escalation / propagation risk."
          ],
          "image": ""
        },
        {
          "id": "battery-contactor-failure",
          "title": "Battery Contactor Failure",
          "severity": "advisory",
          "condition": "Battery relay / contactor failure",
          "actions": [
            "BAT RLY # ................. CHECK ON"
          ],
          "followUp": [
            "CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: BAT CONTACTOR",
            "PM: CONFIRM BAT RELAY STATUS"
          ],
          "notes": [],
          "image": "images/battery-contactor-failure.jpeg"
        },
        {
          "id": "battery-short-circuit",
          "title": "Battery Short Circuit",
          "severity": "advisory",
          "condition": "Battery short circuit indication",
          "actions": [
            "BAT RLY 1 & BAT RLY 2 ..... CHECK ON"
          ],
          "followUp": [
            "CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: BAT SHORT",
            "PM: MONITOR ELECTRICAL STATUS"
          ],
          "notes": [
            "Assumed isolated internally."
          ],
          "image": "images/battery-short-circuit.jpeg"
        },
        {
          "id": "inverter-1-failure",
          "title": "Static Inverter No.1 Failure",
          "severity": "advisory",
          "condition": "INV 1 failure",
          "actions": [
            "HANDS ON CONTROLS ......... AP MAY DISCONNECT",
            "INVERTER 1 ................. TRF"
          ],
          "followUp": [
            "IF INV 2 AVAILABLE ......... RE-ENGAGE COUPLER MODES / CONTINUE FLIGHT",
            "IF INV 2 NOT AVAILABLE ..... INV 1 OFF / INV 2 OFF THEN ON / RE-ENGAGE COUPLER MODES / CONTINUE FLIGHT"
          ],
          "crew": [
            "PF: INVERTER FAILURE – I HAVE CONTROL",
            "PM: SELECT INV 1 TRF"
          ],
          "notes": [],
          "image": ""
        },
        {
          "id": "inverter-2-failure",
          "title": "Static Inverter No.2 Failure",
          "severity": "advisory",
          "condition": "INV 2 failure",
          "actions": [
            "HANDS ON CONTROLS ......... AP MAY DISCONNECT",
            "INVERTER 2 ................. TRF"
          ],
          "followUp": [
            "IF INV 1 AVAILABLE ......... CONTINUE FLIGHT",
            "IF INV 1 NOT AVAILABLE ..... INV 2 OFF / INV 1 OFF THEN ON / CONTINUE FLIGHT",
            "AFTER PROCEDURE ............ RE-ENGAGE AFCS / COUPLER MODES"
          ],
          "crew": [
            "PF: INV 2 FAILURE – I HAVE CONTROL",
            "PM: CONFIRM INV 1 STATUS"
          ],
          "notes": [],
          "image": ""
        }
      ]
    },
    {
      "id": "emergency-landings",
      "title": "EMERGENCY LANDINGS",
      "icon": "🌊",
      "procedures": [
        {
          "id": "autorotation-land",
          "title": "Autorotation Landing (On Land)",
          "severity": "warning",
          "condition": "Engine failure / autorotation entry",
          "actions": [
            "COLLECTIVE ................. FULL DOWN",
            "NR .......................... ~360 RPM",
            "IAS ......................... Vy / HEADWIND",
            "LANDING GEAR ............... DOWN & LOCK",
            "PARKING BRAKE .............. RELEASE",
            "NOSE WHEEL ................. AFT"
          ],
          "followUp": [
            "AT ~70 FT .................. FLARE 15°–20° (MAX 25°)",
            "JUST BEFORE TOUCHDOWN ...... LEVEL / APPLY COLLECTIVE SMOOTHLY",
            "ON GROUND ................. CYCLIC NEUTRAL / COLLECTIVE LOWER / BRAKES",
            "SHUTDOWN ................... ROTOR BRAKE NR ≤ 170 RPM / EMERG CUT-OFF OFF / EVACUATE"
          ],
          "crew": [
            "PF: ENGINE FAILURE – AUTOROTATION",
            "PM: NR CHECK – SPEED Vy",
            "PF: FLARE / LEVEL / CUSHION"
          ],
          "notes": [
            "NR = LIFE."
          ],
          "image": ""
        },
        {
          "id": "ditching-no-floats",
          "title": "Emergency Ditching (No Floats)",
          "severity": "warning",
          "condition": "Forced water landing without flotation",
          "actions": [
            "COLLECTIVE ................. FULL DOWN",
            "NR .......................... ~360 RPM",
            "IAS ......................... Vy / HEADWIND",
            "LANDING GEAR ............... DOWN & LOCK",
            "PARKING BRAKE .............. RELEASE",
            "NOSE WHEEL ................. LOCK"
          ],
          "followUp": [
            "ADEL T (<200 FT) ........... JETTISON IF FITTED",
            "AT ~120 FT ................. REDUCE GROUND SPEED / JETTISON WINDOWS",
            "AT ~20 FT .................. LEVEL / CUSHION TOUCHDOWN",
            "ON WATER ................... DO NOT LOWER COLLECTIVE / ROTOR BRAKE CAREFULLY",
            "EVACUATE IMMEDIATELY"
          ],
          "crew": [
            "PF: ENGINE FAILURE – DITCHING",
            "PM: WINDOWS – JETTISONED",
            "PF: EVACUATE – EVACUATE"
          ],
          "notes": [
            "Approach parallel to swell if possible."
          ],
          "image": ""
        },
        {
          "id": "ditching-with-floats",
          "title": "Emergency Ditching (With Floats)",
          "severity": "warning",
          "condition": "Forced water landing with floats available",
          "actions": [
            "COLLECTIVE ................. FULL DOWN",
            "NR .......................... ~360 RPM",
            "IAS ......................... ≤ 90 KT",
            "STEP ........................ CHECK RETRACTED",
            "EMERG FLOAT SWITCH ......... ARM"
          ],
          "followUp": [
            "AT ~200 FT / 70 KT ......... DEPLOY FLOATS",
            "ADEL T (<200 FT) ........... JETTISON IF FITTED",
            "AT ~20 FT .................. LEVEL / CUSHION TOUCHDOWN",
            "ON WATER ................... REDUCE COLLECTIVE / ROTOR BRAKE CAREFULLY",
            "JETTISON DOORS / EVACUATE"
          ],
          "crew": [
            "PF: ENGINE FAILURE – DITCHING WITH FLOATS",
            "PM: FLOATS DEPLOYED – CHECK",
            "PF: EVACUATE"
          ],
          "notes": [
            "Light wind: parallel to swell. Strong wind: between wind and swell."
          ],
          "image": ""
        }
      ]
    },
    {
      "id": "rotor-flight-controls",
      "title": "ROTOR / FLIGHT CONTROLS",
      "icon": "🌀",
      "procedures": [
        {
          "id": "tail-rotor-failure",
          "title": "Tail Rotor Failure",
          "severity": "warning",
          "condition": "Loss of yaw control / T/R failure",
          "actions": [
            "HOVER / LOW SPEED .......... COLLECTIVE REDUCE IMMEDIATELY / LAND OR DITCH IMMEDIATELY",
            "CLIMB / HOVER OGE .......... REDUCE COLLECTIVE / CONTROL HEADING WITH ROLL / INCREASE AIRSPEED",
            "CRUISE ..................... MAINTAIN SPEED / MINIMIZE POWER CHANGES"
          ],
          "followUp": [
            "PLAN RUNNING LANDING",
            "LANDING GEAR ............... DOWN & LOCK",
            "APPROACH ................... SLIGHT LEFT SIDESLIP / IAS ≥ 60 KT",
            "TOUCHDOWN .................. 45–55 KT WHEN NOSE ALIGNS WITH TRACK",
            "AFTER TOUCHDOWN ............ COLLECTIVE LOWER SLOWLY / DIRECTION WITH BRAKES",
            "LAND ASAP"
          ],
          "crew": [
            "PF: TAIL ROTOR FAILURE",
            "PM: CONFIRMED / YAW CHECK",
            "PF: ALIGNING / LANDING",
            "PM: SPEED CHECK"
          ],
          "notes": [
            "No go-around below 40 KT."
          ],
          "image": "images/tail-rotor-failure.jpeg"
        },
{
      
  "id": "emergency-lg-extension",
  "title": "Emergency L/G Extension",
  "severity": "warning",
  "condition": "Landing gear extension in emergency mode",
  "actions": [
    "LANDING GEAR CONTROL ............ DOWN",
    "LG PUMP SWITCH .................. EMERG",
    "HYD AUX SWITCH .................. BY PASS",
    "WAIT 1 MIN APPROX"
  ],
  "followUp": [
    "IF LG PUMP LIGHT ON ............. LG PUMP SWITCH NORM",
    "IF GEAR EXTENDED ................ LAND AS SOON AS PRACTICABLE",
    "IF GEAR FAILS TO EXTEND:",
    "ENTER LOW HOVER AND ATTEMPT DOWNLOCK BY GROUND CREW",
    "IF ALL 3 GEAR EXTENDED .......... LAND CAUTIOUSLY",
    "IF ONE OR MORE NOT EXTENDED:",
    "EVACUATE IN LOW HOVER",
    "RETRACT GEAR",
    "ENSURE AREA CLEAR",
    "GEAR-UP LANDING ON PREPARED SURFACE"
  ],
  "crew": [],
  "notes": [
    "In cold weather extension may require more than 3 min",
    "After extension wait at least 3 min before retraction (training)"
  ],
  "image": "images/emergency-lg-extension.jpeg"
}
]
}
];
  
    


