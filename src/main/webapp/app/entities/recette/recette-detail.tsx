import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './recette.reducer';

export const RecetteDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const recetteEntity = useAppSelector(state => state.recette.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="recetteDetailsHeading">Recette</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{recetteEntity.id}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{recetteEntity.title}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{recetteEntity.description}</dd>
          <dt>
            <span id="date">Date</span>
          </dt>
          <dd>{recetteEntity.date ? <TextFormat value={recetteEntity.date} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}</dd>
          <dt>User</dt>
          <dd>{recetteEntity.user ? recetteEntity.user.login : ''}</dd>
        </dl>
        <Button tag={Link} to="/recette" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/recette/${recetteEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default RecetteDetail;
