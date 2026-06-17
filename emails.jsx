/* PEACMark issuance email — 3 directions.
   Each email body is built at 600px (email standard) inside a faux mail-client frame.
   Palette: deep institutional green + achievement gold. Swap-friendly.
*/

// ---- Shared bits -------------------------------------------------------

// Placeholder logo lockup (until the real PEAC logo is dropped in)
function LogoMark({ size = 40, color = "#A6252A", ring = "#B8943F" }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke={ring} strokeWidth="2" />
        <circle cx="24" cy="24" r="16" fill={color} />
        <path d="M18 24.5l4.2 4.2L31 19.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function MailMeta({ subject = "Issuance of PEACMark", from = "PEAC Certification", addr = "no-reply@peac.org.ph" }) {
  return (
    <div style={mailMetaStyles.wrap}>
      <div style={mailMetaStyles.subject}>{subject}</div>
      <div style={mailMetaStyles.row}>
        <div style={mailMetaStyles.avatar}>P</div>
        <div style={{ minWidth: 0 }}>
          <div style={mailMetaStyles.fromLine}>
            <span style={mailMetaStyles.fromName}>{from}</span>
            <span style={mailMetaStyles.fromAddr}>&lt;{addr}&gt;</span>
          </div>
          <div style={mailMetaStyles.toLine}>to St. Augustine Academy ▾</div>
        </div>
        <div style={mailMetaStyles.date}>9:41 AM</div>
      </div>
    </div>
  );
}

const mailMetaStyles = {
  wrap: { padding: "18px 24px 16px", borderBottom: "1px solid #ECEFED", background: "#fff" },
  subject: { fontFamily: "'Public Sans', sans-serif", fontSize: 17, fontWeight: 600, color: "#1A2520", letterSpacing: "-0.01em", marginBottom: 12 },
  row: { display: "flex", alignItems: "center", gap: 11 },
  avatar: { width: 34, height: 34, borderRadius: "50%", background: "#A6252A", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Public Sans', sans-serif", fontWeight: 700, fontSize: 15, flexShrink: 0 },
  fromLine: { display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" },
  fromName: { fontFamily: "'Public Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: "#1A2520" },
  fromAddr: { fontFamily: "'Public Sans', sans-serif", fontSize: 12.5, color: "#8C8884" },
  toLine: { fontFamily: "'Public Sans', sans-serif", fontSize: 12.5, color: "#8C8884", marginTop: 1 },
  date: { marginLeft: "auto", fontFamily: "'Public Sans', sans-serif", fontSize: 12, color: "#ACA6A2", flexShrink: 0 },
};

// Attachment card
function Attachment({ accent = "#A6252A" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "13px 15px", border: "1px solid #E8DCDC", borderRadius: 10, background: "#fff" }}>
      <div style={{ width: 38, height: 46, borderRadius: 5, background: accent, position: "relative", flexShrink: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 6 }}>
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 8.5, fontWeight: 800, color: "#fff", letterSpacing: "0.06em" }}>PDF</span>
        <div style={{ position: "absolute", top: 0, right: 0, width: 12, height: 12, background: "rgba(255,255,255,0.28)", clipPath: "polygon(0 0, 100% 100%, 0 100%)" }} />
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: "#1A2520", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Guidelines on the Use of the PEACMark.pdf</div>
        <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, color: "#8C8884", marginTop: 2 }}>PDF · 1.2 MB</div>
      </div>
      <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12.5, fontWeight: 600, color: accent, whiteSpace: "nowrap" }}>Download</span>
    </div>
  );
}

// ============================================================
// DIRECTION A — Classic Institutional
// ============================================================
function EmailClassic() {
  return (
    <div style={{ width: 600, background: "#fff", fontFamily: "'Public Sans', sans-serif" }}>
      <MailMeta />
      {/* Header */}
      <div style={{ padding: "30px 56px 24px", textAlign: "center", borderBottom: "3px solid #A6252A" }}>
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <LogoMark size={44} />
          <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", color: "#A6252A", textTransform: "uppercase" }}>Private Education Assistance Committee</div>
        </div>
      </div>
      {/* Body */}
      <div style={{ padding: "40px 56px 44px" }}>
        <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8943F", marginBottom: 14 }}>Certification Issued</div>
        <h1 style={{ margin: "0 0 22px", fontFamily: "'Newsreader', Georgia, serif", fontSize: 30, lineHeight: 1.18, fontWeight: 500, color: "#4A1416", letterSpacing: "-0.01em" }}>Your PEACMark has been issued</h1>
        <p style={bodyP}>Good day, <strong style={{ color: "#1A2520", fontWeight: 600 }}>St. Augustine Academy</strong>,</p>
        <p style={bodyP}>We are pleased to inform you that your school's certification status is now verifiable through the PEAC CertCheck facility. There you can also download your school's PEAC certification badge, the <em>PEACMark</em>. Please refer to the attached <em>Guidelines on the Use of the PEACMark</em> for information on its proper use.</p>
        <div style={{ margin: "30px 0" }}>
          <a href="#" style={btnSolid("#A6252A")}>Access PEAC CertCheck →</a>
        </div>
        <p style={bodyP}>The public may likewise verify your school's certification status by entering your DepEd School ID on PEAC CertCheck, or by scanning the QR Code embedded in the PEACMark.</p>
        <p style={{ ...bodyP, marginBottom: 28 }}>Thank you for pursuing PEAC certification and for your commitment to ensuring compliance with established quality standards in education.</p>
        <Attachment />
        <p style={{ ...bodyP, marginTop: 30, marginBottom: 4 }}>Sincerely,</p>
        <p style={{ ...bodyP, margin: 0, fontWeight: 600, color: "#1A2520" }}>The PEAC Certification Team</p>
      </div>
      {/* Footer */}
      <div style={footerWrap}>
        <p style={footerText}>This is an automated message generated upon the issuance of your PEACMark. Please do not reply to this email.</p>
        <p style={{ ...footerText, marginTop: 8 }}>© 2026 Private Education Assistance Committee</p>
      </div>
    </div>
  );
}

// ============================================================
// DIRECTION B — Warm Celebration
// ============================================================
function EmailWarm() {
  return (
    <div style={{ width: 600, background: "#fff", fontFamily: "'Public Sans', sans-serif" }}>
      <MailMeta />
      {/* Tinted celebratory header */}
      <div style={{ background: "#A6252A", padding: "26px 56px", display: "flex", alignItems: "center", gap: 12 }}>
        <LogoMark size={34} color="#fff" ring="#B8943F" />
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", color: "rgba(255,255,255,0.85)", textTransform: "uppercase" }}>PEAC Certification</span>
      </div>
      {/* Hero band */}
      <div style={{ background: "#F8ECEC", padding: "44px 56px 40px", borderBottom: "1px solid #EAD3D3", position: "relative", overflow: "hidden" }}>
        {/* seal motif */}
        <div style={{ position: "absolute", right: -36, top: -36, width: 180, height: 180, borderRadius: "50%", border: "20px solid rgba(184,148,63,0.13)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #D8C18A", borderRadius: 999, padding: "6px 14px", marginBottom: 18 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#B8943F" }} />
            <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A6D24" }}>Officially Certified</span>
          </div>
          <h1 style={{ margin: 0, fontFamily: "'Newsreader', Georgia, serif", fontSize: 34, lineHeight: 1.14, fontWeight: 500, color: "#4A1416", letterSpacing: "-0.015em", maxWidth: 420 }}>Congratulations — your PEACMark is now live</h1>
        </div>
      </div>
      {/* Body */}
      <div style={{ padding: "36px 56px 44px" }}>
        <p style={bodyP}>Good day, <strong style={{ color: "#1A2520", fontWeight: 600 }}>St. Augustine Academy</strong>,</p>
        <p style={bodyP}>We are delighted to share that your school's certification status is now verifiable through the PEAC CertCheck facility. From there you can download your official certification badge — the <em>PEACMark</em>. The attached <em>Guidelines on the Use of the PEACMark</em> explain how to display it properly.</p>
        <div style={{ margin: "28px 0" }}>
          <a href="#" style={btnSolid("#A6252A")}>Access PEAC CertCheck →</a>
        </div>
        <div style={{ background: "#FBF7EC", border: "1px solid #EFE3C4", borderRadius: 10, padding: "16px 18px", margin: "4px 0 28px" }}>
          <p style={{ ...bodyP, margin: 0, fontSize: 14 }}>The public can verify your certification anytime by entering your <strong style={{ color: "#1A2520", fontWeight: 600 }}>DepEd School ID</strong> on PEAC CertCheck, or by scanning the QR Code embedded in your PEACMark.</p>
        </div>
        <Attachment accent="#B8943F" />
        <p style={{ ...bodyP, marginTop: 30 }}>Thank you for pursuing PEAC certification and for your commitment to quality in education.</p>
        <p style={{ ...bodyP, margin: "0", fontWeight: 600, color: "#1A2520" }}>— The PEAC Certification Team</p>
      </div>
      <div style={footerWrap}>
        <p style={footerText}>This is an automated message generated upon the issuance of your PEACMark. Please do not reply to this email.</p>
        <p style={{ ...footerText, marginTop: 8 }}>© 2026 Private Education Assistance Committee</p>
      </div>
    </div>
  );
}

// ============================================================
// DIRECTION C — Modern Editorial
// ============================================================
function EmailEditorial() {
  return (
    <div style={{ width: 600, background: "#fff", fontFamily: "'Public Sans', sans-serif" }}>
      <MailMeta />
      {/* Minimal header */}
      <div style={{ padding: "28px 56px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark size={30} />
          <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 14, fontWeight: 700, color: "#A6252A", letterSpacing: "0.02em" }}>PEAC</span>
        </div>
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11.5, color: "#ACA6A2" }}>Certification Notice</span>
      </div>
      {/* Editorial headline */}
      <div style={{ padding: "44px 56px 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 18 }}>
          <span style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 13, fontStyle: "italic", color: "#B8943F" }}>01 — Issuance</span>
          <span style={{ flex: 1, height: 1, background: "#E8DCDC" }} />
        </div>
        <h1 style={{ margin: "0 0 8px", fontFamily: "'Newsreader', Georgia, serif", fontSize: 40, lineHeight: 1.05, fontWeight: 500, color: "#4A1416", letterSpacing: "-0.02em" }}>The PEACMark<br />is yours.</h1>
      </div>
      {/* Body */}
      <div style={{ padding: "30px 56px 46px" }}>
        <p style={{ ...bodyP, fontSize: 16, color: "#463F3D" }}>Good day, <strong style={{ color: "#1A2520", fontWeight: 600 }}>St. Augustine Academy</strong>. Your school's certification status is now verifiable through the PEAC CertCheck facility, where you can download your official PEACMark badge.</p>
        <p style={bodyP}>Please refer to the attached <em>Guidelines on the Use of the PEACMark</em> for information on its proper use. The public may verify your status by entering your DepEd School ID on CertCheck, or by scanning the QR Code embedded in the PEACMark.</p>
        <div style={{ margin: "30px 0 32px", display: "flex", alignItems: "center", gap: 18 }}>
          <a href="#" style={{ ...btnSolid("#A6252A"), borderRadius: 999 }}>Access PEAC CertCheck</a>
          <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12.5, color: "#8C8884", lineHeight: 1.4 }}>Download your<br />badge &amp; QR code</span>
        </div>
        <div style={{ height: 1, background: "#E8DCDC", margin: "0 0 24px" }} />
        <Attachment />
        <p style={{ ...bodyP, marginTop: 30, fontSize: 14 }}>Thank you for pursuing PEAC certification and for your commitment to quality standards in education.</p>
      </div>
      <div style={footerWrap}>
        <p style={footerText}>Automated message · sent once upon issuance of your PEACMark · please do not reply</p>
        <p style={{ ...footerText, marginTop: 8 }}>© 2026 Private Education Assistance Committee</p>
      </div>
    </div>
  );
}

// ---- White placeholder logos (PEAC + CertCheck lockup) -----------------
function PeacLogoWhite() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 6l16 12v3H8v-3L24 6z" fill="#fff" opacity="0.95" />
        <rect x="13" y="23" width="22" height="16" rx="2" fill="#fff" opacity="0.95" />
        <path d="M21 39v-7h6v7" fill="#A6252A" />
      </svg>
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 22, fontWeight: 800, letterSpacing: "0.04em", color: "#fff" }}>PEAC</span>
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 6.5, fontWeight: 600, letterSpacing: "0.07em", color: "rgba(255,255,255,0.7)", marginTop: 4, textTransform: "uppercase" }}>Private Education Assistance Committee</span>
      </span>
    </span>
  );
}
function CertCheckLogoWhite() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 4l17 9.8v19.6L24 44 7 33.4V13.8L24 4z" fill="#fff" opacity="0.95" />
        <path d="M16 24l5.5 5.5L33 18" stroke="#A6252A" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 25, fontWeight: 500, color: "#fff", letterSpacing: "0.005em" }}>CertCheck</span>
    </span>
  );
}

// ============================================================
// DIRECTION D — Red Envelope (floating white card)
// ============================================================
function EmailEnvelope() {
  return (
    <div style={{ width: 600, fontFamily: "'Public Sans', sans-serif" }}>
      <MailMeta />
      <div style={{ background: "linear-gradient(180deg, #8E1A20 0%, #A6252A 38%, #A6252A 100%)", padding: "34px 30px 30px" }}>
        {/* Logo lockup */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 22, padding: "8px 0 30px" }}>
          <PeacLogoWhite />
          <span style={{ width: 1, height: 38, background: "rgba(255,255,255,0.32)" }} />
          <CertCheckLogoWhite />
        </div>
        {/* Floating white card */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "40px 42px 42px", boxShadow: "0 20px 44px -18px rgba(60,8,10,0.5)" }}>
          <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8943F", marginBottom: 12 }}>Certification Issued</div>
          <h1 style={{ margin: "0 0 24px", fontFamily: "'Public Sans', sans-serif", fontSize: 29, lineHeight: 1.16, fontWeight: 800, color: "#7A1418", letterSpacing: "-0.015em" }}>Congratulations — your PEACMark is now live</h1>
          <p style={bodyP}>Good day, <strong style={{ color: "#1A1818", fontWeight: 600 }}>St. Augustine Academy</strong>,</p>
          <p style={bodyP}>We are pleased to inform you that your school's certification status is now verifiable through the PEAC CertCheck facility. There you can also download your school's PEAC certification badge, the <em>PEACMark</em>. Please refer to the attached <em>Guidelines on the Use of the PEACMark</em> for information on its proper use.</p>
          <div style={{ margin: "28px 0" }}>
            <a href="#" style={btnSolid("#A6252A")}>Access PEAC CertCheck →</a>
          </div>
          <div style={{ background: "#FBF7EC", border: "1px solid #EFE3C4", borderRadius: 10, padding: "16px 18px", margin: "4px 0 28px" }}>
            <p style={{ ...bodyP, margin: 0, fontSize: 14 }}>The public may verify your certification by entering your <strong style={{ color: "#1A1818", fontWeight: 600 }}>DepEd School ID</strong> on PEAC CertCheck, or by scanning the QR Code embedded in your PEACMark.</p>
          </div>
          <Attachment accent="#A6252A" />
          <p style={{ ...bodyP, marginTop: 30, marginBottom: 4 }}>Thank you for pursuing PEAC certification and for your commitment to quality in education.</p>
          <p style={{ ...bodyP, margin: 0, fontWeight: 600, color: "#1A1818" }}>— The PEAC Certification Team</p>
        </div>
        {/* Footer in the red margin */}
        <div style={{ padding: "24px 12px 8px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11.5, lineHeight: 1.55, color: "rgba(255,255,255,0.78)", margin: 0 }}>This is an automated message generated upon the issuance of your PEACMark. Please do not reply to this email.</p>
          <p style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11.5, color: "rgba(255,255,255,0.6)", margin: "8px 0 0" }}>© 2026 Private Education Assistance Committee</p>
        </div>
      </div>
    </div>
  );
}

// ---- shared styles -----------------------------------------------------
const bodyP = { fontFamily: "'Public Sans', sans-serif", fontSize: 15, lineHeight: 1.62, color: "#4A4744", margin: "0 0 18px", textWrap: "pretty" };
function btnSolid(bg) {
  return { display: "inline-block", background: bg, color: "#fff", fontFamily: "'Public Sans', sans-serif", fontSize: 14.5, fontWeight: 600, textDecoration: "none", padding: "13px 26px", borderRadius: 8, letterSpacing: "0.01em" };
}
const footerWrap = { padding: "24px 56px 30px", background: "#FAF6F5", borderTop: "1px solid #ECEFED" };
const footerText = { fontFamily: "'Public Sans', sans-serif", fontSize: 11.5, lineHeight: 1.55, color: "#9C9692", margin: 0, textAlign: "center" };

Object.assign(window, { EmailClassic, EmailWarm, EmailEditorial, EmailEnvelope });
