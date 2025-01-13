import { Request as EnumRequest } from '@/enums/request';
import { API_URL, HEADERS } from '@/data/constants';

const baseRequestUrl = `${API_URL}/tags`;

export const tagsGet = async () => {
  try {
    const request = new Request(baseRequestUrl, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
      cache: 'no-store',
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get tags):', error);
    throw error;
  }
};

export const tagGet = async (params: {
  tagId: string;
  options?: { cache?: RequestCache };
}) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.tagId}`, {
      method: EnumRequest.GET,
      credentials: 'include',
      headers: HEADERS.WITHOUT_BODY,
      cache: params.options?.cache,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get tag):', error);
    throw error;
  }
};
