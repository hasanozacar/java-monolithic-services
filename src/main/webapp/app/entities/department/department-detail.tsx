import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './department.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const DepartmentDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const departmentEntity = useAppSelector(state => state.department.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="departmentDetailsHeading">
          <Translate contentKey="reactServiceApp.department.detail.title">Department</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{departmentEntity.id}</dd>
          <dt>
            <span id="departmentName">
              <Translate contentKey="reactServiceApp.department.departmentName">Department Name</Translate>
            </span>
          </dt>
          <dd>{departmentEntity.departmentName}</dd>
          <dt>
            <Translate contentKey="reactServiceApp.department.location">Location</Translate>
          </dt>
          <dd>{departmentEntity.location ? departmentEntity.location.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/department" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/department/${departmentEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default DepartmentDetail;
