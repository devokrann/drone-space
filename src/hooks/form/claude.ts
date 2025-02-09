import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux';
import { useForm } from '@mantine/form';
import { sendPrompt } from '@/services/api/claude';
import { showNotification } from '@/utilities/notifications';
import { updateConversation } from '@/libraries/redux/slices/claude';
import { Variant } from '@/enums/notification';

export const useFormClaude = (params: {
  query?: string;
  regenerating?: boolean;
  automatic?: boolean;
}) => {
  const [submitted, setSubmitted] = useState(false);
  const conversation = useAppSelector((state) => state.claude.value);
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: { content: params.query || '' },
    validate: {
      content: (value) => !params.regenerating && value.trim().length < 1,
    },
  });

  const parseValues = () => {
    return form.values.content.trim();
  };

  const handleSubmit = async () => {
    if (form.isValid()) {
      try {
        setSubmitted(true);

        const result = await sendPrompt({
          content: parseValues(),
          conversation,
        });

        if (!result) {
          showNotification({
            variant: Variant.FAILED,
            title: 'Server Unavailable',
            desc: `There was no response from the server.`,
          });
        } else {
          // add latest exchange to context
          if (!params.regenerating) {
            dispatch(
              updateConversation([
                ...conversation,
                { role: 'user', content: parseValues() },
                { role: result.role, content: result.content[0].text },
              ])
            );
          } else {
            if (conversation.length > 0) {
              if (conversation[conversation.length - 1].role == 'assistant') {
                dispatch(
                  updateConversation(
                    conversation
                      .filter(
                        (t) =>
                          t.content !=
                          conversation[conversation.length - 1].content
                      )
                      .concat({
                        role: result.role,
                        content: result.content[0].text,
                      })
                  )
                );
              } else {
                dispatch(
                  updateConversation(
                    conversation.concat({
                      role: result.role,
                      content: result.content[0].text,
                    })
                  )
                );
              }
            }
          }
        }
      } catch (error) {
        showNotification({
          variant: Variant.FAILED,
          title: 'Prompt Failed',
          desc: 'Could not generate response.',
        });

        console.error('---> hook error (send prompt):', error);
      } finally {
        if (!params.automatic) {
          form.reset();
        }

        setSubmitted(false);
      }
    }
  };

  return { form, submitted, handleSubmit };
};
