import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from './../components/styles';

const Welcome =({navigation})=> {
    return(
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/loginImg.png')}/>
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome! Traveler</PageTitle>
                    <SubTitle welcome={true}>Hwi Un</SubTitle>
                    <SubTitle welcome={true}>2010019@handong.edu</SubTitle>
                    
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/img/loginImg.png')}/>
                        <Line/>
                        <StyledButton onPress={()=>{navigation.navigate('Login')}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>

            </InnerContainer>
        </>
    );
}

export default Welcome;