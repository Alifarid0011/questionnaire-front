# Delegation Panel

# React Vite TypeScript Starter

# A starter project built with **React + Vite + TypeScript** and managed with **pnpm**.

## 🚀 Features

- ⚡️ Vite for blazing fast development
- ⚛️ React 19
- 📘 TypeScript support
- 📦 pnpm package manager

## 📦 Prerequisites

Before running this project, make sure the following tools are installed on your system:

### 1. Install Node.js

Node.js is a JavaScript runtime environment that allows you to run React apps locally.

- Download and install **LTS version** from [https://nodejs.org](https://nodejs.org)
- After installation, verify it by running:

```bash
node -v
npm -v

```

## 🔧 Installation & Setup

### 1. Setup SSH Key (Optional)

To access the repository via SSH, you need to create an SSH key and add it to your **git.2rado.xyz** account.

```bash
# Generate a new SSH key (press Enter for defaults)
ssh-keygen

# Copy the public key to clipboard
cat ~/.ssh/id_rsa.pub
```

### 2. Clone and Install and Start App

```bash
git clone git <your-repo-url>
pnpm i
pnpm dev

```

## 📂 Project Structure

src/
┣ assets/ # Static assets
┃ ┣ image/ # Images (e.g. png, jpg)
┣ components/
┃ ┣ layouts/ # Layout-related components (e.g. Navbar, Sidebar, Footer)
┃ ┣ pages/ # Components used inside specific pages
┃ ┗ ui/ # Reusable UI components (buttons, inputs, etc.)
┣ constants/ # Application constants (config, enums, static values)
┣ guards/ # Page guards / wrappers to protect routes (e.g. ProtectedRoute, PublicRoute)
┣ hooks/ # Custom React hooks
┣ layouts/ # Project-wide layout components (wrappers for pages)
┣ libs/ # Shared libraries
┣ pages/ # Route pages
┣ providers/ # React Context providers
┣ services/ # API calls for different pages / features
┣ types/ # TypeScript types and interfaces
┣ utils/ # Utility/helper functions
┣ env.d.ts # TypeScript environment variable declarations
┣ index.css # Base CSS (including Tailwind)
┣ main.tsx # Entry point of the application
┣ router.tsx # Application routes
