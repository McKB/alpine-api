const lifts = [
  {
    liftType: 'Rope Tow',
    liftName: 'Bellows Falls Rope Tow',
    resortId: 2,
    shapeLength: 253.570015671698
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Snowplay Carpet 2',
    resortId: 11,
    shapeLength: 65.902266212689
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Club Carpet',
    resortId: 24,
    shapeLength: 164.365799998865
  },
  {
    liftType: 'J-Bar',
    liftName: '400\' J-bar',
    resortId: 26,
    shapeLength: 105.043598380432
  },
  {
    liftType: 'Surface T-bar',
    liftName: 'Lord\'s Prayer T-bar',
    resortId: 5,
    shapeLength: 368.987900916133
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Heaven\'s Gate Triple',
    resortId: 25,
    shapeLength: 1106.71755223702
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Coleman Brook Express Quad',
    resortId: 18,
    shapeLength: 755.747654117311
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Sundance',
    resortId: 16,
    shapeLength: 1552.66466283445
  },
  {
    liftType: 'Rope Tow',
    liftName: 'North East Slopes Rope Tow',
    resortId: 17,
    shapeLength: 378.213470264782
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Bonanza Double Chair',
    resortId: 19,
    shapeLength: 153.570396939418
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Grand Summit Express',
    resortId: 16,
    shapeLength: 2152.63170026774
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Heavy Metal',
    resortId: 16,
    shapeLength: 961.229162067231
  },
  {
    liftType: 'Double Chair',
    liftName: 'Sheehan Chair',
    resortId: 15,
    shapeLength: 527.28155522606
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'B Quad',
    resortId: 18,
    shapeLength: 823.773609800713
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Challenger',
    resortId: 16,
    shapeLength: 1085.93603995928
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Easy Street Double',
    resortId: 23,
    shapeLength: 477.373568646018
  },
  {
    liftType: 'Carpet',
    liftName: 'Wonder Carpet',
    resortId: 15,
    shapeLength: 44.9263562518487
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Metro Quad',
    resortId: 10,
    shapeLength: 865.733017732586
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Glider Surface Lift',
    resortId: 22,
    shapeLength: 132.977478199377
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Welcom Mat',
    resortId: 25,
    shapeLength: 133.493618304248
  },
  {
    liftType: 'Poma Surface',
    liftName: 'Poma',
    resortId: 6,
    shapeLength: 937.872449989774
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Skye Peak Express Quad',
    resortId: 11,
    shapeLength: 1438.53543454361
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Sherburne Express',
    resortId: 6,
    shapeLength: 1156.91435709598
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Summit Express Quad',
    resortId: 19,
    shapeLength: 1819.7748390898
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Mid-Burke Express',
    resortId: 6,
    shapeLength: 1743.64015714511
  },
  {
    liftType: 'Gondola',
    liftName: 'Over Easy Gondola',
    resortId: 23,
    shapeLength: 491.7109834617
  },
  {
    liftType: 'Rope Tow',
    liftName: 'Lyndon Outing Club Rope Tow',
    resortId: 12,
    shapeLength: 88.3831355337343
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Green Mountain Flyer',
    resortId: 10,
    shapeLength: 2149.39568021956
  },
  {
    liftType: 'T Bar',
    liftName: 'T Bar',
    resortId: 7,
    shapeLength: 567.499045939364
  },
  {
    liftType: 'Sixpack Chairlift',
    liftName: 'Shooting Star',
    resortId: 24,
    shapeLength: 990.435157306823
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Mogul Mouse Magic Lift',
    resortId: 22,
    shapeLength: 1387.92280406648
  },
  {
    liftType: 'Gondola',
    liftName: 'Gondola',
    resortId: 23,
    shapeLength: 2214.54781285022
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Sunbrook',
    resortId: 16,
    shapeLength: 1320.09330876025
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Alpine Double',
    resortId: 23,
    shapeLength: 545.632119174985
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Tumbleweed',
    resortId: 16,
    shapeLength: 727.597593093358
  },
  {
    liftType: 'Quad Lift',
    liftName: 'Gatehouse Express Quad',
    resortId: 25,
    shapeLength: 1136.38094878379
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Snowden Triple',
    resortId: 11,
    shapeLength: 1280.7122555181
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Ramshead Express Quad',
    resortId: 11,
    shapeLength: 1635.03242442539
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Village Lift',
    resortId: 22,
    shapeLength: 1560.46075026891
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Plaza Chairlift',
    resortId: 5,
    shapeLength: 574.431394168678
  },
  {
    liftType: 'Rope Tow',
    liftName: 'Harrington Hill Rope Tow',
    resortId: 9,
    shapeLength: 202.805115471935
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Lift 27',
    resortId: 16,
    shapeLength: 24.5325584032561
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Black Ridge Triple',
    resortId: 18,
    shapeLength: 811.942986171511
  },
  {
    liftType: 'Handle Tow',
    liftName: 'Mighty Tow',
    resortId: 7,
    shapeLength: 138.328149531372
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Snowshed Double',
    resortId: 11,
    shapeLength: 987.382779576943
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Sachem Quad',
    resortId: 18,
    shapeLength: 1340.80591301479
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Nitro Express',
    resortId: 16,
    shapeLength: 1495.43391995739
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Canyon Quad',
    resortId: 11,
    shapeLength: 1040.17879572593
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Mountain Triple',
    resortId: 23,
    shapeLength: 1283.40615133178
  },
  {
    liftType: 'Rope Tow',
    liftName: 'Hardack Ski Area',
    resortId: 8,
    shapeLength: 210.204781924787
  },
  {
    liftType: 'Gondola',
    liftName: 'Skyeship Express Gondola',
    resortId: 11,
    shapeLength: 3854.30045873581
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Snowden Quad',
    resortId: 11,
    shapeLength: 1313.18248708218
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Black Chair',
    resortId: 14,
    shapeLength: 1396.08526431061
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Timberline Quad',
    resortId: 3,
    shapeLength: 1109.2630162623
  },
  {
    liftType: 'Rope Tow',
    liftName: 'VTC Ski Area',
    resortId: 28,
    shapeLength: 191.631798804545
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Lift 25',
    resortId: 16,
    shapeLength: 28.9931360581444
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'North Ridge Triple',
    resortId: 11,
    shapeLength: 680.255970566477
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Snowflake',
    resortId: 3,
    shapeLength: 435.727867785325
  },
  {
    liftType: 'Surface Poma',
    liftName: 'GMVS Poma',
    resortId: 25,
    shapeLength: 574.273228523944
  },
  {
    liftType: 'Doulbe Chairlift',
    liftName: 'Lookout Double',
    resortId: 23,
    shapeLength: 1534.11706703226
  },
  {
    liftType: 'Double Chair',
    liftName: 'Lift 3',
    resortId: 13,
    shapeLength: 684.972590562741
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Sensation Quad',
    resortId: 23,
    shapeLength: 1786.53216689569
  },
  {
    liftType: 'Triple Chair',
    liftName: 'The Witches',
    resortId: 27,
    shapeLength: 560.397594244628
  },
  {
    liftType: 'Triple Chair',
    liftName: 'Bailey Falls Chair',
    resortId: 15,
    shapeLength: 1263.60659887373
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Castle Rock Double',
    resortId: 25,
    shapeLength: 1429.08657901567
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Sun Chairlift',
    resortId: 5,
    shapeLength: 1203.15496775927
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Glades Peak Quad',
    resortId: 18,
    shapeLength: 1161.25723140677
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Golden Express Quad',
    resortId: 19,
    shapeLength: 1325.04819127004
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Sunrise Village Triple',
    resortId: 11,
    shapeLength: 912.526551271712
  },
  {
    liftType: 'Sixpack Chairlift',
    liftName: 'URSA Express',
    resortId: 24,
    shapeLength: 1335.73897351745
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Seasons',
    resortId: 16,
    shapeLength: 328.440532540363
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Solstice',
    resortId: 24,
    shapeLength: 1410.54525576866
  },
  {
    liftType: 'Surface T-bar',
    liftName: 'Sterling T-bar',
    resortId: 22,
    shapeLength: 345.012448567132
  },
  {
    liftType: 'Double Chair',
    liftName: 'Lift 2',
    resortId: 13,
    shapeLength: 1228.64492941276
  },
  {
    liftType: 'T Bar',
    liftName: 'Lyndon Outing Club T Bar',
    resortId: 12,
    shapeLength: 448.403298477407
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Magic Carpet',
    resortId: 6,
    shapeLength: 32.7506617443363
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'The Tage',
    resortId: 27,
    shapeLength: 857.148846626755
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Madonna 2 Lift',
    resortId: 22,
    shapeLength: 1386.57771005507
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Bear Trap',
    resortId: 16,
    shapeLength: 327.63582214671
  },
  {
    liftType: 'Gondola',
    liftName: 'Gondola',
    resortId: 24,
    shapeLength: 2179.01520283685
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Iverness Quad',
    resortId: 25,
    shapeLength: 1287.72295764107
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Snowshed Express Quad',
    resortId: 11,
    shapeLength: 1067.3831448831
  },
  {
    liftType: 'T Bar',
    liftName: 'Northeast Slopes T Bar',
    resortId: 17,
    shapeLength: 421.554937933755
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Red Chair',
    resortId: 14,
    shapeLength: 1556.95319551517
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'A Quad',
    resortId: 18,
    shapeLength: 794.356241285519
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Learn to Snowboard Carpet',
    resortId: 11,
    shapeLength: 145.694975690059
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Bear Mountain Quad',
    resortId: 11,
    shapeLength: 787.572229076106
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Mid Mountain',
    resortId: 3,
    shapeLength: 540.05909481999
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Alpine Chairlift',
    resortId: 5,
    shapeLength: 759.305278017831
  },
  {
    liftType: 'Sixpack Chairlift',
    liftName: 'American Express',
    resortId: 24,
    shapeLength: 958.300954812646
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'North Lynx Triple',
    resortId: 25,
    shapeLength: 859.633549658948
  },
  {
    liftType: 'Single Chair',
    liftName: 'Lift 1',
    resortId: 13,
    shapeLength: 1598.15323600074
  },
  {
    liftType: 'Sixpack Chairlift',
    liftName: 'Barnstormer Lift',
    resortId: 27,
    shapeLength: 1573.45917834319
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Vista Quad',
    resortId: 3,
    shapeLength: 1251.09556881797
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Snow Bowl',
    resortId: 24,
    shapeLength: 1326.18708736208
  },
  {
    liftType: 'Gondola',
    liftName: 'K-1 Express Gondola',
    resortId: 11,
    shapeLength: 1896.39394817113
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Gatehouse Double',
    resortId: 25,
    shapeLength: 1017.72732298688
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Bonaventure Quad',
    resortId: 10,
    shapeLength: 1370.95030879352
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Orion\'s Belt Carpet',
    resortId: 18,
    shapeLength: 98.0560851046196
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Ego Alley',
    resortId: 16,
    shapeLength: 1369.71117419457
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Evergreen Summit Express',
    resortId: 18,
    shapeLength: 1212.44877780894
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Tamarack',
    resortId: 24,
    shapeLength: 865.020629450302
  },
  {
    liftType: 'Surface',
    liftName: 'Midway Surface Lift',
    resortId: 23,
    shapeLength: 137.447133144251
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Outpost',
    resortId: 16,
    shapeLength: 1144.54167357164
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Green Mountain Express Quad',
    resortId: 25,
    shapeLength: 1837.11091550709
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Stag\'s Leap Quad',
    resortId: 27,
    shapeLength: 861.94471726668
  },
  {
    liftType: 'Sixpack Chairlift',
    liftName: 'Sunburst Six',
    resortId: 18,
    shapeLength: 1878.13967914015
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Sunny Spruce Quad',
    resortId: 23,
    shapeLength: 1187.2199783166
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Morse Highland Lift',
    resortId: 22,
    shapeLength: 410.101701907891
  },
  {
    liftType: 'Rope Tow',
    liftName: 'Rope Tow',
    resortId: 7,
    shapeLength: 375.832153072422
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Stargazer Carpet',
    resortId: 18,
    shapeLength: 117.044995221299
  },
  {
    liftType: 'Rope Tow',
    liftName: 'Ascutney Outdoors Rope Tow',
    resortId: 1,
    shapeLength: 190.127223412427
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Starlight Carpet',
    resortId: 18,
    shapeLength: 13.2902936308045
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Summit Quad',
    resortId: 25,
    shapeLength: 1006.79243164771
  },
  {
    liftType: 'Sixpack Chairlift',
    liftName: 'Quantum Six',
    resortId: 18,
    shapeLength: 1274.69892720366
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Little Pico Triple',
    resortId: 19,
    shapeLength: 639.849219505132
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Sun Kid Teaching Lift',
    resortId: 25,
    shapeLength: 29.2840825349781
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Snowplay Carpet 1',
    resortId: 11,
    shapeLength: 44.6833790129458
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Blue Ribbon Quad',
    resortId: 5,
    shapeLength: 934.779362796076
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Sunshine Double',
    resortId: 25,
    shapeLength: 654.400523632301
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'North Ridge Express Quad',
    resortId: 25,
    shapeLength: 1621.6579537981
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Madonna 1 Lift',
    resortId: 22,
    shapeLength: 1771.97039951587
  },
  {
    liftType: 'Sixpack Chairlift',
    liftName: 'Sunrise Express',
    resortId: 24,
    shapeLength: 1323.44946604873
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Willoughby Quad',
    resortId: 6,
    shapeLength: 1459.09771324104
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Tramside Moving Carpet',
    resortId: 10,
    shapeLength: 78.5854011529022
  },
  {
    liftType: 'Ariel Tram',
    liftName: 'Ariel Tram',
    resortId: 10,
    shapeLength: 2225.47230131815
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Superstar Express Quad',
    resortId: 11,
    shapeLength: 1001.94158551825
  },
  {
    liftType: 'Surface Handle Tow',
    liftName: 'Mighty Might',
    resortId: 3,
    shapeLength: 100.149196085146
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Four Runner Quad',
    resortId: 23,
    shapeLength: 1790.35553281459
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Knomes Knoll Triple',
    resortId: 19,
    shapeLength: 482.187418505171
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Wilderness',
    resortId: 3,
    shapeLength: 1445.36661771895
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Star Carpet',
    resortId: 5,
    shapeLength: 67.8416176023344
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Super Bravo Express Quad',
    resortId: 25,
    shapeLength: 1656.54222536876
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Covered Bridge',
    resortId: 16,
    shapeLength: 120.360131557615
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Solitude Express Quad',
    resortId: 18,
    shapeLength: 1374.73047312424
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Sun Mountain Express',
    resortId: 5,
    shapeLength: 1617.57840237954
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Villager',
    resortId: 24,
    shapeLength: 274.458082307422
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'South American',
    resortId: 24,
    shapeLength: 830.906943439899
  },
  {
    liftType: 'T-bar',
    liftName: 'The Pull',
    resortId: 18,
    shapeLength: 312.070381001896
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'F-10 Carpet',
    resortId: 18,
    shapeLength: 133.72758985196
  },
  {
    liftType: 'Rope Tow',
    liftName: 'J-Bar',
    resortId: 6,
    shapeLength: 304.832875949321
  },
  {
    liftType: 'Double Chairlift',
    liftName: '1600\' Double Chair',
    resortId: 26,
    shapeLength: 468.055611980006
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Sterling Lift',
    resortId: 22,
    shapeLength: 1573.57832559519
  },
  {
    liftType: 'Double Chair',
    liftName: 'Plymouth Notch Chair',
    resortId: 20,
    shapeLength: 1195.70003244357
  },
  {
    liftType: 'Double Chair',
    liftName: 'Lift 4',
    resortId: 13,
    shapeLength: 386.880642987795
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Village Double',
    resortId: 25,
    shapeLength: 585.71489964376
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Adventure Triple',
    resortId: 23,
    shapeLength: 316.888663510637
  },
  {
    liftType: 'Sixpack Chairlift',
    liftName: 'Bluebird Express',
    resortId: 16,
    shapeLength: 2135.33354026162
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'East Meadow Chairlift',
    resortId: 5,
    shapeLength: 618.830906996356
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Sunshine Quad',
    resortId: 18,
    shapeLength: 792.650712779878
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Canyonland Express',
    resortId: 16,
    shapeLength: 1511.08168757009
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Morning Star Triple',
    resortId: 18,
    shapeLength: 742.132307888498
  },
  {
    liftType: 'Rope Tow',
    liftName: 'Small Rope Tow',
    resortId: 17,
    shapeLength: 122.518327576523
  },
  {
    liftType: 'Triple Chair',
    liftName: 'Worth Mountain Chair',
    resortId: 15,
    shapeLength: 1137.43890739923
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Lift',
    resortId: 16,
    shapeLength: 120.12415809211
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Northbrook Quad',
    resortId: 11,
    shapeLength: 679.358279848132
  },
  {
    liftType: 'T-Bar',
    liftName: 'Living Memorial Park T-Bar',
    resortId: 4,
    shapeLength: 401.266185177262
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Jet Triple Chair',
    resortId: 10,
    shapeLength: 997.362273630229
  },
  {
    liftType: 'Surface Poma',
    liftName: 'Snowden Poma',
    resortId: 11,
    shapeLength: 501.917843639315
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Slidebrook Express Quad',
    resortId: 25,
    shapeLength: 3208.73663366363
  },
  {
    liftType: 'T-Bar',
    liftName: 'T-Bar',
    resortId: 21,
    shapeLength: 384.927384304746
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Needles Eye Express Quad',
    resortId: 11,
    shapeLength: 948.629232651591
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Tollhouse Double',
    resortId: 23,
    shapeLength: 1937.0835536565
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Queechee Express',
    resortId: 21,
    shapeLength: 776.591092310628
  },
  {
    liftType: 'Quad Chairlift',
    liftName: 'Southface Express Quad',
    resortId: 18,
    shapeLength: 1385.44193677172
  },
  {
    liftType: 'Surface T-bar',
    liftName: 'GMVS T-bar',
    resortId: 25,
    shapeLength: 414.493706130007
  },
  {
    liftType: 'Surface Carpet',
    liftName: 'Lift 5',
    resortId: 16,
    shapeLength: 32.890426660642
  },
  {
    liftType: 'Triple Chairlift',
    liftName: 'Village Chair',
    resortId: 10,
    shapeLength: 714.355619507911
  },
  {
    liftType: 'Double Chairlift',
    liftName: 'Outpost Double',
    resortId: 19,
    shapeLength: 485.831622187096
  },
  {
    liftType: 'Double Chairlift',
    liftName: '2000\' Double Chair',
    resortId: 26,
    shapeLength: 560.436377266211
  }
]

module.exports = { lifts }
