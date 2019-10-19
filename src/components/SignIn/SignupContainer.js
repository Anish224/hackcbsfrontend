import React, { Component } from 'react';
import { Button } from 'antd';
import { Typography } from 'antd';
import { Card } from 'antd';
import image from '../../images/doctor.png'
const { Meta } = Card;

const { Title } = Typography;


class SignupContainer extends Component{
    render(){
        return(
            <div style = {{textAlign: "center", backgroundColor:"#ECF4DC",height:"100vh"}}>
                
                <Title type="flex" style={{justifyContent:"center", alignContent:"center"}}>Enter Your Occupation</Title>
                
                <Card
                    hoverable
                    style={{ marginTop:"150px", width: 240,marginLeft:"780px",borderRadius:"25px",boxShadow:"2px 3px #888888"}}
                    cover={<img style={{height: "100px", width:"100px",marginLeft:"75px",marginTop:"10px"}}alt="example" src={image} />}
                >
                    <Meta title="Patient" />
            </Card>
                
                <br/>
                <Card
                    hoverable
                    style={{ marginTop:"50px", width: 240,marginLeft:"780px",borderRadius:"25px",boxShadow:"2px 3px #888888"}}
                    cover={<img style={{height: "100px", width:"100px",marginLeft:"75px",marginTop:"10px"}}alt="example" src={image} />}
                >
                    <Meta title="Doctor" />
            </Card>
            </div>
        );
    }








}

export default SignupContainer;