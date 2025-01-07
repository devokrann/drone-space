import { API_URL, HEADERS } from '@/data/constants';
import { EmailInquiry } from '@/types/email';
import { Request as EnumRequest } from '@repo/enums';
import { contactCreate } from './contact';

const baseRequestUrl = `${API_URL}/email`;

export const emailSend = async (
  options: Omit<EmailInquiry, 'to'> & {
    phone: string;
    message: string;
    company: string;
    newsletter: boolean;
  }
) => {
  try {
    const request = new Request(baseRequestUrl, {
      method: EnumRequest.POST,
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(options),
    });

    const response = await fetch(request);

    if (options.newsletter) {
      await contactCreate({
        params: { ...options.from, company: options.company },
        options: { notify: false },
      }); // add contact to audience
    }

    return response;
  } catch (error) {
    console.error('---> handler error - (send email):', error);
    throw error;
  }
};
