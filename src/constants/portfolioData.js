import hindaviImg from "../assets/img/project-hindavi.png";
import swipeloanImg from "../assets/img/project-swipeloan.png";
import creatooImg from "../assets/img/project-creatoo.png";
import soyraImg from "../assets/img/project-soyra.png";
import griponImg from "../assets/img/project-gripon-bharat.png";
import reliefImg from "../assets/img/project-relief-plus.png";
import diabreviveImg from "../assets/img/project-diabrevive.png";
import smatonUserImg from "../assets/img/project-smaton.png";
import smatonRestImg from "../assets/img/project-smaton-rest.png";
import smatonDelImg from "../assets/img/project-smaton-del.png";
import equineImg from "../assets/img/project-equine.png";
import fmlImg from "../assets/img/project-fml.png";
import portfolioImg from "../assets/img/project-portfolio.png";
import flutterDevopsKitImg from "../assets/img/project-fkit.png";
import ePrashikshanImg from "../assets/img/project-e-prashikshan.png";
import scoreLoanImg from "../assets/img/project-scoreloan.png";
import artistWallImg from "../assets/img/project-artist-wall.png";
import pwhImg from "../assets/img/project-pwh.png";
import pwhVendorImg from "../assets/img/project-pwh-vendor.png";
import pwhDeliveryImg from "../assets/img/project-pwh-delivery.png";
import hgSmartConnectImg from "../assets/img/project-hg-smart-connect.png";
// import shivTravelImg from "../assets/img/project-shiv-travel.png";
// import redRikshaImg from "../assets/img/project-red-riksha.png";

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
    status: "Available for select mobile projects",
    codeLines: [
      "const focus = ['Flutter', 'Android', 'iOS'];",
      "ship(focus, { quality: 'production' });",
    ],
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
        tech: ["Flutter", "Provider", "MVVM", "Facade Pattern"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.kgil.swipeloan",
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
        title: "ScoreLoan",
        description:
          "Digital financial services platform enabling users to discover, compare, and apply for loans, credit cards, and insurance products through a secure and paperless experience.",
        imgUrl: scoreLoanImg,
        tech: [
          "Flutter",
          "Riverpod",
          "Clean Architecture",
          "PDF Generation",
          "Easebuzz PG",
        ],
        playStore:
          "https://play.google.com/store/apps/details?id=com.capora.scoreloan&pcampaignid=web_share",
        webUrl: "https://scoreloan.app/login",
        featured: true,
      },

      {
        title: "Equine LTS CozyCheck",
        description:
          "Environmental monitoring application using Bluetooth Low Energy sensors to track temperature and humidity for stables, trailers, and storage environments.",
        imgUrl: equineImg,
        tech: ["Flutter", "REST API", "Flutter Reactive BLE, Localization"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.equine.lts",
        appStore: "https://apps.apple.com/in/app/equine-lts/id6756025739",
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
        appStore: "https://apps.apple.com/in/app/gripon-bharat/id6761461916",
        featured: true,
      },
      {
        title: "Pune Water Helpline - Customer",
        description:
          "Location-based water service platform enabling customers to book water-related services, manage requests, make payments, and track deliveries in real time across Pune.",
        imgUrl: pwhImg,
        tech: [
          "Flutter",
          "BLoC",
          "Clean Architecture",
          "Google Maps API",
          "Razorpay PG",
        ],
        playStore:
          "https://play.google.com/store/apps/details?id=com.pwh.customer.app&pcampaignid=web_share",
        appStore:
          "https://apps.apple.com/in/app/pune-water-helpline/id6756025739",
      },
      {
        title: "Pune Water Helpline - Vendor",
        description:
          "Vendor operations platform for managing water-service bookings, preparing orders, updating fulfillment status, and coordinating customer deliveries across Pune.",
        imgUrl: pwhVendorImg,
        tech: [
          "Flutter",
          "BLoC",
          "Clean Architecture",
          "Google Maps API",
          "Razorpay PG",
        ],
      },
      {
        title: "Pune Water Helpline - Delivery",
        description:
          "Delivery partner application helping water-service drivers manage assigned bookings, navigate to customers, update delivery progress, and complete fulfillment in real time.",
        imgUrl: pwhDeliveryImg,
        tech: [
          "Flutter",
          "BLoC",
          "Clean Architecture",
          "Google Maps API",
          "Razorpay PG",
        ],
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
        tech: ["Flutter", "Razorpay PG", "Riverpod", "MVVM"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.dailyroutine.app",
        appStore: "https://apps.apple.com/in/app/diabrevive-ai/id6758514032",
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
        title: "E-Prashikshan",
        description:
          "Digital learning and advisory platform helping users understand Maharashtra Government service rules, departmental inquiry procedures, and official topics through an AI-powered Marathi knowledge assistant.",
        imgUrl: ePrashikshanImg,
        tech: [
          "Flutter",
          "BLoC",
          "Clean Architecture",
          "Gemini AI",
          "File Search",
        ],
        playStore:
          "https://play.google.com/store/apps/details?id=com.eprashikshan.vibhagiyachaukashi&pcampaignid=web_share",
      },

      {
        title: "HG Smart Connect",
        description:
          "Internal Android support application connecting a web admin panel with a support agent's phone, using Firebase real-time synchronization to initiate calls, detect call events, and remotely coordinate call actions.",
        imgUrl: hgSmartConnectImg,
        tech: [
          "Kotlin",
          "Firebase Realtime DB",
          "Android Telephony",
          "Real-time Sync",
        ],
        internal: true,
      },
      {
        title: "Artist Wall",
        description:
          "Professional entertainment and casting platform enabling artists and creative professionals to build portfolios, discover opportunities, apply for roles, and connect with industry professionals.",
        imgUrl: artistWallImg,
        tech: ["Flutter", "Provider", "MVVM", "Razorpay PG"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.artistwall.app&pcampaignid=web_share",
        appStore: "https://apps.apple.com/in/app/artist-wall/id6756025739",
      },

      {
        title: "FML",
        description:
          "Unique time-based pub experience app allowing users to explore and interact with a new kind of social nightlife concept.",
        imgUrl: fmlImg,
        tech: ["Flutter", "Google Maps", "Firebase"],
        playStore: "https://play.google.com/store/apps/details?id=com.zonk.fml",
        webUrl: "https://foodmusiclove.in",
      },

      ///Not showing these apps in portfolio for now, as they are not worth mentioning. Can be added later if needed.
      /* 
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
        title: "Red Riksha",
        description:
          "Local mobility platform designed for Pune’s fast-moving urban lifestyle with digital booking and payment integration.",
        imgUrl: redRikshaImg,
        tech: ["Flutter", "GetX", "Razorpay"],
        playStore:
          "https://play.google.com/store/apps/details?id=com.sync.red_riksha",
       },
       */
    ],

    otherProjects: [
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
        githubUrl: "https://github.com/TejasD36/portfolio-reactjs",
      },
      {
        title: "Flutter DevOps Kit",
        description:
          "A command-line toolkit for Flutter project setup, feature scaffolding, localization, flavors, builds, signing, and Firebase App Distribution.",
        imgUrl: flutterDevopsKitImg,
        tech: ["Dart", "Flutter", "CLI", "BLoC Clean Architecture"],
        pubDevUrl: "https://pub.dev/packages/flutter_devops_kit",
        githubUrl: "https://github.com/fkit-dev/flutter-devops-kit",
      },
    ],
  },
};
