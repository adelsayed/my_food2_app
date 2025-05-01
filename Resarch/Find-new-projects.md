## 🔍 New Project Discovery & Deduplication Request

### Objective
Identify **major new and significant projects in the United Arab Emirates**, organized **sector-by-sector**, that are **not present** in the provided CSV database.

### Scope Criteria
- Only include projects that are **not already listed** in the CSV.
- Must be **entirely new developments** (no sub-phases, expansions, or minor upgrades unless clearly independent).
- Projects must be **announced, approved, launched, or under construction** in the **last 2–3 years**.
- Include public and private sector projects.
- Location must be within the **United Arab Emirates**.

### Deduplication Rules
Before listing, **cross-check each project** against the CSV using:
- Project name (and variations/spellings)
- Location (city, region)
- Stakeholders (developers, contractors, government bodies)
✅ Only include projects **not found** in the CSV.

### Data Sources (Required)
Use only **credible public sources**, including but not limited to:
- Government websites (e.g., WAM, ADQ, Dubai Media Office)
- Industry news: MEED, The National, Arabian Business, Zawya, Construction Week
- Official press releases, developer websites
⚠️ Do not use blogs, social media, or speculative reports.

---

### Output Format (Tabular)
Return all new projects in the following format:

| Project Name | Sector | Location | Investment Value | Timeline/Status | Stakeholders | Sources | Verification Note |
|--------------|--------|----------|------------------|------------------|--------------|---------|--------------------|
| Official name | Sector from CSV | Country – Region – City | e.g., $1.5 billion | e.g., Under construction, Completion 2027 | Developer, government, etc. | URLs (official/credible only) | Clearly explain how project was verified as new |

---

### Sector-by-Sector Search Order
Use the unique sector list from the provided CSV as your basis (e.g., Healthcare, Buildings, Infrastructure, Energy, Industrial, etc.)

Start with one sector at a time. For each sector:
1. Search for eligible new projects
2. Cross-check against the CSV
3. Only include confirmed **new entries**

---

### Notes for Accuracy
- Prioritize **quality over quantity**
- If unsure whether a project is new or independent, exclude it
- Ensure each entry is fully sourced, properly classified, and deduplicated

