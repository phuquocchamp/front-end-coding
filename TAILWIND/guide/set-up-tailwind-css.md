## Cài đặt Tailwindcss vào project

1. Khởi tạo file *package.json* chứa các setup components .

```js
npm init -y
```

2. Cài đặt các thư viện, phụ thuộc cần thiết.

```javascript
npm install -D tailwindcss postcss autoprefixer vite
```

3. Khởi tạo tệp cấu hình config cho framework.

```js
npx tailwindcss init -p
```

4. đặt tên cho scripts.

> Sửa đoạn code trong `"scripts: ...` thành `"scripts": { "dev": "vite" },` như đoạn code json bên dưới.

```json
{
  "name": "web-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vite"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.6"
  }
}

```

5. Chỉ thị các components cần thiết.

> Tạo một file tailwind.css khai báo các components cần thiết để sử dụng.

css/tailwind.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Import components trên vào project

```js
npx tailwindcss-cli build css/tailwind.css -o build/tailwind.css
```

> Trong đó : c**ss/tailwind.css** là file chứa các components cần thiết (ở bước 5).

> **build/tailwind.css** sẽ được tạo để chứa các css uitilities của tailwindcss.

7. Chạy Project.

```json
npm run dev
```
