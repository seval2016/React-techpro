import React from 'react'
import data from "../../assets/data/students.json";
import {Table,Container} from 'react-bootstrap';

const Tablo = () => {
  return (
    <Container className='mt-5'>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>İsim</th>
          <th>yas</th>
          <th>Kurs</th>
          <th>Resim</th>
        </tr>
      </thead>
      <tbody>
         {
          data.map((item,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.isim}</td>
              <td>{item.yas}</td>
              <td>{item.kurs}</td>
              <td><img src={item.img} alt={item.isim} style={{ width: '50px', height: '50px' }} /></td>
            </tr>
          ))
         }
      </tbody>
    </Table>
    </Container>
   
  )
}

export default Tablo