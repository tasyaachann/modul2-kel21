import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display : inline-block;
background-color: #f2f2f2;
border-radius: 15px;
box-shadow: 0px 0px 5px grey;
color: #d4cac7;
width: 30px 40px;
padding : 0 25px 25px;
margin 130px;
`
const Image = styled.img`

  border-radius: 100%;
  padding: 5px;
  width: 150px;
  height: 150px;
  margin: 15px;
  
`
const Title = styled.h5`
  margin: auto;
  color:black;
  height: 15px
  font-size:12px
`

const SelectKelas = styled.select`
	font-size: 12px;
	line-height: 1.3;
	padding: .3em 1em;
  width: 70%;
  border-radius: 3px;
  box-shadow: 0px 0px 3px grey;
	background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    margin: 15px
`

const Rowcard = styled.div
`
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
`

const ColumnCard = styled.div
`
    display: table-cell;
    text-align: center;

`

function CardInfo(props){
    return(
        <div>
            <Image src={props.src}/><br/>
            <a>{props.nama}</a><br/>
            <a>{props.nim}</a>
        </div>

    )
}


export default function index() {
  return (

      <Rowcard>
          <ColumnCard>
          <Container>
            <Title>
                <CardInfo nama="Farhan Mazario" nim="21120117140005" src="https://i.pinimg.com/originals/05/c2/8c/05c28c67b1c89c1b86264eee92a928e7.jpg"/>
            </Title>
            <SelectKelas>
                <option value="0">Kelas</option>
                <option value="1">Kelas A</option>
                <option value="2">Kelas B</option>
                <option value="3">Kelas C</option>
            </SelectKelas>
            </Container>
          </ColumnCard>
          <ColumnCard>
          <Container>
            <Title>
                <CardInfo nama="Tasya Chandra Icha P" nim="21120117130059" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2HrsmKt_f1L97tVaqSeVP8H36pKyAsjvvA&usqp=CAU"/>
            </Title>
            <SelectKelas>
                <option value="0">Kelas</option>
                <option value="1">Kelas A</option>
                <option value="2">Kelas B</option>
                <option value="3">Kelas C</option>
            </SelectKelas>
            </Container>
          </ColumnCard>
      </Rowcard>
    
  );
}