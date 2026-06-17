# Automated Email Template Specification
## PEAC Mark — Issuance Notification

---

## Overview

This document defines the content, structure, and variable fields for the automated email notification sent to schools upon the issuance of their PEACMark certification badge. The email is triggered automatically by the system once a school's certification status becomes verifiable through the PEAC CertCheck facility.

---

## Email Metadata

| Field | Value |
|---|---|
| **From** | `[insert sender address]` |
| **Reply-to** | `[insert reply-to address]` |
| **To** | `[school official email address]` |
| **Subject** | Issuance of PEACMark |
| **Trigger** | Automated — upon certification status becoming verifiable in PEAC CertCheck |
| **Attachment** | Guidelines on the Use of the PEACMark (PDF) |

---

## Email Body

---

Good day[,/ [School Name],]

We are pleased to inform you that your school's certification status is now verifiable through the PEAC CertCheck facility. You may access PEAC CertCheck through **[PEAC CertCheck URL]**, where you can also download your school's PEAC certification badge called PEACMark. Please refer to the attached *Guidelines on the Use of the PEACMark* for information on its proper use.

The public may likewise verify your school's certification status by entering your DepEd School ID on **[PEAC CertCheck URL]**, or by scanning the QR Code embedded in the PEACMark.

Thank you for pursuing PEAC certification and for your commitment to ensuring compliance with established quality standards in education.

---

## Variable Fields

The following placeholders must be populated dynamically by the system at the time of sending.

| Placeholder | Description | Source |
|---|---|---|
| `[School Name]` | Official name of the recipient school | School records database |
| `[PEAC CertCheck URL]` | Full URL to the PEAC CertCheck facility | System configuration |
| `[school official email address]` | Primary email address on file for the school | School records database |
| `[DepEd School ID]` | The school's official DepEd-assigned ID | School records database |

> **Note:** The same `[PEAC CertCheck URL]` is referenced twice in the body — once for school access and once for public verification. Both instances must resolve to the same destination unless separate URLs are designated for each purpose.

---

## Attachment

| Item | Details |
|---|---|
| **File name** | `Guidelines_on_the_Use_of_the_PEACMark.pdf` |
| **Type** | PDF |
| **Included in** | Every issuance email, without exception |

---

## Sending Rules

- This email is sent **once per school** upon the first issuance of their PEACMark.
- If a school's certification is renewed or updated, a separate template should be defined for re-issuance (out of scope for this document).
- The email must not be sent manually — it is exclusively system-triggered.
- Failed delivery attempts must be logged and flagged for follow-up.

---

## Open Items

The following require confirmation before the template can be finalized and deployed.

| # | Item | Owner |
|---|---|---|
| 1 | Confirm the final PEAC CertCheck URL(s) to be embedded in the body | PEAC IT / Web team |
| 2 | Confirm sender email address and display name | PEAC Communications |
| 3 | Confirm reply-to address (or whether replies should be suppressed) | PEAC Communications |
| 4 | Confirm whether the salutation should include the school name or remain generic | PEAC Communications |
| 5 | Confirm final filename and version of the PEACMark Guidelines PDF attachment | PEAC Certification team |

---

*Last updated: June 2026*
