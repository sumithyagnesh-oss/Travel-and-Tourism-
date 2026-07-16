// Enhanced India Travel Website JavaScript with GPS and Booking functionality

// GPS coordinates data
const citiesCoordinates = {
  "Mumbai": {"lat": 19.076090, "lng": 72.877426, "state": "Maharashtra"},
  "Delhi": {"lat": 28.679079, "lng": 77.069710, "state": "Delhi"},
  "Bangalore": {"lat": 12.971599, "lng": 77.594566, "state": "Karnataka"},
  "Chennai": {"lat": 13.067439, "lng": 80.237617, "state": "Tamil Nadu"},
  "Jaipur": {"lat": 26.907524, "lng": 75.739639, "state": "Rajasthan"},
  "Goa": {"lat": 15.299326, "lng": 74.123993, "state": "Goa"},
  "Kolkata": {"lat": 22.572646, "lng": 88.363895, "state": "West Bengal"},
  "Hyderabad": {"lat": 17.387140, "lng": 78.491684, "state": "Telangana"},
  "Udaipur": {"lat": 24.571270, "lng": 73.691544, "state": "Rajasthan"},
  "Agra": {"lat": 27.176670, "lng": 78.008072, "state": "Uttar Pradesh"},
  "Coimbatore": {"lat": 11.016845, "lng": 76.955833, "state": "Tamil Nadu"},
  "Havelock": {"lat": 12.009910, "lng": 92.961632, "state": "Andaman & Nicobar"}
};

// Hotels data with GPS coordinates
const hotelsData = {
  "luxury": [
    {"name": "Taj Lake Palace", "city": "Udaipur", "rating": 5, "price_range": "15000-30000", "amenities": ["Spa", "Lake View", "Restaurant", "Pool"], "coordinates": {"lat": 24.576340, "lng": 73.678581}, "address": "Lake Pichola, Udaipur, Rajasthan"},
    {"name": "The Oberoi Udaivilas", "city": "Udaipur", "rating": 5, "price_range": "20000-40000", "amenities": ["Pool", "Spa", "Lake View", "Fine Dining"], "coordinates": {"lat": 24.576500, "lng": 73.680000}, "address": "Haridasji Ki Magri, Udaipur, Rajasthan"},
    {"name": "The Oberoi Mumbai", "city": "Mumbai", "rating": 5, "price_range": "18000-35000", "amenities": ["Sea View", "Spa", "Business Center", "Pool"], "coordinates": {"lat": 19.046240, "lng": 72.865300}, "address": "Nariman Point, Mumbai, Maharashtra"},
    {"name": "Taj Mahal Palace", "city": "Mumbai", "rating": 5, "price_range": "20000-45000", "amenities": ["Heritage", "Multiple Restaurants", "Spa", "Sea View"], "coordinates": {"lat": 18.921984, "lng": 72.833130}, "address": "Apollo Bunder, Colaba, Mumbai, Maharashtra"},
    {"name": "The Oberoi New Delhi", "city": "Delhi", "rating": 5, "price_range": "16000-32000", "amenities": ["Golf Course View", "Spa", "Fine Dining", "Pool"], "coordinates": {"lat": 28.593560, "lng": 77.230690}, "address": "Dr. Zakir Hussain Marg, New Delhi"},
    {"name": "The Imperial New Delhi", "city": "Delhi", "rating": 5, "price_range": "14000-28000", "amenities": ["Heritage", "Garden", "Spa", "Multiple Restaurants"], "coordinates": {"lat": 28.626370, "lng": 77.218840}, "address": "Janpath, Connaught Place, New Delhi"},
    {"name": "The Leela Palace Chennai", "city": "Chennai", "rating": 5, "price_range": "12000-25000", "amenities": ["Beach Proximity", "Spa", "Pool", "Business Center"], "coordinates": {"lat": 13.034440, "lng": 80.248550}, "address": "Adyar Seaface, Chennai, Tamil Nadu"},
    {"name": "The Oberoi Amarvilas", "city": "Agra", "rating": 5, "price_range": "25000-50000", "amenities": ["Taj Mahal View", "Pool", "Spa", "Fine Dining"], "coordinates": {"lat": 27.171210, "lng": 78.042070}, "address": "Taj East Gate Road, Agra, Uttar Pradesh"},
    {"name": "Rambagh Palace", "city": "Jaipur", "rating": 5, "price_range": "18000-35000", "amenities": ["Heritage Palace", "Gardens", "Spa", "Pool"], "coordinates": {"lat": 26.885800, "lng": 75.810470}, "address": "Bhawani Singh Road, Jaipur, Rajasthan"},
    {"name": "Grand Hyatt Goa", "city": "Goa", "rating": 5, "price_range": "15000-30000", "amenities": ["Beach Access", "Pool", "Spa", "Multiple Restaurants"], "coordinates": {"lat": 15.470840, "lng": 73.827870}, "address": "P.O Goa University, Bambolim, Goa"}
  ],
  "midrange": [
    {"name": "Novotel Jaipur", "city": "Jaipur", "rating": 4, "price_range": "4000-8000", "amenities": ["Pool", "Gym", "Restaurant", "Conference Halls"], "coordinates": {"lat": 26.885300, "lng": 75.795080}, "address": "2 Sardar Patel Marg, Jaipur, Rajasthan"},
    {"name": "DoubleTree Hilton Agra", "city": "Agra", "rating": 4, "price_range": "5000-9000", "amenities": ["Pool", "Gym", "Restaurant", "Business Center"], "coordinates": {"lat": 27.210500, "lng": 78.033950}, "address": "Taj Nagri Phase 1, Fatehabad Road, Agra"},
    {"name": "The Residency Towers", "city": "Coimbatore", "rating": 4, "price_range": "3500-7000", "amenities": ["Business Center", "Restaurant", "Gym", "Conference Rooms"], "coordinates": {"lat": 11.014020, "lng": 76.961330}, "address": "DB Road, RS Puram, Coimbatore, Tamil Nadu"},
    {"name": "GreenPark Chennai", "city": "Chennai", "rating": 4, "price_range": "4500-8500", "amenities": ["Restaurant", "Pool", "Business Center", "Gym"], "coordinates": {"lat": 13.058680, "lng": 80.250480}, "address": "145 Velachery Road, Guindy, Chennai, Tamil Nadu"},
    {"name": "The Chancery", "city": "Bangalore", "rating": 4, "price_range": "4000-7500", "amenities": ["Japanese Restaurant", "Gym", "Business Center", "Pool"], "coordinates": {"lat": 12.956890, "lng": 77.636970}, "address": "10/6 Lavelle Road, Bangalore, Karnataka"}
  ],
  "budget": [
    {"name": "Zostel Mumbai", "city": "Mumbai", "rating": 3, "price_range": "800-2000", "amenities": ["Hostel", "Common Area", "WiFi", "24/7 Reception"], "coordinates": {"lat": 19.061950, "lng": 72.835570}, "address": "1906 Sadashiv Lane, Fort, Mumbai, Maharashtra"},
    {"name": "Madpackers Delhi", "city": "Delhi", "rating": 3, "price_range": "600-1800", "amenities": ["Hostel", "Common Kitchen", "WiFi", "Tours"], "coordinates": {"lat": 28.616670, "lng": 77.237220}, "address": "Hotel Rak International, Paharganj, New Delhi"},
    {"name": "Hotel Amar Kothi", "city": "Udaipur", "rating": 3, "price_range": "1200-2500", "amenities": ["Heritage Style", "Restaurant", "WiFi", "City View"], "coordinates": {"lat": 24.580540, "lng": 73.682870}, "address": "Outside Surajpole, Udaipur, Rajasthan"},
    {"name": "Hotel CAG Pride", "city": "Coimbatore", "rating": 3, "price_range": "1000-2200", "amenities": ["Restaurant", "WiFi", "Room Service", "Parking"], "coordinates": {"lat": 11.008560, "lng": 76.963680}, "address": "1055 Avinashi Road, Coimbatore, Tamil Nadu"},
    {"name": "Sea Shell Resort", "city": "Havelock", "rating": 3, "price_range": "3000-6000", "amenities": ["Beach Access", "Restaurant", "Water Sports", "Garden"], "coordinates": {"lat": 11.994420, "lng": 92.959570}, "address": "Beach No. 3, Govind Nagar, Havelock Island"}
  ]
};

// Restaurants data with GPS coordinates
const restaurantsData = {
  "vegetarian_chains": [
    {"name": "Haldiram's", "cuisine": "North Indian", "cost_for_2": "600-800", "specialties": ["Thali", "Sweets", "Chaat", "Street Food"], "locations": [
      {"city": "Delhi", "coordinates": {"lat": 28.635308, "lng": 77.224464}, "address": "Chandni Chowk, Old Delhi"},
      {"city": "Mumbai", "coordinates": {"lat": 19.017615, "lng": 72.856164}, "address": "Nariman Point, Mumbai"},
      {"city": "Bangalore", "coordinates": {"lat": 12.972442, "lng": 77.580643}, "address": "Koramangala, Bangalore"}
    ]},
    {"name": "Saravana Bhavan", "cuisine": "South Indian", "cost_for_2": "400-600", "specialties": ["Dosa", "Idli", "Thali", "Filter Coffee"], "locations": [
      {"city": "Chennai", "coordinates": {"lat": 13.082680, "lng": 80.270721}, "address": "T. Nagar, Chennai"},
      {"city": "Delhi", "coordinates": {"lat": 28.629025, "lng": 77.216721}, "address": "Connaught Place, New Delhi"},
      {"city": "Mumbai", "coordinates": {"lat": 19.058026, "lng": 72.835570}, "address": "King Circle, Mumbai"}
    ]},
    {"name": "Bikanervala", "cuisine": "North Indian", "cost_for_2": "500-700", "specialties": ["Sweets", "Chaat", "Thali", "Snacks"], "locations": [
      {"city": "Delhi", "coordinates": {"lat": 28.545762, "lng": 77.206993}, "address": "Lajpat Nagar, New Delhi"},
      {"city": "Jaipur", "coordinates": {"lat": 26.912434, "lng": 75.787270}, "address": "MI Road, Jaipur"}
    ]}
  ],
  "non_vegetarian": [
    {"name": "Barbeque Nation", "cuisine": "Multi-cuisine", "cost_for_2": "1200-1800", "specialties": ["BBQ Buffet", "Grilled Items", "Live Grill", "Desserts"], "locations": [
      {"city": "Mumbai", "coordinates": {"lat": 19.075984, "lng": 72.877656}, "address": "Linking Road, Bandra West"},
      {"city": "Bangalore", "coordinates": {"lat": 12.935242, "lng": 77.624480}, "address": "Koramangala 5th Block"},
      {"city": "Delhi", "coordinates": {"lat": 28.569996, "lng": 77.325973}, "address": "Select City Walk, Saket"}
    ]},
    {"name": "Paradise Biryani", "cuisine": "Hyderabadi", "cost_for_2": "800-1200", "specialties": ["Hyderabadi Biryani", "Kebabs", "Haleem", "Mutton Dishes"], "locations": [
      {"city": "Hyderabad", "coordinates": {"lat": 17.435921, "lng": 78.391319}, "address": "Paradise Circle, Secunderabad"},
      {"city": "Chennai", "coordinates": {"lat": 13.067439, "lng": 80.237617}, "address": "Anna Nagar, Chennai"}
    ]}
  ],
  "fine_dining": [
    {"name": "Indian Accent", "cuisine": "Modern Indian", "cost_for_2": "3000-5000", "specialties": ["Contemporary Indian", "Tasting Menu", "Wine Pairing", "Innovative Dishes"], "locations": [
      {"city": "Delhi", "coordinates": {"lat": 28.593560, "lng": 77.230690}, "address": "The Lodhi Hotel, New Delhi"},
      {"city": "Mumbai", "coordinates": {"lat": 19.046240, "lng": 72.865300}, "address": "The Oberoi, Nariman Point"}
    ]},
    {"name": "Bukhara", "cuisine": "North Indian", "cost_for_2": "4000-6000", "specialties": ["Tandoor", "Dal Bukhara", "Kebabs", "Rustic Ambiance"], "locations": [
      {"city": "Delhi", "coordinates": {"lat": 28.613939, "lng": 77.229210}, "address": "ITC Maurya, Diplomatic Enclave"}
    ]}
  ]
};

const tripCostData = {
  "budget": {
    "daily_cost_inr": "1400-2900",
    "daily_cost_usd": "17-35",
    "accommodation": "600-1000",
    "food": "300-600", 
    "transport": "200-500",
    "activities": "300-800"
  },
  "comfort": {
    "daily_cost_inr": "4700-8000",
    "daily_cost_usd": "56-96", 
    "accommodation": "2000-3500",
    "food": "1000-1800",
    "transport": "700-1200",
    "activities": "1000-1500"
  },
  "luxury": {
    "daily_cost_inr": "10000+",
    "daily_cost_usd": "120+",
    "accommodation": "8000-25000",
    "food": "2000-5000",
    "transport": "1500-3000", 
    "activities": "2000-5000"
  }
};

// Global GPS variables
let currentCurrency = 'INR';
let userLocation = null;
let locationWatchId = null;
let autoRefreshInterval = null;
let isAutoRefreshEnabled = false;
let currentCoordinateFormat = 'decimal';
let lastLocationUpdate = null;
let positionCache = null;

// Application data variables
let allHotels = [];
let allRestaurants = [];
let filteredHotels = [];
let filteredRestaurants = [];
let hotelsMap = null;
let restaurantsMap = null;
let routeMap = null;
let hotelsMarkers = [];
let restaurantsMarkers = [];

// Booking system variables
let bookings = [];
let currentBookingVenue = null;
let currentBookingType = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeHotels();
    initializeRestaurants();
    setupEventListeners();
    populateCityFilters();
    initializeGPSStatus();
    checkForCachedLocation();
    initializeBookingSystem();
    populateTimeSlots();
    setMinDates();
});

// Booking System Functions
function initializeBookingSystem() {
    // Load bookings from session storage (simplified for demo)
    try {
        const savedBookings = sessionStorage.getItem('travelBookings');
        if (savedBookings) {
            bookings = JSON.parse(savedBookings);
        }
    } catch (e) {
        console.error('Error loading bookings:', e);
        bookings = [];
    }
    renderBookings();
}

function populateTimeSlots() {
    const timeSelect = document.getElementById('reservation-time');
    if (!timeSelect) return;
    
    // Clear existing options except the first one
    timeSelect.innerHTML = '<option value="">Select Time</option>';
    
    // Add time slots from 11:00 to 23:00
    for (let hour = 11; hour <= 23; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = timeString;
            option.textContent = timeString;
            timeSelect.appendChild(option);
        }
    }
}

function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    const checkInDate = document.getElementById('check-in-date');
    const checkOutDate = document.getElementById('check-out-date');
    const reservationDate = document.getElementById('reservation-date');
    
    if (checkInDate) checkInDate.min = today;
    if (checkOutDate) checkOutDate.min = today;
    if (reservationDate) reservationDate.min = today;
}

function openBookingModal(venue, type) {
    try {
        // Handle venue data properly
        if (typeof venue === 'string') {
            venue = JSON.parse(venue.replace(/&quot;/g, '"'));
        }
        
        currentBookingVenue = venue;
        currentBookingType = type;
        
        const modal = document.getElementById('booking-modal');
        const title = document.getElementById('booking-modal-title');
        const hotelFields = document.getElementById('hotel-booking-fields');
        const restaurantFields = document.getElementById('restaurant-booking-fields');
        
        if (type === 'hotel') {
            title.textContent = '🏨 Book Hotel - ' + venue.name;
            hotelFields.classList.remove('hidden');
            restaurantFields.classList.add('hidden');
        } else {
            title.textContent = '🍽️ Book Restaurant - ' + venue.name;
            hotelFields.classList.add('hidden');
            restaurantFields.classList.remove('hidden');
        }
        
        // Clear form
        const form = document.getElementById('booking-form');
        if (form) form.reset();
        
        modal.classList.remove('hidden');
        
        // Focus trap
        const nameInput = document.getElementById('booking-name');
        if (nameInput) {
            setTimeout(() => nameInput.focus(), 100);
        }
    } catch (error) {
        console.error('Error opening booking modal:', error);
        alert('Error opening booking form. Please try again.');
    }
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.add('hidden');
    currentBookingVenue = null;
    currentBookingType = null;
}

function validateBookingForm() {
    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('booking-phone').value.trim();
    const email = document.getElementById('booking-email').value.trim();
    const guests = document.getElementById('num-guests').value;
    
    const errors = [];
    
    if (!name) errors.push('Full name is required');
    if (!phone) errors.push('Phone number is required');
    if (!email) errors.push('Email address is required');
    if (!guests || guests < 1) errors.push('Number of guests must be at least 1');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (currentBookingType === 'hotel') {
        const checkIn = document.getElementById('check-in-date').value;
        const checkOut = document.getElementById('check-out-date').value;
        
        if (!checkIn) errors.push('Check-in date is required');
        if (!checkOut) errors.push('Check-out date is required');
        
        if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
            errors.push('Check-out date must be after check-in date');
        }
        
        // Check if dates are in the past
        const today = new Date().toISOString().split('T')[0];
        if (checkIn && checkIn < today) {
            errors.push('Check-in date cannot be in the past');
        }
        
    } else {
        const reservationDate = document.getElementById('reservation-date').value;
        const reservationTime = document.getElementById('reservation-time').value;
        
        if (!reservationDate) errors.push('Reservation date is required');
        if (!reservationTime) errors.push('Reservation time is required');
        
        // Check if date is in the past
        const today = new Date().toISOString().split('T')[0];
        if (reservationDate && reservationDate < today) {
            errors.push('Reservation date cannot be in the past');
        }
    }
    
    return errors;
}

function submitBooking() {
    const errors = validateBookingForm();
    
    if (errors.length > 0) {
        alert('Please fix the following errors:\n\n' + errors.join('\n'));
        return;
    }
    
    const bookingData = {
        id: generateBookingId(),
        venue_name: currentBookingVenue.name,
        venue_type: currentBookingType === 'hotel' ? 'Hotel' : 'Restaurant',
        user_name: document.getElementById('booking-name').value.trim(),
        phone: document.getElementById('booking-phone').value.trim(),
        email: document.getElementById('booking-email').value.trim(),
        guests: parseInt(document.getElementById('num-guests').value),
        special_requests: document.getElementById('special-requests').value.trim(),
        venue_address: currentBookingVenue.address,
        venue_coordinates: currentBookingVenue.coordinates,
        booking_date: new Date().toISOString(),
        status: 'confirmed'
    };
    
    if (currentBookingType === 'hotel') {
        bookingData.check_in = document.getElementById('check-in-date').value;
        bookingData.check_out = document.getElementById('check-out-date').value;
    } else {
        bookingData.reservation_date = document.getElementById('reservation-date').value;
        bookingData.reservation_time = document.getElementById('reservation-time').value;
    }
    
    // Add booking to list
    bookings.unshift(bookingData);
    
    // Save to session storage
    try {
        sessionStorage.setItem('travelBookings', JSON.stringify(bookings));
    } catch (e) {
        console.error('Error saving bookings:', e);
    }
    
    // Close booking modal
    closeBookingModal();
    
    // Show confirmation modal
    showConfirmationModal(bookingData);
    
    // Show success toast
    showToast('Booking confirmed successfully!');
    
    // Update bookings display
    renderBookings();
}

function generateBookingId() {
    return 'BOOK-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();
}

function showConfirmationModal(booking) {
    const modal = document.getElementById('confirmation-modal');
    const content = document.getElementById('confirmation-content');
    
    let bookingDetails = '';
    if (booking.venue_type === 'Hotel') {
        bookingDetails = `
            <div class="detail-row">
                <strong>Check-in:</strong>
                <span>${formatDate(booking.check_in)}</span>
            </div>
            <div class="detail-row">
                <strong>Check-out:</strong>
                <span>${formatDate(booking.check_out)}</span>
            </div>
        `;
    } else {
        bookingDetails = `
            <div class="detail-row">
                <strong>Reservation Date:</strong>
                <span>${formatDate(booking.reservation_date)}</span>
            </div>
            <div class="detail-row">
                <strong>Reservation Time:</strong>
                <span>${booking.reservation_time}</span>
            </div>
        `;
    }
    
    content.innerHTML = `
        <h2>🎉 Booking Confirmed!</h2>
        <p>Your booking has been successfully confirmed. Please save your booking ID for future reference.</p>
        
        <div class="booking-id">${booking.id}</div>
        
        <div class="confirmation-details">
            <h4>📋 Booking Details</h4>
            <div class="detail-row">
                <strong>Venue:</strong>
                <span>${booking.venue_name}</span>
            </div>
            <div class="detail-row">
                <strong>Type:</strong>
                <span>${booking.venue_type}</span>
            </div>
            <div class="detail-row">
                <strong>Guest Name:</strong>
                <span>${booking.user_name}</span>
            </div>
            <div class="detail-row">
                <strong>Phone:</strong>
                <span>${booking.phone}</span>
            </div>
            <div class="detail-row">
                <strong>Email:</strong>
                <span>${booking.email}</span>
            </div>
            ${bookingDetails}
            <div class="detail-row">
                <strong>Guests:</strong>
                <span>${booking.guests}</span>
            </div>
            ${booking.special_requests ? `
                <div class="detail-row">
                    <strong>Special Requests:</strong>
                    <span>${booking.special_requests}</span>
                </div>
            ` : ''}
        </div>
    `;
    
    // Set up navigate button
    const navigateBtn = document.getElementById('navigate-to-venue-btn');
    if (navigateBtn && booking.venue_coordinates) {
        navigateBtn.onclick = () => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${booking.venue_coordinates.lat},${booking.venue_coordinates.lng}`;
            window.open(url, '_blank');
        };
    }
    
    modal.classList.remove('hidden');
}

function closeConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('hidden');
}

function showToast(message) {
    const toast = document.getElementById('success-toast');
    const messageElement = toast.querySelector('.toast-message');
    
    messageElement.textContent = message;
    toast.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideToast();
    }, 5000);
}

function hideToast() {
    const toast = document.getElementById('success-toast');
    toast.classList.add('hidden');
}

function formatDate(dateString) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function showBookings() {
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show bookings section
    const bookingsSection = document.getElementById('my-bookings');
    if (bookingsSection) {
        bookingsSection.classList.remove('hidden');
        bookingsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function renderBookings() {
    const container = document.getElementById('bookings-container');
    
    if (!container) return;
    
    if (bookings.length === 0) {
        container.innerHTML = `
            <div class="empty-bookings">
                <h3>📝 No Bookings Yet</h3>
                <p>You haven't made any bookings yet. Start exploring hotels and restaurants to make your first booking!</p>
                <div style="margin-top: var(--space-20);">
                    <button class="btn btn--primary" onclick="showSection('hotels')">🏨 Browse Hotels</button>
                    <button class="btn btn--outline" onclick="showSection('restaurants')">🍽️ Browse Restaurants</button>
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = bookings.map(booking => {
        let bookingDetails = '';
        if (booking.venue_type === 'Hotel') {
            bookingDetails = `
                <div class="info-item">
                    <div class="info-label">Check-in</div>
                    <div class="info-value">${formatDate(booking.check_in)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Check-out</div>
                    <div class="info-value">${formatDate(booking.check_out)}</div>
                </div>
            `;
        } else {
            bookingDetails = `
                <div class="info-item">
                    <div class="info-label">Reservation Date</div>
                    <div class="info-value">${formatDate(booking.reservation_date)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Time</div>
                    <div class="info-value">${booking.reservation_time}</div>
                </div>
            `;
        }
        
        return `
            <div class="booking-card" data-booking-id="${booking.id}">
                <div class="booking-header">
                    <h3 class="booking-title">${booking.venue_name}</h3>
                    <span class="booking-status confirmed">Confirmed</span>
                </div>
                <div class="booking-body">
                    <div class="booking-info">
                        <div class="info-item">
                            <div class="info-label">Booking ID</div>
                            <div class="info-value" style="font-family: var(--font-family-mono);">${booking.id}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Type</div>
                            <div class="info-value">${booking.venue_type}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Guests</div>
                            <div class="info-value">${booking.guests}</div>
                        </div>
                        ${bookingDetails}
                    </div>
                </div>
                <div class="booking-actions">
                    <button class="btn btn--outline" onclick="viewBookingDetails('${booking.id}')">
                        📋 View Details
                    </button>
                    ${booking.venue_coordinates ? `
                        <button class="btn btn--secondary" onclick="navigateToVenue(${booking.venue_coordinates.lat}, ${booking.venue_coordinates.lng})">
                            🧭 Navigate
                        </button>
                    ` : ''}
                    <button class="btn cancel-booking-btn" onclick="cancelBooking('${booking.id}')">
                        ❌ Cancel Booking
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Hide bookings section specifically
    const bookingsSection = document.getElementById('my-bookings');
    if (bookingsSection) {
        bookingsSection.classList.add('hidden');
    }
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function viewBookingDetails(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (booking) {
        showConfirmationModal(booking);
    }
}

function navigateToVenue(lat, lng) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
}

function cancelBooking(bookingId) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookings = bookings.filter(b => b.id !== bookingId);
        try {
            sessionStorage.setItem('travelBookings', JSON.stringify(bookings));
        } catch (e) {
            console.error('Error saving bookings:', e);
        }
        renderBookings();
        showToast('Booking cancelled successfully');
    }
}

// Initialize GPS status
function initializeGPSStatus() {
    updateGPSStatus('disconnected', 'GPS Disconnected');
    updateCoordinatesDisplay();
}

// Check for cached location
function checkForCachedLocation() {
    if (positionCache && (Date.now() - positionCache.timestamp) < 300000) { // 5 minutes
        userLocation = positionCache.coords;
        updateLocationUI();
        updateGPSStatus('ready', 'GPS Ready');
    }
}

// Enhanced GPS functionality
function requestHighAccuracyLocation() {
    if (!navigator.geolocation) {
        showLocationError('Geolocation is not supported by this browser.');
        return;
    }

    showModal('location-modal');
}

function enableHighAccuracyGPS() {
    closeModal('location-modal');
    
    updateGPSStatus('searching', 'Acquiring GPS Signal...');
    showLocationLoading(true);
    
    const options = {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            handleLocationSuccess(position);
        },
        function(error) {
            handleLocationError(error);
        },
        options
    );
}

function handleLocationSuccess(position) {
    const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy,
        altitude: position.coords.altitude,
        heading: position.coords.heading,
        speed: position.coords.speed
    };
    
    userLocation = coords;
    lastLocationUpdate = new Date();
    
    // Cache the position
    positionCache = {
        coords: coords,
        timestamp: Date.now()
    };
    
    updateLocationUI();
    updateGPSStatus('connected', 'GPS Connected');
    showLocationLoading(false);
    enableLocationFeatures();
    
    // Re-render with distances
    renderHotels();
    renderRestaurants();
    
    // Update maps if visible
    if (hotelsMap) {
        setTimeout(() => updateHotelsMap(), 100);
    }
    if (restaurantsMap) {
        setTimeout(() => updateRestaurantsMap(), 100);
    }
}

function handleLocationError(error) {
    updateGPSStatus('error', 'GPS Error');
    showLocationLoading(false);
    
    let message = 'Unable to get your location. ';
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message += 'Location access denied. Please enable location permissions and try again.';
            break;
        case error.POSITION_UNAVAILABLE:
            message += 'Location information is unavailable. Please try again later.';
            break;
        case error.TIMEOUT:
            message += 'Location request timed out. Please try again.';
            break;
        default:
            message += 'An unknown error occurred.';
            break;
    }
    
    showLocationError(message);
}

function showLocationError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'gps-error-notification';
    errorDiv.innerHTML = `
        <div class="error-content">
            <span class="error-icon">⚠️</span>
            <span class="error-message">${message}</span>
            <button class="error-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    document.body.appendChild(errorDiv);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 8000);
}

function showLocationLoading(show) {
    const enableBtn = document.getElementById('enable-gps-btn');
    if (enableBtn) {
        if (show) {
            enableBtn.innerHTML = '<span class="loading-spinner"></span> Acquiring GPS Signal...';
            enableBtn.disabled = true;
        } else {
            enableBtn.innerHTML = '📍 Enable High-Accuracy GPS';
            enableBtn.disabled = false;
        }
    }
}

function updateLocationUI() {
    if (!userLocation) return;
    
    // Update coordinates display
    const currentCoords = document.getElementById('current-coordinates');
    const currentAccuracy = document.getElementById('current-accuracy');
    const currentElevation = document.getElementById('current-elevation');
    const currentHeading = document.getElementById('current-heading');
    const currentSpeed = document.getElementById('current-speed');
    const lastUpdate = document.getElementById('last-update');
    
    if (currentCoords) currentCoords.textContent = formatCoordinates(userLocation.lat, userLocation.lng);
    if (currentAccuracy) currentAccuracy.textContent = userLocation.accuracy ? `±${Math.round(userLocation.accuracy)}m` : '--';
    if (currentElevation) currentElevation.textContent = userLocation.altitude ? `${Math.round(userLocation.altitude)}m` : '--';
    if (currentHeading) currentHeading.textContent = userLocation.heading ? `${Math.round(userLocation.heading)}°` : '--';
    if (currentSpeed) currentSpeed.textContent = userLocation.speed ? `${Math.round(userLocation.speed * 3.6)} km/h` : '--';
    if (lastUpdate) lastUpdate.textContent = lastLocationUpdate ? lastLocationUpdate.toLocaleTimeString() : '--';
    
    // Show location details
    const locationDetails = document.getElementById('location-details');
    if (locationDetails) {
        locationDetails.classList.remove('hidden');
    }
    
    // Update GPS status bar coordinates
    updateCoordinatesDisplay();
}

function updateGPSStatus(status, message) {
    const gpsSignal = document.getElementById('gps-signal');
    if (!gpsSignal) return;
    
    const gpsText = gpsSignal.querySelector('.gps-text');
    const gpsIcon = gpsSignal.querySelector('.gps-icon');
    const gpsAccuracy = document.getElementById('gps-accuracy');
    
    gpsSignal.className = `gps-signal ${status}`;
    if (gpsText) gpsText.textContent = message;
    
    switch(status) {
        case 'connected':
            if (gpsIcon) gpsIcon.textContent = '🛰️';
            if (gpsAccuracy && userLocation && userLocation.accuracy) {
                gpsAccuracy.textContent = `±${Math.round(userLocation.accuracy)}m`;
            }
            break;
        case 'searching':
            if (gpsIcon) gpsIcon.textContent = '📡';
            if (gpsAccuracy) gpsAccuracy.textContent = 'Acquiring...';
            break;
        case 'error':
            if (gpsIcon) gpsIcon.textContent = '❌';
            if (gpsAccuracy) gpsAccuracy.textContent = 'Error';
            break;
        default:
            if (gpsIcon) gpsIcon.textContent = '📍';
            if (gpsAccuracy) gpsAccuracy.textContent = '';
    }
}

function updateCoordinatesDisplay() {
    const coordinatesText = document.getElementById('coordinates-text');
    if (coordinatesText) {
        if (userLocation) {
            coordinatesText.textContent = formatCoordinates(userLocation.lat, userLocation.lng);
        } else {
            coordinatesText.textContent = '---.----, ---.----';
        }
    }
}

function formatCoordinates(lat, lng) {
    const format = document.getElementById('coordinate-format')?.value || currentCoordinateFormat;
    
    switch(format) {
        case 'decimal':
            return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
        case 'dms':
            return `${toDMS(lat, 'lat')}, ${toDMS(lng, 'lng')}`;
        case 'utm':
            return toUTM(lat, lng);
        default:
            return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    }
}

function toDMS(decimal, type) {
    const absolute = Math.abs(decimal);
    const degrees = Math.floor(absolute);
    const minutesFloat = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesFloat);
    const seconds = Math.round((minutesFloat - minutes) * 60 * 100) / 100;
    
    let direction;
    if (type === 'lat') {
        direction = decimal >= 0 ? 'N' : 'S';
    } else {
        direction = decimal >= 0 ? 'E' : 'W';
    }
    
    return `${degrees}°${minutes}'${seconds}"${direction}`;
}

function toUTM(lat, lng) {
    // Simplified UTM conversion for display purposes
    const zone = Math.floor((lng + 180) / 6) + 1;
    return `Zone ${zone} (Approx)`;
}

function refreshLocation() {
    if (!navigator.geolocation) {
        showLocationError('Geolocation is not supported by this browser.');
        return;
    }
    
    updateGPSStatus('searching', 'Refreshing GPS...');
    
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError,
        options
    );
}

function toggleAutoRefresh() {
    const btn = document.getElementById('auto-refresh-btn');
    
    if (isAutoRefreshEnabled) {
        // Disable auto-refresh
        clearInterval(autoRefreshInterval);
        if (locationWatchId) {
            navigator.geolocation.clearWatch(locationWatchId);
            locationWatchId = null;
        }
        isAutoRefreshEnabled = false;
        if (btn) {
            btn.classList.remove('active');
            btn.title = 'Enable auto-refresh';
        }
    } else {
        // Enable auto-refresh
        if (navigator.geolocation) {
            const options = {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 30000
            };
            
            locationWatchId = navigator.geolocation.watchPosition(
                handleLocationSuccess,
                handleLocationError,
                options
            );
            
            isAutoRefreshEnabled = true;
            if (btn) {
                btn.classList.add('active');
                btn.title = 'Disable auto-refresh';
            }
            
            updateGPSStatus('connected', 'GPS Auto-Update');
        }
    }
}

function enableLocationFeatures() {
    // Enable proximity controls
    const searchRadius = document.getElementById('search-radius');
    const restaurantSearchRadius = document.getElementById('restaurant-search-radius');
    
    if (searchRadius) {
        searchRadius.disabled = false;
    }
    if (restaurantSearchRadius) {
        restaurantSearchRadius.disabled = false;
    }
}

// Coordinate format change handler
function handleCoordinateFormatChange() {
    currentCoordinateFormat = document.getElementById('coordinate-format').value;
    updateCoordinatesDisplay();
    updateLocationUI();
}

// Map controls functions
function centerOnUser() {
    if (!userLocation) {
        alert('Location not available. Please enable GPS first.');
        return;
    }
    
    if (hotelsMap && !document.getElementById('hotels-map-container').classList.contains('hidden')) {
        hotelsMap.setView([userLocation.lat, userLocation.lng], 13);
    }
    
    if (restaurantsMap && !document.getElementById('restaurants-map-container').classList.contains('hidden')) {
        restaurantsMap.setView([userLocation.lat, userLocation.lng], 13);
    }
}

function toggleSatelliteView() {
    alert('Satellite view integration would require additional mapping service setup.');
}

function showTraffic() {
    alert('Traffic layer integration would require additional mapping service setup.');
}

function showNearbyPOIs() {
    alert('Points of Interest integration would require additional data sources.');
}

// Route sharing functions
function openInMaps(app) {
    if (!userLocation) {
        alert('Location not available.');
        return;
    }
    
    const lat = userLocation.lat;
    const lng = userLocation.lng;
    
    let url;
    switch(app) {
        case 'google':
            url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
            break;
        case 'apple':
            url = `http://maps.apple.com/?daddr=${lat},${lng}`;
            break;
        case 'waze':
            url = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
            break;
        default:
            url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    }
    
    window.open(url, '_blank');
}

function copyCoordinates() {
    if (!userLocation) {
        alert('No coordinates to copy.');
        return;
    }
    
    const coords = formatCoordinates(userLocation.lat, userLocation.lng);
    const textarea = document.getElementById('share-coordinates');
    if (textarea) {
        textarea.value = coords;
        textarea.select();
        
        try {
            document.execCommand('copy');
            alert('Coordinates copied to clipboard!');
        } catch (err) {
            alert('Unable to copy coordinates. Please copy manually.');
        }
    }
}

// Trip planning functions
function useCurrentLocationAsStart() {
    if (!userLocation) {
        alert('Location not available. Please enable GPS first.');
        return;
    }
    
    // Find nearest city
    let nearestCity = null;
    let minDistance = Infinity;
    
    Object.keys(citiesCoordinates).forEach(city => {
        const coords = citiesCoordinates[city];
        const distance = calculateDistance(userLocation.lat, userLocation.lng, coords.lat, coords.lng);
        if (distance < minDistance) {
            minDistance = distance;
            nearestCity = city;
        }
    });
    
    if (nearestCity) {
        const fromCitySelect = document.getElementById('trip-from-city');
        if (fromCitySelect) {
            fromCitySelect.value = nearestCity;
            updateCalculator();
        }
    }
}

function addWaypoint() {
    const container = document.getElementById('waypoints-container');
    if (!container) return;
    
    const waypointCount = container.children.length + 1;
    
    const waypointDiv = document.createElement('div');
    waypointDiv.className = 'waypoint-item';
    waypointDiv.innerHTML = `
        <label class="form-label">Waypoint ${waypointCount}:</label>
        <select class="form-control waypoint-select">
            <option value="">Select waypoint city</option>
            ${Object.keys(citiesCoordinates).map(city => `<option value="${city}">${city}</option>`).join('')}
        </select>
        <button type="button" class="remove-waypoint-btn" onclick="removeWaypoint(this)">×</button>
    `;
    
    container.appendChild(waypointDiv);
}

function removeWaypoint(button) {
    button.parentElement.remove();
    
    // Renumber remaining waypoints
    const waypoints = document.querySelectorAll('.waypoint-item');
    waypoints.forEach((waypoint, index) => {
        const label = waypoint.querySelector('.form-label');
        if (label) {
            label.textContent = `Waypoint ${index + 1}:`;
        }
    });
}

function calculateGPSTripCost() {
    const days = parseInt(document.getElementById('trip-days')?.value) || 1;
    const people = parseInt(document.getElementById('trip-people')?.value) || 1;
    const fromCity = document.getElementById('trip-from-city')?.value;
    const toCity = document.getElementById('trip-to-city')?.value;
    const travelStyleInput = document.querySelector('input[name="travel-style"]:checked');
    const travelStyle = travelStyleInput ? travelStyleInput.value : 'budget';
    
    if (!fromCity || !toCity) {
        alert('Please select both starting point and destination.');
        return;
    }
    
    const costData = tripCostData[travelStyle];
    
    // Calculate base costs per person per day
    const accommodationRange = costData.accommodation.split('-');
    const foodRange = costData.food.split('-');
    const transportRange = costData.transport.split('-');
    const activitiesRange = costData.activities.split('-');
    
    // Use average of ranges for calculation
    const accommodation = calculateAverage(accommodationRange[0], accommodationRange[1] || accommodationRange[0].replace('+', ''));
    const food = calculateAverage(foodRange[0], foodRange[1] || foodRange[0]);
    const transport = calculateAverage(transportRange[0], transportRange[1] || transportRange[0]);
    const activities = calculateAverage(activitiesRange[0], activitiesRange[1] || activitiesRange[0]);
    
    // Calculate distance-based transport costs
    let distanceKm = 0;
    
    const fromCoords = citiesCoordinates[fromCity];
    const toCoords = citiesCoordinates[toCity];
    
    if (fromCoords && toCoords) {
        distanceKm = calculateDistance(fromCoords.lat, fromCoords.lng, toCoords.lat, toCoords.lng);
    }
    
    // Add waypoints to calculation
    const waypoints = Array.from(document.querySelectorAll('.waypoint-select')).map(select => select.value).filter(city => city);
    let totalRouteDistance = distanceKm;
    
    if (waypoints.length > 0) {
        let lastCoords = fromCoords;
        waypoints.forEach(waypoint => {
            const waypointCoords = citiesCoordinates[waypoint];
            if (waypointCoords && lastCoords) {
                totalRouteDistance += calculateDistance(lastCoords.lat, lastCoords.lng, waypointCoords.lat, waypointCoords.lng);
                lastCoords = waypointCoords;
            }
        });
        // Add distance from last waypoint to destination
        if (lastCoords && toCoords) {
            totalRouteDistance += calculateDistance(lastCoords.lat, lastCoords.lng, toCoords.lat, toCoords.lng);
        }
    }
    
    const transportCost = transport * (1 + (totalRouteDistance / 1000));
    
    // Calculate total costs
    const totalAccommodation = accommodation * days * (people > 1 ? people * 0.8 : 1); // Slight discount for multiple people
    const totalFood = food * days * people;
    const totalTransport = transportCost * days * people;
    const totalActivities = activities * days * people;
    const totalCost = totalAccommodation + totalFood + totalTransport + totalActivities;
    
    // Show route on map
    if (routeMap) {
        updateRouteMap(fromCity, toCity, waypoints);
    } else {
        initializeRouteMap(fromCity, toCity, waypoints);
    }
    
    // Display results
    displayCostBreakdown({
        accommodation: totalAccommodation,
        food: totalFood,
        transport: totalTransport,
        activities: totalActivities,
        total: totalCost,
        days: days,
        people: people,
        distance: totalRouteDistance,
        fromCity: fromCity,
        toCity: toCity,
        waypoints: waypoints
    });
    
    const tripResults = document.getElementById('trip-results');
    if (tripResults) {
        tripResults.style.display = 'block';
    }
}

function initializeRouteMap(fromCity, toCity, waypoints = []) {
    try {
        const mapContainer = document.getElementById('route-map');
        if (!mapContainer) return;
        
        routeMap = L.map('route-map').setView([20.5937, 78.9629], 5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(routeMap);
        
        updateRouteMap(fromCity, toCity, waypoints);
    } catch (error) {
        console.error('Error initializing route map:', error);
    }
}

function updateRouteMap(fromCity, toCity, waypoints = []) {
    if (!routeMap) return;
    
    try {
        // Clear existing layers
        routeMap.eachLayer(layer => {
            if (layer !== routeMap._layers[Object.keys(routeMap._layers)[0]]) { // Keep base tile layer
                routeMap.removeLayer(layer);
            }
        });
        
        const markers = [];
        const coords = [];
        
        // Add start marker
        if (citiesCoordinates[fromCity]) {
            const startCoords = citiesCoordinates[fromCity];
            coords.push([startCoords.lat, startCoords.lng]);
            
            const startMarker = L.marker([startCoords.lat, startCoords.lng])
                .addTo(routeMap)
                .bindPopup(`<b>🚀 Start: ${fromCity}</b>`);
            markers.push(startMarker);
        }
        
        // Add waypoint markers
        waypoints.forEach((waypoint, index) => {
            if (citiesCoordinates[waypoint]) {
                const waypointCoords = citiesCoordinates[waypoint];
                coords.push([waypointCoords.lat, waypointCoords.lng]);
                
                const waypointMarker = L.marker([waypointCoords.lat, waypointCoords.lng])
                    .addTo(routeMap)
                    .bindPopup(`<b>📍 Waypoint ${index + 1}: ${waypoint}</b>`);
                markers.push(waypointMarker);
            }
        });
        
        // Add end marker
        if (citiesCoordinates[toCity]) {
            const endCoords = citiesCoordinates[toCity];
            coords.push([endCoords.lat, endCoords.lng]);
            
            const endMarker = L.marker([endCoords.lat, endCoords.lng])
                .addTo(routeMap)
                .bindPopup(`<b>🏁 Destination: ${toCity}</b>`);
            markers.push(endMarker);
        }
        
        // Draw route line
        if (coords.length > 1) {
            L.polyline(coords, {color: 'red', weight: 3, opacity: 0.7}).addTo(routeMap);
        }
        
        // Fit map to show all markers
        if (markers.length > 0) {
            const group = new L.featureGroup(markers);
            routeMap.fitBounds(group.getBounds().pad(0.1));
        }
        
        // Force map refresh
        setTimeout(() => {
            routeMap.invalidateSize();
        }, 100);
    } catch (error) {
        console.error('Error updating route map:', error);
    }
}

// Haversine formula to calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return distance;
}

// Format distance for display
function formatDistance(distance) {
    if (distance < 1) {
        return `${Math.round(distance * 1000)}m`;
    } else {
        return `${distance.toFixed(1)}km`;
    }
}

// Initialize hotels data
function initializeHotels() {
    allHotels = [];
    Object.keys(hotelsData).forEach(category => {
        hotelsData[category].forEach(hotel => {
            allHotels.push({...hotel, category});
        });
    });
    filteredHotels = [...allHotels];
    renderHotels();
}

// Initialize restaurants data  
function initializeRestaurants() {
    allRestaurants = [];
    Object.keys(restaurantsData).forEach(category => {
        restaurantsData[category].forEach(restaurant => {
            restaurant.locations.forEach(location => {
                allRestaurants.push({
                    name: restaurant.name,
                    cuisine: restaurant.cuisine,
                    cost_for_2: restaurant.cost_for_2,
                    specialties: restaurant.specialties,
                    category: category,
                    city: location.city,
                    coordinates: location.coordinates,
                    address: location.address
                });
            });
        });
    });
    filteredRestaurants = [...allRestaurants];
    renderRestaurants();
}

// Setup event listeners
function setupEventListeners() {
    // GPS coordinate format change
    const coordinateFormat = document.getElementById('coordinate-format');
    if (coordinateFormat) {
        coordinateFormat.addEventListener('change', handleCoordinateFormatChange);
    }
    
    // Hotel filters
    const hotelSearch = document.getElementById('hotel-search');
    const cityFilter = document.getElementById('city-filter');
    const priceFilter = document.getElementById('price-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const searchRadius = document.getElementById('search-radius');
    
    if (hotelSearch) hotelSearch.addEventListener('input', filterHotels);
    if (cityFilter) cityFilter.addEventListener('change', filterHotels);
    if (priceFilter) priceFilter.addEventListener('change', filterHotels);
    if (ratingFilter) ratingFilter.addEventListener('change', filterHotels);
    if (searchRadius) searchRadius.addEventListener('change', filterHotels);
    
    // Restaurant filters
    const restaurantSearch = document.getElementById('restaurant-search');
    const cuisineFilter = document.getElementById('cuisine-filter');
    const costFilter = document.getElementById('cost-filter');
    const restaurantSearchRadius = document.getElementById('restaurant-search-radius');
    
    if (restaurantSearch) restaurantSearch.addEventListener('input', filterRestaurants);
    if (cuisineFilter) cuisineFilter.addEventListener('change', filterRestaurants);
    if (costFilter) costFilter.addEventListener('change', filterRestaurants);
    if (restaurantSearchRadius) restaurantSearchRadius.addEventListener('change', filterRestaurants);
    
    // Restaurant category tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            if (category === 'all') {
                filteredRestaurants = [...allRestaurants];
            } else {
                filteredRestaurants = allRestaurants.filter(r => r.category === category);
            }
            renderRestaurants();
            if (restaurantsMap) {
                updateRestaurantsMap();
            }
        });
    });
    
    // Trip calculator inputs
    const tripDays = document.getElementById('trip-days');
    const tripPeople = document.getElementById('trip-people');
    const tripFromCity = document.getElementById('trip-from-city');
    const tripToCity = document.getElementById('trip-to-city');
    
    if (tripDays) tripDays.addEventListener('input', updateCalculator);
    if (tripPeople) tripPeople.addEventListener('input', updateCalculator);
    if (tripFromCity) tripFromCity.addEventListener('change', updateCalculator);
    if (tripToCity) tripToCity.addEventListener('change', updateCalculator);
    
    document.querySelectorAll('input[name="travel-style"]').forEach(input => {
        input.addEventListener('change', updateCalculator);
    });
    
    // Booking form date validation
    const checkInDate = document.getElementById('check-in-date');
    const checkOutDate = document.getElementById('check-out-date');
    
    if (checkInDate && checkOutDate) {
        checkInDate.addEventListener('change', function() {
            checkOutDate.min = this.value;
        });
    }
    
    // Navigation links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
    
    // Smooth scrolling for other internal links
    document.querySelectorAll('a[href^="#"]:not(.nav-links a)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeBookingModal();
            closeConfirmationModal();
            closeModal('location-modal');
            closeModal('share-route-modal');
        }
    });
}

// Populate city filter dropdowns
function populateCityFilters() {
    const cities = Object.keys(citiesCoordinates);
    
    // Hotel filters
    const cityFilter = document.getElementById('city-filter');
    if (cityFilter) {
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        });
    }
    
    // Trip calculator dropdowns
    const fromCitySelect = document.getElementById('trip-from-city');
    const toCitySelect = document.getElementById('trip-to-city');
    
    if (fromCitySelect && toCitySelect) {
        cities.forEach(city => {
            const fromOption = document.createElement('option');
            fromOption.value = city;
            fromOption.textContent = city;
            fromCitySelect.appendChild(fromOption);
            
            const toOption = document.createElement('option');
            toOption.value = city;
            toOption.textContent = city;
            toCitySelect.appendChild(toOption);
        });
    }
}

// Toggle between list and map view
function toggleView(section, view) {
    const listContainer = document.getElementById(`${section}-grid`);
    const mapContainer = document.getElementById(`${section}-map-container`);
    const toggleBtns = document.querySelectorAll(`#${section} .toggle-btn`);
    
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`#${section} .toggle-btn[data-view="${view}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    if (view === 'map') {
        if (listContainer) listContainer.classList.add('hidden');
        if (mapContainer) mapContainer.classList.remove('hidden');
        
        // Initialize map if not already done
        if (section === 'hotels' && !hotelsMap) {
            setTimeout(() => initializeHotelsMap(), 100);
        } else if (section === 'restaurants' && !restaurantsMap) {
            setTimeout(() => initializeRestaurantsMap(), 100);
        } else if (section === 'hotels' && hotelsMap) {
            setTimeout(() => {
                hotelsMap.invalidateSize();
                updateHotelsMap();
            }, 100);
        } else if (section === 'restaurants' && restaurantsMap) {
            setTimeout(() => {
                restaurantsMap.invalidateSize();
                updateRestaurantsMap();
            }, 100);
        }
    } else {
        if (listContainer) listContainer.classList.remove('hidden');
        if (mapContainer) mapContainer.classList.add('hidden');
    }
}

// Initialize hotels map
function initializeHotelsMap() {
    try {
        const mapContainer = document.getElementById('hotels-map');
        if (!mapContainer) return;
        
        hotelsMap = L.map('hotels-map').setView([20.5937, 78.9629], 5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(hotelsMap);
        
        setTimeout(() => updateHotelsMap(), 100);
    } catch (error) {
        console.error('Error initializing hotels map:', error);
    }
}

// Initialize restaurants map
function initializeRestaurantsMap() {
    try {
        const mapContainer = document.getElementById('restaurants-map');
        if (!mapContainer) return;
        
        restaurantsMap = L.map('restaurants-map').setView([20.5937, 78.9629], 5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(restaurantsMap);
        
        setTimeout(() => updateRestaurantsMap(), 100);
    } catch (error) {
        console.error('Error initializing restaurants map:', error);
    }
}

// Update hotels map markers
function updateHotelsMap() {
    if (!hotelsMap) return;
    
    try {
        // Clear existing markers
        hotelsMarkers.forEach(marker => {
            try {
                hotelsMap.removeLayer(marker);
            } catch (e) {
                // Ignore errors when removing markers
            }
        });
        hotelsMarkers = [];
        
        // Add user location marker if available
        if (userLocation) {
            const userIcon = L.divIcon({
                html: '<div style="background-color: #1FB8CD; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
                iconSize: [20, 20],
                className: 'user-location-marker'
            });
            
            const userMarker = L.marker([userLocation.lat, userLocation.lng], {icon: userIcon})
                .addTo(hotelsMap)
                .bindPopup('<b>📍 Your Location</b>');
            hotelsMarkers.push(userMarker);
        }
        
        // Add hotel markers
        filteredHotels.forEach((hotel, index) => {
            if (hotel.coordinates) {
                const distance = userLocation ? 
                    calculateDistance(userLocation.lat, userLocation.lng, hotel.coordinates.lat, hotel.coordinates.lng) : null;
                
                const hotelIcon = L.divIcon({
                    html: '<div style="background-color: #B4413C; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 2px rgba(0,0,0,0.3);"></div>',
                    iconSize: [16, 16],
                    className: 'hotel-marker'
                });
                
                const popupContent = `
                    <div class="popup-content">
                        <div class="popup-title">${hotel.name}</div>
                        <div class="popup-details">
                            ${generateStars(hotel.rating)} ${hotel.rating} Stars<br>
                            📍 ${hotel.address}<br>
                            💰 ₹${hotel.price_range}/night
                        </div>
                        <div class="popup-coordinates">
                            GPS: ${hotel.coordinates.lat.toFixed(4)}, ${hotel.coordinates.lng.toFixed(4)}
                        </div>
                        ${distance ? `<div class="popup-distance">📏 ${formatDistance(distance)} away</div>` : ''}
                        <div style="margin-top: var(--space-8); display: flex; gap: var(--space-4);">
                            <button class="btn btn--primary btn--sm" onclick="openBookingModalFromMap(${index}, 'hotel')" style="flex: 1; font-size: var(--font-size-xs);">
                                📅 Book Now
                            </button>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=${hotel.coordinates.lat},${hotel.coordinates.lng}" target="_blank" class="btn btn--outline btn--sm" style="flex: 1; font-size: var(--font-size-xs); text-align: center; text-decoration: none;">
                                🧭 Directions
                            </a>
                        </div>
                    </div>
                `;
                
                const marker = L.marker([hotel.coordinates.lat, hotel.coordinates.lng], {icon: hotelIcon})
                    .addTo(hotelsMap)
                    .bindPopup(popupContent);
                
                hotelsMarkers.push(marker);
            }
        });
        
        // Fit map to show all markers if we have any
        if (hotelsMarkers.length > 1) {
            const group = new L.featureGroup(hotelsMarkers);
            hotelsMap.fitBounds(group.getBounds().pad(0.1));
        } else if (hotelsMarkers.length === 1) {
            const marker = hotelsMarkers[0];
            hotelsMap.setView(marker.getLatLng(), 10);
        }
        
        // Force map refresh
        setTimeout(() => {
            if (hotelsMap) {
                hotelsMap.invalidateSize();
            }
        }, 100);
        
    } catch (error) {
        console.error('Error updating hotels map:', error);
    }
}

// Helper function to open booking modal from map popup
function openBookingModalFromMap(hotelIndex, type) {
    const hotel = type === 'hotel' ? filteredHotels[hotelIndex] : filteredRestaurants[hotelIndex];
    if (hotel) {
        openBookingModal(hotel, type);
    }
}

// Update restaurants map markers
function updateRestaurantsMap() {
    if (!restaurantsMap) return;
    
    try {
        // Clear existing markers
        restaurantsMarkers.forEach(marker => {
            try {
                restaurantsMap.removeLayer(marker);
            } catch (e) {
                // Ignore errors when removing markers
            }
        });
        restaurantsMarkers = [];
        
        // Add user location marker if available
        if (userLocation) {
            const userIcon = L.divIcon({
                html: '<div style="background-color: #1FB8CD; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
                iconSize: [20, 20],
                className: 'user-location-marker'
            });
            
            const userMarker = L.marker([userLocation.lat, userLocation.lng], {icon: userIcon})
                .addTo(restaurantsMap)
                .bindPopup('<b>📍 Your Location</b>');
            restaurantsMarkers.push(userMarker);
        }
        
        // Add restaurant markers
        filteredRestaurants.forEach((restaurant, index) => {
            if (restaurant.coordinates) {
                const distance = userLocation ? 
                    calculateDistance(userLocation.lat, userLocation.lng, restaurant.coordinates.lat, restaurant.coordinates.lng) : null;
                
                const restaurantIcon = L.divIcon({
                    html: '<div style="background-color: #FFC185; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 2px rgba(0,0,0,0.3);"></div>',
                    iconSize: [16, 16],
                    className: 'restaurant-marker'
                });
                
                const popupContent = `
                    <div class="popup-content">
                        <div class="popup-title">${restaurant.name}</div>
                        <div class="popup-details">
                            🍽️ ${restaurant.cuisine}<br>
                            📍 ${restaurant.address}<br>
                            💰 ₹${restaurant.cost_for_2} for 2
                        </div>
                        <div class="popup-coordinates">
                            GPS: ${restaurant.coordinates.lat.toFixed(4)}, ${restaurant.coordinates.lng.toFixed(4)}
                        </div>
                        ${distance ? `<div class="popup-distance">📏 ${formatDistance(distance)} away</div>` : ''}
                        <div style="margin-top: var(--space-8); display: flex; gap: var(--space-4);">
                            <button class="btn btn--primary btn--sm" onclick="openBookingModalFromMap(${index}, 'restaurant')" style="flex: 1; font-size: var(--font-size-xs);">
                                📅 Book Now
                            </button>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=${restaurant.coordinates.lat},${restaurant.coordinates.lng}" target="_blank" class="btn btn--outline btn--sm" style="flex: 1; font-size: var(--font-size-xs); text-align: center; text-decoration: none;">
                                🧭 Directions
                            </a>
                        </div>
                    </div>
                `;
                
                const marker = L.marker([restaurant.coordinates.lat, restaurant.coordinates.lng], {icon: restaurantIcon})
                    .addTo(restaurantsMap)
                    .bindPopup(popupContent);
                
                restaurantsMarkers.push(marker);
            }
        });
        
        // Fit map to show all markers if we have any
        if (restaurantsMarkers.length > 1) {
            const group = new L.featureGroup(restaurantsMarkers);
            restaurantsMap.fitBounds(group.getBounds().pad(0.1));
        } else if (restaurantsMarkers.length === 1) {
            const marker = restaurantsMarkers[0];
            restaurantsMap.setView(marker.getLatLng(), 10);
        }
        
        // Force map refresh
        setTimeout(() => {
            if (restaurantsMap) {
                restaurantsMap.invalidateSize();
            }
        }, 100);
        
    } catch (error) {
        console.error('Error updating restaurants map:', error);
    }
}

// Sort by distance
function sortByProximity(type) {
    if (!userLocation) {
        alert('Please enable GPS location services first.');
        return;
    }
    
    if (type === 'hotels') {
        filteredHotels.sort((a, b) => {
            const distanceA = calculateDistance(userLocation.lat, userLocation.lng, a.coordinates.lat, a.coordinates.lng);
            const distanceB = calculateDistance(userLocation.lat, userLocation.lng, b.coordinates.lat, b.coordinates.lng);
            return distanceA - distanceB;
        });
        renderHotels();
    } else {
        filteredRestaurants.sort((a, b) => {
            const distanceA = calculateDistance(userLocation.lat, userLocation.lng, a.coordinates.lat, a.coordinates.lng);
            const distanceB = calculateDistance(userLocation.lat, userLocation.lng, b.coordinates.lat, b.coordinates.lng);
            return distanceA - distanceB;
        });
        renderRestaurants();
    }
}

// Generate star rating HTML
function generateStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Get directions URL
function getDirections(lat, lng) {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

// Render hotels
function renderHotels() {
    const hotelsGrid = document.getElementById('hotels-grid');
    
    if (!hotelsGrid) return;
    
    if (filteredHotels.length === 0) {
        hotelsGrid.innerHTML = `
            <div class="no-results">
                <h3>No hotels found</h3>
                <p>Try adjusting your search criteria or filters</p>
            </div>
        `;
        return;
    }
    
    hotelsGrid.innerHTML = filteredHotels.map((hotel, index) => {
        const distance = userLocation && hotel.coordinates ? 
            calculateDistance(userLocation.lat, userLocation.lng, hotel.coordinates.lat, hotel.coordinates.lng) : null;
        
        return `
            <div class="hotel-card">
                <div class="hotel-header">
                    <h3 class="hotel-title">${hotel.name}</h3>
                    <div class="hotel-location">📍 ${hotel.city}</div>
                    <div class="hotel-rating">
                        <span class="stars">${generateStars(hotel.rating)}</span>
                        <span>${hotel.rating} Stars</span>
                    </div>
                    <div class="hotel-price">₹${hotel.price_range}/night</div>
                </div>
                <div class="hotel-body">
                    <div class="amenities">
                        ${hotel.amenities.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
                    </div>
                    ${hotel.coordinates ? `
                        <div class="gps-info">
                            <div class="coordinates">GPS: ${hotel.coordinates.lat.toFixed(4)}, ${hotel.coordinates.lng.toFixed(4)}</div>
                            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-8);">📍 ${hotel.address}</div>
                            ${distance ? `<div class="distance">📏 ${formatDistance(distance)} away</div>` : ''}
                            <div class="card-actions">
                                <button class="book-now-btn" onclick="openBookingModalFromCard(${index}, 'hotel')">
                                    📅 Book Now
                                </button>
                                <a href="${getDirections(hotel.coordinates.lat, hotel.coordinates.lng)}" target="_blank" class="get-directions-btn">
                                    🧭 Get Directions
                                </a>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    // Update map if visible
    if (hotelsMap && !document.getElementById('hotels-map-container').classList.contains('hidden')) {
        setTimeout(() => updateHotelsMap(), 100);
    }
}

// Helper function to open booking modal from card
function openBookingModalFromCard(index, type) {
    const venue = type === 'hotel' ? filteredHotels[index] : filteredRestaurants[index];
    if (venue) {
        openBookingModal(venue, type);
    }
}

// Filter hotels
function filterHotels() {
    const searchTerm = document.getElementById('hotel-search')?.value.toLowerCase() || '';
    const cityFilter = document.getElementById('city-filter')?.value || '';
    const priceFilter = document.getElementById('price-filter')?.value || '';
    const ratingFilter = document.getElementById('rating-filter')?.value || '';
    const searchRadius = document.getElementById('search-radius')?.value || '';
    
    filteredHotels = allHotels.filter(hotel => {
        const matchesSearch = hotel.name.toLowerCase().includes(searchTerm) || 
                            hotel.city.toLowerCase().includes(searchTerm) ||
                            hotel.address?.toLowerCase().includes(searchTerm);
        const matchesCity = !cityFilter || hotel.city === cityFilter;
        const matchesPrice = !priceFilter || hotel.category === priceFilter;
        const matchesRating = !ratingFilter || hotel.rating >= parseInt(ratingFilter);
        
        let matchesProximity = true;
        if (searchRadius && userLocation && hotel.coordinates) {
            const distance = calculateDistance(userLocation.lat, userLocation.lng, hotel.coordinates.lat, hotel.coordinates.lng);
            matchesProximity = distance <= parseInt(searchRadius);
        }
        
        return matchesSearch && matchesCity && matchesPrice && matchesRating && matchesProximity;
    });
    
    renderHotels();
}

// Render restaurants
function renderRestaurants() {
    const restaurantsGrid = document.getElementById('restaurants-grid');
    
    if (!restaurantsGrid) return;
    
    if (filteredRestaurants.length === 0) {
        restaurantsGrid.innerHTML = `
            <div class="no-results">
                <h3>No restaurants found</h3>
                <p>Try adjusting your search criteria or filters</p>
            </div>
        `;
        return;
    }
    
    restaurantsGrid.innerHTML = filteredRestaurants.map((restaurant, index) => {
        const distance = userLocation && restaurant.coordinates ? 
            calculateDistance(userLocation.lat, userLocation.lng, restaurant.coordinates.lat, restaurant.coordinates.lng) : null;
        
        return `
            <div class="restaurant-card">
                <div class="restaurant-header">
                    <h3 class="restaurant-name">${restaurant.name}</h3>
                    <div class="cuisine-type">🍽️ ${restaurant.cuisine}</div>
                    <div class="cost-info">💰 ₹${restaurant.cost_for_2} for 2</div>
                </div>
                <div class="restaurant-body">
                    <div class="specialties">
                        <h4>Specialties:</h4>
                        <div class="specialty-tags">
                            ${restaurant.specialties.map(specialty => `<span class="specialty-tag">${specialty}</span>`).join('')}
                        </div>
                    </div>
                    ${restaurant.coordinates ? `
                        <div class="gps-info">
                            <div class="coordinates">GPS: ${restaurant.coordinates.lat.toFixed(4)}, ${restaurant.coordinates.lng.toFixed(4)}</div>
                            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-8);">📍 ${restaurant.address}</div>
                            ${distance ? `<div class="distance">📏 ${formatDistance(distance)} away</div>` : ''}
                            <div class="card-actions">
                                <button class="book-now-btn" onclick="openBookingModalFromCard(${index}, 'restaurant')">
                                    📅 Book Now
                                </button>
                                <a href="${getDirections(restaurant.coordinates.lat, restaurant.coordinates.lng)}" target="_blank" class="navigate-btn">
                                    🧭 Navigate Here
                                </a>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    // Update map if visible
    if (restaurantsMap && !document.getElementById('restaurants-map-container').classList.contains('hidden')) {
        setTimeout(() => updateRestaurantsMap(), 100);
    }
}

// Filter restaurants
function filterRestaurants() {
    const searchTerm = document.getElementById('restaurant-search')?.value.toLowerCase() || '';
    const cuisineFilter = document.getElementById('cuisine-filter')?.value || '';
    const costFilter = document.getElementById('cost-filter')?.value || '';
    const restaurantSearchRadius = document.getElementById('restaurant-search-radius')?.value || '';
    
    // Get current active category
    const activeTab = document.querySelector('.tab-btn.active');
    const activeCategory = activeTab ? activeTab.dataset.category : 'all';
    
    let baseRestaurants = activeCategory === 'all' ? 
        [...allRestaurants] : 
        allRestaurants.filter(r => r.category === activeCategory);
    
    filteredRestaurants = baseRestaurants.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) || 
                            restaurant.cuisine.toLowerCase().includes(searchTerm) ||
                            restaurant.address?.toLowerCase().includes(searchTerm);
        const matchesCuisine = !cuisineFilter || restaurant.category === cuisineFilter;
        
        let matchesCost = true;
        if (costFilter) {
            const cost = parseInt(restaurant.cost_for_2.split('-')[0]);
            switch (costFilter) {
                case 'budget':
                    matchesCost = cost <= 600;
                    break;
                case 'moderate':
                    matchesCost = cost > 600 && cost <= 1500;
                    break;
                case 'expensive':
                    matchesCost = cost > 1500;
                    break;
            }
        }
        
        let matchesProximity = true;
        if (restaurantSearchRadius && userLocation && restaurant.coordinates) {
            const distance = calculateDistance(userLocation.lat, userLocation.lng, restaurant.coordinates.lat, restaurant.coordinates.lng);
            matchesProximity = distance <= parseInt(restaurantSearchRadius);
        }
        
        return matchesSearch && matchesCuisine && matchesCost && matchesProximity;
    });
    
    renderRestaurants();
}

// Calculate average of range
function calculateAverage(min, max) {
    const minVal = parseInt(min.toString().replace('+', ''));
    const maxVal = max ? parseInt(max.toString().replace('+', '')) : minVal * 2;
    return (minVal + maxVal) / 2;
}

// Display cost breakdown
function displayCostBreakdown(costs) {
    const breakdown = document.getElementById('cost-breakdown');
    
    if (!breakdown) return;
    
    let distanceInfo = '';
    if (costs.distance > 0 && costs.fromCity && costs.toCity) {
        distanceInfo = `
            <div class="route-summary">
                <div class="route-stat">
                    <span class="route-stat-value">${formatDistance(costs.distance)}</span>
                    <span class="route-stat-label">Total Distance</span>
                </div>
                <div class="route-stat">
                    <span class="route-stat-value">${costs.waypoints.length}</span>
                    <span class="route-stat-label">Waypoints</span>
                </div>
                <div class="route-stat">
                    <span class="route-stat-value">${Math.ceil(costs.distance / 500)}</span>
                    <span class="route-stat-label">Travel Days</span>
                </div>
            </div>
        `;
    }
    
    breakdown.innerHTML = `
        <h3>💰 Cost Breakdown</h3>
        
        <div class="currency-toggle">
            <button class="currency-btn ${currentCurrency === 'INR' ? 'active' : ''}" onclick="toggleCurrency('INR')">INR (₹)</button>
            <button class="currency-btn ${currentCurrency === 'USD' ? 'active' : ''}" onclick="toggleCurrency('USD')">USD ($)</button>
        </div>
        
        ${distanceInfo}
        
        <div class="cost-details">
            <div class="cost-item">
                <span class="cost-label">Accommodation (${costs.days} days × ${costs.people} people)</span>
                <span class="cost-value">${formatCurrency(costs.accommodation)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Food & Dining</span>
                <span class="cost-value">${formatCurrency(costs.food)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Transportation ${costs.distance > 0 ? '(distance-adjusted)' : ''}</span>
                <span class="cost-value">${formatCurrency(costs.transport)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Activities & Sightseeing</span>
                <span class="cost-value">${formatCurrency(costs.activities)}</span>
            </div>
            <div class="cost-item total">
                <span class="cost-label"><strong>Total Trip Cost</strong></span>
                <span class="cost-value"><strong>${formatCurrency(costs.total)}</strong></span>
            </div>
        </div>
        
        <div class="trip-actions">
            <button class="btn btn--primary" onclick="showModal('share-route-modal')">🔗 Share Route</button>
        </div>
    `;
    
    // Update share modal with coordinates
    const shareCoordinates = document.getElementById('share-coordinates');
    if (shareCoordinates && costs.fromCity && costs.toCity) {
        const fromCoords = citiesCoordinates[costs.fromCity];
        const toCoords = citiesCoordinates[costs.toCity];
        let routeText = `Route: ${costs.fromCity} (${fromCoords.lat}, ${fromCoords.lng})`;
        
        costs.waypoints.forEach((waypoint, index) => {
            const waypointCoords = citiesCoordinates[waypoint];
            if (waypointCoords) {
                routeText += ` → Waypoint ${index + 1}: ${waypoint} (${waypointCoords.lat}, ${waypointCoords.lng})`;
            }
        });
        
        routeText += ` → ${costs.toCity} (${toCoords.lat}, ${toCoords.lng})`;
        routeText += `\nTotal Distance: ${formatDistance(costs.distance)}`;
        routeText += `\nTotal Cost: ${formatCurrency(costs.total)}`;
        
        shareCoordinates.value = routeText;
    }
}

// Format currency
function formatCurrency(amount) {
    if (currentCurrency === 'INR') {
        return `₹${Math.round(amount).toLocaleString('en-IN')}`;
    } else {
        return `$${Math.round(amount / 83).toLocaleString('en-US')}`;
    }
}

// Toggle currency
function toggleCurrency(currency) {
    currentCurrency = currency;
    // Recalculate to update display
    const tripResults = document.getElementById('trip-results');
    if (tripResults && tripResults.style.display !== 'none') {
        calculateGPSTripCost();
    }
}

// Update calculator when inputs change
function updateCalculator() {
    const tripResults = document.getElementById('trip-results');
    if (tripResults && tripResults.style.display !== 'none') {
        calculateGPSTripCost();
    }
}

// Modal functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Make functions available globally for HTML onclick handlers
window.openBookingModal = openBookingModal;
window.openBookingModalFromCard = openBookingModalFromCard;
window.openBookingModalFromMap = openBookingModalFromMap;
window.closeBookingModal = closeBookingModal;
window.submitBooking = submitBooking;
window.closeConfirmationModal = closeConfirmationModal;
window.showBookings = showBookings;
window.showSection = showSection;
window.viewBookingDetails = viewBookingDetails;
window.navigateToVenue = navigateToVenue;
window.cancelBooking = cancelBooking;
window.hideToast = hideToast;
window.requestHighAccuracyLocation = requestHighAccuracyLocation;
window.enableHighAccuracyGPS = enableHighAccuracyGPS;
window.refreshLocation = refreshLocation;
window.toggleAutoRefresh = toggleAutoRefresh;
window.centerOnUser = centerOnUser;
window.toggleSatelliteView = toggleSatelliteView;
window.showTraffic = showTraffic;
window.showNearbyPOIs = showNearbyPOIs;
window.toggleView = toggleView;
window.sortByProximity = sortByProximity;
window.useCurrentLocationAsStart = useCurrentLocationAsStart;
window.addWaypoint = addWaypoint;
window.removeWaypoint = removeWaypoint;
window.calculateGPSTripCost = calculateGPSTripCost;
window.toggleCurrency = toggleCurrency;
window.openInMaps = openInMaps;
window.copyCoordinates = copyCoordinates;
window.showModal = showModal;
window.closeModal = closeModal;