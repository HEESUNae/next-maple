// 헤더 설정하기
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-nxopen-api-key", process.env.API_KEY as string);

// 현재 날짜
const TODAY = `${new Date().getFullYear()}-${String(new Date().getMonth()).padStart(2,'0')}-${String(new Date().getDay()).padStart(2,'0')}`;

export {
    myHeaders,
    TODAY
}