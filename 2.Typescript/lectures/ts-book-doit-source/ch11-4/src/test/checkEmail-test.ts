import {checkEmail} from '../checkEmail'

[
  {email: 'abc@efg.com'}, // 0 validation ok. {"email":"abc@efg.com"}
  {email: 'abcefg'}       // 1 validation fail. ["invalid email address"]
].forEach((target, index) => {
  const [value, failureReson] = checkEmail(target)
  if(failureReson)
    console.log(index, 'validation fail.', JSON.stringify(failureReson))
  else
    console.log(index, 'validation ok.', JSON.stringify(value))
})