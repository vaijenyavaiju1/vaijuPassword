// Write your code here
import {useState} from 'react'
import {
  DivCon,
  DivAgain,
  HeadingCon,
  ParaCon,
  InputCon,
  InputDiv,
  PassText,
} from './styledComponents'

const PasswordValidator = () => {
  const [input, userInput] = useState('')

  const onChangeInput = event => {
    userInput(event.target.value)
  }

  const one =
    input.length >= 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <DivCon>
      <DivAgain>
        <HeadingCon>Password Validator</HeadingCon>
        <ParaCon>Check how strong and secure is your password</ParaCon>
        <InputDiv>
          <InputCon onChange={onChangeInput} value={input} type="password" />
        </InputDiv>
        <PassText>{one}</PassText>
      </DivAgain>
    </DivCon>
  )
}
export default PasswordValidator
