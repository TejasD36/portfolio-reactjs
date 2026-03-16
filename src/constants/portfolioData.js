import hindaviImg from "../assets/img/project-ios-hindavi.png";
import swipeloanImg from "../assets/img/project-swipeloan.png";
import creatooImg from "../assets/img/project-ios-creatoo.png";
import soyraImg from "../assets/img/project-ios-soyra.png";
import griponImg from "../assets/img/project-gripon-bharat.png";
import reliefImg from "../assets/img/project-relief-plus.png";
import diabreviveImg from "../assets/img/project-diabrevive.png";
import shivTravelImg from "../assets/img/project-shiv-travel.png";
import smatonUserImg from "../assets/img/project-smaton.png";
import smatonRestImg from "../assets/img/project-smaton-rest.png";
import smatonDelImg from "../assets/img/project-smaton-del.png";
import equineImg from "../assets/img/project-equine.png";
import redRikshaImg from "../assets/img/project-red-riksha.png";
import fmlImg from "../assets/img/project-fml.png";
import portfolioImg from "../assets/img/project-portfolio.png";

export const portfolioData = {
  banner: {
    tagline: "Welcome to my Portfolio",
    title: "Hi! I'm Tejas",
    roles: [
      "Flutter Developer",
      "Mobile App Developer",
      "Android Developer",
      "iOS Developer",
    ],
    description:
      "Mobile Application Developer specializing in Flutter with experience building scalable Android and iOS apps across fintech, healthcare, IoT, and delivery platforms.",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/tejas-dudhal",
    github: "https://github.com/TejasD36",
    email:
      "https://mail.google.com/mail/?view=cm&to=tejasdudhal05@gmail.com&su=Portfolio%20Contact",
  },

  resume: {
    url: "https://drive.google.com/file/d/143sz3WHE8xqElouifEBac-wpja83kY5p/view?usp=sharing",
  },

  footer: {
    copyright: "Copyright 2026. All Rights Reserved",
  },

  skills: {
    skillSummary:
      "Experienced in building scalable mobile applications using Flutter, developing cross-platform Android & iOS apps, integrating APIs, and working with IoT Bluetooth devices for real-time data communication.",
    skillsList: [
      { name: "Flutter Development", level: 95 },
      { name: "Mobile App Architecture", level: 90 },
      { name: "REST API Integration", level: 92 },
      { name: "Bluetooth / IoT Apps", level: 88 },
      { name: "Firebase Integration", level: 85 },
      { name: "UI Implementation", level: 85 },
      { name: "Git & Version Control", level: 85 },
    ],
  },

  projects: {
    mobileApps: [
      {
        title: "Hindavi Graphics",
        description:
          "Graphic design platform offering ready-to-use templates and powerful editing tools for creating social media posts, banners, and marketing creatives.",
        imgUrl: hindaviImg,
        tech: ["Flutter", "MVVM", "Riverpod", "Freezed"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.bpointer.hindavigraphics",
        appStore: "https://apps.apple.com/in/app/hindavi-graphics/id6451444292",
        featured: true,
      },

      {
        title: "SwipeLoan",
        description:
          "Digital loan facilitation platform connecting users with registered NBFCs for quick and seamless access to personal credit.",
        imgUrl: swipeloanImg,
        tech: ["Flutter", "Provider", "Json Serializable"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.kgil.swipeloan",
        featured: true,
      },

      {
        title: "Creatoo",
        description:
          "Loyalty and rewards platform that helps users unlock discounts, earn points, and stay connected with their favorite local brands.",
        imgUrl: creatooImg,
        tech: ["Flutter", "PhonePe SDK", "Dartz"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.creatoo.app",
        appStore: "https://apps.apple.com/in/app/creatoo/id6670787635",
        featured: true,
      },

      {
        title: "Soyra Maratha",
        description:
          "Community-focused matrimony platform helping individuals discover compatible life partners with verified profiles and secure matchmaking.",
        imgUrl: soyraImg,
        tech: ["Flutter", "Razorpay", "Firebase"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.bpointer.soyramaratha",
        appStore: "https://apps.apple.com/in/app/soyra-maratha/id6742496419",
        webUrl: "https://app.soyramaratha.com/",
        featured: true,
      },

      {
        title: "Gripon Bharat",
        description:
          "Dealer and employee management platform allowing dealers to place orders while enabling employees to manage deliveries and track daily work activity.",
        imgUrl: griponImg,
        tech: ["Flutter", "SqfLite", "Workmanager"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.griponbharat.app",
      },

      {
        title: "Relief Plus",
        description:
          "Mental wellness platform developed by Mansik Shakti Foundation providing scientifically validated assessments for stress, anxiety, and psychiatric risk with ABHA integration.",
        imgUrl: reliefImg,
        tech: ["Flutter", "CashFree PG", "MVVM"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.manshikshaktifoundation.reliefplus",
      },

      {
        title: "DiabRevive AI",
        description:
          "AI-powered wellness companion that helps users build healthier routines through daily progress tracking and personalized habit guidance.",
        imgUrl: diabreviveImg,
        tech: ["Flutter", "Razorpay PG", "Riverpod"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.dailyroutine.app",
      },

      {
        title: "Shiv World Travel",
        description:
          "Travel booking platform allowing users to explore curated global travel experiences and seamlessly plan their journeys.",
        imgUrl: shivTravelImg,
        tech: ["Flutter", "WebView", "HTTP"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.shivworldtravel.app.shiv_world_travel",
      },

      {
        title: "SMATON User App",
        description:
          "Food delivery application allowing users to discover nearby restaurants, explore menus, and order meals for fast doorstep delivery.",
        imgUrl: smatonUserImg,
        tech: ["Flutter", "Google Maps", "Firebase"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.smaton.fooddelivery.user",
      },

      {
        title: "SMATON Restaurant",
        description:
          "Restaurant partner application enabling restaurants to manage orders, track delivery status, and handle customer requests efficiently.",
        imgUrl: smatonRestImg,
        tech: ["Flutter", "Flutter Foreground Task", "Shared Preferences"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.smaton.fooddelivery.restaurant",
      },

      {
        title: "SMATON Delivery",
        description:
          "Delivery partner application helping drivers manage delivery tasks efficiently and ensure timely order fulfillment.",
        imgUrl: smatonDelImg,
        tech: ["Flutter", "REST API", "Firebase"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.smaton.fooddelivery.delivery",
      },

      {
        title: "Equine LTS CozyCheck",
        description:
          "Environmental monitoring application using Bluetooth Low Energy sensors to track temperature and humidity for stables, trailers, and storage environments.",
        imgUrl: equineImg,
        tech: ["Flutter", "REST API", "Flutter Reactive BLE"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.equine.lts",
      },

      {
        title: "Red Riksha",
        description:
          "Local mobility platform designed for Pune’s fast-moving urban lifestyle with digital booking and payment integration.",
        imgUrl: redRikshaImg,
        tech: ["Flutter", "GetX", "Razorpay"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.sync.red_riksha",
      },

      {
        title: "FML",
        description:
          "Unique time-based pub experience app allowing users to explore and interact with a new kind of social nightlife concept.",
        imgUrl: fmlImg,
        tech: ["Flutter", "Google Maps", "Firebase"],
        playStore: "https://play.google.com/store/apps/details?id=com.zonk.fml",
      },
    ],

    experiments: [
      {
        title: "Portfolio Website",
        description:
          "A modern developer portfolio built with React.js featuring reusable components, centralized project data, responsive layouts, and animated UI sections.",
        imgUrl: portfolioImg,
        tech: [
          "React",
          "React Bootstrap",
          "CSS3",
          "Animate.css",
          "React Multi Carousel",
        ],
        webUrl: "#",
      },
    ],
  },
};
