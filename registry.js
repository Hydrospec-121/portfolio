/* ============================================================
   HYDROSPEC TOOLS — shared/registry.js
   ============================================================
   The single source of truth for every tool that exists. The
   Tools Hub, category pages, and search all read from this one
   array instead of having tool data hard-coded in three places.

   TO ADD A FUTURE TOOL: add one object to TOOL_REGISTRY below.
   Nothing else needs to change — the Hub's Popular section, the
   right category page, and search all pick it up automatically
   because they all read from this array.
   ============================================================ */

const TOOL_REGISTRY = [
  {
    name: "Percentage Calculator",
    slug: "percentage-calculator",
    category: "calculators",
    description: "Find a percentage of a number, reverse it, or calculate percentage increase/decrease.",
    url: "/tools/calculators/percentage-calculator/",
    keywords: ["percentage", "percent", "calculator", "increase", "decrease", "math"],
    popular: true
  },
  {
    name: "Word Counter",
    slug: "word-counter",
    category: "text",
    description: "Real-time word, character, sentence, and paragraph counts as you type.",
    url: "/tools/text/word-counter/",
    keywords: ["word count", "character count", "text", "writing", "sentence", "paragraph"],
    popular: true
  },
  {
    name: "JSON Formatter",
    slug: "json-formatter",
    category: "developer",
    description: "Format, validate, and minify JSON entirely in your browser.",
    url: "/tools/developer/json-formatter/",
    keywords: ["json", "formatter", "validator", "minify", "developer", "pretty print"],
    popular: true
  },
  {
    name: "Age Calculator",
    slug: "age-calculator",
    category: "calculators",
    description: "Calculate exact age in years, months, and days from a date of birth.",
    url: "/tools/calculators/age-calculator/",
    keywords: ["age", "birthday", "date of birth", "years", "calculator"],
    popular: false
  },
  {
    name: "GPA Calculator",
    slug: "gpa-calculator",
    category: "calculators",
    description: "Calculate your GPA from course grades and credit hours on a standard 4.0 scale.",
    url: "/tools/calculators/gpa-calculator/",
    keywords: ["gpa", "grade point average", "grades", "credits", "calculator"],
    popular: false
  },
  {
    name: "Discount Calculator",
    slug: "discount-calculator",
    category: "calculators",
    description: "Calculate discount amount and final price from an original price and percentage off.",
    url: "/tools/calculators/discount-calculator/",
    keywords: ["discount", "sale", "percent off", "price", "calculator"],
    popular: false
  },
  {
    name: "Unit Converter",
    slug: "unit-converter",
    category: "converters",
    description: "Convert between length, weight, area, volume, speed, and data units.",
    url: "/tools/converters/unit-converter/",
    keywords: ["unit", "convert", "length", "weight", "area", "volume", "speed", "data"],
    popular: false
  },
  {
    name: "Temperature Converter",
    slug: "temperature-converter",
    category: "converters",
    description: "Convert between Celsius, Fahrenheit, and Kelvin, live.",
    url: "/tools/converters/temperature-converter/",
    keywords: ["temperature", "celsius", "fahrenheit", "kelvin", "convert"],
    popular: false
  },
  {
    name: "Case Converter",
    slug: "case-converter",
    category: "text",
    description: "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, or toggled case.",
    url: "/tools/text/case-converter/",
    keywords: ["case", "uppercase", "lowercase", "title case", "sentence case", "text"],
    popular: false
  },
  {
    name: "Time Converter",
    slug: "time-converter",
    category: "converters",
    description: "Convert between seconds, minutes, hours, days, and weeks.",
    url: "/tools/converters/time-converter/",
    keywords: ["time", "seconds", "minutes", "hours", "days", "weeks", "convert"],
    popular: false
  },
  {
    name: "Character Counter",
    slug: "character-counter",
    category: "text",
    description: "Real-time character, word, sentence, and paragraph counts as you type.",
    url: "/tools/text/character-counter/",
    keywords: ["character count", "characters", "text", "writing", "count"],
    popular: false
  },
  {
    name: "Text Cleaner",
    slug: "text-cleaner",
    category: "text",
    description: "Remove extra spaces, blank lines, and duplicate lines from text.",
    url: "/tools/text/text-cleaner/",
    keywords: ["clean", "text cleaner", "whitespace", "duplicate lines", "blank lines", "trim"],
    popular: false
  },
  {
    name: "Base64 Encoder/Decoder",
    slug: "base64",
    category: "developer",
    description: "Encode text to Base64 or decode Base64 back to text, entirely in your browser.",
    url: "/tools/developer/base64/",
    keywords: ["base64", "encode", "decode", "encoding", "developer"],
    popular: false
  }
];

// Human-readable label for each category slug — used when
// rendering a tool card's category tag.
const CATEGORY_LABELS = {
  calculators: "Calculators",
  converters: "Converters",
  text: "Text Tools",
  developer: "Developer Tools",
  image: "Image Tools",
  design: "Design Tools"
};

/**
 * Builds the HTML string for one tool card. Used by the Hub's
 * Popular Tools grid, category pages, and search results —
 * one function, so every tool card looks identical everywhere.
 */
function renderToolCard(tool) {
  const categoryLabel = CATEGORY_LABELS[tool.category] || tool.category;
  return `
    <a class="tool-card" href="${tool.url}" data-name="${tool.name}" data-category="${tool.category}">
      <h3 class="tool-card-name">${tool.name}</h3>
      <p class="tool-card-desc">${tool.description}</p>
      <span class="tool-card-category">${categoryLabel.toUpperCase()}</span>
      ${tool.popular ? '<span class="tool-card-popularity">Popular</span>' : ''}
    </a>
  `;
}

/**
 * Case-insensitive search across name, category label,
 * description, and keywords. Returns a filtered array of
 * tool objects — the caller decides how to render/display them.
 */
function searchTools(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return TOOL_REGISTRY.filter((tool) => {
    const categoryLabel = (CATEGORY_LABELS[tool.category] || tool.category).toLowerCase();
    const haystack = [
      tool.name.toLowerCase(),
      categoryLabel,
      tool.description.toLowerCase(),
      ...tool.keywords.map((k) => k.toLowerCase())
    ].join(" ");
    return haystack.includes(q);
  });
}
