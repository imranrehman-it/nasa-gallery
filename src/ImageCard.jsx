import React from "react";
import styled from "styled-components";

function ImageCard(image) {
  return (
    <div>
      <SectionTitle>Category</SectionTitle>
      <Card>
        <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/main_image_deep_field_smacs0723-5mb.jpg"></img>
        <Detail>
          <TitleBar>
            <h3>Eye of storm</h3>
            <Button>
              <text>Learn more</text>
            </Button>
          </TitleBar>
        </Detail>
      </Card>
    </div>
  );
}

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;
gap: 24px;
width: 267px;
height: 360px;
background: #253341;
border-radius: 10px;

img{
    width: 267px;
    height: 259px;
    border-radius: 5px;
    object-fit: cover;


}

  }
`;

const SectionTitle = styled.h1`
  font-family: "Inter";
  font-size: 34px;
  line-height: 120%;
  /* identical to box height, or 41px */

  color: #ffffff;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 260px;
  height: 100%;
`;

const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  width: 260px;
  height: 19px;

  h3 {
    color: white;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2px 0px 0px;
  gap: 32px;

  width: 260px;
  height: 33.73px;
`;

const Button = styled.div`
   {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 99px;
    height: 32px;

    background: #1d9bf0;
    border-radius: 10px;

    text {
        color:white;
        font-weight:bold;
    }
    }
  }
`;
export default ImageCard;
