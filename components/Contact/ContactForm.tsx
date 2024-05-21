'use client';

import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { sendEmail } from '@/services/emails/sendEmail';
import Button from '@/components/Base/Button/Button';

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const succes = await sendEmail(formData);
      setIsSuccess(succes);
      setIsError(!succes);
      setEmail('');
      setMessage('');
      setCharCount(0);
    } catch (e) {
      console.log(e);
      setIsSuccess(false);
      setIsError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          name="senderEmail"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          maxLength={100}
          className="border-2 w-full h-14 px-4 pl-10 rounded-3xl"
          required
          placeholder=" Twój email"
        ></input>
        <FaEnvelope className="absolute top-1 size-5 left-4 mt-4 text-gray-400" />
      </div>
      <div className="relative">
        <p className="absolute bottom-6 right-3 text-gray-400">
          {charCount}/500
        </p>
        <textarea
          name="message"
          maxLength={500}
          className="border-2 w-full px-4 my-3 h-44 rounded-3xl p-4 "
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setCharCount(e.target.value.length);
          }}
          placeholder="Jak możemy pomóc?"
        ></textarea>
      </div>
      <div>
        <Button
          buttonStyle="primary"
          type="submit"
          className="w-full my-4 hover:-translate-y-1 hover:shadow-xl"
        >
          Wyślij
        </Button>
        <div>{isSuccess && <p>Wiadomość została wysłana!</p>}</div>
        {isError && <p>Coś poszło nie tak, spróbuj ponownie</p>}
      </div>
    </form>
  );
}
