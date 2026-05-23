# 🐾 PetHaven - Complete Pet Adoption Platform

PetHaven is a modern, responsive full-stack platform designed to simplify pet adoptions. It connects pet lovers with shelters and individual pet owners looking to find permanent homes for dogs, cats, and other pets.

## 🔗 Live Link
Visit the live site here: **[PetHaven Live Platform](https://cat-10-kx7m.vercel.app/)**

---

## ✨ Key Features

### 🔍 For Adopters
* **Smart Grid Directory:** Browse cats and dogs with real-time updates.
* **Advanced Filters:** Search by name, filter by species/category, and sort by adoption fees (Lowest to Highest / Highest to Lowest).
* **Interactive Requests:** Submit adoption requests through a seamless modal, specifying target pickup dates and personal messages.

### 💼 For Pet Owners & Shelters
* **Full CRUD Management:** Easily Add, View, Update (Patch), and Delete pet listings.
* **Unified Dashboard:** Track all incoming requests for your listed pets in one place.
* **Real-time Approval System:** Accept or Reject adoption applications instantly with smooth loading states.

### ⚙️ Core Technical Capabilities
* **Secure Authentication:** Social login (Google) and custom email/password setup powered by Better-Auth.
* **Theme Toggle:** Fully functional Dark and Light mode support.
* **100% Responsive:** Pixel-perfect design for Mobile, Tablet, and Desktop screens.

---

## 📦 Tech Stack & Package Manifest

### 💻 Client Side (Frontend)
* **Framework:** Next.js (App Router Engine)
* **Authentication:** better-auth
* **UI Components:** @heroui/react & @daisyui
* **Styling Engine:** Tailwind CSS
* **Notifications:** react-toastify
* **Icons:** lucide-react & @gravity-ui/icons

### 🗄️ Server Side (Backend)
* **Runtime & Framework:** Node.js with Express.js
* **Database:** MongoDB (Native Driver)
* **Security & Tokens:** jose-cjs & jsonwebtoken (JWKS verification)
* **Configuration:** cors & dotenv

---

## 🛣️ Application & API Routes

| Endpoint / Route | Access | Operational Intent |
| :--- | :--- | :--- |
| `/` | Public | Landing hub, site features, and trending pet grids. |
| `/all-cats` | Public | Full catalog with active filtering, search, and sorting. |
| `/all-cats/:id` | Private | Detailed pet profiles with adoption request portals. |
| `/add-cat` | Private | Form to onboard and list new pets. |
| `/dashboard/my-listings` | Private | Owner panel to manage active listings and view applicant requests. |
| `/dashboard/my-requests` | Private | Adopter panel to track pending, approved, or rejected applications. |
| `/login` / `/register` | Public | Secure gateways for user authentication. |

---

## 🚀 Local Installation Guide

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### Steps to Run Locally
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Sajibpurno/CAT-10]

👤 Author:
Designed and Engineered with 🐾 by Shajib Chanda.