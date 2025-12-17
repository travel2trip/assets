// ============================================
// CONFIGURABLE DATA - EDIT THIS FILE TO CHANGE PROPERTY DETAILS
// ============================================

// ==================== GOOGLE SHEETS CONFIGURATION ====================
// Hotel ID - Use this to identify your hotel in the Google Sheet
const hotel_ID = 'htluk1';

// Google Sheets API Configuration
const GOOGLE_SHEET_ID = '1g35eSmHGFuwIwk9Vj6_vh8Fb-cMkKY2gBUHcposqp0E'; // Replace with your Sheet ID
const GOOGLE_API_KEY = 'AIzaSyDf1IiBpWcqrgIfX2xK4UpMCfkkhd3MxOE'; // Replace with your API key
const SHEET_NAME = 'Andhra Pradesh'; // Name of the sheet tab containing price data


// ==================== IMAGE CAROUSEL (FIRST Gallery) ====================
const imageUrls = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=600&fit=crop&q=70',
    'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=900&h=600&fit=crop'
];


// ==================== WELCOME SECTION ====================
const welcomeNote = "Welcome to our space! We're delighted to have you here. This is the beginning of something wonderful. Whether you're here to explore, learn, or connect, we're thrilled to be part of your journey. Let's make this experience memorable together.";

// ==================== AMENITIES & RULES ====================
let htl_amenities = "https://example.com/amenities.pdf";
let htl_rules = "https://example.com/rules.pdf";

// ==================== PRICING & ROOMS DATA ====================

// Pricing Variables - Will be updated from Google Sheets on load
window.guestPrice = 500 // Additional price per adult guest
window.childPrice = 250 // Additional price per child

window.mealPlanPrices = {
  none: 0, // Room Only - no meal
  breakfast: 500, // Breakfast Only
  halfBoard: 1000, // Half Board (Breakfast + Dinner)
  fullBoard: 1500, // Full Board (All Meals)
}



// Room Data Array - 20 Rooms
window.roomsData = [
  {
    id: 1,
    title: "Standard Single Room",
    price: 2000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 2,
    title: "Standard Double Room",
    price: 2500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 3,
    title: "Superior Single Room",
    price: 3000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 4,
    title: "Superior Double Room",
    price: 3500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 5,
    title: "Deluxe Single Room",
    price: 4000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 6,
    title: "Deluxe Double Room",
    price: 4500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 7,
    title: "Deluxe Twin Room",
    price: 5000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 8,
    title: "Premium Single Room",
    price: 5500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 9,
    title: "Premium Double Room",
    price: 6000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 10,
    title: "Executive Single Room",
    price: 6500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 11,
    title: "Executive Double Room",
    price: 7000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 12,
    title: "Executive Suite",
    price: 7500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 13,
    title: "Junior Suite",
    price: 8000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 14,
    title: "Business Suite",
    price: 8500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 15,
    title: "Luxury Suite",
    price: 9000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 16,
    title: "Grand Suite",
    price: 9500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 17,
    title: "Family Suite",
    price: 10000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 18,
    title: "Penthouse Suite",
    price: 10500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 19,
    title: "Presidential Suite",
    price: 11000,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
  {
    id: 20,
    title: "Royal Suite",
    price: 11500,
    images: [
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
      "https://cdn.wallpapersafari.com/9/2/U8jznD.jpg",
    ],
  },
]

// ==================== CONTACT SECTION ====================
const contactData = {
    phone: {
        number: "+1 (234) 567-890",
        link: "+1234567890",
        description: "Available Monday to Friday, 9am - 6pm"
    },
    email: {
        address: "contact@example.com",
        link: "contact@example.com",
        description: "We'll respond within 24 hours"
    },
    address: {
        line1: "123 Business Street",
        line2: "San Francisco, CA 94105"
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0975508033556!2d-122.41941592346816!3d37.77492927124484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c0d9c9d5%3A0xcd6d0d0c0d0c0d0c!2s123%20Business%20Street%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1234567890"
};

