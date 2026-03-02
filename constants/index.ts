import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  star,
  shield,
  send,
  health,
  wellness,
  procrastinate,
} from "@/public/assets";
import { link } from "fs";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About Us",
    path: "/about",
  },
  {
    id: "mission",
    title: "Mission",
    path: "/mission",
  },
  {
    id: "coach",
    title: "Meet Our Coach",
    path: "/coach",
  },
  {
    id: "programs",
    title: "Programs",
    path: "/programs",
  },

  {
    id: "blog",
    title: "Blog",
    path: "/blog",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  },
];

// Stats from PDF - 500+ Lives Touched, 1000+ Community Members, 100+ Success Stories, 200+ Sessions Held
export const stats = [
  {
    id: "stats-1",
    title: "Lives Touched",
    value: "500+",
  },
  {
    id: "stats-2",
    title: "Community Members",
    value: "1000+",
  },
  {
    id: "stats-3",
    title: "Success Stories",
    value: "100+",
  },
  {
    id: "stats-4",
    title: "Sessions Held",
    value: "200+",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Mindset Transformation",
    content: "Build a positive & growth-oriented mindset to overcome self-doubt and emotional blocks",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Healthy Lifestyle",
    content: "Develop healthy lifestyle and nutrition habits for sustainable well-being",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Clarity & Confidence",
    content: "Live with clarity, confidence, and inner happiness through manifestation and gratitude",
  },
];

// Updated mission from PDF
export const mission = {
  title: "Our Mission",
  subtitle:
    "To empower people to live happier, healthier and purpose-driven lives by simplifying transformation and making it practical, achievable and sustainable for everyone.",
  points: [
    {
      id: "mission-1",
      title: "Build Positive Mindset",
      content:
        "We help individuals develop a growth-oriented mindset, overcome stress, self-doubt & emotional blocks, and practice manifestation and gratitude techniques for a fulfilling life.",
    },
    {
      id: "mission-2",
      title: "Healthy Lifestyle Habits",
      content:
        "We guide you in developing healthy lifestyle and nutrition habits that are sustainable and practical for your busy life. Focus on consistency, not intensity.",
    },
    {
      id: "mission-3",
      title: "Live with Clarity & Confidence",
      content:
        "Our coaching helps you live with clarity, confidence, and inner happiness. We believe in addressing the whole person - mind, body, and lifestyle for complete transformation.",
    },
  ],
};

// Updated coach info from PDF - Vidya Naik
export const coach = {
  name: "Vidya Naik",
  title: "Lifestyle Management Coach | Certified Health and Wellness Coach",
  tagline: "Health | Mindset | Lifestyle Management Coach",
  description:
    "Hello! I'm Vidya, a passionate Health, Mind and Lifestyle Management Coach dedicated to helping individuals transform their mindset, build healthy habits, and create a balanced, joyful life. With a background in B.Sc, along with Health Coach Certification, Diploma in applied Nutrition (National Fitness And Nutrition Academy), and multiple Mind Coaching & Personal Development programs, I bring a holistic approach—integrating mind, body and lifestyle transformations—to support people in achieving mental clarity, wellness, and a happier state of living.",
  achievements: [
    "Lifestyle Management Coach",
    "Certified Health and Wellness Coach",
    "B.Sc Degree",
    "Health Coach Certification",
    "Diploma in Applied Nutrition (National Fitness And Nutrition Academy)",
    "Mind Coaching & Personal Development",
  ],
  experience: "10+",
  specialization: "Wellness",
  certificates: [
    "Health Coach Certification",
    "Diploma in Applied Nutrition (NFNA)",
    "Mind Coaching Certification",
    "Personal Development Programs",
    "NLP Practitioner",
  ],
  journey:
    "Over the years, I've been actively involved in various online communities and learning platforms focused on mindfulness, manifestation, habit building, emotional well-being, and lifestyle upliftment. My mission is to simplify transformation so that it becomes practical, achievable and sustainable for everyone.",
  philosophy:
    "True transformation happens when we address the whole person - mind, body, and spirit. Small daily improvements create long-term transformation. Lifestyle management is not about doing more, it's about doing what truly matters, regularly and mindfully.",
  linkedin: "https://linkedin.com/in/vidya-naik-5179b13a1",
};

export const pricing = [
  {
    id: "free-discovery",
    title: "Free Discovery Call",
    price: "Free",
    description: "Start your journey with a free 30-minute consultation",
    features: ["30-minute one-on-one call", "Identify your blockers", "Get personalized guidance", "No commitment required"],
    buttonText: "Book Free Call",
    popular: false,
    detailedDescription:
      "This is your first step towards transformation. During this free 30-minute consultation, we will discuss your current challenges, goals, and what you hope to achieve through our coaching programs. This call is completely obligation-free and will give you a taste of what working together could look like.",
    whoIsThisFor: "Anyone who is curious about coaching and wants to explore if it's the right fit for them.",
    duration: "30 minutes",
    format: "Video Call (Zoom/Google Meet)",
  },
  {
    id: "transformation",
    title: "Transformation Program",
    price: "Custom",
    description: "Comprehensive 3-month program for lasting transformation",
    features: [
      "12 weekly sessions",
      "Personalized action plan",
      "Unlimited WhatsApp support",
      "Workbook & exercises",
      "Lifetime access to community",
    ],
    buttonText: "Apply Now",
    popular: true,
    detailedDescription:
      "Our flagship 3-month Transformation Program is designed to create lasting change in your life. Through weekly sessions, personalized exercises, and ongoing support, you will break through limiting beliefs, develop unshakeable confidence, and master the art of charismatic communication.",
    whoIsThisFor: "Women who are committed to personal growth and want comprehensive support in their transformation journey.",
    duration: "3 Months",
    format: "Weekly Video Calls + WhatsApp Support",
    whatsIncluded: [
      "12 one-on-one coaching sessions (60 minutes each)",
      "Personalized transformation roadmap",
      "Customized workbook with exercises",
      "Unlimited WhatsApp support throughout the program",
      "Lifetime access to our private community",
      "Recorded sessions for future reference",
    ],
  },
  {
    id: "vip-experience",
    title: "VIP Experience",
    price: "Custom",
    description: "Intensive one-on-one coaching for accelerated results",
    features: ["6 months of coaching", "Bi-weekly calls", "24/7 priority support", "Custom resources", "In-person workshop access"],
    buttonText: "Apply Now",
    popular: false,
    detailedDescription:
      "Our most comprehensive coaching package for those who want the fastest possible transformation. This intensive 6-month program includes bi-weekly calls, 24/7 priority support, in-person workshops, and detailed video analysis of your communication skills.",
    whoIsThisFor: "High-achieving women who want accelerated results and premium, personalized support.",
    duration: "6 Months",
    format: "Bi-weekly Video Calls + 24/7 Priority Support + In-person Workshops",
    whatsIncluded: [
      "12 one-on-one coaching sessions (90 minutes each)",
      "Bi-weekly strategy calls",
      "24/7 priority WhatsApp support",
      "Customized resource library",
      "2 in-person workshop sessions",
      "Personal brand development",
      "Network of successful women",
    ],
  },
];

// Updated testimonials from actual coaching experience
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Vidya's coaching completely transformed my life. I went from feeling stuck to living with purpose and clarity. The techniques she taught me about mindset and lifestyle management have been life-changing. I finally feel in control of my life!",
    name: "Sarah Johnson",
    title: "Software Engineer",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "I was struggling with stress and unhealthy habits for years. Vidya helped me identify my blockers and create a sustainable plan for wellness. Now I'm healthier, happier, and more confident than ever before.",
    name: "Michelle Dsouza",
    title: "Marketing Manager",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "The lifestyle management program with Vidya has been incredible. She helped me balance work, health, and personal life in ways I never thought possible. Thank you for this transformation!",
    name: "Anita Rao",
    title: "Entrepreneur",
    img: people03,
  },
];

// Updated blog posts with wellness content from PDF expertise
export const blogPosts = [
  {
    id: "lifestyle-management-made-simple",
    title: "Lifestyle Management Made Simple",
    excerpt:
      "In today's fast-paced world, many people are busy — but not balanced. Lifestyle management is not about living perfectly. It is about living consciously.",
    content: `In today's fast-paced world, many people are busy — but not balanced. Irregular sleep, unhealthy eating, constant stress, and no time for self-care have become common. We keep managing responsibilities, but often forget to manage ourselves.

Lifestyle management is not about living perfectly. It is about living consciously. It means making small, consistent choices that improve your physical, mental, and emotional well-being.

Here are some simple steps to make lifestyle management easy and practical:

1. **Start Your Day with Intention** - Instead of checking your phone immediately, take 5–10 minutes for deep breathing, gratitude, or planning your day. A calm start creates a focused day.

2. **Focus on the Basics: Sleep, Nutrition, and Movement** - You don't need extreme diets or heavy workouts. Sleep on time. Eat balanced meals. Move your body daily. Consistency is more powerful than intensity.

3. **Manage Your Energy, Not Just Your Time** - Take short breaks between tasks. Avoid multitasking. When you protect your energy, productivity improves naturally.

4. **Set Healthy Boundaries** - Learn to say no when needed. Not every demand deserves your time and attention. Protecting your mental space is part of self-care.

5. **Reflect and Reset Weekly** - Take a few minutes every week to review your habits. What worked? What needs improvement? Small corrections prevent big problems later.

Remember — lifestyle management is not about doing more. It is about doing what truly matters, regularly and mindfully. Small daily improvements create long-term transformation.`,
    author: "Vidya Naik",
    date: "2024-02-20",
    category: "Lifestyle",
    readTime: "5 min read",
    image: health,
  },
  {
    id: "why-do-we-procrastinate",
    title: "Why Do We Procrastinate?",
    excerpt:
      "We delay important work not because we are lazy… but because we are avoiding uncomfortable emotions. Here is a simple way to overcome it.",
    content: `We delay important work not because we are lazy… but because we are avoiding uncomfortable emotions.

Sometimes the task feels too big. Sometimes we fear failure or judgment. Sometimes we want everything to be perfect. And sometimes we simply don't know where to start. So we choose short-term comfort over long-term growth.

The truth is — procrastination is not a time problem. It is an emotion management problem.

Here is a simple way to overcome it:

• **Start with just 5 minutes.** Action reduces anxiety.
• **Break big tasks into small, doable steps.** Small wins build momentum.
• **Remove distractions before you begin.** Your environment matters.
• **Work in short focused blocks** instead of waiting for motivation.
• **Acknowledge and celebrate small progress.**

You don't need to feel ready. You just need to start. Action creates clarity. Waiting creates fear.

— Vidya Naik
Health | Mindset | Lifestyle Coach`,
    author: "Vidya Naik",
    date: "2024-01-15",
    category: "Mindset",
    readTime: "4 min read",
    image: procrastinate,
  },
  {
    id: "breaking-limiting-beliefs",
    title: "Breaking Free from Limiting Beliefs",
    excerpt: "Discover how to identify and overcome the self-limiting beliefs that are holding you back from reaching your full potential.",
    content: `Self-limiting beliefs are the invisible barriers that prevent us from achieving our true potential. They are the thoughts and beliefs we hold about ourselves that limit our capabilities and keep us stuck in our comfort zones.

These beliefs often stem from our childhood experiences, past failures, criticism from others, or societal expectations. They become so ingrained in our thinking that we don't even realize they're there.

Common self-limiting beliefs include:
• "I'm not good enough"
• "I don't deserve success"
• "I'm too old to start something new"
• "What will people think of me?"
• "I can't do that"

The first step to breaking free is awareness. Once you identify these beliefs, you can challenge and replace them with empowering thoughts.

Here are some powerful techniques to overcome self-limiting beliefs:

1. **Identify the Belief**: Pay attention to your inner dialogue. What stories are you telling yourself?

2. **Challenge Its Validity**: Ask yourself - Is this belief true? What evidence do I have to the contrary?

3. **Create a New Belief**: Replace the limiting belief with an empowering one.

4. **Take Action**: Small steps taken consistently lead to massive transformation.

Remember, you have the power to choose your thoughts. Your past does not define your future.`,
    author: "Vidya Naik",
    date: "2024-01-10",
    category: "Mindset",
    readTime: "5 min read",
    image: health,
  },
  {
    id: "emotional-wellbeing",
    title: "The Path to Emotional Well-being",
    excerpt: "Understanding and managing your emotions is the key to living a fulfilling and empowered life.",
    content: `Emotional well-being is not about being happy all the time. It's about understanding your emotions and having healthy coping mechanisms for life's challenges.

The journey to emotional well-being involves:

**Understanding Your Triggers**
What activates strong emotional responses in you? Common triggers include:
• Feeling disrespected
• Being criticized
• Fear of rejection
• Past traumas

**The STOP Technique**
When you feel overwhelmed:
1. **S**top - Pause what you're doing
2. **T**ake a breath - Deep breathing activates your parasympathetic nervous system
3. **O**bserve - Notice what you're feeling without judgment
4. **P**roceed - Choose how to respond instead of reacting

**Building Emotional Resilience**
• Practice self-compassion
• Develop a support system
• Regular self-care practices
• Journal your emotions

Remember, emotional well-being is a journey, not a destination. Be patient with yourself as you develop these skills.`,
    author: "Vidya Naik",
    date: "2024-01-25",
    category: "Emotional Intelligence",
    readTime: "6 min read",
    image: wellness,
  },
  {
    id: "healthy-habits",
    title: "Building Sustainable Healthy Habits",
    excerpt: "Practical strategies to develop healthy habits that stick for life.",
    content: `Building healthy habits doesn't have to be complicated. The key is to start small and be consistent.

**Start Small**
Begin with just 2-3 minutes of a new habit. Want to exercise? Start with 5 minutes. Want to meditate? Start with 2 minutes. Small starts lead to big changes over time.

**Make It Easy**
Remove barriers to your healthy habits. Want to drink more water? Keep a bottle on your desk. Want to exercise in the morning? Lay out your clothes the night before.

**Track Your Progress**
Keep a simple log of your habits. Seeing your streak motivate you to continue.

**Be Consistent, Not Perfect**
Missed a day? Don't give up. Just start again tomorrow. Consistency over time is what matters.

**Celebrate Small Wins**
Acknowledge your progress, no matter how small. This builds motivation for continued growth.

Remember, sustainable change happens gradually. Be patient with yourself and enjoy the journey to better health.`,
    author: "Vidya Naik",
    date: "2024-02-01",
    category: "Health",
    readTime: "4 min read",
    image: health,
  },
  {
    id: "manifestation-gratitude",
    title: "Manifestation and Gratitude Techniques",
    excerpt: "Learn how to use the power of manifestation and gratitude to create the life you desire.",
    content: `Manifestation and gratitude are powerful tools for creating the life you desire. When combined, they create a powerful shift in your energy and attract positive experiences.

**What is Manifestation?**
Manifestation is the practice of bringing your desires into reality through focused thought, emotion, and action. It's based on the principle that like attracts like.

**How to Practice Manifestation:**
1. **Be Clear About What You Want** - Write down your goals in detail
2. **Visualize Having It** - Imagine how it feels to already have what you want
3. **Feel the Emotion** - Bask in the feeling of already having achieved your goal
4. **Take Inspired Action** - Look for opportunities that align with your desires
5. **Trust the Process** - Have faith that the universe will deliver

**The Role of Gratitude:**
Gratitude shifts your focus from what's lacking to what's abundant. It raises your vibration and attracts more positive experiences.

**Daily Gratitude Practice:**
• Start each day by writing 3 things you're grateful for
• End each day by acknowledging 3 good things that happened
• Feel genuine appreciation as you think of each item

When you combine manifestation with gratitude, you align your energy with the life you want to create. Start today and watch the magic unfold.`,
    author: "Vidya Naik",
    date: "2024-02-10",
    category: "Mindset",
    readTime: "5 min read",
    image: wellness,
  },
];

export const footerLinks = [
  {
    id: "footerLinks-1",
    title: "Quick Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Our Mission",
        link: "/mission",
      },
      {
        name: "Meet the Coach",
        link: "/coach",
      },
    ],
  },
  {
    id: "footerLinks-2",
    title: "Programs",
    links: [
      {
        name: "Free Discovery Call",
        link: "/programs#free-discovery",
      },
      {
        name: "Transformation Program",
        link: "/programs#transformation",
      },
      {
        name: "VIP Experience",
        link: "/programs#vip-experience",
      },
      {
        name: "All Programs",
        link: "/programs",
      },
    ],
  },
  {
    id: "footerLinks-3",
    title: "Resources",
    links: [
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Success Stories",
        link: "/reviews",
      },
      {
        name: "FAQ",
        link: "/contact#faq",
      },
    ],
  },
  {
    id: "footerLinks-4",
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        name: "Terms of Service",
        link: "/terms-of-service",
      },
      {
        name: "Refund Policy",
        link: "/refund-policy",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://linkedin.com/in/vidya-naik-5179b13a1",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: people01,
  },
  {
    id: "client-2",
    logo: people02,
  },
  {
    id: "client-3",
    logo: people03,
  },
];
