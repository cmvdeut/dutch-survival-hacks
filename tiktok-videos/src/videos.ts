export type TipVideoData = {
  id: string;
  type: "tip";
  title: string;
  tip: string;
  category: string;
  number: number;
};

export type ListVideoData = {
  id: string;
  type: "list";
  title: string;
  items: string[];
};

export type OpinionVideoData = {
  id: string;
  type: "opinion";
  statement: string;
  context?: string;
  category: string;
};

export type VideoData = TipVideoData | ListVideoData | OpinionVideoData;

export const VIDEOS: VideoData[] = [
  // --- Culture shock: single tips ---
  {
    id: "tip-shops",
    type: "tip",
    title: "Nobody tells you this about NL",
    tip: "Shops close at 18:00 on weekdays — including supermarkets. Plan ahead or starve.",
    category: "Daily life",
    number: 1,
  },
  {
    id: "tip-birthday",
    type: "tip",
    title: "Dutch birthday parties are... something",
    tip: "You arrive. Everyone is sitting in a circle. You congratulate not just the birthday person — but their partner, parents, and dog. Then you get one cookie. That's it.",
    category: "Culture",
    number: 1,
  },
  {
    id: "tip-drop",
    type: "tip",
    title: "They eat this and call it candy",
    tip: "Drop is black licorice. The Dutch eat it by the kilo. Salty, rubbery, and aggressively Dutch. Your colleagues will offer you some. Smile and say it's interesting.",
    category: "Food",
    number: 1,
  },
  {
    id: "tip-directness",
    type: "tip",
    title: "Dutch directness: rude or just honest?",
    tip: "Your Dutch colleague will tell you your idea won't work — before you finish the sentence. They're not being mean. Directness is a compliment. They think you can handle it.",
    category: "Culture",
    number: 2,
  },
  {
    id: "tip-rain",
    type: "tip",
    title: "Rain is not a reason to stay inside",
    tip: "It rains 130+ days a year in the Netherlands. The Dutch do not care. They bike to work, to dinner, to weddings. In suits. In heels. You will learn to do the same.",
    category: "Daily life",
    number: 2,
  },
  {
    id: "tip-stroopwafel",
    type: "tip",
    title: "The stroopwafel ritual",
    tip: "You don't just eat a stroopwafel. You place it on top of your hot coffee or tea, wait 30 seconds, let the caramel melt. Then eat. Anyone who skips this step is watched with suspicion.",
    category: "Food",
    number: 3,
  },
  {
    id: "tip-going-dutch",
    type: "tip",
    title: "\"Going Dutch\" is literally a thing",
    tip: "Dinner with 6 people? The Dutch will split it to the cent. €14,83 each. Not rude — just efficient. Don't expect anyone to cover you. And don't offer to cover them either.",
    category: "Culture",
    number: 3,
  },
  {
    id: "tip-bike",
    type: "tip",
    title: "The bike has right of way. Always.",
    tip: "As a pedestrian: never walk in a bike lane. Ever. Cyclists will ring their bell once — and they won't slow down. You move. End of story.",
    category: "Daily life",
    number: 3,
  },
  {
    id: "tip-appointments",
    type: "tip",
    title: "Want to see a doctor? Book 3 weeks ahead.",
    tip: "Everything in the Netherlands runs on appointments. GP, dentist, gemeente, even some cafes. Spontaneity is a foreign concept. Plan your life in advance or nothing happens.",
    category: "Daily life",
    number: 4,
  },

  // --- Opinion / agree or not ---
  {
    id: "opinion-directness-rude",
    type: "opinion",
    statement: "Dutch directness is just an excuse to be rude.",
    context: "Or is it actually the most respectful thing you can do?",
    category: "Agree or not?",
  },
  {
    id: "opinion-drop",
    type: "opinion",
    statement: "Drop is objectively disgusting.",
    context: "The Dutch will fight you on this.",
    category: "Agree or not?",
  },
  {
    id: "opinion-birthday",
    type: "opinion",
    statement: "Dutch birthday parties are the most awkward social ritual in Europe.",
    context: "One cookie. Circle of chairs. Congratulations to the dog.",
    category: "Agree or not?",
  },
  {
    id: "opinion-going-dutch",
    type: "opinion",
    statement: "Going Dutch on a first date is a red flag.",
    context: "The Dutch disagree. Strongly.",
    category: "Agree or not?",
  },
  {
    id: "opinion-rain",
    type: "opinion",
    statement: "Cycling in Dutch rain is actually fine once you accept it.",
    context: "Took me 6 months. Now I don't even think about it.",
    category: "Agree or not?",
  },

  // --- List videos ---
  {
    id: "list-dutch-foods",
    type: "list",
    title: "Dutch foods that will confuse you",
    items: [
      "Drop — salty black licorice eaten like candy",
      "Hagelslag — chocolate sprinkles on bread, for adults",
      "Stamppot — mashed potato with random things mixed in",
      "Bitterballen — fried mystery balls at every party",
      "Stroopwafel — the one thing everyone agrees is perfect",
    ],
  },
  {
    id: "list-5things-surprise",
    type: "list",
    title: "5 things that surprise every expat in NL",
    items: [
      "\"Going Dutch\" is not a stereotype — it's life",
      "The bike always has right of way. Always.",
      "Dinner is at 18:00. Not 20:00. Not 21:00.",
      "Small talk is not really a Dutch sport",
      "Gezelligheid — you'll feel it before you can define it",
    ],
  },
];
