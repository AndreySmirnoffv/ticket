import s from './CreateUser.module.scss';
import formS from '../Form.module.scss';
import Input from '../input/Input';
import axios from 'axios';
import { useState } from 'react';

const CreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const formHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return false;
    setLoading(true);
    const data = await Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
    console.log(data);
    await axios
      .post('http://localhost:8000/admin', data)
      .then(function (response) {
        console.log(response);
        setIsRegister(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(false);
  };

  const inputSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1) {
      setIsRegister(false);
    }
  }

  return (
    <form onSubmit={formHandler} className={`${formS.form} ${s.login}`}>
      <p className={formS.title}>Angaben zur Person</p>
      <Input inputHandle={inputSubmit} name='name' classNameCont={formS.cont} placeholder='Alex' topText='User Name' />
      <Input inputHandle={inputSubmit} name='email' classNameCont={formS.cont} placeholder='email@info.com' topText='Email*' />
      <Input inputHandle={inputSubmit} name='password' classNameCont={formS.cont} placeholder='dAmNmO!nAoBiZPi?' topText='Password*' />
      <Input inputHandle={inputSubmit} name='dateBert' classNameCont={formS.cont} placeholder='01.01.0001' topText='Date Of Birth*' />
      <Input
        inputHandle={inputSubmit}
        name='dateNow'
        classNameCont={formS.cont}
        placeholder={new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
        topText='Date Now*'
      />
      <Input options={['Herr', 'Frau']} name='gender' classNameCont={formS.cont} placeholder='Herr' topText='Geschlecht' />
      <button className={formS.btn}>{loading ? 'Loading...' : 'Registrieren'}</button>
      {isRegister && <p className={s.succes}>Account erstellt ☑</p>}
    </form>
  );
};

export default CreateUser;
