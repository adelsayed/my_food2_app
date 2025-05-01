🔍 Project Profile Verification Request (GenSpark Format)

Context
I am a project analyst responsible for maintaining accurate, up-to-date project information in our internal Salesforce database. Please review the attached Salesforce **project profile** (PDF or screenshot) and verify all visible data fields using public sources.

Instructions
1. Extract **all labeled fields** shown in the attached project profile, including:
   * Core project metadata
   * Classification and financials  
   * Descriptions and technical details
   * Posts, Roles, Events, and Products

2. **Verify and update each field** using trusted public sources:
   * Industry databases
   * Official company websites
   * Press releases
   * Regulatory portals
   * News articles  

3. Format the output into **five structured sections** using the table format shown below:
   * **Project Identifiers & Basic Information**
   * **Posts**
   * **Roles**
   * **Events**
   * **Products**

Each row should include:
* `Data Field`
* `Current Value` (from profile)
* `Updated Value` (from research)
* `Status`: Verified ✓ | Updated ⟳ | Cannot Verify ❓ | New 🆕
* `Source`: Include **active URL links**
* `Verification Date`: Use format YYYY-MM-DD

✅ Example Format

🧾 Project Identifiers & Basic Information
| Data Field | Current Value | Updated Value | Status | Source | Verification Date |
|------------|--------------|---------------|--------|--------|-------------------|
| Name | Solar Power Plant Alpha | Same | ✓ | https://company.com/projects | 2025-04-30 |
| Stage | Planning | Under Construction | ⟳ | https://news.com/article123 | 2025-04-30 |
| Value (USD M) | 500 | Cannot verify | ❓ | — | 2025-04-30 |

🧾 Posts
| Date | Title / Text | Updated Value | Status | Source | Verification Date |
|------|-------------|--------------|--------|--------|-------------------|
| 2025-04-01 | "Project construction 80% complete" | Same | ✓ | https://developer.com/news | 2025-04-30 |

🧾 Roles
| Role | Org Name / Contact | Updated Value | Status | Source | Verification Date |
|------|-------------------|--------------|--------|--------|-------------------|
| Developer | National Housing Authority | Same | ✓ | https://gov.eg/housing | 2025-04-30 |
| Contractor | El Sewedy Electric | Same | ✓ | https://elsewedyelectric.com | 2025-04-30 |

🧾 Events
| Event | Date | Updated Value | Status | Source | Verification Date |
|-------|------|--------------|--------|--------|-------------------|
| Construction Start | 2022-01-01 | Same | ✓ | https://railjournal.com/project-x | 2025-04-30 |

🧾 Products
| Product Component | Quantity | Updated Value | Status | Source | Verification Date |
|-------------------|----------|--------------|--------|--------|-------------------|
| Rolling Stock | (not listed) | 41 Velaro trains ordered from Siemens | 🆕 | https://egyptindependent.com/velaro | 2025-04-30 |

Notes
* All updates must follow the **field labels and structure from the profile**—do not substitute field names.
* If multiple sources confirm a value, choose the **most direct/official** one and hyperlink it.
* For internal Salesforce-only fields, mark "Internal" under source.