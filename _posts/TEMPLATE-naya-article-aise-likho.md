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
date: 2026-08-01                      # YYYY-MM-DD format
category: Action                       # Action / Horror / Mythology

# Type of article
type: Review                           # Review / Guide / News / First Look
label: "⭐ Review"                     # Badge on card: ⭐ Review / 🔥 Hot / 🆕 New / 🗺️ Guide

# --- SEO META TAGS ---
description: "150 words ka description jo Google mein dikhega. Game ka naam, genre, aur main point include karo."
keywords: "game name review, developer name, platform name, genre"

# --- HERO IMAGE ---
hero_image: "game-name-hero.jpg"       # /images/ folder mein daalo pehle

# --- REVIEW SCORE (sirf reviews ke liye, guides ke liye hata do) ---
score: 8.5                             # Number out of 10
score_label: "Great"                   # Excellent / Great / Good / Average / Poor
score_summary: "Ek line summary jo score ke saath dikhegi card mein."

# --- ARTICLE META ---
read_time: "8 min"
author_bio: "Gaming writer at JoystickVerse. Yahan apna gaming background likhao."

# --- BLOG CARD TEXT ---
excerpt: "Yeh text homepage aur blog page pe card mein dikhega. 1-2 sentences, catchy hona chahiye."

# --- SCHEMA TYPE ---
schema_type: Review                    # Review / Article (guides ke liye Article)

# ============================================================
# GAME INFO BOX (Quick Info table)
# Key-Value format mein likho
# ============================================================
specs:
  Developer: "Studio Ka Naam"
  Publisher: "Publisher Ka Naam"
  Platforms: "PS5, Xbox Series X/S, PC"
  Released: "Month DD, YYYY"
  Genre: "Action-Adventure"
  # Aur fields add kar sakte ho:
  # Price: "$69.99"
  # "Game Mode": "Single Player"

# ============================================================
# PROS & CONS (sirf reviews ke liye)
# ============================================================
pros:
  - "Pehla strong point"
  - "Doosra strong point"
  - "Teesra strong point"

cons:
  - "Pehli weakness"
  - "Doosri weakness"
  - "Teesri weakness"

# ============================================================
# VERDICT (article ke end mein verdict box mein dikhega)
# ============================================================
verdict: "2-3 sentences mein apna final verdict likhao. Honest aur direct raho."

# ============================================================
# TABLE OF CONTENTS
# Har section ke liye ek entry - id aur label
# id: wahi likhao jo heading ke {#id} mein hai neeche
# ============================================================
toc:
  - id: "section-1"
    label: "Pehla Section Ka Naam"
  - id: "section-2"
    label: "Doosra Section Ka Naam"
  - id: "verdict"
    label: "JoystickVerse Verdict"

---

<!-- ============================================================ -->
<!-- ARTICLE CONTENT NEECHE LIKHAO                               -->
<!-- Normal text = Markdown mein likho                            -->
<!-- **bold text** ke liye double asterisk                        -->
<!-- ## Heading ke liye double hash                               -->
<!-- - List item ke liye dash                                     -->
<!-- ============================================================ -->

Yahan intro paragraph likhao. Pehla paragraph hook hona chahiye — reader ko engage karo.

{% include specs.html %}

## Pehla Section {#section-1}

Yahan section ka content likhao. Normal Markdown paragraphs.

**Bold text** aise likha jata hai. *Italic* aise.

List example:
- Pehla point
- Doosra point
- Teesra point

{% include pros-cons.html %}

## Doosra Section {#section-2}

Aur content yahan.

{% include warn.html title="Pro Tip:" text="Yahan koi important note ya warning likhao." %}

## JoystickVerse Verdict {#verdict}

{% include verdict.html %}
