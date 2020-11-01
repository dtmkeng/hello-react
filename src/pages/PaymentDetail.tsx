import React from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
    className: 'flex mt-10 mr-32 ml-32'
})`
`

const SubContainer  = styled.div.attrs({
    className: 'w-1/2 rounded-l-lg mt-4 ml-4'
})`
    background: white;
`

const FormPaymentContainer = styled.div.attrs({
    className: 'w-1/2 p-16 rounded-r-lg mt-4 mr-4'
})`
    background: white;
`

const Title = styled.h1.attrs({
    className: 'text-3xl font-semibold tracking-wider'
})``


const CaditCardButton = styled.button.attrs({
    className: 'text-sm w-1/5 py-1 rounded-lg font-semibold'
})`
    background: #A069A0;
    color: white;
`

const PayPalButton = styled.button.attrs({
    className: 'text-sm w-1/5 py-1 rounded-lg font-semibold m-5'
})`
    background: #C5B8C7;
    color: white;
`

const LabelInput = styled.label.attrs(props => ({
    className: 'text-sm',
}))`
    color: #C5B8C7;
`
const InputField = styled.input.attrs({
    className: 'leading-tight focus:outline-none'
})``

const InputContainer = styled.div.attrs({
    className: 'flex flex-col  border-b py-2'
})``

const FormContainer = styled.div.attrs({
    className: 'flex flex-col'
})``

const InputContainerAglie = styled.div.attrs({
    className: 'flex justify-between'
})``

const InputContainerAglieNear = styled.div.attrs({
    className: 'flex justify-start'
})``

const ImageField = styled.img.attrs({
    className: 'w-12',
    src: 'https://p.kindpng.com/picc/s/96-966614_visa-mastercard-and-american-express-for-international-visa.png'
})``

const SpaceBeteenInput = styled.div.attrs({
    className: 'w-3'
})``


const RadioInput = styled.input.attrs({
    className: 'mt-3',
    type: 'radio',
    value: 'Remember my card info'
})``


const PurchaseButton = styled.button.attrs({
    className: 'text-sm w-1/2 py-1 rounded-lg font-semibold mt-5'
})`
    background: #A069A0;
    color: white;
`

const LabelInputRadio = styled.label.attrs(props => ({
    className: 'text-sm pt-2 ml-2',
}))`
    color: #C5B8C7;
`

const PaymentDetail = () => {
    return( 
        <>
            <Container>
                <SubContainer>
                    IMAGE
                </SubContainer>
                <FormPaymentContainer>
                    <Title>PAYMENT DETAIL</Title>
                    <CaditCardButton>Credit Card</CaditCardButton>
                    <PayPalButton>PayPal</PayPalButton>
                    <FormContainer>
                        <InputContainer>
                            <LabelInput>Cardholder Name</LabelInput>
                            <InputField name="cardholder-name"/>
                        </InputContainer>
                        <InputContainer>
                            <LabelInput>Card Number</LabelInput>
                            <InputContainerAglie>
                                <InputField name="card-number"/>
                                <ImageField/>
                            </InputContainerAglie>
                        </InputContainer>
                        <InputContainerAglieNear>
                            <InputContainer>
                                <LabelInput>Experation Date</LabelInput>
                                <InputField name="cardholder-name"/>
                            </InputContainer>
                            <SpaceBeteenInput/>
                            <InputContainer>
                                <LabelInput>CVV</LabelInput>
                                <InputField 
                                    name="cardholder-name" 
                                    type="password"
                                />
                            </InputContainer>
                        </InputContainerAglieNear>
                        <InputContainerAglieNear>
                            <RadioInput/> 
                            <LabelInputRadio>Remember my card info</LabelInputRadio>
                        </InputContainerAglieNear>
                        <PurchaseButton>PURCHASE</PurchaseButton>
                    </FormContainer>
                </FormPaymentContainer>
            </Container>
        </>
    );
}

export default PaymentDetail;