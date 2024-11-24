import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import useAlert from '../utils/useAlert.js';
import Alert from '../components/Alert.jsx';
import { contactTexts } from '../constants/index.js';
import { useLanguage } from '../context/LanguageContext.jsx';

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Zafer',
          from_email: form.email,
          to_email: 'zafercagatayumut@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: t(
              'Thank you for your message 😃',
              'Mesajın için teşekkürler 😃'
            ),
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: t(
              "I didn't receive your message 😢",
              'Mesajın iletilemedi 😢'
            ),
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute insent-0 min-h-[110%]"
        />

        <div className="contact-container relative z-10">
          <h3 className="head-text">
            {t(contactTexts[0].headtext, contactTexts[0].headtextTR)}
          </h3>
          <p className="text-lg text-white-600 mt-3">
            {t(contactTexts[0].subtext, contactTexts[0].subtextTR)}
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">
                {t(
                  contactTexts[0].formConstants[0].label,
                  contactTexts[0].formConstants[0].labelTR
                )}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t(
                  contactTexts[0].formConstants[0].placeholder,
                  contactTexts[0].formConstants[0].placeholderTR
                )}
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">
                {t(
                  contactTexts[0].formConstants[1].label,
                  contactTexts[0].formConstants[1].labelTR
                )}
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t(
                  contactTexts[0].formConstants[1].placeholder,
                  contactTexts[0].formConstants[1].placeholderTR
                )}
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">
                {t(
                  contactTexts[0].formConstants[2].label,
                  contactTexts[0].formConstants[2].labelTR
                )}
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={t(
                  contactTexts[0].formConstants[2].placeholder,
                  contactTexts[0].formConstants[2].placeholderTR
                )}
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading
                ? t(
                    contactTexts[0].buttonSendingText,
                    contactTexts[0].buttonSendingTextTR
                  )
                : t(contactTexts[0].buttonText, contactTexts[0].buttonTextTR)}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
