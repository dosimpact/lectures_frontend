import {checkPassword} from '../checkPassword'

[ 
  {password: '123456'}, // 0 validation ok. {"password":"123456"}
  {password: '1234'}, // 1 validation fail. ["Password must have more than 6 characters"]
  {}, /* 2 validation fail. ["Password can not be null","Password must have more than 6 characters"] */
  {pa: '123456'} /* 3 validation fail. ["Password can not be null","Password must have more than 6 characters"] */
]
  .forEach((target, index) => {
    const [value, failureReson] = checkPassword(target)
    if(failureReson)
      console.log(index, 'validation fail.', JSON.stringify(failureReson))
    else
      console.log(index, 'validation ok.', JSON.stringify(value))
  })
