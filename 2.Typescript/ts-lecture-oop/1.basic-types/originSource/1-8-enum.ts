{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript

  // Point : enum대신에 union 원시 타입을 사용하자.
  // - typescript에서 enum은 union으로 대처 가능하다.
  // - 특별히, enum의 실제 value값인, 0부터 N으로 맞춰야 하는 인터페이스가 있지 않는 한.

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday, // 0부터 시작하는 값이 들어감, 1부터 시작을 하도록 대입 가능, 문자열값 대입 가능
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // 문제 : Enum 타입임에도, 컴파일 애러가 발생하지 않는다.
  console.log(day);

  // 문제 해결을 위해, union을 사용하자.
  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
