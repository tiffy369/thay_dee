/**
 * THAY DEE CLOTHING - Google Apps Script Backend for Google Sheets
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions -> Apps Script (ส่วนขยาย -> Apps Script).
 * 3. Delete existing code, paste all of this code, and click Save.
 * 4. Click Deploy -> New deployment (ทำให้ใช้งานได้ -> การทำให้ใช้งานได้ใหม่).
 * 5. Select type: Web App (แอปเว็บ).
 * 6. Execute as: Me (ฉัน).
 * 7. Who has access: Anyone (ทุกคน).
 * 8. Click Deploy, authorize permissions, and copy the Web App URL into your store's admin settings.
 */

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    ensureSheets(ss);
    
    var products = getProductsFromSheet(ss.getSheetByName("Products"));
    var categories = getCategoriesFromSheet(ss.getSheetByName("Categories"));
    var orders = getOrdersFromSheet(ss.getSheetByName("Orders"));
    var settings = getSettingsFromSheet(ss.getSheetByName("Settings"));
    
    var result = {
      status: "success",
      timestamp: new Date().toISOString(),
      products: products,
      categories: categories,
      orders: orders,
      settings: settings
    };
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var action = data.action;
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    ensureSheets(ss);
    
    if (action === "newOrder") {
      addOrderToSheet(ss.getSheetByName("Orders"), data.order);
      if (data.products) {
        saveProductsToSheet(ss.getSheetByName("Products"), data.products);
      }
    } else if (action === "syncProducts") {
      saveProductsToSheet(ss.getSheetByName("Products"), data.products);
    } else if (action === "syncCategories") {
      saveCategoriesToSheet(ss.getSheetByName("Categories"), data.categories);
    } else if (action === "syncOrders") {
      saveOrdersToSheet(ss.getSheetByName("Orders"), data.orders);
    } else if (action === "syncSettings") {
      saveSettingsToSheet(ss.getSheetByName("Settings"), data.settings);
    } else if (action === "syncAll") {
      if (data.products) saveProductsToSheet(ss.getSheetByName("Products"), data.products);
      if (data.categories) saveCategoriesToSheet(ss.getSheetByName("Categories"), data.categories);
      if (data.orders) saveOrdersToSheet(ss.getSheetByName("Orders"), data.orders);
      if (data.settings) saveSettingsToSheet(ss.getSheetByName("Settings"), data.settings);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Action " + action + " executed successfully." }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function ensureSheets(ss) {
  var sheetNames = ["Products", "Orders", "Categories", "Settings"];
  sheetNames.forEach(function(name) {
    if (!ss.getSheetByName(name)) {
      var sheet = ss.insertSheet(name);
      if (name === "Products") {
        sheet.appendRow(["ID", "Name (TH)", "Name (LA)", "Category", "Price", "Original Price", "Stock S", "Stock M", "Stock L", "Stock XL", "Total Stock", "Description", "Images (JSON/URLs)", "Tag"]);
      } else if (name === "Orders") {
        sheet.appendRow(["Order ID", "Date", "Customer Name", "Phone", "Address", "Shipping Company", "Items JSON", "Total Amount", "Status", "Slip URL"]);
      } else if (name === "Categories") {
        sheet.appendRow(["Category ID", "Name (TH)", "Name (LA)"]);
      } else if (name === "Settings") {
        sheet.appendRow(["Key", "Value"]);
      }
    }
  });
}

function getProductsFromSheet(sheet) {
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  var products = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    if (!row[0]) continue;
    var stockS = Number(row[6]) || 0;
    var stockM = Number(row[7]) || 0;
    var stockL = Number(row[8]) || 0;
    var stockXL = Number(row[9]) || 0;
    var stockBySize = { S: stockS, M: stockM, L: stockL, XL: stockXL };
    var totalStock = Number(row[10]) || (stockS + stockM + stockL + stockXL);
    
    var images = [];
    try {
      images = typeof row[12] === 'string' && row[12].startsWith('[') ? JSON.parse(row[12]) : (row[12] ? row[12].split(',') : []);
    } catch(e) { images = [row[12]]; }
    
    products.push({
      id: Number(row[0]) || row[0],
      name: String(row[1] || ''),
      nameLa: String(row[2] || row[1] || ''),
      category: String(row[3] || 'all'),
      price: Number(row[4]) || 0,
      originalPrice: row[5] ? Number(row[5]) : null,
      stockBySize: stockBySize,
      stock: totalStock,
      description: String(row[11] || ''),
      images: images,
      tag: String(row[13] || '')
    });
  }
  return products;
}

function saveProductsToSheet(sheet, products) {
  sheet.clearContents();
  sheet.appendRow(["ID", "Name (TH)", "Name (LA)", "Category", "Price", "Original Price", "Stock S", "Stock M", "Stock L", "Stock XL", "Total Stock", "Description", "Images (JSON/URLs)", "Tag"]);
  if (!products || !products.length) return;
  
  products.forEach(function(p) {
    var stockS = (p.stockBySize && p.stockBySize.S !== undefined) ? p.stockBySize.S : 0;
    var stockM = (p.stockBySize && p.stockBySize.M !== undefined) ? p.stockBySize.M : 0;
    var stockL = (p.stockBySize && p.stockBySize.L !== undefined) ? p.stockBySize.L : 0;
    var stockXL = (p.stockBySize && p.stockBySize.XL !== undefined) ? p.stockBySize.XL : 0;
    var imagesJson = JSON.stringify(p.images || []);
    
    sheet.appendRow([
      p.id,
      p.name || '',
      p.nameLa || '',
      p.category || '',
      p.price || 0,
      p.originalPrice || '',
      stockS,
      stockM,
      stockL,
      stockXL,
      p.stock || 0,
      p.description || '',
      imagesJson,
      p.tag || ''
    ]);
  });
}

function getOrdersFromSheet(sheet) {
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  var orders = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    if (!row[0]) continue;
    var items = [];
    try { items = JSON.parse(row[6]); } catch(e) {}
    orders.push({
      id: row[0],
      createdAt: row[1],
      customerName: row[2],
      phone: row[3],
      address: row[4],
      shippingCompany: row[5],
      items: items,
      totalAmount: Number(row[7]) || 0,
      status: row[8] || 'รอการตรวจสอบ',
      slipUrl: row[9] || ''
    });
  }
  return orders;
}

function addOrderToSheet(sheet, order) {
  sheet.appendRow([
    order.id || Date.now(),
    order.createdAt || new Date().toISOString(),
    order.customerName || '',
    order.phone || '',
    order.address || '',
    order.shippingCompany || '',
    JSON.stringify(order.items || []),
    order.totalAmount || 0,
    order.status || 'รอการตรวจสอบ',
    order.slipUrl || ''
  ]);
}

function saveOrdersToSheet(sheet, orders) {
  sheet.clearContents();
  sheet.appendRow(["Order ID", "Date", "Customer Name", "Phone", "Address", "Shipping Company", "Items JSON", "Total Amount", "Status", "Slip URL"]);
  if (!orders || !orders.length) return;
  orders.forEach(function(o) {
    addOrderToSheet(sheet, o);
  });
}

function getCategoriesFromSheet(sheet) {
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  var categories = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    if (!row[0]) continue;
    categories.push({
      id: String(row[0]),
      nameTh: String(row[1] || ''),
      nameLa: String(row[2] || '')
    });
  }
  return categories;
}

function saveCategoriesToSheet(sheet, categories) {
  sheet.clearContents();
  sheet.appendRow(["Category ID", "Name (TH)", "Name (LA)"]);
  if (!categories || !categories.length) return;
  categories.forEach(function(c) {
    sheet.appendRow([c.id, c.nameTh || '', c.nameLa || '']);
  });
}

function getSettingsFromSheet(sheet) {
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return {};
  var settings = {};
  for (var i = 1; i < data.length; i++) {
    if (data[i][0]) {
      settings[data[i][0]] = data[i][1];
    }
  }
  return settings;
}

function saveSettingsToSheet(sheet, settings) {
  sheet.clearContents();
  sheet.appendRow(["Key", "Value"]);
  for (var key in settings) {
    if (settings.hasOwnProperty(key)) {
      sheet.appendRow([key, typeof settings[key] === 'object' ? JSON.stringify(settings[key]) : settings[key]]);
    }
  }
}
