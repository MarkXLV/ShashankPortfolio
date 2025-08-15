# Shashank Tiwari - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Professional Layout**: Clean, modern design optimized for recruiters
- **Resume Integration**: Direct PDF viewing and download
- **Project Showcase**: Highlighted projects with tech stacks and impact metrics
- **Contact Information**: Easy access to professional links and contact details

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── projects/       # Projects page
│   │   ├── resume/         # Resume page
│   │   └── contact/        # Contact page
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   └── globals.css         # Global styles
        ├── content/                 # Content data
        ├── resume.json             # Resume data structure
├── public/                  # Static assets
│   └── ShashankTiwari_Resume.pdf  # Resume PDF
└── package.json
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

- **Home**: Hero section with introduction and quick stats
- **About**: Bio, skills matrix, and professional journey
- **Projects**: Showcase of key projects with tech stacks
- **Resume**: PDF viewing and download functionality
- **Contact**: Contact information and professional links

## 🎯 Customization

### Adding Your Resume
1. Place your resume PDF in the `public/` folder
2. Update the filename in `src/app/resume/page.tsx` if needed

### Updating Content
- **Resume data**: Edit `resume.json`
- **Projects**: Update the projects array in `src/app/projects/page.tsx`
- **Personal info**: Modify components and pages as needed

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Component styles are in individual component files

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- Build the project: `npm run build`
- Deploy the `out/` folder to any static hosting service

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (recommended)

## 📞 Support

For questions or issues:
- Email: tiwari.shashank.85911@gmail.com
- GitHub: [MarkXLV](https://github.com/MarkXLV)
- LinkedIn: [Shashank Tiwari](https://www.linkedin.com/in/shashank-tiwari-916234244)

---

Built with ❤️ by Shashank Tiwari
