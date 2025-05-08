# 🚀 SpaceX – Explore, Shop, and Learn Beyond Earth!

## 🔥 Overview

**SpaceX** is a futuristic, multi-functional web application inspired by the SpaceX platform. It integrates **launch data, astronaut info, careers, and Starlink insights** with a modern **e-commerce shopping experience**.

Built using **React + Vite**, the project leverages **Zustand, React Query, Mantine UI**, and advanced routing with `react-router-dom`. It also features secure authentication using **JWT**, real-time email contact support via **EmailJS**, and full user experience enhancements including profile management, protected routes, and deep links.

🚀 **Live Demo**: https://space-x-fawn.vercel.app/
📌 **GitHub Repository**: https://github.com/RaviSachinCodingLife/SpaceX.git

---

## ✨ Features

✅ **Secure Authentication** – JWT-based login system with session expiry (30 minutes).
✅ **Dynamic Launch Details** – SpaceX API integration with detail view via `slug` & `id`.
✅ **Career & Astronaut Pages** – Browse open opportunities and astronaut data.
✅ **Starlink Module** – Learn how Starlink is transforming global connectivity.
✅ **E-Commerce Store** – Add products to cart, checkout, and enter shipping info.
✅ **Profile Upload** – Users can upload/update profile photos and personal info.
✅ **Contact Us Form** – Send messages via SMTP using EmailJS.
✅ **Protected Routes** – Only accessible with valid auth tokens.
✅ **Deep Linking** – Share and access resource-specific URLs easily.
✅ **Signature Input** – Add handwritten signature at checkout with signature pad.
✅ **Responsive UI** – Clean, flexible design with Mantine UI.
✅ **Toast Notifications** – Real-time feedback on actions (success/error).
✅ **Dark Mode (Planned)** – Toggle themes for better accessibility.

---

## 🛠 Tech Stack

### **Frontend**

- React.js (Vite)
- TypeScript + Sass
- Mantine UI (Components, Hooks, Modals, Notifications)
- Zustand (State Management)
- React Query (Data Fetching)
- React Router DOM (Routing)
- EmailJS (Email Sending via Contact Form)

### **Backend Functionality**

- JWT Authentication
- Token-based session management
- Email sending via SMTP (EmailJS browser SDK)

### **Real-Time Features**

- Signature input via `react-signature-canvas`

---

## 📦 NPM Libraries Used

```json
"@emailjs/browser": "^4.4.1",
"@emotion/react": "^11.11.1",
"@mantine/carousel": "^6.0.11",
"@mantine/core": "^6.0.5",
"@mantine/dates": "^6.0.5",
"@mantine/dropzone": "^6.0.5",
"@mantine/form": "^6.0.5",
"@mantine/hooks": "^6.0.5",
"@mantine/modals": "^6.0.5",
"@mantine/notifications": "^6.0.5",
"@mantine/spotlight": "^6.0.5",
"@tanstack/react-query": "^4.28.0",
"@vitejs/plugin-react": "^4.0.4",
"jsonwebtoken": "^9.0.2",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.8.0",
"react-signature-canvas": "^1.0.6",
"sass": "^1.64.2",
"zustand": "^4.3.2"
```

---

## 📸 UI Preview (Add Screenshots)

- 🚀 Home & Launch Page
- 🧑‍🚀 Astronaut Info Page
- 🛍️ Shop & Checkout Page
- 🧾 Signature + Shipping Info
- 👤 Profile Upload Page
- 📩 Contact Form with EmailJS

---

## 🧠 Upcoming Features

🚧 Stripe Payment Integration – Secure real-time transactions.

🚧 Order Tracking – Track your delivery progress.

🚧 Wishlist – Save products to buy later.

🚧 Dark/Light Mode – User preference support.

🚧 Progressive Web App – Install and use offline.

🚧 Admin Dashboard – Manage users, products, and orders.

---

## 🚀 Contributing

Want to contribute and help evolve the project? PRs are welcome! 🛠️

```bash
# Contribute Guidelines:
1. Fork the repo
2. Create your branch: git checkout -b feature/YourFeature
3. Commit your changes: git commit -m "Add: YourFeature"
4. Push to your branch: git push origin feature/YourFeature
5. Open a Pull Request 🚀
```

```bash
spaceX/
│── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page views: Home, Launches, Shop, Contact, etc.
│   ├── api/                # API utilities (SpaceX, EmailJS)
│   ├── store/              # Zustand global state
│   ├── routes/             # Public & Protected Routes
│   └── utils/              # Helper functions, auth, slugify
│── public/                 # Static files
│── README.md               # Documentation
```

---

## 📫 Contact

**👨‍💻 Author:** Sachin Saurabh
**📧 Email:** [ravisachin36@gmail.com](mailto:ravisachin36@gmail.com)
**🌐 Portfolio:** [your-portfolio.com](https://linktr.ee/ravicodinglife)
**🐙 GitHub:** [@RaviSachinCodingLife](https://github.com/RaviSachinCodingLife)

---

Built with ❤️ using React, Vite, Zustand, Firebase, and Mantine.

---

## 🏆 Special Thanks

- **SpaceX API** – for open access to space launch data.
- **EmailJS** – for making email integration a breeze.
- **Mantine UI** – for beautiful, responsive components.
- **JWT** – for secure authentication.
- **React Query & Zustand** – for smooth data flow and state control.

---

## 📄 License

This project is licensed under the **\[RaviSachinCosingLife License]**.
