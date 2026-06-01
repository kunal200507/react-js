# WriteIt — Blog App

A full-stack blogging web app where users can sign up, write rich-text posts, and browse blogs from the community. Built with React and powered by [Appwrite](https://appwrite.io) for authentication and database storage.

## Features

- **User authentication** — Sign up, log in, and log out via Appwrite
- **Create posts** — Write blogs with a TinyMCE rich-text editor, title, description, and image URL
- **Read posts** — View individual posts and browse the latest blogs on the home page
- **Your posts** — Logged-in users see their own posts on the home page
- **All posts** — Public page listing blogs from all users
- **Update posts** — Edit existing blog content (logged-in users)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 7 |
| Routing | React Router 7 |
| State | Redux Toolkit |
| Styling | Tailwind CSS 4 |
| Forms | React Hook Form |
| Editor | TinyMCE React |
| Backend | Appwrite (Auth + Databases) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- An [Appwrite](https://cloud.appwrite.io) project (Cloud or self-hosted)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd BlogApp2
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root (see [Environment variables](#environment-variables)).

4. Set up Appwrite (see [Appwrite setup](#appwrite-setup)).

5. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_TABLE_ID=your_collection_id
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
```

| Variable | Description |
|----------|-------------|
| `VITE_APPWRITE_PROJECT_ID` | Appwrite project ID |
| `VITE_APPWRITE_DATABASE_ID` | Database ID for blog posts |
| `VITE_APPWRITE_TABLE_ID` | Collection ID for posts |
| `VITE_APPWRITE_ENDPOINT` | Appwrite API endpoint URL |

> Do not commit `.env` to version control. Add it to `.gitignore` if it is not already ignored.

## Appwrite Setup

1. Create a project in the [Appwrite Console](https://cloud.appwrite.io).
2. Enable **Email/Password** authentication under Auth → Settings.
3. Create a **Database** and a **Collection** for posts with these attributes:

   | Attribute | Type | Required |
   |-----------|------|----------|
   | `topic` | String | Yes |
   | `description` | String | Yes |
   | `content` | String | Yes |
   | `imageUrl` | String | Yes |
   | `userId` | String | Yes |
   | `name` | String | Yes |

4. Set collection permissions so authenticated users can create/read/update/delete their documents, and guests can read posts (adjust based on your needs).
5. Copy your project ID, database ID, collection ID, and endpoint into `.env`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
BlogApp2/
├── src/
│   ├── Pages/           # Route pages (Home, Login, SignUp, Post, etc.)
│   ├── components/      # Reusable UI (Header, Postcard, Editor, etc.)
│   ├── appwrite/        # Appwrite auth & database services
│   ├── store/           # Redux store and auth slice
│   ├── App.jsx          # Root layout with auth bootstrap
│   ├── main.jsx         # Entry point and routes
│   └── appwrite.js      # Appwrite env config
├── public/
├── .env                 # Local environment (not committed)
└── package.json
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home — landing page or your posts when logged in |
| `/login` | Log in |
| `/signup` | Create an account |
| `/addpost` | Create a new blog post |
| `/post/:slug` | View a single post |
| `/updatepost/:slug` | Edit a post |
| `/allposts` | Browse all posts |

## License

This project is private. Add a license here if you plan to open-source it.
