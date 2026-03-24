import { useState } from "react";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const routine = {
  Monday: {
    am: [
      { step: "Cleanse", product: "Cetaphil Gentle Skin Cleanser", note: null },
      { step: "Serum", product: "The Inkey List Vitamin C + EGF", note: "Brightens tone, antioxidant shield" },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: "Pat gently under eyes with ring finger" },
      { step: "Moisturizer", product: "Vichy Homme Structure Force", note: null },
      { step: "Sunscreen", product: "Bioré UV Aqua Rich SPF 50+", note: "Non-negotiable — retinoid makes skin sun-sensitive" },
    ],
    pm: [
      { step: "Cleanse", product: "Clinique For Men Face Wash", note: "Removes sunscreen + day buildup" },
      { step: "Treatment", product: "Retin-A (Tretinoin 0.025%)", note: "Wait ~15 min after cleansing. Pea-sized amount, full face." },
      { step: "Treatment", product: "Zoryve (Roflumilast Foam 0.3%)", note: "Psoriasis areas only" },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: "Keep retinoid away from eye area" },
      { step: "Moisturizer", product: "La Roche-Posay Hydraphase HA Rich", note: "Rich formula buffers retinoid dryness" },
    ],
    tags: ["Retinoid Night"],
  },
  Tuesday: {
    am: [
      { step: "Cleanse", product: "Clinique For Men Face Wash", note: "Slightly deeper cleanse before scrub" },
      { step: "Exfoliate", product: "Clinique For Men Face Scrub", note: "Focus on temples + forehead. Gentle circles, 60 sec." },
      { step: "Serum", product: "The Inkey List Vitamin C + EGF", note: null },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "Vichy Homme Structure Force", note: null },
      { step: "Sunscreen", product: "Bioré UV Aqua Rich SPF 50+", note: null },
    ],
    pm: [
      { step: "Cleanse", product: "Cetaphil Gentle Skin Cleanser", note: "Gentle cleanser — no retinoid tonight" },
      { step: "Treatment", product: "Zoryve (Roflumilast Foam 0.3%)", note: "Psoriasis areas only" },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "CeraVe Facial Moisturizing Lotion PM", note: "Niacinamide helps with tone + barrier" },
    ],
    tags: ["Exfoliation Day", "Rest Night"],
  },
  Wednesday: {
    am: [
      { step: "Cleanse", product: "Cetaphil Gentle Skin Cleanser", note: null },
      { step: "Serum", product: "The Inkey List Vitamin C + EGF", note: null },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "Vichy Homme Structure Force", note: null },
      { step: "Sunscreen", product: "Bioré UV Aqua Rich SPF 50+", note: null },
    ],
    pm: [
      { step: "Cleanse", product: "Clinique For Men Face Wash", note: null },
      { step: "Treatment", product: "Retin-A (Tretinoin 0.025%)", note: "Pea-sized amount, full face" },
      { step: "Treatment", product: "Zoryve (Roflumilast Foam 0.3%)", note: "Psoriasis areas only" },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "La Roche-Posay Hydraphase HA Rich", note: null },
    ],
    tags: ["Retinoid Night"],
  },
  Thursday: {
    am: [
      { step: "Cleanse", product: "Cetaphil Gentle Skin Cleanser", note: null },
      { step: "Serum", product: "The Inkey List Vitamin C + EGF", note: null },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "Vichy Homme Structure Force", note: null },
      { step: "Sunscreen", product: "Bioré UV Aqua Rich SPF 50+", note: null },
    ],
    pm: [
      { step: "Cleanse", product: "Cetaphil Gentle Skin Cleanser", note: null },
      { step: "Treatment", product: "Zoryve (Roflumilast Foam 0.3%)", note: "Psoriasis areas only" },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "CeraVe Facial Moisturizing Lotion PM", note: "Barrier recovery night" },
    ],
    tags: ["Rest Night"],
  },
  Friday: {
    am: [
      { step: "Cleanse", product: "Cetaphil Gentle Skin Cleanser", note: null },
      { step: "Serum", product: "The Inkey List Vitamin C + EGF", note: null },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "Vichy Homme Structure Force", note: null },
      { step: "Sunscreen", product: "Bioré UV Aqua Rich SPF 50+", note: null },
    ],
    pm: [
      { step: "Cleanse", product: "Clinique For Men Face Wash", note: null },
      { step: "Treatment", product: "Retin-A (Tretinoin 0.025%)", note: "Pea-sized amount, full face" },
      { step: "Treatment", product: "Zoryve (Roflumilast Foam 0.3%)", note: "Psoriasis areas only" },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "La Roche-Posay Hydraphase HA Rich", note: null },
    ],
    tags: ["Retinoid Night"],
  },
  Saturday: {
    am: [
      { step: "Cleanse", product: "Clinique For Men Face Wash", note: null },
      { step: "Exfoliate", product: "Clinique For Men Face Scrub", note: "Focus on temples + forehead" },
      { step: "Serum", product: "The Inkey List Vitamin C + EGF", note: null },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "Vichy Homme Structure Force", note: null },
      { step: "Sunscreen", product: "Bioré UV Aqua Rich SPF 50+", note: null },
    ],
    pm: [
      { step: "Cleanse", product: "Cetaphil Gentle Skin Cleanser", note: null },
      { step: "Treatment", product: "Zoryve (Roflumilast Foam 0.3%)", note: "Psoriasis areas only" },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "CeraVe Facial Moisturizing Lotion PM", note: null },
    ],
    tags: ["Exfoliation Day", "Rest Night"],
  },
  Sunday: {
    am: [
      { step: "Cleanse", product: "Cetaphil Gentle Skin Cleanser", note: null },
      { step: "Serum", product: "The Inkey List Vitamin C + EGF", note: null },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "Vichy Homme Structure Force", note: null },
      { step: "Sunscreen", product: "Bioré UV Aqua Rich SPF 50+", note: null },
    ],
    pm: [
      { step: "Cleanse", product: "Clinique For Men Face Wash", note: null },
      { step: "Treatment", product: "Retin-A (Tretinoin 0.025%)", note: "Pea-sized amount, full face" },
      { step: "Treatment", product: "Zoryve (Roflumilast Foam 0.3%)", note: "Psoriasis areas only" },
      { step: "Eye Cream", product: "The Inkey List Caffeine Eye Cream", note: null },
      { step: "Moisturizer", product: "La Roche-Posay Hydraphase HA Rich", note: null },
    ],
    tags: ["Retinoid Night"],
  },
};

const bodyNote = {
  title: "Body (Daily / As Needed)",
  items: [
    "CeraVe Renewing SA Lotion → rough or bumpy areas (arms, legs, elbows)",
    "Kirkland or Vaseline Intensive Care → general body moisture",
    "Life Brand Sport SPF 30 → body sun protection when outdoors",
  ],
};

const tagColors = {
  "Retinoid Night": { bg: "#3b1f5e", text: "#d4b5ff" },
  "Exfoliation Day": { bg: "#1a3a2a", text: "#7ddeaa" },
  "Rest Night": { bg: "#3a2a1a", text: "#deb87d" },
};

const stepIcons = {
  Cleanse: "🧴",
  Exfoliate: "🧼",
  Serum: "🍊",
  "Eye Cream": "👁️",
  Moisturizer: "💧",
  Sunscreen: "☀️",
  Treatment: "💊",
};

export default function SkincareRoutine() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [period, setPeriod] = useState("am");
  const day = routine[selectedDay];

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      background: "#0e0e10",
      color: "#e8e4df",
      minHeight: "100vh",
      padding: "24px 16px",
      boxSizing: "border-box",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 560, margin: "0 auto 28px" }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 28,
          fontWeight: 700,
          margin: "0 0 4px",
          letterSpacing: "-0.5px",
          color: "#f5f0ea",
        }}>
          Weekly Skincare Routine
        </h1>
        <p style={{ fontSize: 13, color: "#807a72", margin: 0 }}>
          Mon–Sun · AM + PM · Tap a day to see your steps
        </p>
      </div>

      <div style={{
        maxWidth: 560,
        margin: "0 auto 20px",
        display: "flex",
        gap: 6,
        overflowX: "auto",
        paddingBottom: 4,
      }}>
        {DAYS.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDay(d)}
            style={{
              flex: "1 0 auto",
              minWidth: 56,
              padding: "10px 6px",
              borderRadius: 10,
              border: selectedDay === d ? "1.5px solid #d4b5ff" : "1.5px solid #2a2a2e",
              background: selectedDay === d ? "#1e1630" : "#18181b",
              color: selectedDay === d ? "#d4b5ff" : "#807a72",
              fontSize: 12,
              fontWeight: selectedDay === d ? 600 : 500,
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
          >
            {d.slice(0, 3)}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto 16px", display: "flex", gap: 8, flexWrap: "wrap" }}>
        {day.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "4px 10px",
              borderRadius: 20,
              background: tagColors[tag]?.bg || "#222",
              color: tagColors[tag]?.text || "#aaa",
              letterSpacing: "0.3px",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{
        maxWidth: 560,
        margin: "0 auto 20px",
        display: "flex",
        background: "#18181b",
        borderRadius: 10,
        padding: 3,
      }}>
        {["am", "pm"].map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            style={{
              flex: 1,
              padding: "10px 0",
              borderRadius: 8,
              border: "none",
              background: period === p ? "#2a2a30" : "transparent",
              color: period === p ? "#f5f0ea" : "#5a5650",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "inherit",
              letterSpacing: "0.5px",
            }}
          >
            {p === "am" ? "☀️  Morning" : "🌙  Evening"}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto 32px" }}>
        {day[period].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 14,
              padding: "16px 0",
              borderBottom: i < day[period].length - 1 ? "1px solid #1e1e22" : "none",
            }}
          >
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#18181b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              flexShrink: 0,
            }}>
              {stepIcons[item.step] || "•"}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#6a6560",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginBottom: 3,
              }}>
                {item.step}
              </div>
              <div style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#e8e4df",
                lineHeight: 1.4,
              }}>
                {item.product}
              </div>
              {item.note && (
                <div style={{
                  fontSize: 12,
                  color: "#807a72",
                  marginTop: 4,
                  lineHeight: 1.45,
                  fontStyle: "italic",
                }}>
                  {item.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        maxWidth: 560,
        margin: "0 auto 24px",
        background: "#14141a",
        borderRadius: 12,
        padding: "16px 18px",
        border: "1px solid #1e1e22",
      }}>
        <div style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#6a6560",
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          marginBottom: 10,
        }}>
          🧴 {bodyNote.title}
        </div>
        {bodyNote.items.map((item, i) => (
          <div
            key={i}
            style={{
              fontSize: 13,
              color: "#a09a92",
              lineHeight: 1.5,
              marginBottom: i < bodyNote.items.length - 1 ? 6 : 0,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div style={{
        maxWidth: 560,
        margin: "0 auto 24px",
        background: "#14141a",
        borderRadius: 12,
        padding: "16px 18px",
        border: "1px solid #1e1e22",
      }}>
        <div style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#6a6560",
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          marginBottom: 12,
        }}>
          📋 Weekly Breakdown
        </div>
        {[
          { label: "Retin-A", value: "4 nights", sub: "Mon · Wed · Fri · Sun", color: "#d4b5ff" },
          { label: "Zoryve", value: "Every night", sub: "Psoriasis areas, daily", color: "#7db8de" },
          { label: "Exfoliation", value: "2 mornings", sub: "Tue · Sat", color: "#7ddeaa" },
          { label: "Rest (no retinoid)", value: "3 nights", sub: "Tue · Thu · Sat", color: "#deb87d" },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom: i < 3 ? "1px solid #1e1e22" : "none",
            }}
          >
            <div>
              <span style={{ fontSize: 13, fontWeight: 600, color: row.color }}>{row.label}</span>
              <span style={{ fontSize: 12, color: "#5a5650", marginLeft: 8 }}>{row.sub}</span>
            </div>
            <span style={{ fontSize: 12, color: "#807a72", fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
      </div>

      <p style={{
        maxWidth: 560,
        margin: "20px auto 0",
        fontSize: 11,
        color: "#4a4640",
        textAlign: "center",
        lineHeight: 1.5,
      }}>
        If irritation builds up from Retin-A, swap a retinoid night for a rest night. Apply Zoryve per your prescription guidance.
      </p>
    </div>
  );
}
