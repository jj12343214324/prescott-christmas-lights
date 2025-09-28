export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  reviewCount?: number;
  isLocalGuide?: boolean;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Kayla Sultan',
    rating: 5,
    text: "Wow! What a wonderful experience I had with Sam and Miah. They are the nicest guys ever and they did an amazing job on my Christmas lights. I will be using them every Christmas from now on and highly recommend if you want someone to do your lights you hire them! If I could leave 10 stars I would!",
    date: '10 months ago',
    reviewCount: 1
  },
  {
    id: '2',
    name: 'Jimmy Baker',
    rating: 5,
    text: "What a great company! These guys are so cool and I couldn't be happier with my Christmas lights this year!!! Soooo worth the money to have professional looking lights on my house installed by people who know what they're doing!",
    date: '10 months ago',
    reviewCount: 3
  },
  {
    id: '3',
    name: 'X',
    rating: 5,
    text: "Best Christmas ever thanks to these guys!! Professional, on time, and the best looking Christmas lights I've ever had on my house. They have an eye for design, and really know how to work with your property and make it shine. And the best part, I didn't need to get on a ladder this year! Highly recommend to anyone who loves Christmas!!",
    date: '10 months ago',
    isLocalGuide: true,
    reviewCount: 15
  },
  {
    id: '4',
    name: 'Michael Aron',
    rating: 5,
    text: "Best Christmas light installers in Prescott! My wife and I were so busy this season that we weren't sure how we were going to get into the holiday spirit in time, luckily we found this amazing team and had them come out to install our lights.",
    date: '10 months ago',
    reviewCount: 9
  },
  {
    id: '5',
    name: 'A. Gibb',
    rating: 5,
    text: "So glad to have my Christmas lights up already and will definitely have them done again next year. Nehemiah and Sam were so easy to work with and did such a great job. I couldn't be more pleased.",
    date: '10 months ago',
    reviewCount: 5
  },
  {
    id: '6',
    name: 'Michael Clay',
    rating: 5,
    text: "My wife and I couldn't be more happy with their service, pricing and timeliness of the job. They helped us with recommendations on the lighting placements and even provided the lights that we wanted too. Do yourself a favor and give them a call. You will be happy that you did!",
    date: '9 months ago',
    reviewCount: 14
  },
  {
    id: '7',
    name: 'N DW',
    rating: 5,
    text: "How genius are these guys! I don't have to go and hang up my Christmas lights since I'm so busy and I don't want to miss out on the Holiday Spirit. They showed up on time, did a great job and have excellent pricing. Highly recommend them!",
    date: '10 months ago',
    reviewCount: 5
  },
  {
    id: '8',
    name: 'Intelligent Man',
    rating: 5,
    text: "What an amazing experience I just had! Not only are they the nicest guys ever but they did an awesome job on my lights! 10 out of 10 recommend!",
    date: '10 months ago',
    isLocalGuide: true,
    reviewCount: 19
  },
  {
    id: '9',
    name: 'Carter Luukkonen',
    rating: 5,
    text: "These guys are awesome couldn't be happier with their work! It was really fun designing the display and it looks amazing. Definitely using them next year.",
    date: '10 months ago',
    reviewCount: 1
  },
  {
    id: '10',
    name: 'Robert Borchardt',
    rating: 5,
    text: "These guys did a good job hanging my Christmas lights. They also put them on a timer and let us use some extra extension cords to get everything hooked up.",
    date: '10 months ago',
    reviewCount: 1
  },
  {
    id: '11',
    name: 'Lucia Young',
    rating: 5,
    text: "Friendly, dependable with good ideas. This is my first year using a service to put up Christmas lights & company did a great job!",
    date: '10 months ago',
    reviewCount: 9
  },
  {
    id: '12',
    name: 'Meg Dutton',
    rating: 5,
    text: "Professional, on time, and fantastic results! These guys really know what they're doing.",
    date: '9 months ago',
    isLocalGuide: true,
    reviewCount: 13
  },
  {
    id: '13',
    name: 'John Grade',
    rating: 5,
    text: "These guys were awesome! I would 100% recommend hiring this company over any other one in town. Most other companies in Prescott make you rent lights from them but Prescott Christmas Light Installation will put up yours if you have them. Very cool people",
    date: '10 months ago',
    reviewCount: 14
  }
];