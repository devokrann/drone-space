import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';
import { ReplyCommentCreate } from '@/types/bodies/request';
import { ReplyUpdate } from '@/types/models/reply';

const baseRequestUrl = `${API_URL}/replies/comment`;

export const repliesCommentGet = async (params: { commentId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.commentId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get comment replies):', error);
    throw error;
  }
};

export const replyCommentCreate = async (requestBody: ReplyCommentCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${requestBody.commentId}`, {
      method: EnumRequest.POST,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(requestBody),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create comment reply):', error);
    throw error;
  }
};

export const replyCommentUpdate = async (
  requestBody: Omit<ReplyUpdate, 'id'> & { id: string }
) => {
  try {
    const request = new Request(`${baseRequestUrl}/${requestBody.id}`, {
      method: EnumRequest.PUT,
      credentials: 'include',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(requestBody),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update comment reply):', error);
    throw error;
  }
};

export const replyCommentDelete = async (params: { replyId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.replyId}`, {
      method: EnumRequest.DELETE,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete comment reply):', error);
    throw error;
  }
};
