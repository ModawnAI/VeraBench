# VERA SUMMIT 2026 - Frontend Design System

A comprehensive guide to recreate the visual design, components, and styling patterns used in the Vera Summit 2026 conference website.

---

## Table of Contents

1. [Tech Stack](#1-tech-stack)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [Section Patterns](#6-section-patterns)
7. [Animations & Interactions](#7-animations--interactions)
8. [Form Design](#8-form-design)
9. [Responsive Design](#9-responsive-design)
10. [CSS Utilities](#10-css-utilities)

---

## 1. Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| CSS Framework | Tailwind CSS v4.0.0-beta.8 |
| Component Variants | Class Variance Authority (CVA) |
| UI Primitives | Radix UI |
| Icons | Lucide React |
| Animations | Lottie React, CSS Keyframes |
| Fonts | Google Fonts (next/font) |
| Utility | clsx + tailwind-merge |

---

## 2. Color Palette

### Primary Colors

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| **Vera Crimson** | `#D85A5A` | `359 62% 59%` | Primary buttons, links, accents, focus states |
| **Vera Crimson Hover** | `#C04A4A` | - | Button hover states |
| **Vera Crimson Light** | `#D85A5A/10` | - | Badges, tags background |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Text Primary** | `#1A1A1A` | Headlines, primary body text |
| **Text Secondary** | `#666666` | Secondary body text, descriptions |
| **Text Muted** | `#888888` | Tertiary text, captions |
| **Text Hint** | `#999999` | Placeholders, hints |
| **Text Light** | `#BBBBBB` | Very subtle text |
| **Border Light** | `#EEEEEE` | Card borders, dividers |
| **Border Medium** | `#DDDDDD` | Hover borders, input borders |
| **Border Dark** | `#CCCCCC` | Stronger dividers |
| **Background Light** | `#FAFAFA` | Alternate section backgrounds |
| **Background Input** | `#F5F5F5` | Icon backgrounds, badges |
| **Background Hover** | `#F0F0F0` | Button hover states |
| **White** | `#FFFFFF` | Main backgrounds, cards |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Champagne Gold** | `#D4AF37` | Luxury accents, gradients |
| **Deep Navy** | `#0F172A` | Dark backgrounds, overlays |

### CSS Variables (globals.css)

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 359 62% 59%;
  --primary-foreground: 0 0% 100%;
  --secondary: 210 40% 96.1%;
  --accent: 359 62% 59%;
  --destructive: 0 84.2% 60.2%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 359 62% 59%;
  --radius: 0.5rem;

  /* Summit Luxury Colors */
  --color-vera-crimson: #D85A5A;
  --color-deep-navy: #0F172A;
  --color-champagne-gold: #D4AF37;
  --color-warm-grey: #F8F7F4;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4A5568;
  --color-text-light: #E2E8F0;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 359 62% 65%;
  --secondary: 217.2 32.6% 17.5%;
  --accent: 359 62% 65%;
  --destructive: 0 62.8% 30.6%;
  --border: 217.2 32.6% 17.5%;
}
```

---

## 3. Typography

### Font Families

```typescript
// next/font/google imports
import { Geist_Mono } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
});
```

### Font Assignment

```css
html {
  font-family: var(--font-geist-mono), ui-monospace, monospace;
}

/* Language-specific */
:lang(ko) {
  word-break: keep-all;
}
```

```jsx
// In layout.tsx
<body className={locale === "ko" ? "font-sans" : "font-mono"}>
```

### Typography Scale

| Element | Tailwind Classes | Size | Weight |
|---------|-----------------|------|--------|
| H1 (Hero) | `text-3xl md:text-4xl lg:text-5xl` | 30-48px | `font-medium` |
| H2 (Sections) | `text-3xl md:text-4xl` | 30-36px | `font-semibold` |
| H3 (Subsections) | `text-xl md:text-2xl` | 20-28px | `font-semibold` |
| H4 (Cards) | `text-base` | 16px | `font-semibold` |
| Body | `text-base` | 16px | normal (400) |
| Body Small | `text-sm` | 14px | normal |
| Caption | `text-xs` | 12px | `font-medium` |
| Label | `text-[10px]` | 10px | `font-medium` |

### Letter Spacing

| Usage | Tailwind Class | Value |
|-------|---------------|-------|
| Section labels | `tracking-[0.2em]` | 0.2em |
| Hero subtitle | `tracking-[0.3em]` | 0.3em |
| Logo | `tracking-[0.2em]` | 0.2em |
| Uppercase labels | `tracking-wider` | 0.05em |

### Text Colors by Context

```jsx
// Primary text
<p className="text-[#1A1A1A]">

// Secondary text
<p className="text-[#666]">

// Muted text
<p className="text-[#888]">
<p className="text-[#999]">

// Accent/Link text
<a className="text-[#D85A5A]">

// Section labels (uppercase)
<p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase">
```

---

## 4. Spacing & Layout

### Container Pattern

```jsx
<section className="py-24 md:py-32 bg-white">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">
      {/* Content */}
    </div>
  </div>
</section>
```

### Section Padding

| Device | Vertical Padding | Class |
|--------|-----------------|-------|
| Mobile | 96px | `py-24` |
| Desktop | 128px | `md:py-32` |

### Horizontal Padding

| Element | Padding | Class |
|---------|---------|-------|
| Container | 24px | `px-6` |
| Cards | 16-24px | `p-4` to `p-6` |
| Buttons | 16-32px | `px-4` to `px-8` |

### Max Widths

```jsx
// Content widths by context
<div className="max-w-2xl">  // 672px - Text content
<div className="max-w-3xl">  // 768px - Narrow content
<div className="max-w-4xl">  // 896px - Medium content
<div className="max-w-5xl">  // 1024px - Wide content
<div className="max-w-6xl">  // 1152px - Full sections
```

### Grid Patterns

```jsx
// 3-column grid (speakers, features)
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

// 2-column grid (venue, benefits)
<div className="grid md:grid-cols-2 gap-4">

// 4-column grid (partners)
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
```

### Gap Values

| Usage | Class | Value |
|-------|-------|-------|
| Tight | `gap-2` | 8px |
| Default | `gap-4` | 16px |
| Standard | `gap-6` | 24px |
| Wide | `gap-8` | 32px |
| Section | `gap-12` | 48px |
| Extra | `gap-16` | 64px |

---

## 5. Components

### Button Component

**Base Classes:**
```css
rounded-md text-sm font-medium ring-offset-background transition-colors
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
disabled:pointer-events-none disabled:opacity-50
```

**Variants:**

```jsx
// Primary (default)
<Button className="bg-[#D85A5A] hover:bg-[#C04A4A] text-white font-medium px-8 py-6 text-base rounded-lg">
  Register Now
</Button>

// Outline
<Button variant="outline" className="border-[#DDD] text-[#666] hover:bg-[#F0F0F0]">
  Learn More
</Button>

// Ghost
<Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
  Cancel
</Button>

// Large CTA
<Button size="lg" className="h-11 rounded-md px-8">
  Submit
</Button>

// Icon Button
<Button size="icon" className="h-10 w-10">
  <ChevronRight />
</Button>
```

**Size Variants:**
```typescript
size: {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
}
```

### Input Component

**Base Classes:**
```css
flex h-10 w-full rounded-md border border-input bg-background px-3 py-2
text-base placeholder:text-muted-foreground
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
```

**Custom Styled Input:**
```jsx
<Input
  className="h-12 border-[#DDD] bg-white focus:border-[#D85A5A] focus:ring-[#D85A5A]/20 transition-all duration-200"
/>
```

### Card Pattern

```jsx
<div className="bg-[#FAFAFA] rounded-xl overflow-hidden border border-[#EEE] hover:border-[#DDD] transition-all">
  {/* Image */}
  <div className="relative aspect-[4/5] overflow-hidden">
    <Image fill className="object-cover object-top" />
  </div>

  {/* Content */}
  <div className="p-5 bg-white">
    {/* Badge */}
    <span className="px-2.5 py-1 rounded-full bg-[#D85A5A]/10 text-[#D85A5A] text-xs font-medium">
      Label
    </span>

    {/* Title */}
    <h3 className="text-base font-semibold text-[#1A1A1A]">Title</h3>

    {/* Description */}
    <p className="text-xs text-[#666]">Description</p>

    {/* Divider */}
    <div className="pt-3 border-t border-[#EEE]">
      <p className="text-[10px] uppercase tracking-wider text-[#999]">Label</p>
      <p className="text-xs text-[#1A1A1A] font-medium">Content</p>
    </div>
  </div>
</div>
```

### Badge Component

```jsx
// Primary badge
<span className="px-2.5 py-1 rounded-full bg-[#D85A5A]/10 text-[#D85A5A] text-xs font-medium">
  Badge
</span>

// Subtle badge
<span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#666] text-xs">
  Tag
</span>

// Active state badge
<span className="px-3 py-1.5 rounded-full bg-[#D85A5A] text-white text-xs font-medium">
  Active
</span>
```

### Accordion Component

```jsx
<div className="border border-[#EEE] hover:border-[#DDD] rounded-xl overflow-hidden transition-all">
  {/* Trigger */}
  <button className="w-full p-5 md:p-6 flex items-center justify-between bg-white">
    <span className="text-base font-medium text-[#1A1A1A]">Question</span>
    <ChevronDown className={cn(
      "w-5 h-5 text-[#999] transition-transform duration-300",
      isOpen && "rotate-180 text-[#D85A5A]"
    )} />
  </button>

  {/* Content - Animated */}
  <div className={cn(
    "grid transition-all duration-300",
    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
  )}>
    <div className="overflow-hidden">
      <div className="p-5 md:p-6 pt-0 text-sm text-[#666] leading-relaxed">
        Answer content
      </div>
    </div>
  </div>
</div>
```

---

## 6. Section Patterns

### Section Header Pattern

```jsx
<div className="text-center mb-16">
  {/* Label */}
  <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-6">
    Section Label
  </p>

  {/* Title */}
  <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
    Section Title
  </h2>

  {/* Subtitle */}
  <p className="text-base text-[#666] max-w-2xl mx-auto">
    Section description goes here
  </p>
</div>
```

### Hero Section

```jsx
<section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
  {/* Background Animation */}
  <div className="absolute inset-0 opacity-50">
    <Lottie animationData={orbsAnimation} />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <p className="text-[#D85A5A] tracking-[0.3em] text-xs md:text-sm uppercase mb-6">
      Subtitle
    </p>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-[#1A1A1A] mb-6">
      Main Title
    </h1>
    <p className="text-base md:text-lg text-[#666] max-w-2xl mx-auto mb-10">
      Description
    </p>
    <Button size="lg">Call to Action</Button>
  </div>
</section>
```

### Background Alternation

```jsx
// White section
<section className="py-24 md:py-32 bg-white">

// Gray section
<section className="py-24 md:py-32 bg-[#FAFAFA]">
```

### Header/Navigation

```jsx
<header className={cn(
  "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
  isScrolled
    ? "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-white/80 backdrop-blur-sm"
)}>
  <div className="container mx-auto px-6">
    <div className="flex items-center justify-between h-16 md:h-20">
      {/* Logo */}
      <span className="text-2xl tracking-[0.2em] text-[#1A1A1A]">VERA</span>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8">
        <a className="text-[#666] hover:text-[#D85A5A] transition-colors text-sm">
          Link
        </a>
      </nav>

      {/* CTA */}
      <Button className="bg-[#D85A5A] hover:bg-[#C04A4A]">
        Register
      </Button>
    </div>
  </div>
</header>
```

### Footer

```jsx
<footer className="bg-[#FAFAFA] border-t border-[#EEE] py-16">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-12">
      {/* Brand */}
      <div>
        <span className="text-2xl tracking-[0.2em] text-[#1A1A1A]">VERA</span>
        <p className="text-[#888] text-sm mt-4">Description</p>
      </div>

      {/* Links */}
      <div>
        <h4 className="text-sm font-semibold text-[#1A1A1A] mb-4">Links</h4>
        <a className="text-[#666] hover:text-[#D85A5A] text-sm">Link</a>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-sm font-semibold text-[#1A1A1A] mb-4">Contact</h4>
        <p className="text-[#666] text-sm">info@example.com</p>
      </div>
    </div>
  </div>
</footer>
```

### Sticky CTA

```jsx
<div className={cn(
  "fixed bottom-6 right-6 z-50 transition-all duration-500",
  isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8 pointer-events-none"
)}>
  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#EEE] p-4 max-w-[280px]">
    <p className="text-sm font-medium text-[#1A1A1A] mb-3">Ready to join?</p>
    <Button className="w-full bg-[#D85A5A] hover:bg-[#C04A4A]">
      Register Now
    </Button>
  </div>
</div>
```

---

## 7. Animations & Interactions

### Hover Effects

**Elevation (hover-lift):**
```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

**Scale on Image:**
```jsx
<div className="overflow-hidden">
  <Image className="object-cover hover:scale-105 transition-transform duration-500" />
</div>
```

**Border Color Transition:**
```jsx
<div className="border border-[#EEE] hover:border-[#DDD] transition-all">
```

**Underline Animation:**
```jsx
<a className="relative group">
  Link Text
  <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-[#D85A5A] transition-all duration-300" />
</a>
```

### Shimmer Animation

```css
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.shimmer-gold {
  background: linear-gradient(
    90deg,
    #D4AF37 0%,
    #F4E5B2 25%,
    #D4AF37 50%,
    #F4E5B2 75%,
    #D4AF37 100%
  );
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Glass Morphism

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.glass-dark {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

### Smooth Scroll

```css
html {
  scroll-behavior: smooth;
}
```

### Accordion Animation

```jsx
<div className={cn(
  "grid transition-all duration-300",
  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
)}>
  <div className="overflow-hidden">
    {/* Content */}
  </div>
</div>
```

### Icon Rotation

```jsx
<ChevronDown className={cn(
  "transition-transform duration-300",
  isOpen && "rotate-180"
)} />
```

### Button Arrow Animation

```jsx
<Button className="group">
  Next
  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
</Button>
```

---

## 8. Form Design

### Floating Label Pattern

```jsx
<div className="relative group">
  <Label
    className={cn(
      "absolute left-4 transition-all duration-200 pointer-events-none",
      isFocused || hasValue
        ? "-top-2.5 text-xs bg-white px-1 text-[#D85A5A]"
        : "top-3.5 text-sm text-[#999]"
    )}
  >
    Field Label<span className="text-[#D85A5A] ml-0.5">*</span>
  </Label>

  <Input
    className="h-12 border-[#DDD] bg-white focus:border-[#D85A5A] focus:ring-[#D85A5A]/20"
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
  />

  {/* Focus underline */}
  <div className={cn(
    "absolute bottom-0 left-0 h-0.5 bg-[#D85A5A] transition-all duration-300",
    isFocused ? "w-full" : "w-0"
  )} />
</div>
```

### Select Component

```jsx
<select className="h-12 w-full border border-[#DDD] rounded-lg px-4 bg-white text-[#1A1A1A] focus:border-[#D85A5A] focus:ring-2 focus:ring-[#D85A5A]/20 transition-all">
  <option value="" disabled className="text-[#999]">Select option</option>
  <option value="1">Option 1</option>
</select>
```

### Checkbox Group (Multi-select Pills)

```jsx
<div className="flex flex-wrap gap-2">
  {options.map((option) => (
    <button
      key={option}
      onClick={() => toggleOption(option)}
      className={cn(
        "px-4 py-2 rounded-full text-sm transition-all duration-200",
        selected.includes(option)
          ? "border-[#D85A5A] bg-[#D85A5A]/10 text-[#D85A5A]"
          : "border border-[#DDD] bg-white text-[#666] hover:border-[#CCC]"
      )}
    >
      {option}
    </button>
  ))}
</div>
```

### Toggle Switch

```jsx
<button
  onClick={() => setEnabled(!enabled)}
  className={cn(
    "relative w-12 h-6 rounded-full transition-colors duration-200",
    enabled ? "bg-[#D85A5A]" : "bg-[#DDD]"
  )}
>
  <span className={cn(
    "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200",
    enabled && "translate-x-6"
  )} />
</button>
```

### Consent Checkbox

```jsx
<label className="flex items-start gap-3 p-4 rounded-lg border border-[#EEE] cursor-pointer hover:bg-[#FAFAFA] transition-colors">
  <div className={cn(
    "w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
    checked
      ? "border-[#D85A5A] bg-[#D85A5A]"
      : "border-[#DDD]"
  )}>
    {checked && <Check className="w-3 h-3 text-white" />}
  </div>
  <span className="text-sm text-[#666]">Agreement text</span>
</label>
```

### Step Indicator

```jsx
<div className="flex items-center justify-between mb-8">
  {steps.map((step, index) => (
    <div key={index} className="flex items-center">
      {/* Step Circle */}
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all",
        index < currentStep
          ? "border-[#D85A5A] bg-[#D85A5A]/10 text-[#D85A5A]" // Completed
          : index === currentStep
          ? "border-[#D85A5A] bg-[#D85A5A] text-white" // Active
          : "border-[#DDD] bg-white text-[#999]" // Pending
      )}>
        {index + 1}
      </div>

      {/* Connector Line */}
      {index < steps.length - 1 && (
        <div className="flex-1 h-0.5 mx-2">
          <div className={cn(
            "h-full transition-all",
            index < currentStep ? "bg-[#D85A5A]" : "bg-[#EEE]"
          )} />
        </div>
      )}
    </div>
  ))}
</div>
```

### Payment Summary Box

```jsx
<div className="bg-white rounded-xl border-2 border-[#D85A5A]/20 p-6">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-8 rounded-full bg-[#D85A5A]/10 flex items-center justify-center">
      <CreditCard className="w-4 h-4 text-[#D85A5A]" />
    </div>
    <span className="font-medium text-[#1A1A1A]">Payment Summary</span>
  </div>

  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span className="text-[#666]">Item</span>
      <span className="text-[#1A1A1A]">$1,000</span>
    </div>
  </div>

  <div className="border-t border-[#EEE] mt-4 pt-4">
    <div className="flex justify-between items-center">
      <span className="font-medium text-[#1A1A1A]">Total</span>
      <span className="text-xl font-semibold text-[#D85A5A]">$1,000</span>
    </div>
  </div>
</div>
```

---

## 9. Responsive Design

### Breakpoints (Tailwind Default)

| Breakpoint | Min Width | Prefix |
|------------|-----------|--------|
| Mobile | 0px | (none) |
| Small | 640px | `sm:` |
| Medium | 768px | `md:` |
| Large | 1024px | `lg:` |
| XL | 1280px | `xl:` |
| 2XL | 1536px | `2xl:` |

### Common Responsive Patterns

```jsx
// Typography scaling
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// Grid columns
<div className="grid md:grid-cols-2 lg:grid-cols-3">

// Spacing scaling
<section className="py-24 md:py-32">
<div className="p-4 sm:p-6">

// Visibility
<nav className="hidden md:flex">
<button className="md:hidden">

// Flex direction
<div className="flex flex-col md:flex-row">

// Width
<div className="w-full md:w-auto">
```

### Mobile Menu Pattern

```jsx
{/* Mobile toggle */}
<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <X /> : <Menu />}
</button>

{/* Mobile menu */}
<div className={cn(
  "fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300",
  isOpen ? "translate-x-0" : "translate-x-full"
)}>
  {/* Menu content */}
</div>
```

---

## 10. CSS Utilities

### cn() Function (lib/utils.ts)

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Custom Utility Classes

```css
/* Gradient text */
.text-gradient-gold {
  background: linear-gradient(135deg, #D4AF37 0%, #F4E5B2 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Decorative line */
.line-gold {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-champagne-gold), transparent);
}

/* Hover elevation */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Glass effects */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Shimmer animation */
.shimmer-gold {
  background: linear-gradient(90deg, #D4AF37 0%, #F4E5B2 25%, #D4AF37 50%, #F4E5B2 75%, #D4AF37 100%);
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}
```

### Tailwind Theme Extensions

```css
@theme {
  --color-vera-crimson: #D85A5A;
  --color-deep-navy: #0F172A;
  --color-champagne-gold: #D4AF37;
  --color-warm-grey: #F8F7F4;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4A5568;
  --color-text-light: #E2E8F0;
}
```

---

## Quick Reference

### Essential Color Classes

```jsx
// Backgrounds
className="bg-white"
className="bg-[#FAFAFA]"
className="bg-[#F5F5F5]"
className="bg-[#D85A5A]"
className="bg-[#D85A5A]/10"

// Text
className="text-[#1A1A1A]"
className="text-[#666]"
className="text-[#888]"
className="text-[#999]"
className="text-[#D85A5A]"
className="text-white"

// Borders
className="border-[#EEE]"
className="border-[#DDD]"
className="border-[#D85A5A]"

// Hover states
className="hover:bg-[#C04A4A]"
className="hover:bg-[#F0F0F0]"
className="hover:border-[#DDD]"
className="hover:text-[#D85A5A]"
```

### Essential Transitions

```jsx
className="transition-all duration-200"
className="transition-all duration-300"
className="transition-all duration-500"
className="transition-colors duration-300"
className="transition-transform duration-300"
```

### Essential Focus States

```jsx
className="focus:border-[#D85A5A] focus:ring-2 focus:ring-[#D85A5A]/20"
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
```

---

## File Structure

```
project/
├── app/
│   ├── globals.css              # Global styles, CSS variables
│   └── [locale]/
│       ├── layout.tsx           # Root layout with fonts
│       └── page.tsx             # Page with sections
├── components/
│   ├── ui/                      # Base UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   └── sections/                # Page sections
│       ├── header.tsx
│       ├── hero-section.tsx
│       ├── speakers-section.tsx
│       └── ...
├── lib/
│   └── utils.ts                 # cn() utility
└── tailwind.config.ts           # Tailwind configuration
```

---

*This design system document captures the complete visual language of the Vera Summit 2026 website for reference when building similar projects.*
