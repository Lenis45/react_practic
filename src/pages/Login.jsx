import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';



const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1> Страница для регистрации </h1>
            <form onSubmit={login}> 
                <MyInput input type="text" placeholder='Введите логин'/>
                <MyInput input type="password" placeholder='Введите пароль'/>
                <MyButton> Войти </MyButton>
            </form>
        </div>
    );
};

export default Login;