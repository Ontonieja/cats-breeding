'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'donotreply@samoszczescie.pl',
      to: ['samo.szczesciepl@gmail.com'],
      subject: 'Nowa wiadomośc ze strony Samo Szczęście!',
      text: message,
      reply_to: senderEmail,
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
