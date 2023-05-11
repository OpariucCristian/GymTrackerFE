const exerciseList = [
  {
    force: "push",
    name: "Barbell Bench Press",
    primaryMuscles: ["shoulders", "chest"],
    secondaryMuscles: ["arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=rT7DgCr-3pg&t=29s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Bench Press",
    primaryMuscles: ["shoulders", "chest"],
    secondaryMuscles: ["arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Y_7aHqXeCfQ&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Barbell Incline Bench Press",
    primaryMuscles: ["shoulders", "chest"],
    secondaryMuscles: ["arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=DbFgADa2PL8&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Incline Bench Press",
    primaryMuscles: ["shoulders", "chest"],
    secondaryMuscles: ["arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=8iPEnn-ltC8&t=24s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Decline Bench Press",
    primaryMuscles: ["shoulders", "chest"],
    secondaryMuscles: ["arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=8iPEnn-ltC8&t=24s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Barbell Decline Bench Press",
    primaryMuscles: ["shoulders", "chest"],
    secondaryMuscles: ["arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=8iPEnn-ltC8&t=24s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=eozdVDA78K0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Incline Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=bDaIL_zKbGs&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Decline Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=IMALXhhHRKM&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Machine Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Z57CtFmRMxA&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Cable Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Iwe6AmxVf7o&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "High Cable Chest Fly",
    primaryMuscles: ["shoulders", "chest"],
    secondaryMuscles: ["arms", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Iwe6AmxVf7o&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Single Arm Cable Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["core", "back", "back", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=yaNwBor6SMs&ab_channel=ShytownFitness",
  },
  {
    force: "push",
    name: "Chest Dip",
    primaryMuscles: ["chest", "arms"],
    secondaryMuscles: ["shoulders", "back", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=dX_nSOOJIsE&ab_channel=Howcast",
  },

  {
    force: "push",
    name: "Dumbbell Bicep Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=ykJmrZ5v0Oo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Preacher Bicep Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink: "https://www.youtube.com/watch?v=fIWP-FRFNU0&ab_channel=KAGED",
  },
  {
    force: "push",
    name: "Barbell Bicep Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=kwG2ipFRgfo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Hammer Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zC3nLlEvin4&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Reverse Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nRgxYX2Ve9w&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Plank",
    primaryMuscles: ["core", "core"],
    secondaryMuscles: ["shoulders", "legs", "legs", "chest", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=BQu26ABuVS0&ab_channel=WaysAndHow",
  },
  {
    force: "push",
    name: "Weighted Plank",
    primaryMuscles: ["core", "core"],
    secondaryMuscles: ["shoulders", "legs", "legs", "chest", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=H88Ip-MUWn0&ab_channel=StrengthSide",
  },
  {
    force: "push",
    name: "Crunch",
    primaryMuscles: ["core", "core"],
    secondaryMuscles: ["back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Xyd_fa5zoEU&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Cable Crunch",
    primaryMuscles: ["core", "core"],
    secondaryMuscles: ["back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=AV5PmZJIrrw&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Dead Bug",
    primaryMuscles: ["core", "core"],
    secondaryMuscles: ["back", "legs", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=4XLEnwUr1d8&ab_channel=Bodybuilding.com",
  },
  {
    force: "push",
    name: "Mountain Climbers",
    primaryMuscles: ["core"],
    secondaryMuscles: ["shoulders", "legs", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nmwgirgXLYM&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Hanging Knee Raises",
    primaryMuscles: ["core"],
    secondaryMuscles: ["core", "arms", "arms", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=KhPTiWP6lB4&ab_channel=BrianSchmitt",
  },
  {
    force: "push",
    name: "Hanging Leg Raises",
    primaryMuscles: ["core"],
    secondaryMuscles: ["core", "arms", "arms", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=hdng3Nm1x_E&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Leg Raises",
    primaryMuscles: ["core"],
    secondaryMuscles: ["core", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=l4kQd9eWclE&ab_channel=Howcast",
  },

  {
    force: "push",
    name: "Barbell Deadlift",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "back"],
    type: "compound",
    workoutType: ["powerlifting", "strength", "strongman"],
    youtubeLink:
      "https://www.youtube.com/watch?v=r4MzxtBKyNE&ab_channel=Men%27sHealth",
  },
  {
    force: "push",
    name: "Hex Bar Deadlift",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "back"],
    type: "compound",
    workoutType: ["powerlifting", "strength", "strongman"],
    youtubeLink:
      "https://www.youtube.com/watch?v=1jC_nqcSCp8&ab_channel=DreesPerformanceTraining",
  },
  {
    force: "push",
    name: "Barbell Back Squat",
    primaryMuscles: ["legs", "legs", "legs", "back"],
    secondaryMuscles: ["core", "abductors", "legs", "legs"],
    type: "compound",
    workoutType: ["powerlifting", "strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=SW_C1A-rejs&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Smith Machine Back Squat",
    primaryMuscles: ["legs", "legs", "legs", "back"],
    secondaryMuscles: ["core", "abductors", "legs", "legs"],
    type: "compound",
    workoutType: ["powerlifting", "strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zM-B8HLzoxI&ab_channel=RoughToBeBuffTV",
  },
  {
    force: "push",
    name: "Barbell Lunge",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=0_9sJd9P8M0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Lunge",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=D7KaRcUTQeE&t=62s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Bulgarian Split Squat",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=HBYGeyb4sSM&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Barbell Hip Thrusts",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["core", "abductors", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Zp26q4BY5HE&ab_channel=GirlsGoneStrong",
  },
  {
    force: "push",
    name: "Machine Hip Thrusts",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["core", "abductors", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=oo-Wab9Av9g&ab_channel=BootyBuilder",
  },
  {
    force: "push",
    name: "Chest Dip",
    primaryMuscles: ["chest", "arms"],
    secondaryMuscles: ["shoulders", "back", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=dX_nSOOJIsE&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Barbell Deadlift",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "back"],
    type: "compound",
    workoutType: ["powerlifting", "strength", "strongman"],
    youtubeLink:
      "https://www.youtube.com/watch?v=r4MzxtBKyNE&ab_channel=Men%27sHealth",
  },
  {
    force: "push",
    name: "Hex Bar Deadlift",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "back"],
    type: "compound",
    workoutType: ["powerlifting", "strength", "strongman"],
    youtubeLink:
      "https://www.youtube.com/watch?v=1jC_nqcSCp8&ab_channel=DreesPerformanceTraining",
  },
  {
    force: "push",
    name: "Barbell Front Squat",
    primaryMuscles: ["legs"],
    secondaryMuscles: [
      "core",
      "core",
      "legs",
      "legs",
      "legs",
      "back",
      "back",
      "back",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zM-B8HLzoxI&ab_channel=RoughToBeBuffTV",
  },
  {
    force: "push",
    name: "Dumbbell Bicep Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=ykJmrZ5v0Oo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Preacher Bicep Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink: "https://www.youtube.com/watch?v=fIWP-FRFNU0&ab_channel=KAGED",
  },
  {
    force: "push",
    name: "Barbell Bicep Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=kwG2ipFRgfo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Hammer Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zC3nLlEvin4&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Reverse Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nRgxYX2Ve9w&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Arnold Press",
    primaryMuscles: ["shoulders"],
    secondaryMuscles: ["arms", "back", "back", "back", "back", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=6Z15_WdXmVw&ab_channel=BuffDudes",
  },
  {
    force: "push",
    name: "Dumbbell Front Raise",
    primaryMuscles: ["shoulders"],
    secondaryMuscles: ["arms", "chest", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=-t7fuZ0KhDA&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Cable Front Raise",
    primaryMuscles: ["shoulders"],
    secondaryMuscles: ["arms", "chest", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=fqUgPii8Nm8&ab_channel=LabradaNutrition",
  },
  {
    force: "push",
    name: "Dumbbell Lateral Rasie",
    primaryMuscles: ["shoulders"],
    secondaryMuscles: ["core", "arms", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=3VcKaXpzqRo&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Military Press",
    primaryMuscles: ["shoulders"],
    secondaryMuscles: ["arms", "chest", "back", "back", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=2yjwXTZQDDI&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Good Mornings",
    primaryMuscles: ["legs"],
    secondaryMuscles: ["legs", "legs", "back", "legs", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?time_continue=77&v=5Xj6XUa77qc&feature=emb_logo&ab_channel=ScottHermanFitness",
  },

  {
    force: "push",
    name: "Dumbbell Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=eozdVDA78K0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Incline Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=bDaIL_zKbGs&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Decline Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=IMALXhhHRKM&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Machine Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Z57CtFmRMxA&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Cable Chest Fly",
    primaryMuscles: ["chest"],
    secondaryMuscles: ["arms", "shoulders", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Iwe6AmxVf7o&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Chest Dip",
    primaryMuscles: ["chest", "arms"],
    secondaryMuscles: ["shoulders", "back", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=dX_nSOOJIsE&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Bicep Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=ykJmrZ5v0Oo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Preacher Bicep Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink: "https://www.youtube.com/watch?v=fIWP-FRFNU0&ab_channel=KAGED",
  },
  {
    force: "push",
    name: "Barbell Bicep Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=kwG2ipFRgfo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Hammer Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zC3nLlEvin4&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Reverse Curl",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["arms", "shoulders", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nRgxYX2Ve9w&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Plank",
    primaryMuscles: ["core", "core"],
    secondaryMuscles: ["shoulders", "legs", "legs", "chest", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=BQu26ABuVS0&ab_channel=WaysAndHow",
  },
  {
    force: "push",
    name: "Weighted Plank",
    primaryMuscles: ["core", "core"],
    secondaryMuscles: ["shoulders", "legs", "legs", "chest", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=H88Ip-MUWn0&ab_channel=StrengthSide",
  },
  {
    force: "push",
    name: "Mountain Climbers",
    primaryMuscles: ["core"],
    secondaryMuscles: ["shoulders", "legs", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nmwgirgXLYM&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Overhead Tricep Extensions",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["shoulders", "arms", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=_gsUck-7M74&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Cable Overhead Tricep Extensions",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["shoulders", "arms", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=GzmlxvSFE7A&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Dumbbell Tricep Kickbacks",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["shoulders", "arms", "arms", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=6SS6K3lAwZ8&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Cable Tricep Kickbacks",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["shoulders", "arms", "arms", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=n1wFHU8Pkfc&ab_channel=LiveSavage",
  },

  {
    force: "push",
    name: "Barbell Front Squat",
    primaryMuscles: ["legs"],
    secondaryMuscles: [
      "core",
      "core",
      "legs",
      "legs",
      "legs",
      "back",
      "back",
      "back",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zM-B8HLzoxI&ab_channel=RoughToBeBuffTV",
  },
  {
    force: "push",
    name: "Barbell Lunge",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=0_9sJd9P8M0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Lunge",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=D7KaRcUTQeE&t=62s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Bulgarian Split Squat",
    primaryMuscles: ["legs", "legs"],
    secondaryMuscles: ["abductors", "legs", "legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=HBYGeyb4sSM&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Barbell Forward Lunge",
    primaryMuscles: ["legs", "legs", "legs"],
    secondaryMuscles: ["legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=0_9sJd9P8M0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Barbell Reverse Lunge",
    primaryMuscles: ["legs", "legs", "legs"],
    secondaryMuscles: ["legs", "legs"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=R-g5yPNYv2k&ab_channel=Bodybuilding.com",
  },
  {
    force: "push",
    name: "Air Squat",
    primaryMuscles: ["legs", "legs", "legs"],
    secondaryMuscles: ["legs", "legs"],
    type: "compound",
    workoutType: ["plyometric", "strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=lcNmEtvrMGo&ab_channel=ToneandTighten",
  },
  {
    force: "push",
    name: "Chest Dip",
    primaryMuscles: ["chest", "arms"],
    secondaryMuscles: ["shoulders", "back", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=dX_nSOOJIsE&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Overhead Tricep Extensions",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["shoulders", "arms", "arms"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=_gsUck-7M74&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Cable Overhead Tricep Extensions",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["shoulders", "arms", "arms", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=GzmlxvSFE7A&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Dumbbell Tricep Kickbacks",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["shoulders", "arms", "arms", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=6SS6K3lAwZ8&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Cable Tricep Kickbacks",
    primaryMuscles: ["arms"],
    secondaryMuscles: ["shoulders", "arms", "arms", "back", "back"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=n1wFHU8Pkfc&ab_channel=LiveSavage",
  },
];

export default exerciseList;
