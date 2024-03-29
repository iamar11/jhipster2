import './home.scss';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import ListRecette from 'app/modules/Recette/ListRecette';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Form from 'app/modules/Recette/Form'; // Remplacez 'chemin/vers' par le chemin réel

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="8">
        {/*<h1 className="display-4">Welcome, Java Hipster!</h1>*/}
        {/*<p className="lead">This is your homepage</p>*/}
        {account?.login ? (
          <div>
            {/*<Alert color="success">You are logged in as user &quot;{account.login}&quot;.</Alert>*/}
            {formOpen ? <Form user={account.id} /> : <ListRecette />}
          </div>
        ) : (
          <div>
            <Alert color="warning">
              If you want to
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
                sign in
              </Link>
              , you can try the default accounts:
              <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;) <br />- User (login=&quot;user&quot; and
              password=&quot;user&quot;).
            </Alert>

            <Alert color="warning">
              You don&apos;t have an account yet?&nbsp;
              <Link to="/account/register" className="alert-link">
                Register a new account
              </Link>
            </Alert>
          </div>
        )}
      </Col>
      <Col md="1">
        {account?.login ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Fab
              style={{
                backgroundColor: '#e57373',
                transform: formOpen ? 'rotate(45deg)' : 'none',
                transition: 'transform 0.3s ease',
              }}
              color="primary"
              aria-label="add"
              onClick={() => {
                setFormOpen(prev => {
                  return !prev;
                });
              }}
            >
              <AddIcon />
            </Fab>
          </div>
        ) : null}
      </Col>
    </Row>
  );
};

export default Home;
