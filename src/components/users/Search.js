import React from 'react';
import { Input, Row, Col, Radio, Table } from 'antd';
import Details from './Details';

const { Search } = Input;

class SearchUser extends React.Component {
  state = {
    value: 'userId',
  };
  onChange = (e) => {
    this.setState({
      value: e.target.value,
      loading: false,
      dataSource: [],
      columns: [],
      selectedUser: null,
    });
  };
  render() {
    const { value } = this.state;
    const options = [
      { label: 'User Id', value: 'userId' },
      { label: 'Email', value: 'email' },
      { label: 'Phone Number', value: 'phoneNumber' },
    ];
    let searchText = `Search for ${options.find((a) => a.value === this.state.value).label}`;

    return (
      <Row>
        <Col span={12} type="flex" justify="center" align="middle" style={{ paddingBottom: '20px' }}>
          <Radio.Group options={options} onChange={this.onChange} value={value} style={{ paddingBottom: '15px' }} />
          <Search
            loading={this.state.loading}
            placeholder={searchText}
            enterButton="Search"
            size="large"
            onSearch={(value) => {
              this.setState({ loading: true });

              setTimeout(() => {
                this.setState({
                  loading: false,
                  dataSource: [
                    {
                      key: '1',
                      id: 1,
                      name: 'Big Mike',
                      age: 32,
                      function: 'Adult',
                    },
                    {
                      key: '2',
                      id: 2,
                      name: 'Lil John',
                      age: 14,
                      function: 'Child',
                    },
                  ],
                  columns: [
                    {
                      title: 'Name',
                      dataIndex: 'name',
                      key: 'name',
                      render: (id, user) => {
                        return <a onClick={() => this.setState({ selectedUser: user })}>{user.name}</a>;
                      },
                      width: 150,
                    },
                    {
                      title: 'Age',
                      dataIndex: 'age',
                      key: 'age',
                    },
                    {
                      title: 'Function',
                      dataIndex: 'function',
                      key: 'function',
                    },
                  ],
                });
              }, 1500);
            }}
          />
        </Col>
        <Col span={24} style={{ paddingBottom: '20px' }}>
          <Table dataSource={this.state.dataSource} columns={this.state.columns} loading={this.state.loading} pagination={false} />
        </Col>
        <Col span={24}>{this.state.selectedUser && <Details user={this.state.selectedUser} />}</Col>
      </Row>
    );
  }
}
export default SearchUser;
