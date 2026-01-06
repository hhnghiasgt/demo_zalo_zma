## Overview
- Tạo mini app trên Zalo Platform.
- Dựa trên website có sẵn chuyển đổi thành mini app.


## Mục tiêu

### Input: Web có sẵn

### Output: Tạo ra mini app từ web có sẵn

### Cơ chế

#### 1. Cấu trúc Bundle Mini App

```
mini-app/
├── index.html         # Entry point
├── app.js             # Main logic
├── app.css            # Styles
├── assets/            # Images, icons
└── manifest.json      # Metadata (optional)
```

#### 2. Các bước chuyển đổi

**Bước 1: Chuẩn bị source code web**
- Đảm bảo web app hoạt động độc lập, không phụ thuộc server-side rendering
- Sử dụng relative path cho tất cả tài nguyên (CSS, JS, images)
- Loại bỏ các dependency không cần thiết

**Bước 2: Tích hợp Zalo Mini App SDK**

Thêm SDK vào file HTML:
```html
<script src="https://sp.zalo.me/sdk/js/latest/zmp.js"></script>
```

**Bước 3: Khởi tạo Mini App**

```javascript
// Trong app.js
import { getAccessToken, getUserInfo } from 'zmp-sdk';

// Lấy access token
getAccessToken({});
```

**Bước 4: Điều chỉnh responsive UI**
- Sử dụng viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Test trên các kích thước màn hình khác nhau (320px - 428px)

#### 3. Các thay đổi cần thiết

| Yếu tố | Web App | Mini App |
|--------|---------|----------|
| Authentication | Cookie/Session | Zalo OAuth + Access Token |
| Navigation | Browser API | ZMP Navigation API |
| Storage | LocalStorage/SessionStorage | ZMP Storage API |
| Payment | Stripe/Banking | Zalo Pay |
| UI Framework | Bootstrap/Tailwind | ZUI hoặc custom CSS |

#### 4. Workflow

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Web Có Sẵn     │───▶│  Package Bundle │───▶│  Upload Zalo    │
│                 │    │  (ZIP file)     │    │  Platform       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

#### 5. Testing & Deployment

1. **Local Test**: Sử dụng Zalo DevTools để test local
2. **Upload**: Upload bundle qua Zalo Developer Portal
3. **Submit**: Submit để review và publish

#### 6. Limitations cần lưu ý

- Bundle size tối đa: 5MB
- Không sử dụng `eval()`, `Function()`
- Không có DOM access trực tiếp từ sandbox
- API calls cần qua Zalo proxy nếu cần CORS


## Document

- Triển khai nhanh việc chuyển đổi mini app: [document](https://miniapp.zaloplatforms.com/documents/intro/convert-web-app-to-zalo-mini-app/)

- Lấy access token: [document](https://developers.zalo.me/docs/social-api/tham-khao/user-access-token-v4)
