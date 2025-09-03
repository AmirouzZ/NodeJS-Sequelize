# 🚀 Node.js Sequelize Boilerplate

A robust and scalable Node.js API boilerplate using Sequelize ORM with MySQL, featuring authentication, pagination, and best practices.

## ✨ Features

- **Sequelize ORM** - Advanced database management with migrations and seeders
- **JWT Authentication** - Secure token-based authentication system
- **Role-Based Access Control** - User and admin roles with permissions
- **API Pagination** - Efficient data retrieval with page limits
- **Error Handling** - Comprehensive error management middleware
- **Validation** - Request validation using Joi or Express Validator
- **Environment Configuration** - Multiple environment support (dev, production, test)
- **API Documentation** - Well-documented endpoints

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Sequelize** - Promise-based ORM for MySQL
- **MySQL** - Relational database
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/AmirouzZ/NodeJS-Sequelize.git
cd NodeJS-Sequelize
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
cp .env.example .env
# Configure your database and JWT settings in .env
```

4. **Database Configuration**
```bash
# Create MySQL database
mysql -u root -p -e "CREATE DATABASE node_sequelize_db;"

# Run migrations
npx sequelize-cli db:migrate

# (Optional) Run seeders
npx sequelize-cli db:seed:all
```

5. **Start the application**
```bash
# Development
npm run dev

# Production
npm start
```

## 🔧 Environment Variables

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=node_sequelize_db
DB_USER=root
DB_PASS=your_password

JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=24h

NODE_ENV=development
PORT=3000
```

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Users (Admin)
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID (admin only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

### Posts (Example Resource)
- `GET /api/posts` - Get all posts (with pagination)
- `POST /api/posts` - Create new post (authenticated)
- `GET /api/posts/:id` - Get post by ID
- `PUT /api/posts/:id` - Update post (owner/admin)
- `DELETE /api/posts/:id` - Delete post (owner/admin)

## 🗄️ Database Structure

```
models/
├── User.js          # User model with authentication
├── Post.js          # Post model (example resource)
├── Role.js          # Role-based permissions
└── index.js         # Sequelize model associations
```

## 📁 Project Structure

```
src/
├── config/          # Database and app configuration
├── controllers/     # Route controllers
├── models/          # Sequelize models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── migrations/      # Sequelize migrations
├── seeders/         # Database seeders
├── utils/           # Utility functions
└── validators/      # Request validation
```

## 🔐 Authentication

Protected routes require JWT token in header:
```http
Authorization: Bearer <your_jwt_token>
```

## 🚀 Example Usage

```javascript
// User Registration
const response = await fetch('/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user'
  })
});
```

## 📝 Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run test       # Run tests
npm run migrate    # Run database migrations
npm run seed       # Run database seeders
```
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

**AmirouzZ** - [GitHub Profile](https://github.com/AmirouzZ)

---

**⭐ If you find this boilerplate useful, please give it a star on GitHub!**
