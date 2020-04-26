import React from 'react';
import { Descriptions, Badge } from 'antd';
class Details extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Name">Big Mike</Descriptions.Item>
          <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
          <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
          <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
          <Descriptions.Item label="Usage Time" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="success" text="Paid" />
          </Descriptions.Item>
        </Descriptions>

        <Descriptions title="User Comments" bordered style={{ marginTop: '30px' }}>
          <Descriptions.Item label="Action">Discount</Descriptions.Item>
          <Descriptions.Item label="Discount Amount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Description">User Had a problem with the app, so we gave him a $20.00 discount</Descriptions.Item>
        </Descriptions>
      </React.Fragment>
    );
  }
}
export default Details;
