const exerciseList = [
  {
    force: "push",
    name: "Barbell Bench Press",
    "Primary Muscles": ["deltoid", "pectoralis major"],
    secondaryMuscles: ["triceps"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=rT7DgCr-3pg&t=29s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Bench Press",
    "Primary Muscles": ["deltoid", "pectoralis major"],
    secondaryMuscles: ["triceps"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Y_7aHqXeCfQ&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Barbell Incline Bench Press",
    "Primary Muscles": ["deltoid", "pectoralis major"],
    secondaryMuscles: ["triceps"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=DbFgADa2PL8&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Incline Bench Press",
    "Primary Muscles": ["deltoid", "pectoralis major"],
    secondaryMuscles: ["triceps"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=8iPEnn-ltC8&t=24s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Decline Bench Press",
    "Primary Muscles": ["deltoid", "pectoralis major"],
    secondaryMuscles: ["triceps"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=8iPEnn-ltC8&t=24s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Barbell Decline Bench Press",
    "Primary Muscles": ["deltoid", "pectoralis major"],
    secondaryMuscles: ["triceps"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=8iPEnn-ltC8&t=24s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=eozdVDA78K0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Incline Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=bDaIL_zKbGs&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Decline Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=IMALXhhHRKM&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Machine Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Z57CtFmRMxA&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Cable Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Iwe6AmxVf7o&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "High Cable Chest Fly",
    "Primary Muscles": ["deltoid", "pectoralis major"],
    secondaryMuscles: ["biceps", "finger extensors", "latissimus dorsi"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Iwe6AmxVf7o&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Single Arm Cable Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: [
      "external oblique",
      "latissimus dorsi",
      "serratus anterior",
      "triceps",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=yaNwBor6SMs&ab_channel=ShytownFitness",
  },
  {
    force: "push",
    name: "Chest Dip",
    "Primary Muscles": ["pectoralis major", "triceps"],
    secondaryMuscles: [
      "deltoid",
      "latissimus dorsi",
      "teres major",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=dX_nSOOJIsE&ab_channel=Howcast",
  },

  {
    force: "push",
    name: "Dumbbell Bicep Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=ykJmrZ5v0Oo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Preacher Bicep Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink: "https://www.youtube.com/watch?v=fIWP-FRFNU0&ab_channel=KAGED",
  },
  {
    force: "push",
    name: "Barbell Bicep Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=kwG2ipFRgfo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Hammer Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zC3nLlEvin4&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Reverse Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nRgxYX2Ve9w&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Plank",
    "Primary Muscles": ["abdominals", "external oblique"],
    secondaryMuscles: [
      "deltoid",
      "gluteus maximus",
      "gluteus medius",
      "pectoralis major",
      "triceps",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=BQu26ABuVS0&ab_channel=WaysAndHow",
  },
  {
    force: "push",
    name: "Weighted Plank",
    "Primary Muscles": ["abdominals", "external oblique"],
    secondaryMuscles: [
      "deltoid",
      "gluteus maximus",
      "gluteus medius",
      "pectoralis major",
      "triceps",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=H88Ip-MUWn0&ab_channel=StrengthSide",
  },
  {
    force: "push",
    name: "Crunch",
    "Primary Muscles": ["abdominals", "external oblique"],
    secondaryMuscles: ["serratus anterior"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Xyd_fa5zoEU&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Cable Crunch",
    "Primary Muscles": ["abdominals", "external oblique"],
    secondaryMuscles: ["serratus anterior"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=AV5PmZJIrrw&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Dead Bug",
    "Primary Muscles": ["abdominals", "external oblique"],
    secondaryMuscles: [
      "infraspinatus",
      "quadriceps",
      "serratus anterior",
      "teres major",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=4XLEnwUr1d8&ab_channel=Bodybuilding.com",
  },
  {
    force: "push",
    name: "Mountain Climbers",
    "Primary Muscles": ["abdominals"],
    secondaryMuscles: [
      "deltoid",
      "gastrocnemius",
      "hamstrings",
      "quadriceps",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nmwgirgXLYM&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Hanging Knee Raises",
    "Primary Muscles": ["abdominals"],
    secondaryMuscles: [
      "external oblique",
      "finger extensors",
      "finger flexors",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=KhPTiWP6lB4&ab_channel=BrianSchmitt",
  },
  {
    force: "push",
    name: "Hanging Leg Raises",
    "Primary Muscles": ["abdominals"],
    secondaryMuscles: [
      "external oblique",
      "finger extensors",
      "finger flexors",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=hdng3Nm1x_E&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Leg Raises",
    "Primary Muscles": ["abdominals"],
    secondaryMuscles: ["external oblique", "sartorius"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=l4kQd9eWclE&ab_channel=Howcast",
  },

  {
    force: "push",
    name: "Barbell Deadlift",
    "Primary Muscles": ["gluteus maximus", "gluteus medius"],
    secondaryMuscles: ["abductors", "quadriceps", "sartorius", "trapezius"],
    type: "compound",
    workoutType: ["powerlifting", "strength", "strongman"],
    youtubeLink:
      "https://www.youtube.com/watch?v=r4MzxtBKyNE&ab_channel=Men%27sHealth",
  },
  {
    force: "push",
    name: "Hex Bar Deadlift",
    "Primary Muscles": ["gluteus maximus", "gluteus medius"],
    secondaryMuscles: ["abductors", "quadriceps", "sartorius", "trapezius"],
    type: "compound",
    workoutType: ["powerlifting", "strength", "strongman"],
    youtubeLink:
      "https://www.youtube.com/watch?v=1jC_nqcSCp8&ab_channel=DreesPerformanceTraining",
  },
  {
    force: "push",
    name: "Barbell Back Squat",
    "Primary Muscles": [
      "gluteus maximus",
      "gluteus medius",
      "hamstrings",
      "latissimus dorsi",
    ],
    secondaryMuscles: ["abdominals", "abductors", "quadriceps", "sartorius"],
    type: "compound",
    workoutType: ["powerlifting", "strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=SW_C1A-rejs&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Smith Machine Back Squat",
    "Primary Muscles": [
      "gluteus maximus",
      "gluteus medius",
      "hamstrings",
      "latissimus dorsi",
    ],
    secondaryMuscles: ["abdominals", "abductors", "quadriceps", "sartorius"],
    type: "compound",
    workoutType: ["powerlifting", "strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zM-B8HLzoxI&ab_channel=RoughToBeBuffTV",
  },
  {
    force: "push",
    name: "Barbell Lunge",
    "Primary Muscles": ["hamstrings", "quadriceps"],
    secondaryMuscles: [
      "abductors",
      "gluteus maximus",
      "gluteus medius",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=0_9sJd9P8M0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Lunge",
    "Primary Muscles": ["hamstrings", "quadriceps"],
    secondaryMuscles: [
      "abductors",
      "gluteus maximus",
      "gluteus medius",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=D7KaRcUTQeE&t=62s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Bulgarian Split Squat",
    "Primary Muscles": ["hamstrings", "quadriceps"],
    secondaryMuscles: [
      "abductors",
      "gluteus maximus",
      "gluteus medius",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=HBYGeyb4sSM&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Barbell Hip Thrusts",
    "Primary Muscles": ["gluteus maximus", "gluteus medius"],
    secondaryMuscles: [
      "abdominals",
      "abductors",
      "hamstrings",
      "quadriceps",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Zp26q4BY5HE&ab_channel=GirlsGoneStrong",
  },
  {
    force: "push",
    name: "Machine Hip Thrusts",
    "Primary Muscles": ["gluteus maximus", "gluteus medius"],
    secondaryMuscles: [
      "abdominals",
      "abductors",
      "hamstrings",
      "quadriceps",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=oo-Wab9Av9g&ab_channel=BootyBuilder",
  },
  {
    force: "push",
    name: "Chest Dip",
    "Primary Muscles": ["pectoralis major", "triceps"],
    secondaryMuscles: [
      "deltoid",
      "latissimus dorsi",
      "teres major",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=dX_nSOOJIsE&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Barbell Deadlift",
    "Primary Muscles": ["gluteus maximus", "gluteus medius"],
    secondaryMuscles: ["abductors", "quadriceps", "sartorius", "trapezius"],
    type: "compound",
    workoutType: ["powerlifting", "strength", "strongman"],
    youtubeLink:
      "https://www.youtube.com/watch?v=r4MzxtBKyNE&ab_channel=Men%27sHealth",
  },
  {
    force: "push",
    name: "Hex Bar Deadlift",
    "Primary Muscles": ["gluteus maximus", "gluteus medius"],
    secondaryMuscles: ["abductors", "quadriceps", "sartorius", "trapezius"],
    type: "compound",
    workoutType: ["powerlifting", "strength", "strongman"],
    youtubeLink:
      "https://www.youtube.com/watch?v=1jC_nqcSCp8&ab_channel=DreesPerformanceTraining",
  },
  {
    force: "push",
    name: "Barbell Front Squat",
    "Primary Muscles": ["quadriceps"],
    secondaryMuscles: [
      "abdominals",
      "external oblique",
      "gluteus maximus",
      "gluteus medius",
      "hamstrings",
      "infraspinatus",
      "teres major",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zM-B8HLzoxI&ab_channel=RoughToBeBuffTV",
  },
  {
    force: "push",
    name: "Dumbbell Bicep Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=ykJmrZ5v0Oo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Preacher Bicep Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink: "https://www.youtube.com/watch?v=fIWP-FRFNU0&ab_channel=KAGED",
  },
  {
    force: "push",
    name: "Barbell Bicep Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=kwG2ipFRgfo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Hammer Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zC3nLlEvin4&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Reverse Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nRgxYX2Ve9w&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Arnold Press",
    "Primary Muscles": ["deltoid"],
    secondaryMuscles: [
      "biceps",
      "infraspinatus",
      "serratus anterior",
      "teres major",
      "trapezius",
      "triceps",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=6Z15_WdXmVw&ab_channel=BuffDudes",
  },
  {
    force: "push",
    name: "Dumbbell Front Raise",
    "Primary Muscles": ["deltoid"],
    secondaryMuscles: [
      "finger flexors",
      "pectoralis major",
      "serratus anterior",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=-t7fuZ0KhDA&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Cable Front Raise",
    "Primary Muscles": ["deltoid"],
    secondaryMuscles: [
      "finger flexors",
      "pectoralis major",
      "serratus anterior",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=fqUgPii8Nm8&ab_channel=LabradaNutrition",
  },
  {
    force: "push",
    name: "Dumbbell Lateral Rasie",
    "Primary Muscles": ["deltoid"],
    secondaryMuscles: [
      "external oblique",
      "finger flexors",
      "serratus anterior",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=3VcKaXpzqRo&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Military Press",
    "Primary Muscles": ["deltoid"],
    secondaryMuscles: [
      "biceps",
      "pectoralis major",
      "serratus anterior",
      "trapezius",
      "triceps",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=2yjwXTZQDDI&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Good Mornings",
    "Primary Muscles": ["hamstrings"],
    secondaryMuscles: [
      "gluteus maximus",
      "gluteus medius",
      "latissimus dorsi",
      "quadriceps",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?time_continue=77&v=5Xj6XUa77qc&feature=emb_logo&ab_channel=ScottHermanFitness",
  },

  {
    force: "push",
    name: "Dumbbell Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=eozdVDA78K0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Incline Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=bDaIL_zKbGs&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Decline Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=IMALXhhHRKM&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Machine Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Z57CtFmRMxA&ab_channel=LIVESTRONG.COM",
  },
  {
    force: "push",
    name: "Cable Chest Fly",
    "Primary Muscles": ["pectoralis major"],
    secondaryMuscles: ["biceps", "deltoid", "finger extensors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=Iwe6AmxVf7o&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Chest Dip",
    "Primary Muscles": ["pectoralis major", "triceps"],
    secondaryMuscles: [
      "deltoid",
      "latissimus dorsi",
      "teres major",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=dX_nSOOJIsE&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Bicep Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=ykJmrZ5v0Oo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Preacher Bicep Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink: "https://www.youtube.com/watch?v=fIWP-FRFNU0&ab_channel=KAGED",
  },
  {
    force: "push",
    name: "Barbell Bicep Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=kwG2ipFRgfo&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Hammer Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zC3nLlEvin4&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Reverse Curl",
    "Primary Muscles": ["biceps"],
    secondaryMuscles: [
      "brachioradialis",
      "deltoid",
      "finger flexors",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nRgxYX2Ve9w&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Plank",
    "Primary Muscles": ["abdominals", "external oblique"],
    secondaryMuscles: [
      "deltoid",
      "gluteus maximus",
      "gluteus medius",
      "pectoralis major",
      "triceps",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=BQu26ABuVS0&ab_channel=WaysAndHow",
  },
  {
    force: "push",
    name: "Weighted Plank",
    "Primary Muscles": ["abdominals", "external oblique"],
    secondaryMuscles: [
      "deltoid",
      "gluteus maximus",
      "gluteus medius",
      "pectoralis major",
      "triceps",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=H88Ip-MUWn0&ab_channel=StrengthSide",
  },
  {
    force: "push",
    name: "Mountain Climbers",
    "Primary Muscles": ["abdominals"],
    secondaryMuscles: [
      "deltoid",
      "gastrocnemius",
      "hamstrings",
      "quadriceps",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=nmwgirgXLYM&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Overhead Tricep Extensions",
    "Primary Muscles": ["triceps"],
    secondaryMuscles: ["deltoid", "finger extensors", "finger flexors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=_gsUck-7M74&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Cable Overhead Tricep Extensions",
    "Primary Muscles": ["triceps"],
    secondaryMuscles: [
      "deltoid",
      "finger extensors",
      "finger flexors",
      "serratus anterior",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=GzmlxvSFE7A&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Dumbbell Tricep Kickbacks",
    "Primary Muscles": ["triceps"],
    secondaryMuscles: [
      "deltoid",
      "finger extensors",
      "finger flexors",
      "infraspinatus",
      "teres major",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=6SS6K3lAwZ8&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Cable Tricep Kickbacks",
    "Primary Muscles": ["triceps"],
    secondaryMuscles: [
      "deltoid",
      "finger extensors",
      "finger flexors",
      "infraspinatus",
      "teres major",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=n1wFHU8Pkfc&ab_channel=LiveSavage",
  },

  {
    force: "push",
    name: "Barbell Front Squat",
    "Primary Muscles": ["quadriceps"],
    secondaryMuscles: [
      "abdominals",
      "external oblique",
      "gluteus maximus",
      "gluteus medius",
      "hamstrings",
      "infraspinatus",
      "teres major",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=zM-B8HLzoxI&ab_channel=RoughToBeBuffTV",
  },
  {
    force: "push",
    name: "Barbell Lunge",
    "Primary Muscles": ["hamstrings", "quadriceps"],
    secondaryMuscles: [
      "abductors",
      "gluteus maximus",
      "gluteus medius",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=0_9sJd9P8M0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Lunge",
    "Primary Muscles": ["hamstrings", "quadriceps"],
    secondaryMuscles: [
      "abductors",
      "gluteus maximus",
      "gluteus medius",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=D7KaRcUTQeE&t=62s&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Dumbbell Bulgarian Split Squat",
    "Primary Muscles": ["hamstrings", "quadriceps"],
    secondaryMuscles: [
      "abductors",
      "gluteus maximus",
      "gluteus medius",
      "sartorius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=HBYGeyb4sSM&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Barbell Forward Lunge",
    "Primary Muscles": ["gluteus maximus", "gluteus medius", "quadriceps"],
    secondaryMuscles: ["sartorius"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=0_9sJd9P8M0&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Barbell Reverse Lunge",
    "Primary Muscles": ["gluteus maximus", "gluteus medius", "quadriceps"],
    secondaryMuscles: ["gastrocnemius", "sartorius"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=R-g5yPNYv2k&ab_channel=Bodybuilding.com",
  },
  {
    force: "push",
    name: "Air Squat",
    "Primary Muscles": ["gluteus maximus", "gluteus medius", "quadriceps"],
    secondaryMuscles: ["gastrocnemius", "sartorius"],
    type: "compound",
    workoutType: ["plyometric", "strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=lcNmEtvrMGo&ab_channel=ToneandTighten",
  },
  {
    force: "push",
    name: "Chest Dip",
    "Primary Muscles": ["pectoralis major", "triceps"],
    secondaryMuscles: [
      "deltoid",
      "latissimus dorsi",
      "teres major",
      "trapezius",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=dX_nSOOJIsE&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Dumbbell Overhead Tricep Extensions",
    "Primary Muscles": ["triceps"],
    secondaryMuscles: ["deltoid", "finger extensors", "finger flexors"],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=_gsUck-7M74&ab_channel=Howcast",
  },
  {
    force: "push",
    name: "Cable Overhead Tricep Extensions",
    "Primary Muscles": ["triceps"],
    secondaryMuscles: [
      "deltoid",
      "finger extensors",
      "finger flexors",
      "serratus anterior",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=GzmlxvSFE7A&ab_channel=ColossusFitness",
  },
  {
    force: "push",
    name: "Dumbbell Tricep Kickbacks",
    "Primary Muscles": ["triceps"],
    secondaryMuscles: [
      "deltoid",
      "finger extensors",
      "finger flexors",
      "infraspinatus",
      "teres major",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=6SS6K3lAwZ8&ab_channel=ScottHermanFitness",
  },
  {
    force: "push",
    name: "Cable Tricep Kickbacks",
    "Primary Muscles": ["triceps"],
    secondaryMuscles: [
      "deltoid",
      "finger extensors",
      "finger flexors",
      "infraspinatus",
      "teres major",
    ],
    type: "compound",
    workoutType: ["strength"],
    youtubeLink:
      "https://www.youtube.com/watch?v=n1wFHU8Pkfc&ab_channel=LiveSavage",
  },
];

export default exerciseList;
