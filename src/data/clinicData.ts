import { ServiceItem, PricingItem, TestimonialItem, FaqItem } from '../types';

export const CLINIC_INFO = {
  name: "City Dental Clinic",
  category: "Dental Clinic",
  rating: 4.9,
  reviewCount: 14,
  leadDentist: "Dr. Moin",
  experienceYears: 16,
  phone: "+92 331 2177298",
  phoneRaw: "923312177298",
  address: "W3JV+G3G, Block 3, Gulshan-e-Iqbal, Karachi, Pakistan",
  area: "Gulshan-e-Iqbal, Block 3",
  city: "Karachi",
  plusCode: "W3JV+G3G",
  hoursText: "Open daily · Closes 10:00 PM",
  timings: "11:00 AM – 10:00 PM (Monday through Sunday)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=City+Dental+Clinic+Gulshan+e+Iqbal+Block+3+Karachi",
  whatsappBaseUrl: "https://wa.me/923312177298"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "consultation",
    title: "Comprehensive Dental Examination & Consultation",
    shortDescription: "Detailed oral health assessment, high-resolution digital diagnosis, and clear personalized treatment planning.",
    fullDescription: "Every visit begins with an unhurried, gentle clinical assessment by Dr. Moin. We inspect enamel health, gum vitality, alignment, and hidden decay, explaining our findings with absolute honesty so you never undergo unnecessary procedures.",
    duration: "20 - 30 mins",
    recommendedFor: "Routine checkups, second opinions, tooth discomfort, and new patients.",
    approxRate: "PKR 800 – 1,000 (Adjusted with procedure)",
    category: "general",
    highlights: [
      "Visual & physical oral tissue inspection",
      "Early cavity & gingivitis detection",
      "Honest treatment roadmap with transparent fees",
      "Personalized preventive oral hygiene guidance"
    ]
  },
  {
    id: "scaling",
    title: "Ultrasonic Scaling & Gentle Teeth Polishing",
    shortDescription: "Painless deep cleaning removing stubborn calculus, plaque, and surface tea or tobacco stains.",
    fullDescription: "Using micro-vibrating ultrasonic technology and soft water irrigation, Dr. Moin lifts hard tartar and subgingival deposits gently without scraping or damaging your sensitive enamel. Finished with a prophy-paste polish for a smooth, fresh smile.",
    duration: "30 - 45 mins",
    recommendedFor: "Bleeding gums, bad breath (halitosis), surface staining, and bi-annual maintenance.",
    approxRate: "PKR 2,500 – 4,000",
    category: "general",
    highlights: [
      "Non-abrasive ultrasonic tartar disruption",
      "Subgingival pocket lavage",
      "Removes tea, coffee, and nicotine discoloration",
      "Prevents periodontal gum disease"
    ]
  },
  {
    id: "fillings",
    title: "Tooth-Colored Aesthetic Composite Fillings",
    shortDescription: "Durable, shade-matched resin restorations that bond seamlessly with your natural tooth structure.",
    fullDescription: "Say goodbye to dark metal amalgam. We utilize premium biocompatible composite resins custom-tinted to your precise tooth shade. Cavity preparation is conservative, preserving maximum healthy tooth structure with smooth bite alignment.",
    duration: "30 - 40 mins per tooth",
    recommendedFor: "Decayed teeth, chipped edges, worn enamel, or replacing aged silver fillings.",
    approxRate: "PKR 2,000 – 3,500 per tooth",
    category: "restorative",
    highlights: [
      "Exact anatomical shade matching",
      "Direct chemical bonding reinforces tooth strength",
      "100% mercury-free and bio-inert",
      "Immediate chewing comfort upon completion"
    ]
  },
  {
    id: "root-canal",
    title: "Pain-Conscious Root Canal Therapy (Endodontics)",
    shortDescription: "Effective preservation for severely decayed or infected teeth, relieving pain without extraction.",
    fullDescription: "When an infection reaches the tooth pulp nerve, a root canal saves your natural tooth. Dr. Moin's gentle anesthetic technique ensures you feel virtually nothing. The canal is meticulously sterilized, shaped, and hermetically sealed to prevent recurrence.",
    duration: "45 - 60 mins (1-2 sessions)",
    recommendedFor: "Persistent throbbing toothache, sensitivity to hot/cold, abscess, or deep trauma.",
    approxRate: "PKR 6,000 – 12,000",
    category: "restorative",
    highlights: [
      "Rapid pain relief from acute nerve inflammation",
      "Advanced canal disinfection protocols",
      "Saves your natural root structure",
      "Gentle chairside pacing with zero rush"
    ]
  },
  {
    id: "extractions",
    title: "Painless Tooth Extractions & Wisdom Tooth Care",
    shortDescription: "Minimally traumatic tooth removal with advanced local anesthesia and focused post-operative care.",
    fullDescription: "Extraction is always our last resort. When non-restorable teeth or impacted third molars cause chronic infection or crowding, Dr. Moin performs gentle, atraumatic extractions designed to safeguard surrounding bone and accelerate comfortable healing.",
    duration: "25 - 45 mins",
    recommendedFor: "Severely broken non-savable teeth, impacted wisdom molars, orthodontic crowding.",
    approxRate: "PKR 1,500 – 4,500 (Impacted: PKR 6,000 - 8,000)",
    category: "surgical",
    highlights: [
      "Careful local anesthetic administration for total numbness",
      "Preservation of surrounding alveolar bone",
      "Clear, step-by-step post-care medication and instruction",
      "Direct follow-up availability via WhatsApp"
    ]
  },
  {
    id: "whitening",
    title: "Cosmetic Teeth Whitening & Smile Enhancement",
    shortDescription: "Safe, clinical-grade brightening that removes years of deep stains safely without enamel erosion.",
    fullDescription: "Restore natural brilliance to your smile. Our gentle in-clinic whitening utilizes pH-balanced formulations that break down deep intrinsic and extrinsic stains while protecting delicate dental nerves against transient sensitivity.",
    duration: "45 - 60 mins",
    recommendedFor: "Weddings, special occasions, age-related yellowing, or stubborn food stains.",
    approxRate: "PKR 10,000 – 16,000",
    category: "cosmetic",
    highlights: [
      "Up to 4-7 shades visibly brighter",
      "Gingival barrier protection prevents gum tingling",
      "Long-lasting results with simple maintenance",
      "Consultation included to evaluate enamel suitability"
    ]
  },
  {
    id: "crowns",
    title: "Dental Crowns, Bridges & Restorative Prosthetics",
    shortDescription: "Custom-fitted porcelain and zirconia restorations that restore full biting function and natural aesthetics.",
    fullDescription: "Ideal after root canals or extensive fractures. Dr. Moin creates custom crowns and bridges that match your natural teeth in translucency and contour, giving you back comfortable chewing power and confident speech.",
    duration: "2 visits (Preparation & Placement)",
    recommendedFor: "Weakened teeth after root canal, missing teeth, cracked cusps, or heavy wear.",
    approxRate: "PKR 7,500 – 15,000 per unit",
    category: "restorative",
    highlights: [
      "High-strength biocompatible zirconia or porcelain-fused materials",
      "Accurate bite alignment to prevent jaw strain",
      "Natural margins flush with your gum line",
      "Long-term structural protection"
    ]
  },
  {
    id: "pediatric",
    title: "Gentle Family & Pediatric Dental Care",
    shortDescription: "Friendly, anxiety-free dentistry for children and teens in a reassuring, welcoming environment.",
    fullDescription: "We believe a child's early dental experiences shape their lifelong oral health. Dr. Moin takes time to build trust with younger patients, offering preventive fluoride treatments, pit & fissure sealants, and gentle care without fear.",
    duration: "20 - 30 mins",
    recommendedFor: "Children from toddlerhood to teenagers, family checkups, cavity prevention.",
    approxRate: "PKR 1,000 – 2,500",
    category: "general",
    highlights: [
      "Calm, patient, friendly doctor communication",
      "Cavity-preventing fissure sealants",
      "Dietary and brushing education for parents",
      "Zero-pressure introductory visits"
    ]
  }
];

export const PRICING_LIST: PricingItem[] = [
  {
    procedure: "Initial Clinical Examination & Consultation",
    description: "Full mouth visual inspection, bite evaluation, and treatment planning with Dr. Moin.",
    approxRange: "PKR 800 – 1,000",
    category: "Diagnostics",
    popular: true
  },
  {
    procedure: "Ultrasonic Scaling & Stain Polishing",
    description: "Complete upper and lower tartar removal, prophy-paste polishing, and gum hygiene check.",
    approxRange: "PKR 2,500 – 4,000",
    category: "Preventive",
    popular: true
  },
  {
    procedure: "Composite Tooth-Colored Filling",
    description: "Per-tooth aesthetic resin restoration, shade-matched and cured with zero mercury.",
    approxRange: "PKR 2,000 – 3,500",
    category: "Restorative",
    popular: true
  },
  {
    procedure: "Painless Simple Extraction",
    description: "Atraumatic removal of non-restorable tooth with local anesthesia and wound care.",
    approxRange: "PKR 1,500 – 3,000",
    category: "Surgical"
  },
  {
    procedure: "Surgical / Wisdom Tooth Extraction",
    description: "Careful removal of impacted, tilted, or complex wisdom molars with suture care.",
    approxRange: "PKR 5,000 – 8,500",
    category: "Surgical"
  },
  {
    procedure: "Root Canal Therapy (Single Rooted)",
    description: "Incisors/premolars: complete nerve clearance, medication, shaping, and sealed obturation.",
    approxRange: "PKR 6,000 – 8,000",
    category: "Endodontics"
  },
  {
    procedure: "Root Canal Therapy (Molar / Multi-Rooted)",
    description: "Complex molar therapy with thorough 3-4 canal disinfection and biocompatible seal.",
    approxRange: "PKR 8,000 – 12,000",
    category: "Endodontics",
    popular: true
  },
  {
    procedure: "Porcelain / Zirconia Dental Crown",
    description: "Per-unit custom milled restorative crown for bite reinforcement after treatment.",
    approxRange: "PKR 8,000 – 15,000",
    category: "Prosthetics"
  },
  {
    procedure: "In-Clinic Aesthetic Teeth Whitening",
    description: "Professional enamel-safe brightening session for safe, visible stain reduction.",
    approxRange: "PKR 10,000 – 16,000",
    category: "Cosmetic"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Tariq Mahmood",
    location: "Gulshan-e-Iqbal Block 3",
    reviewDate: "Recent Google Review",
    rating: 5,
    treatment: "Root Canal & Composite Restoration",
    feedback: "Dr. Moin is exceptionally skilled and gentle. I had severe dental pain and was anxious about getting a root canal, but he made the entire procedure completely painless. Above all, his charges are genuinely economical compared to other clinics in Gulshan.",
    verified: true
  },
  {
    id: "t2",
    name: "Syeda Fatima Rizvi",
    location: "Karachi",
    reviewDate: "Verified Patient",
    rating: 5,
    treatment: "Family Scaling & Preventive Checkup",
    feedback: "Our entire family has trusted Dr. Moin for years. What sets City Dental Clinic apart is honesty — he will never push unnecessary procedures or inflate bills. A very polite, experienced gentleman who explains everything before touching a tool.",
    verified: true
  },
  {
    id: "t3",
    name: "Usman Khalid",
    location: "Near University Road",
    reviewDate: "Recent Google Review",
    rating: 5,
    treatment: "Evening Emergency Extraction",
    feedback: "I needed urgent attention late in the evening for a fractured molar. Most places in the area were either shut or asking unreasonable rates. Dr. Moin accommodated me before 10 PM, numb felt instant, and the extraction was done in 15 minutes smoothly.",
    verified: true
  },
  {
    id: "t4",
    name: "Dr. Zainab Abbasi",
    location: "Gulshan Town Resident",
    reviewDate: "Local Reviewer",
    rating: 5,
    treatment: "Teeth Cleaning & Aesthetic Fillings",
    feedback: "High standard of hygiene and sterilized instrument pouches opened right in front of you. Dr. Moin’s clinical hand is extremely steady and his rates are very affordable for families. Highly recommended to anyone looking for a reliable neighborhood dentist.",
    verified: true
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: "Do I need to book in advance or can I walk in directly?",
    answer: "Both are welcome! We welcome walk-in patients every day, especially for urgent discomfort. However, booking an appointment via our website or WhatsApp ensures minimal waiting time and guarantees Dr. Moin's dedicated time slot for your procedure.",
    category: "Appointments"
  },
  {
    question: "Is dental treatment at City Dental Clinic painful?",
    answer: "Patient comfort is Dr. Moin's highest priority. We use gentle, modern local anesthetic techniques and take time to ensure the treatment area is completely numb before starting. Many patients who previously feared the dentist praise Dr. Moin for a reassuring, pain-free experience.",
    category: "Treatment"
  },
  {
    question: "What are your exact clinic timings in Gulshan-e-Iqbal?",
    answer: "We are open daily Monday through Sunday from 11:00 AM until 10:00 PM. Our extended evening hours make it easy for working professionals, students, and families to visit after work or university without disrupting daytime commitments.",
    category: "Timings & Access"
  },
  {
    question: "Why are your rates described as economical and affordable?",
    answer: "City Dental Clinic believes quality oral healthcare is a basic community necessity, not a luxury. Dr. Moin maintains low overhead costs, avoids recommending superfluous treatments, and quotes transparent, fair rates upfront without hidden facility fees.",
    category: "Pricing"
  },
  {
    question: "How do you maintain hygiene and sterilization?",
    answer: "We adhere to strict multi-tier infection control. All non-disposable surgical instruments undergo ultrasonic cleaning, medical autoclave sterilization, and are sealed in sterile barrier pouches that are opened only in the patient's presence. Surfaces are disinfected between every single visit.",
    category: "Safety"
  },
  {
    question: "What should I do if I have an emergency toothache?",
    answer: "Contact us immediately via phone (+92 331 2177298) or WhatsApp. We prioritize acute pain cases and will guide you on immediate relief measures until you reach the clinic during our daily operating hours up to 10 PM.",
    category: "Emergencies"
  }
];
