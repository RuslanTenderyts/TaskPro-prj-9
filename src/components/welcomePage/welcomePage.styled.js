import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 375px;
  min-height: 100%;
  padding-left: 20px;
  padding-right: 20px;

  /* border: solid 1px red; */

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Images = styled.img`
  width: 124px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 162px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: #161616;
  font-size: 28px;
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: -1.12px;
  margin: 0;
`;

export const Text = styled.p`
  width: 335px;
  text-align: center;
  font-size: 14px;
  font-family: 'Poppins';
  line-height: 18px;
  letter-spacing: 1.28;
  margin-top: 0;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    width: 473px;
  }
`;

export const Button = styled.button`
  text-align: center;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: 1.28;
  color: white;
  margin-bottom: 14px;

  width: 335px;
  padding: 14px 0px;
  border: none;
  border-radius: 8px;
  background: #161616;
`;

export const ButtonLogIn = styled.button`
  text-align: center;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: 1.28;

  background: transparent;
  border: none;
`;
