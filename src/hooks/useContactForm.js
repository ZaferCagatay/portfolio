import { useCallback, useState } from 'react';
import emailjs from '@emailjs/browser';
import useAlert from '../utils/useAlert.js';
import { useLanguage } from '../context/LanguageContext.jsx';

export function useContactForm() {
  const { t } = useLanguage();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);

      const payload = {
        from_name: form.name,
        to_name: 'Zafer',
        from_email: form.email,
        reply_to: form.email,
        message: form.message,
      };

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          payload,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
        .then(
          () => {
            setLoading(false);
            showAlert({
              show: true,
              text: t(
                'Thank you for your message 😃',
                'Mesajın için teşekkürler 😃',
              ),
              type: 'success',
            });
            setTimeout(() => {
              hideAlert();
              setForm({ name: '', email: '', message: '' });
            }, 3000);
          },
          (error) => {
            setLoading(false);
            console.error(error);
            showAlert({
              show: true,
              text: t(
                "I didn't receive your message 😢",
                'Mesajın iletilemedi 😢',
              ),
              type: 'danger',
            });
          },
        );
    },
    [form, hideAlert, showAlert, t],
  );

  return { alert, form, handleChange, handleSubmit, loading };
}
