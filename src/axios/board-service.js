import baseService from "./base-service";

//게시글 생성
export async function createBoard(args) {
  try{
    await baseService.post('/boards', args);
  } catch (e) {
    console.error('!', e.response);
  }
}
//업데이트 보드
export async function updateBoard(boardId, token, args) {
  args.enctype='multipart/form-data';
  try{
    await baseService.patch(`/boards/${boardId}`, args,{
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      }
    });
  } catch (e) {
    console.error('!', e.response);
  }
}

//게시글 삭제
export async function deleteBoard(boardId) {
  console.log(boardId)
  try{
    await baseService.delete(`/boards/${boardId}`,{
      headers: {
        // 'Content-Type': 'multipart/form-data',
        // 'Authorization': `Bearer ${token}`,
      }
    });
  } catch (e) {
    console.error('!', e.response);
  }
}

//아이디 해당 게시글 가져오기
export async function getBoard(email) {
  console.log(email)
  return email && (await baseService.get(`/boards/${email}`)).data
}

//모든 게시글 가져오기
export async function getAllBoards() {
  try{
    const result = await baseService.get(`/boards`);
    return result.data;
  } catch (e) {
    console.error('!', e.response);
  }

}
