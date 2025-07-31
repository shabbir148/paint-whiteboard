# 🎨 Paint Studio - React TypeScript Drawing Application

A modern, interactive paint application built with React and TypeScript. Create digital artwork with intuitive drawing tools, customizable brushes, and a clean user interface.

![Paint Studio Screenshot](https://via.placeholder.com/800x400/f0f0f0/333333?text=Paint+Studio+Interface)

## ✨ Features

### 🖌️ **Drawing Tools**
- **Pencil Tool**: Freehand drawing with customizable colors
- **Eraser Tool**: Remove parts of your artwork
- **Rectangle Tool**: Draw geometric shapes
- **Brush Size Control**: Adjustable brush size from 1px to 50px

### 🎨 **Color System**
- **Color Palette**: Pre-defined color selection grid
- **Custom Color Picker**: HTML5 color input for unlimited colors
- **Real-time Color Preview**: See your selected color instantly

### 🛠️ **Toolbar Actions**
- **Undo**: Revert last drawing action (coming soon)
- **Clear Canvas**: Start fresh with a clean slate
- **Save Artwork**: Download your creation as PNG image

### 🔧 **Technical Features**
- **Responsive Design**: Works on desktop and tablet devices
- **TypeScript Support**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable React components
- **Real-time Drawing**: Smooth drawing experience with mouse events

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/paint-studio.git
   cd paint-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

### Build for Production
```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
paint-studio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── CanvasArea/
│   │   │   └── index.tsx
│   │   ├── SideBar/
│   │   │   └── index.tsx
│   │   ├── BrushSelector.tsx
│   │   ├── ColorPicker.tsx
│   │   └── Toolbar.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles.css
├── package.json
├── tsconfig.json
└── README.md
```

## 🧩 Component Architecture

### **App Component**
Main application component that manages global state and coordinates between sidebar and canvas.

```typescript
interface AppState {
  selectedColor: string;
  selectedBrush: string;
  brushSize: number;
}
```

### **SideBar Component**
Container for all drawing tools and controls.

### **CanvasArea Component**
Interactive drawing surface with mouse event handling.

### **BrushSelector Component**
Tool selection and brush size control.

### **ColorPicker Component**
Color palette and custom color selection.

### **Toolbar Component**
Action buttons for undo, clear, and save operations.

## 🎯 Usage Guide

### Getting Started
1. **Select a Tool**: Choose between Pencil, Eraser, or Rectangle from the brush selector
2. **Pick a Color**: Click on a color from the palette or use the custom color picker
3. **Adjust Brush Size**: Use the slider to set your preferred brush size
4. **Start Drawing**: Click and drag on the canvas to create your artwork

### Drawing Tips
- **Pencil Tool**: Click and drag to draw continuous lines
- **Eraser Tool**: Remove parts of your drawing by clicking and dragging
- **Rectangle Tool**: Click and drag to create rectangle shapes
- **Size Control**: Larger brush sizes create thicker lines

### Saving Your Work
- Click the **Save** button in the toolbar to download your artwork as a PNG file
- Use **Clear** to start over with a blank canvas

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript for better development experience
- **Lucide React**: Beautiful, customizable icons
- **HTML5 Canvas**: Native drawing API for smooth performance
- **CSS3**: Modern styling with flexbox and grid layouts

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0"
  }
}
```

## 🔮 Roadmap

### Version 2.0 Features
- [ ] **Undo/Redo System**: Complete history management
- [ ] **Layer Support**: Multiple drawing layers
- [ ] **More Brush Types**: Spray, blur, and texture brushes
- [ ] **Shape Tools**: Circle, line, and polygon tools
- [ ] **Image Import**: Load and edit existing images
- [ ] **Touch Support**: Mobile and tablet compatibility

### Version 3.0 Features
- [ ] **Collaboration**: Real-time collaborative drawing
- [ ] **Cloud Save**: Save projects to the cloud
- [ ] **Animation**: Basic frame-by-frame animation
- [ ] **Filters**: Apply filters and effects to artwork

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Add proper type definitions for new components
- Write clean, readable code with comments
- Test your changes thoroughly
- Update documentation as needed

## 🐛 Bug Reports

Found a bug? Please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Browser and OS information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Lucide](https://lucide.dev/) for beautiful icons
- [React](https://reactjs.org/) team for the amazing framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- The open-source community for inspiration and tools

## 📞 Support

- **Documentation**: Check this README and code comments
- **Issues**: [GitHub Issues](https://github.com/yourusername/paint-studio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/paint-studio/discussions)

---

Made with ❤️ by [Your Name](https://github.com/yourusername)

⭐ **Star this repo if you found it helpful!**