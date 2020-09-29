import React, { useState } from 'react';
import { Alert } from 'reactstrap';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap'; // core components

import axios from '../../config/axios';
import { withRouter } from 'react-router-dom';

function Register(props) {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  const onFinish = async (event) => {
    try {
      event.preventDefault();
      const body = {
        username: event.target[0].value,
        password: event.target[1].value,
      };
      const res = await axios.post('/register', body);
      console.log(res.data);
    } catch (error) {
      return (
        <Alert
          color='info'
          className='alert-with-icon'
          isOpen={setVisible}
          toggle={onDismiss}
        >
          <span data-notify='icon' className='now-ui-icons ui-1_bell-53'></span>
          <span data-notify='message'>${error}</span>
        </Alert>
      );
    }
    props.history.push('/login');
  };

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add('register-page');

    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('register-page');
    };
  }, []);

  return (
    <>
      <div className='page-header header-filter' filter-color='blue'>
        <div
          className='page-header-image'
          style={{
            backgroundImage: 'url(' + require('assets/img/bg16.jpg') + ')',
          }}
        ></div>
        <div className='content'>
          <div className='register-page'>
            <Container>
              <Row>
                <Col className='ml-auto mr-auto' md='6' lg='4'>
                  <div className='info info-horizontal'>
                    <div className='icon icon-info'>
                      <i className='now-ui-icons media-2_sound-wave'></i>
                    </div>
                    <div className='description'>
                      <h5 className='info-title'>Marketing</h5>
                      <p className='description'>
                        We've created the marketing campaign of the website. It
                        was a very interesting collaboration.
                      </p>
                    </div>
                  </div>
                  <div className='info info-horizontal'>
                    <div className='icon icon-info'>
                      <i className='now-ui-icons media-1_button-pause'></i>
                    </div>
                    <div className='description'>
                      <h5 className='info-title'>Fully Coded in React 16</h5>
                      <p className='description'>
                        We've developed the website with React 16 and CSS3. The
                        client has access to the code using GitHub.
                      </p>
                    </div>
                  </div>
                  <div className='info info-horizontal'>
                    <div className='icon icon-info'>
                      <i className='now-ui-icons users_single-02'></i>
                    </div>
                    <div className='description'>
                      <h5 className='info-title'>Built Audience</h5>
                      <p className='description'>
                        There is also a Fully Customizable CMS Admin Dashboard
                        for this product.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className='mr-auto' md='6' lg='4'>
                  <Card className='card-signup'>
                    <CardBody>
                      <CardTitle className='text-center' tag='h4'>
                        Register
                      </CardTitle>
                      <div className='social text-center'>
                        <Button
                          className='btn-icon btn-round mr-2'
                          color='facebook'
                        >
                          <i className='fab fa-facebook'></i>
                        </Button>
                        <Button
                          className='btn-icon btn-round mr-2'
                          color='github '
                        >
                          <i className='fab fa-github'></i>
                        </Button>
                        <Button className='btn-icon btn-round' color='google'>
                          <i className='fab fa-google'></i>
                        </Button>{' '}
                        <Button className='btn-icon btn-round' color='twitter'>
                          <i className='fab fa-twitter'></i>
                        </Button>{' '}
                        <h5 className='card-description'>Register Here</h5>
                      </div>
                      <Form onSubmit={onFinish} className='form'>
                        <FormGroup>
                          <InputGroup
                            className={firstFocus ? ' input-group-focus' : ''}
                          >
                            <InputGroupAddon addonType='prepend'>
                              <InputGroupText>
                                <i className='now-ui-icons users_circle-08'></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{ width: '200px' }}
                              placeholder='Username'
                              name='username'
                              type='text'
                              onFocus={() => setFirstFocus(true)}
                              onBlur={() => setFirstFocus(false)}
                            ></Input>
                          </InputGroup>
                        </FormGroup>{' '}
                        <FormGroup>
                          <InputGroup
                            className={lastFocus ? ' input-group-focus' : ''}
                          >
                            <InputGroupAddon addonType='prepend'>
                              <InputGroupText>
                                <i className='now-ui-icons text_caps-small'></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{ width: '200px' }}
                              placeholder='Password'
                              type='password'
                              name='password  '
                              onFocus={() => setLastFocus(true)}
                              onBlur={() => setLastFocus(false)}
                            ></Input>
                          </InputGroup>
                        </FormGroup>{' '}
                        <FormGroup check>
                          <Label check>
                            <Input type='checkbox'></Input>
                            <span className='form-check-sign'></span>I agree to
                            the terms and{' '}
                            <a
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              conditions
                            </a>
                          </Label>{' '}
                          <Button
                            block
                            className='btn-round'
                            color='info'
                            size='lg'
                            type='submit'
                          >
                            Register
                          </Button>
                        </FormGroup>
                        <CardFooter className='text-center'></CardFooter>
                      </Form>{' '}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Register);
