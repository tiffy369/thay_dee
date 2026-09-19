/**
 * THAY DEE CLOTHING - Main Application Logic
 * Supports Lao Kip Currency (₭), Custom Category Management, and Lao Language with Phetsarath OT font.
 */

// ==========================================================================
// Multilingual Translations (I18N)
// ==========================================================================
const I18N = {
    th: {
        storeTag: "NEW COLLECTION 2026",
        storeTitle: "เสื้อผ้าดีไซน์มินิมอล<br>ใส่สบาย สไตล์ที่คุณเลือกได้",
        storeDesc: "คัดสรรเนื้อผ้าเกรดพรีเมียม สวมใส่สบาย ระบายอากาศได้ดี ตัดเย็บประณีต พร้อมส่งตรงถึงหน้าบ้านคุณ สั่งซื้อง่าย สแกนจ่ายด้วย BCEL OnePay ทันที",
        searchPlaceholder: "ค้นหาเสื้อผ้า เช่น เสื้อยืด, กางเกง, แจ็กเก็ต...",
        adminBtn: "หลังบ้านร้านค้า",
        cartBtn: "ตะกร้า",
        freeShip: "ส่งฟรีเมื่อช้อปครบ ₭400,000",
        bcelPay: "สแกนจ่ายด้วย BCEL OnePay",
        expressShip: "จัดส่งด่วน 1-2 วัน",
        sortPopular: "เรียงตาม: ยอดนิยม",
        sortPriceAsc: "ราคา: ต่ำไปสูง",
        sortPriceDesc: "ราคา: สูงไปต่ำ",
        addToCart: "ปักตะกร้า",
        quickView: "ดูรายละเอียด",
        outOfStock: "สินค้าหมด",
        inStock: "มีสินค้าพร้อมส่ง",
        selectSize: "เลือกไซส์ (Size):",
        selectColor: "เลือกสี (Color):",
        qty: "จำนวน (Quantity):",
        addCartModal: "เพิ่มลงตะกร้าสินค้า",
        cartTitle: "ตะกร้าสินค้าของคุณ",
        cartEmpty: "ตะกร้าของคุณยังว่างอยู่",
        cartEmptySub: "เลือกช้อปเสื้อผ้าแฟชั่นสไตล์ที่คุณชอบได้เลย",
        shopNow: "เริ่มเลือกซื้อสินค้า",
        freeShipEarned: "ยินดีด้วย! คุณได้รับสิทธิ์จัดส่งฟรีเรียบร้อยแล้ว",
        freeShipRemaining: (rem) => `ซื้อเพิ่มอีก <strong>₭${rem.toLocaleString()}</strong> จะได้รับสิทธิ์ <strong>จัดส่งฟรี!</strong>`,
        subtotal: "ราคารวมสินค้า",
        shippingFee: "ค่าจัดส่ง",
        free: "ฟรี (Free)",
        totalAmount: "ยอดชำระสุทธิ",
        checkoutBtn: "สั่งซื้อและชำระเงิน",
        cancel: "ยกเลิก",
        nextStep: "ต่อไป: สแกนจ่ายด้วย QR Code",
        back: "ย้อนกลับ",
        confirmPay: "แจ้งชำระเงินและยืนยันคำสั่งซื้อ"
    },
    la: {
        storeTag: "NEW COLLECTION 2026",
        storeTitle: "ເສື້ອຜ້າດີໄຊນ໌ມິນິມອນ<br>ໃສ່ສະບາຍ ສະໄຕລ໌ທີ່ທ່ານເລືອກໄດ້",
        storeDesc: "ຄັດສັນເນື້ອຜ້າເກຣດພຣີມຽມ ສວມໃສ່ສະບາຍ ລະບາຍອາກາດໄດ້ດີ ຕັດຫຍິບປານີດ ພ້ອມສົ່ງຕົງເຖິງໜ້າບ້ານທ່ານ ສັ່ງຊື້ງ່າຍ ສະແກນຈ່າຍດ້ວຍ BCEL OnePay ທັນທີ",
        searchPlaceholder: "ຄົ້ນຫາເສື້ອຜ້າ ເຊັ່ນ: ເສື້ອຍືດ, ໂສ້ງ, ແຈັກເກັດ...",
        adminBtn: "ຫຼັງບ້ານຮ້ານຄ້າ",
        cartBtn: "ກະຕ່າ",
        freeShip: "ສົ່ງຟຣີເມື່ອຊື້ຄົບ ₭400,000",
        bcelPay: "ສະແກນຈ່າຍດ້ວຍ BCEL OnePay",
        expressShip: "ຈັດສົ່ງດ່ວນ 1-2 ວັນ",
        sortPopular: "ລຽງຕາມ: ຍອດນິຍົມ",
        sortPriceAsc: "ລາຄາ: ຕ່ຳຫາສູງ",
        sortPriceDesc: "ລາຄາ: ສູງຫາຕ່ຳ",
        addToCart: "ເພີ່ມໃສ່ກະຕ່າ",
        quickView: "ເບິ່ງລາຍລະອຽດ",
        outOfStock: "ສິນຄ້າໝົດ",
        inStock: "ມີສິນຄ້າພ້ອມສົ່ງ",
        selectSize: "ເລືອກໄຊສ໌ (Size):",
        selectColor: "ເລືອກສີ (Color):",
        qty: "ຈຳນວນ (Quantity):",
        addCartModal: "ເພີ່ມໃສ່ກະຕ່າສິນຄ້າ",
        cartTitle: "ກະຕ່າສິນຄ້າຂອງທ່ານ",
        cartEmpty: "ກະຕ່າຂອງທ່ານຍັງວ່າງຢູ່",
        cartEmptySub: "ເລືອກຊື້ເສື້ອຜ້າແຟຊັ່ນສະໄຕລ໌ທີ່ທ່ານມັກໄດ້ເລີຍ",
        shopNow: "ເລີ່ມເລືອກຊື້ສິນຄ້າ",
        freeShipEarned: "ຍິນດີນຳ! ທ່ານໄດ້ຮັບສິດຈັດສົ່ງຟຣີຮຽບຮ້ອຍແລ້ວ",
        freeShipRemaining: (rem) => `ຊື້ຕື່ມອີກ <strong>₭${rem.toLocaleString()}</strong> ຈະໄດ້ຮັບສິດ <strong>ຈັດສົ່ງຟຣີ!</strong>`,
        subtotal: "ລາຄາລວມສິນຄ້າ",
        shippingFee: "ຄ່າຈັດສົ່ງ",
        free: "ຟຣີ (Free)",
        totalAmount: "ຍອດຊຳລະຕົວຈິງ",
        checkoutBtn: "ສັ່ງຊື້ ແລະ ຊຳລະເງິນ",
        cancel: "ຍົກເລີກ",
        nextStep: "ຕໍ່ໄປ: ສະແກນຈ່າຍດ້ວຍ QR Code",
        back: "ຍ້ອນກັບ",
        confirmPay: "ແຈ້ງຊຳລະເງິນ ແລະ ຢືນຢັນຄຳສັ່ງຊື້"
    }
};

// ==========================================================================
// App State & Storage
// ==========================================================================
const AppState = {
    products: [],
    categories: [],
    cart: [],
    orders: [],
    settings: {},
    currentCategory: 'all',
    searchQuery: '',
    sortBy: 'popular',
    currentLang: 'la', // Default to Lao
    quickViewProduct: null,
    selectedSize: '',
    selectedColor: '',
    quickViewQty: 1,
    checkoutStep: 1,
    currentOrderDraft: null,
    slipDataUrl: null,
    paymentTimerId: null,
    uploadedNewProductImages: [],
    isLoggedIn: sessionStorage.getItem('thaydee_admin_logged_in') === 'true',
    editingProductId: null
};

// Price formatter utility (Lao Kip ₭)
function formatPrice(amount) {
    const symbol = (AppState.settings && AppState.settings.currencySymbol) || '₭';
    return `${symbol}${Number(amount || 0).toLocaleString()}`;
}

// Initialize or load from LocalStorage
function initStorage() {
    // Language
    const savedLang = localStorage.getItem('thaydee_lang');
    if (savedLang) {
        AppState.currentLang = savedLang;
    }

    // Categories
    const savedCategories = localStorage.getItem('thaydee_categories');
    if (savedCategories) {
        try {
            AppState.categories = JSON.parse(savedCategories);
        } catch (e) {
            AppState.categories = DEFAULT_CATEGORIES;
        }
    } else {
        AppState.categories = DEFAULT_CATEGORIES;
        saveCategories();
    }

    // Products
    const savedProducts = localStorage.getItem('thaydee_products');
    if (savedProducts) {
        try {
            AppState.products = JSON.parse(savedProducts);
        } catch (e) {
            AppState.products = DEFAULT_PRODUCTS;
        }
    } else {
        AppState.products = DEFAULT_PRODUCTS;
        saveProducts();
    }

    // Settings
    const savedSettings = localStorage.getItem('thaydee_settings');
    if (savedSettings) {
        try {
            AppState.settings = JSON.parse(savedSettings);
        } catch (e) {
            AppState.settings = DEFAULT_STORE_SETTINGS;
        }
    } else {
        AppState.settings = DEFAULT_STORE_SETTINGS;
        saveSettings();
    }

    // Cart
    const savedCart = localStorage.getItem('thaydee_cart');
    if (savedCart) {
        try {
            AppState.cart = JSON.parse(savedCart);
        } catch (e) {
            AppState.cart = [];
        }
    }

    // Orders
    const savedOrders = localStorage.getItem('thaydee_orders');
    if (savedOrders) {
        try {
            AppState.orders = JSON.parse(savedOrders);
        } catch (e) {
            AppState.orders = [];
        }
    }
}

function saveCategories() {
    localStorage.setItem('thaydee_categories', JSON.stringify(AppState.categories));
}

function saveProducts() {
    localStorage.setItem('thaydee_products', JSON.stringify(AppState.products));
}

function saveSettings() {
    localStorage.setItem('thaydee_settings', JSON.stringify(AppState.settings));
}

function saveCart() {
    localStorage.setItem('thaydee_cart', JSON.stringify(AppState.cart));
    updateCartBadge();
}

function saveOrders() {
    localStorage.setItem('thaydee_orders', JSON.stringify(AppState.orders));
}

// ==========================================================================
// Language Switching & Font Override
// ==========================================================================
function switchLanguage(lang) {
    AppState.currentLang = lang;
    localStorage.setItem('thaydee_lang', lang);

    // Toggle Font & CSS Class
    if (lang === 'la') {
        document.body.classList.add('lang-la');
        document.documentElement.setAttribute('lang', 'lo');
    } else {
        document.body.classList.remove('lang-la');
        document.documentElement.setAttribute('lang', 'th');
    }

    // Update active state on header buttons
    const btnTh = document.getElementById('lang-btn-th');
    const btnLa = document.getElementById('lang-btn-la');
    if (btnTh && btnLa) {
        btnTh.classList.toggle('active', lang === 'th');
        btnLa.classList.toggle('active', lang === 'la');
    }

    // Apply translations to UI
    applyLanguageTranslations();
    applyStoreBranding();
    renderCategoryPills();
    renderCatalog();
    renderCart();

    const toastMsg = lang === 'la' ? 'ປ່ຽນເປັນພາສາລາວ ແລະ ຟອນ Phetsarath OT ຮຽບຮ້ອຍແລ້ວ' : 'เปลี่ยนเป็นภาษาไทยเรียบร้อยแล้ว';
    showToast(toastMsg, 'info');
}

function applyLanguageTranslations() {
    const t = I18N[AppState.currentLang] || I18N.th;

    // Header & Hero
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    const btnAdmin = document.getElementById('btn-admin-text');
    if (btnAdmin) btnAdmin.textContent = t.adminBtn;

    const btnCart = document.getElementById('btn-cart-text');
    if (btnCart) btnCart.textContent = t.cartBtn;

    const heroTag = document.getElementById('hero-tag-text');
    if (heroTag) heroTag.textContent = t.storeTag;

    const heroTitle = document.getElementById('hero-title-text');
    if (heroTitle) {
        const customTitle = AppState.currentLang === 'la'
            ? (AppState.settings.heroTitleLa || t.storeTitle)
            : (AppState.settings.heroTitleTh || t.storeTitle);
        heroTitle.innerHTML = customTitle;
    }

    const heroDesc = document.getElementById('hero-desc-text');
    if (heroDesc) {
        const customDesc = AppState.currentLang === 'la'
            ? (AppState.settings.heroDescLa || t.storeDesc)
            : (AppState.settings.heroDescTh || t.storeDesc);
        heroDesc.textContent = customDesc;
    }

    const heroShip = document.getElementById('hero-feat-ship');
    if (heroShip) heroShip.textContent = t.freeShip;

    const heroBcel = document.getElementById('hero-feat-bcel');
    if (heroBcel) heroBcel.textContent = t.bcelPay;

    const heroExpress = document.getElementById('hero-feat-express');
    if (heroExpress) heroExpress.textContent = t.expressShip;

    // Sort Dropdown
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.options[0].text = t.sortPopular;
        sortSelect.options[1].text = t.sortPriceAsc;
        sortSelect.options[2].text = t.sortPriceDesc;
    }
}

// ==========================================================================
// Store Branding (logo image, store name, hero image)
// ==========================================================================
function applyStoreBranding() {
    const s = AppState.settings || {};

    // --- Header logo badge: show profile image or initials ---
    const logoBadge = document.getElementById('logo-badge-wrap');
    if (logoBadge) {
        if (s.storeLogoImage) {
            logoBadge.innerHTML = `<img src="${s.storeLogoImage}" alt="Store Logo" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`;
            logoBadge.style.padding = '0';
            logoBadge.style.overflow = 'hidden';
            logoBadge.style.background = '#f1f5f9';
        } else {
            // Derive initials from store name
            const name = s.storeName || 'THAY DEE';
            const words = name.replace(/[^a-zA-Z\u0E00-\u0E7F\u0E80-\u0EFF ]/g, ' ').trim().split(/\s+/);
            const initials = words.length >= 2
                ? (words[0][0] + words[1][0]).toUpperCase()
                : (words[0] || 'TD').substring(0, 2).toUpperCase();
            logoBadge.innerHTML = initials;
            logoBadge.style.padding = '';
            logoBadge.style.overflow = '';
            logoBadge.style.background = '';
        }
    }

    // --- Header store name ---
    const logoName = document.getElementById('logo-store-name');
    if (logoName) {
        // Show first segment of storeName (before parenthesis)
        const displayName = (s.storeName || 'THAY DEE').split('(')[0].trim();
        logoName.textContent = displayName;
    }

    // --- Header tagline ---
    const logoTagline = document.getElementById('logo-store-tagline');
    if (logoTagline) {
        const tagline = s.storeTagline || 'CLOTHING & APPAREL';
        // Show short tagline: first 30 chars or first line
        logoTagline.textContent = tagline.length > 36 ? tagline.substring(0, 36) + '…' : tagline;
    }

    // --- Hero banner image ---
    const heroBannerImg = document.getElementById('hero-banner-img');
    if (heroBannerImg) {
        if (s.heroBannerImage) {
            heroBannerImg.src = s.heroBannerImage;
        } else {
            heroBannerImg.src = 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1000&auto=format&fit=crop&q=80';
        }
    }
}

// ==========================================================================
// Category Pills & Dynamic Categories
// ==========================================================================
function renderCategoryPills() {
    const container = document.getElementById('category-pills-container');
    if (!container) return;

    const isLao = AppState.currentLang === 'la';

    container.innerHTML = AppState.categories.map(cat => {
        const displayName = (isLao && cat.nameLa) ? cat.nameLa : (cat.nameTh || cat.nameLa);
        const isActive = AppState.currentCategory === cat.id ? 'active' : '';
        return `
            <button class="category-pill ${isActive}" data-category="${cat.id}" onclick="selectCategory('${cat.id}')">
                ${displayName}
            </button>
        `;
    }).join('');
}

function selectCategory(catId) {
    AppState.currentCategory = catId;
    renderCategoryPills();
    renderCatalog();
}

// ==========================================================================
// Toast Notifications
// ==========================================================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = `
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
    `;
    if (type === 'success') {
        icon = `
            <svg width="18" height="18" fill="none" stroke="#10b981" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        `;
    } else if (type === 'error') {
        icon = `
            <svg width="18" height="18" fill="none" stroke="#ef4444" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        `;
    }

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================================================
// Catalog Rendering & Filtering
// ==========================================================================
function renderCatalog() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const isLao = AppState.currentLang === 'la';
    const t = I18N[AppState.currentLang] || I18N.th;

    let filtered = AppState.products.filter(item => {
        const matchesCategory = (AppState.currentCategory === 'all') || (item.category === AppState.currentCategory);
        const query = AppState.searchQuery.trim().toLowerCase();
        const matchesSearch = !query || 
            item.name.toLowerCase().includes(query) || 
            (item.nameLa && item.nameLa.toLowerCase().includes(query)) ||
            (item.nameEn && item.nameEn.toLowerCase().includes(query));
        return matchesCategory && matchesSearch;
    });

    // Sorting
    if (AppState.sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (AppState.sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (AppState.sortBy === 'popular') {
        filtered.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #64748b;">
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin: 0 auto 12px auto; color: #94a3b8;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 style="font-size: 1.1rem; color: #1e293b; margin-bottom: 6px;">
                    ${isLao ? 'ບໍ່ພົບສິນຄ້າທີ່ຄົ້ນຫາ' : 'ไม่พบสินค้าที่ค้นหา'}
                </h3>
                <p style="font-size: 0.9rem;">
                    ${isLao ? 'ລອງຄົ້ນຫາດ້ວຍຄຳສັບອື່ນ ຫຼື ເລືອກໝວດໝູ່ອື່ນເບິ່ງເດີ້' : 'ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่อื่นดูนะครับ'}
                </p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const discountBadge = product.originalPrice && product.originalPrice > product.price
            ? `<span class="badge badge-danger card-badge">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>`
            : (product.tag ? `<span class="badge badge-black card-badge">${(isLao && product.tagLa) ? product.tagLa : product.tag}</span>` : '');

        // Resolve category name in Lao/Thai
        const catObj = AppState.categories.find(c => c.id === product.category);
        const catName = catObj ? ((isLao && catObj.nameLa) ? catObj.nameLa : catObj.nameTh) : (product.categoryName || 'Fashion');
        const prodTitle = (isLao && product.nameLa) ? product.nameLa : product.name;

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="card-image-wrap" onclick="openQuickView(${product.id})">
                    ${discountBadge}
                    <img src="${product.images[0]}" alt="${prodTitle}" loading="lazy">
                    <button class="card-quick-btn" onclick="event.stopPropagation(); openQuickView(${product.id})">
                        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        ${t.quickView}
                    </button>
                </div>
                <div class="card-body">
                    <div class="card-category">${catName}</div>
                    <div class="card-title" onclick="openQuickView(${product.id})">${prodTitle}</div>
                    <div class="card-title-en">${product.nameEn || ''}</div>
                    <div class="card-price-row">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                    </div>
                    <div class="card-action-row">
                        ${product.stock > 0 
                            ? `<button class="btn btn-primary btn-block btn-sm" onclick="quickAddToCart(${product.id})">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                                ${t.addToCart}
                               </button>`
                            : `<button class="btn btn-outline btn-block btn-sm" disabled style="background:#f1f5f9;color:#94a3b8;border:1px dashed #cbd5e1;">
                                ${isLao ? 'ສິນຄ້າໝົດ' : 'สินค้าหมด'}
                               </button>`
                        }
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================================================
// Quick View Modal
// ==========================================================================
function openQuickView(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;

    const isLao = AppState.currentLang === 'la';
    const t = I18N[AppState.currentLang] || I18N.th;

    AppState.quickViewProduct = product;
    AppState.selectedSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Free Size';
    AppState.selectedColor = product.colors && product.colors.length > 0 ? product.colors[0].name : '';
    AppState.quickViewQty = 1;

    const modal = document.getElementById('quickview-modal');
    const content = document.getElementById('quickview-content');

    const sizesHtml = product.sizes.map((s, i) => `
        <button type="button" class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectModalSize('${s}', this)">
            ${s}
        </button>
    `).join('');

    const colorsHtml = product.colors.map((c, i) => `
        <button type="button" class="color-swatch-btn ${i === 0 ? 'active' : ''}" onclick="selectModalColor('${c.name}', this)">
            <span class="color-swatch-circle" style="background-color: ${c.code}"></span>
            <span>${c.name}</span>
        </button>
    `).join('');

    const thumbsHtml = product.images.map((img, i) => `
        <img src="${img}" class="thumb-item ${i === 0 ? 'active' : ''}" onclick="changePreviewImg('${img}', this)" alt="Thumbnail">
    `).join('');

    const catObj = AppState.categories.find(c => c.id === product.category);
    const catName = catObj ? ((isLao && catObj.nameLa) ? catObj.nameLa : catObj.nameTh) : (product.categoryName || 'Fashion');
    const prodTitle = (isLao && product.nameLa) ? product.nameLa : product.name;

    content.innerHTML = `
        <div class="quick-view-grid">
            <div class="quick-view-gallery">
                <img id="modal-main-img" src="${product.images[0]}" class="main-preview-img" alt="${prodTitle}">
                <div class="thumb-strip">${thumbsHtml}</div>
            </div>
            <div class="quick-view-details">
                <span class="badge badge-black" style="align-self: flex-start; margin-bottom: 8px;">${catName}</span>
                <h2 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 4px;">${prodTitle}</h2>
                <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 12px;">${product.nameEn || ''}</p>
                
                <div class="card-price-row" style="margin-bottom: 16px;">
                    <span class="current-price" style="font-size: 1.6rem; color: #dc2626;">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `<span class="original-price" style="font-size: 1.1rem;">${formatPrice(product.originalPrice)}</span>` : ''}
                    <span class="badge badge-success" style="margin-left: 8px;">${t.inStock} (${product.stock})</span>
                </div>

                <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; margin-bottom: 18px; border-top: 1px solid #f1f5f9; padding-top: 12px;">
                    ${product.description}
                </p>

                <div class="option-group">
                    <label class="option-label">${t.selectSize}</label>
                    <div class="size-selector">${sizesHtml}</div>
                </div>

                <div class="option-group">
                    <label class="option-label">${t.selectColor}</label>
                    <div class="color-selector">${colorsHtml}</div>
                </div>

                <div class="option-group" style="margin-top: 20px;">
                    <label class="option-label">${t.qty}</label>
                    <div style="display: flex; align-items: center; gap: 14px;">
                        <div class="quantity-stepper">
                            <button type="button" onclick="adjustQuickViewQty(-1)">-</button>
                            <span id="quickview-qty-display">1</span>
                            <button type="button" onclick="adjustQuickViewQty(1)">+</button>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 28px; display: flex; gap: 12px;">
                    <button class="btn btn-primary btn-block" style="padding: 12px;" onclick="addQuickViewToCart()">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        ${t.addCartModal}
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeQuickView() {
    const modal = document.getElementById('quickview-modal');
    if (modal) modal.classList.remove('active');
}

function selectModalSize(size, el) {
    AppState.selectedSize = size;
    const parent = el.parentElement;
    parent.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');
}

function selectModalColor(color, el) {
    AppState.selectedColor = color;
    const parent = el.parentElement;
    parent.querySelectorAll('.color-swatch-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');
}

function changePreviewImg(src, el) {
    const mainImg = document.getElementById('modal-main-img');
    if (mainImg) mainImg.src = src;
    const strip = el.parentElement;
    strip.querySelectorAll('.thumb-item').forEach(img => img.classList.remove('active'));
    el.classList.add('active');
}

function adjustQuickViewQty(delta) {
    AppState.quickViewQty = Math.max(1, AppState.quickViewQty + delta);
    const display = document.getElementById('quickview-qty-display');
    if (display) display.textContent = AppState.quickViewQty;
}

function addQuickViewToCart() {
    if (!AppState.quickViewProduct) return;
    addToCart(
        AppState.quickViewProduct,
        AppState.selectedSize,
        AppState.selectedColor,
        AppState.quickViewQty
    );
    closeQuickView();
}

function quickAddToCart(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Free Size';
    const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0].name : 'Default';
    addToCart(product, defaultSize, defaultColor, 1);
}

// ==========================================================================
// Shopping Cart Functions
// ==========================================================================
function addToCart(product, size, color, quantity = 1) {
    const isLao = AppState.currentLang === 'la';
    const prodTitle = (isLao && product.nameLa) ? product.nameLa : product.name;

    const existingIndex = AppState.cart.findIndex(item => 
        item.id === product.id && item.size === size && item.color === color
    );

    const currentQtyInCart = existingIndex > -1 ? AppState.cart[existingIndex].quantity : 0;
    const realProd = AppState.products.find(p => p.id === product.id) || product;
    
        // Verify stock for the selected size
    const sizeStock = realProd.stockBySize ? realProd.stockBySize[size] : realProd.stock;
    if (currentQtyInCart + quantity > sizeStock) {
        showToast(isLao ? `ສິນ​ຄ້າໃນສະ​ຕັອກບໍ່​ພຽງ​ພໍ (ເຫຼືອ ${sizeStock})` : `สินค้าคงคลังไม่เพียงพอ (เหลือ ${sizeStock})`, "error");
        return;
    }

    if (existingIndex > -1) {
        AppState.cart[existingIndex].quantity += quantity;
    } else {
        AppState.cart.push({
            id: product.id,
            name: prodTitle,
            price: product.price,
            image: product.images[0],
            size: size,
            color: color,
            quantity: quantity
        });
    }

    saveCart();
    renderCart();
    const msg = isLao ? `ເພີ່ມ "${prodTitle} (${size})" ໃສ່ກະຕ່າແລ້ວ` : `เพิ่ม "${prodTitle} (${size})" ลงในตะกร้าแล้ว`;
    showToast(msg, 'success');
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (badge) {
        badge.textContent = totalCount;
        badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    }
}

function toggleCartDrawer(isOpen) {
    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (isOpen) {
        renderCart();
        backdrop.classList.add('active');
    } else {
        backdrop.classList.remove('active');
    }
}

function changeCartItemQty(index, delta) {
    if (!AppState.cart[index]) return;
    if (delta > 0) {
        const item = AppState.cart[index];
        const realProd = AppState.products.find(p => p.id === item.id);
        const sizeStock = realProd && realProd.stockBySize ? realProd.stockBySize[item.size] : realProd ? realProd.stock : 0;
        if (realProd && item.quantity + delta > sizeStock) {
            const isLao = AppState.currentLang === 'la';
            showToast(isLao ? `ສິນ​ຄ້າໃນສະ​ຕັອກບໍ່​ພຽງ​ພໍ (ເຫຼືອ ${sizeStock})` : `สินค้าคงคลังไม่เพียงพอ (เหลือ ${sizeStock})`, 'error');
            return;
        }
    }

    AppState.cart[index].quantity += delta;
    if (AppState.cart[index].quantity <= 0) {
        AppState.cart.splice(index, 1);
    }
    saveCart();
    renderCart();
}

function removeCartItem(index) {
    if (!AppState.cart[index]) return;
    AppState.cart.splice(index, 1);
    saveCart();
    renderCart();
    showToast(AppState.currentLang === 'la' ? 'ລຶບສິນຄ້າອອກຈາກກະຕ່າແລ້ວ' : 'นำสินค้าออกจากตะกร้าแล้ว');
}

function calculateCartTotals() {
    const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const threshold = (AppState.settings && AppState.settings.freeShippingThreshold) || 400000;
    const shipping = (subtotal >= threshold || subtotal === 0) ? 0 : ((AppState.settings && AppState.settings.shippingFee) || 20000);
    const total = subtotal + shipping;
    return { subtotal, shipping, total, threshold };
}

function renderCart() {
    const itemsContainer = document.getElementById('cart-items-list');
    const footerContainer = document.getElementById('cart-drawer-footer');
    const freeShippingBar = document.getElementById('cart-free-shipping-bar');
    if (!itemsContainer || !footerContainer) return;

    const t = I18N[AppState.currentLang] || I18N.th;

    if (AppState.cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="cart-empty-view">
                <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin: 0 auto 16px auto; color: #cbd5e1;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <h4 style="font-size: 1.1rem; font-weight: 600; color: #1e293b; margin-bottom: 6px;">${t.cartEmpty}</h4>
                <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 20px;">${t.cartEmptySub}</p>
                <button class="btn btn-outline" onclick="toggleCartDrawer(false)">${t.shopNow}</button>
            </div>
        `;
        footerContainer.style.display = 'none';
        if (freeShippingBar) freeShippingBar.style.display = 'none';
        return;
    }

    footerContainer.style.display = 'block';
    if (freeShippingBar) freeShippingBar.style.display = 'block';

    const { subtotal, shipping, total, threshold } = calculateCartTotals();

    // Free shipping progress bar text
    if (subtotal >= threshold) {
        freeShippingBar.innerHTML = `
            <div style="display: flex; align-items: center; gap: 6px;">
                <svg width="18" height="18" fill="none" stroke="#16a34a" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <strong>${t.freeShipEarned}</strong>
            </div>
        `;
    } else {
        const remaining = threshold - subtotal;
        freeShippingBar.innerHTML = `<div>${t.freeShipRemaining(remaining)}</div>`;
    }

    itemsContainer.innerHTML = AppState.cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" class="cart-item-img" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-variant">${item.size} | ${item.color}</div>
                <div class="cart-item-bottom">
                    <div class="quantity-stepper">
                        <button type="button" onclick="changeCartItemQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button type="button" onclick="changeCartItemQty(${index}, 1)">+</button>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
                        <button class="cart-item-delete" onclick="removeCartItem(${index})" title="ลบ">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    footerContainer.innerHTML = `
        <div class="summary-line">
            <span>${t.subtotal}</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-line">
            <span>${t.shippingFee}</span>
            <span>${shipping === 0 ? '<strong class="text-success">' + t.free + '</strong>' : formatPrice(shipping)}</span>
        </div>
        <div class="summary-line total">
            <span>${t.totalAmount}</span>
            <span style="color: #dc2626;">${formatPrice(total)}</span>
        </div>
        <button class="btn btn-primary btn-block" style="padding: 14px; font-size: 1rem;" onclick="startCheckout()">
            ${t.checkoutBtn} (${formatPrice(total)})
        </button>
    `;
}

// ==========================================================================
// Checkout & Shipping Address & BCEL OnePay Flow
// ==========================================================================
function startCheckout() {
    if (AppState.cart.length === 0) {
        showToast(AppState.currentLang === 'la' ? 'ກະລຸນາເລືອກສິນຄ້າໃສ່ກະຕ່າກ່ອນເດີ້' : 'กรุณาเลือกสินค้าใส่ตะกร้าก่อนนะครับ', 'error');
        return;
    }
    toggleCartDrawer(false);
    AppState.checkoutStep = 1;
    AppState.slipDataUrl = null;
    openCheckoutModal();
}

function openCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.add('active');
    renderCheckoutStep();
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('active');
    if (AppState.paymentTimerId) {
        clearInterval(AppState.paymentTimerId);
    }
}

function renderCheckoutStep() {
    const content = document.getElementById('checkout-step-content');
    const { subtotal, shipping, total } = calculateCartTotals();
    const isLao = AppState.currentLang === 'la';

    // Update Indicators
    for (let i = 1; i <= 3; i++) {
        const ind = document.getElementById(`step-ind-${i}`);
        if (ind) {
            ind.classList.remove('active', 'done');
            if (i === AppState.checkoutStep) ind.classList.add('active');
            else if (i < AppState.checkoutStep) ind.classList.add('done');
        }
    }

    if (AppState.checkoutStep === 1) {
        const savedAddr = JSON.parse(localStorage.getItem('thaydee_saved_address') || '{}');

        content.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 4px;">
                    ${isLao ? 'ຂໍ້ມູນທີ່ຢູ່ສຳລັບຈັດສົ່ງ' : 'ข้อมูลที่อยู่สำหรับจัดส่ง'}
                </h3>
                <p style="font-size: 0.85rem; color: #64748b;">
                    ${isLao ? 'ກະລຸນາປ້ອນຂໍ້ມູນ ແລະ ທີ່ຢູ່ໃຫ້ຊັດເຈນ ເພື່ອຄວາມວ່ອງໄວໃນການຈັດສົ່ງ' : 'กรุณากรอกข้อมูลและที่อยู่ให้ชัดเจนเพื่อความรวดเร็วในการจัดส่ง'}
                </p>
            </div>

            <form id="shipping-form" onsubmit="handleShippingSubmit(event)">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="ship-name">${isLao ? 'ຊື່ - ນາມສະກຸນ ຜູ້ຮັບ' : 'ชื่อ - นามสกุล ผู้รับ'} <span class="text-danger">*</span></label>
                        <input type="text" id="ship-name" required placeholder="${isLao ? 'ຕົວຢ່າງ: ສົມດີ ໃຈດີ' : 'เช่น สมชาย ใจดี'}" value="${savedAddr.name || ''}">
                    </div>
                    <div class="form-group">
                        <label for="ship-phone">${isLao ? 'ເບີໂທລະສັບຕິດຕໍ່' : 'เบอร์โทรศัพท์ติดต่อ'} <span class="text-danger">*</span></label>
                        <input type="tel" id="ship-phone" required placeholder="${isLao ? 'ຕົວຢ່າງ: 020 5555 1234' : 'เช่น 0812345678'}" value="${savedAddr.phone || ''}">
                    </div>
                    <div class="form-group full-width">
                        <label for="ship-company">${isLao ? 'ບໍລິສັດຂົນສົ່ງ (Shipping Company)' : 'บริษัทขนส่ง'} <span class="text-danger">*</span></label>
                        <select id="ship-company" required>
                            <option value="">${isLao ? '--- ເລືອກບໍລິສັດຂົນສົ່ງ ---' : '--- เลือกบริษัทขนส่ง ---'}</option>
                            <option value="anousith" ${savedAddr.company === 'anousith' ? 'selected' : ''}>Anousith Express (ບໍລິສັດຂົນສົ່ງ ອະນຸສິດ)</option>
                            <option value="rungaroon" ${savedAddr.company === 'rungaroon' ? 'selected' : ''}>Rung Aroon (ບໍລິສັດຂົນສົ່ງ ຮຸ່ງອາລຸນ)</option>
                            <option value="meechai" ${savedAddr.company === 'meechai' ? 'selected' : ''}>Meechai (ບໍລິສັດຂົນສົ່ງ ມີໄຊ)</option>
                            <option value="other" ${savedAddr.company === 'other' ? 'selected' : ''}>${isLao ? 'ອື່ນໆ / ຂົນສົ່ງທ້ອງຖິ່ນ' : 'อื่นๆ / ขนส่งท้องถิ่น'}</option>
                        </select>
                    </div>
                    <div class="form-group full-width">
                        <label for="ship-address">${isLao ? 'ຂໍ້ມູນການຈັດສົ່ງ (ສາຂາຂົນສົ່ງ / ທີ່ຢູ່ປາຍທາງ)' : 'ข้อมูลการจัดส่ง (สาขาขนส่ง / ที่อยู่ปลายทาง)'} <span class="text-danger">*</span></label>
                        <textarea id="ship-address" rows="3" required placeholder="${isLao ? 'ກະລຸນາໃສ່ລາຍລະອຽດທີ່ຢູ່ ຫຼື ສາຂາຂອງບໍລິສັດຂົນສົ່ງທີ່ຕ້ອງການໃຫ້ໄປສົ່ງ...' : 'กรุณาระบุรายละเอียดที่อยู่ หรือสาขาของบริษัทขนส่งที่ต้องการให้ไปส่ง...'}">${savedAddr.address || ''}</textarea>
                    </div>
                    <div class="form-group full-width">
                        <label for="ship-notes">${isLao ? 'ໝາຍເຫດເພີ່ມເຕີມເຖິງຮ້ານຄ້າ (ຖ້າມີ)' : 'หมายเหตุเพิ่มเติมถึงร้านค้า (ถ้ามี)'}</label>
                        <textarea id="ship-notes" rows="2" placeholder="${isLao ? 'ຕົວຢ່າງ: ຝາກສົ່ງຮອບເຊົ້າ, ຂໍໃບບິນ...' : 'เช่น ฝากส่งรอบเช้า, ขอใบเสร็จ...'}">${savedAddr.notes || ''}</textarea>
                    </div>
                </div>

                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
                    <div class="summary-line" style="margin-bottom: 4px;">
                        <span>${isLao ? 'ຈຳນວນສິນຄ້າທັງໝົດ:' : 'จำนวนสินค้าทั้งหมด:'}</span>
                        <strong>${AppState.cart.reduce((s, i) => s + i.quantity, 0)} ${isLao ? 'ຊິ້ນ/ຕົວ' : 'ชิ้น'}</strong>
                    </div>
                    <div class="summary-line total" style="margin: 0; padding-top: 8px;">
                        <span>${isLao ? 'ຍອດລວມທີ່ຕ້ອງຈ່າຍ:' : 'ยอดรวมที่ต้องจ่าย:'}</span>
                        <span style="color: #dc2626;">${formatPrice(total)}</span>
                    </div>
                </div>

                <div style="display: flex; gap: 12px; justify-content: flex-end;">
                    <button type="button" class="btn btn-outline" onclick="closeCheckoutModal()">${isLao ? 'ຍົກເລີກ' : 'ยกเลิก'}</button>
                    <button type="submit" class="btn btn-primary" style="padding: 10px 24px;">
                        ${isLao ? 'ຕໍ່ໄປ: ສະແກນຈ່າຍດ້ວຍ BCEL One' : 'ต่อไป: สแกนจ่ายด้วย BCEL One'}
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                </div>
            </form>
        `;
    } else if (AppState.checkoutStep === 2) {
        // Step 2: BCEL OnePay QR Code
        const bcelAcc = (AppState.settings && AppState.settings.bcelAccountNo) || '160-12-00-01234567-001';
        const bcelName = (AppState.settings && AppState.settings.bcelAccountName) || 'THAY DEE CLOTHING STORE';
        const hasCustomQr = !!(AppState.settings && AppState.settings.bcelQrImage);

        content.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a;">
                    ${isLao ? 'ສະແກນຈ່າຍດ້ວຍ BCEL OnePay' : 'สแกนจ่ายด้วย BCEL OnePay'}
                </h3>
                <p style="font-size: 0.85rem; color: #64748b;">
                    ${isLao ? 'ເປີດແອັບ BCEL One ແລ້ວສະແກນ QR Code ດ້ານລຸ່ມເພື່ອຊຳລະເງິນ' : 'เปิดแอป BCEL One แล้วสแกน QR Code ด้านล่างนี้เพื่อชำระเงิน'}
                </p>
            </div>

            <div class="bcel-card">
                <div class="bcel-card-header">
                    <div class="bcel-logo-text">
                        <span class="bcel-logo-badge">BCEL One</span>
                        <span>OnePay</span>
                    </div>
                    <div class="bcel-subtag">${isLao ? 'ສະແກນເພື່ອຊຳລະເງິນ' : 'Scan to Pay'}</div>
                </div>
                <div class="bcel-body">
                    <div class="bcel-amount-box">
                        <div class="amount-label">${isLao ? 'ຍອດຊຳລະຕົວຈິງ (LAK)' : 'ยอดชำระสุทธิ'}</div>
                        <div class="amount-value">${formatPrice(total)}</div>
                    </div>

                    <div class="qr-canvas-wrap" id="bcel-qr-box">
                        ${hasCustomQr ? `<img src="${AppState.settings.bcelQrImage}" alt="BCEL OnePay QR" style="max-width: 220px; max-height: 220px; border-radius: 6px;">` : ''}
                    </div>

                    <div class="bcel-account-info">
                        <div class="bcel-account-row">
                            <span style="color: #64748b; font-size: 0.8rem;">${isLao ? 'ທະນາຄານ:' : 'ธนาคาร:'}</span>
                            <strong>BCEL (ທະນາຄານການຄ້າຕ່າງປະເທດລາວ)</strong>
                        </div>
                        <div class="bcel-account-row">
                            <span style="color: #64748b; font-size: 0.8rem;">${isLao ? 'ຊື່ບັນຊີ:' : 'ชื่อบัญชี:'}</span>
                            <strong>${bcelName}</strong>
                        </div>
                        <div class="bcel-account-row" style="margin-top: 4px; padding-top: 4px; border-top: 1px dashed #e2e8f0;">
                            <span style="color: #64748b; font-size: 0.8rem;">${isLao ? 'ເລກບັນຊີ:' : 'เลขบัญชี:'}</span>
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <strong style="font-size: 0.95rem; color: #dc2626;">${bcelAcc}</strong>
                                <button type="button" class="copy-acc-btn" onclick="copyBcelAccount('${bcelAcc}')" title="คัดลอก">
                                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                    </svg>
                                    ${isLao ? 'ຄັດລອກ' : 'คัดลอก'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="promptpay-timer">
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span id="qr-countdown">${isLao ? 'ໂປຣດຊຳລະພາຍໃນ 15:00 ນາທີ' : 'โปรดชำระภายใน 15:00 นาที'}</span>
                    </div>

                    <div>
                        <button type="button" class="btn btn-outline btn-sm" onclick="downloadQRCode()">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            ${isLao ? 'ບັນທຶກຮູບ QR Code' : 'บันทึกภาพ QR Code'}
                        </button>
                    </div>
                </div>
            </div>

            <!-- Slip Upload -->
            <div style="margin: 24px 0 20px 0;">
                <label class="option-label" style="display: flex; align-items: center; justify-content: space-between;">
                    <span>${isLao ? 'ແນບໃບບິນໂອນເງິນຈາກ BCEL One:' : 'แนบสลิปโอนเงินจาก BCEL One:'} <span class="text-danger">*</span></span>
                    <span style="font-size: 0.75rem; color: #64748b; font-weight: normal;">(JPG, PNG)</span>
                </label>
                
                <div class="slip-upload-box" id="slip-dropzone">
                    <input type="file" id="slip-input" accept="image/*" onchange="handleSlipSelected(event)">
                    <div id="slip-placeholder">
                        <svg width="36" height="36" fill="none" stroke="#94a3b8" viewBox="0 0 24 24" style="margin: 0 auto 8px auto;">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <div style="font-size: 0.9rem; font-weight: 600; color: #334155;">
                            ${isLao ? 'ຄລິກເພື່ອອັບໂຫຼດໃບບິນ BCEL ຫຼື ລາກໄຟລ໌ມາວາງ' : 'คลิกเพื่ออัปโหลดสลิป BCEL หรือลากไฟล์มาวาง'}
                        </div>
                        <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 4px;">
                            ${isLao ? 'ເມື່ອໂອນຜ່ານ BCEL One ສຳເລັດແລ້ວ ໃຫ້ແນບໃບບິນເພື່ອຢືນຢັນ' : 'เมื่อโอนเสร็จแล้ว ให้แนบสลิปเพื่อยืนยันออเดอร์'}
                        </div>
                    </div>
                    <div id="slip-preview-container" style="display: none;">
                        <img id="slip-preview-img" class="slip-preview-img" src="" alt="BCEL Payment Slip">
                        <div style="margin-top: 8px; font-size: 0.82rem; color: #16a34a; font-weight: 600;">
                            ${isLao ? '✓ ແນບໃບບິນຮຽບຮ້ອຍແລ້ວ (ຄລິກເພື່ອປ່ຽນຮູບ)' : '✓ แนบสลิปเรียบร้อยแล้ว (คลิกเพื่อเปลี่ยนรูป)'}
                        </div>
                    </div>
                </div>
            </div>

            <div style="display: flex; gap: 12px; justify-content: space-between; align-items: center;">
                <button type="button" class="btn btn-outline" onclick="AppState.checkoutStep = 1; renderCheckoutStep();">
                    ${isLao ? 'ຍ້ອນກັບ' : 'ย้อนกลับ'}
                </button>
                <button type="button" class="btn btn-primary" style="padding: 12px 28px;" onclick="confirmPaymentAndOrder()">
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    ${isLao ? 'ແຈ້ງຊຳລະເງິນ ແລະ ຢືນຢັນຄຳສັ່ງຊື້' : 'แจ้งชำระเงินและยืนยันคำสั่งซื้อ'}
                </button>
            </div>
        `;

        if (!hasCustomQr) {
            setTimeout(() => {
                const qrBox = document.getElementById('bcel-qr-box');
                if (qrBox) {
                    qrBox.innerHTML = '';
                    const bcelPayload = `BCEL:OnePay|ACC:${bcelAcc}|NAME:${bcelName}|AMOUNT:${total}|CUR:LAK`;
                    new QRCode(qrBox, {
                        text: bcelPayload,
                        width: 200,
                        height: 200,
                        colorDark: '#000000',
                        colorLight: '#ffffff'
                    });
                }
            }, 50);
        }

        startPaymentCountdown(15 * 60);
    } else if (AppState.checkoutStep === 3) {
        const order = AppState.currentOrderDraft;
        if (!order) return;

        content.innerHTML = `
            <div style="text-align: center; margin-bottom: 24px;">
                <div style="width: 56px; height: 56px; border-radius: 50%; background-color: #ecfdf5; color: #10b981; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 style="font-size: 1.35rem; font-weight: 700; color: #0f172a;">
                    ${isLao ? 'ສັ່ງຊື້ສິນຄ້າສຳເລັດ!' : 'สั่งซื้อสินค้าสำเร็จ!'}
                </h3>
                <p style="font-size: 0.9rem; color: #64748b;">
                    ${isLao ? 'ທາງຮ້ານໄດ້ຮັບຂໍ້ມູນຄຳສັ່ງຊື້ ແລະ ໃບບິນໂອນເງິນຮຽບຮ້ອຍແລ້ວ' : 'ทางร้านได้รับข้อมูลคำสั่งซื้อและหลักฐานการโอนเงินของท่านแล้ว'}
                </p>
                <div style="margin-top: 8px;">
                    <span class="badge badge-black" style="font-size: 0.85rem; padding: 4px 12px;">
                        ${isLao ? 'ເລກທີຄຳສັ່ງຊື້:' : 'หมายเลขคำสั่งซื้อ:'} ${order.orderId}
                    </span>
                </div>
            </div>

            <div class="receipt-box" id="printable-receipt">
                <div class="receipt-header">
                    <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 2px;">${AppState.settings.storeName}</h4>
                    <p style="font-size: 0.8rem; color: #64748b;">${isLao ? 'ໃບສະຫຼຸບການສັ່ງຊື້ສິນຄ້າ' : 'ใบสรุปคำสั่งซื้อสินค้าออนไลน์'}</p>
                    <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 4px;">${new Date(order.timestamp).toLocaleString(isLao ? 'lo-LA' : 'th-TH')}</div>
                </div>

                <div style="font-size: 0.85rem; margin-bottom: 16px; line-height: 1.6;">
                    <div><strong>${isLao ? 'ຜູ້ຮັບ:' : 'ผู้รับ:'}</strong> ${order.shipping.name} (${order.shipping.phone})</div>
                    <div><strong>${isLao ? 'ທີ່ຢູ່ຈັດສົ່ງ:' : 'ที่อยู่จัดส่ง:'}</strong> ${order.shipping.companyName ? order.shipping.companyName + '<br>' : ''}${order.shipping.address}</div>
                    ${order.shipping.notes ? `<div><strong>${isLao ? 'ໝາຍເຫດ:' : 'หมายเหตุ:'}</strong> ${order.shipping.notes}</div>` : ''}
                </div>

                <table class="receipt-table">
                    <thead>
                        <tr>
                            <th>${isLao ? 'ລາຍການ' : 'รายการ'}</th>
                            <th class="text-right">${isLao ? 'ຈຳນວນ' : 'จำนวน'}</th>
                            <th class="text-right">${isLao ? 'ລາຄາ' : 'ราคา'}</th>
                            <th class="text-right">${isLao ? 'ລວມ' : 'รวม'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${order.items.map(it => `
                            <tr>
                                <td>${it.name} <br><small style="color: #64748b;">${it.size} | ${it.color}</small></td>
                                <td class="text-right">${it.quantity}</td>
                                <td class="text-right">${formatPrice(it.price)}</td>
                                <td class="text-right">${formatPrice(it.price * it.quantity)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>

                <div style="border-top: 1px dashed #cbd5e1; padding-top: 12px; margin-top: 12px;">
                    <div class="summary-line" style="margin-bottom: 4px;">
                        <span>${isLao ? 'ລາຄາລວມສິນຄ້າ:' : 'ราคารวมสินค้า:'}</span>
                        <span>${formatPrice(order.subtotal)}</span>
                    </div>
                    <div class="summary-line" style="margin-bottom: 4px;">
                        <span>${isLao ? 'ຄ່າຈັດສົ່ງ:' : 'ค่าจัดส่ง:'}</span>
                        <span>${order.shippingFee === 0 ? (isLao ? 'ຟຣີ' : 'ฟรี') : formatPrice(order.shippingFee)}</span>
                    </div>
                    <div class="summary-line total" style="margin: 0; padding-top: 8px;">
                        <span>${isLao ? 'ຍອດຊຳລະຕົວຈິງ:' : 'ยอดชำระสุทธิ:'}</span>
                        <span style="color: #dc2626;">${formatPrice(order.total)}</span>
                    </div>
                </div>

                <div style="margin-top: 16px; padding: 10px; background-color: #f8fafc; border-radius: 6px; font-size: 0.8rem; color: #475569; display: flex; align-items: center; justify-content: space-between;">
                    <span>${isLao ? 'ສະຖານະ:' : 'สถานะ:'} <strong class="text-warning">${order.status}</strong></span>
                    <span>${isLao ? 'ຊ່ອງທາງ:' : 'วิธีชำระ:'} BCEL OnePay QR</span>
                </div>
            </div>

            <div style="display: flex; gap: 12px; justify-content: center; margin-top: 20px;">
                <button type="button" class="btn btn-outline" onclick="window.print()">
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                    </svg>
                    ${isLao ? 'ພິມໃບບິນ' : 'พิมพ์ใบเสร็จ'}
                </button>
                <button type="button" class="btn btn-primary" onclick="closeCheckoutModal();">
                    ${isLao ? 'ຊື້ສິນຄ້າຕໍ່' : 'ช้อปปิ้งต่อ'}
                </button>
            </div>
        `;
    }
}

function copyBcelAccount(acc) {
    if (!acc) acc = (AppState.settings && AppState.settings.bcelAccountNo) || '';
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(acc).then(() => {
            showToast((AppState.currentLang === 'la' ? 'ຄັດລອກເລກບັນຊີ BCEL ສຳເລັດ: ' : 'คัดลอกเลขบัญชี BCEL สำเร็จ: ') + acc, 'success');
        }).catch(() => fallbackCopy(acc));
    } else {
        fallbackCopy(acc);
    }
}

function fallbackCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand('copy');
        showToast((AppState.currentLang === 'la' ? 'ຄັດລອກເລກບັນຊີ BCEL ສຳເລັດ: ' : 'คัดลอกเลขบัญชี BCEL สำเร็จ: ') + text, 'success');
    } catch (e) {
        showToast('Account: ' + text);
    }
    document.body.removeChild(input);
}

function handleShippingSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('ship-name').value.trim();
    const phone = document.getElementById('ship-phone').value.trim();
    const company = document.getElementById('ship-company').value;
    const companyName = document.getElementById('ship-company').options[document.getElementById('ship-company').selectedIndex].text;
    const address = document.getElementById('ship-address').value.trim();
    const notes = document.getElementById('ship-notes').value.trim();

    if (!name || !phone || !company || !address) {
        showToast(AppState.currentLang === 'la' ? 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ' : 'กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
        return;
    }

    const shippingData = { name, phone, company, companyName, address, notes };
    localStorage.setItem('thaydee_saved_address', JSON.stringify(shippingData));

    // Calculate totals and generate draft order
    const totals = calculateCartTotals();
    
    // Check if we already have a draft to preserve the order ID, otherwise create new
    if (!AppState.currentOrderDraft) {
        AppState.currentOrderDraft = {
            orderId: 'TD' + Math.floor(100000 + Math.random() * 900000),
            timestamp: Date.now(),
            items: [...AppState.cart],
            subtotal: totals.subtotal,
            shippingFee: totals.shipping,
            total: totals.total,
            shipping: shippingData,
            status: 'pending'
        };
    } else {
        AppState.currentOrderDraft.shipping = shippingData;
        AppState.currentOrderDraft.items = [...AppState.cart];
        AppState.currentOrderDraft.subtotal = totals.subtotal;
        AppState.currentOrderDraft.shippingFee = totals.shipping;
        AppState.currentOrderDraft.total = totals.total;
    }

    AppState.checkoutStep = 2;
    renderCheckoutStep();
}

function startPaymentCountdown(seconds) {
    if (AppState.paymentTimerId) clearInterval(AppState.paymentTimerId);
    let remaining = seconds;
    const timerEl = document.getElementById('qr-countdown');

    AppState.paymentTimerId = setInterval(() => {
        remaining--;
        if (remaining <= 0) {
            clearInterval(AppState.paymentTimerId);
            if (timerEl) timerEl.textContent = AppState.currentLang === 'la' ? 'QR Code ໝົດອາຍຸແລ້ວ' : 'QR Code หมดอายุแล้ว โปรดทำรายการใหม่อีกครั้ง';
            return;
        }
        const mins = Math.floor(remaining / 60);
        const secs = remaining % 60;
        if (timerEl) {
            timerEl.textContent = (AppState.currentLang === 'la' ? 'ໂປຣດຊຳລະພາຍໃນ ' : 'โปรดชำระภายใน ') + `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} ` + (AppState.currentLang === 'la' ? 'ນາທີ' : 'นาที');
        }
    }, 1000);
}

function downloadQRCode() {
    const qrBox = document.getElementById('bcel-qr-box');
    if (!qrBox) {
        showToast('ไม่สามารถดาวน์โหลดได้', 'error');
        return;
    }

    const img = qrBox.querySelector('img');
    const canvas = qrBox.querySelector('canvas');
    const link = document.createElement('a');
    link.download = `BCEL-OnePay-QR-${AppState.currentOrderDraft ? AppState.currentOrderDraft.orderId : 'payment'}.png`;

    if (img && img.src) {
        link.href = img.src;
        link.click();
        showToast(AppState.currentLang === 'la' ? 'ດາວໂຫຼດຮູບ QR Code ຮຽບຮ້ອຍແລ້ວ' : 'ดาวน์โหลดรูปภาพ QR Code เรียบร้อยแล้ว', 'success');
    } else if (canvas) {
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast(AppState.currentLang === 'la' ? 'ດາວໂຫຼດຮູບ QR Code ຮຽບຮ້ອຍແລ້ວ' : 'ดาวน์โหลดรูปภาพ QR Code เรียบร้อยแล้ว', 'success');
    }
}

function handleSlipSelected(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showToast(AppState.currentLang === 'la' ? 'ກະລຸນາເລືອກໄຟລ໌ຮູບພາບເທົ່ານັ້ນ' : 'กรุณาเลือกไฟล์รูปภาพเท่านั้นครับ', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        AppState.slipDataUrl = e.target.result;
        const previewImg = document.getElementById('slip-preview-img');
        const previewContainer = document.getElementById('slip-preview-container');
        const placeholder = document.getElementById('slip-placeholder');

        if (previewImg && previewContainer && placeholder) {
            previewImg.src = AppState.slipDataUrl;
            previewContainer.style.display = 'block';
            placeholder.style.display = 'none';
        }
    };
    reader.readAsDataURL(file);
}

function confirmPaymentAndOrder() {
    if (!AppState.slipDataUrl) {
        const confirmWithout = confirm(AppState.currentLang === 'la' ? 'ທ່ານຍັງບໍ່ໄດ້ແນບໃບບິນ ຕ້ອງການຢືນຢັນຄຳສັ່ງຊື້ກ່ອນຫຼືບໍ່?' : 'คุณยังไม่ได้แนบสลิป ต้องการยืนยันคำสั่งซื้อเพื่อแจ้งโอนภายหลังหรือไม่?');
        if (!confirmWithout) return;
    }

    if (!AppState.currentOrderDraft) return;

    AppState.currentOrderDraft.slipUrl = AppState.slipDataUrl;
    AppState.orders.unshift(AppState.currentOrderDraft);
    saveOrders();

        // Deduct Stock per size
    AppState.currentOrderDraft.items.forEach(item => {
        const prod = AppState.products.find(p => p.id === item.id);
        if (prod) {
            if (prod.stockBySize && prod.stockBySize[item.size] !== undefined) {
                prod.stockBySize[item.size] = Math.max(0, prod.stockBySize[item.size] - item.quantity);
            }
            // Recalculate total stock
            prod.stock = Object.values(prod.stockBySize || {}).reduce((a, b) => a + b, 0);
        }
    });
    saveProducts();
    renderCatalog();

    // Clear cart
    AppState.cart = [];
    saveCart();

    if (AppState.paymentTimerId) clearInterval(AppState.paymentTimerId);

    // Push to Google Sheets if configured
    pushToGoogleSheets("newOrder", { order: AppState.currentOrderDraft, products: AppState.products });

    AppState.checkoutStep = 3;
    renderCheckoutStep();
    showToast(AppState.currentLang === 'la' ? 'ສັ່ງຊື້ສິນຄ້າສຳເລັດແລ້ວ!' : 'สร้างคำสั่งซื้อและบันทึกข้อมูลเรียบร้อยแล้ว!', 'success');
}

// ==========================================================================
// Admin & Store Management
// ==========================================================================
function openAdminModal(tab = 'orders') {
    const modal = document.getElementById('admin-modal');
    modal.classList.add('active');
    
    const loginView = document.getElementById('admin-login-view');
    const contentView = document.getElementById('admin-content-view');
    
    if (AppState.isLoggedIn) {
        loginView.style.display = 'none';
        contentView.style.display = 'block';
        switchAdminTab(tab);
    } else {
        loginView.style.display = 'block';
        contentView.style.display = 'none';
        document.getElementById('admin-password-input').value = '';
        setTimeout(() => document.getElementById('admin-password-input').focus(), 100);
    }
}

function handleAdminLogin(event) {
    event.preventDefault();
    const pwInput = document.getElementById('admin-password-input').value;
    const correctPw = AppState.settings.adminPassword || 'admin';
    
    if (pwInput === correctPw) {
        AppState.isLoggedIn = true;
        sessionStorage.setItem('thaydee_admin_logged_in', 'true');
        showToast(AppState.currentLang === 'la' ? 'ເຂົ້າສູ່ລະບົບສຳເລັດ' : 'เข้าสู่ระบบสำเร็จ', 'success');
        openAdminModal('orders'); // Refresh view
    } else {
        showToast(AppState.currentLang === 'la' ? 'ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ!' : 'รหัสผ่านไม่ถูกต้อง!', 'error');
    }
}

function handleAdminLogout() {
    AppState.isLoggedIn = false;
    sessionStorage.removeItem('thaydee_admin_logged_in');
    showToast(AppState.currentLang === 'la' ? 'ອອກຈາກລະບົບແລ້ວ' : 'ออกจากระบบเรียบร้อย', 'info');
    closeAdminModal();
}

function closeAdminModal() {
    const modal = document.getElementById('admin-modal');
    modal.classList.remove('active');
}

function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.getElementById(`tab-btn-${tab}`);
    if (targetBtn) targetBtn.classList.add('active');

    const content = document.getElementById('admin-tab-content');
    if (!content) return;

    if (tab === 'orders') {
        renderAdminOrders(content);
    } else if (tab === 'products') {
        renderAdminProducts(content);
    } else if (tab === 'categories') {
        renderAdminCategories(content);
    } else if (tab === 'settings') {
        renderAdminSettings(content);
    }
}

function renderAdminOrders(container) {
    if (AppState.orders.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 48px; color: #64748b;">
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin: 0 auto 12px auto; color: #94a3b8;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                <h4 style="font-size: 1.05rem; color: #1e293b; margin-bottom: 4px;">ຍັງບໍ່ມີລາຍການສັ່ງຊື້ເຂົ້າມາ</h4>
                <p style="font-size: 0.88rem;">ເມື່ອລູກຄ້າສັ່ງຊື້ສິນຄ້າ ລາຍການຈະປະກົດຢູ່ນີ້</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h4 style="font-size: 1.1rem; font-weight: 700;">ລາຍການສັ່ງຊື້ທັງໝົດ (${AppState.orders.length})</h4>
            <button class="btn btn-outline btn-sm" onclick="exportOrdersJson()">
                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                ສົ່ງອອກຂໍ້ມູນ (JSON)
            </button>
        </div>

        <div style="overflow-x: auto;">
            <table class="orders-table">
                <thead>
                    <tr>
                        <th>ເລກທີຄຳສັ່ງຊື້</th>
                        <th>ວັນທີ</th>
                        <th>ລູກຄ້າ / ທີ່ຢູ່</th>
                        <th>ຍອດລວມ</th>
                        <th>ໃບບິນ BCEL</th>
                        <th>ສະຖານະ</th>
                        <th>ຈັດການ</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppState.orders.map((ord, idx) => {
                        const slipDisplay = ord.slipUrl 
                            ? `<img src="${ord.slipUrl}" class="order-slip-thumb" onclick="viewSlipFull('${ord.slipUrl}')" title="ເບິ່ງໃບບິນ">` 
                            : `<span class="text-muted" style="font-size: 0.8rem;">ບໍ່ມີໃບບິນ</span>`;

                        return `
                            <tr>
                                <td>
                                    <strong>${ord.orderId}</strong>
                                    <div style="font-size: 0.75rem; color: #64748b;">${ord.items.length} ລາຍການ (${ord.items.reduce((s,i) => s + i.quantity, 0)} ອັນ)</div>
                                </td>
                                <td style="font-size: 0.82rem; color: #64748b;">
                                    ${new Date(ord.timestamp).toLocaleDateString('lo-LA')}<br>
                                    ${new Date(ord.timestamp).toLocaleTimeString('lo-LA', {hour: '2-digit', minute:'2-digit'})}
                                </td>
                                <td>
                                    <div style="font-weight: 600;">${ord.shipping.name} (${ord.shipping.phone})</div>
                                    <div style="font-size: 0.78rem; color: #64748b; max-width: 200px;">
                                        ${ord.shipping.companyName ? ord.shipping.companyName + ' | ' : ''}${ord.shipping.address}
                                    </div>
                                </td>
                                <td>
                                    <strong style="color: #dc2626; font-size: 0.95rem;">${formatPrice(ord.total)}</strong>
                                </td>
                                <td>${slipDisplay}</td>
                                <td>
                                    <select onchange="updateOrderStatus(${idx}, this.value)" style="padding: 4px 8px; font-size: 0.82rem; border-radius: 4px; border: 1px solid #cbd5e1; font-family: inherit;">
                                        <option value="ລໍຖ້າກວດສອບ" ${ord.status.includes('รอ') || ord.status.includes('ລໍ') ? 'selected' : ''}>ລໍຖ້າກວດສອບ</option>
                                        <option value="ຊຳລະເງິນແລ້ວ" ${ord.status.includes('ชำระ') || ord.status.includes('ຊຳລະ') ? 'selected' : ''}>ຊຳລະເງິນແລ້ວ</option>
                                        <option value="ກຳລັງກຽມພັດສະດຸ" ${ord.status.includes('เตรียม') || ord.status.includes('ກຽມ') ? 'selected' : ''}>ກຳລັງກຽມພັດສະດຸ</option>
                                        <option value="ຈັດສົ່ງແລ້ວ" ${ord.status.includes('จัดส่งแล้ว') || ord.status.includes('ຈັດສົ່ງແລ້ວ') ? 'selected' : ''}>ຈັດສົ່ງແລ້ວ</option>
                                        <option value="ສຳເລັດ" ${ord.status.includes('สำเร็จ') || ord.status.includes('ສຳເລັດ') ? 'selected' : ''}>ສຳເລັດ</option>
                                        <option value="ຍົກເລີກ" ${ord.status.includes('ยกเลิก') || ord.status.includes('ຍົກເລີກ') ? 'selected' : ''}>ຍົກເລີກ</option>
                                    </select>
                                </td>
                                <td>
                                    <button class="btn btn-outline btn-sm" onclick="showOrderDetailsModal(${idx})">ເບິ່ງລາຍລະອຽດ</button>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function updateOrderStatus(index, newStatus) {
    if (!AppState.orders[index]) return;
    AppState.orders[index].status = newStatus;
    saveOrders();
    showToast(`ອັບເດດສະຖານະອໍເດີ ${AppState.orders[index].orderId} ເປັນ "${newStatus}" ແລ້ວ`, 'success');
}

function viewSlipFull(dataUrl) {
    const modal = document.getElementById('slip-modal');
    const img = document.getElementById('slip-full-img');
    if (modal && img) {
        img.src = dataUrl;
        modal.classList.add('active');
    }
}

function closeSlipModal() {
    const modal = document.getElementById('slip-modal');
    if (modal) modal.classList.remove('active');
}

// ==========================================================================
// Admin Products Management (Direct Image Upload)
// ==========================================================================
function renderAdminProducts(container) {
    const isLao = AppState.currentLang === 'la';

    // Populate category dropdown from custom categories
    const categoryOptions = AppState.categories
        .filter(c => c.id !== 'all')
        .map(c => `<option value="${c.id}">${isLao && c.nameLa ? c.nameLa : c.nameTh}</option>`)
        .join('');

    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h4 style="font-size: 1.1rem; font-weight: 700;">
                ${isLao ? 'ຈັດການສິນຄ້າໃນຮ້ານ' : 'จัดการสินค้าในร้าน'} (${AppState.products.length})
            </h4>
            <button class="btn btn-primary btn-sm" onclick="toggleAddProductForm()">
                + ${isLao ? 'ເພີ່ມສິນຄ້າໃໝ່' : 'เพิ่มสินค้าใหม่'}
            </button>
        </div>

        <div id="add-product-panel" style="display: none; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h5 id="form-product-title" style="font-size: 1rem; font-weight: 700; margin-bottom: 12px;">
                ${isLao ? 'ເພີ່ມສິນຄ້າໃໝ່ເຂົ້າຮ້ານ' : 'เพิ่มสินค้าใหม่เข้าร้าน'}
            </h5>
            <form onsubmit="handleAddNewProduct(event)">
                <div class="form-grid">
                    <div class="form-group">
                        <label>${isLao ? 'ຊື່ສິນຄ້າ' : 'ชื่อสินค้า'} <span class="text-danger">*</span></label>
                        <input type="text" id="new-p-name" required placeholder="${isLao ? 'ເຊັ່ນ: ເສື້ອຍືດພິມລາຍມິນິມອນ' : 'เช่น เสื้อยืดพิมพ์ลายมินิมอล'}">
                    </div>
                    <div class="form-group">
                        <label>${isLao ? 'ໝວດໝູ່ສິນຄ້າ' : 'หมวดหมู่สินค้า'} <span class="text-danger">*</span></label>
                        <select id="new-p-category" required>
                            ${categoryOptions}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>${isLao ? 'ລາຄາຂາຍ (₭ ກີບ)' : 'ราคาขาย (₭ กีบ)'} <span class="text-danger">*</span></label>
                        <input type="number" id="new-p-price" required min="1" placeholder="120000">
                    </div>
                    <div class="form-group">
                        <label>${isLao ? 'ລາຄາເດີມ (ສຳລັບຂີດຂ້າຫຼຸດລາຄາ)' : 'ราคาปกติ (สำหรับขีดฆ่าลดราคา)'}</label>
                        <input type="number" id="new-p-orig-price" placeholder="160000">
                    </div>
                    <div class="form-group full-width">
                        <label>${isLao ? 'ສະຕັອກແຍກຕາມໄຊສ໌' : 'สต็อกแยกตามไซส์'} <span class="text-danger">*</span></label>
                        <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
                            ${['S','M','L','XL'].map(sz => `<label style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:0.85rem;font-weight:600;">${sz}<input type="number" id="new-p-stock-${sz}" min="0" value="10" style="width:64px;text-align:center;padding:6px;border:1px solid #cbd5e1;border-radius:6px;"></label>`).join('')}
                        </div>
                    </div>
                    <div class="form-group full-width">
                        <label>${isLao ? 'ຮູບພາບສິນຄ້າ (ອັບໂຫຼດໂດຍກົງຈາກເຄື່ອງ)' : 'รูปภาพสินค้า (อัปโหลดจากมือถือหรือคอมพิวเตอร์)'} <span class="text-danger">*</span></label>
                        <div class="slip-upload-box" style="padding: 16px; border-style: dashed; background: #ffffff; position: relative; border-radius: 8px;">
                            <input type="file" id="new-p-image-file" accept="image/*" multiple onchange="handleProductImageUpload(event)" style="position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; z-index: 5;">
                            <div id="p-upload-placeholder">
                                <svg width="36" height="36" fill="none" stroke="#94a3b8" viewBox="0 0 24 24" style="margin: 0 auto 6px auto;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <div style="font-size: 0.92rem; font-weight: 600; color: #1e293b;">
                                    ${isLao ? 'ຄລິກເພື່ອເລືອກຮູບພາບສິນຄ້າຈາກເຄື່ອງ (ເລືອກໄດ້ຫຼາຍຮູບ)' : 'คลิกเพื่อเลือกรูปภาพสินค้าจากเครื่อง (เลือกได้หลายรูป)'}
                                </div>
                                <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 2px;">
                                    ${isLao ? 'ຮອງຮັບໄຟລ໌ຮູບພາບ JPG, PNG, WEBP' : 'รองรับไฟล์ภาพ JPG, PNG, WEBP จากคลังภาพในเครื่อง'}
                                </div>
                            </div>
                            <div id="p-image-previews" style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 8px;"></div>
                        </div>
                        <div id="p-image-status" style="font-size: 0.8rem; color: #64748b; margin-top: 4px;"></div>
                    </div>
                    <div class="form-group full-width">
                        <label>${isLao ? 'ລາຍລະອຽດສິນຄ້າ / ເນື້ອຜ້າ' : 'รายละเอียดสินค้า / วัสดุเนื้อผ้า'} <span class="text-danger">*</span></label>
                        <textarea id="new-p-desc" rows="3" required placeholder="${isLao ? 'ລະບຸເນື້ອຜ້າ, ຊົງເສື້ອ ຫຼື ຄຳແນະນຳ' : 'ระบุเนื้อผ้า ทรงเสื้อ หรือข้อแนะนำในการดูแลรักษา'}"></textarea>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 14px;">
                    <button type="button" class="btn btn-outline btn-sm" onclick="toggleAddProductForm()">${isLao ? 'ຍົກເລີກ' : 'ยกเลิก'}</button>
                    <button type="submit" class="btn btn-primary btn-sm">${isLao ? 'ບັນທຶກສິນຄ້າ' : 'บันทึกสินค้า'}</button>
                </div>
            </form>
        </div>

        <div style="overflow-x: auto;">
            <table class="orders-table">
                <thead>
                    <tr>
                        <th>${isLao ? 'ຮູບພາບ' : 'รูปภาพ'}</th>
                        <th>${isLao ? 'ຊື່ສິນຄ້າ' : 'ชื่อสินค้า'}</th>
                        <th>${isLao ? 'ໝວດໝູ່' : 'หมวดหมู่'}</th>
                        <th>${isLao ? 'ລາຄາ' : 'ราคา'}</th>
                        <th>${isLao ? 'ສະຕັອກ' : 'สต็อก'}</th>
                        <th>${isLao ? 'ການຈັດການ' : 'การจัดการ'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppState.products.map((p, idx) => {
                        const catObj = AppState.categories.find(c => c.id === p.category);
                        const cName = catObj ? (isLao && catObj.nameLa ? catObj.nameLa : catObj.nameTh) : p.category;
                        const pName = (isLao && p.nameLa) ? p.nameLa : p.name;
                        return `
                            <tr>
                                <td><img src="${p.images[0]}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 4px;"></td>
                                <td><strong>${pName}</strong></td>
                                <td><span class="badge badge-black">${cName}</span></td>
                                <td><strong style="color: #dc2626;">${formatPrice(p.price)}</strong></td>
                                <td>${p.stock}</td>
                                <td>
                                    <button class="btn btn-outline btn-sm" style="color: #0369a1; border-color: #7dd3fc; margin-right: 4px;" onclick="editProduct(${p.id})">${isLao ? 'ແກ້ໄຂ' : 'แก้ไข'}</button>
                                    <button class="btn btn-outline btn-sm" style="color: #ef4444; border-color: #fca5a5;" onclick="deleteProduct(${idx})">${isLao ? 'ລຶບ' : 'ลบ'}</button>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function toggleAddProductForm(forceOpen = false) {
    const panel = document.getElementById('add-product-panel');
    if (!panel) return;
    
    const isClosing = !forceOpen && panel.style.display !== 'none';
    if (isClosing) {
        cancelEditProduct();
        return;
    }
    
    panel.style.display = 'block';
}

function refreshImagePreviews() {
    const previewsContainer = document.getElementById('p-image-previews');
    const placeholder = document.getElementById('p-upload-placeholder');
    const statusText = document.getElementById('p-image-status');
    const isLao = AppState.currentLang === 'la';
    
    if (previewsContainer) previewsContainer.innerHTML = '';
    
    if (AppState.uploadedNewProductImages.length > 0) {
        if (placeholder) placeholder.style.display = 'none';
        
        AppState.uploadedNewProductImages.forEach((src, idx) => {
            const wrap = document.createElement('div');
            wrap.style.position = 'relative';
            wrap.style.width = '60px';
            wrap.style.height = '60px';
            wrap.style.borderRadius = '4px';
            wrap.style.overflow = 'hidden';
            wrap.style.border = '1px solid #cbd5e1';
            wrap.style.zIndex = '10';

            const img = document.createElement('img');
            img.src = src;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';

            const rmBtn = document.createElement('button');
            rmBtn.innerHTML = '&times;';
            rmBtn.style.position = 'absolute';
            rmBtn.style.top = '2px';
            rmBtn.style.right = '2px';
            rmBtn.style.background = 'rgba(0,0,0,0.6)';
            rmBtn.style.color = '#fff';
            rmBtn.style.border = 'none';
            rmBtn.style.borderRadius = '50%';
            rmBtn.style.width = '18px';
            rmBtn.style.height = '18px';
            rmBtn.style.fontSize = '12px';
            rmBtn.style.lineHeight = '1';
            rmBtn.style.cursor = 'pointer';
            rmBtn.style.display = 'flex';
            rmBtn.style.alignItems = 'center';
            rmBtn.style.justifyContent = 'center';
            rmBtn.style.zIndex = '20';
            
            rmBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                AppState.uploadedNewProductImages.splice(idx, 1);
                refreshImagePreviews();
            };

            wrap.appendChild(img);
            wrap.appendChild(rmBtn);
            if (previewsContainer) previewsContainer.appendChild(wrap);
        });
        
        if (statusText) statusText.textContent = isLao 
            ? `ເລືອກແລ້ວ ${AppState.uploadedNewProductImages.length} ຮູບ`
            : `เลือกแล้ว ${AppState.uploadedNewProductImages.length} รูป`;
    } else {
        if (placeholder) placeholder.style.display = 'flex';
        if (statusText) statusText.textContent = isLao ? 'ຍັງບໍ່ມີຮູບພາບ' : 'ยังไม่มีรูปภาพ';
    }
}

function handleProductImageUpload(event) {
    const files = Array.from(event.target.files);
    if (!files.length) return;

    if (!AppState.editingProductId) {
        AppState.uploadedNewProductImages = [];
    }

    let loadedCount = 0;

    files.forEach((file) => {
        if (!file.type.startsWith('image/')) {
            loadedCount++;
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const maxDim = 800;
                let w = img.width;
                let h = img.height;
                if (w > maxDim || h > maxDim) {
                    if (w > h) {
                        h = Math.round((h * maxDim) / w);
                        w = maxDim;
                    } else {
                        w = Math.round((w * maxDim) / h);
                        h = maxDim;
                    }
                } else {
                    w = img.width;
                    h = img.height;
                }
                
                canvas.width = w;
                canvas.height = h;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, w, h);
                
                AppState.uploadedNewProductImages.push(canvas.toDataURL('image/jpeg', 0.82));
                
                loadedCount++;
                if (loadedCount === files.length) {
                    refreshImagePreviews();
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function editProduct(productId) {
    const p = AppState.products.find(x => x.id === productId);
    if (!p) return;
    
    AppState.editingProductId = productId;
    AppState.uploadedNewProductImages = [...p.images];
    
    const isLao = AppState.currentLang === 'la';
    
    const titleEl = document.getElementById('form-product-title');
    if(titleEl) titleEl.textContent = isLao ? 'ແກ້ໄຂສິນຄ້າ (Edit Product)' : 'แก้ไขสินค้า (Edit Product)';
    
    const btnSaveEl = document.getElementById('btn-save-product');
    if(btnSaveEl) btnSaveEl.textContent = isLao ? 'ບັນທຶກການແກ້ໄຂ' : 'บันทึกการแก้ไข';
    
    document.getElementById('new-p-name').value = p.name;
    document.getElementById('new-p-category').value = p.category;
    document.getElementById('new-p-price').value = p.price;
    document.getElementById('new-p-orig-price').value = p.originalPrice || '';
    // Fill per-size stock inputs
    ['S','M','L','XL'].forEach(sz => {
        const el = document.getElementById(`new-p-stock-${sz}`);
        if (el) el.value = (p.stockBySize && p.stockBySize[sz] !== undefined) ? p.stockBySize[sz] : Math.round((p.stock || 0) / 4);
    });
    document.getElementById('new-p-desc').value = p.description || '';
    
    refreshImagePreviews();
    
    const panel = document.getElementById('add-product-panel');
    if (panel) {
        panel.style.display = 'block';
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function cancelEditProduct() {
    AppState.editingProductId = null;
    AppState.uploadedNewProductImages = [];
    
    const isLao = AppState.currentLang === 'la';
    const panel = document.getElementById('add-product-panel');
    
    if (panel) {
        document.getElementById('new-p-name').value = '';
        document.getElementById('new-p-category').selectedIndex = 0;
        document.getElementById('new-p-price').value = '';
        document.getElementById('new-p-orig-price').value = '';
        // Reset per-size stock inputs
        ['S','M','L','XL'].forEach(sz => {
            const el = document.getElementById(`new-p-stock-${sz}`);
            if (el) el.value = '10';
        });
        document.getElementById('new-p-desc').value = '';
        document.getElementById('new-p-image-file').value = '';
        
        const titleEl = document.getElementById('form-product-title');
        if(titleEl) titleEl.textContent = isLao ? 'ເພີ່ມສິນຄ້າໃໝ່ເຂົ້າຮ້ານ' : 'เพิ่มสินค้าใหม่เข้าร้าน';
        
        const btnSaveEl = document.getElementById('btn-save-product');
        if(btnSaveEl) btnSaveEl.textContent = isLao ? 'ເພີ່ມສິນຄ້າ' : 'เพิ่มสินค้า';
        
        refreshImagePreviews();
        panel.style.display = 'none';
    }
}

function handleAddNewProduct(event) {
    event.preventDefault();

    if (!AppState.uploadedNewProductImages || AppState.uploadedNewProductImages.length === 0) {
        showToast(AppState.currentLang === 'la' ? 'ກະລຸນາເລືອກຮູບສິນຄ້າຢ່າງໜ້ອຍ 1 ຮູບ' : 'กรุณาเลือกรูปสินค้าอย่างน้อย 1 รูป', 'error');
        return;
    }

    const name = document.getElementById('new-p-name').value.trim();
    const category = document.getElementById('new-p-category').value;
    const price = Number(document.getElementById('new-p-price').value);
    const origPrice = Number(document.getElementById('new-p-orig-price').value) || null;
    const desc = document.getElementById('new-p-desc').value.trim();
    const catObj = AppState.categories.find(c => c.id === category);

    // Read per-size stock
    const sizeList = ['S', 'M', 'L', 'XL'];
    const stockBySize = {};
    let totalStock = 0;
    sizeList.forEach(sz => {
        const val = Number(document.getElementById(`new-p-stock-${sz}`).value) || 0;
        stockBySize[sz] = val;
        totalStock += val;
    });

    if (AppState.editingProductId) {
        // Edit Mode
        const pIndex = AppState.products.findIndex(x => x.id === AppState.editingProductId);
        if (pIndex !== -1) {
            AppState.products[pIndex].name = name;
            AppState.products[pIndex].nameLa = name;
            AppState.products[pIndex].category = category;
            AppState.products[pIndex].categoryName = catObj ? catObj.nameTh : category;
            AppState.products[pIndex].price = price;
            AppState.products[pIndex].originalPrice = origPrice;
            AppState.products[pIndex].stockBySize = stockBySize;
            AppState.products[pIndex].stock = totalStock;
            AppState.products[pIndex].description = desc;
            AppState.products[pIndex].images = [...AppState.uploadedNewProductImages];
            
            showToast(AppState.currentLang === 'la' ? `ແກ້ໄຂສິນຄ້າ "${name}" ແລ້ວ` : `แก้ไขสินค้า "${name}" แล้ว`, 'success');
        }
    } else {
        // Add Mode
        const newProduct = {
            id: Date.now(),
            name,
            nameLa: name,
            category,
            categoryName: catObj ? catObj.nameTh : category,
            price,
            originalPrice: origPrice,
            tag: 'มาใหม่',
            tagLa: 'ມາໃໝ່',
            rating: 5.0,
            reviewsCount: 1,
            images: [...AppState.uploadedNewProductImages],
            sizes: sizeList,
            colors: [{ name: 'สีมาตรฐาน', code: '#111827' }],
            description: desc,
            stockBySize,
            stock: totalStock
        };
        AppState.products.unshift(newProduct);
        showToast(AppState.currentLang === 'la' ? `ເພີ່ມສິນຄ້າ "${name}" ສຳເລັດ` : `เพิ่มสินค้า "${name}" สำเร็จ`, 'success');
    }

    saveProducts();
    renderCatalog();
    cancelEditProduct();
    switchAdminTab('products');
    pushToGoogleSheets("syncProducts", { products: AppState.products });
}

function deleteProduct(index) {
    if (!AppState.products[index]) return;
    const isLao = AppState.currentLang === 'la';
    if (confirm(isLao ? `ທ່ານຕ້ອງການລຶບສິນຄ້າ "${AppState.products[index].name}" ຫຼືບໍ່?` : `คุณต้องการลบสินค้า "${AppState.products[index].name}" หรือไม่?`)) {
        AppState.products.splice(index, 1);
        saveProducts();
        renderCatalog();
        switchAdminTab('products');
        pushToGoogleSheets("syncProducts", { products: AppState.products });
        showToast(isLao ? 'ລຶບສິນຄ້າຮຽບຮ້ອຍແລ້ວ' : 'ลบสินค้าเรียบร้อยแล้ว');
    }
}

// ==========================================================================
// Admin Category Management (Custom Categories)
// ==========================================================================
function renderAdminCategories(container) {
    const isLao = AppState.currentLang === 'la';

    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h4 style="font-size: 1.1rem; font-weight: 700;">
                ${isLao ? 'ກຳນົດໝວດໝູ່ສິນຄ້າເອງ' : 'จัดการและกำหนดหมวดหมู่สินค้าได้เอง'} (${AppState.categories.length})
            </h4>
            <button class="btn btn-primary btn-sm" onclick="toggleAddCategoryForm()">
                + ${isLao ? 'ເພີ່ມໝວດໝູ່ໃໝ່' : 'เพิ่มหมวดหมู่ใหม่'}
            </button>
        </div>

        <div id="add-category-panel" style="display: none; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h5 style="font-size: 1rem; font-weight: 700; margin-bottom: 12px;">
                ${isLao ? 'ເພີ່ມໝວດໝູ່ໃໝ່' : 'เพิ่มหมวดหมู่สินค้าใหม่'}
            </h5>
            <form onsubmit="handleAddNewCategory(event)">
                <div class="form-grid">
                    <div class="form-group">
                        <label>${isLao ? 'ຊື່ໝວດໝູ່ (ພາສາລາວ)' : 'ชื่อหมวดหมู่ (ภาษาลาว)'} <span class="text-danger">*</span></label>
                        <input type="text" id="new-cat-la" required placeholder="ເຊັ່ນ: ຊຸດກິລາ, ເກີບ, ກະເປົາ">
                    </div>
                    <div class="form-group">
                        <label>${isLao ? 'ຊື່ໝວດໝູ່ (ພາສາໄທ / ອື່ນໆ)' : 'ชื่อหมวดหมู่ (ภาษาไทย)'} <span class="text-danger">*</span></label>
                        <input type="text" id="new-cat-th" required placeholder="เช่น ชุดกีฬา, รองเท้า, กระเป๋า">
                    </div>
                </div>
                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 14px;">
                    <button type="button" class="btn btn-outline btn-sm" onclick="toggleAddCategoryForm()">${isLao ? 'ຍົກເລີກ' : 'ยกเลิก'}</button>
                    <button type="submit" class="btn btn-primary btn-sm">${isLao ? 'ບັນທຶກໝວດໝູ່' : 'บันทึกหมวดหมู่'}</button>
                </div>
            </form>
        </div>

        <div style="margin-top: 12px;">
            <div style="font-size: 0.88rem; color: #64748b; margin-bottom: 12px;">
                ${isLao ? 'ໝວດໝູ່ທີ່ມີໃນຮ້ານປັດຈຸບັນ (ສາມາດກົດລຶບໝວດທີ່ບໍ່ຕ້ອງການໄດ້):' : 'หมวดหมู่สินค้าที่มีอยู่ในร้านปัจจุบัน (คลิกเพื่อลบหมวดที่ไม่ต้องการ):'}
            </div>
            <div class="cat-list-wrap">
                ${AppState.categories.map((cat, idx) => {
                    const isDefaultAll = cat.id === 'all';
                    const prodCount = AppState.products.filter(p => p.category === cat.id).length;
                    return `
                        <div class="cat-badge-item">
                            <span><strong>${cat.nameLa || cat.nameTh}</strong> / <small style="color: #64748b;">${cat.nameTh || cat.nameLa}</small></span>
                            <span class="badge badge-black" style="font-size: 0.72rem;">${prodCount}</span>
                            ${!isDefaultAll ? `
                                <button type="button" class="cat-del-btn" onclick="deleteCategory(${idx})" title="ลบหมวดหมู่นี้">&times;</button>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function toggleAddCategoryForm() {
    const panel = document.getElementById('add-category-panel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
}

function handleAddNewCategory(event) {
    event.preventDefault();
    const nameLa = document.getElementById('new-cat-la').value.trim();
    const nameTh = document.getElementById('new-cat-th').value.trim();

    if (!nameLa && !nameTh) return;

    const catId = 'cat_' + Date.now();
    AppState.categories.push({
        id: catId,
        nameTh: nameTh || nameLa,
        nameLa: nameLa || nameTh
    });

    saveCategories();
    renderCategoryPills();
    switchAdminTab('categories');
    showToast(AppState.currentLang === 'la' ? `ເພີ່ມໝວດໝູ່ "${nameLa}" ສຳເລັດແລ້ວ` : `เพิ่มหมวดหมู่ "${nameTh}" สำเร็จแล้ว`, 'success');
}

function deleteCategory(index) {
    const cat = AppState.categories[index];
    if (!cat || cat.id === 'all') return;

    const isLao = AppState.currentLang === 'la';
    const cName = isLao ? (cat.nameLa || cat.nameTh) : (cat.nameTh || cat.nameLa);

    if (confirm(isLao ? `ທ່ານຕ້ອງການລຶບໝວດໝູ່ "${cName}" ຫຼືບໍ່?` : `คุณต้องการลบหมวดหมู่ "${cName}" หรือไม่?`)) {
        AppState.categories.splice(index, 1);
        if (AppState.currentCategory === cat.id) {
            AppState.currentCategory = 'all';
        }
        saveCategories();
        renderCategoryPills();
        renderCatalog();
        switchAdminTab('categories');
        showToast(isLao ? 'ລຶບໝວດໝູ່ຮຽບຮ້ອຍແລ້ວ' : 'ลบหมวดหมู่เรียบร้อยแล้ว');
    }
}

// ==========================================================================
// Admin Store Settings (BCEL & Kip)
// ==========================================================================
function renderAdminSettings(container) {
    const hasQr = !!(AppState.settings && AppState.settings.bcelQrImage);
    const hasLogo = !!(AppState.settings && AppState.settings.storeLogoImage);
    const hasBanner = !!(AppState.settings && AppState.settings.heroBannerImage);
    const isLao = AppState.currentLang === 'la';
    const s = AppState.settings;

    container.innerHTML = `
        <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 16px;">
            ${isLao ? 'ຕັ້ງຄ່າຮ້ານຄ້າ ແລະ ລະບົບ BCEL OnePay' : 'ตั้งค่าร้านค้าและระบบชำระเงิน BCEL OnePay'}
        </h4>
        <form onsubmit="handleSaveSettings(event)" style="max-width: 680px;">

            <!-- ===== STORE BRANDING SECTION ===== -->
            <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:18px;margin-bottom:24px;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
                    <span style="font-size:1.3rem;">🎨</span>
                    <strong style="font-size:1rem;color:#0369a1;">${isLao ? 'ຕົວຕົນຮ້ານຄ້າ (Store Branding)' : 'ตัวตนร้านค้า (Store Branding)'}</strong>
                </div>

                <div class="form-group">
                    <label>${isLao ? 'ຊື່ຮ້ານຄ້າ' : 'ชื่อร้านค้า'} <span class="text-danger">*</span></label>
                    <input type="text" id="setting-store-name" required value="${s.storeName || ''}">
                </div>

                <div class="form-group">
                    <label>${isLao ? 'ສະໂລແກນ / ແຄບຊັ່ນຮ້ານ' : 'สโลแกน / แคปชันร้าน'}</label>
                    <input type="text" id="setting-store-tagline" value="${s.storeTagline || ''}" placeholder="${isLao ? 'ຄຳອະທິບາຍສັ້ນໆ ສຳລັບໂລໂກ້ຮ້ານ' : 'คำอธิบายสั้นๆ ใต้โลโก้ร้าน'}">
                </div>

                <div class="form-group">
                    <label>${isLao ? 'ລະຫັດຜ່ານແອັດມິນ (Admin Password)' : 'รหัสผ่านแอดมิน (Admin Password)'} <span class="text-danger">*</span></label>
                    <input type="text" id="setting-admin-password" required value="${s.adminPassword || 'admin'}">
                    <div style="font-size:0.75rem;color:#ef4444;margin-top:4px;">${isLao ? 'ຈື່ລະຫັດຜ່ານໃຫ້ດີ ຫາກລືມຈະເຂົ້າຫຼັງບ້ານບໍ່ໄດ້!' : 'โปรดจำรหัสผ่านให้ดี หากลืมจะไม่สามารถเข้าหลังบ้านได้!'}</div>
                </div>

                <div class="form-group">
                    <label>${isLao ? 'ຮູບໂປຣໄຟລ໌ / ໂລໂກ້ຮ້ານ' : 'รูปโปรไฟล์ / โลโก้ร้านค้า'}</label>
                    <div style="display:flex;align-items:flex-start;gap:16px;margin-top:8px;">
                        <div id="setting-logo-preview-box" style="width:80px;height:80px;border:2px dashed #7dd3fc;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#fff;overflow:hidden;flex-shrink:0;">
                            ${hasLogo
                                ? `<img src="${s.storeLogoImage}" style="width:100%;height:100%;object-fit:cover;">`
                                : `<span style="font-size:0.7rem;color:#94a3b8;text-align:center;padding:4px;">${isLao ? 'ຍັງບໍ່ມີ' : 'ยังไม่มีรูป'}</span>`
                            }
                        </div>
                        <div style="flex:1;">
                            <input type="file" id="setting-logo-file" accept="image/*" onchange="handleAdminLogoUpload(event)" style="margin-bottom:6px;">
                            <div style="font-size:0.78rem;color:#64748b;">${isLao ? 'ຮູບຈະສະແດງຢູ່ໂລໂກ້ຮ້ານດ້ານເທິງ' : 'รูปจะแสดงที่โลโก้ร้านด้านบนแทนตัวอักษร'}</div>
                            ${hasLogo ? `<button type="button" class="btn btn-outline btn-sm" style="margin-top:6px;color:#ef4444;border-color:#fca5a5;" onclick="removeStoreLogo()">${isLao ? 'ລຶບຮູບໂລໂກ້' : 'ลบรูปโลโก้'}</button>` : ''}
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>${isLao ? 'ຮູບ Hero Banner (ຮູບໃຫຍ່ໜ້າຮ້ານ)' : 'รูป Hero Banner (รูปใหญ่หน้าร้าน)'}</label>
                    <div style="display:flex;align-items:flex-start;gap:16px;margin-top:8px;">
                        <div id="setting-banner-preview-box" style="width:140px;height:80px;border:2px dashed #7dd3fc;border-radius:8px;overflow:hidden;background:#f1f5f9;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                            ${hasBanner
                                ? `<img src="${s.heroBannerImage}" style="width:100%;height:100%;object-fit:cover;">`
                                : `<img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&auto=format&fit=crop&q=60" style="width:100%;height:100%;object-fit:cover;opacity:0.5;">`
                            }
                        </div>
                        <div style="flex:1;">
                            <input type="file" id="setting-banner-file" accept="image/*" onchange="handleAdminBannerUpload(event)" style="margin-bottom:6px;">
                            <div style="font-size:0.78rem;color:#64748b;">${isLao ? 'ຮູບທີ່ສະແດງດ້ານຂວາຂອງ Banner ໜ້າຮ້ານ' : 'รูปที่แสดงด้านขวาของ Banner หน้าร้าน'}</div>
                            ${hasBanner ? `<button type="button" class="btn btn-outline btn-sm" style="margin-top:6px;color:#ef4444;border-color:#fca5a5;" onclick="removeHeroBanner()">${isLao ? 'ໃຊ້ຮູບເດີມ' : 'ใช้รูปเดิม (Default)'}</button>` : ''}
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>${isLao ? 'ຂໍ້ຄວາມຫຼັກ Hero Banner (ພາສາໄທ)' : 'ข้อความหลัก Hero Banner (ภาษาไทย)'}</label>
                    <input type="text" id="setting-hero-title-th" value="${(s.heroTitleTh || '').replace(/<br>/g, ' / ')}" placeholder="เสื้อผ้าดีไซน์มินิมอล / ใส่สบาย สไตล์ที่คุณเลือกได้">
                    <div style="font-size:0.75rem;color:#94a3b8;margin-top:4px;">${isLao ? 'ໃຊ້ " / " ເພື່ອຂຶ້ນແຖວໃໝ່' : 'ใช้ " / " เพื่อขึ้นบรรทัดใหม่'}</div>
                </div>
                <div class="form-group">
                    <label>${isLao ? 'ຂໍ້ຄວາມຫຼັກ Hero Banner (ພາສາລາວ)' : 'ข้อความหลัก Hero Banner (ภาษาลาว)'}</label>
                    <input type="text" id="setting-hero-title-la" value="${(s.heroTitleLa || '').replace(/<br>/g, ' / ')}" placeholder="ເສື້ອຜ້າດີໄຊນ໌ / ໃສ່ສະບາຍ">
                </div>
                <div class="form-group">
                    <label>${isLao ? 'ຄຳອະທິບາຍ Hero (ພາສາໄທ)' : 'คำอธิบาย Hero (ภาษาไทย)'}</label>
                    <textarea id="setting-hero-desc-th" rows="2" style="width:100%;resize:vertical;" placeholder="คัดสรรเนื้อผ้าเกรดพรีเมียม...">${s.heroDescTh || ''}</textarea>
                </div>
                <div class="form-group">
                    <label>${isLao ? 'ຄຳອະທິບາຍ Hero (ພາສາລາວ)' : 'คำอธิบาย Hero (ภาษาลาว)'}</label>
                    <textarea id="setting-hero-desc-la" rows="2" style="width:100%;resize:vertical;" placeholder="ຄັດສັນເນື້ອຜ້າ...">${s.heroDescLa || ''}</textarea>
                </div>
            </div>

            <div style="background-color: #fff1f2; border: 1px solid #fecdd3; border-radius: 8px; padding: 18px; margin: 20px 0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                    <span class="badge" style="background: #dc2626; color: #fff; font-weight: 700;">BCEL One</span>
                    <strong style="color: #991b1b; font-size: 0.95rem;">${isLao ? 'ຂໍ້ມູນບັນຊີທະນາຄານການຄ້າຕ່າງປະເທດລາວ (BCEL)' : 'ข้อมูลบัญชีธนาคารการค้าต่างประเทศลาว (BCEL)'}</strong>
                </div>

                <div class="form-group">
                    <label>${isLao ? 'ເລກບັນຊີ BCEL' : 'เลขบัญชี BCEL (เลกบันซี)'} <span class="text-danger">*</span></label>
                    <input type="text" id="setting-bcel-account-no" required placeholder="160-12-00-01234567-001" value="${AppState.settings.bcelAccountNo || ''}">
                </div>

                <div class="form-group">
                    <label>${isLao ? 'ຊື່ບັນຊີຮ້ານຄ້າ' : 'ชื่อบัญชีร้านค้า'} <span class="text-danger">*</span></label>
                    <input type="text" id="setting-bcel-account-name" required placeholder="THAY DEE CLOTHING STORE" value="${AppState.settings.bcelAccountName || ''}">
                </div>

                <div class="form-group">
                    <label>${isLao ? 'ຮູບ QR Code ຂອງຮ້ານ (ອັບໂຫຼດຈາກແອັບ BCEL One)' : 'ภาพ BCEL OnePay QR Code ของร้านค้า'}</label>
                    <div style="display: flex; align-items: flex-start; gap: 16px; margin-top: 8px;">
                        <div id="setting-qr-preview-box" style="width: 110px; height: 110px; border: 1px dashed #cbd5e1; border-radius: 6px; display: flex; align-items: center; justify-content: center; background: #fff; overflow: hidden;">
                            ${hasQr ? `<img id="admin-qr-preview-img" src="${AppState.settings.bcelQrImage}" style="width: 100%; height: 100%; object-fit: contain;">` : `<span style="font-size: 0.72rem; color: #94a3b8; text-align: center; padding: 4px;">ຍັງບໍ່ມີຮູບ (ໃຊ້ QR ຈຳລອງ)</span>`}
                        </div>
                        <div style="flex: 1;">
                            <input type="file" id="setting-bcel-qr-file" accept="image/*" onchange="handleAdminQrUpload(event)" style="margin-bottom: 8px;">
                            ${hasQr ? `
                                <div>
                                    <button type="button" class="btn btn-outline btn-sm" style="color: #ef4444; border-color: #fca5a5;" onclick="removeBcelQr()">
                                        ${isLao ? 'ລຶບຮູບ QR ນີ້' : 'ลบรูป QR นี้'}
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== GOOGLE SHEETS INTEGRATION SECTION ===== -->
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:18px;margin-bottom:24px;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
                    <span style="font-size:1.3rem;">📊</span>
                    <strong style="font-size:1rem;color:#15803d;">${isLao ? 'ເຊື່ອມຕໍ່ Google Sheets (Real-time Live Sync)' : 'เชื่อมต่อ Google Sheets (Real-time Live Sync)'}</strong>
                </div>

                <div class="form-group">
                    <label>${isLao ? 'Google Apps Script Web App URL' : 'Google Apps Script Web App URL'}</label>
                    <input type="url" id="setting-gsheets-url" placeholder="https://script.google.com/macros/s/.../exec" value="${s.googleSheetsUrl || ''}">
                    <div style="font-size:0.75rem;color:#64748b;margin-top:4px;">
                        ${isLao ? 'ນຳ Web App URL ຈາກ Google Apps Script ມາໃສ່ບ່ອນນີ້' : 'นำ Web App URL ที่ได้จากการ Deploy ใน Google Apps Script มาวางที่นี่'}
                    </div>
                </div>

                <div style="display:flex;align-items:center;gap:10px;margin-top:12px;flex-wrap:wrap;">
                    <button type="button" class="btn btn-outline btn-sm" style="border-color:#16a34a;color:#15803d;" onclick="testGoogleSheetsConnection()">
                        ⚡ ${isLao ? 'ທົດສອບການເຊື່ອມຕໍ່' : 'ทดสอบการเชื่อมต่อ (Test Connection)'}
                    </button>
                    <button type="button" class="btn btn-outline btn-sm" style="border-color:#0284c7;color:#0369a1;" onclick="syncFromGoogleSheets()">
                        📥 ${isLao ? 'ດຶງຂໍ້ມູນສົດຈາກ Sheets' : 'ดึงข้อมูลสดจาก Sheets (Fetch Live)'}
                    </button>
                    <button type="button" class="btn btn-outline btn-sm" style="border-color:#d97706;color:#b45309;" onclick="pushAllToGoogleSheets()">
                        📤 ${isLao ? 'ສົ່ງຂໍ້ມູນທັງໝົດຂຶ້ນ Sheets' : 'ส่งข้อมูลทั้งหมดขึ้น Sheets (Push All)'}
                    </button>
                </div>

                <div style="margin-top:16px;display:flex;align-items:center;gap:8px;font-size:0.88rem;color:#166534;">
                    <input type="checkbox" id="setting-gsheets-autosync" ${s.googleSheetsAutoSync ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;">
                    <label for="setting-gsheets-autosync" style="cursor:pointer;font-weight:600;">
                        ${isLao ? 'ເປີດໃຊ້ Auto Real-Time Live Sync (ດຶງຂໍ້ມູນອັດໂນມັດທຸກໆ 20 ວິນາທີ)' : 'เปิดใช้งาน Auto Real-Time Live Sync (ซิงค์อัตโนมัติทุก 20 วินาที)'}
                    </label>
                </div>
            </div>

            <div class="form-grid">
                <div class="form-group">
                    <label>${isLao ? 'ຄ່າຈັດສົ່ງມາດຕະຖານ (₭ ກີບ)' : 'ค่าจัดส่งมาตรฐาน (₭ กีบ)'}</label>
                    <input type="number" id="setting-shipping-fee" required min="0" value="${AppState.settings.shippingFee || 20000}">
                </div>
                <div class="form-group">
                    <label>${isLao ? 'ຍອດສັ່ງຊື້ຂັ້ນຕ່ຳເພື່ອສົ່ງຟຣີ (₭ ກີບ)' : 'ยอดสั่งซื้อขั้นต่ำเพื่อส่งฟรี (₭ กีบ)'}</label>
                    <input type="number" id="setting-free-ship" required min="0" value="${AppState.settings.freeShippingThreshold || 400000}">
                </div>
            </div>
            <div style="margin-top: 24px;">
                <button type="submit" class="btn btn-primary" style="padding: 12px 24px;">
                    ${isLao ? 'ບັນທຶກການຕັ້ງຄ່າ' : 'บันทึกการตั้งค่า'}
                </button>
            </div>
        </form>
    `;
}

function handleAdminQrUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showToast('กรุณาเลือกไฟล์รูปภาพเท่านั้น', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        AppState.tempBcelQr = e.target.result;
        const box = document.getElementById('setting-qr-preview-box');
        if (box) {
            box.innerHTML = `<img id="admin-qr-preview-img" src="${AppState.tempBcelQr}" style="width: 100%; height: 100%; object-fit: contain;">`;
        }
        showToast(AppState.currentLang === 'la' ? 'ເລືອກຮູບ QR ສຳເລັດ ຢ່າລືມກົດ "ບັນທຶກ"' : 'เลือกรูป QR สำเร็จ อย่าลืมกด "บันทึกการตั้งค่า"', 'info');
    };
    reader.readAsDataURL(file);
}

function removeBcelQr() {
    AppState.settings.bcelQrImage = '';
    AppState.tempBcelQr = '';
    saveSettings();
    switchAdminTab('settings');
    showToast(AppState.currentLang === 'la' ? 'ລຶບຮູບ QR Code ຮຽບຮ້ອຍແລ້ວ' : 'ลบภาพ QR Code เรียบร้อยแล้ว', 'info');
}

function handleSaveSettings(event) {
    event.preventDefault();

    // --- Store Branding ---
    AppState.settings.storeName = document.getElementById('setting-store-name').value.trim();
    AppState.settings.storeTagline = document.getElementById('setting-store-tagline').value.trim();
    AppState.settings.adminPassword = document.getElementById('setting-admin-password').value.trim();

    // Hero title: convert " / " -> <br>
    const heroTitleThEl = document.getElementById('setting-hero-title-th');
    if (heroTitleThEl) AppState.settings.heroTitleTh = heroTitleThEl.value.trim().replace(/ \/ /g, '<br>');
    const heroTitleLaEl = document.getElementById('setting-hero-title-la');
    if (heroTitleLaEl) AppState.settings.heroTitleLa = heroTitleLaEl.value.trim().replace(/ \/ /g, '<br>');
    const heroDescThEl = document.getElementById('setting-hero-desc-th');
    if (heroDescThEl) AppState.settings.heroDescTh = heroDescThEl.value.trim();
    const heroDescLaEl = document.getElementById('setting-hero-desc-la');
    if (heroDescLaEl) AppState.settings.heroDescLa = heroDescLaEl.value.trim();

    // Logo & Banner images (saved via temp variables)
    if (AppState.tempStoreLogo) {
        AppState.settings.storeLogoImage = AppState.tempStoreLogo;
        AppState.tempStoreLogo = null;
    }
    if (AppState.tempHeroBanner) {
        AppState.settings.heroBannerImage = AppState.tempHeroBanner;
        AppState.tempHeroBanner = null;
    }

    // --- BCEL ---
    const bcelAccEl = document.getElementById('setting-bcel-account-no');
    if (bcelAccEl) AppState.settings.bcelAccountNo = bcelAccEl.value.trim();
    const bcelNameEl = document.getElementById('setting-bcel-account-name');
    if (bcelNameEl) AppState.settings.bcelAccountName = bcelNameEl.value.trim();
    if (AppState.tempBcelQr) {
        AppState.settings.bcelQrImage = AppState.tempBcelQr;
        AppState.tempBcelQr = null;
    }

    // --- Google Sheets ---
    const gsheetsUrlEl = document.getElementById('setting-gsheets-url');
    if (gsheetsUrlEl) AppState.settings.googleSheetsUrl = gsheetsUrlEl.value.trim();
    const gsheetsAutoSyncEl = document.getElementById('setting-gsheets-autosync');
    if (gsheetsAutoSyncEl) AppState.settings.googleSheetsAutoSync = gsheetsAutoSyncEl.checked;

    // --- Shipping ---
    AppState.settings.shippingFee = Number(document.getElementById('setting-shipping-fee').value);
    AppState.settings.freeShippingThreshold = Number(document.getElementById('setting-free-ship').value);

    saveSettings();
    setupGoogleSheetsAutoSync();

    // Apply branding changes to the live page immediately
    applyStoreBranding();
    applyLanguageTranslations();

    showToast(AppState.currentLang === 'la' ? 'ບັນທຶກການຕັ້ງຄ່າຮ້ານຄ້າຮຽບຮ້ອຍແລ້ວ!' : 'บันทึกการตั้งค่าร้านค้าเรียบร้อยแล้ว!', 'success');
}

function handleAdminLogoUpload(event) {
    const file = event.target.files[0];
    if (!file || !file.type.startsWith('image/')) { showToast('ກະລຸນາເລືອກໄຟລ໌ຮູບພາບ', 'error'); return; }
    const reader = new FileReader();
    reader.onload = function(e) {
        // Downscale logo to max 200x200 via canvas
        const img = new Image();
        img.onload = function() {
            const maxDim = 200;
            let w = img.width, h = img.height;
            if (w > maxDim || h > maxDim) {
                const ratio = Math.min(maxDim / w, maxDim / h);
                w = Math.round(w * ratio); h = Math.round(h * ratio);
            }
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            AppState.tempStoreLogo = canvas.toDataURL('image/jpeg', 0.85);
            const box = document.getElementById('setting-logo-preview-box');
            if (box) box.innerHTML = `<img src="${AppState.tempStoreLogo}" style="width:100%;height:100%;object-fit:cover;">`;
            showToast(AppState.currentLang === 'la' ? 'ເລືອກຮູບໂລໂກ້ສຳເລັດ ຢ່າລືມກົດ "ບັນທຶກ"' : 'เลือกรูปโลโก้สำเร็จ อย่าลืมกด "บันทึกการตั้งค่า"', 'info');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function removeStoreLogo() {
    AppState.settings.storeLogoImage = '';
    AppState.tempStoreLogo = null;
    saveSettings();
    applyStoreBranding();
    switchAdminTab('settings');
    showToast(AppState.currentLang === 'la' ? 'ລຶບຮູບໂລໂກ້ຮຽບຮ້ອຍແລ້ວ' : 'ลบรูปโลโก้เรียบร้อยแล้ว', 'info');
}

function handleAdminBannerUpload(event) {
    const file = event.target.files[0];
    if (!file || !file.type.startsWith('image/')) { showToast('ກະລຸນາເລືອກໄຟລ໌ຮູບພາບ', 'error'); return; }
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const maxDim = 900;
            let w = img.width, h = img.height;
            if (w > maxDim || h > maxDim) {
                const ratio = Math.min(maxDim / w, maxDim / h);
                w = Math.round(w * ratio); h = Math.round(h * ratio);
            }
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            AppState.tempHeroBanner = canvas.toDataURL('image/jpeg', 0.82);
            const box = document.getElementById('setting-banner-preview-box');
            if (box) box.innerHTML = `<img src="${AppState.tempHeroBanner}" style="width:100%;height:100%;object-fit:cover;">`;
            showToast(AppState.currentLang === 'la' ? 'ເລືອກຮູບ Banner ສຳເລັດ ຢ່າລືມກົດ "ບັນທຶກ"' : 'เลือกรูป Banner สำเร็จ อย่าลืมกด "บันทึกการตั้งค่า"', 'info');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function removeHeroBanner() {
    AppState.settings.heroBannerImage = '';
    AppState.tempHeroBanner = null;
    saveSettings();
    applyStoreBranding();
    switchAdminTab('settings');
    showToast(AppState.currentLang === 'la' ? 'ລຶບຮູບ Banner ຮຽບຮ້ອຍແລ້ວ (ໃຊ້ຮູບເດີມ)' : 'ลบรูป Banner เรียบร้อยแล้ว (ใช้รูปเดิม)', 'info');
}

function showOrderDetailsModal(index) {
    const ord = AppState.orders[index];
    if (!ord) return;

    alert(`
=== ${AppState.currentLang === 'la' ? 'ຂໍ້ມູນຄຳສັ່ງຊື້' : 'ข้อมูลคำสั่งซื้อ'} ${ord.orderId} ===
${new Date(ord.timestamp).toLocaleString(AppState.currentLang === 'la' ? 'lo-LA' : 'th-TH')}
${ord.shipping.name} (${ord.shipping.phone})
${ord.shipping.companyName ? ord.shipping.companyName + ' | ' : ''}${ord.shipping.address}

${ord.items.map(i => `- ${i.name} [${i.size}, ${i.color}] x${i.quantity} = ${formatPrice(i.price * i.quantity)}`).join('\n')}

${AppState.currentLang === 'la' ? 'ຍອດສິນຄ້າ:' : 'ยอดสินค้า:'} ${formatPrice(ord.subtotal)}
${AppState.currentLang === 'la' ? 'ຄ່າຈັດສົ່ງ:' : 'ค่าจัดส่ง:'} ${formatPrice(ord.shippingFee)}
${AppState.currentLang === 'la' ? 'ຍອດສຸດທິ:' : 'ยอดสุทธิ:'} ${formatPrice(ord.total)}
${AppState.currentLang === 'la' ? 'ສະຖານະ:' : 'สถานะ:'} ${ord.status}
    `);
}
function exportOrdersJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(AppState.orders, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `orders-thaydee-${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// ==========================================================================
// Google Sheets Real-Time Sync Logic
// ==========================================================================
let gsheetsSyncTimer = null;

function testGoogleSheetsConnection() {
    const url = document.getElementById('setting-gsheets-url').value.trim() || (AppState.settings && AppState.settings.googleSheetsUrl);
    if (!url) {
        showToast(AppState.currentLang === 'la' ? 'ກະລຸນາໃສ່ Google Apps Script Web App URL' : 'กรุณาใส่ Google Apps Script Web App URL ก่อนครับ', 'error');
        return;
    }
    showToast(AppState.currentLang === 'la' ? 'ກຳລັງທົດສອບການເຊື່ອມຕໍ່...' : 'กำลังทดสอบการเชื่อมต่อกับ Google Sheets...', 'info');

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                showToast(AppState.currentLang === 'la' ? 'ເຊື່ອມຕໍ່ Google Sheets ສຳເລັດແລ້ວ! 🎉' : 'เชื่อมต่อกับ Google Sheets สำเร็จเรียบร้อย! 🎉', 'success');
            } else {
                showToast('Google Sheets Error: ' + (data.message || 'Unknown error'), 'error');
            }
        })
        .catch(err => {
            console.error(err);
            showToast(AppState.currentLang === 'la' ? 'ບໍ່ສາມາດເຊື່ອມຕໍ່ໄດ້ ກະລຸນາກວດສອບ URL' : 'ไม่สามารถเชื่อมต่อได้ กรุณาตรวจสอบ URL หรือสิทธิ์การเข้าถึง', 'error');
        });
}

function syncFromGoogleSheets(isSilent = false) {
    const url = (AppState.settings && AppState.settings.googleSheetsUrl) || (document.getElementById('setting-gsheets-url') ? document.getElementById('setting-gsheets-url').value.trim() : '');
    if (!url) {
        if (!isSilent) showToast(AppState.currentLang === 'la' ? 'ກະລຸນາตั้งค่า URL ก่อน' : 'กรุณาตั้งค่า Google Sheets URL ก่อนครับ', 'error');
        return;
    }

    if (!isSilent) showToast(AppState.currentLang === 'la' ? 'ກຳລັງດຶງຂໍ້ມູນຈາກ Google Sheets...' : 'กำลังดึงข้อมูลสดจาก Google Sheets...', 'info');

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                let updated = false;

                if (Array.isArray(data.products) && data.products.length > 0) {
                    AppState.products = data.products;
                    saveProducts();
                    updated = true;
                }
                if (Array.isArray(data.categories) && data.categories.length > 0) {
                    AppState.categories = data.categories;
                    saveCategories();
                    updated = true;
                }
                if (Array.isArray(data.orders)) {
                    AppState.orders = data.orders;
                    saveOrders();
                    updated = true;
                }

                if (updated) {
                    renderCatalog();
                    renderCategoryPills();
                    if (document.getElementById('admin-modal') && document.getElementById('admin-modal').classList.contains('active')) {
                        const activeBtn = document.querySelector('.admin-tab-btn.active');
                        if (activeBtn) {
                            const tabId = activeBtn.id.replace('tab-btn-', '');
                            if (tabId === 'orders' || tabId === 'products' || tabId === 'categories') {
                                switchAdminTab(tabId);
                            }
                        }
                    }
                }

                if (!isSilent) {
                    showToast(AppState.currentLang === 'la' ? 'ດຶງຂໍ້ມູນສິນຄ້າ ແລະ ອໍເດີ້ຈາກ Google Sheets ສຳເລັດ!' : 'ดึงข้อมูลสินค้าและออเดอร์จาก Google Sheets เรียบร้อย!', 'success');
                }
            } else if (!isSilent) {
                showToast('Error: ' + data.message, 'error');
            }
        })
        .catch(err => {
            console.error('Fetch Google Sheets failed:', err);
            if (!isSilent) {
                showToast(AppState.currentLang === 'la' ? 'เกิดข้อผิดพลาดในการดึงข้อมูล' : 'เกิดข้อผิดพลาดในการดึงข้อมูลจาก Google Sheets', 'error');
            }
        });
}

function pushToGoogleSheets(action, payload = {}) {
    const url = AppState.settings && AppState.settings.googleSheetsUrl;
    if (!url) return;

    const postData = Object.assign({ action: action }, payload);

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    }).then(() => {
        console.log(`[Google Sheets] Pushed action "${action}" successfully.`);
    }).catch(err => {
        console.error(`[Google Sheets] Push action "${action}" failed:`, err);
    });
}

function pushAllToGoogleSheets() {
    const url = document.getElementById('setting-gsheets-url').value.trim() || (AppState.settings && AppState.settings.googleSheetsUrl);
    if (!url) {
        showToast(AppState.currentLang === 'la' ? 'ກະລຸນາໃສ່ Google Sheets URL' : 'กรุณาใส่ Google Sheets URL ก่อนครับ', 'error');
        return;
    }

    showToast(AppState.currentLang === 'la' ? 'ກຳລັງສົ່ງຂໍ້ມູນທັງໝົດຂຶ້ນ Google Sheets...' : 'กำลังส่งข้อมูลทั้งหมดขึ้น Google Sheets...', 'info');

    const payload = {
        action: 'syncAll',
        products: AppState.products,
        categories: AppState.categories,
        orders: AppState.orders,
        settings: AppState.settings
    };

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 'success') {
            showToast(AppState.currentLang === 'la' ? 'ສົ່ງຂໍ້ມູນທັງໝົດຂຶ້ນ Google Sheets ສຳເລັດແລ້ວ!' : 'ส่งข้อมูลทั้งหมดขึ้น Google Sheets เรียบร้อยแล้ว!', 'success');
        } else {
            showToast('Sync Error: ' + (data.message || 'Unknown'), 'error');
        }
    })
    .catch(err => {
        console.warn('POST JSON failed, fallbacking to no-cors fetch:', err);
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(payload)
        }).then(() => {
            showToast(AppState.currentLang === 'la' ? 'ส่งข้อมูลสำเร็จแล้ว' : 'ส่งข้อมูลไปยัง Google Sheets เรียบร้อยแล้ว', 'success');
        }).catch(e => {
            showToast('Error pushing data to Google Sheets', 'error');
        });
    });
}

function setupGoogleSheetsAutoSync() {
    if (gsheetsSyncTimer) {
        clearInterval(gsheetsSyncTimer);
        gsheetsSyncTimer = null;
    }

    if (AppState.settings && AppState.settings.googleSheetsUrl && AppState.settings.googleSheetsAutoSync) {
        syncFromGoogleSheets(true);
        gsheetsSyncTimer = setInterval(() => {
            syncFromGoogleSheets(true);
        }, 20000);
        console.log('[Google Sheets] Auto Real-time Live Sync active (20s polling).');
    }
}

// ==========================================================================
// App Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initStorage();

    // Apply Language and Font on start
    switchLanguage(AppState.currentLang || 'la');

    // Apply store branding (logo image, store name, hero image) on start
    applyStoreBranding();

    updateCartBadge();
    setupGoogleSheetsAutoSync();

    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                AppState.searchQuery = e.target.value;
                renderCatalog();
            }, 250);
        });
    }

    // Sort select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            AppState.sortBy = e.target.value;
            renderCatalog();
        });
    }
});
