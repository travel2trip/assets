// ==================== IMAGE CAROUSEL (Final Gallery) ====================

class ImageCarousel {
    constructor() {
        this.currentSlide = 0;
        this.imageUrls = imageUrls;
        this.totalSlides = this.imageUrls.length;
        this.carouselInner = document.getElementById('carouselInner');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.dotsContainer = document.getElementById('dotsContainer');
        this.currentSlideSpan = document.getElementById('currentSlide');
        this.totalSlidesSpan = document.getElementById('totalSlides');
        this.autoPlayInterval = null;

        if (this.carouselInner) {
            this.init();
        }
    }

    init() {
        this.createSlides();
        this.createDots();
        this.attachEventListeners();
        this.updateCarousel();
        this.startAutoPlay();
    }

    createSlides() {
        this.imageUrls.forEach((url, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            const img = document.createElement('img');
            img.src = url;
            img.alt = `Slide ${index + 1}`;
            img.crossOrigin = 'anonymous';
            slide.appendChild(img);
            this.carouselInner.appendChild(slide);
        });
        this.totalSlidesSpan.textContent = this.totalSlides;
    }

    createDots() {
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        // Pause autoplay on hover
        this.carouselInner.parentElement.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carouselInner.parentElement.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    updateCarousel() {
        // Update carousel position
        const offset = -this.currentSlide * 100;
        this.carouselInner.style.transform = `translateX(${offset}%)`;

        // Update dots
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });

        // Update counter
        this.currentSlideSpan.textContent = this.currentSlide + 1;
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}
// Hotel name variable (document title)
const hotel_name = document.title || (document.querySelector && document.querySelector('title') ? document.querySelector('title').textContent : 'Hotel');
window.hotel_name = hotel_name;

// Apps Script endpoint (replace with your deployed Web App URL)
const APPS_SCRIPT_URL = window.APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbz_uHmFhqwvdXyLdwiB1GUc4M5st1bZYWtDVbty5YcqFW6xkMCqNX4BCDLB5RhigglAnQ/exec';

// Generate Booking ID: prefix ATH + 7 random alphanumeric chars (total length 10)
function generateBookingID() {
  const prefix = 'ATH';
  // Use only digits and UPPERCASE letters for booking ID suffix
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let suffix = '';
  for (let i = 0; i < 7; i++) {
    suffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return prefix + suffix;
}
// ==================== AMENITIES & RULES ====================
function openPDF(pdfURL) {
    window.open(pdfURL, "_blank", "width=900,height=700");
}

// ==================== CONTACT SECTION ====================

// SVG Icons
const icons = {
    phone: '<svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    email: '<svg class="icon" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m2 6 10 7 10-7"></path></svg>',
    address: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
};

function renderContactItems() {
    const container = document.getElementById('contactItems');
    if (!container) return;
    
    // Phone Item
    const phoneItem = document.createElement('div');
    phoneItem.className = 'contact-item';
    phoneItem.innerHTML = `
        <div class="icon-box">
            ${icons.phone}
        </div>
        <div class="contact-item-content">
            <h3>Phone</h3>
            <a href="tel:${contactData.phone.link}">${contactData.phone.number}</a>
            <p class="description">${contactData.phone.description}</p>
        </div>
    `;
    container.appendChild(phoneItem);

    // Email Item
    const emailItem = document.createElement('div');
    emailItem.className = 'contact-item';
    emailItem.innerHTML = `
        <div class="icon-box">
            ${icons.email}
        </div>
        <div class="contact-item-content">
            <h3>Email</h3>
            <a href="mailto:${contactData.email.link}">${contactData.email.address}</a>
            <p class="description">${contactData.email.description}</p>
        </div>
    `;
    container.appendChild(emailItem);

    // Address Item
    const addressItem = document.createElement('div');
    addressItem.className = 'contact-item';
    addressItem.innerHTML = `
        <div class="icon-box">
            ${icons.address}
        </div>
        <div class="contact-item-content">
            <h3>Address</h3>
            <p>${contactData.address.line1}</p>
            <p>${contactData.address.line2}</p>
        </div>
    `;
    container.appendChild(addressItem);
}

function setMapUrl() {
    const mapIframe = document.getElementById('mapIframe');
    if (mapIframe) {
        mapIframe.src = contactData.mapUrl;
    }
}

// ==================== ROOMS SECTION ====================

// Commission coefficient: commissionedPrice = COMMISSION_COEFFICIENT * generalPrice
const COMMISSION_COEFFICIENT = 1.1
window.COMMISSION_COEFFICIENT = COMMISSION_COEFFICIENT

function applyCommission(value) {
  if (value === null || value === undefined) return value
  const n = Number(value) || 0
  // Keep as integer currency (rounded)
  return Math.round(n * COMMISSION_COEFFICIENT)
}


// DOM Elements
const roomsContainer = document.getElementById("roomsContainer")
const bookingModal = document.getElementById("bookingModal")
const closeModal = document.getElementById("closeModal")
const bookingForm = document.getElementById("bookingForm")
const businessBooking = document.getElementById("businessBooking")
const businessFields = document.getElementById("businessFields")
const fullscreenModal = document.getElementById("fullscreenModal")
const fullscreenClose = document.getElementById("fullscreenClose")
const fullscreenImage = document.getElementById("fullscreenImage")
const fullscreenContainer = document.getElementById("fullscreenContainer")
const totalPriceEl = document.getElementById("totalPrice")
const selectedRoomNameEl = document.getElementById("selectedRoomName")
const zoomInBtn = document.getElementById("zoomIn")
const zoomOutBtn = document.getElementById("zoomOut")
const zoomResetBtn = document.getElementById("zoomReset")
const submitBtn = document.getElementById("submitBtn")

const roomCostBreakupEl = document.getElementById("roomCostBreakup")
const adultCostBreakupEl = document.getElementById("adultCostBreakup")
const childCostBreakupEl = document.getElementById("childCostBreakup")
const mealCostBreakupEl = document.getElementById("mealCostBreakup")
const roomCountEl = document.getElementById("roomCount")
const extraAdultCountEl = document.getElementById("extraAdultCount")
const extraChildCountEl = document.getElementById("extraChildCount")
const mealPlanNameEl = document.getElementById("mealPlanName")
const nightCountEl = document.getElementById("nightCount")
const grandTotalEl = document.getElementById("grandTotal")
const nightsValueEl = document.getElementById("nightsValue")

// Current selected room
let currentRoom = null
let currentZoom = 1
const MIN_ZOOM = 0.5
const MAX_ZOOM = 4
const ZOOM_STEP = 0.5

// Touch and pan variables for fullscreen image
let touchStartX = 0
let touchStartY = 0
let panX = 0
let panY = 0
let isDragging = false

const roomsData = window.roomsData || []

// Initialize the rooms app
function initRooms() {
  renderRooms()
  setupEventListeners()
  setMinDates()
}

// Render all room cards
function renderRooms() {
  roomsContainer.innerHTML = ""

  roomsData.forEach((room) => {
    const card = createRoomCard(room)
    roomsContainer.appendChild(card)
  })
}

// Update meal plan select options based on `window.mealPlanPrices`
function updateMealPlanOptions() {
  const select = document.getElementById("mealPlan")
  if (!select) return

  const mealPrices = window.mealPlanPrices || { none: 0, breakfast: 500, halfBoard: 1000, fullBoard: 1500 }
  const labels = {
    none: "Room Only (No Meals)",
    breakfast: "Breakfast Only",
    halfBoard: "Half Board (Breakfast + Dinner)",
    fullBoard: "Full Board (All Meals)",
  }

  const order = ["none", "breakfast", "halfBoard", "fullBoard"]
  const currentValue = select.value

  // Rebuild options
  select.innerHTML = ""
  order.forEach((key) => {
    const opt = document.createElement("option")
    opt.value = key
    const price = Number(mealPrices[key]) || 0
    const per = key === "none" ? "" : "/person"
    opt.text = `${labels[key]} - ₹${price.toLocaleString()}${per}`
    select.appendChild(opt)
  })

  // Restore previous selection if still valid
  if (order.includes(currentValue)) select.value = currentValue
}

// Create a single room card
function createRoomCard(room) {
  const card = document.createElement("div")
  card.className = "room-card"
  card.innerHTML = `
    <div class="carousel">
      <div class="main-image-container" data-room-id="${room.id}">
        <img src="${room.images[0]}" alt="${room.title}" class="main-image" data-room-id="${room.id}">
      </div>
      <div class="thumbnails">
        ${room.images
          .map(
            (img, index) => `
          <img src="${img}" alt="Thumbnail ${index + 1}" class="thumbnail ${index === 0 ? "active" : ""}" 
               data-room-id="${room.id}" data-index="${index}">
        `,
          )
          .join("")}
      </div>
    </div>
    <div class="card-content">
      <h3 class="room-title">${room.title}</h3>
      <p class="room-price">₹${room.price.toLocaleString()} <span>/ room / night</span></p>
      <button class="reserve-btn" data-room-id="${room.id}">Reserve Now</button>
    </div>
  `

  return card
}

// Setup event listeners
function setupEventListeners() {
  // Thumbnail clicks
  roomsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("thumbnail")) {
      handleThumbnailClick(e.target)
    }

    if (e.target.classList.contains("main-image")) {
      handleMainImageClick(e.target)
    }

    if (e.target.classList.contains("reserve-btn")) {
      handleReserveClick(e.target)
    }
  })

  // Horizontal scroll buttons for rooms
  const scrollLeftBtn = document.getElementById("scrollLeftBtn")
  const scrollRightBtn = document.getElementById("scrollRightBtn")
  if (roomsContainer && scrollLeftBtn && scrollRightBtn) {
    const scrollStep = () => Math.max(200, Math.floor(roomsContainer.clientWidth * 0.8))
    scrollLeftBtn.addEventListener("click", () => {
      roomsContainer.scrollBy({ left: -scrollStep(), behavior: "smooth" })
    })
    scrollRightBtn.addEventListener("click", () => {
      roomsContainer.scrollBy({ left: scrollStep(), behavior: "smooth" })
    })
  }

  // Modal close
  closeModal.addEventListener("click", () => {
    bookingModal.classList.remove("active")
  })

  bookingModal.addEventListener("click", (e) => {
    if (e.target === bookingModal) {
      bookingModal.classList.remove("active")
    }
  })

  // Business booking toggle
  businessBooking.addEventListener("change", () => {
    businessFields.classList.toggle("active", businessBooking.checked)
  })

  // Form inputs for price calculation
  const priceInputs = ["numRooms", "numAdults", "numChildren", "checkIn", "checkOut", "mealPlan"]
  priceInputs.forEach((id) => {
    document.getElementById(id).addEventListener("change", calculatePrice)
  })

  // Price Breakup header toggle (only toggles the collapsible rows)
  const priceBreakupHeader = document.getElementById("priceBreakupHeader")
  const priceBreakupEl = document.getElementById("priceBreakupCollapsible")
  const priceBreakupLabel = document.getElementById("priceBreakupLabel")
  if (priceBreakupHeader && priceBreakupEl && priceBreakupLabel) {
    // Initialize label based on current expanded state
    const initExpanded = priceBreakupEl.classList.contains("expanded") || priceBreakupHeader.getAttribute("aria-expanded") === "true"
    priceBreakupHeader.setAttribute("aria-expanded", String(initExpanded))
    priceBreakupLabel.textContent = initExpanded ? "Close Price Breakup" : "Open Price Breakup"

    const setLabel = (expanded) => {
      priceBreakupLabel.textContent = expanded ? "Close Price Breakup" : "Open Price Breakup"
    }

    const toggleBreakup = () => {
      const expanded = priceBreakupEl.classList.toggle("expanded")
      priceBreakupHeader.setAttribute("aria-expanded", String(expanded))
      setLabel(expanded)
    }

    priceBreakupHeader.addEventListener("click", toggleBreakup)

    // Also support keyboard Enter/Space
    priceBreakupHeader.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        toggleBreakup()
      }
    })
  }

  document.querySelectorAll(".counter-btn").forEach((btn) => {
    btn.addEventListener("click", handleCounterClick)
  })

  submitBtn.addEventListener("click", handleFormSubmit)

  // Fullscreen modal close
  fullscreenClose.addEventListener("click", closeFullscreen)

  fullscreenModal.addEventListener("click", (e) => {
    if (e.target === fullscreenModal) {
      closeFullscreen()
    }
  })

  zoomInBtn.addEventListener("click", () => {
    if (currentZoom < MAX_ZOOM) {
      currentZoom += ZOOM_STEP
      applyZoom()
    }
  })

  zoomOutBtn.addEventListener("click", () => {
    if (currentZoom > MIN_ZOOM) {
      currentZoom -= ZOOM_STEP
      applyZoom()
    }
  })

  zoomResetBtn.addEventListener("click", () => {
    currentZoom = 1
    panX = 0
    panY = 0
    applyZoom()
  })

  // Touch and click-drag panning for fullscreen image
  // Mouse down - start dragging
  fullscreenImage.addEventListener("mousedown", (e) => {
    if (currentZoom > 1) {
      isDragging = true
      touchStartX = e.clientX
      touchStartY = e.clientY
      fullscreenImage.style.cursor = "grabbing"
    }
  })

  // Mouse move - pan while dragging
  document.addEventListener("mousemove", (e) => {
    if (isDragging && currentZoom > 1) {
      const deltaX = e.clientX - touchStartX
      const deltaY = e.clientY - touchStartY

      panX += deltaX
      panY += deltaY

      // Limit pan to prevent panning too far
      const maxPanX = (fullscreenImage.offsetWidth * currentZoom - fullscreenImage.offsetWidth) / 2
      const maxPanY = (fullscreenImage.offsetHeight * currentZoom - fullscreenImage.offsetHeight) / 2
      panX = Math.max(-maxPanX, Math.min(maxPanX, panX))
      panY = Math.max(-maxPanY, Math.min(maxPanY, panY))

      touchStartX = e.clientX
      touchStartY = e.clientY

      applyZoom()
    }
  })

  // Mouse up - stop dragging
  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false
      fullscreenImage.style.cursor = "grab"
    }
  })

  // Double-click to zoom in
  fullscreenImage.addEventListener("dblclick", (e) => {
    e.preventDefault()
    if (currentZoom < MAX_ZOOM) {
      currentZoom += ZOOM_STEP
      applyZoom()
    }
  })

  // Right-click to zoom out
  fullscreenImage.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    if (currentZoom > MIN_ZOOM) {
      currentZoom -= ZOOM_STEP
      applyZoom()
    }
  })

  // Touch start
  fullscreenImage.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1 && currentZoom > 1) {
      isDragging = true
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }
  })

  // Touch move - pan while dragging
  fullscreenImage.addEventListener("touchmove", (e) => {
    if (isDragging && e.touches.length === 1 && currentZoom > 1) {
      e.preventDefault()
      const deltaX = e.touches[0].clientX - touchStartX
      const deltaY = e.touches[0].clientY - touchStartY

      panX += deltaX
      panY += deltaY

      // Limit pan to prevent panning too far
      const maxPanX = (fullscreenImage.offsetWidth * currentZoom - fullscreenImage.offsetWidth) / 2
      const maxPanY = (fullscreenImage.offsetHeight * currentZoom - fullscreenImage.offsetHeight) / 2
      panX = Math.max(-maxPanX, Math.min(maxPanX, panX))
      panY = Math.max(-maxPanY, Math.min(maxPanY, panY))

      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY

      applyZoom()
    }
  })

  // Touch end
  fullscreenImage.addEventListener("touchend", () => {
    isDragging = false
  })

  // Keyboard escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      bookingModal.classList.remove("active")
      closeFullscreen()
    }
    if (fullscreenModal.classList.contains("active")) {
      if (e.key === "+" || e.key === "=") {
        if (currentZoom < MAX_ZOOM) {
          currentZoom += ZOOM_STEP
          applyZoom()
        }
      }
      if (e.key === "-") {
        if (currentZoom > MIN_ZOOM) {
          currentZoom -= ZOOM_STEP
          applyZoom()
        }
      }
    }
  })
}

function handleCounterClick(e) {
  const targetId = e.target.dataset.target
  const input = document.getElementById(targetId)
  const currentValue = Number.parseInt(input.value) || 0
  const minValue = Number.parseInt(input.min) || 0

  if (e.target.classList.contains("plus")) {
    // Enforce total-person cap: max 3 persons per room (adults + children)
    if (targetId === "numAdults" || targetId === "numChildren") {
      const numRooms = Number.parseInt(document.getElementById("numRooms").value) || 1
      const maxPersons = numRooms * 3
      const currentAdults = Number.parseInt(document.getElementById("numAdults").value) || 0
      const currentChildren = Number.parseInt(document.getElementById("numChildren").value) || 0
      const totalPersons = currentAdults + currentChildren

      // Check if incrementing would exceed the cap (totalPersons + 1 > maxPersons)
      if (totalPersons + 1 > maxPersons) {
        // User tried to exceed cap: show limit note
        const limitNote = document.getElementById("limitNote")
        if (limitNote) limitNote.classList.add("show")
        // Do not increase past the cap
      } else {
        // Successfully incremented: hide note
        input.value = currentValue + 1
        const limitNote = document.getElementById("limitNote")
        if (limitNote) limitNote.classList.remove("show")
      }
    } else if (targetId === "numRooms") {
      input.value = currentValue + 1
      // Hide note when rooms increase (cap increases)
      const limitNote = document.getElementById("limitNote")
      if (limitNote) limitNote.classList.remove("show")
    }
  } else if (e.target.classList.contains("minus")) {
    if (currentValue > minValue) {
      // Special handling for rooms decrease: apply smart reset logic
      if (targetId === "numRooms") {
        const newRooms = currentValue - 1
        const currentAdults = Number.parseInt(document.getElementById("numAdults").value) || 0
        const currentChildren = Number.parseInt(document.getElementById("numChildren").value) || 0

        // Check if children were added (numChildren > 0)
        if (currentChildren === 0) {
          // No children: reset adults to 1x(newRooms), children to 0
          document.getElementById("numAdults").value = newRooms * 1
          document.getElementById("numChildren").value = 0
        } else {
          // Children were added: reset adults to 2x(newRooms), children to newRooms
          document.getElementById("numAdults").value = newRooms * 1
          document.getElementById("numChildren").value = 1
        }
      }

      input.value = currentValue - 1
    }
    // Hide limit note when user decreases (successful reduction)
    const limitNote = document.getElementById("limitNote")
    if (limitNote) limitNote.classList.remove("show")
  }

  calculatePrice()
}

function applyZoom() {
  fullscreenImage.style.transform = `scale(${currentZoom}) translate(${panX / currentZoom}px, ${panY / currentZoom}px)`
}

function closeFullscreen() {
  fullscreenModal.classList.remove("active")
  currentZoom = 1
  panX = 0
  panY = 0
  applyZoom()
}

// Handle thumbnail click
function handleThumbnailClick(thumbnail) {
  const roomId = Number.parseInt(thumbnail.dataset.roomId)
  const index = Number.parseInt(thumbnail.dataset.index)
  const room = roomsData.find((r) => r.id === roomId)

  // Update main image
  const mainImage = document.querySelector(`.main-image[data-room-id="${roomId}"]`)
  mainImage.src = room.images[index]

  // Update active thumbnail
  const thumbnails = document.querySelectorAll(`.thumbnail[data-room-id="${roomId}"]`)
  thumbnails.forEach((t) => t.classList.remove("active"))
  thumbnail.classList.add("active")
}

// Handle main image click - open fullscreen
function handleMainImageClick(image) {
  fullscreenImage.src = image.src
  currentZoom = 1
  applyZoom()
  fullscreenModal.classList.add("active")
}

// Handle reserve button click
function handleReserveClick(button) {
  const roomId = Number.parseInt(button.dataset.roomId)
  currentRoom = roomsData.find((r) => r.id === roomId)

  selectedRoomNameEl.textContent = currentRoom.title
  bookingModal.classList.add("active")

  // Reset form
  bookingForm.reset()
  document.getElementById("numRooms").value = 1
  document.getElementById("numAdults").value = 1
  document.getElementById("numChildren").value = 0
  businessFields.classList.remove("active")
  setMinDates()
  calculatePrice()
}

// Fetch prices from Google Sheets and update global variables
async function fetchPricesFromGoogleSheets() {
  try {
    // Construct the Google Sheets API URL
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${SHEET_NAME}?key=${GOOGLE_API_KEY}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const rows = data.values;
    
    if (!rows || rows.length === 0) {
      console.error('No data found in Google Sheet');
      return false;
    }
    
    // First row contains headers
    const headers = rows[0];
    
    // Find the row matching the hotel_ID
    let hotelRow = null;
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][0] === hotel_ID) {
        hotelRow = rows[i];
        break;
      }
    }
    
    if (!hotelRow) {
      console.error(`No data found for hotel_ID: ${hotel_ID}`);
      return false;
    }
    
    // Create a mapping of header names to values
    const priceData = {};
    for (let i = 0; i < headers.length; i++) {
      priceData[headers[i].toLowerCase().replace(/\s+/g, '_')] = hotelRow[i];
    }
    
    // Helper function to parse prices (removes currency symbols and commas)
    const parsePrice = (priceString) => {
      if (!priceString) return null;
      // Remove currency symbols (₹, $, £, €, etc.) and commas, then parse as float
      const cleaned = String(priceString).replace(/[^\d.]/g, '');
      const parsed = parseFloat(cleaned);
      return isNaN(parsed) ? null : parsed;
    };
    
    // Update global price variables (store general prices and compute commissioned prices)
    if (priceData.extra_adult_price !== undefined) {
      const price = parsePrice(priceData.extra_adult_price);
      window.generalGuestPrice = price !== null ? price : (window.generalGuestPrice || window.guestPrice || 500);
      window.guestPrice = applyCommission(window.generalGuestPrice);
    }

    if (priceData.extra_child_price !== undefined) {
      const price = parsePrice(priceData.extra_child_price);
      window.generalChildPrice = price !== null ? price : (window.generalChildPrice || window.childPrice || 250);
      window.childPrice = applyCommission(window.generalChildPrice);
    }
    
    // Update meal plan prices
    // Normalize sheet headers to camelCase keys used by the UI: none, breakfast, halfBoard, fullBoard
    const sheetToCamel = (sheetKey) => {
      // sheetKey is like 'meal_halfboard' or 'meal_fullboard' or 'meal_breakfast' or 'meal_none'
      if (!sheetKey) return null;
      const k = sheetKey.replace(/^meal_/, '').toLowerCase();
      if (k === 'halfboard') return 'halfBoard';
      if (k === 'fullboard') return 'fullBoard';
      return k; // 'none' or 'breakfast'
    };

    // Iterate over all priceData keys and pick meal_* entries
    Object.keys(priceData).forEach((pdKey) => {
      if (pdKey.startsWith('meal_')) {
        const camel = sheetToCamel(pdKey);
        const price = parsePrice(priceData[pdKey]);
        if (camel && price !== null) {
          window.generalMealPlanPrices = window.generalMealPlanPrices || {};
          window.generalMealPlanPrices[camel] = price;
          window.mealPlanPrices[camel] = applyCommission(price);
        }
      }
    });
    
    // Update room prices (store general price on room.generalPrice and set commissioned room.price)
    for (let i = 1; i <= 20; i++) {
      const roomKey = `room${i}_price`;
      if (priceData[roomKey] !== undefined && window.roomsData[i - 1]) {
        const price = parsePrice(priceData[roomKey]);
        const general = price !== null ? price : (window.roomsData[i - 1].generalPrice || window.roomsData[i - 1].price);
        window.roomsData[i - 1].generalPrice = general;
        window.roomsData[i - 1].price = applyCommission(general);
      }
    }
    
    console.log('✓ Prices successfully updated from Google Sheets');

    // Build an array of rooms that were actually fetched from the sheet
    const updatedRoomPrices = [];
    for (let i = 1; i <= 20; i++) {
      const roomKey = `room${i}_price`;
      if (priceData[roomKey] !== undefined && window.roomsData[i - 1]) {
        updatedRoomPrices.push({ [`Room${i}`]: window.roomsData[i - 1].price });
      }
    }

    console.log('Updated Prices:', {
      guestPrice: window.guestPrice,
      childPrice: window.childPrice,
      mealPlanPrices: window.mealPlanPrices,
      roomPrices: updatedRoomPrices
    });
    
    // Re-render the room cards with updated prices
    if (typeof renderRooms === 'function') {
      renderRooms();
    }
    // Update meal plan dropdown options if function exists
    if (typeof updateMealPlanOptions === 'function') {
      updateMealPlanOptions();
    }
    
    return true;
    
  } catch (error) {
    console.error('Error fetching prices from Google Sheets:', error);
    console.warn('Using default prices. Please check your Google Sheets configuration.');
    return false;
  }
}

// Update meal plan select options based on `window.mealPlanPrices`
function updateMealPlanOptions() {
  const select = document.getElementById("mealPlan")
  if (!select) return

  const mealPrices = window.mealPlanPrices || { none: 0, breakfast: 500, halfBoard: 1000, fullBoard: 1500 }
  const labels = {
    none: "Room Only (No Meals)",
    breakfast: "Breakfast Only",
    halfBoard: "Half Board (Breakfast + Dinner)",
    fullBoard: "Full Board (All Meals)",
  }

  const order = ["none", "breakfast", "halfBoard", "fullBoard"]
  const currentValue = select.value

  // Rebuild options
  select.innerHTML = ""
  order.forEach((key) => {
    const opt = document.createElement("option")
    opt.value = key
    const price = Number(mealPrices[key]) || 0
    const per = key === "none" ? "" : "/person"
    opt.text = `${labels[key]} - ₹${price.toLocaleString()}${per}`
    select.appendChild(opt)
  })

  // Restore previous selection if still valid
  if (order.includes(currentValue)) select.value = currentValue
}

// Set minimum dates for check-in/check-out
function setMinDates() {
  const today = new Date().toISOString().split("T")[0]
  document.getElementById("checkIn").min = today
  document.getElementById("checkOut").min = today
}

// Calculate total price
function calculatePrice() {
  if (!currentRoom) return

  const numRooms = Number.parseInt(document.getElementById("numRooms").value) || 1
  let numAdults = Number.parseInt(document.getElementById("numAdults").value) || 1
  const numChildren = Number.parseInt(document.getElementById("numChildren").value) || 0
  const checkIn = document.getElementById("checkIn").value
  const checkOut = document.getElementById("checkOut").value
  const mealPlan = document.getElementById("mealPlan").value

  // Read dynamic prices from global window (updated by data.js fetch)
  const guestPrice = window.guestPrice || 500
  const childPrice = window.childPrice || 250
  const mealPlanPrices = window.mealPlanPrices || {
    none: 0,
    breakfast: 500,
    halfBoard: 1000,
    fullBoard: 1500,
  }

  let numNights = 1

  if (checkIn && checkOut) {
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    const diffTime = checkOutDate - checkInDate
    numNights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)))

    // Update checkout min date
    document.getElementById("checkOut").min = checkIn
  }

  // Enforce hard cap: total persons (adults + children) cannot exceed 3 per room
  const maxPersons = numRooms * 3
  let totalPersons = numAdults + numChildren
  if (totalPersons > maxPersons) {
    // Reduce children first to fit within cap, then adults if needed (keep adults on priority)
    let overflow = totalPersons - maxPersons
    if (numChildren >= overflow) {
      numChildren = numChildren - overflow
    } else {
      // remove all children first, then reduce adults by remaining overflow
      overflow = overflow - numChildren
      numChildren = 0
      // ensure at least 1 adult remains
      numAdults = Math.max(1, numAdults - overflow)
    }
    document.getElementById("numAdults").value = numAdults
    document.getElementById("numChildren").value = numChildren
    // Do not show limit note during automatic enforcement; only show on user attempt in handleCounterClick
  }

    // Determine included guests capacity: 2 persons per room (adults or children)
    const includedGuests = numRooms * 2
    let remainingIncluded = includedGuests

    // Allocate included slots to adults first, then children
    const includedAdults = Math.min(numAdults, remainingIncluded)
    remainingIncluded -= includedAdults
    const includedChildren = Math.min(numChildren, remainingIncluded)
    remainingIncluded -= includedChildren

    // Extra (chargeable) guests are those beyond the included capacity
    const extraAdults = Math.max(0, numAdults - includedAdults)
    const extraChildren = Math.max(0, numChildren - includedChildren)

    // Update visible counts/labels for the price-breakup
    if (roomCountEl) roomCountEl.textContent = numRooms
    if (extraAdultCountEl) extraAdultCountEl.textContent = extraAdults
    if (extraChildCountEl) extraChildCountEl.textContent = extraChildren

    // Human-friendly meal plan names
    const mealPlanDisplayNames = {
      none: "Room Only",
      breakfast: "Breakfast Only",
      halfBoard: "Half Board",
      fullBoard: "Full Board",
    }
    const mealDisplay = mealPlanDisplayNames[mealPlan] || mealPlan
    if (mealPlanNameEl) mealPlanNameEl.textContent = mealDisplay

    // Per-night components
    const perNightRoomCost = currentRoom.price * numRooms
    const perNightAdultsCost = guestPrice * extraAdults
    const perNightChildrenCost = childPrice * extraChildren
    const mealPlanPrice = mealPlanPrices[mealPlan] || 0
    const totalGuests = numAdults + numChildren
    const perNightMealCost = mealPlanPrice * totalGuests

    // Sum per-night components. Show all breakup values as per 1 night
    const perNightTotal = perNightRoomCost + perNightAdultsCost + perNightChildrenCost + perNightMealCost
    const totalPrice = perNightTotal // Note: intentionally per-night (not multiplied by nights)

    // Show per-night totals in the breakup (do NOT multiply by number of nights)
    const roomCost = perNightRoomCost
    const adultsCost = perNightAdultsCost
    const childrenCost = perNightChildrenCost
    const mealCost = perNightMealCost

    // Update night count and grand total (grand = per-night Sum Total * number of nights)
    if (nightCountEl) nightCountEl.textContent = numNights
    if (nightsValueEl) nightsValueEl.textContent = numNights
    const grand = perNightTotal * numNights
    if (grandTotalEl) grandTotalEl.textContent = `₹${grand.toLocaleString()}`

    roomCostBreakupEl.textContent = `+ ₹${roomCost.toLocaleString()}`
    adultCostBreakupEl.textContent = `+ ₹${adultsCost.toLocaleString()}`
    childCostBreakupEl.textContent = `+ ₹${childrenCost.toLocaleString()}`
    mealCostBreakupEl.textContent = `+ ₹${mealCost.toLocaleString()}`
    totalPriceEl.textContent = `₹${totalPrice.toLocaleString()}`
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault()

  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity()
    return
  }

  // Validate business fields if checked
  if (businessBooking.checked) {
    const gstin = document.getElementById("gstin").value
    const companyName = document.getElementById("companyName").value
    const companyAddress = document.getElementById("companyAddress").value

    if (!gstin || !companyName || !companyAddress) {
      alert("Please fill in all business details")
      return
    }
  }

  // Collect form data
  const formData = {
    room: currentRoom.title,
    roomPrice: currentRoom.price,
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    checkIn: document.getElementById("checkIn").value,
    checkOut: document.getElementById("checkOut").value,
    mealPlan: document.getElementById("mealPlan").value,
    numRooms: document.getElementById("numRooms").value,
    numAdults: document.getElementById("numAdults").value,
    numChildren: document.getElementById("numChildren").value,
    specialRequest: document.getElementById("specialRequest").value,
    isBusinessBooking: businessBooking.checked,
    totalPrice: totalPriceEl.textContent,
  }

  if (businessBooking.checked) {
    formData.gstin = document.getElementById("gstin").value
    formData.companyName = document.getElementById("companyName").value
    formData.companyAddress = document.getElementById("companyAddress").value
  }

  // Generate Booking ID and prepare data to send to Google Sheet via Apps Script
  const bookingID = generateBookingID()
  formData.bookingID = bookingID
  formData.roomId = currentRoom && currentRoom.id ? currentRoom.id : ''

  // Build the row to match the sheet headings provided by the user
  // Order: Booking_ID, Sheet_name, Hotel_ID, Hotel_name, Full_name, Email, Phone,
  // Check_in_date, Check_out_date, Meal_plan, Room_name, Room_id, n_rooms,
  // n_adults, n_child, Special_request, Business_booking, Gstin, Company_name,
  // Room13_Price, Company_address
  // Resolve hotel ID: prefer window.hotel_ID, fall back to `hotel_ID` defined in data.js
  const effectiveHotelID = (typeof window !== 'undefined' && window.hotel_ID !== undefined)
    ? window.hotel_ID
    : (typeof hotel_ID !== 'undefined' ? hotel_ID : '')

  // The spreadsheet file has a tab named 'Sheet1' where rows should be appended.
  // We must send payload.sheetName = 'Sheet1' so Apps Script appends to that tab,
  // and put the user-configured `SHEET_NAME` value into the row's "Sheet Name" column.
  const appendTabName = 'Sheet1'
  const sheetNameForRow = (typeof window !== 'undefined' && window.SHEET_NAME)
    ? window.SHEET_NAME
    : (typeof SHEET_NAME !== 'undefined' ? SHEET_NAME : '')

  // Build row to match the user's spreadsheet column order:
  // [Booking_ID, Sheet_name, Hotel_ID, Hotel_name, Full_name, Email, Phone,
  //  Check_in_date, Check_out_date, Meal_plan, Room_name, Room_id, n_rooms,
  //  n_adults, n_child, Special_request, Business_booking, Gstin, Company_name,
  //  Company_address, Hotel_url, Amount_payable]
  // Hotel_url: current window URL; Amount_payable: numeric grand total (₹ removed)
  const hotelUrl = (typeof window !== 'undefined' && window.location && window.location.href) ? window.location.href : ''
  // Amount payable: prefer `grandTotalEl` text if present, else `formData.totalPrice`
  const rawAmountText = (typeof window !== 'undefined' && typeof grandTotalEl !== 'undefined' && grandTotalEl && grandTotalEl.textContent)
    ? grandTotalEl.textContent
    : (formData.totalPrice || '')
  const amountNumeric = ('' + rawAmountText).replace(/[^0-9.\-]/g, '')
  const row = [
    bookingID || '', // Booking_ID
    sheetNameForRow || '', // Sheet_name (value from data.js)
    effectiveHotelID || '', // Hotel_ID
    hotel_name || '', // Hotel_name
    formData.fullName || '', // Full_name
    formData.email || '', // Email
    formData.phone || '', // Phone
    formFormValueOrEmpty(formData.checkIn), // Check_in_date
    formFormValueOrEmpty(formData.checkOut), // Check_out_date
    formData.mealPlan || '', // Meal_plan
    formData.room || '', // Room_name
    formData.roomId || '', // Room_id
    formData.numRooms || '', // n_rooms
    formData.numAdults || '', // n_adults
    formData.numChildren || '', // n_child
    formData.specialRequest || '', // Special_request
    formData.isBusinessBooking ? 'Yes' : 'No', // Business_booking
    formData.gstin || '', // Gstin
    formData.companyName || '', // Company_name
    formData.companyAddress || '', // Company_address
    hotelUrl || '', // Hotel_url (current page URL)
    amountNumeric || '', // Amount_payable (numeric, ₹ removed)
  ]

  // Helper to ensure blank strings instead of undefined/null are sent
  function formFormValueOrEmpty(v) { return (v === undefined || v === null) ? '' : v }

  // Send to Google Apps Script Web App (deployed) which will append the row
  if (APPS_SCRIPT_URL && APPS_SCRIPT_URL.indexOf('REPLACE_WITH_ID') === -1) {
    // Use URL-encoded form data to avoid preflight/CORS issues with JSON
    // Apps Script expects `values` parameter to contain a JSON string of the full payload
    const formPayload = new URLSearchParams()
    // Send to the actual tab 'Sheet1' so Apps Script appends into that tab.
    formPayload.append('values', JSON.stringify({ sheetName: appendTabName, values: row }))
    console.log('Sending booking payload to Apps Script (form-encoded):', { sheetName: appendTabName, values: row })

    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      body: formPayload,
    })
      .then(async (res) => {
        // Try to parse JSON body for helpful debugging
        let json = {}
        try { json = await res.json() } catch (e) { json = {} }
        return { ok: res.ok, status: res.status, body: json }
      })
      .then((result) => {
        if (result && result.body && result.body.status === 'success') {
          alert(`Booking submitted successfully!\n\nBooking ID: ${bookingID}\nRoom: ${formData.room}\nTotal: ${formData.totalPrice}\n\nWe will contact you shortly at ${formData.email}`)
        } else {
          console.warn('Apps Script response:', result)
          alert(`Booking submitted locally. Booking ID: ${bookingID}\n(Unable to save to sheet right now)`)
        }
      })
      .catch((err) => {
        console.error('Error sending booking to sheet:', err && err.message ? err.message : err, '\nRow payload:', row)
        alert(`Booking submitted locally. Booking ID: ${bookingID}\n(Failed to send to sheet)`)
      })
      .finally(() => {
        bookingModal.classList.remove('active')
        bookingForm.reset()
      })
  } else {
    console.warn('APPS_SCRIPT_URL not configured; skipping sheet send')
    alert(`Booking submitted successfully!\n\nBooking ID: ${bookingID}\nRoom: ${formData.room}\nTotal: ${formData.totalPrice}\n\nWe will contact you shortly at ${formData.email}`)
    bookingModal.classList.remove('active')
    bookingForm.reset()
  }
}

// ==================== INITIALIZE ON PAGE LOAD ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Carousel
    new ImageCarousel();

    // Set Welcome Note
    const welcomeContent = document.getElementById('welcomeContent');
    if (welcomeContent) {
        welcomeContent.textContent = welcomeNote;
    }

    // Initialize Contact Section
    renderContactItems();
    setMapUrl();

    // Apply commission to default/general prices so UI shows commissioned prices
    // Convert existing globals (from data.js) which are general into commissioned values
    try {
      // Guest & child
      window.generalGuestPrice = window.generalGuestPrice || window.guestPrice || 500
      window.guestPrice = applyCommission(window.generalGuestPrice)

      window.generalChildPrice = window.generalChildPrice || window.childPrice || 250
      window.childPrice = applyCommission(window.generalChildPrice)

      // Meal plans
      window.generalMealPlanPrices = window.generalMealPlanPrices || {}
      window.mealPlanPrices = window.mealPlanPrices || { none:0, breakfast:500, halfBoard:1000, fullBoard:1500 }
      Object.keys(window.mealPlanPrices).forEach((k) => {
        if (window.generalMealPlanPrices[k] === undefined) window.generalMealPlanPrices[k] = window.mealPlanPrices[k]
        window.mealPlanPrices[k] = applyCommission(window.generalMealPlanPrices[k])
      })

      // Rooms: preserve generalPrice and set commissioned room.price
      if (Array.isArray(window.roomsData)) {
        window.roomsData.forEach((r) => {
          if (r) {
            r.generalPrice = r.generalPrice || r.price || 0
            r.price = applyCommission(r.generalPrice)
          }
        })
      }
    } catch (err) {
      console.warn('Error applying commission defaults:', err)
    }

    // Initialize Rooms Section
    initRooms();

    // Fetch prices from Google Sheets
    fetchPricesFromGoogleSheets();
});
