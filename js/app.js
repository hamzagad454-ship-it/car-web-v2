/* ============================================
   Mashary Cars - JavaScript
   Pure HTML/CSS/JS Version
   ============================================ */

// ============================================
// DATA
// ============================================
const COUNTRIES = [
  {
    id: 'egypt', name: 'Egypt', nameAr: 'مصر', flag: '🇪🇬', available: true
  },
  {
    id: 'morocco', name: 'Morocco', nameAr: 'المغرب', flag: '🇲🇦', available: true
  },
  {
    id: 'uae', name: 'UAE', nameAr: 'الإمارات', flag: '🇦🇪', available: false, comingSoon: true
  },
  {
    id: 'turkey', name: 'Turkey', nameAr: 'تركيا', flag: '🇹🇷', available: false, comingSoon: true
  }
];

// Contact numbers intentionally remain configurable placeholders until real business numbers are supplied.
const CONTACTS = {
  egypt: { whatsapp: '+201042471040' },
  morocco: { whatsapp: '+201042471040' },
  uae: { whatsapp: '+201042471040' },
  turkey: { whatsapp: '+201042471040' }
};

// The Nissan Sunny is one model available in 3 colors (black, silver, gold),
// so it's a single listing whose gallery holds photos of all three and whose
// description tells the customer which colors they can choose from.
const CARS = [
  {
    id: 'nissan-sunny-2022', slug: 'nissan-sunny-2022',
    name: 'Nissan Sunny 2022', brand: 'Nissan', model: 'Sunny', year: 2022,
    category: 'economy', countryIds: ['egypt'],
    images: [
      'cars-images/nissan-sunny-silver/3-front.png',
      'cars-images/nissan-sunny-silver/2-front-angle.png',
      'cars-images/nissan-sunny-silver/4-rear-angle.png',
      'cars-images/nissan-sunny-silver/1-rear.png',
      'cars-images/nissan-sunny-black/3-front.jpg',
      'cars-images/nissan-sunny-black/2-front-angle.jpg',
      'cars-images/nissan-sunny-black/4-rear.jpg',
      'cars-images/nissan-sunny-black/1-front-angle-small.jpg',
      'cars-images/nissan-sunny-gold/2-front.png',
      'cars-images/nissan-sunny-gold/1-front-angle.png',
      'cars-images/nissan-sunny-gold/4-rear-angle.png',
      'cars-images/nissan-sunny-gold/3-rear.png'
    ],
    realVehicle: true, seats: 5, bags: 2, doors: 4,
    transmission: 'automatic', fuel: 'petrol', ac: true,
    price: 900, currency: 'EGP',
    desc: 'Reliable and fuel-efficient. Available in black, silver, and gold.',
    descAr: 'موثوقة وموفرة للوقود. متوفرة باللون الأسود، الرصاصي، والذهبي.',
    bestFor: ['city-trips'],
    services: ['flexible-pickup'],
    status: 'available',
    availability: {
      egypt: { available: true, price: 900, currency: 'EGP' }
    }
  },
  {
    id: 'range-rover-2024', slug: 'range-rover-2024',
    name: 'Range Rover 2024', brand: 'Land Rover', model: 'Range Rover', year: 2024,
    category: 'luxury', countryIds: ['morocco'],
    images: [
      'cars-images/range-rover/2-front.png',
      'cars-images/range-rover/1-front-angle.png',
      'cars-images/range-rover/3-rear-angle.png',
      'cars-images/range-rover/4-rear.png'
    ],
    realVehicle: true, seats: 5, bags: 4, doors: 5,
    transmission: 'automatic', fuel: 'petrol', ac: true,
    price: 2200, currency: 'MAD',
    desc: 'The pinnacle of luxury SUVs. Commanding presence with premium comfort.',
    descAr: 'قمة فخامة السيارات الرياضية متعددة الاستخدامات. حضور مميز مع راحة فاخرة.',
    bestFor: ['luxury','business','family'],
    services: ['hotel-delivery','private-driver','flexible-pickup'],
    status: 'available',
    availability: {
      morocco: { available: true, price: 2200, currency: 'MAD' }
    },
  },
  {
    id: 'vw-touareg-2024', slug: 'vw-touareg-2024',
    name: 'Volkswagen Touareg 2024', brand: 'Volkswagen', model: 'Touareg', year: 2024,
    category: 'suv', countryIds: ['morocco'],
    images: [
      'cars-images/vw-touareg/1-rear-angle.png',
      'cars-images/vw-touareg/2-rear-angle-2.png',
      'cars-images/vw-touareg/3-rear.png',
      'cars-images/vw-touareg/4-rear.png.png'
    ],
    realVehicle: true, seats: 5, bags: 4, doors: 5,
    transmission: 'automatic', fuel: 'petrol', ac: true,
    price: 1300, currency: 'MAD',
    desc: 'Premium German engineering. A refined SUV built for comfort and long journeys.',
    descAr: 'هندسة ألمانية متميزة. سيارة دفع رباعي راقية مصممة للراحة والرحلات الطويلة.',
    bestFor: ['business','family','long-trips'],
    services: ['hotel-delivery','flexible-pickup'],
    status: 'available',
    availability: {
      morocco: { available: true, price: 1300, currency: 'MAD' }
    },
  },
  {
    id: 'hyundai-tucson-2024-ma', slug: 'hyundai-tucson-2024-ma',
    name: 'Hyundai Tucson 2024', brand: 'Hyundai', model: 'Tucson', year: 2024,
    category: 'suv', countryIds: ['morocco'],
    images: [

      'cars-images/hyundai-tucson/2-front.png',
      'cars-images/hyundai-tucson/1-front-angle.png',
      'cars-images/hyundai-tucson/3-rear-angle.png',
      'cars-images/hyundai-tucson/4-rear.png'
    ],
    realVehicle: true, seats: 5, bags: 4, doors: 5,
    transmission: 'automatic', fuel: 'petrol', ac: true,
    price: 650, currency: 'MAD',
    desc: 'Spacious and versatile. Perfect for families and adventures.',
    descAr: 'واسعة ومتعددة الاستخدامات. مثالية للعائلات والمغامرات.',
    bestFor: ['family','long-trips'],
    services: ['hotel-delivery','flexible-pickup'],
    status: 'available',
    availability: {
      morocco: { available: true, price: 650, currency: 'MAD' }
    },
  },
  {
    id: 'dacia-duster-2024', slug: 'dacia-duster-2024',
    name: 'Dacia Duster 2024', brand: 'Dacia', model: 'Duster', year: 2024,
    category: 'suv', countryIds: ['morocco'],
    images: [
      'cars-images/dacia-duster/2-front.jpg',
      'cars-images/dacia-duster/1-front-angle.jpg',
      'cars-images/dacia-duster/3-rear-angle.jpg',
      'cars-images/dacia-duster/4-rear.jpg'
    ],
    realVehicle: true, seats: 5, bags: 3, doors: 5,
    transmission: 'automatic', fuel: 'petrol', ac: true,
    price: 400, currency: 'MAD',
    desc: 'Rugged, reliable, and budget-friendly. Great for city and light off-road trips.',
    descAr: 'قوية وموثوقة واقتصادية. مثالية للمدينة والرحلات الخفيفة خارج الطريق.',
    bestFor: ['city-trips','long-trips'],
    services: ['flexible-pickup'],
    status: 'available',
    availability: {
      morocco: { available: true, price: 400, currency: 'MAD' }
    },
  }
];

const TRANSLATIONS = {
  en: {
    home:'Home', cars:'Cars', howItWorks:'How It Works',
    about:'About', contact:'Contact', findMyCar:'FIND MY CAR', heroTitle:'FIND YOUR PERFECT RIDE',
    heroSubtitle:'Premium car rental, wherever you go.', explore:'Explore',
    viewCar:'View Car', askOnWhatsApp:'Ask on WhatsApp', startingFrom:'Starting from',
    perDay:'/ Day', contactForPrice:'Contact for Price', requestAvailability:'Request Availability',
    realVehicle:'Real Vehicle', representativeImage:'Representative Image',
    seats:'Seats', bags:'Bags', transmission:'Transmission', fuel:'Fuel',
    fuelPetrol:'Petrol', fuelDiesel:'Diesel', fuelElectric:'Electric', fuelHybrid:'Hybrid',
    airConditioning:'Air Conditioning', automatic:'Automatic', manual:'Manual',
    bestFor:'BEST FOR', vehicleSpecifications:'VEHICLE SPECIFICATIONS',
    doors:'Doors', vehicleType:'Vehicle Type', modelYear:'Model Year',
    makeYourTripEasier:'MAKE YOUR TRIP EASIER', bookingRequest:'Booking Request',
    payWhenYouReceive:'PAY WHEN YOU RECEIVE YOUR CAR', noOnlinePayment:'No online payment required.',
    whyMashary:'WHY Mashary Cars', realVehicles:'Real Vehicles', flexiblePickup:'Flexible Pickup',
    whatsappSupport:'WhatsApp Support', payOnDelivery:'Pay on Delivery', multipleDestinations:'Multiple Destinations',
    howMasharyWorks:'HOW Mashary Cars WORKS', step1:'Choose Your Car', step2:'Tell Us Your Trip Details',
    step3:'Send Your Request', step4:'Confirm via WhatsApp', step5:'Pick Up Your Car',
    step6:'Pay When You Receive It', faq:'FREQUENTLY ASKED QUESTIONS',
    yourRequestIsReady:'YOUR REQUEST IS READY', continueOnWhatsApp:'Continue on WhatsApp to confirm your booking.',
    openWhatsApp:'OPEN WHATSAPP', noCarsFound:'NO CARS FOUND',
    tryChangingFilters:'Try changing your filters or tell us what you need.',
    askMasharyOnWhatsApp:'ASK Mashary Cars ON WHATSAPP', allRightsReserved:'All rights reserved.',
    premiumCarRental:'Premium Car Rental', locations:'Locations', comingSoon:'Coming Soon',
    economy:'Economy', sedan:'Sedan', suv:'SUV', family:'Family', luxury:'Luxury', 'van-bus':'Van & Bus',
    selectCountry:'Select Country', yourCountry:'Your Country', whereAreYouGoing:'WHERE ARE YOU GOING?',
    whatDoYouNeed:'WHAT DO YOU NEED?', notSureWhatToGet:'NOT SURE WHAT TO GET?',
    tellUsWhatYouNeed:"Tell us what you need and we'll help you choose.",
    share:'Share', linkCopied:'Link copied!', available:'Available', comingSoonMessage:'Service in this country is coming soon. Stay tuned.', search:'Search', reset:'Reset', allCountries:'All Countries', allAvailability:'All Availability', bookThisCar:'Book This Car', availabilityRequest:'Availability request', showingCarsIn:'Showing cars in', changeLocation:'Change location', clear:'Clear', datePickupPast:'Pickup date cannot be in the past.', returnDateBeforePickup:'Return date must be after pickup date.', returnTimeBeforePickup:'Return time must be after pickup time when using the same day.', requiredFields:'Please complete all required fields.'
  },
  ar: {
    home:'الرئيسية', cars:'السيارات', howItWorks:'كيف تعمل',
    about:'من نحن', contact:'تواصل', findMyCar:'اعثر على سيارتي', heroTitle:'اعثر على سيارتك المثالية',
    heroSubtitle:'تأجير سيارات فاخر، أينما ذهبت.', explore:'استكشف',
    viewCar:'عرض السيارة', askOnWhatsApp:'اسأل على واتساب', startingFrom:'يبدأ من',
    perDay:'/ يوم', contactForPrice:'تواصل للسعر', requestAvailability:'اطلب التوفر',
    realVehicle:'سيارة حقيقية', representativeImage:'صورة تمثيلية',
    seats:'مقاعد', bags:'أمتعة', transmission:'ناقل الحركة', fuel:'الوقود',
    fuelPetrol:'بنزين', fuelDiesel:'ديزل', fuelElectric:'كهربائية', fuelHybrid:'هجينة',
    airConditioning:'تكييف', automatic:'أوتوماتيك', manual:'يدوي',
    bestFor:'الأفضل لـ', vehicleSpecifications:'مواصفات المركبة',
    doors:'أبواب', vehicleType:'نوع المركبة', modelYear:'سنة الموديل',
    makeYourTripEasier:'اجعل رحلتك أسهل', bookingRequest:'طلب حجز',
    payWhenYouReceive:'ادفع عند استلام سيارتك', noOnlinePayment:'لا يوجد دفع إلكتروني مطلوب.',
    whyMashary:'لماذا Mashary Cars', realVehicles:'سيارات حقيقية', flexiblePickup:'استلام مرن',
    whatsappSupport:'دعم واتساب', payOnDelivery:'الدفع عند الاستلام', multipleDestinations:'وجهات متعددة',
    howMasharyWorks:'كيف تعمل Mashary Cars', step1:'اختر سيارتك', step2:'أخبرنا بتفاصيل رحلتك',
    step3:'أرسل طلبك', step4:'تأكد عبر واتساب', step5:'استلم سيارتك',
    step6:'ادفع عند الاستلام', faq:'الأسئلة الشائعة',
    yourRequestIsReady:'طلبك جاهز', continueOnWhatsApp:'استمر على واتساب لتأكيد حجزك.',
    openWhatsApp:'افتح واتساب', noCarsFound:'لم يتم العثور على سيارات',
    tryChangingFilters:'حاول تغيير الفلاتر أو أخبرنا بما تحتاج.',
    askMasharyOnWhatsApp:'اسأل Mashary Cars على واتساب', allRightsReserved:'جميع الحقوق محفوظة.',
    premiumCarRental:'تأجير سيارات فاخر', locations:'المواقع', comingSoon:'قريبًا',
    economy:'اقتصادية', sedan:'سيدان', suv:'دفع رباعي', family:'عائلية', luxury:'فاخرة', 'van-bus':'فان وحافلة',
    selectCountry:'اختر الدولة', yourCountry:'دولتك', whereAreYouGoing:'إلى أين تذهب؟',
    whatDoYouNeed:'ماذا تحتاج؟', notSureWhatToGet:'غير متأكد ماذا تختار؟',
    tellUsWhatYouNeed:'أخبرنا بما تحتاج وسنساعدك في الاختيار.',
    share:'مشاركة', linkCopied:'تم نسخ الرابط!', available:'متاحة', comingSoonMessage:'الخدمة في هذه الدولة قادمة قريبًا. ترقبوا الجديد.', search:'بحث', reset:'إعادة ضبط', allCountries:'كل الدول', allAvailability:'كل حالات التوفر', bookThisCar:'احجز السيارة', availabilityRequest:'طلب التحقق من التوفر', showingCarsIn:'عرض السيارات في', changeLocation:'تغيير الموقع', clear:'مسح', datePickupPast:'لا يمكن أن يكون تاريخ الاستلام في الماضي.', returnDateBeforePickup:'يجب أن يكون تاريخ التسليم بعد تاريخ الاستلام.', returnTimeBeforePickup:'يجب أن يكون وقت التسليم بعد وقت الاستلام في نفس اليوم.', requiredFields:'يرجى إكمال جميع الحقول المطلوبة.'
  },
  fr: {
    home:'Accueil', cars:'Voitures', howItWorks:'Comment ça marche',
    about:'À propos', contact:'Contact', findMyCar:'TROUVER MA VOITURE', heroTitle:'TROUVEZ LA VOITURE PARFAITE',
    heroSubtitle:'Location de voitures premium, où que vous alliez.', explore:'Explorer',
    viewCar:'Voir la voiture', askOnWhatsApp:'Demander sur WhatsApp', startingFrom:'À partir de',
    perDay:'/ Jour', contactForPrice:'Contacter pour le prix', requestAvailability:'Demander la disponibilité',
    realVehicle:'Véhicule réel', representativeImage:'Image représentative',
    seats:'Places', bags:'Bagages', transmission:'Transmission', fuel:'Carburant',
    fuelPetrol:'Essence', fuelDiesel:'Diesel', fuelElectric:'Électrique', fuelHybrid:'Hybride',
    airConditioning:'Climatisation', automatic:'Automatique', manual:'Manuelle',
    bestFor:'IDÉALE POUR', vehicleSpecifications:'CARACTÉRISTIQUES DU VÉHICULE',
    doors:'Portes', vehicleType:'Type de véhicule', modelYear:'Année du modèle',
    makeYourTripEasier:'FACILITEZ VOTRE VOYAGE', bookingRequest:'Demande de réservation',
    payWhenYouReceive:'PAYEZ À LA RÉCEPTION DE VOTRE VOITURE', noOnlinePayment:'Aucun paiement en ligne requis.',
    whyMashary:'POURQUOI Mashary Cars', realVehicles:'Véhicules réels', flexiblePickup:'Prise en charge flexible',
    whatsappSupport:'Support WhatsApp', payOnDelivery:'Paiement à la livraison', multipleDestinations:'Destinations multiples',
    howMasharyWorks:'COMMENT FONCTIONNE Mashary Cars', step1:'Choisissez votre voiture', step2:'Indiquez-nous les détails de votre voyage',
    step3:'Envoyez votre demande', step4:'Confirmez via WhatsApp', step5:'Récupérez votre voiture',
    step6:'Payez à la réception', faq:'QUESTIONS FRÉQUENTES',
    yourRequestIsReady:'VOTRE DEMANDE EST PRÊTE', continueOnWhatsApp:'Continuez sur WhatsApp pour confirmer votre réservation.',
    openWhatsApp:'OUVRIR WHATSAPP', noCarsFound:'AUCUNE VOITURE TROUVÉE',
    tryChangingFilters:'Essayez de modifier vos filtres ou dites-nous ce dont vous avez besoin.',
    askMasharyOnWhatsApp:'CONTACTER Mashary Cars SUR WHATSAPP', allRightsReserved:'Tous droits réservés.',
    premiumCarRental:'Location de voitures premium', locations:'Emplacements', comingSoon:'Bientôt disponible',
    economy:'Économique', sedan:'Berline', suv:'SUV', family:'Familiale', luxury:'Luxe', 'van-bus':'Van et bus',
    selectCountry:'Sélectionner le pays', yourCountry:'Votre pays', whereAreYouGoing:'OÙ ALLEZ-VOUS ?',
    whatDoYouNeed:'DE QUOI AVEZ-VOUS BESOIN ?', notSureWhatToGet:'VOUS NE SAVEZ PAS QUOI CHOISIR ?',
    tellUsWhatYouNeed:"Dites-nous ce dont vous avez besoin et nous vous aiderons à choisir.",
    share:'Partager', linkCopied:'Lien copié !', available:'Disponible', comingSoonMessage:'Le service aux Émirats arrive bientôt. Restez à l\'écoute.', search:'Rechercher', reset:'Réinitialiser', allCountries:'Tous les pays', allAvailability:'Toutes les disponibilités', bookThisCar:'Réserver cette voiture', availabilityRequest:'Demande de disponibilité', showingCarsIn:'Voitures affichées à', changeLocation:'Changer de lieu', clear:'Effacer', datePickupPast:'La date de prise en charge ne peut pas être dans le passé.', returnDateBeforePickup:'La date de retour doit être postérieure à la date de prise en charge.', returnTimeBeforePickup:"L'heure de retour doit être postérieure à l'heure de prise en charge le même jour.", requiredFields:'Veuillez remplir tous les champs obligatoires.'
  }
};

// ============================================
// STATE
// ============================================
let currentLang = localStorage.getItem('mashary-lang') || 'en';
let currentTheme = localStorage.getItem('mashary-theme') || 'dark';

// ============================================
// UTILITIES
// ============================================
function t(key) {
  return TRANSLATIONS[currentLang][key] || key;
}

function getCar(slug) {
  return CARS.find(c => c.slug === slug);
}

function getCountry(id) {
  return COUNTRIES.find(c => c.id === id);
}

function getWhatsAppNumber(countryId) {
  return (CONTACTS[countryId] && CONTACTS[countryId].whatsapp) || CONTACTS.egypt.whatsapp;
}

function getCarAvailability(car, countryId) {
  if (!car || !countryId) return null;
  if (car.availability && car.availability[countryId]) return car.availability[countryId];
  if (!car.countryIds.includes(countryId)) return null;
  return null;
}

function isCarAvailableInCountry(car, countryId) {
  const a = getCarAvailability(car, countryId);
  return !!(a && a.available);
}

function isCarServiceableInCountry(car, countryId) {
  const country = getCountry(countryId);
  return !!(country && country.available && car && car.countryIds.includes(countryId));
}

function getCarPriceData(car, countryId) {
  const a = getCarAvailability(car, countryId);
  return a && a.available && a.price ? a : null;
}

function getCarCountryId(car) {
  return car && car.countryIds && car.countryIds.length ? car.countryIds[0] : '';
}

function getCountryName(countryId) {
  const c = getCountry(countryId);
  if (!c) return '';
  return currentLang === 'ar' ? c.nameAr : c.name;
}

function formatPrice(price, currency) {
  if (!price) return t('contactForPrice');
  return currency + ' ' + price.toLocaleString();
}

function getCategoryLabel(cat) {
  const map = { economy:t('economy'), sedan:t('sedan'), suv:t('suv'), family:t('family'), luxury:t('luxury'), 'van-bus':t('van-bus') };
  return map[cat] || cat;
}

function getFuelLabel(fuel) {
  const map = { petrol:t('fuelPetrol'), diesel:t('fuelDiesel'), electric:t('fuelElectric'), hybrid:t('fuelHybrid') };
  return map[fuel] || fuel;
}

function getBestForLabel(tag) {
  const map = { 'city-trips':'City Trips', family:'Family', business:'Business', 'long-trips':'Long Trips', luxury:'Luxury' };
  return map[tag] || tag;
}

// ============================================
// WHATSAPP
// ============================================
function buildWhatsAppMessage(opts) {
  let msg = 'Hello Mashary Cars,\n\nI would like to request a car rental.\n\n';
  if (opts.car) msg += 'Car:\n' + opts.car + '\n\n';
  if (opts.country) msg += 'Country:\n' + opts.country + '\n\n';
  if (opts.pickupDate) msg += 'Pickup:\n' + opts.pickupDate + (opts.pickupTime ? ' ' + opts.pickupTime : '') + '\n\n';
  if (opts.pickupLocation) msg += 'Pickup Location:\n' + opts.pickupLocation + '\n\n';
  if (opts.dropoffDate) msg += 'Drop-off:\n' + opts.dropoffDate + (opts.dropoffTime ? ' ' + opts.dropoffTime : '') + '\n\n';
  if (opts.passengers) msg += 'Passengers:\n' + opts.passengers + '\n\n';
  if (opts.bags) msg += 'Bags:\n' + opts.bags + '\n\n';
  if (opts.services && opts.services.length) msg += 'Services:\n' + opts.services.join(', ') + '\n\n';
  if (opts.name) msg += 'Name:\n' + opts.name + '\n\n';
  if (opts.phone) msg += 'WhatsApp:\n' + opts.phone + '\n\n';
  if (opts.notes) msg += 'Notes:\n' + opts.notes + '\n\n';
  if (opts.flight) {
    msg += 'Flight Details:\n';
    msg += 'Airline: ' + opts.flight.airline + '\n';
    msg += 'Flight: ' + opts.flight.flightNumber + '\n';
    msg += 'Arrival: ' + opts.flight.arrivalDate + ' ' + opts.flight.arrivalTime + '\n\n';
  }
  msg += 'Please confirm availability and booking details.';
  return msg;
}

function openWhatsApp(phone, message) {
  const url = 'https://wa.me/' + phone.replace(/\+/g,'') + '?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ============================================
// THEME & LANGUAGE
// ============================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('mashary-theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.innerHTML = currentTheme === 'dark'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

function initLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  // Arabic logo = logo-l.png, English/French logo = logo-r.png
  document.querySelectorAll('[data-language-logo="true"]').forEach(function(img) {
    img.src = currentLang === 'ar' ? 'logo-l.png' : 'logo-r.png';
  });

  applyTranslations();
}

function applyTranslations() {
  var attr = currentLang === 'ar' ? 'data-ar' : (currentLang === 'fr' ? 'data-fr' : 'data-en');
  document.querySelectorAll('[data-en]').forEach(function(el) {
    var val = el.getAttribute(attr);
    if (val !== null) el.textContent = val;
  });
}

const LANGUAGES = [
  { code: 'en', label: 'English',  native: 'English',  badge: 'EN' },
  { code: 'ar', label: 'Arabic',   native: 'العربية', badge: 'ع' },
  { code: 'fr', label: 'French',   native: 'Français', badge: 'FR' }
];

function getLangMeta(code) {
  return LANGUAGES.find(function(l){ return l.code === code; }) || LANGUAGES[0];
}

function setLanguage(code) {
  if (code === currentLang) { closeLangMenus(); return; }
  currentLang = code;
  localStorage.setItem('mashary-lang', currentLang);
  initLanguage();
  // Reload to apply translations
  window.location.reload();
}

// Backwards-compatible: cycles EN -> AR -> FR -> EN
function toggleLanguage() {
  const idx = LANGUAGES.findIndex(function(l){ return l.code === currentLang; });
  const next = LANGUAGES[(idx + 1) % LANGUAGES.length];
  setLanguage(next.code);
}

function closeLangMenus() {
  document.querySelectorAll('.lang-dropdown.open').forEach(function(el){
    el.classList.remove('open');
    var trigger = el.querySelector('.lang-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

function buildLangMenuHTML(idPrefix) {
  var current = getLangMeta(currentLang);
  var items = LANGUAGES.map(function(l) {
    var active = l.code === currentLang;
    return '<button type="button" class="lang-option' + (active ? ' active' : '') + '" data-lang="' + l.code + '" role="option" aria-selected="' + active + '">' +
      '<span class="lang-option-badge">' + l.badge + '</span>' +
      '<span class="lang-option-text"><span class="lang-option-native">' + l.native + '</span><span class="lang-option-label">' + l.label + '</span></span>' +
      (active ? '<svg class="lang-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' : '') +
      '</button>';
  }).join('');
  return '<button type="button" class="lang-trigger" id="' + idPrefix + '-trigger" aria-haspopup="listbox" aria-expanded="false">' +
      '<span class="lang-trigger-badge">' + current.badge + '</span>' +
      '<span class="lang-trigger-label">' + current.native + '</span>' +
      '<svg class="lang-trigger-caret" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>' +
    '</button>' +
    '<div class="lang-menu" role="listbox">' + items + '</div>';
}

function initLangDropdowns() {
  document.querySelectorAll('.lang-dropdown').forEach(function(el, i) {
    var idPrefix = el.getAttribute('data-id') || ('lang-dd-' + i);
    el.innerHTML = buildLangMenuHTML(idPrefix);
    var trigger = el.querySelector('.lang-trigger');
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      var isOpen = el.classList.contains('open');
      closeLangMenus();
      if (!isOpen) {
        el.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
    el.querySelectorAll('.lang-option').forEach(function(opt) {
      opt.addEventListener('click', function(e) {
        e.stopPropagation();
        setLanguage(opt.getAttribute('data-lang'));
      });
    });
  });
  document.addEventListener('click', closeLangMenus);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLangMenus();
  });
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const button = document.getElementById('mobile-toggle');
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  document.documentElement.classList.toggle('mobile-nav-open', isOpen);
  document.body.classList.toggle('mobile-nav-open', isOpen);
  if (button) {
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    button.classList.toggle('active', isOpen);
  }
}

// ============================================
// CAR CARD HTML
// ============================================
function carCardHTML(car) {
  const selectedCountry = getCarCountryId(car);
  const availability = getCarAvailability(car, selectedCountry);
  const priceData = getCarPriceData(car, selectedCountry);
  const priceHtml = priceData
    ? `<div class="car-card-price">
         <span class="from">${t('startingFrom')}</span>
         <span class="amount">${formatPrice(priceData.price, priceData.currency)}</span>
         <span class="period">${t('perDay')}</span>
       </div>`
    : `<div class="car-card-price"><span class="amount" style="font-size:0.95rem;">${t('contactForPrice')}</span></div>`;

  const isAvailableNow = car.status === 'available' && availability && availability.available;
  const actionHtml = isAvailableNow
    ? `<a href="booking.html?slug=${encodeURIComponent(car.slug)}" class="btn-primary" style="flex:1;justify-content:center;">${t('bookThisCar')}</a>`
    : `<a href="booking.html?slug=${encodeURIComponent(car.slug)}&request=1" class="btn-primary" style="flex:1;justify-content:center;">${t('requestAvailability')}</a>`;
  const transmissionLabel = car.transmission === 'automatic' ? t('automatic') : t('manual');
  const fuelLabel = car.fuel ? getFuelLabel(car.fuel) : '';
  const shortDesc = currentLang === 'ar' && car.descAr ? car.descAr : car.desc;

  const specIcons = {
    seats: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    doors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    year: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    fuel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
    transmission: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  };
  // Year is left out here on purpose — it's already in the card title
  // (e.g. "Hyundai Tucson 2024"), so repeating it just added noise.
  const specItems = [
    car.seats ? { icon: specIcons.seats, value: car.seats } : null,
    car.doors ? { icon: specIcons.doors, value: car.doors } : null,
    fuelLabel ? { icon: specIcons.fuel, value: fuelLabel } : null,
    { icon: specIcons.transmission, value: transmissionLabel },
  ].filter(Boolean);
  const specRowHtml = specItems.length
    ? `<div class="car-card-specs">${specItems
        .map(s => `<span class="car-card-spec">${s.icon}${s.value}</span>`)
        .join('')}</div>`
    : '';

  // Little "N photos" badge on the image — the whole image is already
  // clickable to open the gallery, but nothing said so; this badge is
  // the visual hint that there's more to see behind it.
  const photoCount = car.images ? car.images.length : 0;
  const galleryBadgeHtml = photoCount > 1
    ? `<span class="car-card-gallery-badge">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
         ${photoCount}
       </span>`
    : '';

  return `
    <div class="card car-card">
      <button type="button" class="car-card-img" onclick="openCarGallery('${car.slug}')" aria-label="${car.name}">
        <img src="${car.images[0]}" alt="${car.name}" loading="lazy">
        <span class="car-card-pill">${getCategoryLabel(car.category)}</span>
        ${galleryBadgeHtml}
        <div class="car-card-caption">
          <span class="car-card-caption-name">${car.name}</span>
        </div>
      </button>
      <div class="car-card-body">
        ${shortDesc ? `<p class="car-card-desc">${shortDesc}</p>` : ''}
        ${specRowHtml}
        <div class="car-card-meta-row">
          ${priceHtml}
        </div>
        <div class="car-actions">
          ${actionHtml}
        </div>
      </div>
    </div>
  `;
}

// ============================================
// CAR IMAGE GALLERY MODAL
// Clicking a car card's image opens all of that car's photos
// right on the same page, instead of navigating to another page.
// ============================================
var carGalleryState = { images: [], index: 0 };

function ensureCarGalleryModal() {
  if (document.getElementById('carGalleryModal')) return;
  var modal = document.createElement('div');
  modal.id = 'carGalleryModal';
  modal.className = 'gallery-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML =
    '<div class="gallery-modal-backdrop"></div>' +
    '<div class="gallery-modal-content">' +
      '<button type="button" class="gallery-modal-close" aria-label="Close">&times;</button>' +
      '<h3 class="gallery-modal-title" id="carGalleryTitle"></h3>' +
      '<div class="gallery-main"><img id="carGalleryMainImg" src="" alt=""></div>' +
      '<div class="gallery-thumbs" id="carGalleryThumbs"></div>' +
    '</div>';
  document.body.appendChild(modal);
  modal.querySelector('.gallery-modal-backdrop').addEventListener('click', closeCarGallery);
  modal.querySelector('.gallery-modal-close').addEventListener('click', closeCarGallery);
}

function openCarGallery(slug) {
  var car = getCar(slug);
  if (!car || !car.images || !car.images.length) return;
  ensureCarGalleryModal();
  carGalleryState.images = car.images;
  carGalleryState.index = 0;

  var modal = document.getElementById('carGalleryModal');
  modal.querySelector('#carGalleryTitle').textContent = car.name;
  modal.querySelector('#carGalleryThumbs').innerHTML = car.images
    .map(function (img, i) {
      return '<div class="gallery-thumb' + (i === 0 ? ' active' : '') +
        '" onclick="setCarGalleryImage(' + i + ')"><img src="' + img + '" alt="' + car.name + '"></div>';
    })
    .join('');
  setCarGalleryImage(0);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('gallery-modal-open');
  document.addEventListener('keydown', handleCarGalleryKeydown);
}

function setCarGalleryImage(index) {
  carGalleryState.index = index;
  var modal = document.getElementById('carGalleryModal');
  if (!modal) return;
  modal.querySelector('#carGalleryMainImg').src = carGalleryState.images[index];
  modal.querySelectorAll('.gallery-thumb').forEach(function (thumb, i) {
    thumb.classList.toggle('active', i === index);
  });
}

function closeCarGallery() {
  var modal = document.getElementById('carGalleryModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('gallery-modal-open');
  document.removeEventListener('keydown', handleCarGalleryKeydown);
}

function handleCarGalleryKeydown(e) {
  if (e.key === 'Escape') closeCarGallery();
}

// ============================================
// RENDER CARS
// ============================================
function renderCars(containerId, carsToRender) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!carsToRender.length) {
    const selectedCountry = (typeof currentCountry !== 'undefined' && currentCountry) ? getCountry(currentCountry) : null;
    const emptyTitle = selectedCountry && selectedCountry.comingSoon ? selectedCountry.name + ' — ' + t('comingSoon') : t('noCarsFound');
    const emptyText = selectedCountry && selectedCountry.comingSoon ? t('comingSoonMessage') : t('tryChangingFilters');
    const phone = selectedCountry ? getWhatsAppNumber(selectedCountry.id) : getWhatsAppNumber('egypt');
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <h3>${emptyTitle}</h3>
        <p style="color:var(--text-secondary);margin-bottom:1.5rem;">${emptyText}</p>
        ${selectedCountry && selectedCountry.comingSoon ? '' : '<a href="https://wa.me/' + phone.replace(/\+/g,'') + '" target="_blank" class="btn-primary">' + t('askMasharyOnWhatsApp') + '</a>'}
      </div>`;
    refreshCarCarousel(containerId);
    return;
  }
  container.innerHTML = carsToRender.map(car => carCardHTML(car)).join('');
  refreshCarCarousel(containerId);
}

// ============================================
// CAR CAROUSEL
// Cars sit side by side in a horizontal, swipe/drag-able strip with two
// arrows to flip through them, but ONLY when there are more cars than
// fit in a single row at the current viewport. Otherwise the grid stays
// a plain wrapping grid — a 2- or 3-car result just lays out as a normal
// row instead of being forced into a scroller with dead space around it.
// ============================================

// How many full cards fit in one row at the wrap's current width —
// kept in sync with the --carousel-card-frac breakpoints in CSS
// (1100px -> 3 columns, 768px -> 2 columns, below that -> 1).
function getCarsPerRow(wrap) {
  const w = wrap.clientWidth;
  if (w >= 1100) return 3;
  if (w >= 768) return 2;
  return 1;
}

function refreshCarCarousel(containerId) {
  const track = document.getElementById(containerId);
  const wrap = track && track.closest('.car-carousel-wrap');
  if (!track || !wrap) return;
  const cardCount = track.querySelectorAll('.car-card').length;
  const isCarousel = cardCount > getCarsPerRow(wrap);
  track.classList.toggle('is-carousel', isCarousel);
  wrap.classList.toggle('has-carousel', isCarousel);
  track.scrollLeft = 0;
  updateCarouselArrows(wrap);
}

function updateCarouselArrows(wrap) {
  const track = wrap.querySelector('.car-grid');
  const prev = wrap.querySelector('.car-carousel-arrow.prev');
  const next = wrap.querySelector('.car-carousel-arrow.next');
  if (!track || !prev || !next) return;
  // The carousel loops (wraps around at both ends), so the arrows stay
  // active whenever there is more than one screen's worth of cars.
  const canLoop = track.classList.contains('is-carousel') && (track.scrollWidth - track.clientWidth) > 1;
  prev.disabled = !canLoop;
  next.disabled = !canLoop;
}

function scrollCarCarousel(wrap, direction) {
  const track = wrap.querySelector('.car-grid');
  if (!track) return;
  const isRTL = getComputedStyle(document.documentElement).direction === 'rtl';
  const firstCard = track.querySelector('.car-card');
  const step = firstCard ? firstCard.getBoundingClientRect().width + 24 : track.clientWidth * 0.8;
  const maxScroll = track.scrollWidth - track.clientWidth;
  const currentPos = isRTL ? -track.scrollLeft : track.scrollLeft;
  const nearEnd = currentPos >= maxScroll - (step / 2);
  const nearStart = currentPos <= step / 2;

  // Loop back to the opposite edge instead of stopping, so the carousel
  // keeps cycling through the cars ("تلف وترجع") in either direction.
  if (direction > 0 && nearEnd) {
    track.scrollTo({ left: isRTL ? 0 : 0, behavior: 'smooth' });
    return;
  }
  if (direction < 0 && nearStart) {
    track.scrollTo({ left: isRTL ? -maxScroll : maxScroll, behavior: 'smooth' });
    return;
  }
  track.scrollBy({ left: (isRTL ? -1 : 1) * direction * step, behavior: 'smooth' });
}

function initCarCarousels() {
  document.querySelectorAll('.car-carousel-wrap').forEach(function (wrap) {
    const track = wrap.querySelector('.car-grid');
    const prev = wrap.querySelector('.car-carousel-arrow.prev');
    const next = wrap.querySelector('.car-carousel-arrow.next');
    if (!track) return;

    if (prev) prev.addEventListener('click', function () { scrollCarCarousel(wrap, -1); });
    if (next) next.addEventListener('click', function () { scrollCarCarousel(wrap, 1); });
    track.addEventListener('scroll', function () { updateCarouselArrows(wrap); }, { passive: true });
    // Re-check carousel-vs-grid mode on resize too, not just the arrows'
    // enabled state — crossing a column breakpoint (e.g. 3 cols -> 2)
    // can turn a result that fit in one row into one that needs to
    // scroll, or vice versa.
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { refreshCarCarousel(track.id); }, 120);
    });

    // Mouse-drag support on desktop (touch swipe already works natively via overflow-x).
    let isDown = false, startX = 0, startScroll = 0, dragged = false;
    track.addEventListener('mousedown', function (e) {
      if (!track.classList.contains('is-carousel')) return;
      isDown = true;
      dragged = false;
      startX = e.pageX;
      startScroll = track.scrollLeft;
      track.classList.add('is-dragging');
    });
    window.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) dragged = true;
      track.scrollLeft = startScroll - dx;
    });
    window.addEventListener('mouseup', function () {
      if (!isDown) return;
      isDown = false;
      track.classList.remove('is-dragging');
    });
    // Swallow the click that follows a real drag so it doesn't trigger card links.
    track.addEventListener('click', function (e) {
      if (dragged) { e.preventDefault(); e.stopPropagation(); dragged = false; }
    }, true);
  });
}

// ============================================
// FILTER CARS
// ============================================
function filterCars(query, category, countryId, availabilityStatus) {
  // Search only the car's actual identity (name / brand / model).
  // Do not search category, services, or "best for" tags because those can
  // make unrelated cars appear when the user is simply looking for a name.
  const tokens = (query || '')
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return CARS.filter(car => {
    const inCountry = !countryId || isCarServiceableInCountry(car, countryId);
    if (!inCountry) return false;

    if (category && car.category !== category) return false;

    const available = countryId ? isCarAvailableInCountry(car, countryId) : car.status === 'available';
    if (availabilityStatus === 'available' && !available) return false;
    if (availabilityStatus === 'request' && (available || car.status !== 'request-availability')) return false;

    if (tokens.length) {
      const haystack = [car.name, car.brand, car.model]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      // Every word typed by the user must exist in the car identity.
      // This prevents broad/partial matches from returning unrelated cars.
      if (!tokens.every(token => haystack.includes(token))) return false;
    }

    return true;
  });
}

// ============================================
// SHARE
// ============================================
function sharePage(title) {
  if (navigator.share) {
    navigator.share({ title: title, url: window.location.href }).catch(()=>{});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast(t('linkCopied'));
  }
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>${msg}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initLanguage();
  updateThemeIcon();
  initLangDropdowns();
  initCarCarousels();

  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Mobile menu
  const mobileToggle = document.getElementById('mobile-toggle');
  if (mobileToggle) mobileToggle.addEventListener('click', toggleMobileMenu);
  document.querySelectorAll('#mobile-menu .nav-link').forEach(function(link){
    link.addEventListener('click', function(){
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('mobile-toggle');
      if (menu) menu.classList.remove('open');
      if (button) {
        button.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Open navigation');
      }
      document.documentElement.classList.remove('mobile-nav-open');
      document.body.classList.remove('mobile-nav-open');
    });
  });

  // Mobile theme toggle
  const themeBtnMobile = document.getElementById('theme-toggle-mobile');
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);
});

// ============================================
// LIGHTWEIGHT SCROLL REVEAL ANIMATIONS
// ============================================
(function(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll('section:not(.hero):not(.cars-showcase-section), .why-card-animated, .car-card, .step-card, .faq-item, .country-card');
  if (!targets.length) return;

  targets.forEach(function(el){
    el.classList.add('site-reveal');
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }

  const observer = new IntersectionObserver(function(entries, obs){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function(el){ observer.observe(el); });
})();

// ============================================================
// PREMIUM HEADER CAR FLIGHT — LOGO-SYNCED, DIRECTION-AWARE
// The car's start/end point is measured live from the logo's
// real position, so it lines up with the logo whether the logo
// sits on the left (English/French) or the right (Arabic/RTL).
// The sprite is mirrored (via --car-face in CSS) so it always
// drives nose-first, instead of only looking correct in one
// direction.
// ============================================================
(function initHeaderCarFlight() {
  const IMAGE_CANDIDATES = [
    'car.png',
    'car.webp',
    'car.jpg',
    'car.jpeg'
  ];

  function findCarImage() {
    return new Promise(function(resolve) {
      let index = 0;

      function tryNext() {
        if (index >= IMAGE_CANDIDATES.length) {
          resolve(null);
          return;
        }

        const candidate = IMAGE_CANDIDATES[index++];
        const img = new Image();

        img.onload = function() {
          resolve(candidate);
        };

        img.onerror = tryNext;
        img.src = candidate;
      }

      tryNext();
    });
  }

  // Measures the logo's real on-screen edge and stores it as a
  // CSS custom property (--car-anchor) on the header, expressed
  // as a logical "distance from the inline-start edge" so it
  // works the same whether the logo is physically on the left
  // (LTR) or the right (RTL).
  function updateAnchor(header, logo) {
    if (!header || !logo) return;

    const isRTL = getComputedStyle(document.documentElement).direction === 'rtl';
    const headerRect = header.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();

    let anchor = isRTL
      ? headerRect.right - logoRect.left   // far edge of the logo, RTL
      : logoRect.right - headerRect.left;  // far edge of the logo, LTR

    if (!isFinite(anchor) || anchor < 0) anchor = 18;

    header.style.setProperty('--car-anchor', anchor + 'px');
  }

  function createFlight(imageSrc) {
    const header = document.querySelector('.header');
    const logo = header && header.querySelector('.logo');
    if (!header || !imageSrc || document.querySelector('.header-car-flight')) return;

    const car = document.createElement('img');

    car.className = 'header-car-flight';
    car.src = imageSrc;
    car.alt = '';
    car.setAttribute('aria-hidden', 'true');
    car.decoding = 'async';
    car.draggable = false;

    header.appendChild(car);

    updateAnchor(header, logo);

    let resizeTimer = null;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        updateAnchor(header, logo);
      }, 150);
    });

    requestAnimationFrame(function() {
      car.classList.add('is-ready');
    });

    let timer = null;
    let firstRun = true;

    function fly() {
      if (document.hidden) return;

      // Re-measure right before every run, in case layout shifted
      // (font swap, language toggle, orientation change, etc.).
      updateAnchor(header, logo);

      car.classList.remove('is-flying');
      void car.offsetWidth;
      car.classList.add('is-flying');
    }

    function scheduleNext() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        fly();
        scheduleNext();
      }, firstRun ? 3200 : 14000);

      firstRun = false;
    }

    scheduleNext();

    document.addEventListener('visibilitychange', function() {
      if (!document.hidden) scheduleNext();
    });

    window.addEventListener('beforeunload', function() {
      clearTimeout(timer);
    }, { once: true });
  }

  document.addEventListener('DOMContentLoaded', function() {
    findCarImage().then(createFlight);
  });
})();
