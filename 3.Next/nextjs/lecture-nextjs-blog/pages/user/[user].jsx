import { useRouter } from "next/router"; 
// query parameter 을 사용하기 위해 next의 router 패키지의 useRouter를 가져온다.

const User = () => {
  const router = useRouter();
  // router의 url 쿼리에 존재하는 user 의 값을 가져온다. 이는 [user].jsx의 user와 대응된다.
  console.log(router.query);
  const { user,age } = router.query;

  return <h3>사용자 이름: {user} 나이 : {age}</h3>;
};

export default User;