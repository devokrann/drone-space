import { API_URL, HEADERS } from '@/data/constants';
import { Request as EnumRequest } from '@/enums/request';
import { FormInquiryValues } from '@/hooks/form/inquiry';

const baseRequestUrl = `${API_URL}/inquiry`;

export const handleInquiry = async (
  formData: FormInquiryValues,
  recipient: string
) => {
  try {
    const request = new Request(baseRequestUrl, {
      method: EnumRequest.POST,
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify({ ...formData, recipient }),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (send inquiry):', error);
    throw error;
  }
};
