import React, { Component } from 'react';
import {
  Card, CardText, CardBody,CardImg,
  CardTitle
} from 'reactstrap';
import dateFormat from 'dateformat'; 
class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }
 
  render() {
    const menu = this.props.staffs.map((staff) => {
      return (<>
        <div className="col-12 col-md-6 col-lg-4 item">
          <Card key={staff.id}
            onClick={() => this.onDishSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
            <CardImg src={ staff.image} alt={staff.name} />
          </Card>
        </div>
        </>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
          <div className='change'>
             <CardTitle> Bấm vào nhân viên để xem thông tin.</CardTitle>
          </div>
        </div>
        
      </div>
    );
  }
}

export default StaffList;