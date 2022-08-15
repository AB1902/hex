import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Row, Col,Card,Typography} from 'antd'
import 'antd/dist/antd.css'
const Data = () => {

    const [det,setDet]=useState([])
    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };
    
    useEffect(() => {
        const callApi=async() => {
            const res=await axios.get("/data")
            setDet(res.data)
        }
        callApi()
    },[] )

    det.length>0?console.log(det):console.log()

    var display= det.map((i) => {
        return(
            
                
                
                <div>
                    
                    <Col xs={{ span: 24, order: 2 }} xl={{ span: 8, order: 1}}>
                        <Card
                        hoverable
                        style={{ width: 280,border:'1px solid black',marginLeft:'5px',
                        marginTop:'15px',marginBottom:'20px',backgroundColor:'gray',opacity:'90%' }}
                        
                        id={i}
                                    
                        >
                        <Typography>
                            <p>
                                <Typography.Title level={4} >Company:</Typography.Title>{i.company.name}
                                <Typography.Title level={5} >Tagline: </Typography.Title>{i.company.catchPhrase}
                                
                            </p>
                            <p>
                                <Typography.Title level={5} >Description</Typography.Title>{i.company.bs}
                            </p>
                        </Typography>
                        <Typography>
                            <p>
                            <Typography.Title level={5} >Owner:</Typography.Title>{i.name}
                            </p>
                        </Typography>
                        
                            <div>
                                <Typography >
                                    <p>
                                    <Typography.Title level={5}>UserName:</Typography.Title>    {i.username}
                                    </p>
                                </Typography>
                                <Typography >
                                    <p>
                                       <Typography.Title level={5}>Email: </Typography.Title> {i.email}
                                    </p>
                                </Typography>
                                <Typography >
                                    <p>
                                        <Typography.Title level={5}>Phone: </Typography.Title>{i.phone}
                                    </p>
                                </Typography>
                                <Typography >
                                    <p>
                                        <Typography.Title level={5} >Website: </Typography.Title>{i.website}
                                    </p>
                                </Typography>
                                <Typography >
                                    <p>
                                        <Typography.Title level={5} >Address: </Typography.Title>{i.address.suite+", " +i.address.street+", " +i.address.city+", "+i.address.zipcode+", "+i.address.geo.lat+" "+i.address.geo.lng}
                                    </p>
                                </Typography>
                            
                            </div>
                                

                        </Card> 
                    </Col>
                    
                </div>

        )
    })

  return (
    <div>
        <Typography.Title level={4} style={{marginLeft:'550px',marginTop:'40px'}} > Hexadecimal Task </Typography.Title>
            {
                <Row  style={{width:'1200px',marginTop:' 40px',marginLeft:'60px',display:'flex'}} >
                    
                    {display}
                </Row>
            
            }
       
        
    </div>
  )
}

export default Data


// var finalList=adminToken.map((i) => {
//     return(
        // <Col className="gutter-row" span={6}>
        //     <Link to={`/${i}`} >
        //         <Card
        //             hoverable
        //             style={{ width: 280 }}
        //             cover={<img alt="example" style={{height:'150px'}}  src={data.src} />}
        //             id={i}
                                
        //         >
        //         <Typography.Title level={4} > {data.title}  </Typography.Title>
        //             <div>
        //                 <Typography >
        //                     <p>
        //                         {data.subheading}
        //                     </p>
        //                 </Typography>
        //                 <Typography >
        //                     <p>
        //                         Token ID: {i}
        //                     </p>
        //                 </Typography>
        //                 </div>
                                
        //                 <div>
        //                 <a>click to view more</a>
        //                 </div>

        //                 </Card>
        //                 </Link>
        //                 </Col>
//     )
// })