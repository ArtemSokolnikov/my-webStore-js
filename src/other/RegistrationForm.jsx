import React, { useState } from 'react';

const RegistrationForm = () => {
  // Создаем состояния для данных пользователя
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    password: ''
  });

  // Обработчик изменения данных формы
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ваша логика для отправки данных
    console.log('Отправка данных:', formData);
    // Здесь вы можете отправить данные на сервер или выполнить другие действия
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="country">Страна:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Адрес электронной почты:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
