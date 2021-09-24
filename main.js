let str = `
010-1234-1244
thedw@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbccccdddd
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
한굴
다찾음
_
`

// new RegExp('the(찾으려는 단어)', '[플레그]')
// 플레그에 g를 넣으면 대소문자 구별하여 정확한 단어만 찾음.
// 플레그에 gi를 넣으면 대소문자를 모두 포함한 단어를 찾음.
// 생성자
// const regexp = new RegExp('the', 'gi')   
// 리터럴
// const regexp = /the/gi 

// match를 사용하여 str에 있는 데이터 중 정규식에 해당하는 것들만 Array로 반환함.
// console.log(str.match(regexp))
// console.log(str.search(regexp))


// let 키워드로 변수를 만들어서 재할당이 가능하게 함.
// const regexp = /fox/gi
// console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)


// the를 str 전체에서 찾는데 대소문자 구별없이 찾는다.
// const regexp = /the/gi

// .를 찾고 싶을 때 이스케이프 문자로 \를 적어준다.
// $ 데이터의 마지막 인덱스
// m 데이터에 있는 enter로 줄바꿈이 된 경우
// const regexp = /\.$/gim
// console.log(
//     str.match(regexp)
// )


// 백틱기호 바로 앞에 있는 줄을 기준으로 봄 $
// console.log(
//     str.match(/d$/gm)
// )


// console.log(
//     str.match(/^t/gmi)
// )

// console.log(
//     str.match(/./g)
// )

// console.log(
//     str.match(/h..p/g)
// )

// console.log(
//     str.match(/fox|dog/g)
// )

// console.log(
//     str.match(/https?/g)
// )

// console.log(
//     str.match(/d{2}/g)
// )

// console.log(
//     str.match(/\b\w{2,3}\b/g)
// )

// console.log(
//     str.match(/[fox]/g)
// )

// console.log(
//     str.match(/[0-9]{1,}/g)
// )

// console.log(
//     str.match(/[가-힣]{1,}/g)
// )

// console.log(
//     str.match(/\w/g)
// )

// 소문자 f로 시작하는 모든 단어를 찾음.
console.log(
    str.match(/\bf\w{1,}/g)
)

