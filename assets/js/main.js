/* ==========================================================================
   AUTORA — Main Platform JavaScript
   Includes Dataset, Filtering, Comparison Engine, Inspection Animations,
   EMI Calculator, Account-Free Purchase Flow, and Theme Control.
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Vehicles Master Dataset (DEMO LISTINGS)
// --------------------------------------------------------------------------
const AUTORA_VEHICLES = [
  {
    id: "urban-gt",
    name: "Urban GT",
    year: 2022,
    mileage: 32400,
    price: 1890000,
    priceDisplay: "₹18.90L",
    monthlyEmi: "₹30,500/mo",
    bodyType: "sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "2.0 Turbo",
    power: "248 HP",
    inspectionScore: 96,
    inspectionMax: 96,
    location: "Mumbai",
    ownership: "1st Owner",
    registration: "MH-02",
    serviceHistory: "Full Authorized Dealer",
    color: "#30302D",
    bootSpace: "480 L",
    warranty: "12 Months AUTORA Warranty",
    typeLabel: "Sport Sedan",
    verified: true,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    gallery: {
      Exterior: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      Cockpit: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      Dashboard: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80",
      Wheels: "https://images.unsplash.com/photo-1600706432502-778be1a48c66?auto=format&fit=crop&w=1200&q=80",
      Engine: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
      Boot: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    },
    inspectionBreakdown: {
      engine: { score: 18, total: 18 },
      transmission: { score: 14, total: 14 },
      brakes: { score: 12, total: 12 },
      suspension: { score: 10, total: 10 },
      tyres: { score: 12, total: 12 },
      exterior: { score: 16, total: 16 },
      interior: { score: 14, total: 14 },
      electrical: { score: 10, total: 10 }
    }
  },
  {
    id: "executive-x",
    name: "Executive X",
    year: 2021,
    mileage: 41200,
    price: 2450000,
    priceDisplay: "₹24.50L",
    monthlyEmi: "₹39,800/mo",
    bodyType: "sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "2.0 Hybrid",
    power: "220 HP",
    inspectionScore: 94,
    inspectionMax: 96,
    location: "Delhi",
    ownership: "1st Owner",
    registration: "DL-01",
    serviceHistory: "Full Authorized Dealer",
    color: "#1F2937",
    bootSpace: "520 L",
    warranty: "12 Months AUTORA Warranty",
    typeLabel: "Luxury Sedan",
    verified: true,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    gallery: {
      Exterior: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      Cockpit: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      Dashboard: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80",
      Wheels: "https://images.unsplash.com/photo-1600706432502-778be1a48c66?auto=format&fit=crop&w=1200&q=80",
      Engine: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
      Boot: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    },
    inspectionBreakdown: {
      engine: { score: 18, total: 18 },
      transmission: { score: 13, total: 14 },
      brakes: { score: 12, total: 12 },
      suspension: { score: 10, total: 10 },
      tyres: { score: 11, total: 12 },
      exterior: { score: 16, total: 16 },
      interior: { score: 14, total: 14 },
      electrical: { score: 10, total: 10 }
    }
  },
  {
    id: "trail-4",
    name: "Trail 4",
    year: 2023,
    mileage: 19800,
    price: 2980000,
    priceDisplay: "₹29.80L",
    monthlyEmi: "₹48,200/mo",
    bodyType: "suv",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "3.0 V6 Turbo",
    power: "280 HP",
    inspectionScore: 96,
    inspectionMax: 96,
    location: "Bengaluru",
    ownership: "1st Owner",
    registration: "KA-05",
    serviceHistory: "Full Authorized Dealer",
    color: "#374151",
    bootSpace: "650 L",
    warranty: "24 Months AUTORA Warranty",
    typeLabel: "All-Terrain SUV",
    verified: true,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    gallery: {
      Exterior: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      Cockpit: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      Dashboard: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80",
      Wheels: "https://images.unsplash.com/photo-1600706432502-778be1a48c66?auto=format&fit=crop&w=1200&q=80",
      Engine: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
      Boot: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    },
    inspectionBreakdown: {
      engine: { score: 18, total: 18 },
      transmission: { score: 14, total: 14 },
      brakes: { score: 12, total: 12 },
      suspension: { score: 10, total: 10 },
      tyres: { score: 12, total: 12 },
      exterior: { score: 16, total: 16 },
      interior: { score: 14, total: 14 },
      electrical: { score: 10, total: 10 }
    }
  },
  {
    id: "summit-q",
    name: "Summit Q",
    year: 2020,
    mileage: 55100,
    price: 1640000,
    priceDisplay: "₹16.40L",
    monthlyEmi: "₹26,600/mo",
    bodyType: "suv",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.0 TDI",
    power: "190 HP",
    inspectionScore: 92,
    inspectionMax: 96,
    location: "Pune",
    ownership: "2nd Owner",
    registration: "MH-12",
    serviceHistory: "Documented Service",
    color: "#4B5563",
    bootSpace: "580 L",
    warranty: "6 Months AUTORA Warranty",
    typeLabel: "Compact SUV",
    verified: true,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    gallery: {
      Exterior: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
      Cockpit: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      Dashboard: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80",
      Wheels: "https://images.unsplash.com/photo-1600706432502-778be1a48c66?auto=format&fit=crop&w=1200&q=80",
      Engine: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
      Boot: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    },
    inspectionBreakdown: {
      engine: { score: 17, total: 18 },
      transmission: { score: 13, total: 14 },
      brakes: { score: 11, total: 12 },
      suspension: { score: 9, total: 10 },
      tyres: { score: 11, total: 12 },
      exterior: { score: 15, total: 16 },
      interior: { score: 13, total: 14 },
      electrical: { score: 9, total: 10 }
    }
  },
  {
    id: "rs-coupe",
    name: "RS Coupe",
    year: 2022,
    mileage: 28900,
    price: 3220000,
    priceDisplay: "₹32.20L",
    monthlyEmi: "₹52,000/mo",
    bodyType: "sport",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "3.0 Twin-Turbo",
    power: "340 HP",
    inspectionScore: 96,
    inspectionMax: 96,
    location: "Hyderabad",
    ownership: "1st Owner",
    registration: "TS-09",
    serviceHistory: "Full Authorized Dealer",
    color: "#D94732",
    bootSpace: "390 L",
    warranty: "12 Months AUTORA Warranty",
    typeLabel: "Performance Coupe",
    verified: true,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    gallery: {
      Exterior: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
      Cockpit: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      Dashboard: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80",
      Wheels: "https://images.unsplash.com/photo-1600706432502-778be1a48c66?auto=format&fit=crop&w=1200&q=80",
      Engine: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
      Boot: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    },
    inspectionBreakdown: {
      engine: { score: 18, total: 18 },
      transmission: { score: 14, total: 14 },
      brakes: { score: 12, total: 12 },
      suspension: { score: 10, total: 10 },
      tyres: { score: 12, total: 12 },
      exterior: { score: 16, total: 16 },
      interior: { score: 14, total: 14 },
      electrical: { score: 10, total: 10 }
    }
  },
  {
    id: "prime-s",
    name: "Prime S",
    year: 2023,
    mileage: 17600,
    price: 2175000,
    priceDisplay: "₹21.75L",
    monthlyEmi: "₹35,100/mo",
    bodyType: "sedan",
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.8 Turbo",
    power: "204 HP",
    inspectionScore: 95,
    inspectionMax: 96,
    location: "Chennai",
    ownership: "1st Owner",
    registration: "TN-07",
    serviceHistory: "Full Authorized Dealer",
    color: "#111827",
    bootSpace: "500 L",
    warranty: "18 Months AUTORA Warranty",
    typeLabel: "Executive Sedan",
    verified: true,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    gallery: {
      Exterior: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      Cockpit: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      Dashboard: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80",
      Wheels: "https://images.unsplash.com/photo-1600706432502-778be1a48c66?auto=format&fit=crop&w=1200&q=80",
      Engine: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
      Boot: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    },
    inspectionBreakdown: {
      engine: { score: 18, total: 18 },
      transmission: { score: 14, total: 14 },
      brakes: { score: 12, total: 12 },
      suspension: { score: 9, total: 10 },
      tyres: { score: 11, total: 12 },
      exterior: { score: 16, total: 16 },
      interior: { score: 14, total: 14 },
      electrical: { score: 10, total: 10 }
    }
  }
];

// --------------------------------------------------------------------------
// 2. Vehicle Image & Photo Renderer Helper
// --------------------------------------------------------------------------
function getVehicleSVG(typeOrId, accentColor = "#D94732") {
  const match = AUTORA_VEHICLES.find(v => v.id === typeOrId) || AUTORA_VEHICLES.find(v => v.bodyType === typeOrId);
  const imgUrl = match ? match.image : "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80";
  const carName = match ? match.name : "Vehicle";
  return `<img src="${imgUrl}" alt="${carName}" class="vehicle-card-img" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'">`;
}

// --------------------------------------------------------------------------
// 3. Shortlist State Manager (Local Storage)
// --------------------------------------------------------------------------
const SHORTLIST_KEY = "autora_shortlist_items";

function getShortlist() {
  try {
    return JSON.parse(localStorage.getItem(SHORTLIST_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

function addToShortlist(vehicleId) {
  let list = getShortlist();
  if (!list.includes(vehicleId)) {
    list.push(vehicleId);
    localStorage.setItem(SHORTLIST_KEY, JSON.stringify(list));
    updateShortlistBadge();
    showToast("Vehicle added to shortlist");
  } else {
    showToast("Vehicle already in shortlist");
  }
}

function removeFromShortlist(vehicleId) {
  let list = getShortlist().filter(id => id !== vehicleId);
  localStorage.setItem(SHORTLIST_KEY, JSON.stringify(list));
  updateShortlistBadge();
  showToast("Vehicle removed from shortlist");
}

function updateShortlistBadge() {
  const count = getShortlist().length;
  document.querySelectorAll(".shortlist-count").forEach(el => {
    el.textContent = count;
  });
}

function showToast(msg) {
  let toast = document.querySelector(".autora-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "autora-toast";
    toast.style.cssText = `
      position: fixed; bottom: 30px; right: 30px; z-index: 1000;
      background: #111; color: #fff; font-family: var(--font-mono); font-size: 11px;
      padding: 12px 20px; border-left: 3px solid var(--red); box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      transition: all 0.3s ease; opacity: 0; transform: translateY(10px);
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
  }, 2500);
}

function handleSocialAuth(provider) {
  showToast(`Connecting to ${provider}...`);
  setTimeout(() => {
    showToast(`✓ Signed in with ${provider} (Identity Verified)`);
    localStorage.setItem("autora_user_auth", JSON.stringify({
      provider: provider,
      name: "Alex Morgan",
      email: "alex.morgan@example.com",
      timestamp: new Date().toISOString()
    }));
  }, 800);
}

// --------------------------------------------------------------------------
// 4. Dark Mode Controller
// --------------------------------------------------------------------------
function initThemeToggle() {
  document.body.classList.add("dark");
  localStorage.setItem("autora_theme", "dark");
}

// --------------------------------------------------------------------------
// 5. Mobile Drawer Menu Controller
// --------------------------------------------------------------------------
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const closeBtn = document.querySelector(".mobile-drawer-close");

  if (toggleBtn && overlay) {
    toggleBtn.addEventListener("click", () => overlay.classList.add("active"));
  }
  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
  }
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("active");
    });
  }
}

// --------------------------------------------------------------------------
// 6. Viewport 96-Point Inspection Progress Meter Animation
// --------------------------------------------------------------------------
function initInspectionAnimations() {
  const fills = document.querySelectorAll(".inspection-bar-fill");
  if (!fills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetPercent = entry.target.dataset.targetWidth || "100%";
        entry.target.style.width = targetPercent;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fills.forEach(fill => observer.observe(fill));
}

// --------------------------------------------------------------------------
// 7. Financing Calculator Logic
// --------------------------------------------------------------------------
function calculateEmi(price, downPayment, durationMonths, annualInterestRate) {
  const principal = price - downPayment;
  if (principal <= 0) return 0;
  const monthlyRate = (annualInterestRate / 12) / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, durationMonths)) / (Math.pow(1 + monthlyRate, durationMonths) - 1);
  return Math.round(emi);
}

function initFinanceCalculator() {
  const priceInput = document.querySelector("#calcPrice");
  const downInput = document.querySelector("#calcDown");
  const durationInput = document.querySelector("#calcDuration");
  const rateInput = document.querySelector("#calcRate");
  const resultDisplay = document.querySelector("#calcEmiResult");

  if (!priceInput || !resultDisplay) return;

  function update() {
    const p = parseFloat(priceInput.value) || 0;
    const d = parseFloat(downInput.value) || 0;
    const months = parseInt(durationInput.value) || 60;
    const rate = parseFloat(rateInput.value) || 8.5;

    document.querySelector("#priceVal") && (document.querySelector("#priceVal").textContent = "₹" + p.toLocaleString("en-IN"));
    document.querySelector("#downVal") && (document.querySelector("#downVal").textContent = "₹" + d.toLocaleString("en-IN"));
    document.querySelector("#durationVal") && (document.querySelector("#durationVal").textContent = months + " Months");
    document.querySelector("#rateVal") && (document.querySelector("#rateVal").textContent = rate + "%");

    const emi = calculateEmi(p, d, months, rate);
    resultDisplay.textContent = "₹" + emi.toLocaleString("en-IN") + " / mo";
  }

  [priceInput, downInput, durationInput, rateInput].forEach(inp => {
    if (inp) inp.addEventListener("input", update);
  });

  update();
}

// --------------------------------------------------------------------------
// 8. Account-Free Purchase Flow Modal
// --------------------------------------------------------------------------
let currentPurchaseVehicle = AUTORA_VEHICLES[0];

function openPurchaseModal(vehicleId) {
  const vehicle = AUTORA_VEHICLES.find(v => v.id === vehicleId) || AUTORA_VEHICLES[0];
  currentPurchaseVehicle = vehicle;

  let modal = document.querySelector("#purchaseModalOverlay");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "purchaseModalOverlay";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-box">
        <button class="modal-close-btn" onclick="closePurchaseModal()">&times;</button>
        <div id="modalStepContent"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  showPurchaseStep(1);
  modal.classList.add("active");
}

function closePurchaseModal() {
  const modal = document.querySelector("#purchaseModalOverlay");
  if (modal) modal.classList.remove("active");
}

function showPurchaseStep(step) {
  const container = document.querySelector("#modalStepContent");
  if (!container) return;

  const v = currentPurchaseVehicle;
  const refCode = "AU-" + Math.floor(1000 + Math.random() * 9000);

  if (step === 1) {
    container.innerHTML = `
      <div class="eyebrow">STEP 1 OF 3 · ACCOUNT-FREE CHECKOUT</div>
      <h2 style="font-family:var(--font-display);font-size:36px;text-transform:uppercase;margin:10px 0">${v.name}</h2>
      <p style="font-family:var(--font-mono);font-size:12px;color:var(--muted)">${v.year} · ${v.mileage.toLocaleString()} KM · ${v.fuel} · ${v.location}</p>
      
      <div style="background:var(--bg);padding:20px;margin:20px 0;border:1px solid var(--line)">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
          <span>Vehicle Price</span><strong>${v.priceDisplay}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
          <span>Inspection Verification</span><strong style="color:var(--red)">Passed (96/96)</strong>
        </div>
        <div style="display:flex;justify-content:space-between">
          <span>AUTORA Guarantee</span><strong>Included</strong>
        </div>
      </div>

      <div class="form-group" style="margin-bottom:15px">
        <label>Your Full Name</label>
        <input type="text" id="buyerName" placeholder="Enter your full name" required value="Alex Morgan">
      </div>
      <div class="form-group" style="margin-bottom:15px">
        <label>Mobile Contact Number</label>
        <input type="tel" id="buyerPhone" placeholder="+91 98765 43210" required value="+91 98765 43210">
      </div>
      <div class="form-group" style="margin-bottom:20px">
        <label>Preferred Delivery City</label>
        <input type="text" id="buyerCity" placeholder="City" value="${v.location}">
      </div>

      <button class="btn primary" style="width:100%" onclick="showPurchaseStep(2)">Proceed to Delivery & Option →</button>
    `;
  } else if (step === 2) {
    container.innerHTML = `
      <div class="eyebrow">STEP 2 OF 3 · DELIVERY & PAYMENT METHOD</div>
      <h2 style="font-family:var(--font-display);font-size:36px;text-transform:uppercase;margin:10px 0">CONFIRM OPTIONS</h2>
      
      <div style="margin:20px 0">
        <label style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--muted)">Delivery Method</label>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
          <button class="btn secondary active" style="font-size:10px">Home Delivery</button>
          <button class="btn secondary" style="font-size:10px">Hub Pickup</button>
        </div>
      </div>

      <div style="margin:20px 0">
        <label style="font-family:var(--font-mono);font-size:10px;text-transform:uppercase;color:var(--muted)">Payment Option</label>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
          <button class="btn secondary active" style="font-size:10px">Finance (${v.monthlyEmi})</button>
          <button class="btn secondary" style="font-size:10px">Direct Payment (${v.priceDisplay})</button>
        </div>
      </div>

      <div style="background:var(--red-soft);border-left:3px solid var(--red);padding:14px;font-size:11px;color:var(--ink);margin-bottom:20px">
        <strong>Demo Mode Notice:</strong> No payment is charged now. Submitting creates a verified test-drive / purchase request.
      </div>

      <div style="display:flex;gap:10px">
        <button class="btn secondary" onclick="showPurchaseStep(1)">← Back</button>
        <button class="btn primary" style="flex-grow:1" onclick="showPurchaseStep(3)">Submit Purchase Request →</button>
      </div>
    `;
  } else if (step === 3) {
    container.innerHTML = `
      <div class="purchase-confirmation-card">
        <div class="confirmation-icon">✓</div>
        <div class="eyebrow" style="justify-content:center">AUTORA VERIFIED ORDER</div>
        <h2 style="font-family:var(--font-display);font-size:42px;text-transform:uppercase;margin:10px 0">PURCHASE REQUEST RECEIVED</h2>
        <p style="font-size:13px;color:var(--muted)">Your vehicle specialist has been assigned to coordinate your inspection report and test drive delivery.</p>
        
        <div class="reference-code-box">
          REFERENCE: <span>${refCode}</span>
        </div>

        <div style="text-align:left;background:var(--bg);padding:18px;margin:20px 0;font-size:12px;font-family:var(--font-mono)">
          <div><strong>Vehicle:</strong> ${v.name} (${v.year})</div>
          <div><strong>Price:</strong> ${v.priceDisplay}</div>
          <div><strong>Inspection Score:</strong> 96/96 Verified</div>
          <div><strong>Assigned Specialist:</strong> Marcus Vance (AUTORA Senior Specialist)</div>
        </div>

        <button class="btn primary" style="width:100%" onclick="closePurchaseModal()">Return to Platform</button>
      </div>
    `;
  }
}

function initBackToTop() {
  let btn = document.querySelector("#backToTopBtn");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "backToTopBtn";
    btn.className = "back-to-top-btn";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = "↑";
    document.body.appendChild(btn);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll(".scroll-to-top").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function initNewsletter() {
  document.querySelectorAll(".footer-newsletter-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector(".footer-newsletter-input");
      if (input && input.value) {
        showToast("✓ Subscribed to AUTORA Inventory & Audit Alerts!");
        input.value = "";
      }
    });
  });
}

// --------------------------------------------------------------------------
// 9. Interactive Desktop Hero Stage Tab Switcher
// --------------------------------------------------------------------------
function setHeroStageTab(mode, btn) {
  const tabs = document.querySelectorAll(".hero-stage-tab");
  tabs.forEach(t => t.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const metricsContainer = document.querySelector("#heroStageMetrics");
  if (!metricsContainer) return;

  if (mode === "diag") {
    metricsContainer.innerHTML = `
      <div class="hero-mini-stat">
        <div class="val" style="color:var(--red)">96 / 96</div>
        <div class="lbl">Audit Score</div>
      </div>
      <div class="hero-mini-stat">
        <div class="val">120+</div>
        <div class="lbl">Ready Vehicles</div>
      </div>
      <div class="hero-mini-stat">
        <div class="val">0%</div>
        <div class="lbl">Hidden Fees</div>
      </div>
    `;
  } else if (mode === "spec") {
    metricsContainer.innerHTML = `
      <div class="hero-mini-stat">
        <div class="val" style="color:var(--red)">340 HP</div>
        <div class="lbl">Max Power</div>
      </div>
      <div class="hero-mini-stat">
        <div class="val">4.2s</div>
        <div class="lbl">0-100 Km/h</div>
      </div>
      <div class="hero-mini-stat">
        <div class="val">Euro 6</div>
        <div class="lbl">Emission Audit</div>
      </div>
    `;
  } else if (mode === "live") {
    metricsContainer.innerHTML = `
      <div class="hero-mini-stat">
        <div class="val" style="color:#10B981">LIVE</div>
        <div class="lbl">4 Hubs Active</div>
      </div>
      <div class="hero-mini-stat">
        <div class="val">24/7</div>
        <div class="lbl">Inspection Booking</div>
      </div>
      <div class="hero-mini-stat">
        <div class="val">7-DAY</div>
        <div class="lbl">Return Guarantee</div>
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// 10. Document Ready Initialization
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileMenu();
  updateShortlistBadge();
  initInspectionAnimations();
  initFinanceCalculator();
  initBackToTop();
  initNewsletter();

  // Redirect account links to login.html per core requirement
  document.querySelectorAll(".account-link, a.account").forEach(a => {
    a.href = "login.html";
  });
});
