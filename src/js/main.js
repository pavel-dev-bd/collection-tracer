// 1. DUMMY DATA
const dumaydata = [
  { id: 1, name: "Shop A" },
  { id: 2, name: "Shop B" },
  { id: 3, name: "Shop C" },
  { id: 4, name: "Shop D" },
  { id: 5, name: "Shop E" },
  { id: 6, name: "Shop F" },
  { id: 7, name: "Shop G" },
  { id: 8, name: "Shop H" },
  { id: 9, name: "Shop I" },
  { id: 10, name: "Shop J" },

  { id: 11, name: "Dhaka Mart" },
  { id: 12, name: "Chittagong Store" },
  { id: 13, name: "Rajshahi Traders" },
  { id: 14, name: "Sylhet Bazar" },
  { id: 15, name: "Khulna Stores" },
  { id: 16, name: "Barishal Point" },
  { id: 17, name: "Rangpur Store" },
  { id: 18, name: "Mymensingh Super Shop" },
  { id: 19, name: "Kurigram Enterprise" },
  { id: 20, name: "Bogra Mart" },

  { id: 21, name: "Narayanganj Variety Store" },
  { id: 22, name: "Gazipur Corner Shop" },
  { id: 23, name: "Tangail Bhandar" },
  { id: 24, name: "Comilla General Store" },
  { id: 25, name: "Feni Mart" },
  { id: 26, name: "Noakhali Shop" },
  { id: 27, name: "Cox’s Bazar Store" },
  { id: 28, name: "Jessore Traders" },
  { id: 29, name: "Jhenaidah Store" },
  { id: 30, name: "Pabna Super Shop" },

  { id: 31, name: "Sirajganj Mart" },
  { id: 32, name: "Jamalpur Store" },
  { id: 33, name: "Sherpur Bazar" },
  { id: 34, name: "Habiganj General Store" },
  { id: 35, name: "Sunamganj Shop" },
  { id: 36, name: "Madaripur Store" },
  { id: 37, name: "Shariatpur Bhandar" },
  { id: 38, name: "Gopalganj Traders" },
  { id: 39, name: "Kishoreganj Store" },
  { id: 40, name: "Manikganj Store" },

  { id: 41, name: "Faridpur Mart" },
  { id: 42, name: "Lakshmipur Store" },
  { id: 43, name: "Chandpur General Store" },
  { id: 44, name: "Brahmanbaria Shop" },
  { id: 45, name: "Gaibandha Store" },
  { id: 46, name: "Dinajpur Mart" },
  { id: 47, name: "Thakurgaon Shop" },
  { id: 48, name: "Panchagarh Store" },
  { id: 49, name: "Nilphamari Traders" },
  { id: 50, name: "Lalmonirhat Store" },

  { id: 51, name: "Meherpur Shop" },
  { id: 52, name: "Chuadanga Mart" },
  { id: 53, name: "Kushtia Store" },
  { id: 54, name: "Magura General Store" },
  { id: 55, name: "Narail Mart" },
  { id: 56, name: "Satkhira Store" },
  { id: 57, name: "Pirojpur Mart" },
  { id: 58, name: "Jhalokathi Shop" },
  { id: 59, name: "Bhola General Store" },
  { id: 60, name: "Patuakhali Mart" },

  { id: 61, name: "Barguna Store" },
  { id: 62, name: "Bandarban Mart" },
  { id: 63, name: "Rangamati Store" },
  { id: 64, name: "Khagrachari Traders" },
  { id: 65, name: "Munshiganj Bazar" },
  { id: 66, name: "Netrakona Store" },
  { id: 67, name: "Bogura Super Mart" },
  { id: 68, name: "Chapai Nawabganj Store" },
  { id: 69, name: "Naogaon Mart" },
  { id: 70, name: "Joypurhat Store" },

  { id: 71, name: "Narsingdi Store" },
  { id: 72, name: "Moulvibazar Shop" },
  { id: 73, name: "Gazi Super Shop" },
  { id: 74, name: "Metro Cash & Carry" },
  { id: 75, name: "City Mart" },
  { id: 76, name: "Deshi Bazar" },
  { id: 77, name: "Family Needs Store" },
  { id: 78, name: "Daily Fresh Mart" },
  { id: 79, name: "Green Valley Store" },
  { id: 80, name: "Modern Traders" },

  { id: 81, name: "Prime Mart" },
  { id: 82, name: "Quality Store" },
  { id: 83, name: "Local Bazar" },
  { id: 84, name: "Mini Market" },
  { id: 85, name: "New Line Store" },
  { id: 86, name: "Kazi General Store" },
  { id: 87, name: "Amin Traders" },
  { id: 88, name: "Bhai Bhai Store" },
  { id: 89, name: "Super Discount Mart" },
  { id: 90, name: "Daily Needs Store" },

  { id: 91, name: "Market Point" },
  { id: 92, name: "Bismillah Store" },
  { id: 93, name: "Al Madina Mart" },
  { id: 94, name: "Rupali Store" },
  { id: 95, name: "Golden Mart" },
  { id: 96, name: "Bangla Store" },
  { id: 97, name: "National Mart" },
  { id: 98, name: "Popular Store" },
  { id: 99, name: "People’s Market" },
  { id: 100, name: "Shop BD" },
];
let appName = "Tanvir";
let appTitle = "Collection Manager";
let appSubtitle = "Track your dues and cash collections with ease";
let collections = [];
let currentFilter = "DUE"; // Default view is DUE

// 2. DOM ELEMENTS
const listEl = document.getElementById("collection-list");
const searchEl = document.getElementById("store-search");
const tabsEl = document.querySelector(".tab-navigation"); // Update selector for modern HTML
const addBtnEl = document.getElementById("add-store-btn");
const modalEl = document.getElementById("modal");
const nameEl = document.getElementById("store-name-field");
const formEl = document.getElementById("store-form");
const deleteModalEl = document.getElementById("delete-modal");
const toastEl = document.getElementById("toast");
const sortSelectEl = document.getElementById("sort-select");
const exportBtnEl = document.getElementById("export-csv");
const importBtnEl = document.getElementById("import-csv");
const importFileEl = document.getElementById("import-file");
const convertModalEl = document.getElementById("convert-modal");
const resetModalEl = document.getElementById("reset-modal");
let pendingConvertId = null; // Track which item to convert
let pendingDeleteId = null; // Track which item to delete

// Product-related inputs in the add/edit modal
const productSelectEl = document.getElementById("product-select");
const productQtyEl = document.getElementById("product-qty-field");
const productUnitPriceEl = document.getElementById("product-unitprice-field");
const amountEl = document.getElementById("store-amount-field");
const addProductBtn = document.getElementById("add-product-row");
const productListEl = document.getElementById("product-list");
const productTotalEl = document.getElementById("product-total");
const productTabs = document.querySelectorAll(".product-tab");
const productsPanel = document.getElementById("products-panel");
const manualPanel = document.getElementById("manual-panel");
let modalProductRows = []; // rows in the modal for multiple products

const STORAGE_KEY = "collections_v1";
const RESET_PASSWORD = "1234"; // Simple password for reset

// PWA Install prompt
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  //console.log('✅ PWA install prompt available');
  // Show custom install banner if desired
  showToast('success', '📱 App can be installed. Use menu for options.');
});

window.addEventListener('appinstalled', () => {
  console.log('🎉 App installed successfully');
  deferredPrompt = null;
  showToast('success', '🎉 App installed successfully!');
});

// Listen for SW messages (sync notifications)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data.type === 'SYNC_SUCCESS') {
      console.log('📊 Collections synced:', event.data.message);
      renderCollections();
    }
  });
}

// Suggestion elements
const searchSuggestionsEl = document.getElementById("search-suggestions");
const nameSuggestionsEl = document.getElementById("name-suggestions");

// Reset button
const resetBtn = document.getElementById("reset-btn");

// QR scan elements
const scanBtn = document.getElementById("scan-qr-btn");
const stopScanBtn = document.getElementById("stop-qr-btn");
const qrVideo = document.getElementById("qr-video");
let qrStream = null;
let barcodeDetector = null;
let qrScanInterval = null;

/** Persist collections to localStorage */
function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collections));
  } catch (e) {
    showToast("error","Failed to save to storage");
  }
}
/** Update application header with name and title */
function appHeaderUpdate() {
  document.querySelector(".brand-name").textContent = appName;
  document.querySelector(".brand-title").textContent = appTitle;
}

/** Facebook-like time formatter (e.g. "Just now", "5m ago", "Yesterday at 3:15 PM") */
function formatTimeShort(iso) {
  if (!iso) return "";
  const then = new Date(iso);
  const now = new Date();
  const diffMs = now - then;
  const diffSec = Math.floor(diffMs / 1000);
  if (diffSec < 5) return "Just now";
  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHrs = Math.floor(diffMin / 60);
  if (diffHrs < 24) return `${diffHrs}h ago`;

  // Yesterday
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (then.toDateString() === yesterday.toDateString()) {
    return `Yesterday at ${formatClock(then)}`;
  }

  // Same year: "Nov 5 at 3:15 PM", else include year
  const opts = { month: "short", day: "numeric" };
  if (then.getFullYear() === now.getFullYear()) {
    return `${then.toLocaleDateString(undefined, opts)} at ${formatClock(
      then
    )}`;
  }
  const optsYear = { month: "short", day: "numeric", year: "numeric" };
  return `${then.toLocaleDateString(undefined, optsYear)} at ${formatClock(
    then
  )}`;
}

function formatClock(d) {
  let hrs = d.getHours();
  const mins = d.getMinutes();
  const ampm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12 || 12;
  return `${hrs}:${String(mins).padStart(2, "0")} ${ampm}`;
}

/** Update small numeric badges on tab buttons and header top bar */
function updateTabCounts() {
  const dueCount = collections.filter((c) => c.type === "DUE").length;
  const cashCount = collections.filter((c) => c.type === "CASH").length;
  const dueBtn = tabsEl.querySelector('.tab-button[data-type="DUE"]');
  const cashBtn = tabsEl.querySelector('.tab-button[data-type="CASH"]');

  if (dueBtn) {
    let badge = dueBtn.querySelector(".tab-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "tab-badge";
      dueBtn.appendChild(badge);
    }
    badge.textContent = dueCount;
  }

  if (cashBtn) {
    let badge = cashBtn.querySelector(".tab-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "tab-badge";
      cashBtn.appendChild(badge);
    }
    badge.textContent = cashCount;
  }

  // Header small badges
  const topDue = document.getElementById("top-due-count");
  const topCash = document.getElementById("top-cash-count");
 
  if (topDue) topDue.textContent = dueCount;
  if (topCash) topCash.textContent = cashCount;
}

/** Load collections from localStorage if present */
function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        collections = parsed;
      }
    }
  } catch (e) {
    showToast("error","Failed to load from storage");
  }
}
// 3. CORE FUNCTIONS

/** Renders the list based on the current filter and search term. */
function renderCollections() {
  listEl.innerHTML = ""; // Clear existing list

  const searchTerm = searchEl.value.toLowerCase();

  // Filter by Tab and Search Term
  const filteredCollections = collections.filter((item) => {
    const matchesType = item.type === currentFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm) ||
      item.id.toString().includes(searchTerm);
    return matchesType && matchesSearch;
  });

  if (filteredCollections.length === 0) {
    document.getElementById("empty-state").style.display = "flex";
    updateSummary();
    return;
  }

  document.getElementById("empty-state").style.display = "none";

  // Render List Items
  filteredCollections.forEach((item) => {
    const li = document.createElement("li");
    li.className = `collection-item ${item.type.toLowerCase()}`; // Modern class names
    li.dataset.id = item.id;
    const displayDate = item.date
      ? new Date(item.date).toLocaleDateString()
      : "";
    const createdAgo = item.createdAt ? formatTimeShort(item.createdAt) : "";
    // build product meta (multiple products or single legacy fields)
    let productMeta = "";
    if (item.products && item.products.length) {
      productMeta = item.products
        .map(p => `${p.label||p.product} x ${p.quantity || 1} — ${((p.quantity||0)*(p.unitPrice||0)).toLocaleString()} BDT`)
        .join('<br>');
    } else if (item.productLabel) {
      productMeta = `${item.productLabel} x ${item.quantity || 1}`;
    }

  li.innerHTML = `
      <div class="collection-info">
        <div class="d-flex">
        <div class="collection-name"> ${item.name}  </div>
        <span class="collection-time"> ${createdAgo ? `<span>⏱ ${createdAgo}</span>` : ""}</sapn>
         </div>
        <div class="collection-meta">
          ${productMeta ? `<div class="product-meta">${productMeta}</div>` : ""}
        </div>
      </div>
      <div class="collection-amount">${(item.amount||0).toLocaleString()} BDT</div>
            <div class="collection-actions">
                ${
                  item.type === "DUE"
                    ? `<button class="action-btn collect" onclick="showConvertModal(${item.id})" title="Collect"><i class=\"fa-solid fa-hand-holding-dollar\"></i></button>`
                    : ""
                }
                <button class="action-btn" onclick="openModal(${
                  item.id
                })" title="Edit"><i class=\"fa-solid fa-pen\"></i></button>
                <button class="action-btn danger" onclick="showDeleteModal(${
                  item.id
                })" title="Delete"><i class=\"fa-solid fa-trash\"></i></button>
            </div>
        `;
    listEl.appendChild(li);
  });

  updateSummary();
}

/** Update suggestion list for the global search input */
function updateSearchSuggestions() {
  const q = (searchEl.value || "").trim().toLowerCase();
  if (!q) {
    searchSuggestionsEl.innerHTML = "";
    searchSuggestionsEl.classList.remove("active");
    return;
  }
  const matches = collections
    .filter(
      (c) => c.name.toLowerCase().includes(q) || c.id.toString().includes(q)
    )
    .slice(0, 10);
  if (!matches.length) {
    searchSuggestionsEl.innerHTML = "";
    searchSuggestionsEl.classList.remove("active");
    return;
  }
  searchSuggestionsEl.classList.add("active");
  searchSuggestionsEl.innerHTML = matches
    .map(
      (m) =>
        `<li data-id="${m.id}"><strong>${m.name}</strong><br><small>ID: ${
          m.id
        } · ${m.type} · ${m.amount.toLocaleString()} BDT</small></li>`
    )
    .join("");
}

/** Update suggestion list for the name input in the modal */
function updateNameSuggestions() {
  const q = (nameEl.value || "").trim().toLowerCase();
  if (!q) {
    nameSuggestionsEl.innerHTML = "";
    nameSuggestionsEl.classList.remove("active");
    return;
  }
  const matches = dumaydata
    .filter((c) => c.name.toLowerCase().includes(q))
    .slice(0, 8);
  if (!matches.length) {
    nameSuggestionsEl.innerHTML = "";
    nameSuggestionsEl.classList.remove("active");
    return;
  }
  nameSuggestionsEl.classList.add("active");
  nameSuggestionsEl.innerHTML = matches
    .map(
      (m) =>
        `<li onclick="setName('${m.name.replace(/'/g, "\\'")}')" data-id="${
          m.id
        }">${m.name}</li>`
    )
    .join("");
}

/**  update model name suggestion */
function setName(name) {
  nameEl.value = name;
  nameSuggestionsEl.classList.remove("active");
}



/** Product selection & auto-calculation helpers */
function getSelectedProductInfo() {
  if (!productSelectEl) return { key: null, label: null, price: 0 };
  const opt = productSelectEl.options[productSelectEl.selectedIndex];
  const key = productSelectEl.value || null;
  const label = opt ? opt.text : null;
  const price = opt && opt.dataset && opt.dataset.price ? parseFloat(opt.dataset.price) : 0;
  return { key, label, price };
}

function updateAmountFromProduct() {
  if (!productSelectEl || !productQtyEl || !productUnitPriceEl || !amountEl) return;
  const { price } = getSelectedProductInfo();
  const qty = parseFloat(productQtyEl.value) || 0;
  // If selected product has a default price, populate unit price unless user has custom
  if (price && (!productUnitPriceEl.value || parseFloat(productUnitPriceEl.value) === 0)) {
    productUnitPriceEl.value = price;
  }
  const unit = parseFloat(productUnitPriceEl.value) || 0;
  const total = qty * unit;
  amountEl.value = total.toFixed(2);
}

// --- Multiple product (modal) management ---
function renderProductList() {
  if (!productListEl) return;
  productListEl.innerHTML = "";
  modalProductRows.forEach((row, idx) => {
    const div = document.createElement('div');
    div.className = 'product-row';
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.alignItems = 'center';
    div.style.gap = '8px';
    div.innerHTML = `
      <div style="flex:1">${row.label || row.product} <small style="color:#666"> x ${row.quantity}</small></div>
      
  
      <div style="width:120px;text-align:right">${((row.quantity||0)*(row.unitPrice||0)).toFixed(2)} BDT</div>
      <div style="width:40px;text-align:right"><button type="button" data-idx="${idx}" class="btn btn-danger btn-sm remove-product">✕</button></div>
    `;
    productListEl.appendChild(div);
  });

  // attach remove handlers
  productListEl.querySelectorAll('.remove-product').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const i = parseInt(e.currentTarget.dataset.idx);
      if (!isNaN(i)) {
        modalProductRows.splice(i,1);
        renderProductList();
        updateProductTotal();
      }
    });
  });
}

function updateProductTotal() {
  const total = modalProductRows.reduce((s, r) => s + ( (r.quantity||0) * (r.unitPrice||0) ), 0);
  if (productTotalEl) productTotalEl.textContent = total.toFixed(2);
  if (amountEl) amountEl.value = total.toFixed(2);
}

function clearModalProducts() {
  modalProductRows = [];
  renderProductList();
  updateProductTotal();
}

function addProductRowFromInputs() {
  if (!productSelectEl || !productQtyEl || !productUnitPriceEl) return;
  const key = productSelectEl.value;
  const opt = productSelectEl.options[productSelectEl.selectedIndex];
  const label = opt ? opt.text : key;
  const qty = parseInt(productQtyEl.value) || 0;
  const unit = parseFloat(productUnitPriceEl.value) || 0;
  if (qty === 0) {
    showToast('error', 'Added product must have quantity greater than zero');
    return;
  }
  if (unit === 0) {
    showToast('error', 'Selected product must have a unit price');
    return;
  }
  modalProductRows.push({ product: key, label, quantity: qty, unitPrice: unit });
  // reset the small inputs for next addition
  productQtyEl.value = qty > 1 ? qty : 0;
  if (opt && opt.dataset && opt.dataset.price) {
    productUnitPriceEl.value = opt.dataset.price;
  } else {
    productUnitPriceEl.value = '';
  }
  renderProductList();
  updateProductTotal();
}

// attach add product button
if (addProductBtn) addProductBtn.addEventListener('click', addProductRowFromInputs);

// tab switching for product/manual panels
if (productTabs && productTabs.length) {
  productTabs.forEach(btn => {
    btn.addEventListener('click', (e) => {
      productTabs.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const tab = e.currentTarget.dataset.tab;
      if (tab === 'manual') {
        if (productsPanel) productsPanel.style.display = 'none';
        if (manualPanel) manualPanel.style.display = 'block';
        document.querySelector('#product-select').style.display = 'none';
      } else {
        if (productsPanel) productsPanel.style.display = 'block';
        if (manualPanel) manualPanel.style.display = 'none';
        document.querySelector('#product-select').style.display = 'block';
      }
    });
  });
}

// Attach listeners (guard for null when script loads)
if (productSelectEl) {
  productSelectEl.addEventListener('change', function() {
    const { price, key } = getSelectedProductInfo();
    if (key === 'other') {
      productUnitPriceEl.value = '';
      productUnitPriceEl.removeAttribute('readonly');
    } else if (price) {
      productUnitPriceEl.value = price;
      productUnitPriceEl.setAttribute('readonly', 'true');
    }
    updateAmountFromProduct();
  });
}
// if (productQtyEl) productQtyEl.addEventListener('input', updateAmountFromProduct);
// if (productUnitPriceEl) productUnitPriceEl.addEventListener('input', updateAmountFromProduct);

/** Updates the totals in the summary card. */
function updateSummary() {
  const totalDue = collections
    .filter((item) => item.type === "DUE")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalCash = collections
    .filter((item) => item.type === "CASH")
    .reduce((sum, item) => sum + item.amount, 0);

  document.getElementById("total-stores").textContent = collections.length;
  document.getElementById(
    "total-due"
  ).textContent = `${totalDue.toLocaleString()} BDT`;
  document.getElementById(
    "total-cash"
  ).textContent = `${totalCash.toLocaleString()} BDT`;
  // Also update tab badges and header counts
   const topTotalCash = document.querySelector("#top-totall-count .total-cash");
   console.log(topTotalCash);
   
  if (topTotalCash) topTotalCash.innerHTML = `&#x09F3; ${(totalDue + totalCash).toLocaleString()}`;
  updateTabCounts();
  // update product summary table
  renderProductSummary();
  
}

/** Renders product sell summary table (quantity and total amount per product) */
function renderProductSummary() {
  const tbody = document.querySelector('#product-summary-table tbody');
  if (!tbody) return;

  // Aggregate totals by product key or label
  const map = new Map();

  collections.forEach(c => {
    // if collection has multiple products
    if (c.products && Array.isArray(c.products) && c.products.length) {
      c.products.forEach(p => {
        const key = p.product || p.label || 'other';
        const label = p.label || p.product || 'Other';
        const qty = Number(p.quantity || 0);
        const amt = Number((p.unitPrice || 0) * qty);
        if (!map.has(key)) map.set(key, { label, qty:0, amt:0 });
        const entry = map.get(key);
        entry.qty += qty;
        entry.amt += amt;
      });
    } else if (c.product || c.productLabel) {
      // legacy single-product fields
      const key = c.product || c.productLabel || 'other';
      const label = c.productLabel || c.product || 'Other';
      const qty = Number(c.quantity || 0) || (c.amount && c.unitPrice ? Math.round((c.amount / c.unitPrice)) : 0);
      const amt = Number(c.amount || 0);
      if (!map.has(key)) map.set(key, { label, qty:0, amt:0 });
      const entry = map.get(key);
      entry.qty += qty;
      entry.amt += amt;
    }
  });

  // Render rows sorted by amount desc
  const rows = Array.from(map.entries()).sort((a,b) => b[1].amt - a[1].amt);
  tbody.innerHTML = '';
  let totalQty = 0;
  let totalAmt = 0;
  rows.forEach(([key, val]) => {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.textContent = val.label || key;
    const qtyTd = document.createElement('td'); qtyTd.className = 'right'; qtyTd.textContent = val.qty;
    const amtTd = document.createElement('td'); amtTd.className = 'right'; amtTd.textContent = val.amt.toFixed(2);
    tr.appendChild(nameTd); tr.appendChild(qtyTd); tr.appendChild(amtTd);
    tbody.appendChild(tr);
    totalQty += val.qty;
    totalAmt += val.amt;
  });

  const totalQtyEl = document.getElementById('product-summary-total-qty');
  const totalAmtEl = document.getElementById('product-summary-total-amt');
  if (totalQtyEl) totalQtyEl.textContent = totalQty;
  if (totalAmtEl) totalAmtEl.textContent = totalAmt.toFixed(2);
  // Also render mobile-friendly content
  // const mobileBody = document.getElementById('product-summary-mobile-body');
  // if (mobileBody) {
  //   mobileBody.innerHTML = '';
  //   rows.forEach(([key, val]) => {
  //     const wrap = document.createElement('div');
  //     wrap.style.display = 'flex';
  //     wrap.style.justifyContent = 'space-between';
  //     wrap.style.padding = '8px 0';
  //     wrap.style.borderBottom = '1px solid var(--color-border-light)';
  //     const left = document.createElement('div'); left.textContent = val.label || key;
  //     const right = document.createElement('div'); right.style.textAlign = 'right'; right.innerHTML = `<div>${val.qty} </div><div style="font-weight:700">${val.amt.toFixed(2)} BDT</div>`;
  //     wrap.appendChild(left); wrap.appendChild(right);
  //     mobileBody.appendChild(wrap);
  //   });
  //   const footer = document.createElement('div'); footer.style.paddingTop = '8px'; footer.style.fontWeight = '700'; footer.innerHTML = `Total QTY: ${totalQty}  · Total Price ${totalAmt.toFixed(2)} BDT`;
  //   mobileBody.appendChild(footer);
  // }
}

// Mobile modal open/close wiring
document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('open-product-summary-mobile');
  const closeBtn = document.getElementById('close-product-summary-mobile');
  const modal = document.getElementById('product-summary-modal');
  if (openBtn && modal) {
    openBtn.addEventListener('click', function() {
      modal.style.display = 'block';
      // small delay to allow CSS transitions if any
      setTimeout(() => modal.classList.add('active'), 10);
    });
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', function() {
      modal.classList.remove('active');
      setTimeout(() => modal.style.display = 'none', 250);
    });
  }
  // close when clicking overlay
  if (modal) {
    const overlay = modal.querySelector('.modal-overlay');
    if (overlay) overlay.addEventListener('click', () => { modal.classList.remove('active'); setTimeout(() => modal.style.display='none',250); });
  }
});

// --- Password Modal Logic ---
const passwordModalEl = document.getElementById("password-modal");
const passwordModalInput = document.getElementById("password-modal-input");
const passwordModalTitle = document.getElementById("password-modal-title");
const passwordModalMessage = document.getElementById("password-modal-message");
const passwordModalConfirm = document.getElementById("password-modal-confirm");
const passwordModalCancel = document.getElementById("password-modal-cancel");
//let passwordModalCallback = null;

function showPasswordModal({ title, message, onConfirm }) {
  passwordModalTitle.textContent = title || "Password Required";
  passwordModalMessage.textContent = message || "Enter password to continue:";
  passwordModalInput.value = "";
  passwordModalEl.classList.add("active");
  passwordModalInput.focus();
  

  passwordModalConfirm.onclick = function () {
    const val = passwordModalInput.value;
    if (val !== RESET_PASSWORD) {
      showToast("error", "❌ Incorrect password");
      passwordModalInput.value = "";
      passwordModalInput.focus();
      return;
    }
    hidePasswordModal();
    if (typeof onConfirm === "function") onConfirm();
  };
  passwordModalCancel.onclick = function () {
    hidePasswordModal();
  };
  passwordModalInput.onkeydown = function (e) {
    if (e.key === "Enter") passwordModalConfirm.click();
  };
  passwordModalEl.querySelector(".modal-overlay").onclick = function (e) {
    if (e.target === this) hidePasswordModal();
  };
}

function hidePasswordModal() {
  passwordModalEl.classList.remove("active");
  passwordModalCallback = null;
}

// --- Refactored openModal ---
function openModal(id = null) {
  // Reset form fields
  formEl.reset();
  document.getElementById("store-id-field").value = "";
  if (id) {
    // EDIT MODE (password protected)
    showPasswordModal({
      title: "Edit Collection",
      message: "Enter password to edit this collection:",
      onConfirm: function () {
        const item = collections.find((c) => c.id === id);
            if (item) {
              document.getElementById("store-id-field").value = item.id;
              document.getElementById("store-name-field").value = item.name;
              document.getElementById("store-amount-field").value = item.amount;
              document.getElementById("collection-type-field").value = item.type;
              document.getElementById("store-date-field").value = item.date || "";
              // populate product list if present
              if (item.products && item.products.length) {
                modalProductRows = item.products.map(p => ({ ...p }));
                renderProductList();
                updateProductTotal();
                // switch to products tab
                productTabs.forEach(b => b.classList.remove('active'));
                const prodTab = document.querySelector('.product-tab[data-tab="products"]');
                if (prodTab) prodTab.classList.add('active');
                if (productsPanel) productsPanel.style.display = 'block';
                if (manualPanel) manualPanel.style.display = 'none';
              } else {
                // reset modal product rows
                clearModalProducts();
                if (productSelectEl) productSelectEl.value = item.product || "";
                if (productQtyEl) productQtyEl.value = item.quantity || 0;
                if (productUnitPriceEl) productUnitPriceEl.value = item.unitPrice || "";
                updateAmountFromProduct();
                // switch to manual if no products
                productTabs.forEach(b => b.classList.remove('active'));
                const manTab = document.querySelector('.product-tab[data-tab="manual"]');
                if (manTab) manTab.classList.add('active');
                if (productsPanel) productsPanel.style.display = 'none';
                if (manualPanel) manualPanel.style.display = 'block';
              }
              document.getElementById("modal-title").textContent =
                "Edit Collection";
              modalEl.classList.add("active");
            }
      },
    });
  } else {
    // ADD MODE
    document.getElementById("modal-title").textContent = "Add New Collection";
    // default date to today
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("store-date-field").value = today;
    document.getElementById("collection-type-field").value = currentFilter;
    // reset product inputs
    if (productSelectEl) productSelectEl.value = "";
    if (productQtyEl) productQtyEl.value = "";
    if (productUnitPriceEl) productUnitPriceEl.value = "";
    modalEl.classList.add("active");
  }
}

/** Closes the modal */
function closeModal() {
  modalEl.classList.remove("active");
}

/** Handles the form submission for adding or editing. */
function saveCollection(event) {
  event.preventDefault();

  const id = parseInt(document.getElementById("store-id-field").value);
  const name = document.getElementById("store-name-field").value;
  const type = document.getElementById("collection-type-field").value;
  const addmodleTab= document.querySelector('.product-tabs .product-tab.active').dataset.tab;
  if (!name || name.trim() === "") {
    showToast("error","❌ Please enter a valid name");
    return;
  }
  const amount = parseFloat(
    document.getElementById("store-amount-field").value
  );
  // If modal has multiple product rows, use those; otherwise fall back to single inputs
  const products = (modalProductRows && modalProductRows.length) ? modalProductRows.slice() : null;
  const date = document.getElementById("store-date-field").value || null;

  // If products provided, calculate final amount from products
  if (addmodleTab === 'products' && (!products || products.length === 0)) {
    showToast("error","❌ Please add at least one product or switch to Manual entry");
    return;
  } else{
    clearModalProducts()
  }
  const finalAmount = products && products.length
    ? products.reduce((s, r) => s + ((r.quantity || 0) * (r.unitPrice || 0)), 0)
    : amount;

    if (isNaN(finalAmount) || finalAmount <= 0) {
      showToast("error","❌ Please enter a valid amount greater than 0");
      return;
    }
 
  const newCollection = {
    name,
    amount: finalAmount,
    type,
    date,
    products: products || [],
  };

  if (id) {
    // UPDATE
    const index = collections.findIndex((c) => c.id === id);
    if (index > -1) {
      // preserve createdAt when updating
      const existing = collections[index];
      collections[index] = {
        ...existing,
        ...newCollection,
        createdAt: existing.createdAt || existing.createdAt,
      };
      showToast("success","✅ Collection updated successfully!");
      saveToStorage();
    }
  } else {
    // CREATE
    const newId =
      collections.length > 0
        ? Math.max(...collections.map((c) => c.id)) + 1
        : 1;
    const createdAt = new Date().toISOString();
    collections.push({ id: newId, ...newCollection, createdAt });
    showToast("success","✅ Collection added successfully!");
    saveToStorage();
  }

  closeModal(); // Hide modal
  renderCollections();
}

/** Shows the delete confirmation modal */
function showDeleteModal(id) {
  const item = collections.find((c) => c.id === id);
  if (!item) return;
  showPasswordModal({
    title: "Delete Collection",
    message: "Enter password to delete this collection:",
    onConfirm: function () {
      pendingDeleteId = id;
      document.getElementById(
        "delete-message"
      ).textContent = `Are you sure you want to delete "${item.name}" (${item.amount} BDT)?`;
      deleteModalEl.classList.add("active");
    },
  });
}

/** Shows the convert (DUE -> CASH) confirmation modal */
function showConvertModal(id) {
  const item = collections.find((c) => c.id === id);
  if (item && item.type === "DUE") {
    pendingConvertId = id;
    document.getElementById(
      "convert-message"
    ).textContent = `Mark "${item.name}" (${item.amount} BDT) as collected?`;
    convertModalEl.classList.add("active");
  }
}

/** Closes the convert modal */
function closeConvertModal() {
  if (convertModalEl) convertModalEl.classList.remove("active");
  pendingConvertId = null;
}

/** Confirms conversion from DUE to CASH */
function confirmConvert() {
  if (pendingConvertId !== null) {
    const idx = collections.findIndex((c) => c.id === pendingConvertId);
    if (idx > -1) {
      // change type to CASH and set date to today
      const today = new Date().toISOString().split("T")[0];
      collections[idx].type = "CASH";
      collections[idx].date = today;
      saveToStorage();
      showToast("success",`💵 "${collections[idx].name}" marked as collected.`);
      closeConvertModal();
      updateSummary();
      renderCollections();
    }
  }
}

/** Closes the delete confirmation modal */
function closeDeleteModal() {
  deleteModalEl.classList.remove("active");
  pendingDeleteId = null;
}

/** Confirms and deletes a collection item. */
function confirmDelete() {
  if (pendingDeleteId !== null) {
    const item = collections.find((c) => c.id === pendingDeleteId);
    collections = collections.filter((item) => item.id !== pendingDeleteId);
    showToast( "success",`🗑️ "${item.name}" deleted successfully!`);
    saveToStorage();
    updateSummary();
    closeDeleteModal();
    renderCollections();
  }
}

/** Shows a toast notification */
function showToast(type, message) {
  toastEl.textContent = message;

  // Remove previous type classes
  toastEl.classList.remove("success", "error", "warning", "info");

  // Add current type + active
  toastEl.classList.add(type, "active");

  setTimeout(() => {
    toastEl.classList.remove("active", type);
  }, 3000);
}

/** Show reset confirmation modal */
function showResetModal() {
  document.getElementById("reset-password").value = "";
  resetModalEl.classList.add("active");
}

/** Close reset modal */
function closeResetModal() {
  if (resetModalEl) resetModalEl.classList.remove("active");
  document.getElementById("reset-password").value = "";
}

/** Confirm reset with password verification */
function confirmReset() {
  const passwordInput = document.getElementById("reset-password");
  const enteredPassword = passwordInput.value;

  if (enteredPassword !== RESET_PASSWORD) {
    passwordInput.value='';
    showToast("error","❌ Incorrect password");
    return;
  }

  // Clear all data
  collections = [];
  saveToStorage();
  renderCollections();
  updateSummary();
  closeResetModal();
  showToast("success","🗑️ All data has been reset");
}

/** Sort the master collections array based on selection */
function sortCollections(mode) {
  switch (mode) {
    case "newest":
      collections.sort((a, b) => (b.id || 0) - (a.id || 0));
      break;
    case "oldest":
      collections.sort((a, b) => (a.id || 0) - (b.id || 0));
      break;
    case "amount-desc":
      collections.sort((a, b) => (b.amount || 0) - (a.amount || 0));
      break;
    case "amount-asc":
      collections.sort((a, b) => (a.amount || 0) - (b.amount || 0));
      break;
    case "name-asc":
      collections.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      collections.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
}

/** Export current collections to CSV and trigger download */
function exportCSV() {
  if (!collections.length) {
    showToast('error',"Nothing to export");
    return;
  }
  const headers = ["id", "name", "products", "amount", "type", "date", "createdAt"];
  const rows = collections.map((c) => {
    const productsJson = JSON.stringify(c.products || []);
    return [
      c.id,
      '"' + ((c.name || "").replace(/"/g, '""')) + '"',
      '"' + ((productsJson || "").replace(/"/g, '""')) + '"',
      c.amount,
      c.type,
      c.date || "",
      c.createdAt || "",
    ].join(",");
  });
  
  const csv = [headers.join(","), ...rows].join("\n");
  
  
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download =  new Date().getDate() + "-collections.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('success',"Exported CSV");
}

/** Parse a simple CSV text and return objects (handles header) */
function parseCSVText(text) {
  
  
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
   
    
  if (!lines.length) return [];
  const header = lines[0].split(",").map((h) => h.trim().toLowerCase());
  
  
  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",");
    // Map by header positions leniently
    const obj = {};
    header.forEach((h, idx) => {
      const raw = cols[idx] ? cols[idx].trim().replace(/^"|"$/g, "") : "";
      obj[h] = raw;
    });
    
    
    // Normalize fields we care about
    if (obj.name || obj.id) {
      results.push({
        id: obj.id ? parseInt(obj.id) : null,
        name: obj.name || "",
        amount: obj.amount ? parseFloat(obj.amount) : 0,
        type: obj.type || "DUE",
        date: obj.date || null,
      });
    }
  }
  return results;
}

/** Handle file import (CSV) */
function handleImportFile(file) {
  console.log(file);
  
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const text = e.target.result;
    const parsed = parseCSVText(text);
    if (!parsed.length) {
      showToast('error',"No records found in CSV");
      return;
    }
    // Assign new ids for imported records
    let maxId = collections.length
      ? Math.max(...collections.map((c) => c.id || 0))
      : 0;
    parsed.forEach((p) => {
      maxId += 1;
      collections.push({
        id: maxId,
        name: p.name,
        amount: p.amount || 0,
        type: p.type || "DUE",
        date: p.date || null,
      });
    });
    saveToStorage();
    renderCollections();
    showToast(`Imported ${parsed.length} records`);
  };
  reader.readAsText(file, "utf-8");
}

// Suggestion click delegation
document.addEventListener("click", (e) => {
  // search suggestions
  const si = e.target.closest("#search-suggestions li");
  if (si) {
    const id = parseInt(si.dataset.id);
    const item = collections.find((c) => c.id === id);
    if (item) {
      searchEl.value = item.name;
      searchSuggestionsEl.innerHTML = "";
      searchSuggestionsEl.classList.remove("active");
      // show only relevant tab
      currentFilter = item.type;
      tabsEl
        .querySelectorAll(".tab-button")
        .forEach((btn) =>
          btn.classList.toggle("active", btn.dataset.type === currentFilter)
        );
      renderCollections();
    }
    return;
  }
  // name suggestions - delegated onclick in HTML now handles this
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (
    !e.target.closest("#search-container") &&
    !e.target.closest("#search-suggestions")
  ) {
    searchSuggestionsEl.innerHTML = "";
    searchSuggestionsEl.classList.add("hidden");
  }
  if (
    !e.target.closest("#store-name-field") &&
    !e.target.closest("#name-suggestions")
  ) {
    nameSuggestionsEl.innerHTML = "";
    nameSuggestionsEl.classList.add("hidden");
  }
});

// 4. EVENT LISTENERS
// Tab switching logic

function tabSwitch() {
  const tabButtons = tabsEl.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active class
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      // Update filter and re-render
      currentFilter = button.dataset.type;
      renderCollections();
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Load stored collections (if any) and render
  loadFromStorage();
  appHeaderUpdate();
  updateTabCounts();
  tabSwitch();
  // apply initial sort
  if (sortSelectEl && sortSelectEl.value) {
    sortCollections(sortSelectEl.value);
  }
  renderCollections();

  // Hook up export/import controls
  if (exportBtnEl) exportBtnEl.addEventListener("click", exportCSV);
  if (importBtnEl)
    importBtnEl.addEventListener(
      "click",
      () => importFileEl && importFileEl.click()
    );
  if (importFileEl)
    importFileEl.addEventListener("change", (e) => {
      const f = e.target.files && e.target.files[0];
      if (f) handleImportFile(f);
      e.target.value = "";
    });
  if (sortSelectEl)
    sortSelectEl.addEventListener("change", (e) => {
      sortCollections(e.target.value);
      saveToStorage();
      renderCollections();
    });

  // Reset button and modal handlers
  if (resetBtn) resetBtn.addEventListener("click", showResetModal);
  if (document.getElementById("confirm-reset-btn"))
    document
      .getElementById("confirm-reset-btn")
      .addEventListener("click", confirmReset);
  if (document.getElementById("cancel-reset-btn"))
    document
      .getElementById("cancel-reset-btn")
      .addEventListener("click", closeResetModal);
  if (resetModalEl) {
    const overlay = resetModalEl.querySelector(".modal-overlay");
    if (overlay)
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeResetModal();
      });
      console.log(collections);
  }

  // Suggestion input listeners
  searchEl.addEventListener("input", updateSearchSuggestions);
  document
    .getElementById("store-name-field")
    .addEventListener("input", updateNameSuggestions);

  // convert modal handlers
  if (document.getElementById("confirm-convert-btn"))
    document
      .getElementById("confirm-convert-btn")
      .addEventListener("click", confirmConvert);
  if (document.getElementById("cancel-convert-btn"))
    document
      .getElementById("cancel-convert-btn")
      .addEventListener("click", closeConvertModal);
  // close convert modal on overlay click
  if (convertModalEl) {
    const overlay = convertModalEl.querySelector(".modal-overlay");
    if (overlay)
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeConvertModal();
      });
  }
});

// Search bar filtering
searchEl.addEventListener("input", renderCollections);

// Modal/CRUD handling
addBtnEl.addEventListener("click", () => openModal()); // Open modal for adding
document
  .getElementById("close-modal-btn")
  .addEventListener("click", closeModal);
document.getElementById("cancel-btn").addEventListener("click", closeModal);

// Close modal when clicking on overlay
document.querySelector(".modal-overlay").addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    closeModal();
  }
});

// Delete modal handlers
document
  .getElementById("confirm-delete-btn")
  .addEventListener("click", confirmDelete);
document
  .getElementById("cancel-delete-btn")
  .addEventListener("click", closeDeleteModal);

// Close delete modal when clicking on overlay
const deleteOverlay = deleteModalEl.querySelector(".modal-overlay");
if (deleteOverlay) {
  deleteOverlay.addEventListener("click", (e) => {
    if (e.target === deleteOverlay) {
      closeDeleteModal();
    }
  });
}

formEl.addEventListener("submit", saveCollection);

