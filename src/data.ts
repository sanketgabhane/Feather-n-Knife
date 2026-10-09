export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  lead: string;
  image: string;
  imageAlt: string;
  includes: string[];
  steps: { title: string; text: string }[];
};

export type PostBlock = {
  heading?: string;
  text: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  category: string;
  image: string;
  imageAlt: string;
  blocks: PostBlock[];
};

export type Slide = {
  src: string;
  alt: string;
  kicker: string;
  caption: string;
};

export const services: Service[] = [
  {
    slug: "branding",
    number: "01",
    title: "Branding & identity",
    short: "A point of view, a voice and a visual world that feels unmistakably yours.",
    lead: "We don't start with a logo. We start with what the brand believes, how it should sound, and the feeling someone should have before they read a single line.",
    image: "/images/slide-identity.jpg",
    imageAlt: "A branding still life with coral and cobalt paper, a feather and a palette knife on a teak table",
    includes: [
      "Positioning and the one idea worth repeating",
      "Verbal identity: tone, words to keep, words to retire",
      "Logo direction, colour, type and a usable system",
      "A short brand guide your team will actually open",
    ],
    steps: [
      {
        title: "Listen",
        text: "We sit with the founders, the product and the people you want in the room. The brief is a start, not the story.",
      },
      {
        title: "Shape",
        text: "Words and visuals are built together, so the mark, the colour and the sentence feel like they grew up in the same house.",
      },
      {
        title: "Hand it over",
        text: "You leave with a system, not a folder of pretty files. Clear enough for the next post, the next hire, the next campaign.",
      },
    ],
  },
  {
    slug: "social-media",
    number: "02",
    title: "Social media & content",
    short: "Thoughtful strategy and thumb-stopping content, made for real people.",
    lead: "A feed should feel like a person with a point of view, not a content calendar wearing a brand costume. We plan it, write it, design it and keep the voice steady.",
    image: "/images/slide-social.jpg",
    imageAlt: "A content desk with printed proofs, a blank phone and coral and indigo paper swatches",
    includes: [
      "Channel strategy and content pillars",
      "Monthly themes, not random posting",
      "Design, captions and the little lines people remember",
      "A rhythm your team can keep after we leave the room",
    ],
    steps: [
      {
        title: "Find the pulse",
        text: "What do you want to be known for in ninety days? We pick a few true things and stop trying to be everything.",
      },
      {
        title: "Make the work",
        text: "Posts, carousels, stories and the words around them. Designed to be saved, not just seen.",
      },
      {
        title: "Stay in character",
        text: "We review what landed, adjust the voice, and keep the brand from drifting every time a trend walks by.",
      },
    ],
  },
  {
    slug: "campaigns",
    number: "03",
    title: "Words & campaigns",
    short: "The big idea, the right words and all the little details in between.",
    lead: "A campaign is a story with a job. We find the line people repeat, then build the pieces around it — from the launch note to the last caption.",
    image: "/images/slide-campaign.jpg",
    imageAlt: "A studio mood wall of unlettered forest, coral and ivory campaign sheets",
    includes: [
      "The campaign idea and the line it hangs on",
      "Launch narrative, scripts and long-form copy",
      "Social, email and landing language in one voice",
      "Art direction notes so design and words stay married",
    ],
    steps: [
      {
        title: "Name the job",
        text: "Awareness, a launch, a shift in how people see you. One job. Everything else is decoration.",
      },
      {
        title: "Write the spine",
        text: "A sentence strong enough to hold a film, a post and a founder talking in a room. If it can't, it isn't ready.",
      },
      {
        title: "Build the pieces",
        text: "We write and shape the family of assets so nothing feels like it was made by a different brand on a different day.",
      },
    ],
  },
  {
    slug: "personal-branding",
    number: "04",
    title: "Personal branding",
    short: "A clearer story for the people building something worth believing in.",
    lead: "Founders are brands too. We help you sound like yourself on a good day — clear, specific and impossible to confuse with a template.",
    image: "/images/blog-founder.jpg",
    imageAlt: "A founder standing by a sunlit studio window in a dark linen shirt",
    includes: [
      "The story only you can tell, edited until it is sharp",
      "Profile language for LinkedIn, bios and talks",
      "A content system that doesn't eat your week",
      "A visual lane that matches the company brand",
    ],
    steps: [
      {
        title: "Separate you from the company",
        text: "They should rhyme, not photocopy each other. We find the overlap and the difference.",
      },
      {
        title: "Edit the myth",
        text: "Less origin-story theatre. More of the work, the taste and the opinions people hire you for.",
      },
      {
        title: "Make it repeatable",
        text: "A few formats you can actually keep. Presence without performing a new personality every Monday.",
      },
    ],
  },
];

export const posts: Post[] = [
  {
    slug: "sound-like-someone",
    title: "A brand should sound like someone you know",
    excerpt: "Voice is not a list of adjectives. It is what you would still say if the moodboard left the room.",
    date: "12 March 2026",
    read: "5 min",
    category: "Voice",
    image: "/images/blog-voice.jpg",
    imageAlt: "A fountain pen and a white feather on a warm writing desk",
    blocks: [
      {
        text: "Most brand voices arrive as five words on a slide: warm, bold, witty, premium, human. They could belong to a bakery, a bank or a skincare line. If the words fit everyone, they fit no one.",
      },
      {
        heading: "Start with a sentence you would actually say",
        text: "We ask founders to explain the brand to a sharp friend, not to a pitch room. The second version is usually the true one. Shorter. A little opinionated. Less afraid of sounding specific.",
      },
      {
        text: "That sentence becomes a test. Captions, scripts, packaging lines, the about page — if a line could be swapped onto another brand without anyone noticing, it does not earn its place.",
      },
      {
        heading: "Adjectives are not a voice",
        text: "A voice shows up in choices. Do you explain, or do you assume the reader is intelligent? Do you joke in the first line, or only after the point is made? Do you use the founder's name, or hide behind 'we'? Those decisions are the brand.",
      },
      {
        text: "At The Feather n' Knife we write the voice beside the visual system, not after it. Colour can feel warm while the words stay cold. When they are made together, the brand finally sounds like someone you would recognise in a crowded feed.",
      },
    ],
  },
  {
    slug: "stop-posting",
    title: "Stop posting. Start keeping a conversation.",
    excerpt: "A calendar full of posts is not a presence. A point of view, repeated with care, is.",
    date: "28 February 2026",
    read: "4 min",
    category: "Social",
    image: "/images/blog-scroll.jpg",
    imageAlt: "Hands holding a blank phone over printed coral and indigo content proofs",
    blocks: [
      {
        text: "The pressure to post is a terrible creative director. It asks for volume, then acts surprised when the feed feels like a notice board. People do not follow notice boards. They follow a feeling that the next thing will be worth their time.",
      },
      {
        heading: "Pick three things and mean them",
        text: "A useful content system has a few pillars, not a dozen themes. What you make. How you see the category. The people you are really for. If a post does not serve one of those, it is noise with a grid layout.",
      },
      {
        text: "Design matters, but only after the thought. A beautiful carousel that says nothing is still nothing. We would rather publish less and have someone send it to a colleague.",
      },
      {
        heading: "Trends are guests, not landlords",
        text: "Use a format if it lets your idea travel. Leave it if you have to change your personality to fit the audio. The brands that last on social are recognisable on mute, and still themselves when the trend expires on Thursday.",
      },
    ],
  },
  {
    slug: "logo-is-a-door",
    title: "The logo is the door, not the house",
    excerpt: "Identity is the system people meet every week: type, colour, crop, tone, and the courage to leave things out.",
    date: "9 February 2026",
    read: "6 min",
    category: "Identity",
    image: "/images/blog-logo.jpg",
    imageAlt: "A blank cream card, a palette knife and a drop of coral ink on dark wood",
    blocks: [
      {
        text: "Clients often arrive asking for a logo. What they are usually missing is a house: a way of speaking, a palette with a job, a rule for photographs, a sense of what the brand refuses to do.",
      },
      {
        heading: "A mark has to survive a bad Tuesday",
        text: "It will be placed on a story sticker, a packing slip, a favicon and a banner someone else resizes in a hurry. If the identity only works on the presentation board, it is a costume.",
      },
      {
        text: "We design for the ordinary uses first. The launch film can be cinematic. The Tuesday caption still has to look like you.",
      },
      {
        heading: "Leave room",
        text: "The most confident identities are a little spare. One red that means something. A serif that is allowed to be quiet. Space, so the product and the people can be the picture. Decoration is what you add when you do not yet trust the idea.",
      },
      {
        text: "When the logo, the words and the feed finally agree, you stop explaining the brand in every meeting. That is the house. The logo is just how you find the door.",
      },
    ],
  },
  {
    slug: "founders-are-brands",
    title: "Founders are brands, whether they like it or not",
    excerpt: "You do not need a persona. You need an edited version of the way you already think.",
    date: "18 January 2026",
    read: "5 min",
    category: "People",
    image: "/images/blog-founder.jpg",
    imageAlt: "A founder in warm window light, looking out from a quiet studio",
    blocks: [
      {
        text: "People buy from people long before they buy from a colour palette. If you are building a company, your name is already in the room — on calls, on LinkedIn, in the way a client retells your story. Ignoring that does not make you humble. It makes the story accidental.",
      },
      {
        heading: "Edit, don't invent",
        text: "Personal branding goes wrong when it asks someone to perform a founder character. The useful work is editorial. Which opinions are yours? Which stories are doing real work, and which are just long? What should the company say, and what should only you say?",
      },
      {
        text: "We keep the company voice and the founder voice related, like two people who grew up together. Same values. Different sentences.",
      },
      {
        heading: "A system you can live with",
        text: "The best personal brand is one you can maintain on a human week. A few repeating formats. A way to talk about the work without turning every win into a speech. Photographs that look like your actual life in the studio, not a stock version of ambition.",
      },
      {
        text: "Humble in the approach. Bold in the idea. That is the whole studio, and it is also a decent rule for a founder who wants to be visible without becoming a caricature.",
      },
    ],
  },
];

export const slides: Slide[] = [
  {
    src: "/images/slide-founders.jpg",
    alt: "Two founders working together at a sunlit wooden studio table",
    kicker: "The people",
    caption: "Good work starts with the people in the room.",
  },
  {
    src: "/images/slide-identity.jpg",
    alt: "Hands-off still life of a brand board with coral paper, a feather and a knife",
    kicker: "Identity",
    caption: "A visual world with a point of view.",
  },
  {
    src: "/images/slide-social.jpg",
    alt: "Printed social proofs and colour swatches arranged on a content desk",
    kicker: "Content",
    caption: "Feeds that feel like a conversation.",
  },
  {
    src: "/images/slide-campaign.jpg",
    alt: "A hand adjusting large unlettered campaign sheets on a studio wall",
    kicker: "Campaigns",
    caption: "One idea, carried all the way through.",
  },
  {
    src: "/images/studio-hero.jpg",
    alt: "A designer composing a colourful paper campaign at a sunlit table",
    kicker: "The table",
    caption: "Where the feather and the knife meet.",
  },
];

export function getService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}

export function getPost(slug: string | undefined) {
  return posts.find((post) => post.slug === slug);
}

export function adjacentPost(slug: string) {
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    prev: index > 0 ? posts[index - 1] : posts[posts.length - 1],
    next: index < posts.length - 1 ? posts[index + 1] : posts[0],
  };
}
