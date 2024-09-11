# ReachInbox Assignment Web App

This project is a functional web application built using the provided design and APIs. It is implemented with React.js, Tailwind CSS, Vite.js, and TypeScript, and deployed on Vercel for hosting and continuous deployment.

## Features

1. **Login Page**: Implemented based on the provided design. The user can log in via Google and is redirected to the onebox screen upon successful login.
2. **Onebox Data Fetching**: Fetch and display data using API integration.
   - List of threads: `/onebox/list`
   - View a specific thread: `GET /onebox/:thread_id`
   - Delete a thread: `DELETE /onebox/:thread_id`
3. **Keyboard Shortcuts**:
   - Press “D” to delete a thread.
   - Press “R” to open the reply box.
4. **Custom Text Editor**: Includes a "SAVE" and "Variables" button in the editor.
5. **Reply Functionality**: Allows replying to a thread with `POST /reply/:thread_id` using email, subject, and body data.
6. **Light and Dark Mode**: Implemented theme switching between light and dark modes.

## Technologies Used

- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling components using utility-first CSS.
- **Vite.js**: For fast development and optimized production builds.
- **TypeScript**: To ensure type safety in the project.
- **Vercel**: The frontend application is deployed on Vercel.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
4. Visit the local host: http://localhost:5173.
   
API Documentation
For detailed API documentation: [link](https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27)

Design File
Figma Design: [link](https://www.figma.com/design/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?node-id=0-1&node-type=canvas&t=3wl72qKf3b3wthor-0).

### Credits
Created by Chandan B, a student of Sahyadri College of Engineering & Management, Mangalore.
This project is a reflection of my growing passion for web development and problem-solving, and I hope it showcases my abilities to build efficient, user-friendly applications.
