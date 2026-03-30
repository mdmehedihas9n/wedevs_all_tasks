# wedevs_tasks

# Playwright Test Automation - SignUp, Login, and Profile Update and add address

## 📌 Overview
This project contains automated test scripts written in **Playwright (JavaScript)** to verify key user flows on the **Farazi** web application.

The following test scenarios are covered:
1. **Sign Up** – New user account creation with all required details.
2. **Login** – Logging in with valid credentials.
3. **Profile Update** – Editing account details (First Name, Last Name, Mobile, Gender) and saving changes.
4. **Address module** – Add New Address (First Name, Last Name, Country (e.g., Bangladesh), Address, Division (e.g., Dhaka). City (e.g., Dhaka City), Optional: Apartment, Postal Code, Phone, Address Label Mark as and saving changes.
---

## 🚀 Test Flow
### 1. Sign Up module
- Navigate to the signup page.
- Fill in first name, last name, email, password, and confirm password.
- Accept updates checkbox.
- Click **Create Account**.

### 2. Login module
- Go to login page.
- Enter valid email and password.
- Click **Login** and verify successful login.

### 3. Profile Update module
- Navigate to **Account Details**.
- Update **First Name**, **Last Name**, **Mobile Number**, and **Gender**.
- Click **Save Changes** and verify success message.

### 4. Address module
- Navigate to **Addresses** from the left sidebar.
- Click **Add New Address**.
- Fill in the following fields:
  - First Name
  - Last Name
  - Country (e.g., Bangladesh)
  - Address
  - Division (e.g., Dhaka)
  - City (e.g., Dhaka City)
  - Optional: Apartment, Postal Code, Phone, Address Label
- Mark as **Default Shipping Address** (optional).
- Click **Save**.
- Verify that the address is saved and visible in the address list.
---

## 🛠 Technology Used
- **Playwright** (JavaScript)
- Node.js

---

## ▶️ How to Run
1. Install dependencies:
   ```bash
   npm install
