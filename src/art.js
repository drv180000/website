import React, {Component, useState, useEffect} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';

const Art = () => {
    
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const artListRef = ref(storage, "art/");

    const uploadImage = () =>{
        if (imageUpload == null) return;

        const imageRef = ref(storage, `art/${imageUpload.name + v4() }`);
        
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url)=>{
                setImageList((prev)=> [...prev, url]);
            });
        });
        
    };

    useEffect(() => {
        listAll(artListRef).then((response)=>{
            response.items.forEach((item) =>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=> [...prev, url]);
                })
            })
        })
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <br></br>
                    <h4>Art</h4>
                    {imageList.map((url)=>{
                        return <img src={url}/>
                    })}
                </Col>
            </Row>



            <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
            <Button as="input" type="submit" value="Submit" onClick={uploadImage}/>

        </Container>

        
    );
};

export default Art;