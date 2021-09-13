import baseService from "./base-service";

//스톤 만들기
export async function createStone(args) {
    try{
        await baseService.post('/stones', args);
    } catch (e) {
        console.error('!', e.response);
    }
}

//자기 이메일에 있는 모든 스톤 가져오기
export async function getMyAllStone(email) {
    return email && (await baseService.get(`/stones/${email}`)).data
}

//stoneId에 맞는 원석 가져오기 - 이건 안써도 되긴함
export async function getStone(stoneId) {
    try{
        const result = await baseService.get(`/stones/${stoneId}`);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }

}
