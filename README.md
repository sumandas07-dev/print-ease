```text
backend/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   ├── multer.js
│   │   └── env.js
│   │
│   ├── modules/
│   │
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.service.js
│   │   │   ├── auth.routes.js
│   │   │   ├── auth.validation.js
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── user/
│   │   │   ├── user.controller.js
│   │   │   ├── user.service.js
│   │   │   ├── user.routes.js
│   │   │   └── user.validation.js
│   │   │
│   │   ├── shop/
│   │   │   ├── shop.controller.js
│   │   │   ├── shop.service.js
│   │   │   ├── shop.routes.js
│   │   │   └── shop.validation.js
│   │   │
│   │   ├── order/
│   │   │   ├── order.controller.js
│   │   │   ├── order.service.js
│   │   │   ├── order.routes.js
│   │   │   └── order.validation.js
│   │   │
│   │   ├── service/
│   │   │   ├── service.controller.js
│   │   │   ├── service.service.js
│   │   │   └── service.routes.js
│   │   │
│   │   ├── upload/
│   │   │   ├── upload.controller.js
│   │   │   ├── upload.service.js
│   │   │   └── upload.routes.js
│   │   │
│   │   ├── payment/
│   │   │   ├── payment.controller.js
│   │   │   ├── payment.service.js
│   │   │   └── payment.routes.js
│   │   │
│   │   ├── address/
│   │   │   ├── address.controller.js
│   │   │   ├── address.service.js
│   │   │   └── address.routes.js
│   │   │
│   │   ├── delivery/
│   │   │   ├── delivery.controller.js
│   │   │   ├── delivery.service.js
│   │   │   └── delivery.routes.js
│   │   │
│   │   └── admin/
│   │       ├── admin.controller.js
│   │       ├── admin.service.js
│   │       └── admin.routes.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Shop.js
│   │   ├── Order.js
│   │   ├── Document.js
│   │   ├── Address.js
│   │   ├── Service.js
│   │   └── Payment.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── role.js
│   │   ├── upload.js
│   │   ├── errorHandler.js
│   │   ├── notFound.js
│   │   └── validate.js
│   │
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   ├── generateToken.js
│   │   └── calculatePrice.js
│   │
│   ├── app.js
│   └── server.js
│
├── uploads/
│
├── .env
├── .gitignore
├── package.json
└── README.md
```