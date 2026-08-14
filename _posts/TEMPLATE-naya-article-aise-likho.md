---
# ============================================================
# JOYSTICKVERSE — NAI ARTICLE KA TEMPLATE
# ============================================================
# Instructions:
# 1. Is file ko copy karo _posts/ folder mein
# 2. File ka naam: YYYY-MM-DD-game-ka-naam.md (e.g., 2026-08-01-elden-ring-review.md)
# 3. Neeche sabhi fields fill karo
# 4. Article body likhao --- ke neeche
# 5. Git push karo — GitHub Pages automatically build karega!
# ============================================================

layout: post

# --- BASIC INFO ---
title: "Game Ka Naam — Review/Guide/News Title Yahan"
date: 2026-08-01
category: Action                       # Action / Horror / Mythology

type: Review                           # Review / Guide / News / First Look
label: "⭐ Review"                     # ⭐ Review / 🔥 Hot / 🆕 New / 🗺️ Guide

# --- SEO META TAGS ---
description: "150 words ka description jo Google mein dikhega."
keywords: "game name review, developer name, platform name, genre"

# --- HERO IMAGE ---
hero_image: "game-name-hero.jpg"

# --- REVIEW SCORE ---
score: 8.5
score_label: "Great"
score_summary: "Ek line summary."

# --- ARTICLE META ---
read_time: "8 min"
author_bio: "Gaming writer at JoystickVerse."
excerpt: "Yeh text homepage aur blog page pe card mein dikhega."
schema_type: Review

specs:
  Developer: "Studio Ka Naam"
  Publisher: "Publisher Ka Naam"
  Platforms: "PS5, Xbox Series X/S, PC"
  Released: "Month DD, YYYY"
  Genre: "Action-Adventure"

pros:
  - "Pehla strong point"
  - "Doosra strong point"

cons:
  - "Pehli weakness"
  - "Doosri weakness"

verdict: "2-3 sentences mein apna final verdict."

toc:
  - id: "section-1"
    label: "Pehla Section"
  - id: "verdict"
    label: "JoystickVerse Verdict"

---

Intro paragraph yahan likho.

{% include specs.html %}

## Pehla Section {#section-1}

Content yahan.

{% include pros-cons.html %}

## JoystickVerse Verdict {#verdict}

{% include verdict.html %}
