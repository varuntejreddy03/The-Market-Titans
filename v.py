import requests
from bs4 import BeautifulSoup
import json
import time
import re

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
}

# ── URL MAPS ──────────────────────────────────────────────────────────────────

INDUSTRIES = {
    "accounting":            "https://outsourcey.com/industry/accounting/",
    "administration":        "https://outsourcey.com/industry/administration/",
    "construction":          "https://outsourcey.com/industry/construction/",
    "customer-support-sales":"https://outsourcey.com/industry/contact-center/",
    "digital-marketing":     "https://outsourcey.com/industry/creative/",
    "ecommerce-retail":      "https://outsourcey.com/industry/ecommerce/",
    "education":             "https://outsourcey.com/industry/education/",
    "engineering":           "https://outsourcey.com/industry/engineering/",
    "finance-accounting":    "https://outsourcey.com/industry/financial/",
    "healthcare":            "https://outsourcey.com/industry/healthcare/",
    "hospitality":           "https://outsourcey.com/industry/hospitality/",
    "insurance":             "https://outsourcey.com/industry/insurance/",
    "it-software-development":"https://outsourcey.com/industry/it/",
    "it-outsourcing":        "https://outsourcey.com/industry/i-t-outsourcing/",
    "legal":                 "https://outsourcey.com/industry/legal/",
    "logistics":             "https://outsourcey.com/industry/logistics/",
    "manufacturing":         "https://outsourcey.com/industry/manufacturing/",
    "marketing-development": "https://outsourcey.com/industry/marketing-development/",
    "mining":                "https://outsourcey.com/industry/mining/",
    "professional-services": "https://outsourcey.com/industry/professional-services/",
    "real-estate":           "https://outsourcey.com/industry/real-estate/",
    "startup":               "https://outsourcey.com/industry/startup/",
    "telecommunications":    "https://outsourcey.com/industry/telecommunications/",
    "tourism":               "https://outsourcey.com/industry/tourism/",
    "utilities-energy":      "https://outsourcey.com/industry/utilities/",
    "wholesale":             "https://outsourcey.com/industry/wholesale/",
}

ROLES = {
    # IT & Software Development
    "software-development":  ("IT & Software Development", "https://outsourcey.com/role/software-development/"),
    "web-development":       ("IT & Software Development", "https://outsourcey.com/role/web-development/"),
    "app-developer":         ("IT & Software Development", "https://outsourcey.com/role/mobile-application-development/"),
    "full-stack-developer":  ("IT & Software Development", "https://outsourcey.com/role/full-stack-developer/"),
    "back-end-developer":    ("IT & Software Development", "https://outsourcey.com/role/backend-developer/"),
    "front-end-development": ("IT & Software Development", "https://outsourcey.com/role/front-end-development-outsourcing/"),
    "cloud-developer":       ("IT & Software Development", "https://outsourcey.com/role/cloud-development/"),
    "shopify-developer":     ("IT & Software Development", "https://outsourcey.com/role/shopify-developer/"),
    "cyber-security":        ("IT & Software Development", "https://outsourcey.com/role/cyber-security-architect/"),
    "quality-engineer":      ("IT & Software Development", "https://outsourcey.com/role/quality-engineer/"),
    # Finance & Accounting
    "accountant":            ("Finance & Accounting", "https://outsourcey.com/role/accounting-manager/"),
    "financial-analyst":     ("Finance & Accounting", "https://outsourcey.com/role/financial-analyst/"),
    "bookkeeper":            ("Finance & Accounting", "https://outsourcey.com/role/bookkeeping/"),
    "payroll-processor":     ("Finance & Accounting", "https://outsourcey.com/role/payroll-processing/"),
    "accounts-receivable":   ("Finance & Accounting", "https://outsourcey.com/role/accounts-receivable/"),
    "accounts-payable":      ("Finance & Accounting", "https://outsourcey.com/role/accounts-payable/"),
    # Customer Support & Sales
    "customer-service":      ("Customer Support & Sales", "https://outsourcey.com/role/customer-service/"),
    "live-chat-support":     ("Customer Support & Sales", "https://outsourcey.com/role/live-chat-support/"),
    "help-desk":             ("Customer Support & Sales", "https://outsourcey.com/role/help-desk/"),
    # Digital Marketing
    "marketing-manager":     ("Digital Marketing", "https://outsourcey.com/role/marketing-manager/"),
    "social-media-manager":  ("Digital Marketing", "https://outsourcey.com/role/social-media-manager/"),
    "seo-specialist":        ("Digital Marketing", "https://outsourcey.com/role/search-engine-optimization-seo/"),
    "content-marketing":     ("Digital Marketing", "https://outsourcey.com/role/content-marketing/"),
    "copywriting":           ("Digital Marketing", "https://outsourcey.com/role/copywriting/"),
    # Admin, HR & Recruitment
    "executive-assistant":   ("Admin, HR & Recruitment", "https://outsourcey.com/role/executive-assistant/"),
    "office-administration": ("Admin, HR & Recruitment", "https://outsourcey.com/role/administrative-services/"),
    "personal-assistant":    ("Admin, HR & Recruitment", "https://outsourcey.com/role/personal-assistant/"),
    "recruiter":             ("Admin, HR & Recruitment", "https://outsourcey.com/role/recruitment/"),
    "hr-support":            ("Admin, HR & Recruitment", "https://outsourcey.com/role/human-resources/"),
}

# ── HELPERS ───────────────────────────────────────────────────────────────────

def clean(text):
    return re.sub(r'\s+', ' ', text).strip() if text else ""

def fetch(url):
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        r.raise_for_status()
        return BeautifulSoup(r.text, "html.parser")
    except Exception as e:
        print(f"  ⚠️  Failed {url}: {e}")
        return None

def extract_page_data(soup, url):
    """Extract all useful text blocks from a page."""
    if not soup:
        return {}

    data = {"url": url}

    # Title / H1
    h1 = soup.find("h1")
    data["headline"] = clean(h1.get_text()) if h1 else ""

    # All H2s — section titles
    data["section_titles"] = [clean(h.get_text()) for h in soup.find_all("h2") if clean(h.get_text())]

    # All H3s — sub-section titles / service names
    data["sub_titles"] = [clean(h.get_text()) for h in soup.find_all("h3") if clean(h.get_text())]

    # Paragraphs — main body content
    paragraphs = []
    for p in soup.find_all("p"):
        t = clean(p.get_text())
        if len(t) > 40:   # skip tiny filler
            paragraphs.append(t)
    data["paragraphs"] = paragraphs

    # Lists — bullet points / features
    lists = []
    for ul in soup.find_all(["ul", "ol"]):
        items = [clean(li.get_text()) for li in ul.find_all("li") if clean(li.get_text())]
        if items:
            lists.append(items)
    data["lists"] = lists

    # FAQ — accordion items
    faqs = []
    for item in soup.find_all(class_=re.compile(r'faq|accordion|toggle', re.I)):
        q = item.find(class_=re.compile(r'question|title|heading', re.I))
        a = item.find(class_=re.compile(r'answer|content|body', re.I))
        if q and a:
            faqs.append({
                "question": clean(q.get_text()),
                "answer":   clean(a.get_text())
            })
    # fallback — look for dt/dd pairs
    if not faqs:
        for dt in soup.find_all("dt"):
            dd = dt.find_next_sibling("dd")
            if dd:
                faqs.append({
                    "question": clean(dt.get_text()),
                    "answer":   clean(dd.get_text())
                })
    data["faqs"] = faqs

    # Services section — div/section combos with h3 + p
    services = []
    for block in soup.find_all(["div", "section"]):
        h = block.find(["h3", "h4"])
        p = block.find("p")
        if h and p:
            title = clean(h.get_text())
            desc  = clean(p.get_text())
            if title and len(desc) > 30 and title not in [s["title"] for s in services]:
                services.append({"title": title, "description": desc})
    # Keep only meaningful ones (avoid nav/footer noise)
    services = [s for s in services if len(s["title"]) < 80 and len(s["description"]) < 600]
    data["services"] = services[:12]   # cap at 12

    # Meta description
    meta = soup.find("meta", attrs={"name": "description"})
    data["meta_description"] = meta["content"] if meta and meta.get("content") else ""

    return data

# ── MAIN SCRAPE ───────────────────────────────────────────────────────────────

def scrape_industries():
    print("\n🏭  Scraping Industries...")
    results = []
    for slug, url in INDUSTRIES.items():
        print(f"  → {slug}")
        soup = fetch(url)
        page = extract_page_data(soup, url)
        page["slug"] = slug
        page["name"] = slug.replace("-", " ").title()
        results.append(page)
        time.sleep(1.2)   # polite delay
    return results

def scrape_roles():
    print("\n👤  Scraping Roles...")
    categories = {}
    for slug, (category, url) in ROLES.items():
        print(f"  → {slug} [{category}]")
        soup = fetch(url)
        page = extract_page_data(soup, url)
        page["slug"] = slug
        page["name"] = slug.replace("-", " ").title()
        page["category"] = category

        if category not in categories:
            categories[category] = []
        categories[category].append(page)
        time.sleep(1.2)

    # flatten to list with category grouping
    results = []
    for cat, roles in categories.items():
        results.append({
            "category": cat,
            "slug": cat.lower().replace(" & ", "-").replace(" ", "-").replace(",", ""),
            "roles": roles
        })
    return results

# ── RUN ───────────────────────────────────────────────────────────────────────

industries = scrape_industries()
roles      = scrape_roles()

output = {
    "source":     "outsourcey.com",
    "scraped_for": "Market Titans",
    "industries": industries,
    "role_categories": roles
}

out_path = "/home/claude/outsourcey_data.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"\n✅  Done! Saved to {out_path}")
print(f"   Industries: {len(industries)}")
print(f"   Roles:      {sum(len(c['roles']) for c in roles)}")