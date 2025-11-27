// 1. DUMMY DATA
 const dumaydata  = [
    { id: 1, name: 'Shop A' },
    { id: 2, name: 'Shop B' },
    { id: 3, name: 'Shop C' },
    { id: 4, name: 'Shop D' },
    { id: 5, name: 'Shop E' },
    { id: 6, name: 'Shop F' },
    { id: 7, name: 'Shop G' },
    { id: 8, name: 'Shop H' },
    { id: 9, name: 'Shop I' },
    { id: 10, name: 'Shop J' },

    { id: 11, name: 'Dhaka Mart' },
    { id: 12, name: 'Chittagong Store' },
    { id: 13, name: 'Rajshahi Traders' },
    { id: 14, name: 'Sylhet Bazar' },
    { id: 15, name: 'Khulna Stores' },
    { id: 16, name: 'Barishal Point' },
    { id: 17, name: 'Rangpur Store' },
    { id: 18, name: 'Mymensingh Super Shop' },
    { id: 19, name: 'Kurigram Enterprise' },
    { id: 20, name: 'Bogra Mart' },

    { id: 21, name: 'Narayanganj Variety Store' },
    { id: 22, name: 'Gazipur Corner Shop' },
    { id: 23, name: 'Tangail Bhandar' },
    { id: 24, name: 'Comilla General Store' },
    { id: 25, name: 'Feni Mart' },
    { id: 26, name: 'Noakhali Shop' },
    { id: 27, name: 'Cox’s Bazar Store' },
    { id: 28, name: 'Jessore Traders' },
    { id: 29, name: 'Jhenaidah Store' },
    { id: 30, name: 'Pabna Super Shop' },

    { id: 31, name: 'Sirajganj Mart' },
    { id: 32, name: 'Jamalpur Store' },
    { id: 33, name: 'Sherpur Bazar' },
    { id: 34, name: 'Habiganj General Store' },
    { id: 35, name: 'Sunamganj Shop' },
    { id: 36, name: 'Madaripur Store' },
    { id: 37, name: 'Shariatpur Bhandar' },
    { id: 38, name: 'Gopalganj Traders' },
    { id: 39, name: 'Kishoreganj Store' },
    { id: 40, name: 'Manikganj Store' },

    { id: 41, name: 'Faridpur Mart' },
    { id: 42, name: 'Lakshmipur Store' },
    { id: 43, name: 'Chandpur General Store' },
    { id: 44, name: 'Brahmanbaria Shop' },
    { id: 45, name: 'Gaibandha Store' },
    { id: 46, name: 'Dinajpur Mart' },
    { id: 47, name: 'Thakurgaon Shop' },
    { id: 48, name: 'Panchagarh Store' },
    { id: 49, name: 'Nilphamari Traders' },
    { id: 50, name: 'Lalmonirhat Store' },

    { id: 51, name: 'Meherpur Shop' },
    { id: 52, name: 'Chuadanga Mart' },
    { id: 53, name: 'Kushtia Store' },
    { id: 54, name: 'Magura General Store' },
    { id: 55, name: 'Narail Mart' },
    { id: 56, name: 'Satkhira Store' },
    { id: 57, name: 'Pirojpur Mart' },
    { id: 58, name: 'Jhalokathi Shop' },
    { id: 59, name: 'Bhola General Store' },
    { id: 60, name: 'Patuakhali Mart' },

    { id: 61, name: 'Barguna Store' },
    { id: 62, name: 'Bandarban Mart' },
    { id: 63, name: 'Rangamati Store' },
    { id: 64, name: 'Khagrachari Traders' },
    { id: 65, name: 'Munshiganj Bazar' },
    { id: 66, name: 'Netrakona Store' },
    { id: 67, name: 'Bogura Super Mart' },
    { id: 68, name: 'Chapai Nawabganj Store' },
    { id: 69, name: 'Naogaon Mart' },
    { id: 70, name: 'Joypurhat Store' },

    { id: 71, name: 'Narsingdi Store' },
    { id: 72, name: 'Moulvibazar Shop' },
    { id: 73, name: 'Gazi Super Shop' },
    { id: 74, name: 'Metro Cash & Carry' },
    { id: 75, name: 'City Mart' },
    { id: 76, name: 'Deshi Bazar' },
    { id: 77, name: 'Family Needs Store' },
    { id: 78, name: 'Daily Fresh Mart' },
    { id: 79, name: 'Green Valley Store' },
    { id: 80, name: 'Modern Traders' },

    { id: 81, name: 'Prime Mart' },
    { id: 82, name: 'Quality Store' },
    { id: 83, name: 'Local Bazar' },
    { id: 84, name: 'Mini Market' },
    { id: 85, name: 'New Line Store' },
    { id: 86, name: 'Kazi General Store' },
    { id: 87, name: 'Amin Traders' },
    { id: 88, name: 'Bhai Bhai Store' },
    { id: 89, name: 'Super Discount Mart' },
    { id: 90, name: 'Daily Needs Store' },

    { id: 91, name: 'Market Point' },
    { id: 92, name: 'Bismillah Store' },
    { id: 93, name: 'Al Madina Mart' },
    { id: 94, name: 'Rupali Store' },
    { id: 95, name: 'Golden Mart' },
    { id: 96, name: 'Bangla Store' },
    { id: 97, name: 'National Mart' },
    { id: 98, name: 'Popular Store' },
    { id: 99, name: 'People’s Market' },
    { id: 100, name: 'Shop BD' }
];
let appName = 'Tanvir';
let appTitle = 'Collection Manager';
let appSubtitle = 'Track your dues and cash collections with ease';
let collections = [];
let currentFilter = 'DUE'; // Default view is DUE

// 2. DOM ELEMENTS
const listEl = document.getElementById('collection-list');
const searchEl = document.getElementById('store-search');
const tabsEl = document.querySelector('.tab-navigation'); // Update selector for modern HTML
const addBtnEl = document.getElementById('add-store-btn');
const modalEl = document.getElementById('modal');
 const nameEl = document.getElementById('store-name-field');
const formEl = document.getElementById('store-form');
const deleteModalEl = document.getElementById('delete-modal');
const toastEl = document.getElementById('toast');
const sortSelectEl = document.getElementById('sort-select');
const exportBtnEl = document.getElementById('export-csv');
const importBtnEl = document.getElementById('import-csv');
const importFileEl = document.getElementById('import-file');
const convertModalEl = document.getElementById('convert-modal');
const resetModalEl = document.getElementById('reset-modal');
let pendingConvertId = null; // Track which item to convert
let pendingDeleteId = null; // Track which item to delete

const STORAGE_KEY = 'collections_v1';
const RESET_PASSWORD = '1234'; // Simple password for reset

// Suggestion elements
const searchSuggestionsEl = document.getElementById('search-suggestions');
const nameSuggestionsEl = document.getElementById('name-suggestions');

// Reset button
const resetBtn = document.getElementById('reset-btn');

// QR scan elements
const scanBtn = document.getElementById('scan-qr-btn');
const stopScanBtn = document.getElementById('stop-qr-btn');
const qrVideo = document.getElementById('qr-video');
let qrStream = null;
let barcodeDetector = null;
let qrScanInterval = null;

/** Persist collections to localStorage */
function saveToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(collections));
    } catch (e) {
        console.error('Failed to save to storage', e);
    }
}
/** Update application header with name and title */
function appHeaderUpdate() {
    document.querySelector('.brand-name').textContent = appName;
    document.querySelector('.brand-title').textContent = appTitle;

}

/** Facebook-like time formatter (e.g. "Just now", "5m ago", "Yesterday at 3:15 PM") */
function formatTimeShort(iso) {
    if (!iso) return '';
    const then = new Date(iso);
    const now = new Date();
    const diffMs = now - then;
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 5) return 'Just now';
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
    const opts = { month: 'short', day: 'numeric' };
    if (then.getFullYear() === now.getFullYear()) {
        return `${then.toLocaleDateString(undefined, opts)} at ${formatClock(then)}`;
    }
    const optsYear = { month: 'short', day: 'numeric', year: 'numeric' };
    return `${then.toLocaleDateString(undefined, optsYear)} at ${formatClock(then)}`;
}

function formatClock(d) {
    let hrs = d.getHours();
    const mins = d.getMinutes();
    const ampm = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12 || 12;
    return `${hrs}:${String(mins).padStart(2, '0')} ${ampm}`;
}

/** Update small numeric badges on tab buttons and header top bar */
function updateTabCounts() {
    const dueCount = collections.filter(c => c.type === 'DUE').length;
    const cashCount = collections.filter(c => c.type === 'CASH').length;
    const dueBtn = tabsEl.querySelector('.tab-button[data-type="DUE"]');
    const cashBtn = tabsEl.querySelector('.tab-button[data-type="CASH"]');

    if (dueBtn) {
        let badge = dueBtn.querySelector('.tab-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'tab-badge';
            dueBtn.appendChild(badge);
        }
        badge.textContent = dueCount;
    }

    if (cashBtn) {
        let badge = cashBtn.querySelector('.tab-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'tab-badge';
            cashBtn.appendChild(badge);
        }
        badge.textContent = cashCount;
    }

    // Header small badges
    const topDue = document.getElementById('top-due-count');
    const topCash = document.getElementById('top-cash-count');
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
        console.error('Failed to load from storage', e);
    }
}
// 3. CORE FUNCTIONS

/** Renders the list based on the current filter and search term. */
function renderCollections() {
    listEl.innerHTML = ''; // Clear existing list
    
    const searchTerm = searchEl.value.toLowerCase();
    
    // Filter by Tab and Search Term
    const filteredCollections = collections.filter(item => {
        const matchesType = item.type === currentFilter;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                              item.id.toString().includes(searchTerm);
        return matchesType && matchesSearch;
    });

    if (filteredCollections.length === 0) {
        document.getElementById('empty-state').style.display = 'flex';
        updateSummary();
        return;
    }
    
    document.getElementById('empty-state').style.display = 'none';

    // Render List Items
    filteredCollections.forEach(item => {
        const li = document.createElement('li');
        li.className = `collection-item ${item.type.toLowerCase()}`; // Modern class names
        li.dataset.id = item.id;
        const displayDate = item.date ? new Date(item.date).toLocaleDateString() : '';
    const createdAgo = item.createdAt ? formatTimeShort(item.createdAt) : '';
        
        li.innerHTML = `
            <div class="collection-info">
                <div class="collection-name">${item.name}</div>
                <div class="collection-meta">
                    ${createdAgo ? `<span>⏱ ${createdAgo}</span>` : ''}
                    
                </div>
            </div>
            <div class="collection-amount">${item.amount.toLocaleString()} BDT</div>
            <div class="collection-actions">
                ${item.type === 'DUE' ? `<button class="action-btn collect" onclick="showConvertModal(${item.id})" title="Collect"><i class=\"fa-solid fa-hand-holding-dollar\"></i></button>` : ''}
                <button class="action-btn" onclick="openModal(${item.id})" title="Edit"><i class=\"fa-solid fa-pen\"></i></button>
                <button class="action-btn danger" onclick="showDeleteModal(${item.id})" title="Delete"><i class=\"fa-solid fa-trash\"></i></button>
            </div>
        `;
        listEl.appendChild(li);
        
    });
    
    updateSummary();
}

/** Update suggestion list for the global search input */
function updateSearchSuggestions() {
    const q = (searchEl.value || '').trim().toLowerCase();
    if (!q) { 
        searchSuggestionsEl.innerHTML = ''; 
        searchSuggestionsEl.classList.remove('active'); 
        return; 
    }
    const matches = collections.filter(c => c.name.toLowerCase().includes(q) || c.id.toString().includes(q)).slice(0, 10);
    if (!matches.length) { 
        searchSuggestionsEl.innerHTML = ''; 
        searchSuggestionsEl.classList.remove('active'); 
        return; 
    }
    searchSuggestionsEl.classList.add('active');
    searchSuggestionsEl.innerHTML = matches.map(m => `<li data-id="${m.id}"><strong>${m.name}</strong><br><small>ID: ${m.id} · ${m.type} · ${m.amount.toLocaleString()} BDT</small></li>`).join('');
}

/** Update suggestion list for the name input in the modal */
function updateNameSuggestions() {
    const q = (nameEl.value || '').trim().toLowerCase();
    if (!q) { 
        nameSuggestionsEl.innerHTML = ''; 
        nameSuggestionsEl.classList.remove('active'); 
        return; 
    }
    const matches = dumaydata.filter(c => c.name.toLowerCase().includes(q)).slice(0, 8);
    if (!matches.length) { 
        nameSuggestionsEl.innerHTML = ''; 
        nameSuggestionsEl.classList.remove('active'); 
        return; 
    }
    nameSuggestionsEl.classList.add('active');  
    nameSuggestionsEl.innerHTML = matches.map(m => `<li onclick="setName('${m.name.replace(/'/g, "\\'")}')" data-id="${m.id}">${m.name}</li>`).join('');
}

/**  update model name suggestion */
function setName(name) {
     nameEl.value = name;
     nameSuggestionsEl.classList.remove('active');
}

/** Updates the totals in the summary card. */
function updateSummary() {
    const totalDue = collections
        .filter(item => item.type === 'DUE')
        .reduce((sum, item) => sum + item.amount, 0);

    const totalCash = collections
        .filter(item => item.type === 'CASH')
        .reduce((sum, item) => sum + item.amount, 0);

    document.getElementById('total-stores').textContent = collections.length;
    document.getElementById('total-due').textContent = `${totalDue.toLocaleString()} BDT`;
    document.getElementById('total-cash').textContent = `${totalCash.toLocaleString()} BDT`;
    // Also update tab badges and header counts
    updateTabCounts();
}

/** Opens the modal for adding or editing an item. */
function openModal(id = null) {
    // Reset form fields
    formEl.reset();
    document.getElementById('store-id-field').value = '';
    
    if (id) {
        // EDIT MODE
        // require password before editing
        const p = prompt('Enter password to edit:');
        if (p !== RESET_PASSWORD) {
            showToast('❌ Incorrect password');
            return;
        }
        const item = collections.find(c => c.id === id);
        if (item) {
            document.getElementById('store-id-field').value = item.id;
            document.getElementById('store-name-field').value = item.name;
            document.getElementById('store-amount-field').value = item.amount;
            document.getElementById('collection-type-field').value = item.type;
            document.getElementById('store-date-field').value = item.date || '';
            document.getElementById('modal-title').textContent = 'Edit Collection';
        }
    } else {
        // ADD MODE
        document.getElementById('modal-title').textContent = 'Add New Collection';
        // default date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('store-date-field').value = today;
        document.getElementById('collection-type-field').value = currentFilter;
    }
    
    modalEl.classList.add('active'); // Show modal with animation
}

/** Closes the modal */
function closeModal() {
    modalEl.classList.remove('active');
}

/** Handles the form submission for adding or editing. */
function saveCollection(event) {
    event.preventDefault();

    const id = parseInt(document.getElementById('store-id-field').value);
    const name = document.getElementById('store-name-field').value;
    const amount = parseFloat(document.getElementById('store-amount-field').value);
    const type = document.getElementById('collection-type-field').value;
    const date = document.getElementById('store-date-field').value || null;

    const newCollection = { name, amount, type, date };
    
    if (id) {
        // UPDATE
        const index = collections.findIndex(c => c.id === id);
        if (index > -1) {
            // preserve createdAt when updating
            const existing = collections[index];
            collections[index] = { ...existing, ...newCollection, createdAt: existing.createdAt || existing.createdAt };
            showToast('✅ Collection updated successfully!');
            saveToStorage();
        }
    } else {
        // CREATE
        const newId = collections.length > 0 ? Math.max(...collections.map(c => c.id)) + 1 : 1;
        const createdAt = new Date().toISOString();
        collections.push({ id: newId, ...newCollection, createdAt });
        showToast('✅ Collection added successfully!');
        saveToStorage();
    }
    
    closeModal(); // Hide modal
    renderCollections();
}

/** Shows the delete confirmation modal */
function showDeleteModal(id) {
    const item = collections.find(c => c.id === id);
    if (item) {
        // require password before delete
        const p = prompt('Enter password to delete:');
        if (p !== RESET_PASSWORD) {
            showToast('❌ Incorrect password');
            return;
        }
        pendingDeleteId = id;
        document.getElementById('delete-message').textContent = `Are you sure you want to delete "${item.name}" (${item.amount} BDT)?`;
        deleteModalEl.classList.add('active');
    }
}

/** Shows the convert (DUE -> CASH) confirmation modal */
function showConvertModal(id) {
    const item = collections.find(c => c.id === id);
    if (item && item.type === 'DUE') {
        pendingConvertId = id;
    document.getElementById('convert-message').textContent = `Mark "${item.name}" (${item.amount} BDT) as collected?`;
        convertModalEl.classList.add('active');
    }
}

/** Closes the convert modal */
function closeConvertModal() {
    if (convertModalEl) convertModalEl.classList.remove('active');
    pendingConvertId = null;
}

/** Confirms conversion from DUE to CASH */
function confirmConvert() {
    if (pendingConvertId !== null) {
        const idx = collections.findIndex(c => c.id === pendingConvertId);
        if (idx > -1) {
            // change type to CASH and set date to today
            const today = new Date().toISOString().split('T')[0];
            collections[idx].type = 'CASH';
            collections[idx].date = today;
            saveToStorage();
            showToast(`💵 "${collections[idx].name}" marked as collected.`);
            closeConvertModal();
            updateSummary();
            renderCollections();
        }
    }
}

/** Closes the delete confirmation modal */
function closeDeleteModal() {
    deleteModalEl.classList.remove('active');
    pendingDeleteId = null;
}

/** Confirms and deletes a collection item. */
function confirmDelete() {
    if (pendingDeleteId !== null) {
        const item = collections.find(c => c.id === pendingDeleteId);
        collections = collections.filter(item => item.id !== pendingDeleteId);
        showToast(`🗑️ "${item.name}" deleted successfully!`);
        saveToStorage();
        updateSummary();
        closeDeleteModal();
        renderCollections();
    }
}

/** Shows a toast notification */
function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('active');
    
    setTimeout(() => {
        toastEl.classList.remove('active');
    }, 3000);
}

/** Show reset confirmation modal */
function showResetModal() {
    document.getElementById('reset-password').value = '';
    resetModalEl.classList.add('active');
}

/** Close reset modal */
function closeResetModal() {
    if (resetModalEl) resetModalEl.classList.remove('active');
    document.getElementById('reset-password').value = '';
}

/** Confirm reset with password verification */
function confirmReset() {
    const passwordInput = document.getElementById('reset-password');
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword !== RESET_PASSWORD) {
        showToast('❌ Incorrect password');
        return;
    }
    
    // Clear all data
    collections = [];
    saveToStorage();
    renderCollections();
    updateSummary();
    closeResetModal();
    showToast('🗑️ All data has been reset');
}

/** Sort the master collections array based on selection */
function sortCollections(mode) {
    switch (mode) {
        case 'newest':
            collections.sort((a,b) => (b.id || 0) - (a.id || 0));
            break;
        case 'oldest':
            collections.sort((a,b) => (a.id || 0) - (b.id || 0));
            break;
        case 'amount-desc':
            collections.sort((a,b) => (b.amount || 0) - (a.amount || 0));
            break;
        case 'amount-asc':
            collections.sort((a,b) => (a.amount || 0) - (b.amount || 0));
            break;
        case 'name-asc':
            collections.sort((a,b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            collections.sort((a,b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }
}

/** Export current collections to CSV and trigger download */
function exportCSV() {
    if (!collections.length) {
        showToast('Nothing to export');
        return;
    }
    const headers = ['id','name','amount','type','date'];
    const rows = collections.map(c => (
        [c.id, `"${(c.name || '').replace(/"/g,'""')}"`, c.amount, c.type, c.date || ''].join(',')
    ));
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'collections.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast('Exported CSV');
}

/** Parse a simple CSV text and return objects (handles header) */
function parseCSVText(text) {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (!lines.length) return [];
    const header = lines[0].split(',').map(h => h.trim().toLowerCase());
    const results = [];
    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');
        // Map by header positions leniently
        const obj = {};
        header.forEach((h, idx) => {
            const raw = cols[idx] ? cols[idx].trim().replace(/^"|"$/g, '') : '';
            obj[h] = raw;
        });
        // Normalize fields we care about
        if (obj.name || obj.id) {
            results.push({
                id: obj.id ? parseInt(obj.id) : null,
                name: obj.name || '',
                amount: obj.amount ? parseFloat(obj.amount) : 0,
                type: obj.type || 'DUE',
                date: obj.date || null,
            });
        }
    }
    return results;
}

/** Handle file import (CSV) */
function handleImportFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const parsed = parseCSVText(text);
        if (!parsed.length) {
            showToast('No records found in CSV');
            return;
        }
        // Assign new ids for imported records
        let maxId = collections.length ? Math.max(...collections.map(c => c.id || 0)) : 0;
        parsed.forEach(p => {
            maxId += 1;
            collections.push({ id: maxId, name: p.name, amount: p.amount || 0, type: p.type || 'DUE', date: p.date || null });
        });
        saveToStorage();
        renderCollections();
        showToast(`Imported ${parsed.length} records`);
    };
    reader.readAsText(file, 'utf-8');
}

// Suggestion click delegation
document.addEventListener('click', (e) => {
    // search suggestions
    const si = e.target.closest('#search-suggestions li');
    if (si) {
        const id = parseInt(si.dataset.id);
        const item = collections.find(c => c.id === id);
        if (item) {
            searchEl.value = item.name;
            searchSuggestionsEl.innerHTML = '';
            searchSuggestionsEl.classList.remove('active');
            // show only relevant tab
            currentFilter = item.type;
            tabsEl.querySelectorAll('.tab-button').forEach(btn => btn.classList.toggle('active', btn.dataset.type === currentFilter));
            renderCollections();
        }
        return;
    }
    // name suggestions - delegated onclick in HTML now handles this
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-container') && !e.target.closest('#search-suggestions')) {
        searchSuggestionsEl.innerHTML = '';
        searchSuggestionsEl.classList.add('hidden');
    }
    if (!e.target.closest('#store-name-field') && !e.target.closest('#name-suggestions')) {
        nameSuggestionsEl.innerHTML = '';
        nameSuggestionsEl.classList.add('hidden');
    }
});

// 4. EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    // Load stored collections (if any) and render
    loadFromStorage();
    appHeaderUpdate();
    updateTabCounts();
    // apply initial sort
    if (sortSelectEl && sortSelectEl.value) {
        sortCollections(sortSelectEl.value);
    }
    renderCollections();

    // Hook up export/import controls
    if (exportBtnEl) exportBtnEl.addEventListener('click', exportCSV);
    if (importBtnEl) importBtnEl.addEventListener('click', () => importFileEl && importFileEl.click());
    if (importFileEl) importFileEl.addEventListener('change', (e) => {
        const f = e.target.files && e.target.files[0];
        if (f) handleImportFile(f);
        e.target.value = '';
    });
    if (sortSelectEl) sortSelectEl.addEventListener('change', (e) => { sortCollections(e.target.value); saveToStorage(); renderCollections(); });
    
    // Reset button and modal handlers
    if (resetBtn) resetBtn.addEventListener('click', showResetModal);
    if (document.getElementById('confirm-reset-btn')) document.getElementById('confirm-reset-btn').addEventListener('click', confirmReset);
    if (document.getElementById('cancel-reset-btn')) document.getElementById('cancel-reset-btn').addEventListener('click', closeResetModal);
    if (resetModalEl) {
        const overlay = resetModalEl.querySelector('.modal-overlay');
        if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeResetModal(); });
    }
    
    // Suggestion input listeners
    searchEl.addEventListener('input', updateSearchSuggestions);
    document.getElementById('store-name-field').addEventListener('input', updateNameSuggestions);
    
    // convert modal handlers
    if (document.getElementById('confirm-convert-btn')) document.getElementById('confirm-convert-btn').addEventListener('click', confirmConvert);
    if (document.getElementById('cancel-convert-btn')) document.getElementById('cancel-convert-btn').addEventListener('click', closeConvertModal);
    // close convert modal on overlay click
    if (convertModalEl) {
        const overlay = convertModalEl.querySelector('.modal-overlay');
        if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeConvertModal(); });
    }
});

// Tab switching logic
tabsEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-button')) {
        // Update active class
        tabsEl.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update filter and re-render
        currentFilter = e.target.dataset.type;
        renderCollections();
    }
});


// Search bar filtering
searchEl.addEventListener('input', renderCollections);

// Modal/CRUD handling
addBtnEl.addEventListener('click', () => openModal()); // Open modal for adding
document.getElementById('close-modal-btn').addEventListener('click', closeModal);
document.getElementById('cancel-btn').addEventListener('click', closeModal);

// Close modal when clicking on overlay
document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Delete modal handlers
document.getElementById('confirm-delete-btn').addEventListener('click', confirmDelete);
document.getElementById('cancel-delete-btn').addEventListener('click', closeDeleteModal);

// Close delete modal when clicking on overlay
const deleteOverlay = deleteModalEl.querySelector('.modal-overlay');
if (deleteOverlay) {
    deleteOverlay.addEventListener('click', (e) => {
        if (e.target === deleteOverlay) {
            closeDeleteModal();
        }
    });
}

formEl.addEventListener('submit', saveCollection);