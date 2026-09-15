/**
 * THAY DEE CLOTHING - Initial Product Catalog & Categories (Lao Kip Currency)
 */

const DEFAULT_CATEGORIES = [
    { id: 'all', nameTh: 'ทั้งหมด', nameLa: 'ທັງໝົດ' },
    { id: 'tshirt', nameTh: 'เสื้อยืด', nameLa: 'ເສື້ອຍືດ' },
    { id: 'shirt', nameTh: 'เสื้อเชิ้ต', nameLa: 'ເສື້ອເຊີ້ດ' },
    { id: 'pants', nameTh: 'กางเกง & ยีนส์', nameLa: 'ໂສ້ງ & ຢີນ' },
    { id: 'jacket', nameTh: 'แจ็กเก็ต & คลุม', nameLa: 'ເສື້ອແຈັກເກັດ & ຄຸມ' },
    { id: 'dress', nameTh: 'เดรส & ชุดเซ็ต', nameLa: 'ຊຸດເດຣສ & ເຊັດ' },
    { id: 'accessory', nameTh: 'เครื่องประดับ', nameLa: 'ເຄື່ອງປະດັບ' }
];

const DEFAULT_PRODUCTS = [
    {
        id: 1,
        name: "เสื้อยืดพรีเมียมทรง Oversized สีพื้น",
        nameLa: "ເສື້ອຍືດພຣີມຽມຊົງ Oversized ສີພື້ນ",
        nameEn: "Heavy Cotton Minimalist Oversized Tee",
        category: "tshirt",
        categoryName: "เสื้อยืด",
        price: 120000,
        originalPrice: 160000,
        tag: "ขายดี",
        tagLa: "ຂາຍດີ",
        rating: 4.9,
        reviewsCount: 128,
        images: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "ขาวมินิมอล (Clean White)", code: "#f8fafc" },
            { name: "ดำชาร์โคล (Charcoal Black)", code: "#18181b" },
            { name: "เขียวโอลีฟ (Olive Green)", code: "#556b2f" }
        ],
        description: "ผลิตจากผ้าฝ้าย Cotton 100% หนา 240 GSM ทรงสวย ไม่ย้วยง่าย ระบายอากาศได้ดีเยี่ยม สวมใส่สบาย เหมาะกับสภาพอากาศบ้านเรา ดีไซน์คอกลมกระชับ ไม่ติดคอ",
        stock: 35
    },
    {
        id: 2,
        name: "เสื้อเชิ้ตทรงหลวม ผ้าลินินผสมคอตตอน",
        nameLa: "ເສື້ອເຊີ້ດຊົງຫຼວມ ຜ້າລິນິນປະສົມຄັອດຕ້ອນ",
        nameEn: "Relaxed Fit Linen Blend Shirt",
        category: "shirt",
        categoryName: "เสื้อเชิ้ต",
        price: 195000,
        originalPrice: 250000,
        tag: "มาใหม่",
        tagLa: "ມາໃໝ່",
        rating: 4.8,
        reviewsCount: 84,
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80"
        ],
        sizes: ["M", "L", "XL"],
        colors: [
            { name: "เบจทราย (Sand Beige)", code: "#d8cbb5" },
            { name: "ฟ้าคราม (Sky Blue)", code: "#93c5fd" },
            { name: "ขาวสว่าง (Pure White)", code: "#ffffff" }
        ],
        description: "เสื้อเชิ้ตทรงหลวมเบาสบาย เนื้อผ้าผสมลินินธรรมชาติ นุ่มโปร่งระบายลมได้ดี ให้ลุคสไตล์ Minimal Casual ใส่ทำงานหรือใส่เที่ยวคาเฟ่ในวันพักผ่อนได้อย่างลงตัว",
        stock: 22
    },
    {
        id: 3,
        name: "เสื้อแจ็กเก็ตยีนส์วินเทจฟอกนุ่ม",
        nameLa: "ເສື້ອແຈັກເກັດຢີນວິນເທຈຟອກນຸ້ມ",
        nameEn: "Vintage Wash Classic Denim Jacket",
        category: "jacket",
        categoryName: "เสื้อคลุม & แจ็กเก็ต",
        price: 350000,
        originalPrice: 480000,
        tag: "สินค้ายอดนิยม",
        tagLa: "ຍອດນິຍົມ",
        rating: 5.0,
        reviewsCount: 96,
        images: [
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "ยีนส์ฟอกกลาง (Mid Wash Blue)", code: "#4682b4" },
            { name: "ดำฟอกวินเทจ (Washed Black)", code: "#2e2e2e" }
        ],
        description: "แจ็กเก็ตผ้ายีนส์เกรดพรีเมียม 13.5 oz ผ่านกระบวนการฟอกพิเศษให้นุ่มใส่สบาย กระดุมโลหะรมดำ กระเป๋าหน้าใช้งานได้จริง คัตติ้งเนี้ยบ แมตช์ได้กับทุกสไตล์",
        stock: 18
    },
    {
        id: 4,
        name: "กางเกงสแล็คสมาร์ทขาเต่อทรง Slim Straight",
        nameLa: "ໂສ້ງສະແລັກສະມາດຂາເຕີ່ຊົງ Slim Straight",
        nameEn: "Tailored Smart Ankle Trousers",
        category: "pants",
        categoryName: "กางเกง",
        price: 220000,
        originalPrice: 280000,
        tag: "แนะนำ",
        tagLa: "ແນະນຳ",
        rating: 4.8,
        reviewsCount: 152,
        images: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&auto=format&fit=crop&q=80"
        ],
        sizes: ["S (28-29)", "M (30-31)", "L (32-33)", "XL (34-35)"],
        colors: [
            { name: "ดำโมเดิร์น (Classic Black)", code: "#0f172a" },
            { name: "เทาควันบุหรี่ (Smoke Grey)", code: "#64748b" },
            { name: "น้ำตาลกากี (Khaki Brown)", code: "#854d0e" }
        ],
        description: "กางเกงทรงสลิมตรงความยาวเต่อข้อเท้า ดีไซน์เอวยืดซ่อนด้านข้าง ใส่สบายไม่อึดอัด ผ้าทิ้งตัวสวย ยับยาก ไม่ต้องรีดเยอะ เหมาะทั้งวันทำงานและการนัดพบสำคัญ",
        stock: 40
    },
    {
        id: 5,
        name: "กางเกงยีนส์ขากระบอกตรง ผ้ายีนส์ริมแดง",
        nameLa: "ໂສ້ງຢີນຂາກະບອກຊື່ ຜ້າຢີນລິມແດງ",
        nameEn: "Selvedge Classic Straight Leg Jeans",
        category: "pants",
        categoryName: "กางเกง",
        price: 290000,
        originalPrice: 390000,
        tag: "ลดราคา",
        tagLa: "ຫຼຸດລາຄາ",
        rating: 4.9,
        reviewsCount: 210,
        images: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop&q=80"
        ],
        sizes: ["S (29-30)", "M (31-32)", "L (33-34)", "XL (35-36)"],
        colors: [
            { name: "น้ำเงินอินดิโก้เข้ม (Raw Indigo)", code: "#1e3a8a" },
            { name: "ยีนส์ฟอกอ่อน (Light Blue Wash)", code: "#7dd3fc" }
        ],
        description: "ผ้ายีนส์เดนิมแท้ 100% สไตล์เรโทร ยิ่งใส่ยิ่งเฟดสวยตามสรีระผู้สวมใส่ ทรงกระบอกตรงพับขาโชว์ริมแดงได้ลุควินเทจเต็มพิกัด",
        stock: 28
    },
    {
        id: 6,
        name: "เสื้อฮู้ดดี้ผ้าคอตตอนฟรีซ ทรง Boxy Fit",
        nameLa: "ເສື້ອຮູດດີ້ຜ້າຄັອດຕ້ອນຟຣີຊ ຊົງ Boxy Fit",
        nameEn: "Boxy Fleece Pullover Hoodie",
        category: "jacket",
        categoryName: "เสื้อคลุม & แจ็กเก็ต",
        price: 260000,
        originalPrice: 350000,
        tag: "ยอดฮิต",
        tagLa: "ຍອດຮິດ",
        rating: 4.9,
        reviewsCount: 165,
        images: [
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80"
        ],
        sizes: ["M", "L", "XL"],
        colors: [
            { name: "เทาเมลานจ์ (Heather Grey)", code: "#9ca3af" },
            { name: "ดำสนิท (Jet Black)", code: "#171717" },
            { name: "เขียวเซจ (Sage Green)", code: "#84a98c" }
        ],
        description: "เสื้อฮู้ดดี้บุขนด้านในนุ่มละมุน ไม่ระคายเคืองผิว ทรง Boxy ไหล่ตกกำลังดี หมวก 2 ชั้นหนาอยู่ทรง กระเป๋าหน้าจิงโจ้ขนาดใหญ่ อบอุ่นและเท่ทุกองศา",
        stock: 24
    },
    {
        id: 7,
        name: "ชุดมินิเดรสคอเหลี่ยม ลายดอกไม้วินเทจ",
        nameLa: "ຊຸດມິນິເດຣສຄໍຫຼ່ຽມ ລາຍດອກໄມ້ວິນເທຈ",
        nameEn: "French Square-Neck Floral Mini Dress",
        category: "dress",
        categoryName: "เดรส & ชุดเซ็ต",
        price: 240000,
        originalPrice: 320000,
        tag: "มาใหม่",
        tagLa: "ມາໃໝ່",
        rating: 4.7,
        reviewsCount: 78,
        images: [
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80"
        ],
        sizes: ["S", "M", "L"],
        colors: [
            { name: "ครีมดอกไม้เล็ก (Floral Cream)", code: "#fef3c7" },
            { name: "ชมพูดัสตี้ (Dusty Rose)", code: "#f43f5e" }
        ],
        description: "เดรสสั้นคอเหลี่ยมเสริมสรีระช่วงคอให้ดูเพรียวสวย แขนตุ๊กตาจับจีบน่ารัก ผ้าชีฟองพิมพ์ลายพรีเมียมมีซับในทั้งตัว พลิ้วไหว ถ่ายรูปสวยเป๊ะทุกมุมมอง",
        stock: 19
    },
    {
        id: 8,
        name: "หมวกแก๊ปเบสบอลคลาสสิก ปักอักษรคลีนๆ",
        nameLa: "ໝວກແກ໊ບເບສບອນຄລາສສິກ ປັກອັກສອນຄລີນໆ",
        nameEn: "Classic Washed Cotton Baseball Cap",
        category: "accessory",
        categoryName: "เครื่องประดับ",
        price: 85000,
        originalPrice: 115000,
        tag: "ไอเทมเสริม",
        tagLa: "ໄອເທັມເສີມ",
        rating: 4.9,
        reviewsCount: 310,
        images: [
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&auto=format&fit=crop&q=80"
        ],
        sizes: ["Free Size (ປັບຂະໜາດໄດ້)"],
        colors: [
            { name: "กรมท่า (Navy Blue)", code: "#1e293b" },
            { name: "เบจกากี (Beige Khaki)", code: "#d1c7bd" },
            { name: "ดำด้าน (Matte Black)", code: "#18181b" }
        ],
        description: "หมวกแก๊ปผ้าคอตตอนทวิลฟอกนุ่ม สวมใส่สบาย ปีกหมวกโค้งกำลังดี สายปรับด้านหลังเป็นหัวเข็มขัดโลหะวินเทจ แมตช์เข้ากับเสื้อผ้าได้ทุกชุด",
        stock: 50
    }
];

const DEFAULT_STORE_SETTINGS = {
    storeName: "THAY DEE CLOTHING (ຮ້ານເທ່ດີ ແຟຊັ່ນ)",
    adminPassword: "admin", // Default admin password
    storeTagline: "ເສື້ອຜ້າດີໄຊນ໌ມິນິມອນ ໃສ່ສະບາຍ ສະໄຕລ໌ທີ່ທ່ານເລືອກໄດ້",
    storeLogoImage: "", // Custom uploaded store logo/profile image (base64)
    heroTitleTh: "เสื้อผ้าดีไซน์มินิมอล<br>ใส่สบาย สไตล์ที่คุณเลือกได้",
    heroTitleLa: "ເສື້ອຜ້າດີໄຊນ໌ມິນິມອນ<br>ໃສ່ສະບາຍ ສະໄຕລ໌ທີ່ທ່ານເລືອກໄດ້",
    heroDescTh: "คัดสรรเนื้อผ้าเกรดพรีเมียม สวมใส่สบาย ระบายอากาศได้ดี ตัดเย็บประณีต พร้อมส่งตรงถึงหน้าบ้านคุณ สั่งซื้อง่าย สแกนจ่ายด้วย BCEL OnePay ทันที",
    heroDescLa: "ຄັດສັນເນື້ອຜ້າເກຣດພຣີມຽມ ສວມໃສ່ສະບາຍ ລະບາຍອາກາດໄດ້ດີ ຕັດຫຍິບປານີດ ພ້ອມສົ່ງຕົງເຖິງໜ້າບ້ານທ່ານ ສັ່ງຊື້ງ່າຍ ສະແກນຈ່າຍດ້ວຍ BCEL OnePay ທັນທີ",
    heroBannerImage: "", // Custom uploaded hero banner image (base64)
    paymentMethod: "bcel", // 'bcel'
    bankName: "BCEL (ທະນາຄານການຄ້າຕ່າງປະເທດລາວ)",
    bcelAccountNo: "160-12-00-01234567-001",
    bcelAccountName: "THAY DEE CLOTHING STORE",
    bcelQrImage: "", // Custom uploaded BCEL OnePay QR image (base64)
    currency: "LAK",
    currencySymbol: "₭",
    freeShippingThreshold: 400000, // ส่งฟรีเมื่อครบ 400,000 กีบ
    shippingFee: 20000,            // ค่าจัดส่ง 20,000 กีบ
    contactEmail: "contact@thaydee.com",
    contactLine: "@thaydee"
};
