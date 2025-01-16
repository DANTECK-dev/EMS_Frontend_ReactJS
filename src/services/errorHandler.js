export const handleAxiosError = (err, navigate) => {
    if (err.response) {
        // Сервер ответил с ошибкой
        navigate(`/error/${err.response.status}`);
    } else if (err.request) {
        // Запрос был отправлен, но ответа не получено
        console.error('No response received:', err.request);
        navigate('/error/500'); // Перенаправляем на страницу с ошибкой
    } else {
        // Произошла другая ошибка
        console.error('Error:', err.message);
        navigate('/error/unknown'); // Универсальная страница ошибки
    }
};