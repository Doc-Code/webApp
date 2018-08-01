import React from 'react';
import { observer } from 'mobx-react';

import loginStore from '../../stores/loginStore';


const LoginPage = observer(() => (
  <div>
    <h1>
      {loginStore.userLogged ? 'Ура Вы аторизовались' : 'Вы не авторизованы.'}
      {console.log(loginStore.userLogged)}
    </h1>
    <button onClick={() => {
      loginStore.auth();
    }}
    >Получить accessId</button>
  </div>
));

export default LoginPage;
