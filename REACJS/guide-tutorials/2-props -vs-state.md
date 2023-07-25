# Props và State trong Reactjs

Trong ReactJS, `props` và `state` là hai khái niệm quan trọng được sử dụng để quản lý dữ liệu và trạng thái của các thành phần (components). Đây là hai cơ chế để chuyển và lưu trữ thông tin giữa các thành phần và thay đổi giao diện khi cần thiết.

1. Props:

> `Props` (viết tắt của properties) là một cách để truyền dữ liệu từ một thành phần cha xuống các thành phần con. Các props là bất biến (immutable), điều này có nghĩa là không thể thay đổi giá trị của props từ bên trong thành phần con. Các props được truyền từ thành phần cha và không thể bị ảnh hưởng từ bên trong thành phần con. Điều này giúp đảm bảo tính rõ ràng và dễ dàng theo dõi dữ liệu chảy qua các thành phần.

Ví dụ sử dụng props trong một thành phần:

```jsx
P// Thành phần con
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
};

// Thành phần cha
const ParentComponent = () => {
  return <ChildComponent message="Xin chào, đây là thông điệp từ cha!" />;
};

```

2. State:

> `State` là một đối tượng trong thành phần React, dùng để lưu trữ các thông tin có thể thay đổi trong quá trình hoạt động của thành phần. Khác với props, state là biến có thể thay đổi và khi state thay đổi, React sẽ tự động cập nhật lại giao diện của thành phần để phản ánh sự thay đổi đó.

> State thường được khởi tạo trong phương thức `constructor` của thành phần hoặc bằng cách sử dụng `useState` (khi sử dụng Functional Components) hoặc `this.setState` (khi sử dụng Class Components).

Ví dụ sử dụng state trong một thành phần:

```jsx
import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0); // Khởi tạo state count với giá trị ban đầu là 0

  const increment = () => {
    setCount(count + 1); // Thay đổi giá trị state count khi người dùng click vào nút tăng
  };

  return (
    <div>
      <p>Giá trị hiện tại của count là: {count}</p>
      <button onClick={increment}>Tăng</button>
    </div>
  );
};

```
