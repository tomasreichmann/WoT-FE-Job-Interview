const vehicles = [
  {
    name: "Kolohousenka",
    tier: "I",
    type: "lighttank",
    isPremium: false,
    imageUri: "/czech-Cz06_Kolohousenka.png"
  },
  {
    name: "Konštrukta T-34/100",
    tier: "VII",
    type: "mediumtank",
    isPremium: false,
    imageUri: "/czech-Cz05_T34_100.png"
  },
  {
    name: "LT vz. 35",
    tier: "II",
    type: "lighttank",
    isPremium: false,
    imageUri: "/czech-Cz03_LT_vz35.png"
  },
  {
    name: "LT vz. 38",
    tier: "III",
    type: "lighttank",
    isPremium: false,
    imageUri: "/czech-Cz10_LT_vz38.png"
  },
  {
    name: "ShPTK-TVP 100",
    tier: "VIII",
    type: "tankdestroyer",
    isPremium: true,
    imageUri: "/czech-Cz20_ShPTK_TVP_100_mm.png"
  },
  {
    name: "TNH 105/1000",
    tier: "VIII",
    type: "heavytank",
    isPremium: false,
    imageUri: "/czech-Cz18_TNH_105_1000.png"
  },
  {
    name: "TNH T Vz. 51",
    tier: "IX",
    type: "heavytank",
    isPremium: false,
    imageUri: "/czech-Cz16_TNH_T_vz51.png"
  },
  {
    name: "TVP T 50/51",
    tier: "X",
    type: "mediumtank",
    isPremium: false,
    imageUri: "/czech-Cz04_T50_51.png"
  }
] as const;

export default vehicles;
