import React, {Component, useState, useEffect} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';

const Projects = () => {
    
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const projListRef = ref(storage, "projects/");
    const uploadImage = () =>{
        if (imageUpload == null) return;

        const imageRef = ref(storage, `projects/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url)=>{
                setImageList((prev)=> [...prev, url]);
            });
        });
        
    };

    useEffect(() => {
        listAll(projListRef).then((response)=>{
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
                    <h4>Projects</h4>
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

export default Projects;