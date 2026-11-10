# Govind S - Personal Portfolio

A modern, fully responsive personal portfolio website built to showcase my skills, professional experience, projects, and educational background. This single-page application (SPA) is designed with clean aesthetics and smooth user interactions.

## 🚀 Live Demo
[View Live Portfolio](https://govidegr8.github.io/portfolio)

## 💻 Tech Stack

*   **Frontend Library:** [React.js](https://reactjs.org/) (Create React App)
*   **Styling:** Vanilla CSS3 (Custom properties, Flexbox, CSS Grid, Media Queries for responsiveness)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Email Integration:** [EmailJS](https://www.emailjs.com/) (For the contact form)
*   **Carousels:** [Swiper](https://swiperjs.com/)

## 🛠️ Local Development Setup

To run this project on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and `npm` installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/govidegr8/portfolio.git
   cd portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
   *(Note: You can use `npm ci` if you want to install strictly from the `package-lock.json`)*

3. Start the development server:
   ```bash
   npm start
   ```
   The application will run locally at [http://localhost:3000](http://localhost:3000). The page will reload if you make edits. You will also see any lint errors in the console.

## 🚢 Deployment

This project is configured to automatically deploy to **GitHub Pages** using **GitHub Actions**.

### CI/CD Workflow
The CI/CD pipeline is defined in `.github/workflows/deploy.yml`. 
Whenever you push changes to the `main` branch:
1. The GitHub Action is triggered automatically.
2. It sets up Node.js, installs dependencies (`npm ci`), and builds the optimized production bundle (`npm run build`).
3. The build artifacts are automatically pushed to the `gh-pages` branch.

### GitHub Pages Configuration
If deploying this to a new repository for the first time, you must configure GitHub Pages to serve from the `gh-pages` branch:
1. Go to your repository **Settings** on GitHub.
2. Click on **Pages** in the left sidebar.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Set the branch to `gh-pages` and the folder to `/(root)`.
5. Click **Save**.

Your app will be available at `https://<your-github-username>.github.io/<repository-name>`. 
*(Make sure to update the `"homepage"` attribute in `package.json` if you fork or rename the repository).*

## Contact Form Configuration (EmailJS)
The form uses the current `@emailjs/browser` SDK behind a provider adapter in `src/services/contactService.js`. This keeps the form independent from the delivery provider and makes a future provider replacement localized to that service module.

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Add an email service and template. Use template variables matching the form fields: `name`, `email`, and `message`.
3. Copy `.env.example` to `.env.local` and fill in the values:
   ```text
   REACT_APP_EMAILJS_SERVICE_ID=service_xxx
   REACT_APP_EMAILJS_TEMPLATE_ID=template_xxx
   REACT_APP_EMAILJS_PUBLIC_KEY=public_xxx
   ```
4. Add your local and deployed domains to the EmailJS allowed origins configuration.

For GitHub Pages deployment, add the same three values as repository Actions secrets named `REACT_APP_EMAILJS_SERVICE_ID`, `REACT_APP_EMAILJS_TEMPLATE_ID`, and `REACT_APP_EMAILJS_PUBLIC_KEY`. The deployment workflow injects them only during the production build.

The public key is intended for browser use. Do not put a private provider API key in these variables or in frontend code.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
