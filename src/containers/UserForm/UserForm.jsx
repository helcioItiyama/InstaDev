import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [ name, setName ] = useState('nome');
  const [ user, setUser ] = useState('nome de usuário');
  const [ email, setEmail ] = useState('examplo@exemplo.com');
  const [ url, setUrl ] = useState('');
  const [ submit, setSubmit ] = useState(false);

  const handleName = event => setName(event.target.value);
  const handleUser = event => setUser(event.target.value); 
  const handleEmail = event => setEmail(event.target.value);
  const handleUrl = event => setUrl(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmit(true);

    // const newUser = JSON.stringify({ name, user, email, url });

    // fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: newUser
    // }).then(() => setSubmit(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {url
                  ? <img src={url} alt={`foto de ${name}`}/>
                  : <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt=""/>
                }
              </div>
                <p className="user__name">{name}
                  <span>{user}</span>
                </p>
            </div>
          </div>
        </div>
      </section> 

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="write your name" onChange={handleName}/>

            <label htmlFor="user">Usuário</label>
            <input type="text" id="user" placeholder="write your username" onChange={handleUser}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="write your email" onChange={handleEmail}/>

            <label htmlFor="url">
              Url da Imagem de Perfil(use a url da imagem do LinkedIn)
            </label>
            <input type="url" id="url" placeholder="https://..." onChange={handleUrl}/>

            <button type="button" onClick={handleSubmit}>
              Cadastrar
            </button>

          </div>
        </div>
      </section>

      {submit && <SuccessMessage/>}
    </React.Fragment>
  );
};

export default UserForm;
