/*!

=========================================================
* Now UI Dashboard PRO React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from 'reactstrap';

// core components
import PanelHeader from 'components/PanelHeader/PanelHeader.js';

import { theadProvider, tbodyProvider, thead, tbody } from 'variables/general';

class ProviderProfile extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size='sm' />
        <div className='content'>
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag='h4'>Provider List</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className='text-primary'>
                      <tr>
                        {theadProvider.map((prop, key) => {
                          if (key === theadProvider.length - 1)
                            return (
                              <th key={key} className='text-right'>
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tbodyProvider.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                  <td key={key} className='text-right'>
                                    {prop}
                                  </td>
                                );
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ProviderProfile;
