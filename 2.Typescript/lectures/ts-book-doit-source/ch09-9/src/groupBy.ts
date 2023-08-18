import * as R from 'ramda'

type IStudent = {name: string, score: number }

const byGrade = R.groupBy((student: IStudent) => {
  const score = student.score;
  return score < 65 ? 'F' :
         score < 70 ? 'D' :
         score < 80 ? 'C' :
         score < 90 ? 'B' : 'A';
})
const students = [{name: 'Abby', score: 84},
                {name: 'Eddy', score: 58},
                // ...
                {name: 'Jack', score: 69}]
const result = byGrade(students)

console.log(result)
/*
{
  B: [ { name: 'Abby', score: 84 } ],
  F: [ { name: 'Eddy', score: 58 } ],
  D: [ { name: 'Jack', score: 69 } ] 
}
*/
