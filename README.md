# **Pizza Menu System**

This is a full-stack application for managing menus, consisting of a **React frontend (`client`)** and a **Rails API backend (`server`)**. The application enables users to search for menus by name and sort them by price dynamically.

---

## **Features**

- Fetch a list of menus from the backend.
- Search menus by name.
- Sort menus by price (ascending or descending).
- React Query integration for optimized data fetching and caching.

---

## **Setup Instructions**

### **1. Prerequisites**

Ensure the following tools are installed on your machine:

- **Node.js** (>= 14.x)
- **npm** or **yarn**
- **Ruby** (>= 3.0.0)
- **Rails** (>= 8.0.0)

Make sure **port 3001** is available for the frontend.

---

### **2. Clone the Repository**

```bash
git clone <repository_url>
cd pizza-menu-system
```

---

### **3. Backend (`server`) Setup**

1. Navigate to the server folder:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   bundle install
   ```

3. Set up the database:

   ```bash
   rails db:create
   rails db:migrate
   rails db:seed
   ```

4. Start the Rails server:
   ```bash
   rails server
   ```
   The server will run at `http://localhost:3000`.

---

### **4. Frontend (`client`) Setup**

1. Open a new terminal window and navigate to the client folder:

   ```bash
   cd client
   ```

2. **Copy the environment variables file**:

   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the React development server:
   ```bash
   npm start
   ```
   The client will open at `http://localhost:3001`.

---

### **5. Running the Application**

1. **Start the backend first** (`server` at `http://localhost:3000`).
2. **Then start the frontend** (`client` at `http://localhost:3001`).

---

## **API Endpoints**

### **GET `/menus`**

Fetch all menus, optionally filtered and sorted:

- **Query Parameters**:
  - `search`: (optional) Filter by menu name.
  - `sort`: (optional) Sort by `price` (use "asc" or "desc").
