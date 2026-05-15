# TasKify

A lightweight, file-based task management application built with **Node.js** and **Express.js**. TasKify provides a simple yet powerful way to create, read, update, and delete tasks with persistent local file storage.

## 🚀 Features

- **Create Tasks** - Generate new tasks with a title and detailed description
- **Read Tasks** - View all tasks or read detailed content of individual tasks
- **Update Tasks** - Edit task titles and content with ease
- **Delete Tasks** - Remove tasks that are no longer needed
- **Local Storage** - All data is stored locally in text files for simplicity and portability
- **Responsive UI** - Clean and intuitive interface built with EJS templates
- **RESTful API** - Custom routes for seamless task management operations

## 📋 Tech Stack

- **Backend**: Node.js with Express.js v5.2.1
- **Templating**: EJS v5.0.2 for dynamic page rendering
- **Storage**: Local file system (fs module)
- **Development**: Nodemon for hot-reload during development
- **Runtime**: CommonJS module system

## 📁 Project Structure

```
TasKify/
├── index.js                 # Main server file with all routes
├── package.json             # Project dependencies and metadata
├── package-lock.json        # Locked dependency versions
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── files/                  # Local task storage directory
│   ├── kuchni.txt
│   ├── new.txt
│   ├── someMongoissues.txt
│   └── ...                 # Other task files
├── public/                 # Static assets
│   ├── images/            # Image files
│   ├── javascript/        # Client-side JavaScript
│   └── stylesheets/       # CSS styles
└── views/                 # EJS templates
    ├── index.ejs          # Main task listing page
    ├── edit.ejs           # Task editing interface
    └── readmore.ejs       # Detailed task view
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhanajaysingh/TasKify.git
   cd TasKify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   # Production mode
   npm start
   
   # Development mode with auto-reload
   npx nodemon index.js
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📚 API Routes

### GET `/`
Retrieves and displays all tasks in the system.
- **Response**: Renders `index.ejs` with list of tasks
- **Status**: 200 OK

### POST `/create`
Creates a new task with the provided title and details.
- **Body Parameters**:
  - `title` (string): Task title
  - `details` (string): Task description
- **Response**: Redirects to home page
- **Example**:
  ```json
  {
    "title": "Buy Groceries",
    "details": "Milk, eggs, bread, and vegetables"
  }
  ```

### GET `/readmore/:filename`
Retrieves the full content of a specific task.
- **URL Parameters**:
  - `filename` (string): Name of the task file
- **Response**: Renders `readmore.ejs` with task content
- **Status**: 200 OK or 404 if file not found

### GET `/edit/:filename`
Loads the edit form for a specific task.
- **URL Parameters**:
  - `filename` (string): Name of the task file
- **Response**: Renders `edit.ejs` with editable task
- **Status**: 200 OK or 404 if file not found

### POST `/edit`
Updates an existing task with new title and content.
- **Body Parameters**:
  - `previousName` (string): Current filename
  - `newName` (string): Updated filename
- **Response**: Redirects to home page
- **Status**: 200 OK or 404 if file not found

### GET `/delete/:filename`
Permanently deletes a task file.
- **URL Parameters**:
  - `filename` (string): Name of the task file
- **Response**: Redirects to home page
- **Status**: 200 OK or 404 if file not found

## 💾 Data Storage

TasKify uses the local file system for data persistence. All tasks are stored as `.txt` files in the `./files` directory. Each file's name is derived from the task title (spaces removed), making it easy to identify and manage tasks directly from the file system.

### Example Task Files:
- `BuyGroceries.txt` - Created from title "Buy Groceries"
- `ProjectDeadline.txt` - Created from title "Project Deadline"

## 🎨 User Interface

The application features a clean and intuitive interface with three main views:

- **index.ejs** - Home page displaying all tasks with options to view, edit, or delete
- **readmore.ejs** - Full-page view of a task with navigation controls
- **edit.ejs** - Form interface for modifying task titles and content

Static assets (CSS, JavaScript, images) are located in the `public/` directory for easy customization and styling.

## 🚀 Development

To run the project in development mode with automatic server restarts:

```bash
npx nodemon index.js
```

The server runs on `http://localhost:3000` and will automatically reload whenever you modify the code.

## 📝 Usage Example

1. **Create a new task**
   - Navigate to the home page
   - Fill in the task title and details
   - Click "Create" to save

2. **View a task**
   - Click "Read More" on any task to view full details

3. **Edit a task**
   - Click "Edit" on any task
   - Modify the title and content
   - Save changes

4. **Delete a task**
   - Click "Delete" on any task to remove it permanently

## 🔒 Security Notes

- **File Validation**: Currently minimal input validation. Consider adding sanitization for production use.
- **Path Traversal**: Implement file path validation to prevent directory traversal attacks.
- **Error Handling**: Enhanced error handling is recommended for production deployment.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs and issues
- Submit pull requests with improvements
- Suggest new features

## 📄 License

This project is licensed under the ISC License. See `package.json` for details.

## 👨‍💻 Author

**Dhananjay Singh**  
GitHub: [@Dhanajaysingh](https://github.com/Dhanajaysingh)

## 📞 Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/Dhanajaysingh/TasKify/issues).

---

**Happy task managing! 🎯**
