import React, {Component, useState, useEffect} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { storage, txtDB } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, getDocs } from "firebase/firestore";
import {v4} from 'uuid';

const Art = () => {
    
    const [txt,setTxt] = useState('')
    const [img,setImg] = useState('')
    const [data,setData] = useState([])

    const handleUpload = (e) =>{
        console.log(e.target.files[0])
        const imgs = ref(storage,`art/${v4()}`)
        uploadBytes(imgs,e.target.files[0]).then(data=>{
            console.log(data,"imgs")
            getDownloadURL(data.ref).then(val=>{
                setImg(val)
            })
        })
    }

    const handleClick = async () =>{
            const valRef = collection(txtDB,'txtData')
            await addDoc(valRef,{txtVal:txt,imgUrl:img})
            alert("Data added successfully")
    }

    const getData = async () =>{
        const valRef = collection(txtDB,'txtData')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData)
        console.log(dataDb)
    }

    useEffect(()=>{
        getData()
})
    console.log(data,"datadata")

    return(
        <Container>
            
                
                    {
                        data.map(value=>
                            <Row className='align-items-center'>
                                <Col>
                                    <img src={value.imgUrl}/> 
                                </Col>
                                <Col>
                                    <figcaption>{value.txtVal}</figcaption>
                                </Col>
                            </Row>
                        )
                    }
                
            
            <input placeholder='Image Description' onChange={(e)=>setTxt(e.target.value)} /><br/>
            <input type="file" onChange={(e)=>handleUpload(e)} /><br/><br/>
            <Button onClick={handleClick}>Submit</Button>
        </Container>
    )
}

export default Art;